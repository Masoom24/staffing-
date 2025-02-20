import React, { useState } from "react";
import { TextField, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import SearchBar from "../../../../../Common/SearchBar";

const AppVersion = () => {
  const [search, setSearch] = useState("");
  const [appVersions, setAppVersions] = useState([
    {
      versionName: "1.0.1",
      versionCode: "10001",
      versionDetails: "You adhar is not linked",
      createdDate: "Mar 31, 2023",
      createdTime: "12:05 PM",
      status: "OFFLINE",
    },
    {
      versionName: "1.0.0",
      versionCode: "10000",
      versionDetails: "New Launched",
      createdDate: "Mar 18, 2023",
      createdTime: "10:51 AM",
      status: "ACTIVE",
    },
  ]);

  return (
    <div className="card bg-white shadow-md rounded-md m-4 p-4">
      {/* Search Bar & Toggle Buttons */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <SearchBar />
        <div className="flex gap-2">
          <input
            className="join-item btn text-sm px-4 py-2"
            type="radio"
            name="options"
            aria-label="Android"
          />
          <input
            className="join-item btn text-sm px-4 py-2"
            type="radio"
            name="options"
            aria-label="IOS"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto p-2">
        <table className="table w-full min-w-[600px]">
          {/* Table Head */}
          <thead>
            <tr className="text-xs sm:text-sm">
              <th className="p-2">VERSION NAME</th>
              <th className="p-2">VERSION CODE</th>
              <th className="p-2">VERSION DETAILS</th>
              <th className="p-2">CREATED DATE</th>
              <th className="p-2">STATUS</th>
              <th className="p-2">ACTIONS</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {appVersions.map((app, index) => (
              <tr key={index} className="text-xs sm:text-sm">
                <td className="p-2">{app.versionName}</td>
                <td className="p-2">{app.versionCode}</td>
                <td className="p-2">{app.versionDetails}</td>
                <td className="p-2">
                  {app.createdDate} <br /> {app.createdTime}
                </td>
                <td className="p-2">
                  <span
                    className={`badge badge-xs ${
                      app.status === "ACTIVE" ? "badge-success" : "badge-error"
                    }`}
                  >
                    {app.status}
                  </span>
                </td>
                <td className="flex gap-2 p-2">
                  <button className="btn border-yellow-500 text-yellow-500 bg-white p-1 sm:p-2">
                    <EditIcon fontSize="small" />
                  </button>
                  <button className="btn border-red-500 text-red-500 bg-white p-1 sm:p-2">
                    <DeleteIcon fontSize="small" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppVersion;
