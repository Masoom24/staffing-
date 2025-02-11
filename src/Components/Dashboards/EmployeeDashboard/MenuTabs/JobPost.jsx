import React from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import UIButton from "../../../../Common/UIButton";

function JobPost({ handleTabChange }) {
  const jobs = [
    {
      id: 1,
      details: "React FullStack Developer",
      category: "IT/Software",
      timing: "Full-time",
      salary: "₹50,000/month",
      created: "2025-02-01",
      status: "Active",
      description:
        "Develop and maintain user-facing features for the web platform.",
    },
    {
      id: 2,
      details: "Marketing Specialist at XYZ Ltd",
      category: "Marketing",
      timing: "Part-time",
      salary: "₹25,000/month",
      created: "2025-01-28",
      status: "Inactive",
      description:
        "Manage campaigns, social media presence, and marketing strategies.",
    },
  ];

  const openJobDescription = (job) => {
    handleTabChange("Job Description", job);
  };

  return (
    <div className="m-4">
      {/* Add New Job Post Button */}
      <div className="mb-4 flex justify-end">
        <UIButton onClick={() => handleTabChange("Add Job Post")}>
          <AddIcon />
          Add New Job Post
        </UIButton>
      </div>

      {/* Card containing Search, Filter, and Table */}
      <div className="card bg-white border-gray-200 p-4">
        {/* Search and Filter Section */}
        <div className="flex flex-col items-start lg:flex-row justify-between items-center gap-4 mb-4">
          <label className="input bg-gray-200 w-full md:w-auto flex items-center px-2 py-1 rounded">
            <svg
              className="h-[1em] opacity-50 mr-2"
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
            <input
              type="search"
              required
              placeholder="Search"
              className="bg-transparent outline-none"
            />
          </label>

          <div className="md:items-center flex gap-4">
            <UIButton>
              <FilterAltIcon />
              Filter
              <ExpandMoreIcon />
            </UIButton>
          </div>
        </div>

        {/* Job Table */}
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* Table Head */}
            <thead>
              <tr>
                <th>Job Details</th>
                {/* These columns are visible on medium (md) screens and up */}
                <th className="hidden md:table-cell">Job Category</th>
                <th className="hidden md:table-cell">Job Timing</th>
                <th className="hidden md:table-cell">Salary</th>
                <th className="hidden md:table-cell">Created</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id}>
                  <td>
                    <button
                      onClick={() => openJobDescription(job)}
                      className="text-blue-600 font-bold cursor-pointer"
                    >
                      {job.details}
                    </button>
                  </td>
                  {/* These columns are hidden on mobile */}
                  <td className="hidden md:table-cell">{job.category}</td>
                  <td className="hidden md:table-cell">{job.timing}</td>
                  <td className="hidden md:table-cell">{job.salary}</td>
                  <td className="hidden md:table-cell">{job.created}</td>
                  <td>
                    <span
                      className={`badge ${
                        job.status === "Active"
                          ? "badge-success"
                          : "badge-error"
                      }`}
                    >
                      {job.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-sm bg-white border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white md:p-2">
                      <EditIcon />
                    </button>
                    <button className="btn btn-sm bg-white border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                      <DeleteIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-between m-4">
            <select defaultValue="Select Page Number" className="select w-20">
              <option disabled={true}>Page Number</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <div className="join">
              <button className="join-item btn bg-white border-0">«</button>
              <button className="join-item btn bg-lime-400 rounded-md">
                1
              </button>
              <button className="join-item btn bg-white border-0">»</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobPost;
