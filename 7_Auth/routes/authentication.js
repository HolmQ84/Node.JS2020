const router = require('express').Router();

// const crypto = require('crypto');
// const path = require('path');

router.get('/signup', (req, res) => {
    return res.send("Signup page.");
})

router.get('/login', (req, res) => {
    return res.send("Login page.");
})

router.get('/loggedin', (req, res) => {
    return res.send("Logged in as user.");
})

router.post('/signup', (req, res) => {
    return res.status(501).send();
})

router.post('/login', (req, res) => {
    return res.status(501).send();
})

router.get('/logout', (req, res) => {
    return res.status(501).send();
})

module.exports = router;

