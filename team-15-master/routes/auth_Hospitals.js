const express = require('express');
const router = express.Router();
const Hospital = require('../models/Hospital');
const cryptojs = require('crypto-js');

//REGISTER
router.post("/register", async (req, res) => {
    if (!req.body.id || !req.body.password) {
        res.status(400).json("Please enter complete details..");
        return;
    }
    const hashedPass = cryptojs.AES.encrypt(req.body.password, process.env.CRYPTO_KEY).toString();
    const newHospital = new Hospital({
        id: req.body.id,
        password: hashedPass
    });

    try {
        const savedHospital = await newHospital.save();
        res.status(201).json(savedHospital);
    } catch (err) {
        res.status(500).json(err);
    }
});

//LOGIN
router.post('/login', async (req, res) => {
    try {

        const hospital = await Hospital.findOne({ id: req.body.id });
        if (!hospital) {
            res.status(401).json("NO SUCH HOSPITAL REGISTERED.");
            return;
        }

        const hashedPass = hospital.password;
        const pass = cryptojs.AES.decrypt(hashedPass, process.env.CRYPTO_KEY).toString(cryptojs.enc.Utf8);
        if (req.body.password !== pass) {
            res.status(401).json("WRONG PASSWORD.");
            return;
        }

        token = jwt.sign({
            id: hospital._id,
        }, process.env.JWT_KEY, { expiresIn: '24h' });

        const { password, ...others } = hospital._doc;
        res.status(200).json({ ...others, token });

    } catch (err) {
        res.send(500).json(err);
    }
});


module.exports = router;