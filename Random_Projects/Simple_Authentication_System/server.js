const express = require('express');
const app = express();
const bcrypt = require('bcrypt')

app.use(express.json())

const users = [];

// Get all users
app.get('/users', (req, res) => {
    res.json(users);
})

// Create User
app.post('/users', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = { name: req.body.name, password: hashedPassword }
        users.push(user);
        res.status(201).send();
    } catch {
        res.status(500).send();
    }
})

// User login
app.post('/users/login', async (req, res) => {
    const user = users.find( user => user.name = req.body.name )
    if (user == null) {
        return res.status(400).send('Cannot find user')
    }
    try {
        if(await bcrypt.compare(req.body.password, user.password)) {
            res.send('Success')
        } else {
            res.send('Not allowed')
        }
    } catch {
        return res.status(500).send()
    }
})

const port = process.env.PORT || 8080;

app.listen(port, (error) => {
    if (error) {
        console.log("Fejl ved opstart af server.");
    }
    console.log("Serveren kører på port: ", port);
});