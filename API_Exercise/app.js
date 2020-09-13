const express = require("express");
const app = express();

app.get("/", (req, res) => {
    return res.send("<div style='text-align: center'><br><h1 style='color: crimson'>Hello World!</h1><br><h2 style='color: blue'>Hello Denmark!</h2><br><h3  style='color: orange'>" +
        "Hello Sjælland</h3><br><h4 style='color: forestgreen'>Hello København</h4><br><h5 style='color: purple'>Hello Nørrebro!</h5><br><h6 style='color: saddlebrown'>Hello Jagtvej</h6></div>")
})

app.get("/hej", (req, res) => {
    return res.send("<div style='text-align: center'><br><h1 style='color: crimson'>Hej Verden!</h1><br><h2 style='color: blue'>Hej Danmark!</h2><br><h3  style='color: orange'>" +
        "Hej Sjælland</h3><br><h4 style='color: forestgreen'>Hej København</h4><br><h5 style='color: purple'>Hej Nørrebro!</h5><br><h6 style='color: saddlebrown'>Hej Jagtvej</h6></div>")
})

app.listen(8080, (error) => {
    if (error) {
        console.log("Fejl ved opstart af server.");
    }
    console.log("Serveren kører på port: ",8080)
});