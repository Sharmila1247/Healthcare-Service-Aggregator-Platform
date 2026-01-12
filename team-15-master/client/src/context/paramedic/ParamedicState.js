import ParamedicContext from "./ParamedicContext";
import { useState } from "react";

import React from 'react';


const ParamedicState = (props) => {

    const patientDummy = [];
    const host = "http://localhost:5000";

    const [patients, setPatients] = useState(patientDummy);

    // Get all patients
    const getPatients = async () => {
        // API call
        const response = await fetch(`${host}/api/patientInfo/fetchallpatients`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // "auth-token": localStorage.getItem('token')
            }
        });
        const json = await response.json();
        setPatients(json);
    };

    // Add a patient
    const addPatient = async (p_id, name, symptoms) => {

        // API call
        const response = await fetch(`${host}/api/patientInfo/addPatient`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ p_id, name, symptoms })
        });
        const json = await response.json();
        setPatients(patients.concat(json));
    };

    // Delete a note
    const deletePatient = async (_id) => {

        // API call
        await fetch(`${host}/api/patientInfo/deletepatient/${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                // "auth-token": localStorage.getItem('token')
            }
        });
        const newPatients = patients.filter((patient) => { return patient._id !== _id; });
        setPatients(newPatients);
    };

    // Make review true
    const isReviewTrue = async (_id) => {

        // API call
        //const response = 
        await fetch(`${host}/api/patientInfo/updateisReviewTrue/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                // "auth-token": localStorage.getItem('token')
            },
            // body: JSON.stringify({ title, description, tag })
        });

        let newPatients = JSON.parse(JSON.stringify(patients));

        // Logic to edit in client
        for (let index = 0; index < newPatients.length; index++) {
            if (newPatients[index]._id === _id) {
                newPatients[index].isReviewed = true;
                break;
            }
        }
        setPatients(newPatients);
    };

    // Make review true
    const isReviewFalse = async (_id) => {

        // API call
        //const response = 
        await fetch(`${host}/api/patientInfo/updateisReviewFalse/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                // "auth-token": localStorage.getItem('token')
            },
            // body: JSON.stringify({ title, description, tag })
        });

        let newPatients = JSON.parse(JSON.stringify(patients));

        // Logic to edit in client
        for (let index = 0; index < newPatients.length; index++) {
            if (newPatients[index]._id === _id) {
                newPatients[index].isReviewed = false;
                break;
            }
        }
        setPatients(newPatients);
    };
    return (
        <ParamedicContext.Provider value={{ patients, addPatient, deletePatient, isReviewTrue, isReviewFalse, getPatients }}>
            {props.children}
        </ParamedicContext.Provider>
    );
};

export default ParamedicState;
