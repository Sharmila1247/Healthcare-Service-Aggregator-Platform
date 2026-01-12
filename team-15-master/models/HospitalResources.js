const mongoose = require("mongoose");

const hospitalSchema = mongoose.Schema(
  {
    h_id: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    departments: [{
      name: {
        type: String,
      },
      doctors: {
        type: [
          String
        ]
      },
      resources: {
      }
    }]
  }
);

const HospitalResources = mongoose.model('hospitalres', hospitalSchema);
module.exports = HospitalResources;