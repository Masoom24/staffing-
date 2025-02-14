import React, { useState } from "react";
import UIButton from "../../../../../Common/UIButton";
import SearchBar from "../../../../../Common/SearchBar";
import {
  FilterAlt as FilterAltIcon,
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as VisibilityIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  AccessTime as AccessTimeIcon,
} from "@mui/icons-material";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import FilterJobs from "./FilterJobs";

const mockJobPosts = [
  {
    id: 1,
    client: "Regalia The Jewel",
    contact: "9876543210",
    email: "Job@lokmat.in",
    jobTitle: "MERN Stack Developer",
    hiringFor: "MERN",
    location: "Tirora, Gondia",
    category: "Information Technology (IT)",
    subCategory: "Computer Operator",
    timing: "(9.30 – 6.30)",
    duration: "8 Hours",
    phone: "89865465",
    status: "Approved",
    profile:
      "https://img.freepik.com/premium-vector/gradient-gold-crown-logo-template_23-2150970150.jpg",
  },
  {
    id: 2,
    client: "Emperor",
    contact: "9876543210",
    email: "Job@lokmat.in",
    jobTitle: "Computer Operator",
    hiringFor: "Computer Operator",
    location: "Tirora, Gondia",
    category: "Information Technology (IT)",
    subCategory: "Computer Operator",
    timing: "(9.30 – 6.30)",
    duration: "8 Hours",
    phone: "89865465",
    status: "Approved",
    profile:
      "https://img.freepik.com/free-vector/gradient-gold-crown-logo-template_23-2150970156.jpg",
  },
];

const JobPosts = ({ handleTabChange }) => {
  const [jobPosts, setJobPosts] = useState(mockJobPosts);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const recordsPerPage = 10;
  const totalRecords = jobPosts.length;
  const totalPages = Math.ceil(totalRecords / recordsPerPage);

  const paginatedRecords = jobPosts.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const handleFilterClick = () => setShowFilterDropdown(!showFilterDropdown);

  // Handle Delete Job
  const handleDeleteJob = (id) => {
    const updatedJobs = jobPosts.filter((job) => job.id !== id);
    setJobPosts(updatedJobs);
  };

  // Handle Edit Job
  const handleEditJob = (id) => {
    const jobToEdit = jobPosts.find((job) => job.id === id);
    const updatedTitle = prompt(
      "Edit Job Title:",
      jobToEdit.jobTitle || "Untitled Job"
    );
    if (updatedTitle) {
      setJobPosts(
        jobPosts.map((job) =>
          job.id === id ? { ...job, jobTitle: updatedTitle } : job
        )
      );
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-start md:justify-end mb-4">
        <UIButton onClick={() => handleTabChange("Create Job Post")}>
          <AddIcon className="mr-1" /> Create New Job
        </UIButton>
      </div>

      <div className="card bg-white shadow-md p-4">
        <div className="flex flex-col gap-2 sm:flex-row justify-start sm:justify-between items-start mb-4">
          <SearchBar />
          <FilterJobs
            showFilterDropdown={showFilterDropdown}
            onFilterClick={handleFilterClick}
          />
        </div>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Client</th>
                <th className="hidden md:table-cell">Job Details</th>
                <th className="hidden md:table-cell">Category</th>
                <th className="hidden md:table-cell">Timing</th>
                <th className="hidden md:table-cell">Status</th>
                <th className="hidden md:table-cell">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedRecords.map((job) => (
                <tr key={job.id}>
                  <td>
                    <div>
                      <span
                        className="font-bold text-blue-500 cursor-pointer"
                        onClick={() => handleTabChange("Job Description", job)}
                      >
                        {job.client}
                      </span>
                      <div className="text-sm text-gray-500">
                        <PhoneIcon className="mr-1" /> {job.contact}
                      </div>
                      <div className="text-sm text-gray-500">
                        <EmailIcon className="mr-1" /> {job.email}
                      </div>
                    </div>
                  </td>
                  <td className="hidden md:table-cell">
                    <div>
                      <span className="text-blue-500 font-bold">
                        {job.jobTitle}
                      </span>
                      <div className="text-sm">
                        Hiring: {job.hiringFor} <br />
                        Location: {job.location}
                      </div>
                    </div>
                  </td>
                  <td className="hidden md:table-cell">
                    {job.category} <br />
                    <span className="text-sm text-gray-500">
                      ➤ {job.subCategory}
                    </span>
                  </td>
                  <td className="hidden md:table-cell">
                    <AccessTimeIcon className="mr-1" />
                    {job.timing} <br />
                    {job.duration}
                  </td>
                  <td className="hidden md:table-cell">
                    <span
                      className={`badge badge-xs ${
                        job.status === "Approved"
                          ? "badge-success"
                          : "badge-warning"
                      }`}
                    >
                      {job.status}
                    </span>
                  </td>
                  <td className="hidden md:table-cell ">
                    <div className="flex flex-row gap-2">
                      <button
                        className="btn btn-md btn-outline border-yellow-600 text-yellow-600 p-2"
                        onClick={() => handleEditJob(job.id)}
                      >
                        <EditIcon />
                      </button>
                      <button
                        className="btn btn-md btn-outline btn-error p-2"
                        onClick={() => handleDeleteJob(job.id)}
                      >
                        <DeleteIcon />
                      </button>
                      <button
                        onClick={() => handleTabChange("Interview")}
                        className="btn btn-md btn-outline border-violet-800 text-violet-800 p-2"
                      >
                        <QuestionMarkIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-sm">
            Showing{" "}
            {Math.min((currentPage - 1) * recordsPerPage + 1, totalRecords)} to{" "}
            {Math.min(currentPage * recordsPerPage, totalRecords)} of{" "}
            {totalRecords} records
          </span>
          <div className="flex items-center space-x-2">
            <button
              className={`px-3 py-1 ${
                currentPage === 1 ? "text-gray-400" : "text-blue-500"
              }`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                className={`px-3 py-1 rounded ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "text-blue-500"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              className={`px-3 py-1 ${
                currentPage === totalPages ? "text-gray-400" : "text-blue-500"
              }`}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPosts;
