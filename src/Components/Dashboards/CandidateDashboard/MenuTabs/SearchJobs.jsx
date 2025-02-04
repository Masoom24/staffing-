import React, { useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";

function SearchJobs() {
  const [openFilter, setOpenFilter] = useState(false);

  // Static job data stored as an array of objects
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      location: "Remote",
      category: "IT & Software",
      timing: "Full-Time",
      salary: "₹6LPA",
      created: "Jan 10, 2025",
    },
    {
      id: 2,
      title: "Marketing Manager",
      location: "New York",
      category: "Marketing",
      timing: "Part-Time",
      salary: "₹4LPA",
      created: "Jan 15, 2025",
    },
    {
      id: 3,
      title: "Data Analyst",
      location: "Nagpur",
      category: "IT Department",
      timing: "Contract",
      salary: "₹3LAP",
      created: "Jan 20, 2025",
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="card card-border bg-base-100 flex-1 m-4">
        <div className="card-body">
          <div className="flex justify-between items-center mb-4">
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search jobs..."
              className="input input-bordered w-full max-w-xs"
            />

            {/* Filter Button */}
            <button
              className="btn bg-lime-400 text-white flex items-center"
              onClick={() => setOpenFilter(!openFilter)}
            >
              <FilterAltIcon className="mr-2" /> Filter <KeyboardArrowDownIcon />
            </button>
          </div>

          {/* Job Table */}
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* Table Header */}
              <thead>
                <tr>
                  <th>Job Details</th>
                  <th>Job Category</th>
                  <th>Job Timing</th>
                  <th>Salary</th>
                  <th>Created</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {jobs.map((job) => (
                  <tr key={job.id}>
                    <td>
                      <strong>{job.title}</strong>
                      <h2>Location: {job.location}</h2>
                    </td>
                    <td>{job.category}</td>
                    <td>{job.timing}</td>
                    <td>{job.salary}</td>
                    <td>{job.created}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Filter Popup */}
      {openFilter && (
        <div className="modal modal-open">
          <div className="bg-white rounded-lg p-6 w-100 relative">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
              onClick={() => setOpenFilter(false)}
            >
              <CloseIcon />
            </button>

            <h3 className="text-xl font-bold mb-4">Filter Jobs</h3>

            <div className="mb-4">
              <label className="block mb-1">Job Category</label>
              <input
                type="text"
                placeholder="Job Category"
                className="w-full p-2 rounded bg-gray-200 border-none"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1">Job Sub Category</label>
              <input
                type="text"
                placeholder="Job Sub Category"
                className="w-full p-2 rounded bg-gray-200 border-none"
              />
            </div>

            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">Min Salary (₹)</label>
                <input
                  type="number"
                  placeholder="e.g., 300000"
                  className="w-full p-2 rounded bg-gray-200 border-none"
                />
              </div>
              <div>
                <label className="block mb-1">Max Salary (₹)</label>
                <input
                  type="number"
                  placeholder="e.g., 1000000"
                  className="w-full p-2 rounded bg-gray-200 border-none"
                />
              </div>
            </div>

            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">Min Experience (Years)</label>
                <input
                  type="number"
                  placeholder="e.g., 1"
                  className="w-full p-2 rounded bg-gray-200 border-none"
                />
              </div>
              <div>
                <label className="block mb-1">Max Experience (Years)</label>
                <input
                  type="number"
                  placeholder="e.g., 5"
                  className="w-full p-2 rounded bg-gray-200 border-none"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-1">Job Timing</label>
              <input
                type="text"
                placeholder="e.g., Full-Time"
                className="w-full p-2 rounded bg-gray-200 border-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between">
              <button
                className="btn btn-outline text-lime-400 border-lime-400"
                onClick={() => console.log("Filters Reset")}
              >
                Reset
              </button>
              <button
                className="btn bg-lime-400 text-white"
                onClick={() => console.log("Filters Applied")}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchJobs;
