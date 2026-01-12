import { React, useContext, useEffect, useRef, useState } from 'react';
import ParamedicNavbar from './paramedicNav';
import { useHistory } from 'react-router-dom';
import ParamedicContext from '../context/paramedic/ParamedicContext';
import './paramedicDashboard.css'
import axios from 'axios'

const ParamedicDashboard = ()=>{
    const context = useContext(ParamedicContext);
    const { patients, deletePatient, isReviewTrue, isReviewFalse, getPatients } = context;
    const [active, setActive] = useState(false);
    const [current, setCurrent] = useState({});
    let csvContent = "data:text/csv;charset=utf-8,";
   
    useEffect(() => {
        // if(localStorage.getItem('token'))
        getPatients();
        // else
        //     history.push('/login')
        // eslint-disable-next-line
    }, []);

    const handleFormOpen = (user)=>{
        setActive(true)
        setCurrent(user)
    }

    return (
        <div>
            <ParamedicNavbar />
            <div className='patients'>
                <div className='prequests'>
                    {patients.map(user => {
                        if (user.isReviewed === false)
                            return (
                                <div className='singleRequest'>
                                    {user.p_id}
                                    <button className='review' onClick={()=>handleFormOpen(user)}>REVIEW</button>
                                </div>
                            );
                    })}
                </div>
                <div className='pform'>
                    {active && <div class="form">
                        <div class="title">Welcome</div>
                        <div class="input-container ic1">
                            <input id="firstname" class="input" type="text" placeholder=" " />
                            <div class="cut"></div>
                            <label htmlFor="firstname" class="placeholder" disabled>{current.p_id}</label>
                        </div>
                        <div class="input-container ic2">
                            <input id="lastname" class="input" type="text" placeholder=" " />
                            <div class="cut"></div>
                            <label htmlFor="lastname" class="placeholder" disabled>
                                vomiting, Headache, Fever, Irritability
                            </label>
                        </div>
                        <div class="input-container ic2">
                            <input id="email" class="input" type="text" placeholder=" " />
                            <div class="cut cut-short"></div>
                            <label htmlFor="email" class="placeholder">DEPARTMENT</label>
                        </div>
                        <button type="text" class="submit">REVIEW</button>
                        <button type="text" class="submit">CANCEL</button>
                    </div>}
                </div>
                <div className='papprove'>
                    {patients.map(user => {
                        if (user.isReviewed === true)
                            return (
                                <div className='singleRequest approved'>
                                    {user.p_id}
                                    <button className='review'>APPROVE</button>
                                </div>
                            );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ParamedicDashboard;