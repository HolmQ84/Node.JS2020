const router = require('express').Router();

const path = require('path')
const MongoClient = require("mongodb");
const connectionUrl = "mongodb://localhost:27017/";

router.post('/database/get', (req, res) => {
    MongoClient.connect(connectionUrl, { useUnifiedTopology: true }, (error, client) => {
        if (error) throw new Error(error);

        const memes = client.db("memes");

        const favorites = memes.collection("favorites");

        favorites.find({ person: "Obi Wan" }).toArray((error, foundFavorites) => {
            if (error) throw new Error(error);
            client.close();
            res.send({
                data: foundFavorites
            });
        })
    });
})

router.get('/database/get', (req, res) => {
    res.sendFile(path.join(__dirname+'/../index.html'));
})

module.exports = router;

