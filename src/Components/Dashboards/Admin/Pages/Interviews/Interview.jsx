import React, { useState } from "react";
import { Avatar } from "@mui/material"; // Import MUI Avatar
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert"; // Import MUI icon
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const mockData = [
  {
    candidate: "Ankit Kumar",
    client: "Royal staffing safety",
    jobDetails: "Safety supervisor ",
    scheduleDate: "Feb 14, 2025",
    responsibility: "Implementing and monitoring Environment.",
    location: "Round 1 Interview",
    created: "09:29 AM",
    status: "Applied",
    experience: "Experienced",
  },
  {
    candidate: "Ghamesh",
    client: "Royal staffing safety",
    jobDetails: "Frontend ",
    scheduleDate: "Feb 14, 2025",
    responsibility: "Perform firefighting work, including preventing...",
    location: "Round 1 Interview",
    created: "07:17 AM",
    status: "Rejected",
    experience: "Freshers",
  },
  // Add more mock data as needed
];

function Interview() {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const totalRecords = mockData.length;
  const totalPages = Math.ceil(totalRecords / recordsPerPage);
  const paginatedRecords = mockData.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-4">
      <div className="card bg-white shadow-md rounded-md">
        <div className="card-body">
          <div className="flex flex-row justify-end gap-2">
            <select className="select select-bordered bg-gray-200 text-gray-600 w-full max-w-2xs">
              <option disabled selected>
                Search Employer
              </option>
            </select>
            <select className="select select-bordered bg-gray-200 text-gray-600 w-full max-w-2xs">
              <option disabled selected>
                Search Candidate
              </option>
            </select>
          </div>

          {/* Table section */}
          <div className="overflow-x-auto mt-4">
            <table className="table w-full">
              <thead>
                <tr>
                  <th className="hidden md:table-cell">Candidate</th>
                  <th className="hidden md:table-cell">Client</th>
                  <th>Job Details</th>
                  <th className="hidden md:table-cell">Schedule Date</th>
                  <th className="hidden md:table-cell">Location</th>
                  <th className="hidden md:table-cell">Created</th>
                  <th>Status</th>
                  <th className="hidden md:table-cell">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockData.map((item, index) => (
                  <tr key={index}>
                    <td className="hidden md:table-cell">
                      <div className="flex items-center">
                        <Avatar
                          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                          className="w-12 h-12 mr-2"
                        />
                        <div>
                          <h1 className="font-bold">{item.candidate}</h1>
                          <h1 className="text-xs text-gray-500">
                            <span
                              className={
                                item.experience === "Freshers"
                                  ? "text-red-500"
                                  : "text-sku-500"
                              }
                            >
                              {item.experience}
                            </span>
                          </h1>
                        </div>
                      </div>
                    </td>
                    <td className="hidden md:table-cell">
                      <h1 className="font-bold">{item.client}</h1>
                      <h1 className="text-xs text-gray-500">8734942220</h1>
                      <h1 className="text-xs text-gray-500">
                        Safety.royalstaffing@gmail.com
                      </h1>
                    </td>
                    <td>
                      <h1 className="font-bold text-sky-500">
                        {item.jobDetails}
                      </h1>
                      <p className="hidden md:block">{item.responsibility}</p>
                    </td>
                    <td className="hidden md:table-cell">{item.scheduleDate}</td>
                    <td className="hidden md:table-cell">{item.location}</td>
                    <td className="hidden md:table-cell">{item.created}</td>
                    <td>
                      <div className="badge badge-xs badge-neutral">
                        Round 1
                      </div>
                      <span
                        className={
                          item.status === "Rejected"
                            ? "text-red-500"
                            : "text-green-500"
                        }
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="hidden md:table-cell">
                      <button className="btn p-4 border-violet-500 text-violet-500 bg-white hover:bg-violet-500 hover:text-white">
                        <AccessTimeIcon />
                      </button>
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
    </div>
  );
}

export default Interview;
