const router = require("express").Router();
const HospitalResources = require('../models/HospitalResources');

router.get('/getNames', async (req, res) => {
    try {
        const hospitalres = await HospitalResources.find({}, null, { sort: { name: 1 } });
        let op = [];
        for (h of hospitalres) {
            op.push(h.name);
        }
        res.status(200).json({ "hnames": op });
    } catch (err) {
        res.status(500).json(err);
    }
});

//RETURNS ARRAY OF NAMES OF HOSPITALS FOR THE FORM IN PARAMEDIC PAGE
//
//
//
//


router.get('/getResources', async (req, res) => {
    try {
        const params = req.body;
        const hospitalres = await HospitalResources.find({ "h_id": params.h_id }, null, { sort: { name: 1 } });
        res.status(200).json(hospitalres);
    } catch (err) {
        res.status(500).json(err);
    }

})//for hospital page

//GET LIST OF ALL HOSPITAL RESOURCES AS PER FORMAT IN
// {
//     "h_id": "abcd",
//     "name": "test",
//     "departments": [{
//         "name":"dept1",
//       "doctors": ["a","b","c"],
//       "resources": [{
//             "name":"a",
//             "quantity":2
//       }]
//     }]
//   }
router.put('/updateResources', async(req,res)=>{
    try{
        const params = req.body
        
        const hospitalres = await HospitalResources.updateOne({"h_id": params.h_id}, params)
        res.status(200).json(hospitalres)
    }catch(err){
        res.status(500).json(err)

    }
});   //updateResources AGAIN FOR HOSPITAL PAGE - USED FOR ADDING AND REMOVING OR CREATING
//NEED TO SEND THE HOSPITAL ID AND THE UPDATED DATA
//HOSPITAL ID IS IMPORTANT
// OTHER DATA WILL BE MATCHED AND UPDATED

router.post('/addHospital', async (req, res) => {
    try {
        const params = req.body;
        const hospitalres = await HospitalResources.create(params);
        res.status(200).json(hospitalres);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});   //addHospital
//internal api for testing api and making database- no need to deploy
module.exports = router;