const express = require('express');
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const fs = require('fs');

const headerPage = fs.readFileSync(__dirname+"/public/header/header.html").toString();
const footerPage = fs.readFileSync(__dirname+"/public/footer/footer.html").toString();

const uploadPage = fs.readFileSync(__dirname+"/public/upload/upload.html").toString();
const aboutPage = fs.readFileSync(__dirname + "/public/about/about.html").toString();
const downloadPage = fs.readFileSync(__dirname+"/public/download/download.html").toString();


app.get("/", (req, res) => {
    res.send(headerPage+uploadPage+footerPage);
})

app.get("/about", (req, res) => {
    res.send(headerPage+aboutPage+footerPage)
})

app.get("/download/:id", (req, res) => {
    res.send(headerPage+downloadPage+footerPage);
})

app.get("/form", (req, res) => {
    res.sendFile(__dirname+"/public/form/form.html");
})

app.post("/form", (req, res) => {
    res.send(req.body);
})

/*
const uploadRouter = require('./routes/upload.js')
app.use(uploadRouter);
*/

const port = process.env.PORT || 8080;

app.listen(port, (error) => {
    if (error) {
        console.log("Error starting the server :-(", error);
    }
    console.log("Server running on port", Number(port));
});

const crypto = require('crypto');

const path = require('path');

const uploads = [];

app.get('/uploads/:id', (req, res) => {
    const foundUpload = uploads.find(upload => upload.id === req.params.id);
    return res.send({ data: foundUpload });
})

app.post('/uploads', (req, res) => {
    const id = crypto.randomBytes(28).toString("hex");
    console.log(req.body);
    uploads.push({...req.body, id });
    console.log(uploads)
    return res.send({ id });
});

app.get("/uploads", (req, res) => {
    res.sendFile(path.join(__dirname+"/../public/upload/upload.html"));
});