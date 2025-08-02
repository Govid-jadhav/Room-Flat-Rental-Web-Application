const Listing = require("../models/listing");
const axios = require('axios');


// 📌 INDEX CONTROLLER: Show all listings
module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
    res.render("new.ejs", { listing: {} });
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


module.exports.createlisting = async (req, res) => {
    const listingData = req.body.listing;
    const locationString = `${listingData.location}, ${listingData.country}`;

    // 🌍 Get coordinates from Nominatim
    const geoRes = await axios.get("https://nominatim.openstreetmap.org/search", {
        params: {
            q: locationString,
            format: "json",
            limit: 1
        },
        headers: {
            'User-Agent': 'HotelManagementApp'
        }
    });

    const [geo] = geoRes.data;
    if (!geo) {
        req.flash("error", "Invalid location.");
        return res.redirect("/listings/new");
    }

    const newListing = new Listing(listingData);
    newListing.geometry = {
        type: "Point",
        coordinates: [parseFloat(geo.lon), parseFloat(geo.lat)]
    };
    newListing.owner = req.user._id;

    if (req.file) {
        newListing.image = {
            url: req.file.path,
            filename: req.file.filename
        };
    }

    await newListing.save();
    req.flash("success", "Listing Created!");
    res.redirect(`/listings/${newListing._id}`);
};
// 📌 EDIT FORM CONTROLLER: Render edit form for a specific listing
module.exports.editListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }
    const blurredImageUrl = listing.image.url.replace(
        "/upload",
        "/upload/h_300,w_250,e_blur:300");
    res.render("edit.ejs", { listing, blurredImageUrl });
};

module.exports.updateListing = async (req, res) => {
    const { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing }, { new: true });

    // Handle image update if new file is uploaded
    if (req.file) {
        listing.image = {
            url: req.file.path,
            filename: req.file.filename
        };
        await listing.save(); // Save new image
    }

    req.flash("success", "Listing updated successfully");
    res.redirect(`/listings/${listing._id}`);
};


// 📌 DELETE CONTROLLER: Delete a listing by ID
module.exports.deletelisting = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing deleted");
    res.redirect("/listings");
};
