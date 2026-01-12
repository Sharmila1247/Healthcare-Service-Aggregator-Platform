const express = require('express');
const createError = require('http-errors');
const cors = require('cors');
const authParamedicsRoute = require('./routes/auth_Paramedics');
const authHospitalRoute = require('./routes/auth_Hospitals');
const patientInfo = require('./routes/patients_info');
const hospitalResRouter = require('./routes/hospitalRes');
const symptomRouter = require('./routes/symptoms_search');

require('./dbconfig');

const app = express();
app.use(cors());
app.use(express.json()); // To parse incoming json data
app.use(express.urlencoded({ extended: true })); // To parse incoming form data


// Setting end points for api
app.use('/auth/hospitals', authHospitalRoute);
app.use('/auth/paramedics', authParamedicsRoute);
app.use('/api/patientInfo', patientInfo);
app.use('/api/hospitalres', hospitalResRouter);
app.use('/api/symptomsearch', symptomRouter);

// If route not present
app.use((req, res, next) => {
    next(createError.NotFound());
});

// Every error will be redirected to here 
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        success: false,
        error: {
            status: err.status || 500,
            message: err.message
        }
    });
});

// Setting Port to listen
const PORT = 6000;
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});