import React, { useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchBar from "../../../../../Common/SearchBar";
import UIButton from "../../../../../Common/UIButton";
import FilterJobs from "./FilterJobs";

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
            <SearchBar />
            <UIButton
              onClick={() => setOpenFilter(!openFilter)}
              startIcon={<FilterAltIcon />}
              endIcon={<KeyboardArrowDownIcon />}
              text={"Filter "}
            />
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
        <FilterJobs setOpenFilter={setOpenFilter}/>
      )}
    </div>
  );
}

export default SearchJobs;
