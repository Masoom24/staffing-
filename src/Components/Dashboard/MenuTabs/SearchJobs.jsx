import React from "react";

function SearchJobs() {
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

            {/* Filter Dropdown */}
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Filter by Category
              </option>
              <option>IT & Software</option>
              <option>Marketing</option>
              <option>Finance</option>
              <option>Healthcare</option>
            </select>
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
    </div>
  );
}

export default SearchJobs;
