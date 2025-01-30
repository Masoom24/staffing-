import React from "react";
import InputField from "../../../../Common/InputField";

const GeneralInformation = ({ jobDetails, setStep, handleChange }) => {
  return (
    <div style={{ maxHeight: "70vh", overflowY: "auto", paddingRight: "10px" }}>
      <form>
        <h1 className="mb-4">General Information</h1>
        <label class="block text-sm font-medium mb-1">
          <span class="label-text">Select Job Category</span>
        </label>
        <select class="select border-none w-full mb-4 bg-gray-200" value={jobDetails.jobCategory} onClick={handleChange} name="jobCategory">
          <option disabled selected>
            Choose a category
          </option>
          <option value="Information Technology">
            Information Technology (IT)
          </option>
          <option value="Banking">Banking</option>
          <option value="Chemical">Chemical</option>
          <option value="Engineering">Engineering</option>
          <option value="Fertilizer">Fertilizer</option>
          <option value="Fire & Safety">Fire & Safety</option>
          <option value="Infrastructure">Infrastructure</option>
          <option value="Logistic">Logistic</option>
          <option value="Manufacturing">Manufacturing</option>
          <option value="Mining">Mining</option>
          <option value="Offshore or Onshore">Offshore or Onshore</option>
          <option value="Oil and Gas">Oil and Gas</option>
          <option value="Pharma">Pharma</option>
          <option value="Power">Power</option>
          <option value="Retailer">Retailer</option>
          <option value="Telecom">Telecom</option>
        </select>
        <InputField
          label="Job Sub Category"
          name="jobSubCategory"
          value={jobDetails.jobSubCategory}
          onChange={handleChange}
          placeholder="Enter Job Sub Category"
        />
        <InputField
          label="Job Title"
          name="jobTitle"
          value={jobDetails.jobTitle}
          onChange={handleChange}
          placeholder="Enter Job Title"
        />
        <InputField
          label="Job Description"
          name="jobDescription"
          value={jobDetails.jobDescription}
          onChange={handleChange}
          placeholder="Enter Job Description"
        />
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
        <InputField
          label="Skill Required"
          name="skillRequired"
          value={jobDetails.skillRequired}
          onChange={handleChange}
          placeholder="Add Required Skill"
        />
        <InputField
          label="Minimum Experience"
          name="minimumExperience"
          value={jobDetails.minimumExperience}
          onChange={handleChange}
          placeholder="Enter Experience"
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
        <div className="flex float-right mt-4">
          <button
            className="btn  mr-2 border-lime-500 bg-white shadow-md  text-lime-500"
            onClick={() => setStep(1)}
          >
            Cancel
          </button>
          <button
            className="btn bg-lime-500 text-white shadow-md"
            onClick={(e) => {
              e.preventDefault();
              setStep(2);
            }}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default GeneralInformation;
