const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req, res) => {
return res.send("<h1>Hello World!</h1><br><a href='./documentation'>Documentation</a>");
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

app.get("/documentation", (req, res) => {
   return res.sendFile(__dirname + '/documentation.html');
});

app.get("/documentation2", (req, res) => {
    return res.sendFile(__dirname + '/documentation2.html');
});
