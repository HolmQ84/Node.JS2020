const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname+ "/public/"));


app.get("/", (req, res) => {
    return res.sendFile(__dirname + '/html/index.html')
})

app.get("/intro", (req, res) => {
    return res.sendFile(__dirname + '/html/intro.html');
});

app.get("/gettingStarted", (req, res) => {
    return res.sendFile(__dirname + '/html/startup.html');
});

app.get("/jQuery", (req, res) => {
    return res.sendFile(__dirname + '/html/jQuery.html');
});

app.get("/building", (req, res) => {
    return res.sendFile(__dirname + '/html/building.html');
});

app.listen(8080, (error) => {
    if (error) {
        console.log("Error starting the server.");
    }
    console.log("Server is running on port",8080)
});