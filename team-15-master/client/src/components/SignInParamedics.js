import React, {useRef} from 'react';
import {NavLink} from "react-router-dom"
import './SignInParamedics.css'

const SignInParamedics = ()=>{
    const email = useRef();
    const password = useRef();
      
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("The form was submitted with the following data:");
        console.log(email.current.value,password.current.value);
    }



    return(
        <div className='SignInParamedics'>
            <div className="appAside" />
            <div className="appForm">

                <div className="formTitle">
                    <NavLink
                        to="/"
                        activeClassName="formTitleLink-active"
                        className="formTitleLink"
                    >
                        Sign In
                    </NavLink>{" "}
                </div>

                <div className="formCenter">
        <form className="formFields" onSubmit={()=>handleSubmit}>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
              ref={email}
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              ref={password}
            />
          </div>

          <div className="formField">
            <button className="formFieldButton">Sign In</button>{" "}
          </div>
        </form>
        </div>
        </div>
        </div>
    )
}

export default SignInParamedics;