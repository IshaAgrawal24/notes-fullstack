const mongoose = require('mongoose');

const MONGOOSE_URI = process.env.CONN_URI;

async function connectDB() {
    await mongoose.connect(MONGOOSE_URI);
    console.log("DataBase connected")
}

module.exports = connectDB