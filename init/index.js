const mongoose = require("mongoose");
const initData = require("./data"); // ✅ this matches your export
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/room";

main()
    .then(() => {
        console.log("Connected to DB");
        initDB(); // ✅ call it here
    })
    .catch((err) => {
        console.error("DB connection error:", err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    try {
        await Listing.deleteMany({});
        await Listing.insertMany(initData.data); // ✅ correct key
        console.log("Data was saved");
    } catch (err) {
        console.error("Error inserting data:", err);
    }
};
