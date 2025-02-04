import React, { useState } from "react";
import DashboardHome from "./MenuTabs/DashboardHome";
import SearchJobs from "./MenuTabs/SearchJobs";
import MyExperience from "./MenuTabs/MyExperience";
import MyInterview from "./MenuTabs/MyInterview";
import MyProfile from "./MenuTabs/MyProfile";
import MyQualification from "./MenuTabs/MyQualification";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SearchIcon from "@mui/icons-material/Search";
import EventNoteIcon from "@mui/icons-material/EventNote";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import UpdateProfile from "./MenuTabs/UpdateProfile";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard"); // Default tab
  const [progress, setProgress] = useState(52);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="drawer lg:drawer-open bg-gray-100">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col justify-between">
        {/* Main Content */}
        <div>
          <div className="navbar bg-base-100 shadow-md">
            {/* Menu Icon only visible on mobile screens */}
            <label htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden">
              <MenuIcon />
            </label>

            <div className="flex-1">
              <div className="ml-4 w-56 mt-2">
                <div className="flex justify-between">
                  <span className="text-sm">Profile Completion</span>
                  <strong>{progress}%</strong>
                </div>
                <progress
                  className="progress progress-success w-56 h-1.5"
                  value={progress}
                  max="100"
                ></progress>
              </div>
              <span className="btn btn-ghost text-lg">{activeTab}</span>
            </div>

            <div className="dropdown dropdown-end">
              <button className="btn btn-ghost btn-circle avatar mr-4">
                <div className="w-20 rounded-md">
                  <img
                    alt="Profile"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </button>
              <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <div className="flex items-center gap-2 mb-2">
                  <img
                    alt="Profile"
                    className="w-15 rounded"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                  <div>
                    <h1 className="font-bold">Ghamesh Rahangdale</h1>
                    <p>Experienced</p>
                  </div>
                </div>
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Change Password</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Dynamic Content */}
          {activeTab === "Dashboard" && <DashboardHome />}
          {activeTab === "Search Jobs" && <SearchJobs />}
          {activeTab === "My Interviews" && <MyInterview />}
          {activeTab === "My Qualification" && <MyQualification />}
          {activeTab === "My Experience" && <MyExperience />}
          {activeTab === "My Profile" && <MyProfile handleTabChange={handleTabChange}/>}
          {activeTab === "Update Profile" && <UpdateProfile handleTabChange={handleTabChange}/>}
        </div>

        {/* Footer */}
        <footer className="footer sm:footer-horizontal footer-center bg-white text-base-content p-4">
          <p>
            {" "}
            © {new Date().getFullYear()} Client Staffing Developed by - The
            SkyIT
          </p>
        </footer>
      </div>

      <div className="drawer-side">
        <ul
          className="menu text-white text-lg bg-base-200 min-h-full w-80 p-4"
          style={{ backgroundColor: "#96BE25" }}
        >
          <div className="flex justify-between">
            <h1 className="pl-3 mb-4 text-xl font-bold">Team SkyIT</h1>
            <label htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden">
              <KeyboardDoubleArrowLeftIcon />
            </label>
          </div>
          <li onClick={() => handleTabChange("Dashboard")}>
            <a>
              <DashboardIcon className="mr-2" /> Dashboard
            </a>
          </li>
          <li>
            <p>Main Menu</p>
          </li>
          <li onClick={() => handleTabChange("Search Jobs")}>
            <a>
              <SearchIcon className="mr-2" /> Search Jobs
            </a>
          </li>
          <li onClick={() => handleTabChange("My Interviews")}>
            <a>
              <EventNoteIcon className="mr-2" /> My Interviews
            </a>
          </li>
          <li onClick={() => handleTabChange("My Qualification")}>
            <a>
              <SchoolIcon className="mr-2" /> My Qualification
            </a>
          </li>
          <li onClick={() => handleTabChange("My Experience")}>
            <a>
              <WorkIcon className="mr-2" /> My Experience
            </a>
          </li>
          <li onClick={() => handleTabChange("My Profile")}>
            <a>
              <PersonIcon className="mr-2" /> My Profile
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
