import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import UIButton from "../../../../../Common/UIButton";

const JobDetails = ({ job, handleTabChange }) => {
  return (
    <div>
      <div className="m-4 flex justify-end gap-2">
        <UIButton
          onClick={() => {
            handleTabChange("Job Posts");
          }}
        >
          Job Posts
        </UIButton>
        <UIButton
          onClick={() => {
            handleTabChange("Interview");
          }}
        >
          Interview
        </UIButton>
      </div>
      <div className="m-4 ">
        <div className="card bg-white shadow-md rounded-md">
          <div className="card-body">
            <h1 className="card-title">{job.jobTitle}</h1>
            <div className="badge bg-gray-300">
              <p>
                {job.category} {">"} {job.jobTitle}
              </p>
            </div>
            <h1 className="text-gray-500">{job.location}</h1>
          </div>
        </div>
        <div className="flex flex-row w-full h-full mt-4 gap-4">
          <div className="card bg-white w-full shadow-md rounded-md">
            <div className="card-body">
              <div className="flex">
                <div className="avatar">
                  <div className="w-24 rounded">
                    <img src={job.profile} />
                  </div>
                </div>
                <div className="ml-4 flex-col flex justify-center">
                  <h1 className="card-title">{job.client}</h1>
                  <div className="flex items-center gap-2 mt-2">
                    <h1 className="card-title text-xs text-gray-400">
                      <PhoneIcon fontSize="small" /> {job.phone}
                    </h1>
                    <h1 className="card-title text-xs text-gray-400">
                      <EmailIcon fontSize="small" /> {job.email}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-white w-full shadow-md rounded-md">
            <div className="card-body">
              <div className="flex gap-2 items-center h-full">
                <button className="btn btn-lg btn-success text-white w-1/2">
                  Approve Job
                </button>
                <button className="btn btn-lg btn-error text-white  w-1/2">
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full mt-4 gap-4">
          <div className="card bg-white shadow-md w-full rounded-md">
            <div className="card-body">
              <table className="table">
                <tbody>
                  <tr>
                    <td>
                      <strong>Position</strong>
                    </td>
                    <td>
                      <strong>:</strong>
                    </td>
                    <td>{job.jobTitle}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Min. Qualification</strong>
                    </td>
                    <td>
                      <strong>:</strong>
                    </td>
                    <td>{job.minQualification}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Min. Education</strong>
                    </td>
                    <td>
                      <strong>:</strong>
                    </td>
                    <td>{job.minEducation}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Experience</strong>
                    </td>
                    <td>
                      <strong>:</strong>
                    </td>
                    <td>{job.experience}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Salary</strong>
                    </td>
                    <td>
                      <strong>:</strong>
                    </td>
                    <td>{job.salary}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Job Timing</strong>
                    </td>
                    <td>
                      <strong>:</strong>
                    </td>
                    <td>{job.timing}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Joining Date</strong>
                    </td>
                    <td>
                      <strong>:</strong>
                    </td>
                    <td>{job.joiningDate}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Interview Last Date</strong>
                    </td>
                    <td>
                      <strong>:</strong>
                    </td>
                    <td>{job.interviewDate}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="card bg-white w-full shadow-md rounded-md">
            <div className="card-body">There is nothing to show</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
