import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import CandidateLogin from "./Components/Authentication/CandidateLogin/CandidateLogin";
import CandidateDashboard from "./Components/Dashboards/CandidateDashboard/CandidateDashboard";
import SignUp from "./Components/Authentication/CandidateLogin/SignUp/SignUp"
import EmployeeLogin from "./Components/Authentication/EmployeeLogin/EmployeeLogin";
import EmployeeRegistration from "./Components/Authentication/EmployeeLogin/EmployeeRegistration";
import EmployeeDashboard from "./Components/Dashboards/EmployeeDashboard/EmloyeeDashboard";
import AdminLogin from "./Components/Authentication/AdminLogin/AdminLogin"
import AdminDashboard from "./Components/Dashboards/Admin/AdminDashboard"
import MyQualification from "./Components/Dashboards/CandidateDashboard/MenuTabs/MyQualification";
import MyExperience from "./Components/Dashboards/CandidateDashboard/MenuTabs/MyExperience";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/candidate-login" element={<CandidateLogin />} />
        <Route path="/dashboard" element={<CandidateDashboard />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/employee-login" element={<EmployeeLogin />} />
        <Route path="/employee-registration" element={<EmployeeRegistration />} />
        <Route path="/employeeDashboard" element={<EmployeeDashboard />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />

        <Route path="/updateQualification" element={<MyQualification/>}/>
        <Route path="/updateExperience" element={<MyExperience/>}/>
      </Routes>
    </Router>
  );
}

export default App;
