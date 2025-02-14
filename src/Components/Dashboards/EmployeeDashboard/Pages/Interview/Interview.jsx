import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function Interview() {
  const interviews = [
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
  ];

  return (
    <div className="m-4">
      <div className="card bg-white border-gray-200 p-4">
        <div className="overflow-x-auto">
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
              {interviews.map((interview) => (
                <tr key={interview.id}>
                  <td>{interview.candidate}</td>
                  <td className="hidden md:table-cell">
                    {interview.jobDetails}
                  </td>
                  <td className="hidden md:table-cell">
                    {interview.scheduleDate}
                  </td>
                  <td className="hidden md:table-cell">{interview.location}</td>
                  <td className="hidden md:table-cell">{interview.created}</td>
                  <td>
                    <span
                      className={`badge ${
                        interview.status === "Scheduled"
                          ? "badge-info"
                          : "badge-success"
                      }`}
                    >
                      {interview.status}
                    </span>
                  </td>
                  <td>
                    <div className="flex flex-row gap-2">
                      <button className="btn p-2 bg-white border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white">
                        <EditIcon />
                      </button>
                      <button className="btn p-2 bg-white border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                        <DeleteIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Interview;
