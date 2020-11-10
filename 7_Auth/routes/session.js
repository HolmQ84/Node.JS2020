const router = require('express').Router();

// Let the client set any secret message

router.get('/setSession', (req, res) => {
    req.session.mySecret = req.query.secret;
    req.session.isLoggedIn = true;
    return res.send({ data: "Session set" });
})

router.get('/getSession', (req, res) => {
    console.log("Is logged in: "+req.session.isLoggedIn);
    return res.send({ data: req.session.mySecret });
})

module.exports = router;

