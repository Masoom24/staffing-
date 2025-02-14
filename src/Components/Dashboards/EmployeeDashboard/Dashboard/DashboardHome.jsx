import React from "react";

function Dashboard() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left Section */}
        <div className="flex flex-col gap-4 md:w-1/3">
          <div className="card w-full bg-base-100 shadow-sm">
            <div className="card-body">
              <h1 className="text-3xl md:text-4xl font-bold">0</h1>
              <h2 className="card-title text-base md:text-lg">
                Total Job Posts
              </h2>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-sm">
            <div className="card-body">
              <h1 className="text-3xl md:text-4xl font-bold">0</h1>
              <h2 className="card-title text-base md:text-lg">
                Total Job Applied
              </h2>
            </div>
          </div>
        </div>

        {/* Right Section: Recent Interviews */}
        <div className="md:w-2/3">
          <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title font-bold text-lg">
                Recent Interviews Scheduled
              </h2>
              <div className="overflow-x-auto mt-4">
                <table className="table-auto w-full text-sm md:text-base">
                  <thead>
                    <tr>
                      <th className="px-2 py-1 text-left">Job Details</th>
                      <th className="px-2 py-1 text-left">Schedule Date</th>
                      <th className="px-2 py-1 text-left">Interview Applied</th>
                      <th className="px-2 py-1 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="4" className="text-center py-4">
                        No data found
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
