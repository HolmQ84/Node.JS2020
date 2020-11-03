const router = require('express').Router();

const crypto = require('crypto');

const path = require('path');

const uploads = [];

router.get('/uploads/:id', (req, res) => {
    const foundUpload = uploads.find(upload => upload.id === req.params.id);
    return res.send({ data: foundUpload });
})

router.post('/uploads', (req, res) => {
    const id = crypto.randomBytes(28).toString("hex");
    console.log(req.body);
    uploads.push({...req.body, id });
    console.log(uploads)
    return res.send({ id });
});

router.get("/uploads", (req, res) => {
    res.sendFile(path.join(__dirname+"/../public/upload/upload.html"));
});

module.exports = router;