const express = require('express');
const mongoose = require('mongoose');
const app = express();
const multer=require('multer');
const path=require('path');
const Query = require('./models/querries');
const EventModel=require('./models/eventModel');
const cors = require('cors');
app.use(express.json());
 app.use(cors());
const storage=multer.diskStorage({destination:(req,file,cb)=>{
    cb(null,'Images')
},
filename:(req,file,cb)=>{
    console.log(file);
    cb(null,Date.now()+path.extname(file.originalname))
}})
const upload=multer({storage:storage}).single('image');
app.get('/', (req, res) => {
    res.send("Hello, App!");
});

app.post('/thingstodo/query', async (req, res) => {
    try {
        const query = await Query.create(req.body);
        res.status(201).json({ message: 'Query created successfully', query: query });
    } catch (error) {
        console.error(error.message);
        if (error.name === 'ValidationError') {
            res.status(400).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
});


app.post('/thingstodo/add-event', async (req, res) => {
    try {
        upload(req, res, async (err) => {
            if (err) {
                console.error(err);
                return res.status(400).json({ message: 'Error uploading image' });
            }

            if (!req.file) {
                return res.status(400).json({ message: 'No image file provided' });
            }
            const fs = require('fs');
            const imageBuffer = fs.readFileSync(req.file.path);
            const base64Image = imageBuffer.toString('base64');

            const newImage = new EventModel({
                userId: req.body.userId,
                type:req.body.type,
                description:req.body.description,
                image: {
                    data: base64Image,
                    contentType: 'image/png'
                }
            });

            await newImage.save();
            res.status(200).json({ message: 'Image uploaded successfully' });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
app.get('/thingstodo/get-all-images', async (req, res) => {
    try {
        const images = await EventModel.find({});
        res.status(200).json({ images: images });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.get('/thingstodo/get-event/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;

        const event = await EventModel.findOne({ userId: userId });

        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        res.status(200).json({ event });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

mongoose.connect('mongodb+srv://smaheshwari029:PgrNN67LSEUzIEdg@cluster0.cn28b5v.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=Cluster0').then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    app.listen(4000, () => {
        console.log("Node API running on port 4000");
    });
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
