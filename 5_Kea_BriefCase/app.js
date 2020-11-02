const express = require('express');
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const fs = require('fs');

const header = fs.readFileSync(__dirname + "/public/header/header.html").toString();
const footer = fs.readFileSync(__dirname + "/public/footer/footer.html").toString();

const uploadPage = fs.readFileSync(__dirname + "/public/upload/upload.html").toString();
const aboutPage = fs.readFileSync(__dirname + "/public/about/about.html").toString();
const downloadPage = fs.readFileSync(__dirname + "/public/download/download.html").toString();


app.get("/", (req, res) => {
    res.send(header + uploadPage + footer);
})

app.get("/about", (req, res) => {
    res.send(header + aboutPage + footer)
})

app.get("/download/:id", (req, res) => {
    res.send(header + downloadPage + footer);
})

const uploadRouter = require('./routes/upload.js')
app.use(uploadRouter);

const port = process.env.PORT || 8080;

app.listen(port, (error) => {
    if (error) {
        console.log("Error starting the server :-(", error);
    }
    console.log("Server running on port", Number(port));
});
