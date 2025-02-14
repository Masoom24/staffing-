import React from "react";
import InputField from "../../../../../../Common/InputField";
import EditorComponent from "../../../../../../Common/EditorComponent/EditorComponent";

const GeneralInformation = ({ jobDetails, handleChange }) => {
  const jobCatergories = [
    "Information Technology (IT)",
    "Banking",
    "Chemical",
    "Engineering",
    "Fertilizer",
    "Fire & Safety",
    "Infrastructure",
    "Logistic",
    "Manufacturing",
    "Mining",
    "Offshore or Onshore",
    "Oil and Gas",
    "Pharma",
    "Power",
    "Retailer",
    "Telecom",
  ];

  const jobType = [
    "Full Time (12hrs)",
    "Full Time (8hrs)",
    "Part Time",
    "Shift Wise",
    "General Time",
  ];

  return (
    <div style={{ overflowY: "auto", paddingRight: "10px" }}>
      <form style={{ maxWidth: "none" }}>
        <h1 className="pb-4">General Information</h1>
        <div className="flex flex-row gap-4">
          <InputField
            type="select"
            label={"Job Category"}
            options={jobCatergories}
          />
          <InputField
            label="Job Sub Category"
            name="jobSubCategory"
            value={jobDetails.jobSubCategory}
            onChange={handleChange}
            placeholder="Enter Job Sub Category"
          />
        </div>

        <div className="mb-4">
          <InputField
            label="Job Title"
            name="jobTitle"
            value={jobDetails.jobTitle}
            onChange={handleChange}
            placeholder="Enter Job Title"
          />

          <label className="block text-sm font-medium mb-1">
            Job Description
          </label>
          <EditorComponent />
        </div>

        <div className="flex flex-row gap-4">
          <InputField
            label="Position"
            name="position"
            value={jobDetails.position}
            onChange={handleChange}
            placeholder="Enter Position"
          />
          <InputField
            label="Highest Qualification"
            name="highestQualification"
            value={jobDetails.highestQualification}
            onChange={handleChange}
            placeholder="Enter Qualification"
          />
        </div>

        <div className="flex flex-row gap-4 md:flex md:flex">
          <InputField
            label="Minimum Experience"
            name="minimumExperience"
            value={jobDetails.minExperience}
            onChange={handleChange}
            placeholder="Enter Experience"
          />
          <InputField
            label="Maximum Experience"
            name="minimumExperience"
            value={jobDetails.maxExperience}
            onChange={handleChange}
            placeholder="Enter Experience"
          />
          <InputField
            label="Minimum Salary"
            name="minSalary"
            value={jobDetails.minSalary}
            onChange={handleChange}
            placeholder="Enter Minimum Salary"
          />
          <InputField
            label="Maximum Salary"
            name="maxSalary"
            value={jobDetails.maxSalary}
            onChange={handleChange}
            placeholder="Enter Max Salary"
          />
        </div>

        <InputField
          label="Skill Required"
          name="skillRequired"
          value={jobDetails.skillRequired}
          onChange={handleChange}
          placeholder="Add Required Skill"
        />
        <div className="flex flex-row gap-4">
          <InputField
            label="Job Type"
            name="joiningType"
            value={jobDetails.jobType}
            onChange={handleChange}
            options={jobType}
            type="select"
          />
          <InputField
            label="Joining Date"
            name="joiningDate"
            value={jobDetails.joiningDate}
            onChange={handleChange}
            type="date"
          />
          <InputField
            label="Last Interview Date"
            name="lastInterviewDate"
            value={jobDetails.lastInterviewDate}
            onChange={handleChange}
            type="date"
          />
        </div>
      </form>
    </div>
  );
};

export default GeneralInformation;
