import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Delete } from "@mui/icons-material";

const CandidateTable = ({
  candidates,
  indexOfFirstItem,
  currentPage,
  totalPages,
  onPageChange,
  totalRecords,
  itemsPerPage,
  handleDelete,
}) => {
  return (
    <div>
      <div className="overflow-x-auto pt-4 pb-4">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Candidate</th>
              <th className="hidden md:table-cell">Phone Number</th>
              <th className="hidden md:table-cell">Email Address</th>
              <th className="hidden md:table-cell">Education</th>
              <th className="hidden md:table-cell">Created</th>
              <th className="hidden md:table-cell">Status</th>
              <th className="hidden md:table-cell">Actions</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate, index) => (
              <tr key={candidate.id} className="hover">
                <td>{index + 1 + indexOfFirstItem}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="w-10 h-10 rounded-full bg-gray-200">
                        <img src={candidate.profile} alt="Avatar" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{candidate.name}</div>
                      <div className="text-sm text-blue-500">
                        {candidate.experience}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="hidden md:table-cell">
                  <div className="flex items-center space-x-2">
                    <LocalPhoneIcon className="text-blue-500 text-sm" />
                    <span>{candidate.phone}</span>
                  </div>
                </td>
                <td className="hidden md:table-cell">
                  <div className="flex items-center space-x-2">
                    <EmailIcon className="text-blue-500" />
                    <span>{candidate.email}</span>
                  </div>
                </td>
                <td className="hidden md:table-cell">{candidate.education}</td>
                <td className="hidden md:table-cell">{candidate.created}</td>
                <td className="hidden md:table-cell">
                  <input
                    type="checkbox"
                    className="toggle toggle-success"
                    checked={candidate.status}
                    readOnly
                  />
                </td>
                <td className="hidden md:table-cell">
                  <div className="flex space-x-2">
                    <button className="btn btn-ghost btn-circle border-blue-500 text-blue-500">
                      <AccountCircleOutlinedIcon />
                    </button>
                    <button
                      className="btn btn-ghost border-red-500 text-red-500"
                      onClick={() => handleDelete(candidate.id)}
                    >
                      <Delete />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="m-4 flex justify-between">
        <h1>
          Showing{" "}
          <b>
            {indexOfFirstItem + 1} - {indexOfFirstItem + candidates.length}{" "}
          </b>
          of <b>{totalRecords}</b> Records
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
              className={`btn rounded-md bg-lime-400 ${
                page === currentPage ? "btn-active" : ""
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
  );
};

export default CandidateTable;
