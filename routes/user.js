// routes/user.js
const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");
const { savedRedirectUrl } = require("../middelware.js")

// Render the signup page
router.get("/signup", (req, res) => {
    res.render("users/signup"); // Make sure this path is correct
});

router.post("/signup", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if (err) {
                return next(err);
            }
            req.flash("success", `Welcome, ${registeredUser.username}!`);
            res.redirect("/listings");
        });
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
});

router.get("/login", (req, res) => {
    res.render("users/login.ejs");
});
// Handle login form submission
router.post(
    "/login",
    savedRedirectUrl,
    passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash: true
    }),
    async (req, res) => {
        req.flash("success", `Welcome again, ${req.user.username}!`);
        res.redirect(res.locals.redirectUrl);
    }
);
//logout

const logoutUser = (req, res, next) => {
    req.logout(err => {
        if (err) return next(err);
        req.flash("success", "You have been logged out.");
        res.redirect("/listings");
    });
};

router.get("/logout", logoutUser);

module.exports = router;
