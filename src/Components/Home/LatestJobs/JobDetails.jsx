import { useParams } from "react-router-dom";
import { LatestJob } from "../../data/MockData";
import img from "../../../assets/Images/img3.jpeg";
import img1 from "../../../assets/Images/check.png";
import img2 from "../../../assets/Images/briefcase.png";
import img3 from "../../../assets/Images/clock.png";
import img4 from "../../../assets/Images/metaverse.png";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessIcon from "@mui/icons-material/Business";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const JobDetails = () => {
  const { jobId } = useParams();
  const job = LatestJob.find((job) => job.id === parseInt(jobId));

  if (!job) {
    return (
      <div className="text-center py-10 text-[#96BE25]">Job not found</div>
    );
  }

  return (
    <div className="bg-gray-100">
      {/* Full Width Banner */}
      <div
        className="relative bg-cover bg-center text-white p-10 w-full h-[200px] flex items-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center w-full max-w-[90%] mx-auto px-6 text-center md:text-left">
          <div>
            <span className="bg-[#96BE25] text-white px-4 py-1 rounded-full text-sm flex items-center space-x-2">
              <WorkIcon />
              <span>{job.jobType}</span>
            </span>
            <p className="text-gray-300 text-lg mt-1 flex items-center">
              <LocationOnIcon className="mr-1" /> {job.location}
            </p>
            <h2 className="text-2xl font-bold mt-2 flex items-center space-x-2">
              <span>{job.title}</span>
              <img src={img1} alt="Check Icon" className="w-6 h-6" />
            </h2>
            <div className="mt-2">
              <span className="bg-white text-gray-900 inline-flex items-center px-2 py-1 rounded-full text-sm">
                <BusinessIcon className="mr-1" />
                <span>{job.department}</span>
              </span>
            </div>
          </div>

          <button className="mt-4 md:mt-0 bg-[#96BE25] text-white px-6 py-2 rounded-lg shadow-md transition hover:bg-white hover:text-[#96BE25] border border-[#96BE25]">
            Apply For Jobs ➤
          </button>
        </div>
      </div>

      {/* Job Details Section - Full Width */}
      <div className="w-full max-w-[90%] mx-auto mt-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Job Description - Now full width */}
          <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-lg border border-gray-300 w-full">
            <h3 className="bg-gray-800 text-white p-4 rounded-md flex items-center space-x-2">
              <WorkIcon className="bg-white text-gray-800 p-2 rounded-full" />
              <span className="font-bold">Job Description</span>
            </h3>

            <div className="mt-4 text-gray-700 space-y-3 text-lg">
              <p className="font-semibold">Urgently Hiring For {job.title}.</p>
              <p>
                <strong>Designation:</strong> {job.title}
              </p>
              <p>
                <strong>Qualification:</strong> {job.qualification}
              </p>
              <p>
                <strong>Industry:</strong> {job.department}
              </p>
              <p>
                <strong>Experience:</strong> {job.experience}
              </p>
              <p>
                <strong>Salary Bracket:</strong> {job.salaryRange}
              </p>
              <p>
                <strong>Time:</strong> {job.jobType}
              </p>
              <p>
                <strong>Contact:</strong> {job.contact}
              </p>

              <div className="flex items-center space-x-2">
                <EmailIcon />
                <p className="text-blue-600">{job.email || "N/A"}</p>
              </div>
            </div>
          </div>

          {/* Additional Job Information - Full width */}
          <div className="space-y-4 w-full text-black">
            <div className="bg-white text-black p-6 shadow-md rounded-lg">
              <h4 className="text-[#96BE25] border-b pb-2 text-lg">
                Offered Salary
              </h4>
              <p className="text-xl font-bold flex items-center">
                <AttachMoneyIcon className="mr-1" /> {job.salaryRange}
              </p>
            </div>
            <div className="bg-white text-black p-6 shadow-md rounded-lg">
              <h4 className="text-[#96BE25] border-b pb-2 text-lg">
                Required Experience
              </h4>
              <p className="text-xl font-bold flex items-center">
                <AccessTimeIcon className="mr-1" /> {job.experience}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
