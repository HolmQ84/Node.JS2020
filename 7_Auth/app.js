const express = require('express');
const app = express();

app.use(express.json());

require('dotenv').config();

const session = require("express-session");

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,      // Skal den re-sende session oplysninger ved nye routes?
    saveUninitialized: true,
    cookie: { secure: false }
}))

const auth_routes = require('./routes/authentication.js');
const auth_pages = require('./routes/auth_pages.js');
const session_routes = require('./routes/session.js');
app.use(auth_routes);
app.use(auth_pages);
app.use(session_routes);

/*
app.use((req, res, next) => {
    console.log("This runs on all routes.");
    next();
});
*/

function greeting(req, res, next) {
    console.log("Wow, nice to see you");
    next();
}

app.get("/", greeting, (req, res, next) => {
    console.log("Hit the first route.");
    next();
})

app.get("/", (req, res) => {
    console.log("Hit the second route.");
    return res.send({ data: "The is the frontpage." });
})

app.get("/*", (req, res) => {
    return res.status(501).send({ data: "Could not find the page." });
})

const port = process.env.PORT || 8080;

app.listen(port, (error) => {
    if (error) {
        console.log('Failed to start server', error);
    }
    console.log('Server is running on port: ', Number(port));
})