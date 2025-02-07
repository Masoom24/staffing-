import React, { useState } from "react";
import GeneralInformation from "./JobDetails Form/GeneralInformation";
import SalaryAndFacilities from "./JobDetails Form/SalaryAndFacilities";
import JobLocation from "./JobDetails Form/JobLocation";
import UIButton from "../../../../Common/UIButton";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

function AddJobPost({handleTabChange}) {
  const [jobDetails, setJobDetails] = useState({
    jobCategory: "",
    jobSubCategory: "",
    jobTitle: "",
    jobDescription: "",
    position: "",
    highestQualification: "",
    minimumExperience: "",
    skillRequired: "",
    joiningDate: "",
    lastInterviewDate: "",
    minSalary: "",
    maxSalary: "",
    facilities: "",
    ctcSalary: "",
    inHandSalary: "",
    salaryDeductions: "",
    addressLine1: "",
    addressLine2: "",
    areaLandmark: "",
    country: "",
    state: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <div className="mb-4 flex justify-end">
        <UIButton onClick={()=>handleTabChange("Add Job Post")}><WorkOutlineIcon className="mr-2"/>Job Post</UIButton>
      </div>
      <div className="card bg-white m-4 flex min-50">
        <GeneralInformation
          jobDetails={jobDetails}
          setJobDetails={setJobDetails}
          handleChange={handleChange}
        />
      </div>
      <div className="card bg-white m-4 flex min-50">
        <SalaryAndFacilities
          jobDetails={jobDetails}
          setJobDetails={setJobDetails}
        />
      </div>
      <div className="card bg-white m-4 flex min-50">
        <JobLocation
          jobDetails={jobDetails}
          setJobDetails={setJobDetails}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="card-body bg-white m-4 flex flex-row justify-end ">
        <UIButton>Create Job</UIButton>
      </div>
    </div>
  );
}

export default AddJobPost;
