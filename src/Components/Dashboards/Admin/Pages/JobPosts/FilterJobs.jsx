import React from "react";
import UIButton from "../../../../../Common/UIButton";
import InputField from "../../../../../Common/InputField";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

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
const FilterJobs = ({ showFilterDropdown, onFilterClick }) => {
  const handleInputChange = (e) => {
    console.log(`${e.target.name}: ${e.target.value}`);
  };

  return (
    <div className="relative">
      <UIButton onClick={onFilterClick}>
        <FilterAltIcon className="mr-2" />
        Filter
        <ExpandMoreIcon />
      </UIButton>

      {showFilterDropdown && (
        <div
          className="absolute top-10 right-0 z-10 w-100 bg-white rounded-md shadow-lg ring-1 ring-black/5 p-6"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="flex flex-wrap ">
            <InputField
              label="Client"
              name="client"
              type="text"
              placeholder="Search Employer"
              onChange={handleInputChange}
            />
            <InputField
              label="Job Category"
              name="jobCategory"
              type="select"
              options={jobCatergories}
              placeholder="Job Parent Category"
              onChange={handleInputChange}
            />
            <InputField
              label="Job Sub Category"
              name="jobSubCategory"
              type="select"
              options={["Sub Category 1", "Sub Category 2"]}
              placeholder="Job Sub Category"
              onChange={handleInputChange}
            />
          </div>

          <div className="flex flex-row gap-2">
            <InputField
              label="Minimum Salary"
              name="minSalary"
              type="number"
              placeholder="Amount"
              onChange={handleInputChange}
            />

            <InputField
              label="Maximum Salary"
              name="maxSalary"
              type="number"
              placeholder="Amount"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-row gap-2">
            <InputField
              label="Minimum Experience"
              name="minExperience"
              type="number"
              placeholder="Years"
              onChange={handleInputChange}
            />

            <InputField
              label="Maximum Experience"
              name="maxExperience"
              type="number"
              placeholder="Years"
              onChange={handleInputChange}
            />
          </div>

          <InputField
            label="Job Timing"
            name="jobTiming"
            type="select"
            options={["Full Time", "Part Time"]}
            placeholder="Job Timing"
            onChange={handleInputChange}
          />

          <div className="flex justify-between mt-4">
            <button
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700"
              onClick={onFilterClick}
            >
              Reset
            </button>
            <UIButton onClick={onFilterClick}>Apply</UIButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterJobs;
