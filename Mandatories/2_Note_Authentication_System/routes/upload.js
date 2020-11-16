const router = require('express').Router();
const fs = require('fs');

// Initialisation for uploading memes.
const multer  = require('multer');
const path = require('path');

require('dotenv').config();

const header = fs.readFileSync(__dirname + "/../public/header/header.html").toString();
const footer = fs.readFileSync(__dirname + "/../public/footer/footer.html").toString();

const success = fs.readFileSync(__dirname + "/../public/success/success.html").toString();
const upload = fs.readFileSync(__dirname + "/../public/upload/upload.html").toString();

latestImage = 'hej';

// Counter for constructing filenames for new memes.
let memeCounter = 12;

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, __dirname+'/../public/images/memes');
    },
    // By default, multer removes file extensions so let's add them back
    filename: function(req, file, cb) {
        cb(null, 'meme-' + memeCounter + path.extname(file.originalname));
        memeCounter += 1;
    }
});

const imageFilter = function(req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only jpg image files are allowed!'), false);
    }
    cb(null, true);
};

router.get('/upload', (req, res) => {
    res.send( header + upload + footer );
})

router.post('/upload', (req, res) => {
    // 'profile_pic' is the name of our file input field in the HTML form
    let upload = multer({ storage: storage, fileFilter: imageFilter }).single('upFile');

    upload(req, res, function(err) {
        // req.file contains information of uploaded file
        // req.body contains information of text fields, if there were any

        if ( req.fileValidationError ) {
            return res.send(req.fileValidationError);
        } else if ( !req.file ) {
            return res.send('Please select an image to upload');
        } else if ( err instanceof multer.MulterError ) {
            return res.send(err);
        } else if ( err ) {
            return res.send(err);
        }
        latestImage = req.file.path
        res.redirect('/upload/success')
    });
});

router.get('/upload/success', (req, res) => {
    res.send( header + success + footer)
})

module.exports = router;