import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Interview() {
  const interviews = [
    {
      id: 1,
      profile: "React Native Developer",
      date: "22 May, 2023 12:00PM",
      round: 1,
      status: "Interview Applied",
      desc: "Develop React Native applications for both iOS and Android Leverage native APIs for deep integrations with both platforms...",
    },
    {
      id: 1,
      profile: "React Native Developer",
      date: "22 May, 2023 12:00PM",
      round: 1,
      status: "Interview Applied",
      desc: "Develop React Native applications for both iOS and Android Leverage native APIs for deep integrations with both platforms...",
    },
    {
      id: 1,
      profile: "React Native Developer",
      date: "22 May, 2023 12:00PM",
      round: 1,
      status: "Interview Applied",
      desc: "Develop React Native applications for both iOS and Android Leverage native APIs for deep integrations with both platforms...",
    },
    {
      id: 1,
      profile: "React Native Developer",
      date: "22 May, 2023 12:00PM",
      round: 1,
      status: "Interview Applied",
      desc: "Develop React Native applications for both iOS and Android Leverage native APIs for deep integrations with both platforms...",
    },
    {
      id: 1,
      profile: "React Native Developer",
      date: "22 May, 2023 12:00PM",
      round: 1,
      status: "Interview Applied",
      desc: "Develop React Native applications for both iOS and Android Leverage native APIs for deep integrations with both platforms...",
    },
    
  ];
  return (
    <div className="m-4 flex flex-col">
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
          <input type="search" required placeholder="All Status" />
        </label>
        <button className="btn bg-lime-600 shadow-md text-white mb-4">
          <FilterAltIcon /> Filter <ExpandMoreIcon />
        </button>
      </div>
      {interviews.map((interview) => {
        return (
          <div className="card card-border bg-base-100 mt-2 w-full">
            <div className="card-body">
              <p className="card-title bg-white">Round {interview.round}</p>
              <div className="flex justify-between">
                <h2 className="card-title text-lime-500">
                  {interview.profile}
                </h2>
              </div>

              <p className="card-title">{interview.desc}</p>
              <div className=" bg-gray-200 w-30 mt-2 rounded flex justify-center">
                <p className="card-title ml-2">{interview.status}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Interview;
