const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema } = require("../schema.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");

const reviewControllers = require("../controllers/reviews");

// Middleware to validate review input
const validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((e) => e.message).join(",");
        throw new ExpressError(404, errMsg);
    } else {
        next();
    }
};

// POST: Add a new review
router.post(
    "/",
    validateReview,
    wrapAsync(reviewControllers.postListing)
);

// DELETE: Remove a review
router.delete(
    "/:reviewId",
    wrapAsync(reviewControllers.deletelisting)
);

module.exports = router;
