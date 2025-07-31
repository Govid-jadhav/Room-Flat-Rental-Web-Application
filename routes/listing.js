const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js");

// Custom middleware
const { isLoggedIn, isOwner, validateListings } = require("../middelware.js");

// Controller for listings
const listingControllers = require("../controllers/listing.js");


// 📌 INDEX ROUTE: Show all listings
router.get("/",
    wrapAsync(listingControllers.index));


// 📌 NEW ROUTE: Render form to create a new listing
router.get("/new",
    isLoggedIn, // Only logged-in users can access
    wrapAsync(listingControllers.renderNewForm));


// 📌 CREATE ROUTE: Create a new listing
router.post("/",
    isLoggedIn, // Must be logged in
    validateListings, // Validate request body against schema
    wrapAsync(listingControllers.createlisting));


// 📌 SHOW ROUTE: Show a specific listing by ID
router.get("/:id",
    wrapAsync(listingControllers.showListing));


// 📌 EDIT ROUTE: Render edit form for a specific listing
router.get("/:id/edit",
    isLoggedIn, // Must be logged in
    isOwner, // Must be the owner of the listing
    wrapAsync(listingControllers.editListing));


// 📌 UPDATE ROUTE: Handle form submission to update a listing
router.put("/:id",
    isLoggedIn,
    isOwner,
    validateListings, // Validate updated data
    wrapAsync(listingControllers.updateListing));


// 📌 DELETE ROUTE: Delete a specific listing
router.delete("/:id",
    isLoggedIn,
    isOwner,
    wrapAsync(listingControllers.deleteListing)); // ❗Fix: Should be deleteListing, not createlisting

module.exports = router;
