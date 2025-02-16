import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchBar from "../../../../../Common/SearchBar";

function Interview() {
  const [interviews, setInterviews] = useState([
    {
      id: 1,
      candidate: "John Doe",
      jobDetails: "Frontend Developer at ABC Corp",
      scheduleDate: "2025-02-10",
      location: "Online",
      created: "2025-02-01",
      status: "Scheduled",
    },
    {
      id: 2,
      candidate: "Jane Smith",
      jobDetails: "Marketing Specialist at XYZ Ltd",
      scheduleDate: "2025-02-12",
      location: "Office",
      created: "2025-01-28",
      status: "Completed",
    },
    {
      id: 3,
      candidate: "Mike Johnson",
      jobDetails: "Backend Developer at DEF Ltd",
      scheduleDate: "2025-02-15",
      location: "Remote",
      created: "2025-02-02",
      status: "Scheduled",
    },
    {
      id: 4,
      candidate: "Emily Davis",
      jobDetails: "UI/UX Designer at GHI Ltd",
      scheduleDate: "2025-02-18",
      location: "Online",
      created: "2025-01-25",
      status: "Pending",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(interviews.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentInterviews = interviews.slice(indexOfFirstItem, indexOfLastItem);

  // Pagination Handler
  const onPageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Edit Interview Function
  const handleEdit = (id) => {
    const interview = interviews.find((item) => item.id === id);
    alert(`Edit Interview for ${interview.candidate}`);
  };

  // Delete Interview Function
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this interview?");
    if (confirmDelete) {
      setInterviews(interviews.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="m-4">
      <div className="card bg-white border-gray-200 p-4">
        <div className="flex flex-row justify-start gap-4">
          <SearchBar/>
        </div>
        <div className="overflow-x-auto mt-6">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Candidate</th>
                <th className="hidden md:table-cell">Job Details</th>
                <th className="hidden md:table-cell">Schedule Date</th>
                <th className="hidden md:table-cell">Location</th>
                <th className="hidden md:table-cell">Created</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentInterviews.map((interview) => (
                <tr key={interview.id}>
                  <td>{interview.candidate}</td>
                  <td className="hidden md:table-cell">{interview.jobDetails}</td>
                  <td className="hidden md:table-cell">{interview.scheduleDate}</td>
                  <td className="hidden md:table-cell">{interview.location}</td>
                  <td className="hidden md:table-cell">{interview.created}</td>
                  <td>
                    <span
                      className={`badge badge-sm ${
                        interview.status === "Scheduled"
                          ? "badge-info"
                          : interview.status === "Completed"
                          ? "badge-success"
                          : "badge-warning"
                      }`}
                    >
                      {interview.status}
                    </span>
                  </td>
                  <td>
                    <div className="flex flex-row gap-2">
                      <button
                        onClick={() => handleEdit(interview.id)}
                        className="btn p-2 bg-white border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white"
                      >
                        <EditIcon />
                      </button>
                      <button
                        onClick={() => handleDelete(interview.id)}
                        className="btn p-2 bg-white border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                      >
                        <DeleteIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="m-4 flex justify-between">
          <h1>
            Showing <b>{indexOfFirstItem + 1} - {indexOfFirstItem + currentInterviews.length}</b> of <b>{interviews.length}</b> Records
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
                className={`btn rounded-md ${page === currentPage ? "bg-lime-400 text-white" : "bg-gray-200"}`}
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
  );
}

export default Interview;
