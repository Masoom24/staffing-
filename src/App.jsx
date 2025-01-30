import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import CandidateLogin from "./Components/CandidateLogin/CandidateLogin";
import Dashboard from "./Components/Dashboard/Dashboard";
import "./App.css";
import SignUp from "./Components/CandidateLogin/SignUp/SignUp";
import EmployeeLogin from "./Components/EmployeeLogin/EmployeeLogin";
import EmployeeRegistration from "./Components/EmployeeLogin/EmployeeRegistration";
import EmployeeDashboard from "./Components/EmployeeLogin/EmloyeeDashboard"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/candidate-login" element={<CandidateLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/employee-login" element={<EmployeeLogin />} />
        <Route path="/employee-registration" element={<EmployeeRegistration />} />
        <Route path="/employeeDashboard" element={<EmployeeDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
