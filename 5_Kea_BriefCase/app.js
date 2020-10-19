const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const fs = require('fs');
const uploadPage = fs.readFileSync(__dirname+"/public/upload/upload.html").toString();
const footer = fs.readFileSync(__dirname+"/public/footer/footer.html").toString();

app.get("/", (req, res) => {
    res.send(uploadPage+footer);
})

app.get("/about", (req, res) => {
    res.sendFile(__dirname+"/public/about/about.html")
})

app.get("/download", (req, res) => {
    res.sendFile(__dirname+"/public/download/download.html")
})

const uploadRouter = require('./routes/upload.js')
app.use(uploadRouter);

app.listen(port, (error) => {
    if (error) {
        console.log("Error starting the server :-(", error);
    }
    console.log("Server running on port", Number(port));
});
