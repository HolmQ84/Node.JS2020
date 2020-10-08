const express = require("express");
const app = express();
const fetch = require('node-fetch');
const encoding = require('encoding');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(__dirname+ "/public/"));

app.get("/", (req, res) => {
return res.send("<h1>Hello World!</h1><br><a href='./documentation'>Documentation</a>");
})

app.get("/proxy", (req, res) => {
    fetch('https://www.google.com/')
        .then(result => result.textConverted())
        .then(body => {
            // const page = encoding.convert(body);
            return res.send(body)
        })
})

app.listen(8080, (error) => {
    if (error) {
        console.log("Error starting the server.");
    }
    console.log("Server is running on port",8080)
});

app.get("/greeting", (req, res) => {
    res.redirect("/");
})

app.get("/catfacts", (req, res) => {
    res.sendFile(__dirname + '/catfacts.html');
})

app.get("/documentation", (req, res) => {
   return res.sendFile(__dirname + '/documentation.html');
});

app.get("/documentation2", (req, res) => {
    return res.sendFile(__dirname + '/documentation2.html');
});

