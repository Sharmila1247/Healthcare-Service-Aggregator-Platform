import React, { useState } from 'react'
import './patientForm.css'

const Accordian = ()=>{
    const {data, setData} = useState([]);
    const {term, setTerm} = useState("");
    return(
        <div class="container">
            <header>Patient Response</header>
            <form action="#">
                <div class="fields">
                    <div class="input-field">
                        <label>Patient ID</label>
                        <input type="text" placeholder="Enter the patient ID" required/>
                    </div>
                </div>
                <div class="input-field">
                    <div class="input-field">
                        <label for="s1">Symptom 1</label>
                                <select name="Symptom 1" id="s1">
                                    <option value="javascript">Option 1</option>
                                    <option value="php">Option 2</option>
                                    <option value="java">Option 3</option>
                                    <option value="golang">Option 4</option>
                                    <option value="python">Option 5</option>
                                    <option value="c#">Option 6</option>
                                    <option value="C++">Option 7</option>
                                    <option value="erlang">Option 8</option>
                                </select>
                    </div>
                    <div class="input-field">
                        <label for="s1">Symptom 2</label>
                                <select name="Symptom 1" id="s1">
                                    <option value="javascript">Option 1</option>
                                    <option value="php">Option 2</option>
                                    <option value="java">Option 3</option>
                                    <option value="golang">Option 4</option>
                                    <option value="python">Option 5</option>
                                    <option value="c#">Option 6</option>
                                    <option value="C++">Option 7</option>
                                    <option value="erlang">Option 8</option>
                                </select>
                    </div>
                    <div class="input-field">
                        <label for="s1">Symptom 3</label>
                                <select name="Symptom 1" id="s1">
                                    <option value="javascript">Option 1</option>
                                    <option value="php">Option 2</option>
                                    <option value="java">Option 3</option>
                                    <option value="golang">Option 4</option>
                                    <option value="python">Option 5</option>
                                    <option value="c#">Option 6</option>
                                    <option value="C++">Option 7</option>
                                    <option value="erlang">Option 8</option>
                                </select>
                    </div>
                    <div class="input-field">
                        <label for="s1">Symptom 4</label>
                                <select name="Symptom 1" id="s1">
                                    <option value="javascript">Option 1</option>
                                    <option value="php">Option 2</option>
                                    <option value="java">Option 3</option>
                                    <option value="golang">Option 4</option>
                                    <option value="python">Option 5</option>
                                    <option value="c#">Option 6</option>
                                    <option value="C++">Option 7</option>
                                    <option value="erlang">Option 8</option>
                                </select>
                    </div>
                    <div class="input-field">
                        <label for="s1">Symptom 5</label>
                                <select name="Symptom 1" id="s1">
                                <option value="javascript">Option 1</option>
                                <option value="php">Option 2</option>
                                <option value="java">Option 3</option>
                                <option value="golang">Option 4</option>
                                <option value="python">Option 5</option>
                                <option value="c#">Option 6</option>
                                <option value="C++">Option 7</option>
                                <option value="erlang">Option 8</option>
                                </select>
                    </div>
                </div>
                    
                        
                        <div class="input-field">
                            <label>Additional Symptoms</label>
                            <input type="text" placeholder="Additional Symptoms"/>
                        </div>
                <center>
                        <button class="sumbit">
                            <span class="btnText">Submit</span>
                            <i class="uil uil-navigator"></i>
                        </button>
                </center>
        </form>
    </div>
    )
}

export default Accordian;