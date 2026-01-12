import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import SignInParamedics from "./components/SignInParamedics";
import SignInHospitals from "./components/SignInHospitals";
import Welcome from "./components/Welcome";
import ParamedicsDashboard from "./components/paramedicDashboard";
import ParamedicState from './context/paramedic/ParamedicState';
import PatientForm from "./components/patientForm";

function App() {
  return (
    <div className="App">
      <ParamedicState>
        <Router>
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/paramedics/login' element={<SignInParamedics />} />
            <Route path='/hospitals/login' element={<SignInHospitals />} />
            <Route path='/paramedics/dashboard' element={<ParamedicsDashboard />} />
            <Route path='/service' element={<PatientForm />} />
            <Route path='/hospitals/dashboard' element={<PatientForm />} />
          </Routes>
        </Router>
      </ParamedicState>
    </div>
  );
}

export default App;
