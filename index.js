if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}
const express = require("express");
const ejsMate = require("ejs-mate");
const app = express();
const mongoose = require("mongoose");

const path = require("path");
const methodOverride = require("method-override");
const listings = require("./routes/listing.js");
const reviewRoutes = require("./routes/review.js");
const bdurl = process.env.ATLASDB_URL;
// const MONGO_URL = "mongodb://127.0.0.1:27017/room";

const ExpressError = require("./utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("./schema.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const user = require("./routes/user.js");
// const { Session } = require("inspector/promises");
const multer = require("multer");
const { storage } = require("./cloudConfig");

// const upload = multer({ storage });

const User = require("./models/user.js");



// --- Self-healing Database & Middleware Initialization ---
const localDbUrl = "mongodb://127.0.0.1:27017/room";
let workingDbUrl = localDbUrl;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
    res.render("main");
});

async function initializeApp() {
    try {
        console.log("Attempting to connect to MongoDB Atlas...");
        await mongoose.connect(bdurl, { serverSelectionTimeoutMS: 5000 });
        workingDbUrl = bdurl;
        console.log("✅ Connected successfully to MongoDB Atlas database.");
    } catch (err) {
        console.warn("⚠️ MongoDB Atlas connection failed (likely SSL/Firewall/IP Whitelist issue).");
        console.warn("ℹ️ Falling back to Local MongoDB server...");
        try {
            await mongoose.connect(localDbUrl);
            workingDbUrl = localDbUrl;
            console.log("✅ Connected successfully to Local MongoDB.");
        } catch (localErr) {
            console.error("❌ Critical Error: Failed to connect to both Atlas and Local MongoDB.");
            console.error("Please ensure that your local MongoDB service is started (e.g. running 'mongod').");
            process.exit(1);
        }
    }

    // Initialize session store dynamically using working connection URL
    const store = MongoStore.create({
        mongoUrl: workingDbUrl,
        crypto: {
            secret: process.env.SECRET || "mysupersecretcode",
        },
        touchAfter: 20 * 3600,
    });

    store.on("error", (storeErr) => {
        console.log("Error in mongo session store:", storeErr);
    });

    const sessionOptions = {
        store: store,
        secret: "mysupersecretcode",
        resave: false,
        saveUninitialized: true,
        cookie: {
            httpOnly: true,
            expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
            maxAge: 1000 * 60 * 60 * 24 * 7
        }
    };

    app.use(session(sessionOptions));
    app.use(flash());

    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(new LocalStrategy(User.authenticate()));
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());

    app.use((req, res, next) => {
        res.locals.currentUser = req.user;
        res.locals.success = req.flash("success");
        res.locals.error = req.flash("error");
        next();
    });

    app.use("/listings", listings);
    app.use("/listings/:id/reviews", reviewRoutes);
    app.use("/", user);

    app.use((err, req, res, next) => {
        let { statusCode = 500, message = "something went wrong" } = err;
        res.status(statusCode).send(message);
    });

    app.use((err, req, res, next) => {
        console.error("🔥 ERROR:", err);
        if (res.headersSent) return next(err);
        req.flash("error", err.message);
        res.redirect("/listings");
    });

    const port = process.env.PORT || 8080;
    app.listen(port, () => {
        console.log(`server is listening to port ${port}`);
    });
}

initializeApp();