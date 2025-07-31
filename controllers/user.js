const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");
const { savedRedirectUrl } = require("../middelware.js")
module.exports.signup = async (req, res) => {
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
};
module.exports.renderSignup = (req, res) => {
    res.render("users/signup"); // Make sure this path is correct
};
module.exports.renderlogin = (req, res) => {

    req.flash("success", `Welcome again, ${req.user.username}!`);
    const redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

module.exports.login = (req, res) => {
    res.render("users/login.ejs");
};