const router = require('express').Router();

// Let the client set any secret message

router.get('/setSession', (req, res) => {
    req.session.mySecret = process.env.SESSION_SECRET;
    return res.send({ data: "Session set" });
})

router.get('/getSession', (req, res) => {
    return res.send({ data: req.session.mySecret });
})

module.exports = router;

