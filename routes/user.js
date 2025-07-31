const express = require("express");
const router = express.Router();
const passport = require("passport");
const { savedRedirectUrl } = require("../middelware.js");
const userController = require("../controllers/user.js");

router.route("/signup")
    .get(userController.renderSignup)
    .post(userController.signup);

router.route("/login")
    .get(userController.login)
    .post(
        savedRedirectUrl,
        passport.authenticate("local", {
            failureRedirect: "/login",
            failureFlash: true
        }),
        userController.renderlogin
    );

router.get("/logout", (req, res, next) => {
    req.logout(err => {
        if (err) return next(err);
        req.flash("success", "You have been logged out.");
        res.redirect("/listings");
    });
});

module.exports = router;
