import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LatestJob } from "../../data/MockData";
import img from "../../../assets/Images/icon.png";

const LatestJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [showAll, setShowAll] = useState(false); // State to control job visibility

  useEffect(() => {
    setJobs(LatestJob);
  }, []);

  // Show only first 4 jobs if showAll is false
  const visibleJobs = showAll ? jobs : jobs.slice(0, 4);

  return (
    <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-4 mb-8">
          <div className="inline-block">
            <span className="bg-[#96BE25] text-white px-4 py-2 rounded-lg text-lg font-semibold">
              Latest Jobs Post
            </span>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
            Jobs You May Be Interested In
          </h3>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {visibleJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200 transition-all duration-200 hover:border-[#96BE25] flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            >
              <div className="space-y-2 w-full">
                <span className="bg-[#96BE25] text-white text-sm px-3 py-1 rounded-full inline-block">
                  {job.jobType}
                </span>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {job.title}
                </h4>
                <div className="flex flex-wrap gap-2 sm:gap-4 text-sm text-gray-600">
                  <span>{job.department}</span>
                  <span>{job.salaryRange}</span>
                  <span>{job.experience}</span>
                  <span>{job.location}</span>
                </div>
              </div>
              <Link to={`/browse/${job.id}`} className="w-full md:w-auto">
                <button className="bg-[#96BE25] hover:bg-[#86ae15] text-white px-4 sm:px-6 py-2 rounded-lg font-medium flex items-center gap-2 w-full md:w-auto justify-center">
                  Browse Job
                  <img
                    src={img}
                    alt="Check Icon"
                    className="w-5 sm:w-6 h-5 sm:h-6 rounded-full"
                  />
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Browse All Jobs Button */}
        {!showAll && (
          <div className="text-center mt-8">
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setShowAll(true)}
                className="group bg-[#96BE25] hover:bg-[#86ae15] text-white px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-lg font-medium flex items-center gap-3 transition-all duration-300 w-full sm:w-auto justify-center"
              >
                <span className="group-hover:pr-2 transition-all duration-300">
                  Browse All Jobs
                </span>
                <span className="opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                  &gt;
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LatestJobs;
