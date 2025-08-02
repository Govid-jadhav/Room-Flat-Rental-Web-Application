const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js");
const { isLoggedIn, isOwner, validateListings } = require("../middelware.js");
const listingControllers = require("../controllers/listing.js");
const multer = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router
    .route("/")
    .get(wrapAsync(listingControllers.index))
    .post(
        isLoggedIn,
        upload.single("listing"),
        validateListings,
        wrapAsync(listingControllers.createlisting)
    );

router.get("/new",
    isLoggedIn,
    listingControllers.renderNewForm
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
        upload.single("image"),
        validateListings,
        wrapAsync(listingControllers.updateListing)
    )
    .delete(
        isLoggedIn,
        isOwner,
        wrapAsync(listingControllers.deletelisting)
    );

module.exports = router;
