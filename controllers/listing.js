const Listing = require("../models/listing");

// 📌 INDEX CONTROLLER: Show all listings
module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("index.ejs", { allListings });
};

// 📌 NEW FORM CONTROLLER: Render form to create new listing
module.exports.renderNewForm = (req, res) => {
    res.render("new.ejs");
};

// 📌 SHOW CONTROLLER: Show detailed view of a listing by ID
module.exports.showListing = async (req, res) => {
    const listing = await Listing.findById(req.params.id)
        .populate({
            path: "reviews",
            populate: {
                path: "author",
                model: "User"
            }
        })
        .populate("owner");

    if (!listing) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }

    res.render("show", { listing });
};

// 📌 CREATE CONTROLLER: Create a new listing and save to DB
module.exports.createlisting = async (req, res) => {
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id; // Set the currently logged-in user as owner
    await newListing.save();
    req.flash("success", "New Listing Created");
    res.redirect("/listings");
};

// 📌 EDIT FORM CONTROLLER: Render edit form for a specific listing
module.exports.editListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }
    res.render("edit.ejs", { listing });
};

// 📌 UPDATE CONTROLLER: Handle form submission to update listing
module.exports.updateListing = async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success", "Listing updated successfully");
    res.redirect(`/listings/${id}`);
};

// 📌 DELETE CONTROLLER: Delete a listing by ID
module.exports.deletelisting = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing deleted");
    res.redirect("/listings");
};
