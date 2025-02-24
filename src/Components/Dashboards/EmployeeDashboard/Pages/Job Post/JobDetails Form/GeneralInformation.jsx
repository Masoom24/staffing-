import React from "react";
import InputField from "../../../../../../Common/InputField";
import EditorComponent from "../../../../../../Common/EditorComponent/EditorComponent";
import TitledCard from "../../../../../../Common/Card/TitledCard";

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
    <TitledCard title="General Information">
      <div style={{ overflowY: "auto", paddingRight: "10px" }}>
        <form style={{ maxWidth: "none" }}>
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
              required
            />

            <label className="block text-sm font-medium mb-1">
              Job Description <span className="text-red-400">*</span>
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
              required
            />
            <InputField
              label="Required Qualification"
              name="requiredQualification"
              value={jobDetails.highestQualification}
              onChange={handleChange}
              placeholder="Enter Qualification"
              required
            />
          </div>

          <div className="flex flex-row gap-4 md:flex md:flex">
            <InputField
              label="Minimum Experience"
              name="minimumExperience"
              value={jobDetails.minExperience}
              onChange={handleChange}
              placeholder="Enter Experience"
              required
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
              label="Job Timing"
              name="joiningType"
              value={jobDetails.jobType}
              onChange={handleChange}
              options={jobType}
              type="select"
              required
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
    </TitledCard>
  );
};

export default GeneralInformation;
