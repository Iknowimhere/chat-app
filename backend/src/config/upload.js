const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const dotenv = require('dotenv');
dotenv.config();

//configure cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//create storage engine for multer
const storage = new CloudinaryStorage({
  cloudinary,
  allowedFormats: ['jpg', 'png', 'jpeg'],
  params: {
    folder: 'Chat-app',
  },
});

const upload = multer({
  storage,
});

module.exports = upload;
