import React, { useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import UIButton from "../../../../../Common/UIButton";
import SearchBar from "../../../../../Common/SearchBar";

function JobPost({ handleTabChange }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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
    // Add more job entries as needed
  ];

  const [job, setJob] = useState(jobs) 
  const totalPages = Math.ceil(job.length / itemsPerPage);
  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const paginatedJobs = job.slice(indexOfFirstItem, indexOfFirstItem + itemsPerPage);

  const onPageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const openJobDescription = (job) => {
    handleTabChange("Job Description", job);
  };

  const handleEdit = (job) => {
    console.log("Editing job:", job);
    handleTabChange("Edit Job Post", job);
  };

  const handleDelete = (id) => {
    setJob((prevJobs) => prevJobs.filter((item) => item.id !== id));
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
          <SearchBar />
          <UIButton>
            <FilterAltIcon />
            Filter
            <ExpandMoreIcon />
          </UIButton>
        </div>

        {/* Job Table */}
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Job Details</th>
                <th className="hidden md:table-cell">Job Category</th>
                <th className="hidden md:table-cell">Job Timing</th>
                <th className="hidden md:table-cell">Salary</th>
                <th className="hidden md:table-cell">Created</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedJobs.map((job) => (
                <tr key={job.id}>
                  <td>
                    <button
                      onClick={() => openJobDescription(job)}
                      className="text-sky-500 font-bold cursor-pointer"
                    >
                      {job.details}
                    </button>
                  </td>
                  <td className="hidden md:table-cell">{job.category}</td>
                  <td className="hidden md:table-cell">{job.timing}</td>
                  <td className="hidden md:table-cell">{job.salary}</td>
                  <td className="hidden md:table-cell">{job.created}</td>
                  <td>
                    <span
                      className={`badge badge-sm ${
                        job.status === "Active"
                          ? "badge-success"
                          : "badge-error"
                      }`}
                    >
                      {job.status}
                    </span>
                  </td>
                  <td>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <button
                        onClick={() => handleEdit(job)}
                        className="btn btn-sm p-2 bg-white border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white"
                      >
                        <EditIcon />
                      </button>
                      <button
                        onClick={() => handleDelete(job.id)}
                        className="btn p-2 btn-sm bg-white border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                      >
                        <DeleteIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="m-4 flex justify-between">
            <h1>
              Showing <b>{indexOfFirstItem + 1} - {indexOfFirstItem + paginatedJobs.length}</b> of <b>{jobs.length}</b> Records
            </h1>
            <div className="join">
              <button
                className="btn btn-ghost"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={`btn rounded-md ${
                    page === currentPage ? "bg-lime-400 text-white" : "bg-gray-200"
                  }`}
                  onClick={() => onPageChange(page)}
                >
                  {page}
                </button>
              ))}
              <button
                className="btn btn-ghost"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobPost;
