
const express = require("express");
const ejsMate = require("ejs-mate");
const app = express();
const mongoose = require("mongoose");

const path = require("path");
const methodOverride = require("method-override");
const listings = require("./routes/listing.js");
const reviewRoutes = require("./routes/review.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/room";

const ExpressError = require("./utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("./schema.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const user = require("./routes/user.js");
// const { Session } = require("inspector/promises");

const User = require("./models/user.js");



main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));


const sessionOptions = {
    secret: "mysupersecretcode",
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,             // Prevents client-side JS from accessing the cookie
        // secure: true,            // Uncomment in production with HTTPS
        expires: Date.now() + 1000 * 60 * 60 * 24 * 1, // 1 week
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
};

app.get("/", (req, res) => {
    res.send("Hi, I am root");
});



app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((e) => e.message).join(",");
        throw new ExpressError(404, errMsg);

    } else {
        next();
    }
};


const validateListings = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((e) => e.message).join(",");
        throw new ExpressError(404, errMsg);

    } else {
        next();
    }
};
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
});



app.use("/listings", listings);

app.use("/listings/:id/reviews", reviewRoutes);
app.use("/", user);



app.use((err, req, res, next) => {
    let { statusCode = 500, message = "someting went wrong" } = err;
    res.status(statusCode).send(message);
});


app.listen(8080, () => {
    console.log("server is listening to port 8080");
});
