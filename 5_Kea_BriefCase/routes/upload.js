const router = require('express').Router();

const path = require('path');

router.post('/form', (req, res) => {
    return res.send({ data: req.body });
});

router.get("/upload", (req, res) => {
    res.sendFile(path.join(__dirname+"/../public/upload/upload.html"));
});

module.exports = router;
