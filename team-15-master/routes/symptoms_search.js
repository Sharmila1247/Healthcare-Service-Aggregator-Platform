const express = require('express');
const router = express.Router();

const symptoms = require('../utils/symptoms');

router.get('/getSymstoms', async (req, res) => {
    try {
        const str = req.body.substr;
        result = symptoms.filter(string => string.includes(str));
        res.send(result);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;