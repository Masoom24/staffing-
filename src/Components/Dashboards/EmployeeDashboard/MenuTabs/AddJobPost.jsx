import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import GeneralInformation from "./JobDetails Form/GeneralInformation";
import SalaryAndFacilities from "./JobDetails Form/SalaryAndFacilities";
import JobLocation from "./JobDetails Form/JobLocation";
import DisplayJob from "./JobDetails Form/DisplayJob";  

function AddJobPost() {
  const [form, setForm] = useState(false);
  const [step, setStep] = useState(1);
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

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm(false);
    setStep(1);
    setJobDetails({
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
  };

  return (
    <div className="card bg-white m-4 flex min-50">
      <div>
        <button
          onClick={() => {
            setForm(true);
            setStep(1);
            setSubmitted(false);
          }}
          className="btn m-4 float-right bg-lime-500 text-white"
        >
          <AddIcon />Add Job Post
        </button>
      </div>

      {form && !submitted && (
        <div className="modal modal-open">
          <div className="modal-box bg-white p-6">
            <button className="flex float-right" onClick={handleReset}>
              <CloseIcon />
            </button>

            {step === 1 && (
              <GeneralInformation
                jobDetails={jobDetails}
                setJobDetails={setJobDetails}
                setStep={setStep}
                handleChange={handleChange}
              />
            )}

            {step === 2 && (
              <SalaryAndFacilities
                jobDetails={jobDetails}
                setJobDetails={setJobDetails}
                setStep={setStep}
              />
            )}

            {step === 3 && (
              <JobLocation
                jobDetails={jobDetails}
                setJobDetails={setJobDetails}
                handleSubmit={handleSubmit}
                setStep={setStep}
              />
            )}
          </div>
        </div>
      )}

      {submitted && <DisplayJob jobDetails={jobDetails} />}
    </div>
  );
}

export default AddJobPost;
