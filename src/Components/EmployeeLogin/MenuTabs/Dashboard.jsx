
function Dashboard() {
  
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap lg:flex-nowrap gap-4">
        {/* Left Section */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          <div className="card w-full bg-base-100 shadow-sm">
            <div className="card-body">
              <h1 className="text-2xl font-bold">0</h1>
              <h2 className="card-title">Total Job Created</h2>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-sm">
            <div className="card-body">
              <h1 className="text-2xl font-bold">0</h1>
              <h2 className="card-title">No of Candidate</h2>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-sm">
            <div className="card-body">
              <h1 className="text-2xl font-bold">0</h1>
              <h2 className="card-title">Total Candidate</h2>
            </div>
          </div>
        </div>

        {/* Right Section: Recent Interviews */}
        <div className="w-full lg:w-2/3">
          <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-lg font-bold">Recent Interviews Scheduled</h2>
              <div className="overflow-x-auto">
                <table className="table w-full">
                  {/* Table Head */}
                  <thead>
                    <tr>
                      <th>Job Details</th>
                      <th>Schedule Date</th>
                      <th>Interview Applied</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  {/* Table Body */}
                  <tbody>
                  <p>no data found</p>  
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
