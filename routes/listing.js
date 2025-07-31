const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js");
const { isLoggedIn, isOwner, validateListings } = require("../middelware.js");
const listingControllers = require("../controllers/listing.js");

router
    .route("/")
    .get(wrapAsync(listingControllers.index))
    .post(
        isLoggedIn,
        validateListings,
        wrapAsync(listingControllers.createlisting)
    );

router.get("/new",
    isLoggedIn,
    wrapAsync(listingControllers.renderNewForm)
);

router.get("/:id", wrapAsync(listingControllers.showListing));

router.get("/:id/edit",
    isLoggedIn,
    isOwner,
    wrapAsync(listingControllers.editListing)
);

router
    .route("/:id")
    .put(
        isLoggedIn,
        isOwner,
        validateListings,
        wrapAsync(listingControllers.updateListing)
    )
    .delete(
        isLoggedIn,
        isOwner,
        wrapAsync(listingControllers.deleteListing)
    );

module.exports = router;
