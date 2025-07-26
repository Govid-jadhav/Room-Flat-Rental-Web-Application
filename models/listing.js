const mongoose = require("mongoose");
const review = require("./review");
const Review = require("./review.js")
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

listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await review.deleteMany({ _id: { $in: listing.reviews } });
    }

});
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
