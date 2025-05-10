// src/config/db.config.js
require('dotenv').config();
const mongoose = require('mongoose');

// lấy uri kết nối DB từ biến môi trường
const dbUri = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(dbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected successfully!!!!!!`);
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
