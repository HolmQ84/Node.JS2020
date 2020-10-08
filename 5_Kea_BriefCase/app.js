const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/public/upload/upload.html")
});

app.listen(port, (error) => {
    if (error) {
        console.log("Error starting the server :-(", error);
    }
    console.log("Server running on port", Number(port));
});

