const express = require('express');
const app = express();
const fs = require('fs');               // Tilføjes for at bruges til filer.

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Initialisation for uploading memes.
const multer  = require('multer')
const path = require('path')

require('dotenv').config();

const session = require("express-session");

// Used for collecting session cookies to store user info through different pages.
// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,      // Skal den re-sende session oplysninger ved nye routes?
//     saveUninitialized: true,
//     cookie: { secure: false }
// }))

// Connecting to the database.
const MongoClient = require("mongodb").MongoClient;
const connectionUrl = "mongodb://localhost:27017/";

// Making variables for footers and headers.
const header = fs.readFileSync(__dirname + "/public/header/header.html").toString();
const footer = fs.readFileSync(__dirname + "/public/footer/footer.html").toString();

// Making variables for entry points.
const index = fs.readFileSync(__dirname + "/public/index/index.html").toString();
const database = fs.readFileSync(__dirname + "/public/database_test/database.html").toString();

app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.send(header+index+footer);
})

app.get('/database', (req, res) => {
    MongoClient.connect(connectionUrl, { useUnifiedTopology: true }, (error, client) => {
        if (error) throw new Error(error);

        const memes = client.db("memes");

        const favorites = memes.collection("favorites");

        favorites.find({ person: "Obi Wan" }).toArray((error, foundFavorites) => {
            if (error) throw new Error(error);
            client.close();
            res.send({
                data: foundFavorites
            });
        })
    });
})

app.get('/show', (req, res) => {
    res.send(header+database+footer);
})


const port = process.env.PORT || 8080;

app.listen(port, (error) => {
    if (error) {
        console.log("Fejl ved opstart af server.");
    }
    console.log("Server startet på port:",port);
})