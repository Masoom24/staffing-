import React, { useState } from "react";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Dashboard from "./MenuTabs/Dashboard";
import JobPost from "./MenuTabs/JobPost";
import AddJobPost from "./MenuTabs/AddJobPost";
import MyProfile from "./MenuTabs/MyProfile";
import Interview from "./MenuTabs/Interview";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import MenuIcon from "@mui/icons-material/Menu";
import JobDescription from "./MenuTabs/JobDescription/JobDescription";
import UpdateProfile from "./MenuTabs/UpdateProfile/UpdateProfile";
import SettingsComponent from "./MenuTabs/Settings/SettingsComponent";

function EmployeeDashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    setSidebarOpen(false);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`fixed lg:relative transition-all duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } bg-[#96BE25] w-64 p-6 z-50 h-full lg:block absolute top-0 left-0`}
      >
        <div className="flex justify-between">
          <h1 className="mb-4 text-xl text-white font-bold">Team SkyIT</h1>
          <button
            className="lg:hidden text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <KeyboardDoubleArrowLeftIcon />
          </button>
        </div>

        <ul className="mt-6 text-white space-y-4">
          {/* Dashboard Tab */}
          <li
            className={`flex items-center cursor-pointer ${
              activeTab === "Dashboard" ? "font-bold" : ""
            }`}
            onClick={() => handleTabChange("Dashboard")}
          >
            <DashboardOutlinedIcon className="mr-2" />
            Dashboard
          </li>

          <h1 className="text-sm text-gray-200">Main Menu</h1>

          {/* Job Posts Tab */}
          <li
            className={`flex items-center cursor-pointer ${
              activeTab === "Job Posts" ? "font-bold" : ""
            }`}
            onClick={() => handleTabChange("Job Posts")}
          >
            <WorkOutlineIcon className="mr-2" />
            Job Posts
          </li>

          {/* Interviews Tab */}
          <li
            className={`flex items-center cursor-pointer ${
              activeTab === "Interviews" ? "font-bold" : ""
            }`}
            onClick={() => handleTabChange("Interviews")}
          >
            <WorkHistoryOutlinedIcon className="mr-2" />
            Interviews
          </li>

          {/* My Profile Tab */}
          <li
            className={`flex items-center cursor-pointer ${
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
      <div className="flex-1 flex flex-col bg-base-200">
        {/* Navbar */}
        <div className="navbar bg-base-100 shadow-sm flex justify-between p-4">
          <button className="lg:hidden" onClick={() => setSidebarOpen(true)}>
            <MenuIcon />
          </button>
          <h2 className="text-xl font-semibold">{activeTab}</h2>
          <div className="flex items-center">
            <div className="dropdown dropdown-end">
              <button
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User Profile"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </button>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box shadow mt-3 w-52 p-2"
              >
                <li>
                  <a className="justify-between">Profile</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-grow ">
          {activeTab === "Dashboard" && <Dashboard />}
          {activeTab === "Job Posts" && <JobPost handleTabChange={handleTabChange}/>}
          {activeTab === "Add Job Post" && <AddJobPost handleTabChange={handleTabChange}/>}
          {activeTab === "Interviews" && <Interview />}
          {activeTab === "Profile" && <MyProfile handleTabChange={handleTabChange}/>}
          {activeTab === "Job Description" && <JobDescription />}
          {activeTab === "Update Profile" && <UpdateProfile handleTabChange={handleTabChange}/>}
          {activeTab === "Settings" && <SettingsComponent/>}
        </div>

        {/* Footer */}
        <footer className="footer footer-center bg-white text-base-content p-4">
          <p>
            {" "}
            © {new Date().getFullYear()} Client Staffing Developed by - The
            SkyIT
          </p>
        </footer>
      </div>
    </div>
  );
}

export default EmployeeDashboard;
