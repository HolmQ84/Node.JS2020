const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname+ "/public/"));

let fruits = [
    {id: 1, name: "Apple"},
    {id: 2, name: "Pear"},
    {id: 3, name: "Melon"},
    {id: 4, name: "Pinapple"}
];

let currentFruitId = 5;

app.get("/", (req, res) => {
    return res.sendFile(__dirname + '/public/html/index.html')
})

app.get("/intro", (req, res) => {
    return res.sendFile(__dirname + '/public/html/intro.html');
});

app.get("/gettingStarted", (req, res) => {
    return res.sendFile(__dirname + '/public/html/startup.html');
});

app.get("/jQuery", (req, res) => {
    return res.sendFile(__dirname + '/public/html/jQuery.html');
});

app.get("/building", (req, res) => {
    return res.sendFile(__dirname + '/public/html/building.html');
});

app.listen(8080, (error) => {
    if (error) {
        console.log("Error starting the server.");
    }
    console.log("Server is running on port",8080)
});

app.get("/fruits", (req, res) => {
    return res.send({fruits});
})

app.get("/fruits/path/:id", (req, res) => {
    const fruit = fruits.find(fruit => fruit.id === Number(req.params.id));
    return res.send({data: fruit});
})

app.get("/fruits/query", (req, res) => {
    const fruit = fruits.find(fruit => fruit.id === Number(req.query.id));
    return res.send({data: fruit});
})

app.post("/fruits", (req, res) => {
    const newFruit = req.query;
    newFruit.id = currentFruitId++;
    fruits.push(newFruit);
    return res.send({data: newFruit});
})

app.patch("/fruits/:id", (req,res) => {
    fruits = fruits.map(fruit => {
        if (fruit.id === Number(req.params.id)) {
            return {...fruit, ...req.body , id: fruit.id};
        }
        return fruit;
    });
    return res.send({data: fruits});
})

app.delete("/fruits/:id", (req, res) => {
    fruits = fruits.filter(fruit => fruit.id !== Number(req.params.id));
    return res.send({data: fruits});
})