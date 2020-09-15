const express = require("express")
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

let cars = [
    {id: 1, brand: "bmw"},
    {id: 2, model: "Mitsubishi"}
];

app.get("/cars", (req, res) => {
    res.send();
})

app.get("/car/id", (req, res) => {
    res.send();
})

app.post("/cars/newcar", (req, res) => {
    res.send();
})

app.put("/cars/:id", (req, res) => {
    res.send();
})

app.delete("/cars/:id", (req, res) => {
    res.send();
})