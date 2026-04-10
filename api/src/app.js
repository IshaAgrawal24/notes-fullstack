// External Module 
const express = require("express");
const multer = require("multer");

// Local Module 
const postModel = require('./models/post.model');
const uploadFile = require('./services/storage.service')

const app = express();
app.use(express.json());

// Multer Middleware
const upload = multer({ storage: multer.memoryStorage() });


// Create Post API 
app.post("/create-post", upload.single("image"), async(req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }
    
    const result = await uploadFile(req.file.buffer);

    await postModel.create({
        image: result.url,
        caption: req.body.caption
    })

    return res.status(201).json({
        return_status: 201,
        message: "Data created successfully."
    }) 
});

module.exports = app;
