const mongoose = require("mongoose");
const review = require("./review.js");
const schema = mongoose.Schema;

const listingSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: {
        url: String,
        filename: String,
    },
    price: Number,
    location: String,
    latitude: Number,
    longitude: Number,
    country: String,
    reviews: [
        {
            type: schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
});

// Cascade delete associated reviews on listing deletion
listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await review.deleteMany({ _id: { $in: listing.reviews } });
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
