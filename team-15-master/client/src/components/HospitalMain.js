import { Box } from '@mui/material';
import React from 'react';
import { Fragment } from 'react';
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';

function HospitalMain() {



    let [DermatologistV, setDermatologistV] = React.useState(0);
    let [DermatologistS, setDermatologistS] = React.useState(0);
    let [GastroenterologistsV, setGastroenterologistsV] = React.useState(0);
    let [GastroenterologistsS, setGastroenterologistsS] = React.useState(0);
    let [AllergistsV, setAllergistsV] = React.useState(0);
    let [AllergistsS, setAllergistsS] = React.useState(0);
    let [OsteopathicV, setOsteopathicV] = React.useState(0);
    let [OsteopathicS, setOsteopathicS] = React.useState(0);
    let [EndocrinologistV, setEndocrinologistV] = React.useState(0);
    let [EndocrinologistS, setEndocrinologistS] = React.useState(0);
    let [PulmonologistV, setPulmonologistV] = React.useState(0);
    let [PulmonologistS, setPulmonologistS] = React.useState(0);
    let [CardiologistV, setCardiologistV] = React.useState(0);
    let [CardiologistS, setCardiologistS] = React.useState(0);
    let [NeurologistsV, setNeurologistsV] = React.useState(0);
    let [NeurologistsS, setNeurologistsS] = React.useState(0);
    let [OrthopedicV, setOrthopedicV] = React.useState(0);
    let [OrthopedicS, setOrthopedicS] = React.useState(0);
    let [PhysicianV, setPhysicianV] = React.useState(0);
    let [PhysicianS, setPhysicianS] = React.useState(0);
    let [HepatologistV, setHepatologistV] = React.useState(0);
    let [HepatologistS, setHepatologistS] = React.useState(0);
    let [ProctologistV, setProctologistV] = React.useState(0);
    let [ProctologistS, setProctologistS] = React.useState(0);
    let [RadiologistV, setRadiologistV] = React.useState(0);
    let [RadiologistS, setRadiologistS] = React.useState(0);
    let [RheumatologistsV, setRheumatologistsV] = React.useState(0);
    let [RheumatologistsS, setRheumatologistsS] = React.useState(0);
    let [OtolaryngologistsV, setOtolaryngologistsV] = React.useState(0);
    let [OtolaryngologistsS, setOtolaryngologistsS] = React.useState(0);
    let [UrologistV, setUrologistV] = React.useState(0);
    let [UrologistS, setUrologistS] = React.useState(0);

    let incDermatologistV = () => {
        setDermatologistV(Number(DermatologistV) + 1);
    };
    let incDermatologistS = () => {
        setDermatologistS(Number(DermatologistS) + 1);
    };
    let incGastroenterologistsV = () => {
        setGastroenterologistsV(Number(GastroenterologistsV) + 1);
    };
    let incGastroenterologistsS = () => {
        setGastroenterologistsS(Number(GastroenterologistsS) + 1);
    };
    let incAllergistsV = () => {
        setAllergistsV(Number(AllergistsV) + 1);
    };
    let incAllergistsS = () => {
        setAllergistsS(Number(AllergistsS) + 1);
    };
    let incOsteopathicV = () => {
        setOsteopathicV(Number(OsteopathicV) + 1);
    };
    let incOsteopathicS = () => {
        setOsteopathicS(Number(OsteopathicS) + 1);
    };
    let incEndocrinologistV = () => {
        setEndocrinologistV(Number(EndocrinologistV) + 1);
    };
    let incEndocrinologistS = () => {
        setEndocrinologistS(Number(EndocrinologistS) + 1);
    };
    let incPulmonologistV = () => {
        setPulmonologistV(Number(PulmonologistV) + 1);
    };
    let incPulmonologistS = () => {
        setPulmonologistS(Number(PulmonologistS) + 1);
    };
    let incCardiologistV = () => {
        setCardiologistV(Number(CardiologistV) + 1);
    };
    let incCardiologistS = () => {
        setCardiologistS(Number(CardiologistS) + 1);
    };
    let incNeurologistsV = () => {
        setNeurologistsV(Number(NeurologistsV) + 1);
    };
    let incNeurologistsS = () => {
        setNeurologistsS(Number(NeurologistsS) + 1);
    };
    let incOrthopedicV = () => {
        setOrthopedicV(Number(OrthopedicV) + 1);
    };
    let incOrthopedicS = () => {
        setOrthopedicS(Number(OrthopedicS) + 1);
    };
    let incPhysicianV = () => {
        setPhysicianV(Number(PhysicianV) + 1);
    };
    let incPhysicianS = () => { setPhysicianS(Number(PhysicianS) + 1); };
    let incHepatologistV = () => { setHepatologistV(Number(HepatologistV) + 1); };
    let incHepatologistS = () => { setHepatologistS(Number(HepatologistS) + 1); };
    let incProctologistV = () => { setProctologistV(Number(ProctologistV) + 1); };
    let incProctologistS = () => { setProctologistS(Number(ProctologistS) + 1); };
    let incRadiologistV = () => { setRadiologistV(Number(RadiologistV) + 1); };
    let incRadiologistS = () => { setRadiologistS(Number(RadiologistS) + 1); };
    let incRheumatologistsV = () => { setRheumatologistsV(Number(RheumatologistsV) + 1); };
    let incRheumatologistsS = () => { setRheumatologistsS(Number(RheumatologistsS) + 1); };
    let incOtolaryngologistsV = () => { setOtolaryngologistsV(Number(OtolaryngologistsV) + 1); };
    let incOtolaryngologistsS = () => { setOtolaryngologistsS(Number(OtolaryngologistsS) + 1); };
    let incUrologistV = () => { setUrologistV(Number(UrologistV) + 1); };
    let incUrologistS = () => { setUrologistS(Number(UrologistS) + 1); };

    let decDermatologistV = () => { if (DermatologistV > 0) { setDermatologistV(DermatologistV - 1); } };
    let decDermatologistS = () => { if (DermatologistS > 0) { setDermatologistS(DermatologistS - 1); } };
    let decGastroenterologistsV = () => { if (GastroenterologistsV > 0) { setGastroenterologistsV(GastroenterologistsV - 1); } };
    let decGastroenterologistsS = () => { if (GastroenterologistsS > 0) { setGastroenterologistsS(GastroenterologistsS - 1); } };
    let decAllergistsV = () => { if (AllergistsV > 0) { setAllergistsV(AllergistsV - 1); } };
    let decAllergistsS = () => { if (AllergistsS > 0) { setAllergistsS(AllergistsS - 1); } };
    let decOsteopathicV = () => { if (OsteopathicV > 0) { setOsteopathicV(OsteopathicV - 1); } };
    let decOsteopathicS = () => { if (OsteopathicS > 0) { setOsteopathicS(OsteopathicS - 1); } };
    let decEndocrinologistV = () => { if (EndocrinologistV > 0) { setEndocrinologistV(EndocrinologistV - 1); } };
    let decEndocrinologistS = () => { if (EndocrinologistS > 0) { setEndocrinologistS(EndocrinologistS - 1); } };
    let decPulmonologistV = () => { if (PulmonologistV > 0) { setPulmonologistV(PulmonologistV - 1); } };
    let decPulmonologistS = () => { if (PulmonologistS > 0) { setPulmonologistS(PulmonologistS - 1); } };
    let decCardiologistV = () => { if (CardiologistV > 0) { setCardiologistV(CardiologistV - 1); } };
    let decCardiologistS = () => { if (CardiologistS > 0) { setCardiologistS(CardiologistS - 1); } };
    let decNeurologistsV = () => { if (NeurologistsV > 0) { setNeurologistsV(NeurologistsV - 1); } };
    let decNeurologistsS = () => { if (NeurologistsS > 0) { setNeurologistsS(NeurologistsS - 1); } };
    let decOrthopedicV = () => { if (OrthopedicV > 0) { setOrthopedicV(OrthopedicV - 1); } };
    let decOrthopedicS = () => { if (OrthopedicS > 0) { setOrthopedicS(OrthopedicS - 1); } };
    let decPhysicianV = () => { if (PhysicianV > 0) { setPhysicianV(PhysicianV - 1); } };
    let decPhysicianS = () => { if (PhysicianS > 0) { setPhysicianS(PhysicianS - 1); } };
    let decHepatologistV = () => { if (HepatologistV > 0) { setHepatologistV(HepatologistV - 1); } };
    let decHepatologistS = () => { if (HepatologistS > 0) { setHepatologistS(HepatologistS - 1); } };
    let decProctologistV = () => { if (ProctologistV > 0) { setProctologistV(ProctologistV - 1); } };
    let decProctologistS = () => { if (ProctologistS > 0) { setProctologistS(ProctologistS - 1); } };
    let decRadiologistV = () => { if (RadiologistV > 0) { setRadiologistV(RadiologistV - 1); } };
    let decRadiologistS = () => { if (RadiologistS > 0) { setRadiologistS(RadiologistS - 1); } };
    let decRheumatologistsV = () => { if (RheumatologistsV > 0) { setRheumatologistsV(RheumatologistsV - 1); } };
    let decRheumatologistsS = () => { if (RheumatologistsS > 0) { setRheumatologistsS(RheumatologistsS - 1); } };
    let decOtolaryngologistsV = () => { if (OtolaryngologistsV > 0) { setOtolaryngologistsV(OtolaryngologistsV - 1); } };
    let decOtolaryngologistsS = () => { if (OtolaryngologistsS > 0) { setOtolaryngologistsS(OtolaryngologistsS - 1); } };
    let decUrologistV = () => { if (UrologistV > 0) { setUrologistV(UrologistV - 1); } };
    let decUrologistS = () => { if (UrologistS > 0) { setUrologistS(UrologistS - 1); } };

    let handleChangeDermatologistV = (e) => { setDermatologistV(e.target.value); };
    let handleChangeDermatologistS = (e) => { setDermatologistS(e.target.value); };
    let handleChangeGastroenterologistsV = (e) => { setGastroenterologistsV(e.target.value); };
    let handleChangeGastroenterologistsS = (e) => { setGastroenterologistsS(e.target.value); };
    let handleChangeAllergistsV = (e) => { setAllergistsV(e.target.value); };
    let handleChangeAllergistsS = (e) => { setAllergistsS(e.target.value); };
    let handleChangeOsteopathicV = (e) => { setOsteopathicV(e.target.value); };
    let handleChangeOsteopathicS = (e) => { setOsteopathicS(e.target.value); };
    let handleChangeEndocrinologistV = (e) => { setEndocrinologistV(e.target.value); };
    let handleChangeEndocrinologistS = (e) => { setEndocrinologistS(e.target.value); };
    let handleChangePulmonologistV = (e) => { setPulmonologistV(e.target.value); };
    let handleChangePulmonologistS = (e) => { setPulmonologistS(e.target.value); };
    let handleChangeCardiologistV = (e) => { setCardiologistV(e.target.value); };
    let handleChangeCardiologistS = (e) => { setCardiologistS(e.target.value); };
    let handleChangeNeurologistsV = (e) => { setNeurologistsV(e.target.value); };
    let handleChangeNeurologistsS = (e) => { setNeurologistsS(e.target.value); };
    let handleChangeOrthopedicV = (e) => { setOrthopedicV(e.target.value); };
    let handleChangeOrthopedicS = (e) => { setOrthopedicS(e.target.value); };
    let handleChangePhysicianV = (e) => { setPhysicianV(e.target.value); };
    let handleChangePhysicianS = (e) => { setPhysicianS(e.target.value); };
    let handleChangeHepatologistV = (e) => { setHepatologistV(e.target.value); };
    let handleChangeHepatologistS = (e) => { setHepatologistS(e.target.value); };
    let handleChangeProctologistV = (e) => { setProctologistV(e.target.value); };
    let handleChangeProctologistS = (e) => { setProctologistS(e.target.value); };
    let handleChangeRadiologistV = (e) => { setRadiologistV(e.target.value); };
    let handleChangeRadiologistS = (e) => { setRadiologistS(e.target.value); };
    let handleChangeRheumatologistsV = (e) => { setRheumatologistsV(e.target.value); };
    let handleChangeRheumatologistsS = (e) => { setRheumatologistsS(e.target.value); };
    let handleChangeOtolaryngologistsV = (e) => { setOtolaryngologistsV(e.target.value); };
    let handleChangeOtolaryngologistsS = (e) => { setOtolaryngologistsS(e.target.value); };
    let handleChangeUrologistV = (e) => { setUrologistV(e.target.value); };
    let handleChangeUrologistS = (e) => { setUrologistS(e.target.value); };

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
   
    let getResourcesData = async () => {
        let response = await axios.get('/getResources'); // api link 
        for (let i = 0; i<response.data.resources.departments.length ; i++){
                    if(response.data.resources.departments.name == "dept1"){
                        setDermatologistV(response.data.resources.departments.resources.quantity);
                    }
                    if(response.data.resources.departments.name == "dept2"){
                        setGastroenterologistsV(response.data.resources.departments.resources.quantity);
                    }
                    if(response.data.resources.departments.name == "dept3"){
                        setAllergistsV(response.data.resources.departments.resources.quantity);
                    }
        }
    }


    return (
        <Fragment>
            <div style={{ display: "flex" }}>
                <div style={{ display: "inline-block", minHeight: "100vh", width: "50vw", padding: "50px" }}>

                    {/*use render divs to generate 18 divs */}
                    {/* {renderdivs(18)} */}
                    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>

                        <div style={{ display: "inline-flex", gap: "5px", flexDirection: "row", width: "100%" }}>
                            <label>Dermatologist</label>
                            {/* set left margin  */}
                            <div style={{marginLeft:"94px"}}>
                                <input type="number" value={DermatologistV} onChange={handleChangeDermatologistV} />
                            </div>
                            <div>
                            <input type="number" value={DermatologistS} onChange={handleChangeDermatologistS} />
                            </div>
                        </div>

                        <div style={{ display: "inline-flex", gap: "5px", flexDirection: "row", width: "100%" }}>
                            <label>Gastroenterologists</label  >           
                            <div style={{marginLeft:"66px"}}>
                                <input type="number" value={GastroenterologistsV} onChange={handleChangeGastroenterologistsV} />
                            </div>                 
                            <div>
                            <input type="number" value={GastroenterologistsS} onChange={handleChangeGastroenterologistsS} />
                            </div>
                        </div>

                        <div style={{ display: "inline-flex", gap: "5px", flexDirection: "row", width: "100%" }}>
                            <label>Allergists</label>
                            <div style={{marginLeft:"121px"}}>
                                <input type="number" value={AllergistsV} onChange={handleChangeAllergistsV} />
                            </div>
                            <div>
                            <input type="number" value={AllergistsS} onChange={handleChangeAllergistsS} />
                            </div>
                        </div>

                        <div style={{ display: "inline-flex", gap: "5px", flexDirection: "row", width: "100%" }}>
                            <label>Osteopathic</label>
                            <div style={{marginLeft:"94px"}}>
                                <input type="number" value={OsteopathicV} onChange={handleChangeOsteopathicV} />
                            </div>
                            <div>
                            <input type="number" value={OsteopathicS} onChange={handleChangeOsteopathicS} />
                            </div>
                        </div>

                        <div style={{ display: "inline-flex", gap: "5px", flexDirection: "row", width: "100%" }}>
                            <label>Endocrinologists</label>
                            <div style={{marginLeft:"94px"}}>
                                <input type="number" value={EndocrinologistV} onChange={handleChangeEndocrinologistV} />
                                </div>
                                <div>
                            <input type="number" value={EndocrinologistS} onChange={handleChangeEndocrinologistS} />
                                </div>
                        </div>

                        <div style={{ display: "inline-flex", gap: "5px", flexDirection: "row", width: "100%" }}>
                            <label>Pulmonologists</label>
                                <div style={{marginLeft:"94px"}}>
                                <input type="number" value={PulmonologistV} onChange={handleChangePulmonologistV} />
                                </div>
                                <div>
                                    <input type="number" value={PulmonologistS} onChange={handleChangePulmonologistS} />
                                    </div>
                                    </ div>

                        


                        <div style={{ display: "inline-flex", gap: "5px", flexDirection: "row", width: "100%" }}>
                            <label>Cardiologist </label>
                                <div style={{marginLeft:"94px"}}>
                                    <input type="number" value={CardiologistV} onChange={handleChangeCardiologistV} />
                                </div>
                                <div>
                                    <input type="number" value={CardiologistS} onChange={handleChangeCardiologistS} />
                                    </div>
                                    </ div>

                        <div style={{ display: "inline-flex", gap: "5px", flexDirection: "row", width: "100%" }}>
                            <label>Urologist</label>
                            <div style={{marginLeft:"94px"}}>
                                <input type="number" value={UrologistV} onChange={handleChangeUrologistV} />
                            </div>
                            <div>
                            <input type="number" value={UrologistS} onChange={handleChangeUrologistS} />
                            </div>
                            </div>

                        <div style={{ display: "inline-flex", gap: "5px", flexDirection: "row", width: "100%" }}>
                            <label>Neurologists</label>
                            <div style={{marginLeft:"94px"}}>
                                <input type="number" value={NeurologistsV} onChange={handleChangeNeurologistsV} />
                            </div>
                            <div>
                            <input type="number" value={NeurologistsS} onChange={handleChangeNeurologistsS} />
                            </div>
                        </div>

                        <div style={{ display: "inline-flex", gap: "5px", flexDirection: "row", width: "100%" }}>
                            <label>OrthopedicV</label>
                            <div style={{marginLeft:"94px"}}>
                                <input type="number" value={OrthopedicV} onChange={handleChangeOrthopedicV} />
                            </div>
                            <div>
                            <input type="number" value={OrthopedicS} onChange={handleChangeOrthopedicS} />
                            </div>
                        </div>

                        <div style={{ display: "inline-flex", gap: "5px", flexDirection: "row", width: "100%" }}>
                            <label>Physician</label>
                            <div style={{marginLeft:"94px"}}>
                                <input type="number" value={PhysicianV} onChange={handleChangePhysicianV} />
                            </div>
                            <div>
                            <input type="number" value={PhysicianS} onChange={handleChangePhysicianS} />
                            </div>
                        </div>

                        <div style={{ display: "inline-flex", gap: "5px", flexDirection: "row", width: "100%" }}>
                            <label>Hepatologist</label>
                            <div style={{marginLeft:"94px"}}>
                                <input type="number" value={HepatologistV} onChange={handleChangeHepatologistV} />
                            </div>
                            <div>
                            <input type="number" value={HepatologistS} onChange={handleChangeHepatologistS} />
                            </div>
                        </div>

                        <div style={{ display: "inline-flex", gap: "5px", flexDirection: "row", width: "100%" }}>
                            <label>Proctologist</label>
                            <div style={{marginLeft:"94px"}}>
                                <input type="number" value={ProctologistV} onChange={handleChangeProctologistV} />
                            </div>
                            <div>
                            <input type="number" value={ProctologistS} onChange={handleChangeProctologistS} />
                            </div>
                        </div>

                        <div style={{ display: "inline-flex", gap: "5px", flexDirection: "row", width: "100%" }}>
                            <label>Radiologist</label>
                            <div style={{marginLeft:"94px"}}>
                                <input type="number" value={RadiologistV} onChange={handleChangeRadiologistV} />
                            </div>
                            <div>
                            <input type="number" value={RadiologistS} onChange={handleChangeRadiologistS} />
                            </div>
                        </div>

                        <div style={{ display: "inline-flex", gap: "5px", flexDirection: "row", width: "100%" }}>
                            <label>Rheumatologists</label>
                            <div style={{marginLeft:"94px"}}>
                                <input type="number" value={RheumatologistsV} onChange={handleChangeRheumatologistsV} />
                            </div>
                            <div>
                            <input type="number" value={RheumatologistsV} onChange={handleChangeRheumatologistsS} />
                            </div>
                        </div>

                        <div style={{ display: "inline-flex", gap: "5px", flexDirection: "row", width: "100%" }}>
                            <label>Otolaryngologists</label>
                            <div style={{marginLeft:"94px"}}>
                                <input type="number" value={OtolaryngologistsV} onChange={handleChangeOtolaryngologistsV} />
                            </div>
                            <div>
                            <input type="number" value={OtolaryngologistsS} onChange={handleChangeOtolaryngologistsS} />
                            </div>
                        </div>

                        <button  style={{marginTop: "10px"}}>Save</button>
                        <button  style={{marginTop: "10px"}}>Reset</button>

                    </div>


                    {/* <Box style={{ display: "inline-block", marginRight: "2pc", padding: "2pc" }}>

                <div class="input-group-prepend"> DERMINOLOGIST :     <button class="btn btn-outline-primary" type="button" onClick={decDermatologistV}>-</button>  </div>  <input type="text" class="form-control" value={DermatologistV} onChange={handleChangeDermatologistV} />  <div class="input-group-prepend">    <button class="btn btn-outline-primary" type="button" onClick={incDermatologistV}>+</button>  <button class="btn btn-outline-primary" type="button" onClick={decDermatologistV}>-</button>  </div>  <input type="text" class="form-control" value={DermatologistS} onChange={handleChangeDermatologistS} />  <div class="input-group-prepend">    <button class="btn btn-outline-primary" type="button" onClick={incDermatologistS}>+</button></div>




            </Box>

            <Box style={{ display: "inline-block" }}>





            </Box> */}
                    {/* <Grid style={{paddingTop:'2%', paddingBottom:'2%'}} container spacing={1} columns={4}>
                    <Grid item xs={2}>
                            <div class="input-group-prepend"> DERMINOLOGIST :     <button class="btn btn-outline-primary" type="button" onClick={decDermatologistV}>-</button>  </div>  <input type="text" class="form-control" value={DermatologistV} onChange={handleChangeDermatologistV} />  <div class="input-group-prepend">    <button class="btn btn-outline-primary" type="button" onClick={incDermatologistV}>+</button>  <button class="btn btn-outline-primary" type="button" onClick={decDermatologistV}>-</button>  </div>  <input type="text" class="form-control" value={DermatologistS} onChange={handleChangeDermatologistS} />  <div class="input-group-prepend">    <button class="btn btn-outline-primary" type="button" onClick={incDermatologistS}>+</button></div>
                    </Grid>
                    <Grid item xs={1.3}></Grid>
                            <Grid item xs={0.7}>
                    
                    </Grid>
        </Grid> */}

                </div>
                <div style={{ minHeight: "100vh", width: "50vw" }}>

                            <div style={{padding: "20px",marginTop: "40px"}}>

                                 asd

                            </div>
                </div>
            </div>
        </Fragment>
    );
}
export default HospitalMain