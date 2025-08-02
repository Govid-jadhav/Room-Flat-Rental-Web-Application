const express = require("express");
const passport = require("passport");
const router = express.Router();
const userController = require("../controllers/user");

router
    .route("/signup")
    .get(userController.renderSignup)
    .post(userController.signup);

router
    .route("/login")
    .get(userController.renderLoginForm)
    .post(
        passport.authenticate("local", {
            failureFlash: true,
            failureRedirect: "/login"
        }),
        userController.login
    );
router.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if (err) return next(err);
        req.flash("success", "You have logged out successfully!");
        res.redirect("/listings"); // or wherever you want to go after logout
    });
});
module.exports = router;
