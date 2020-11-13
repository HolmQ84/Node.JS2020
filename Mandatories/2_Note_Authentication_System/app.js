const express = require('express');
const app = express();

// Used for showing favicons on the site.
const favicon = require('serve-favicon');
app.use(favicon(__dirname + '/public/images/logo/logo.ico'));

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Initialisation for uploading memes.
const multer  = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/images/memes');
    },
    // By default, multer removes file extensions so let's add them back
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const imageFilter = function(req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

let latestImage = '';

// Connecting to the database.
const MongoClient = require("mongodb").MongoClient;
const connectionUrl = "mongodb://localhost:27017/";

// Making variables for footers and headers.
const fs = require('fs');
const header = fs.readFileSync(__dirname + "/public/header/header.html").toString();
const footer = fs.readFileSync(__dirname + "/public/footer/footer.html").toString();

// Making variables for entry points.
const index = fs.readFileSync(__dirname + "/public/index/index.html").toString();
const upload = fs.readFileSync(__dirname + "/public/upload/upload.html").toString();
const memes = fs.readFileSync(__dirname + "/public/memes/memes.html").toString();
const profile = fs.readFileSync(__dirname + "/public/profile/profile.html").toString();
const success = fs.readFileSync(__dirname + "/public/success/success.html").toString();

app.get('/', (req,res) => {
    res.send(header + index + footer );
})

app.get('/upload', (req, res) => {
    res.send( header + upload + footer );
})

app.post('/upload', (req, res) => {
    // 'profile_pic' is the name of our file input field in the HTML form
    let upload = multer({ storage: storage, fileFilter: imageFilter }).single('upFile');

    upload(req, res, function(err) {
        // req.file contains information of uploaded file
        // req.body contains information of text fields, if there were any

        if (req.fileValidationError) {
            return res.send(req.fileValidationError);
        }
        else if (!req.file) {
            return res.send('Please select an image to upload');
        }
        else if (err instanceof multer.MulterError) {
            return res.send(err);
        }
        else if (err) {
            return res.send(err);
        }
        latestImage = req.file.path
        res.redirect('/upload/success')
    });
});

app.get('/upload/success', (req, res) => {
    res.send( header + success + footer)
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
