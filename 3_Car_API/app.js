const express = require("express")
const app = express();

// Gør det muligt at returnere data i json format, på et post map - gennem en querystring.
app.use(express.json());
// Gør det muligt at lave og returnere data i json format, gennem en form.
app.use(express.urlencoded({extended: true}))

let cars = [
    {id: 0, brand: "BMW"},
    {id: 1, brand: "Mitsubishi"},
    {id: 2, brand: "Mercedes"},
    {id: 3, brand: "Subaru"}
];

app.get("/", (req, res) => {
    res.send("<div style='text-align: center'><br><br><h1>Welcome to the cardealer.</h1><br><button><a href='/cars'>See all cars</a></button></div>");
})

app.get("/cars", (req, res) => {
    res.send({cars});
})

app.get("/cars/:id", (req, res) => {
    res.send({cars: cars[req.params.id]});
})

app.post("/cars/:newcar", (req, res) => {
    res.send(
        cars.push({id: cars.length, brand: req.params})
    );
})

app.put("/cars/:id/:newcar", (req, res) => {
    res.send(
        cars[req.params.id].brand = req.params
    );
})

app.delete("/cars/:id", (req, res) => {
    res.send(
        cars.splice(req.params.id, 1)
    );
})

app.listen(8080, (error) => {
    if (error) {
        console.log("Error starting the server.");
    }
    console.log("Server is running on port",8080)
});