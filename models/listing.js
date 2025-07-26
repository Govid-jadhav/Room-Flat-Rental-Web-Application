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
    reviews: [ // plural
        {
            type: schema.Types.ObjectId,
            ref: "Review" // correct case
        }
    ]
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
