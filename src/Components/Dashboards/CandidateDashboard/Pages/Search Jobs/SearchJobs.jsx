import React, { useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchBar from "../../../../../Common/SearchBar";
import UIButton from "../../../../../Common/UIButton";
import FilterJobs from "./FilterJobs";

// Static job data stored as an array of objects
const jobs = [
  {
    id: 1,
    title: "React Developer",
    location: "Remote",
    category: "IT & Software",
    timing: "Full-Time",
    salary: "₹6LPA",
    created: "Jan 10, 2025",
  },
];

function SearchJobs() {
  const [openFilter, setOpenFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;
  const [Job, setJob] = useState(jobs);

  // Calculate pagination indexes
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = Job.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(Job.length / jobsPerPage);

  return (
    <div className="flex justify-center">
      <div className="card card-border shadow-md bg-base-100 flex-1 m-4">
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
              <thead>
                <tr>
                  <th>Job Details</th>
                  <th>Job Category</th>
                  <th>Job Timing</th>
                  <th>Salary</th>
                  <th>Created</th>
                </tr>
              </thead>
              <tbody>
                {currentJobs.map((job) => (
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

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4 p-2 ">
            <span>{`${indexOfFirstJob + 1}-${Math.min(indexOfLastJob, Job.length)} of ${Job.length} records`}</span>
            <div>
              <button
                className=" mr-2"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Prev
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  className={`px-3 py-1 rounded mx-1 ${currentPage === index + 1 ? "bg-gray-300" : ""}`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              <button
                className="ml-2"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {openFilter && <FilterJobs setOpenFilter={setOpenFilter} />}
    </div>
  );
}

export default SearchJobs;
