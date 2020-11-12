const express = require('express');
const app = express();

const favicon = require('serve-favicon');
app.use(favicon(__dirname + '/public/images/logo/logo.ico'));

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


const multer  = require('multer')
const file_upload = multer({ dest: '/public/images/memes/' })

// Connecting to the database.
const MongoClient = require("mongodb").MongoClient
const connectionUrl = "mongodb://localhost:27017/";

// Making variables for footers and headers.
const fs = require('fs');
const header = fs.readFileSync(__dirname+"/public/header/header.html").toString();
const footer = fs.readFileSync(__dirname+"/public/footer/footer.html").toString();

// Making variables for entry points.
const index = fs.readFileSync(__dirname+"/public/index/index.html").toString();
const upload = fs.readFileSync(__dirname+"/public/upload/upload.html").toString();
const memes = fs.readFileSync(__dirname+"/public/memes/memes.html").toString();
const profile = fs.readFileSync(__dirname+"/public/profile/profile.html").toString();

app.get('/', (req,res) => {
    res.send(header + index + footer );
})

app.get('/upload', (req, res) => {
    res.send( header + upload + footer );
})

app.post('/upload', file_upload.single('upFile'), (req, res, next) => {
    // req.file is the `upFile` file
    // req.body will hold the text fields, if there were any.
})

app.get('/memes', (req,res) => {
    res.send(header + memes + footer );
})

app.get('/profile', (req, res) => {
    res.send( header + profile + footer );
})

const port = process.env.PORT || 8080;

app.listen(port, (error) => {
    if (error) {
        console.log("Fejl ved opstart af server.");
    }
    console.log("Server startet på port:",port);
})
