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

const rateLimiter = require('express-rate-limit');

const authLimiter1 = rateLimiter({
    windowMs: 10 * 60 * 1000,   // 10 minutes.
    max: 6   // Limit each IP to 6 requests per windowMs.
});

const authLimiter2 = rateLimiter({
    windowMs: 15 * 60 * 1000,   // 15 minutes.
    max: 50   // Limit each IP to 50 requests per windowMs.
});

app.use("/auth", authLimiter1);

app.use(authLimiter2);

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

/*
200 - ok
4xx
401 - unauthorized
403 - forbidden
5xx
500 - internal server error
501 - Not implemented yet
 */

const port = process.env.PORT || 8080;

app.listen(port, (error) => {
    if (error) {
        console.log('Failed to start server', error);
    }
    console.log('Server is running on port: ', Number(port));
})