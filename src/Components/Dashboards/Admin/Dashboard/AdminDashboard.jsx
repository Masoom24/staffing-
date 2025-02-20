import DashboardIcon from "@mui/icons-material/Dashboard";
import EventNoteIcon from "@mui/icons-material/EventNote";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import WorkIcon from "@mui/icons-material/Work";
import BusinessIcon from "@mui/icons-material/Business";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import GroupIcon from "@mui/icons-material/Group";
import DescriptionIcon from "@mui/icons-material/Description";
import BuildIcon from "@mui/icons-material/Build";
import React, { useState } from "react";
import AdminAndStaff from "../Pages/Admin&Staffs/AdminAndStaff";
import AdminAndStaffRoles from "../Pages/Admin&Staffs/AdminAndStaffRoles";
import Candidates from "../Pages/Candidates/Candidates";
import Clients from "../Pages/Clients/Clients";
import Home from "../Pages/Home";
import Interview from "../Pages/Interviews/Interview";
import JobPosts from "../Pages/JobPosts/JobPosts";
import Pages from "../Pages/PagesTab/Pages";
import Tools from "../Pages/Tools/AppVersion";
import Footer from "./Footer";
import CreateNewJob from "../Pages/JobPosts/CreateNewJob";
import JobDetails from "../Pages/JobPosts/JobDetails";
import AddEducation from "../Pages/Human Resource/AddEducations";
import AddIndustries from "../Pages/Human Resource/AddIndustries";
import AddJobTimings from "../Pages/Human Resource/AddJobTimings";
import SEODetails from "../Pages/PagesTab/SEODetails";
import ClientDetails from "../Pages/PagesTab/ClientDetails";
import ContactInfo from "../Pages/PagesTab/ContactInfo";
import Settings from "../Pages/Tools/Settings";
import AppVersion from "../Pages/Tools/AppVersion";

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard"); // Default tab
  const [selectedJob, setSelectedJob] = useState(null); // State to store selected job

  const handleTabChange = (tabName, job = null) => {
    setActiveTab(tabName);
    if (job) setSelectedJob(job); // Store job details if provided
  };

  const drawerCheckbox = document.getElementById("sider");
  if (drawerCheckbox) {
    drawerCheckbox.checked = false;
  }
  return (
    <div className="drawer lg:drawer-open bg-gray-100">
      <input id="sider" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col justify-between">
        {/* Main Content */}
        <div>
          <div className="navbar bg-base-100 shadow-md">
            {/* Menu Icon only visible on mobile screens */}
            <label htmlFor="sider" className="btn btn-ghost lg:hidden">
              <MenuIcon />
            </label>

            <div className="flex-1">
              <span className="btn btn-ghost text-lg">{activeTab}</span>
            </div>
          </div>
          {activeTab === "Dashboard" && <Home />}
          {activeTab === "Admin&Staffs" && <AdminAndStaff />}
          {activeTab === "Admin&Staffs Roles" && <AdminAndStaffRoles />}
          {activeTab === "Candidates" && <Candidates />}
          {activeTab === "Clients" && <Clients />}
          {activeTab === "Job Posts" && (
            <JobPosts handleTabChange={handleTabChange} activeTab={activeTab} />
          )}
          {activeTab === "Interview" && <Interview />}
          {activeTab === "Human Resource" && <HumanResource />}
          {activeTab === "Pages" && <Pages />}
          {activeTab === "Tools" && <Tools />}

          {/*Job Post*/}
          {activeTab === "Create Job Post" && <CreateNewJob />}
          {activeTab === "Job Description" && selectedJob && (
            <JobDetails job={selectedJob} handleTabChange={handleTabChange} /> // Pass selected job to JobDetails
          )}

          {/* Human Resourse */}
          {activeTab === "Education" && <AddEducation />}
          {activeTab === "Industries" && <AddIndustries />}
          {activeTab === "Job Timing" && <AddJobTimings />}

          {/* Pages  */}
          {activeTab === "SEO Details" && <SEODetails />}
          {activeTab === "Home Client Details" && <ClientDetails />}
          {activeTab === "Contact Info" && <ContactInfo />}
          {/* Tools  */}
          {activeTab === "Settings" && <Settings />}
          {activeTab === "App Version" && <AppVersion />}
        </div>

        {/* Footer */}
        <Footer />
      </div>
      <div className="drawer-side">
        <ul
          className="menu text-white text-lg bg-base-200 min-h-full w-80 p-4"
          style={{ backgroundColor: "#96BE25" }}
        >
          <div className="flex justify-between">
            <h1 className="pl-3 mb-4 text-xl font-bold">Team SkyIT</h1>
            <label htmlFor="sider" className="btn btn-ghost lg:hidden">
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

          <div tabIndex={0} className="collapse collapse-arrow p-0">
            <input type="checkbox" className="peer" />
            <div className="collapse-title hover:cursor-pointer ">
              <span className="flex items-center">
                <SearchIcon className="mr-2" />
                Admin&Staffs
              </span>
            </div>
            <div className="collapse-content max-h-30 overflow-auto peer-checked:max-h-screen">
              <ul
                className="cursor-pointer ml-8 list-inside"
                style={{
                  marginBottom: "-15px",
                  marginTop: "-8px",
                  listStyleType: "circle",
                }}
              >
                <li onClick={() => handleTabChange("Admin&Staffs")}>
                  Admin & Staffs
                </li>
                <li
                  onClick={() => handleTabChange("Admin&Staffs Roles")}
                  className="mt-1"
                >
                  Admin & Staffs Roles
                </li>
              </ul>
            </div>
          </div>

          <li onClick={() => handleTabChange("Candidates")}>
            <a>
              <EventNoteIcon className="mr-2" /> Candidates
            </a>
          </li>
          <li onClick={() => handleTabChange("Clients")}>
            <a>
              <BusinessIcon className="mr-2" /> Clients
            </a>
          </li>
          <li onClick={() => handleTabChange("Job Posts")}>
            <a>
              <WorkIcon className="mr-2" /> Job Posts
            </a>
          </li>
          <li onClick={() => handleTabChange("Interview")}>
            <a>
              <EventAvailableIcon className="mr-2" /> Interview
            </a>
          </li>
          <ul>
            <li>
              <details>
                <summary className="flex items-center">
                  <GroupIcon className="mr-2" /> Human Resource
                </summary>
                <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                  <li onClick={() => handleTabChange("Education")}>
                    <a>Education</a>
                  </li>
                  <li onClick={() => handleTabChange("Industries")}>
                    <a>Industries</a>
                  </li>
                  <li onClick={() => handleTabChange("Job Timing")}>
                    <a>Job Timing</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
          <ul>
            <li>
              <details>
                <summary className="flex items-center">
                  <DescriptionIcon className="mr-2" /> Pages
                </summary>
                <ul className="list-disc pl-5">
                  <li onClick={() => handleTabChange("SEO Details")}>
                    <a>SEO Details</a>
                  </li>
                  <li onClick={() => handleTabChange("Home Client Details")}>
                    <a>Home - Client Section</a>
                  </li>
                  <li onClick={() => handleTabChange("Contact Info")}>
                    <a>Contact Info</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
          <ul>
            <li>
              <details>
                <summary className="flex items-center">
                  <BuildIcon className="mr-2" /> Tools
                </summary>
                <ul className="list-disc pl-5">
                  <li onClick={() => handleTabChange("Settings")}>
                    <a>Settings</a>
                  </li>
                  <li onClick={() => handleTabChange("App Version")}>
                    <a>App Version</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
}

export default AdminDashboard;
