import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function JobPost() {
  const JobPost = [
    {
      jobProfile: "Technical",
      industry: "Oil/Gas",
      postDate: "26/01/2025",
      desc: "Develop React Native applications for both iOS and Android Leverage native APIs for deep integrations with both platforms",
    },
    {
      jobProfile: "SDE-1",
      industry: "Software Development",
      postDate: "26/01/2025",
      desc: "Develop React Native applications for both iOS and Android Leverage native APIs for deep integrations with both platforms",
    },
    {
      jobProfile: "Frontend Developer",
      industry: "Oil/Gas",
      postDate: "26/01/2025",
      desc: "Develop React Native applications for both iOS and Android Leverage native APIs for deep integrations with both platforms",
    },
    {
      jobProfile: "Python Developer",
      industry: "Oil/Gas",
      postDate: "26/01/2025",
      desc: "Develop React Native applications for both iOS and Android Leverage native APIs for deep integrations with both platforms",
    },
    {
      jobProfile: "Java Developer",
      industry: "Oil/Gas",
      postDate: "26/01/2025",
      desc: "Develop React Native applications for both iOS and Android Leverage native APIs for deep integrations with both platforms",
    },
  ];
  return (
    <div className="m-4 ">
      <div className="flex justify-between">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
        <button className="btn bg-lime-600 shadow-md text-white mb-4">
          <FilterAltIcon /> Filter <ExpandMoreIcon />
        </button>
      </div>
      {JobPost.map((job) => {
        return (
          <div className="card card-border bg-base-100 mt-2 w-full">
            <div className="card-body">
              <div className="flex justify-between">
                <h2 className="card-title text-lime-500">{job.jobProfile}</h2>
                <ArrowForwardIosIcon />
              </div>

              <p className="card-title bg-white">{job.industry}</p>

              <p className="card-title">
                <CalendarMonthIcon />
                {job.postDate}
              </p>
              <p className="card-title">{job.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default JobPost;
