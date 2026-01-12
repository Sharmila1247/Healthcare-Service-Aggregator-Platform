import React, { useRef } from 'react'
import "./welcome.css"

const Welcome = ()=>{
    const pid = useRef();

    const handleHospital = ()=>{
        window.location = '/hospitals/login'
    }

    const handleParamedic = ()=>{
        window.location = '/paramedics/login'
    }

    const handleService = ()=>{
        window.location = '/service'
    }

    return(
        <div className="main">
        <div className="navbar">
            <div className="icon">
                <h2 className="logo">Dakshas</h2>
            </div>
        </div> 
        <div className="content">
            <div className='image-div'>
                <img 
                    src='https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGVhbHRoY2FyZXxlbnwwfHwwfHw%3D&w=1000&q=80'
                    alt=''
                    className='doctor-image'
                />   
            </div>   
            <div className='right-div'>
                <div className="right-div-form">
                    <h2>Please login as : </h2>
                    <div className='btn-div'>
                    <button className="btnn" onClick={handleHospital}>Hospital Service</button>
                    <button className="btnn" onClick={handleParamedic}>Paramedic</button> 
                    </div> 
                </div>
                <div className='track-services'>
                    <input type="text" className='pidInput' name="pid" ref={pid} placeholder="Enter Your PID"></input>
                </div>
                <div>
                    <button className='service-button' onClick={handleService}>ASK-FOR-SERVICE</button>
                </div>
            </div>     
        </div>
        </div>
    )
}

export default Welcome