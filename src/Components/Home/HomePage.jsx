import React from "react";
import { useNavigate } from "react-router-dom";
import { Home, Search, Settings } from "@mui/icons-material";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import {
  Person as CandidateIcon,
  Work as EmployeeIcon,
} from "@mui/icons-material";
import UIButton from "../../Common/UIButton";
import Header from "./Header/Header"
import JobCategory from "./JobCategory/JobCategory"
import LatestJobs from "./LatestJobs/LatestJobs";
import Footer from "./Footer/Footer"
import Download from "./Download/Download"
import ClientLogo from "./ClientSection/ClientLogo"
import Contact from "./Contact/Contact"

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="main-layout bg-gray-200 h-screen">
      {/* Header */}
      <div className="card-body flex flex-row mb-2 bg-white shadow-lg justify-between items-center w-full pt-4 pb-4 lg:hidden">
        <div>
          <h1 className="card-title text-sm">Home</h1>
        </div>
        <div>
          <VideoCallIcon className="mr-2" />
          <NotificationsActiveIcon />
        </div>
      </div>

      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-sm px-4 py-4 ">
        <div className="flex-1">
          <h1 className="text-xl font-bold">
            <a href="/">Clinet<span className="text-[#96BE25]">Staffing</span></a>
          </h1>
        </div>
        <div className="flex space-x-2">
          {/* Candidate Button */}
          <UIButton
            startIcon={<CandidateIcon />}
            style={{ borderRadius: "50px" }}
            onClick={() => navigate("/candidate/Login")}
          >
            <h1 className="font-bold hidden sm:block">Candidate</h1>
          </UIButton>
          {/* Employee Button */}
          <UIButton
            startIcon={<EmployeeIcon />}
            style={{ borderRadius: "50px" }}
            className="m-2"
            onClick={() => navigate("/employee/Login")}
          >
            <h1 className="font-bold hidden sm:block">Employee</h1>
          </UIButton>
        </div>
      </div>

      <div className="main-contain">
        <Header/>
        <JobCategory/>
        <LatestJobs/>
        <Download/>
        <ClientLogo/>
        <Contact/>
        <Footer/>
      </div>

      {/* Bottom Navigation */}
      <div className="dock dock-sm border-black lg:hidden">
        <button>
          <Home />
          <span>Home</span>
        </button>
        <button>
          <GroupAddOutlinedIcon />
          <span>Job Post</span>
        </button>
        <button>
          <Search />
          <span>Search</span>
        </button>
        <button>
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
};

export default HomePage;
