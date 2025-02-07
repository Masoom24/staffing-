function JobDescription() {
  const companyDetails = {
    company: "ABC Corporation",
    position: "React Native Developer",
    department: "Information Tecgnology (IT)",
    minQualification: "BTECH Computer Science",
    experience: "1 Year",
    salary: "$50000 - $60000",
    jobType: "Full Time",
    JoiningDate: "",
    interviewDate: "",
    JobDescription:
      "Must have good knowledge and hands on React, Redux, DaisyUI, Tailwind and Ant Desin Familier with Github, Figma",
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      {/* Header Card */}
      <div className="card-body bg-white shadow-md rounded-md p-4">
        <h2 className="text-sm text-gray-500">Posted on: </h2>
        <h1 className="card-title font-bold text-2xl">
          {companyDetails.position}
        </h1>
        <div className="badge bg-gray-200 py-1 px-2 inline-block my-2">
          <h3 className="text-sm">{companyDetails.department}</h3>
        </div>
        <h2 className="text-sm text-gray-700">
          Nagpur, Chhatrapati Square, Gopal Nagar, Nagpur, Maharashtra, India
        </h2>
      </div>

      {/* Main Content: Table & Job Description */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Table Section */}
        <div className="card-body bg-white shadow-md rounded-md p-4 flex-1">
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left border-collapse">
              <tbody>
                <tr>
                  <th className="font-medium pr-4 pb-2">Position</th>
                  <td className="text-center pb-2">:</td>
                  <td className="pb-2 pl-4">{companyDetails.position}</td>
                </tr>
                <tr>
                  <th className="font-medium pr-4 pb-2">Min. Qualification</th>
                  <td className="text-center pb-2">:</td>
                  <td className="pb-2 pl-4">{companyDetails.minQualification}</td>
                </tr>
                <tr>
                  <th className="font-medium pr-4 pb-2">Experience</th>
                  <td className="text-center pb-2">:</td>
                  <td className="pb-2 pl-4">{companyDetails.experience}</td>
                </tr>
                <tr>
                  <th className="font-medium pr-4 pb-2">Salary</th>
                  <td className="text-center pb-2">:</td>
                  <td className="pb-2 pl-4">{companyDetails.salary}</td>
                </tr>
                <tr>
                  <th className="font-medium pr-4 pb-2">Job Timing</th>
                  <td className="text-center pb-2">:</td>
                  <td className="pb-2 pl-4">{companyDetails.jobType}</td>
                </tr>
                <tr>
                  <th className="font-medium pr-4 pb-2">Joining Date</th>
                  <td className="text-center pb-2">:</td>
                  <td className="pb-2 pl-4">{companyDetails.JoiningDate}</td>
                </tr>
                <tr>
                  <th className="font-medium pr-4 pb-2">Interview Last Date</th>
                  <td className="text-center pb-2">:</td>
                  <td className="pb-2 pl-4">{companyDetails.interviewDate}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Job Description Section */}
        <div className="card-body bg-white shadow-md rounded-md p-4 flex-1">
          <h1 className="card-title font-bold text-xl mb-2">Job Description</h1>
          <p className="text-gray-700">
            {companyDetails.JobDescription}
          </p>
        </div>
      </div>
    </div>
  );
}

export default JobDescription;