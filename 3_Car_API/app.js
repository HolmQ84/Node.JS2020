const express = require("express");
const app = express();

const info = require("C:/Users/marti/IdeaProjects/3.Semester/Node.JS2020/3_Car_API/package.json");

// Gør det muligt at returnere data i json format, på et post map - gennem en querystring.
app.use(express.json());
// Gør det muligt at lave og returnere data i json format, gennem en form.
app.use(express.urlencoded({extended: true}))

let cars = [
    {id: 1, brand: "BMW"},
    {id: 2, brand: "Mitsubishi"},
    {id: 3, brand: "Mercedes"},
    {id: 4, brand: "Subaru"}
];

let currentCarId = 5;

app.get("/", (req, res) => {
    return res.send({info});
})

app.get("/welcome", (req, res) => {
    return res.send("<div style='text-align: center'><br><br><h1>Welcome to the cardealer.</h1><br><button><a href='/cars'>See all cars</a></button></div>");
})

app.get("/cars", (req, res) => {
    return res.send({cars});
})

app.get("/cars/:id", (req, res) => {
    const car = cars.find(car => car.id === Number(req.params.id));
    return res.send({data: car});
})

app.post("/cars", (req, res) => {
    const newCar = req.body;
    newCar.id = currentCarId++;
    cars.push(newCar);
    return res.send({data: newCar});
})

app.patch("/cars/:id", (req,res) => {
    cars = cars.map(car => {
        if (car.id === Number(req.params.id)) {
            return {...car, ...req.body , id: car.id};
        }
        return car;
    });
    return res.send({data: cars});
})

app.delete("/cars/:id", (req, res) => {
    cars = cars.filter(car => car.id !== Number(req.params.id));
    return res.send({data: cars});
})

// If PORT is defined then that should be the port otherwise fallback to port 80.
// Environment variables
console.log(process.env.PORT);
// Unary expressions:
const portNumber = process.env.PORT || 80;
// Ternary expressions:
// const portNumber = process.env.PORT ? process.env.PORT : 80;


app.listen(portNumber, (error) => {
    if (error) {
        console.log("Error starting the server.");
    }
    console.log("Server is running on port",8080)
});