import React from 'react';
import DashboardIcon from "@mui/icons-material/Dashboard";
import SearchIcon from "@mui/icons-material/Search";
import EventNoteIcon from "@mui/icons-material/EventNote";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

const Menu = () => {
  return (
    <div>
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
  )
}

export default Menu
