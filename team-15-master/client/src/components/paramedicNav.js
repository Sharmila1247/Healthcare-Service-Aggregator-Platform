import React from 'react';
import './paramedicNav.css'

const ParamedicNavbar = ()=>{
    return(
        <nav class="navbar">
            <div class="logo">DAKSHAS</div>
                <ul class="nav-links">
                    <input type="checkbox" id="checkbox_toggle" />
                        <label for="checkbox_toggle" class="hamburger">&#9776;</label>
                            <div class="menu">
                                <li><a href="/">Patients</a></li>
                                <li><a href="/">Hospitals</a></li>
                                <li><a href="/">LogOut</a></li>
                            </div>
                </ul>
        </nav>
    )
}

export default ParamedicNavbar;