import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import InputField from "../../../../../Common/InputField";
import UIButton from "../../../../../Common/UIButton";

function FilterJobs({ setOpenFilter }) {
  const [filters, setFilters] = useState({
    jobCategory: "",
    jobSubCategory: "",
    minSalary: "",
    maxSalary: "",
    minExperience: "",
    maxExperience: "",
    jobTiming: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="modal modal-open">
      <div className="bg-white rounded-lg p-6 w-100 relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
          onClick={() => setOpenFilter(false)}
        >
          <CloseIcon />
        </button>

        <h3 className="text-xl font-bold mb-4">Filter Jobs</h3>

        {/* Job Category (Dropdown/Select) */}
        <InputField
          label="Job Category"
          name="jobCategory"
          type="select"
          options={["IT", "Healthcare", "Finance", "Education", "Other"]}
          value={filters.jobCategory}
          onChange={handleChange}
        />

        {/* Job Sub Category (Dropdown/Select) */}
        <InputField
          label="Job Sub Category"
          name="jobSubCategory"
          type="select"
          options={["Developer", "Analyst", "Manager", "Intern", "Other"]}
          value={filters.jobSubCategory}
          onChange={handleChange}
        />

        {/* Min and Max Salary */}
        <div className="mb-4 grid grid-cols-2 gap-4">
          <InputField
            label="Min Salary (₹)"
            name="minSalary"
            type="number"
            placeholder="e.g., 300000"
            value={filters.minSalary}
            onChange={handleChange}
          />
          <InputField
            label="Max Salary (₹)"
            name="maxSalary"
            type="number"
            placeholder="e.g., 1000000"
            value={filters.maxSalary}
            onChange={handleChange}
          />
        </div>

        {/* Min and Max Experience */}
        <div className="mb-4 grid grid-cols-2 gap-4">
          <InputField
            label="Min Experience (Years)"
            name="minExperience"
            type="number"
            placeholder="e.g., 1"
            value={filters.minExperience}
            onChange={handleChange}
          />
          <InputField
            label="Max Experience (Years)"
            name="maxExperience"
            type="number"
            placeholder="e.g., 5"
            value={filters.maxExperience}
            onChange={handleChange}
          />
        </div>

        {/* Job Timing */}
        <InputField
          label="Job Timing"
          name="jobTiming"
          type="text"
          placeholder="e.g., Full-Time"
          value={filters.jobTiming}
          onChange={handleChange}
        />

        {/* Action Buttons */}
        <div className="flex justify-between">
          <UIButton
            onClick={() => {
              console.log("Filters Reset");
              setFilters({
                jobCategory: "",
                jobSubCategory: "",
                minSalary: "",
                maxSalary: "",
                minExperience: "",
                maxExperience: "",
                jobTiming: "",
              });
            }}
          >
            Reset
          </UIButton>
          <UIButton
            onClick={() => console.log("Filters Applied", filters)}
          >
            Apply
          </UIButton>
        </div>
      </div>
    </div>
  );
}

export default FilterJobs;
