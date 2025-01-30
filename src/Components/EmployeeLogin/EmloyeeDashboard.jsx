import React, { useState } from "react";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import NextWeekOutlinedIcon from "@mui/icons-material/NextWeekOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Dashboard from "./MenuTabs/Dashboard";
import JobPost from "./MenuTabs/JobPost";
import AddJobPost from "./MenuTabs/AddJobPost";
import MyProfile from "./MenuTabs/MyProfile";
import Interview from "./MenuTabs/Interview";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

function EmployeeDashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className="flex h-screen">
      <div style={{ backgroundColor: "#96BE25" }} className="w-1/4 p-6">
        <div className="flex justify-between">
          <h1 className=" mb-4 text-xl text-white font-bold">Team SkyIT</h1>
          <label htmlFor="my-drawer-2" className="btn btn-ghost text-white">
            <KeyboardDoubleArrowLeftIcon />
          </label>
        </div>
        <ul className="steps steps-vertical mt-6 text-white gap-4">
          {/* Dashboard Tab */}
          <li
            className={`flex items-center ${
              activeTab === "Dashboard" ? "font-bold" : ""
            }`}
            onClick={() => setActiveTab("Dashboard")}
          >
            <DashboardOutlinedIcon className="mr-2" />
            <a href="#">Dashboard</a>
          </li>

          <h1 className="text-sm text-gray-200">Main Menu</h1>

          {/* Job Posts Tab */}
          <li
            className={`flex items-center ${
              activeTab === "Job Posts" ? "font-bold" : ""
            }`}
            onClick={() => setActiveTab("Job Posts")}
          >
            <WorkOutlineIcon className="mr-2" />
            <a href="#">Job Posts</a>
          </li>

          {/* Add Job Post Tab */}
          <li
            className={`flex items-center ${
              activeTab === "Add Job Post" ? "font-bold" : ""
            }`}
            onClick={() => setActiveTab("Add Job Post")}
          >
            <NextWeekOutlinedIcon className="mr-2" />
            <a href="#">Add Job Post</a>
          </li>

          {/* Interviews Tab */}
          <li
            className={`flex items-center ${
              activeTab === "Interviews" ? "font-bold" : ""
            }`}
            onClick={() => setActiveTab("Interviews")}
          >
            <WorkHistoryOutlinedIcon className="mr-2" />
            <a href="#">Interviews</a>
          </li>

          {/* My Profile Tab */}
          <li
            className={`flex items-center ${
              activeTab === "Profile" ? "font-bold" : ""
            }`}
            onClick={() => setActiveTab("Profile")}
          >
            <AccountCircleOutlinedIcon className="mr-2" />
            <a href="#">My Profile</a>
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="bg-base-200 w-3/4 ml-1/4 h-screen flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-100 shadow-sm">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">{activeTab}</a>
          </div>
          <div className="flex gap-2">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
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

        <div className="flex-grow overflow-auto">
          {/* Conditionally render content based on the active tab */}
          {activeTab === "Dashboard" && <Dashboard />}
          {activeTab === "Job Posts" && <JobPost />}
          {activeTab === "Add Job Post" && <AddJobPost />}
          {activeTab === "Interviews" && <Interview />}
          {activeTab === "Profile" && <MyProfile />}
        </div>

        {/* Footer */}
        <footer className="footer sm:footer-horizontal footer-center bg-white text-base-content p-4 ">
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
