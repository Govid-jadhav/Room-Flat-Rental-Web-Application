const express = require("express");
// const router = express();
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js")
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("../schema.js");
const Listing = require("../models/listing.js");
const { isLoggedIn } = require("../middelware.js")

const validateListings = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((e) => e.message).join(",");
        throw new ExpressError(404, errMsg);

    } else {
        next();
    }
};
//Index Route
router.get("/", wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("index.ejs", { allListings });
}));

//New Route
router.get("/new", isLoggedIn, (req, res) => {

    res.render("new.ejs");

});

//Show Route
router.get("/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");

    if (!listing) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings"); // ✅ added return and fixed path
    }

    res.render("show.ejs", { listing });
}));

//Create Route


router.post("/", isLoggedIn, wrapAsync(async (req, res) => {
    let result = listingSchema.validate(req.body);
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    req.flash("success", "New Listing Created");
    res.redirect("/listings");
}));


//Edit Route
router.get("/:id/edit", isLoggedIn, wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");  // ✅ Corrected path and added return
    }
    res.render("edit.ejs", { listing });
}));


//Update Route
router.put("/:id",
    isLoggedIn, wrapAsync(async (req, res) => {
        let { id } = req.params;
        await Listing.findByIdAndUpdate(id, { ...req.body.listing });
        req.flash("success", "Listing updated successfully");
        res.redirect(`/listings/${id}`);  // ✅ flash will show here
    }));

//Delete Route
router.delete("/:id", isLoggedIn, wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    // console.log(deletedListing);
    req.flash("success", " Listing Deleted");
    res.redirect("/listings");
}));
module.exports = router;