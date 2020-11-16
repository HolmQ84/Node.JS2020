const userRouter = require('express').Router();

const crypto = require('crypto');



userRouter.get('/create', (req, res) => {
    res.send(footer + create + header)
})

module.exports = userRouter;