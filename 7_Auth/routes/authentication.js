const router = require('express').Router();

const bcrypt = require('bcrypt');
const saltRounds = 12;

const plainTextPassword = "#flotfyr36.jatak";

bcrypt.hash(plainTextPassword, saltRounds, (error, hash) => {
    console.log(hash);
})

router.get('/auth/register', (req, res) => {
    return res.send("Signup page.");
})

router.get('/auth/login', (req, res) => {
    return res.send("Login page.");
})

router.get('/auth/loggedin', (req, res) => {
    return res.send("Logged in as user.");
})

router.post('/auth/register', (req, res) => {
    return res.status(501).send();
})

router.post('/auth/login', (req, res) => {
    return res.status(501).send();
})

router.get('/auth/logout', (req, res) => {
    return res.status(501).send();
})

module.exports = router;

