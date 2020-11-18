const express = require('express');
const app = express();

const fs = require('fs')

app.use(express.json()); // The next two lines is to make sure that post works
app.use(express.urlencoded({extended: false})) // This is so that we can use url in upload.js

const index = fs.readFileSync(__dirname + "/index.html").toString();

app.get('/', (req, res) => {
    res.send(index)
})

app.post('/', (req, res) => {
    console.log("req.body.username: "+req.body.username);
    console.log("req.body.password: "+req.body.password);
    res.send('<h1>Info sent..</h1>')
})

app.listen(8080);