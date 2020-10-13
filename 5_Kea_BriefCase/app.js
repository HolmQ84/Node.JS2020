const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/public/upload/upload.html")
});

app.post('/form', (req, res) => {
    console.log(req.body);
    return res.send({ data: req.body });
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname+"/public/about/about.html")
})

app.get("/download", (req, res) => {
    res.sendFile(__dirname+"/public/download/download.html")
})

app.listen(port, (error) => {
    if (error) {
        console.log("Error starting the server :-(", error);
    }
    console.log("Server running on port", Number(port));
});
