import React from "react";
import { useNavigate } from "react-router-dom";
import { Home, Search, Person, Settings } from "@mui/icons-material";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import {
  Person as CandidateIcon,
  Work as EmployeeIcon,
} from "@mui/icons-material";
import UIButton from "../Common/UIButton";

function MainLayout() {
  const navigate = useNavigate();
  return (
    <div className="main-layout bg-gray-200 h-screen">
      <div className="card-body flex flex-row mb-2 bg-white shadow-lg justify-between items-center w-full pt-4 pb-4 lg:hidden">
        <div><h1 className="card-title text-sm">Home</h1></div>
        <div>
          <VideoCallIcon className="mr-2"/>
          <NotificationsActiveIcon />
        </div>
      </div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">The SkyIT Website</a>
        </div>
        <div className="flex">
          {/* Candidate Button */}
          <div className="mr-2">
            <UIButton
              startIcon={<CandidateIcon />}
              style={{ borderRadius: "50px" }}
              onClick={() => navigate("/candidate-login")}
            >
              <h1 className="font-bold hidden sm:block">Candidate</h1>
            </UIButton>
          </div>
          <div>
            <UIButton
              startIcon={<EmployeeIcon />}
              style={{ borderRadius: "50px" }}
              className="m-2"
              onClick={() => navigate("/employee-login")}
            >
              <h1 className="font-bold hidden sm:block">Employee</h1>
            </UIButton>
          </div>
        </div>
      </div>
      <div className="m-4">
        <UIButton onClick={() => navigate("/employeeDashboard")}>
          CurrentWork: EmployeeDashboard
        </UIButton>
      </div>
      <div className="dock dock-sm border-black lg:hidden">
        <button className="">
          <Home />
          <span>Home</span>
        </button>
        <button className="">
          <GroupAddOutlinedIcon />
          <span>Job Post</span>
        </button>
        <button className="">
          <Search />
          <span>Search</span>
        </button>
        <button className="">
          <GroupsOutlinedIcon />
          <span className="text-sm">Interviews</span>
        </button>
        <button>
          <Settings />
          <span className="text-sm">Settings</span>
        </button>
      </div>
    </div>
  );
}

export default MainLayout;
