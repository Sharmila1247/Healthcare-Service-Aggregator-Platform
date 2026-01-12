const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PatientSchema = new Schema({
    p_id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    symtomps: [{
        type: String
    }],
    isReviewed: {
        type: Boolean,
        default: false
    },
    isApproved: {
        type: Boolean,
        default: false
    }
});

const Patient = mongoose.model('patient', PatientSchema);
module.exports = Patient;