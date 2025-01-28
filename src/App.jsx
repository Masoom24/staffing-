import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import CandidateLogin from "./Components/CandidateLogin/CandidateLogin";
import Dashboard from "./Components/Dashboard/Dashboard"
import "./App.css"
import SignUp from "./Components/CandidateLogin/SignUp/SignUp";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}/>
        <Route path="/candidate-login" element={<CandidateLogin/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/> 
        <Route path="/sign-up" element={<SignUp />} />
        {/* 
        
        <Route path="/employee-login" element={<EmployeeLogin/>}/>
        */}
      </Routes>
    </Router>
  );
}

export default App;
