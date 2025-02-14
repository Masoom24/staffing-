import React, { useState } from "react";
import CreateCard from "../../../../../Common/CreateCard";
import UIButton from "../../../../../Common/UIButton";
import InputField from "../../../../../Common/InputField";
import EditorComponent from "../../../../../Common/EditorComponent/EditorComponent";

function CreateNewJob() {
  const jobCategories = ["IT", "Engineering"];
  const jobTimings = ["Full Time", "Part Time", "Freelance"];
  const experiences = ["0-1 Years", "1-2 Years", "2-5 Years", "5+ Years"];
  const countries = ["India", "USA", "UK"];
  const states = ["Maharashtra", "California", "Texas"];
  const cities = ["Mumbai", "Pune", "Los Angeles"];

  const [formData, setFormData] = useState({
    client: "",
    jobCategory: "",
    jobSubCategory: "",
    jobTitle: "",
    jobDescription: "",
    jobPosition: "",
    requiredQualification: "",
    minExperience: "",
    maxExperience: "",
    minSalary: "",
    maxSalary: "",
    requiredSkills: "",
    jobTiming: "",
    joiningDate: "",
    lastInterviewDate: "",
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

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form Data Submitted: ", formData);
    alert("Form Submitted Successfully!");
    // Add your form submission logic here (e.g., API call)
  };

  return (
    <div className="px-4">
      <div className="mb-4 mt-4">
        <CreateCard title="General Information">
          <div className="flex flex-col md:flex-row gap-4">
            <InputField
              label="Client"
              placeholder="Enter Client Name"
              value={formData.client}
              onChange={(e) => handleChange("client", e.target.value)}
            />
            <InputField
              type="select"
              label="Job Category"
              placeholder="Select Job Category"
              options={jobCategories}
              value={formData.jobCategory}
              onChange={(e) => handleChange("jobCategory", e.target.value)}
            />
            <InputField
              label="Job Sub Category"
              placeholder="Enter Job Sub Category"
              value={formData.jobSubCategory}
              onChange={(e) => handleChange("jobSubCategory", e.target.value)}
            />
          </div>
          <div className="mt-4">
            <InputField
              label="Job Title"
              placeholder="Enter Job Title"
              required
              value={formData.jobTitle}
              onChange={(e) => handleChange("jobTitle", e.target.value)}
            />
          </div>
          <div className="mt-4">
            <InputField
              label="Job Description"
              placeholder="Enter Job Description"
              required
              value={formData.jobDescription}
              onChange={(e) => handleChange("jobDescription", e.target.value)}
            />
            <EditorComponent
              value={formData.jobDescription}
              onChange={(value) => handleChange("jobDescription", value)}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <InputField
              label="Job Position"
              placeholder="Enter Job Position"
              value={formData.jobPosition}
              onChange={(e) => handleChange("jobPosition", e.target.value)}
            />
            <InputField
              label="Required Qualification"
              placeholder="Enter Required Qualification"
              value={formData.requiredQualification}
              onChange={(e) => handleChange("requiredQualification", e.target.value)}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <InputField
              type="select"
              label="Minimum Experience"
              placeholder="Select Minimum Experience"
              options={experiences}
              value={formData.minExperience}
              onChange={(e) => handleChange("minExperience", e.target.value)}
            />
            <InputField
              type="select"
              label="Maximum Experience"
              placeholder="Select Maximum Experience"
              options={experiences}
              value={formData.maxExperience}
              onChange={(e) => handleChange("maxExperience", e.target.value)}
            />
            <InputField
              label="Minimum Salary"
              placeholder="Enter Minimum Salary"
              value={formData.minSalary}
              onChange={(e) => handleChange("minSalary", e.target.value)}
            />
            <InputField
              label="Maximum Salary"
              placeholder="Enter Maximum Salary"
              value={formData.maxSalary}
              onChange={(e) => handleChange("maxSalary", e.target.value)}
            />
          </div>
          <div className="mt-4">
            <InputField
              label="Required Skills"
              placeholder="Enter Required Skills"
              value={formData.requiredSkills}
              onChange={(e) => handleChange("requiredSkills", e.target.value)}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <InputField
              type="select"
              label="Job Timing"
              placeholder="Select Job Timing"
              options={jobTimings}
              value={formData.jobTiming}
              onChange={(e) => handleChange("jobTiming", e.target.value)}
            />
            <InputField
              type="date"
              label="Joining Date"
              value={formData.joiningDate}
              onChange={(e) => handleChange("joiningDate", e.target.value)}
            />
            <InputField
              type="date"
              label="Last Interview Date"
              value={formData.lastInterviewDate}
              onChange={(e) => handleChange("lastInterviewDate", e.target.value)}
            />
          </div>
        </CreateCard>
      </div>
      <div className="mb-4">
        <CreateCard title="Salary & Facilities">
          <InputField
            label="Facilities"
            placeholder="Enter Facilities"
            value={formData.facilities}
            onChange={(e) => handleChange("facilities", e.target.value)}
          />
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <InputField
              label="CTC Salary"
              placeholder="Enter CTC Salary"
              value={formData.ctcSalary}
              onChange={(e) => handleChange("ctcSalary", e.target.value)}
            />
            <InputField
              label="In Hand Salary"
              placeholder="Enter In Hand Salary"
              value={formData.inHandSalary}
              onChange={(e) => handleChange("inHandSalary", e.target.value)}
            />
          </div>
          <InputField
            label="Salary Deduction Details"
            placeholder="Enter Salary Deduction Details"
            value={formData.salaryDeductions}
            onChange={(e) => handleChange("salaryDeductions", e.target.value)}
          />
        </CreateCard>
      </div>
      <div className="mb-4">
        <CreateCard title="Job Location">
          <div className="flex flex-col lg:flex-row gap-6 w-full">
            <div className="flex flex-col gap-4 w-full lg:w-1/2">
              <InputField
                label="Address Line 1"
                placeholder="Enter Address Line 1"
                required
                value={formData.addressLine1}
                onChange={(e) => handleChange("addressLine1", e.target.value)}
              />
              <InputField
                label="Address Line 2"
                placeholder="Enter Address Line 2"
                value={formData.addressLine2}
                onChange={(e) => handleChange("addressLine2", e.target.value)}
              />
              <InputField
                label="Area/Landmark"
                placeholder="Enter Area/Landmark"
                value={formData.areaLandmark}
                onChange={(e) => handleChange("areaLandmark", e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-4 w-full lg:w-1/2">
              <InputField
                type="select"
                label="Country"
                placeholder="Select Country"
                options={countries}
                required
                value={formData.country}
                onChange={(e) => handleChange("country", e.target.value)}
              />
              <InputField
                type="select"
                label="State"
                placeholder="Select State"
                options={states}
                required
                value={formData.state}
                onChange={(e) => handleChange("state", e.target.value)}
              />
              <InputField
                type="select"
                label="City"
                placeholder="Select City"
                options={cities}
                required
                value={formData.city}
                onChange={(e) => handleChange("city", e.target.value)}
              />
            </div>
          </div>
        </CreateCard>
      </div>
      <div className="mb-4 flex justify-end">
        <UIButton onClick={handleSubmit}>Create New Job</UIButton>
      </div>
    </div>
  );
}

export default CreateNewJob;
