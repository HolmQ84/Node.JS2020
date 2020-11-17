const router = require('express').Router();

const bcrypt = require('bcrypt');
const saltRounds = 12;

const plainTextPassword = "#flotfyr36.jatak";
const hashedPassword = "$2b$12$szY7U0CHO3l27RTJMDq6L.L6TN7qbzePKYpSVcb5QzJVeXhKw23ZS";

// How to hash a password.
bcrypt.hash(plainTextPassword, saltRounds, (error, hash) => {
    console.log(hash);
})

// How to autherize a password.
bcrypt.compare(plainTextPassword, hashedPassword, (error, result) => {
    console.log(result);
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

