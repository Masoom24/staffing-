import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import CandidateLogin from "./Components/Authentication/CandidateLogin/CandidateLogin";
import CandidateDashboard from "./Components/Dashboards/CandidateDashboard/Dashboard/CandidateDashboard";
import SignUp from "./Components/Authentication/CandidateLogin/SignUp/SignUp";
import EmployeeLogin from "./Components/Authentication/EmployeeLogin/EmployeeLogin";
import EmployeeRegistration from "./Components/Authentication/EmployeeLogin/EmployeeRegistration";
import EmployeeDashboard from "./Components/Dashboards/EmployeeDashboard/Dashboard/EmloyeeDashboard";
import AdminLogin from "./Components/Authentication/AdminLogin/AdminLogin";
import MyQualification from "./Components/Dashboards/CandidateDashboard/Pages/My Qualification/MyQualification";
import MyExperience from "./Components/Dashboards/CandidateDashboard/Pages/My Experience/MyExperience";
import "./App.css";
import AdminDashboard from "./Components/Dashboards/Admin/Dashboard/AdminDashboard";
import JobDetails from "./Components/Dashboards/Admin/Pages/JobPosts/JobDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        {/* Candidates */}
        <Route path="/candidate/Login" element={<CandidateLogin />} />
        <Route path="/candidate/Register" element={<SignUp />} />
        <Route path="/candidate/Dashboard" element={<CandidateDashboard />} />
        <Route path="/updateQualification" element={<MyQualification />} />
        <Route path="/updateExperience" element={<MyExperience />} />

        {/* Employees */}
        <Route path="/employee/Login" element={<EmployeeLogin />} />
        <Route
          path="/employee/Registration"
          element={<EmployeeRegistration />}
        />
        <Route path="/employee/Dashboard" element={<EmployeeDashboard />} />

        {/* Admin */}
        <Route path="/admin/Login" element={<AdminLogin />} />
        <Route path="/admin/Dashboard" element={<AdminDashboard />} />
        <Route path="/job-details/:id" element={<JobDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
