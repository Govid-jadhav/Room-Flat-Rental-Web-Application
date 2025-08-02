const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// 🌐 Load config from .env
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

// ✅ Log to verify environment variables
console.log("Cloudinary config test:");
console.log("CLOUD_NAME:", process.env.CLOUD_NAME);
console.log("CLOUD_API_KEY:", process.env.CLOUD_API_KEY);
console.log("CLOUD_API_SECRET:", process.env.CLOUD_API_SECRET ? "✓ Loaded" : "❌ MISSING");

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'room_rental',
        allowed_formats: ["png", "jpg", "jpeg"]
    },
});

module.exports = {
    cloudinary,
    storage
};
