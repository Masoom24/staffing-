import React from "react";

function MyInterview() {
  return (
    <div className="flex justify-center p-4">
      {/* Card */}
      <div className="card card-border bg-base-100 w-full m-4">
        <div className="card-body">

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* Table Header */}
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

              {/* Table Body */}
              <tbody>
                <tr>
                  <td colSpan="6" className="text-center text-gray-500">
                    No data available
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-2">
            <span className="text-sm text-gray-600">Page 1 of 1</span>
            <div className="flex justify-end items-center gap-2">
              <button className="btn btn-sm btn-outline" disabled>
                Prev
              </button>
              <button className="btn btn-sm btn-outline">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyInterview;
