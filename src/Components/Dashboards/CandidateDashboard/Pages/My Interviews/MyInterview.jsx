import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchBar from "../../../../../Common/SearchBar";
import UIButton from "../../../../../Common/UIButton";

function MyInterview() {
  const [interviews, setInterviews] = useState([
    {
      id: 1,
      jobDetails: "Mock Interview",
      scheduleDate: "March 15, 2025",
      location: "Online",
      created: "Feb 20, 2025",
      status: "Scheduled",
    },
    {
      id: 2,
      jobDetails: "React Developer Interview",
      scheduleDate: "March 20, 2025",
      location: "Bangalore",
      created: "Feb 22, 2025",
      status: "Pending",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const interviewsPerPage = 10;

  const handleDelete = (id) => {
    setInterviews(interviews.filter((interview) => interview.id !== id));
  };

  const handleEdit = (id) => {
    const newJobDetails = prompt("Enter new job details:");
    if (newJobDetails) {
      setInterviews(
        interviews.map((interview) =>
          interview.id === id
            ? { ...interview, jobDetails: newJobDetails }
            : interview
        )
      );
    }
  };

  const indexOfLastInterview = currentPage * interviewsPerPage;
  const indexOfFirstInterview = indexOfLastInterview - interviewsPerPage;
  const currentInterviews = interviews.slice(
    indexOfFirstInterview,
    indexOfLastInterview
  );
  const totalPages = Math.ceil(interviews.length / interviewsPerPage);

  return (
    <div className="flex justify-center m-4">
      <div className="card card-border shadow-md bg-base-100 w-full">
        <div className="card-body">
          <div className="flex justify-between items-center mb-4">
            <SearchBar />
          </div>

          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Job Details</th>
                  <th>Schedule Date</th>
                  <th>Location</th>
                  <th>Created</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentInterviews.length > 0 ? (
                  currentInterviews.map((interview) => (
                    <tr key={interview.id}>
                      <td>
                        <strong>{interview.jobDetails}</strong>
                      </td>
                      <td>{interview.scheduleDate}</td>
                      <td>{interview.location}</td>
                      <td>{interview.created}</td>
                      <td>
                        <span
                          className={`badge badge-xs px-2 py-1 ${
                            interview.status === "Scheduled"
                              ? "bg-green-500 text-white"
                              : "bg-yellow-500 text-white"
                          }`}
                        >
                          {interview.status}
                        </span>
                      </td>
                      <td>
                        <button
                          onClick={() => handleEdit(interview.id)}
                          className="border border-yellow-500 text-yellow-500 p-2 rounded mx-1"
                        >
                          <EditIcon fontSize="small" />
                        </button>
                        <button
                          onClick={() => handleDelete(interview.id)}
                          className="border border-red-500 text-red-500 p-2 rounded mx-1"
                        >
                          <DeleteIcon fontSize="small" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center text-gray-500">
                      No data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-2 p-2">
            <span className="text-sm text-gray-600">
              Showing {indexOfFirstInterview + 1}-
              {Math.min(indexOfLastInterview, interviews.length)} of{" "}
              {interviews.length} records
            </span>
            <div className="flex justify-end items-center gap-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Prev
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  className={`px-3 py-1 rounded ${
                    currentPage === index + 1 ? "bg-base-300" : ""
                  }`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
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

export default MyInterview;
