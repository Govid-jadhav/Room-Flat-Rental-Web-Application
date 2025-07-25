const mongoose = require("mongoose");
const schema = mongoose.Schema;
const listingSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: {
        filename: String,
        url: String,
    },
    price: Number,
    location: String,
    country: String,
});
const Listing = mongoose.model("listing", listingSchema);
module.exports = Listing;
