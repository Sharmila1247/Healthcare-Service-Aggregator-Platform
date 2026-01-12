const mongoose = require("mongoose")

const ParamedicSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})

module.exports = mongoose.model("Paramedic", ParamedicSchema)