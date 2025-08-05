if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require("express");
const app = express();
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const multer = require("multer");

const listings = require("./routes/listing.js");
const reviewRoutes = require("./routes/review.js");
const userRoutes = require("./routes/user.js");

const { storage } = require("./cloudConfig");
const upload = multer({ storage }); // ✅ Uncommented multer

const ExpressError = require("./utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("./schema.js");
const User = require("./models/user.js");

const bdurl = process.env.ATLASDB_URL;
// const MONGO_URL = "mongodb://127.0.0.1:27017/room"; // ✅ Local DB (optional fallback)

// Database Connection
async function main() {
    await mongoose.connect(bdurl);
}
main()
    .then(() => console.log("✅ Connected to DB"))
    .catch((err) => console.log("❌ DB Connection Error:", err));

// App Configuration
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));

// Session Store
const store = MongoStore.create({
    mongoUrl: bdurl,
    crypto: { secret: process.env.SECRET },
    touchAfter: 24 * 3600,
});
store.on("error", (err) => {
    console.log("❌ Session store error:", err);
});

const sessionOptions = {
    store,
    secret: process.env.SECRET || "mysupersecretcode",
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        // secure: true, // ✅ Uncomment for production with HTTPS
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7, // 7 days
        maxAge: 1000 * 60 * 60 * 24 * 7,
    },
};

app.use(session(sessionOptions));
app.use(flash());

// Passport Configuration
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Flash + Current User Middleware
app.use((req, res, next) => {
    res.locals.currentUser = req.user || null;
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
});

// Landing Page Route
app.get("/", (req, res) => {
    res.render("main");
    // res.redirect("/listings"); // ✅ Previous fallback route
});

// Validation Middleware
const validateListings = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(e => e.message).join(",");
        throw new ExpressError(400, msg);
    } else {
        next();
    }
};

const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(e => e.message).join(",");
        throw new ExpressError(400, msg);
    } else {
        next();
    }
};

// Routes
app.use("/listings", listings);
app.use("/listings/:id/reviews", reviewRoutes);
app.use("/", userRoutes);

// Error Handling (custom)
app.use((err, req, res, next) => {
    console.error("🔥 ERROR:", err);
    if (res.headersSent) return next(err);
    req.flash("error", err.message || "Something went wrong");
    res.redirect("/listings");
});

// 404 Page
app.all("*", (req, res) => {
    res.status(404).render("404"); // ✅ Optional 404 view
});

// Server Start
app.listen(8080, () => {
    console.log("🚀 Server is running on port 8080");
});
