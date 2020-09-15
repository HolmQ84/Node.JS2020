const express = require("express");
const app = express();

// Gør det muligt at returnere data i json format, på et post map - gennem en querystring.
app.use(express.json());
// Gør det muligt at lave og returnere data i json format, gennem en form.
app.use(express.urlencoded({extended: true}))

const months = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
}

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

app.get("/", (req, res) => {
    return res.send("<div style='text-align: center'><br><h1 style='color: crimson'>Hello World!</h1><br><h2 style='color: blue'>Hello Denmark!</h2><br><h3  style='color: orange'>" +
        "Hello Sjælland</h3><br><h4 style='color: forestgreen'>Hello København</h4><br><h5 style='color: purple'>Hello Nørrebro!</h5><br><h6 style='color: saddlebrown'>Hello Jagtvej</h6></div>")
})

app.get("/hej", (req, res) => {
    return res.send("<div style='text-align: center'><br><h1 style='color: crimson'>Hej Verden!</h1><br><h2 style='color: blue'>Hej Danmark!</h2><br><h3  style='color: orange'>" +
        "Hej Sjælland</h3><br><h4 style='color: forestgreen'>Hej København</h4><br><h5 style='color: purple'>Hej Nørrebro!</h5><br><h6 style='color: saddlebrown'>Hej Jagtvej</h6></div>")
})

app.get("/me", (req,res) => {
    return res.send({
        "Navn": "Martin Holmqvist",
        "Fødselsdato": "10. August",
        "Fødselsår": "1984",
        "Adresse": "Jagtvej 145"
    });
})

app.get("/time", (req, res) => {
    const date = new Date();
    const time = date.getHours() +":"+date.getMinutes()+":"+date.getSeconds();
    return res.send({time});
})

app.get("/month", (req, res) => {
    const date = new Date();
    const month = date.getMonth();
    return res.send({month: months[month]});
})

app.get("/day", (req, res) => {
    const date = new Date();
    const day = date.getDay();
    return res.send({day: days[day]});
})

app.get("/query", (req, res) => {
    return res.send({query: req.query});
})

app.get("/request/:message", (req, res) => {
    return res.send({
        message: req.params.message,
        query: req.query
    })
})

app.listen(8080, (error) => {
    if (error) {
        console.log("Fejl ved opstart af server.");
    }
    console.log("Serveren kører på port: ",8080)
});

app.post("/showmethebody", (req,res) => {
    return res.send(req.body);
})