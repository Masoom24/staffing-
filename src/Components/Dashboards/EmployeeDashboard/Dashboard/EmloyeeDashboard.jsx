import React, { useState } from "react";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import MenuIcon from "@mui/icons-material/Menu";
import Dashboard from "./DashboardHome";
import JobPost from "../Pages/Job Post/JobPost";
import AddJobPost from "../Pages/Job Post/AddJobPost";
import MyProfile from "../Pages/My Profile/MyProfile";
import Interview from "../Pages/Interview/Interview";
import JobDescription from "../Pages/Job Post/JobDescription";
import UpdateProfile from "../Pages/My Profile/UpdateProfile";


function EmployeeDashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    setSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed lg:relative transition-all duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } bg-[#96BE25] w-80 p-6 z-50 h-full lg:block absolute top-0 left-0`}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">Team SkyIT</h1>
          <button
            className="lg:hidden text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <KeyboardDoubleArrowLeftIcon />
          </button>
        </div>
        <ul className="mt-6 space-y-4 text-lg">
          {/* Dashboard */}
          <li
            className={`flex items-center text-white cursor-pointer ${
              activeTab === "Dashboard" ? "font-bold" : ""
            }`}
            onClick={() => handleTabChange("Dashboard")}
          >
            <DashboardOutlinedIcon className="mr-2" />
            Dashboard
          </li>

          <h2 className="text-sm text-gray-200">Main Menu</h2>

          {/* Job Posts */}
          <li
            className={`flex items-center text-white cursor-pointer ${
              activeTab === "Job Posts" ? "font-bold" : ""
            }`}
            onClick={() => handleTabChange("Job Posts")}
          >
            <WorkOutlineIcon className="mr-2" />
            Job Posts
          </li>

          {/* Interviews */}
          <li
            className={`flex items-center text-white cursor-pointer ${
              activeTab === "Interviews" ? "font-bold" : ""
            }`}
            onClick={() => handleTabChange("Interviews")}
          >
            <WorkHistoryOutlinedIcon className="mr-2" />
            Interviews
          </li>

          {/* Profile */}
          <li
            className={`flex items-center text-white cursor-pointer ${
              activeTab === "Profile" ? "font-bold" : ""
            }`}
            onClick={() => handleTabChange("Profile")}
          >
            <AccountCircleOutlinedIcon className="mr-2" />
            My Profile
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="navbar bg-base-100 shadow-md">
          <div className="flex-none">
            <button
              className="lg:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <MenuIcon />
            </button>
          </div>
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">{activeTab}</a>
          </div>
        </div>

        {/* Tab Content */}
        <div className=" flex-1 overflow-y-auto">
          {activeTab === "Dashboard" && <Dashboard />}
          {activeTab === "Job Posts" && (
            <JobPost handleTabChange={handleTabChange} />
          )}
          {activeTab === "Add Job Post" && (
            <AddJobPost handleTabChange={handleTabChange} />
          )}
          {activeTab === "Interviews" && <Interview />}
          {activeTab === "Profile" && (
            <MyProfile handleTabChange={handleTabChange} />
          )}
          {activeTab === "Job Description" && <JobDescription />}
          {activeTab === "Update Profile" && (
            <UpdateProfile handleTabChange={handleTabChange} />
          )}
          {activeTab === "Settings" && <SettingsComponent />}
        </div>
      </div>
    </div>
  );
}

export default EmployeeDashboard;
