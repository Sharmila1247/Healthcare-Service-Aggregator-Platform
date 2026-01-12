const express = require('express');
const router = express.Router();
const Paramedic = require('../models/Paramedic');
const cryptojs = require('crypto-js');

//REGISTER
router.post("/register", async (req, res) => {
    if (!req.body.id || !req.body.password) {
        res.status(400).json("Please enter complete details..");
        return;
    }
    const hashedPass = cryptojs.AES.encrypt(req.body.password, process.env.CRYPTO_KEY).toString();
    const newParamedic = new Paramedic({
        id: req.body.id,
        password: hashedPass
    });

    try {
        const savedParamedic = await newParamedic.save();
        res.status(201).json(savedParamedic);
    } catch (err) {
        res.status(500).json(err);
    }
});

//LOGIN
router.post('/login', async (req, res) => {
    try {

        const paramedic = await Paramedic.findOne({ id: req.body.id });
        if (!paramedic) {
            res.status(401).json("NO SUCH PARAMEDICS REGISTERED.");
            return;
        }

        const hashedPass = paramedic.password;
        const pass = cryptojs.AES.decrypt(hashedPass, process.env.CRYPTO_KEY).toString(cryptojs.enc.Utf8);
        if (req.body.password !== pass) {
            res.status(401).json("WRONG PASSWORD.");
            return;
        }

        token = jwt.sign({
            id: paramedic._id,
        }, process.env.JWT_KEY, { expiresIn: '24h' });

        const { password, ...others } = paramedic._doc;
        res.status(200).json({ ...others, token });

    } catch (err) {
        res.send(500).json(err);
    }
});


module.exports = router;