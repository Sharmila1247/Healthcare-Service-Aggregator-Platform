const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');

// ROUTE 1: Fetch all Patients info: GET "/api/patientInfo/fetchallpatients"
router.get("/fetchallpatients", async (req, res) => {
    try {
        Patient.find({}, function (err, patients) {
            res.send(patients);
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

// ROUTE 2: Adding a new patient record: POST "/api/patientInfo/addPatient"
router.post("/addPatient", async (req, res) => {
    try {

        // Finds the validation errors in this request and wraps them in an object with handy functions
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     return res.status(400).json({ errors: errors.array() });
        // }

        const { p_id, name, symptoms } = req.body;
        const patient = new Patient({
            p_id, name, symptoms
        });

        // Add patient
        const savedPatient = await patient.save();
        res.json(savedPatient);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

// ROUTE 3: Updating patient's review status to true: PUT "/api/patientInfo/updateisReviewTrue"
router.put("/updateisReviewTrue/:id", async (req, res) => {
    try {

        // Find patient info by id, check if present
        let patient = await Patient.findById(req.params.id);
        if (!patient) { return res.status(404).send("Not Found"); }
        // if (note.user.toString() !== req.user.id) { return res.status(401).send("Not Allowed"); }

        // Update Record
        patient.isReviewed = true;
        patient = await Patient.findByIdAndUpdate(req.params.id, { $set: patient }, { new: true });
        res.json(patient);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

// ROUTE 4: Updating patient's review status to false: PUT "/api/patientInfo/updateisReviewFalse"
router.put("/updateisReviewFalse/:id", async (req, res) => {
    try {

        // Find patient info by id, check if present
        let patient = await Patient.findById(req.params.id);
        if (!patient) { return res.status(404).send("Not Found"); }
        // if (note.user.toString() !== req.user.id) { return res.status(401).send("Not Allowed"); }

        // Update Record
        patient.isReviewed = false;
        patient = await Patient.findByIdAndUpdate(req.params.id, { $set: patient }, { new: true });
        res.json(patient);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

// ROUTE 5: Delete a patient record: DELETE "/api/patientInfo/deletepatient"
router.delete("/deletepatient/:id", async (req, res) => {
    try {

        // Find patient info by id, check if present
        let patient = await Patient.findById(req.params.id);
        if (!patient) { return res.status(404).send("Not Found"); }
        // if (patient.user.toString() !== req.user.id) { return res.status(401).send("Not Allowed"); }

        // Delete Patient record
        patient = await Patient.findByIdAndDelete(req.params.id);
        res.json({ "Success": "patient has been deleted", patient: patient });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;