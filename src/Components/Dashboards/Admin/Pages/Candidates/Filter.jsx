import React from "react";
import UIButton from "../../../../../Common/UIButton";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InputField from "../../../../../Common/InputField";

const Filter = ({ showFilterDropdown, onFilterClick }) => {
  const handleInputChange = (e) => {
    // Add logic to handle input value changes
    console.log(`${e.target.name}: ${e.target.value}`);
  };

  const jobCatergories = [
    "Information Technology",
    "Accounting",
    "Agriculture",
    "Banking",
    "Busisness Development",
    "Human Resources",
    "Marketing",
    "Sales",
  ];

  return (
    <div className="relative">
      <UIButton onClick={onFilterClick}>
        <FilterAltIcon className="mr-2" />
        Filter
        <ExpandMoreIcon />
      </UIButton>

      {showFilterDropdown && (
        <div
          className="absolute top-10 right-0 z-10 w-64 bg-white rounded-md shadow-lg ring-1 ring-black/5 focus:outline-none p-4"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <InputField
              label="Category"
              name="category"
              type="select"
              options={jobCatergories}
              placeholder="Select Category"
              onChange={handleInputChange}
            />

            <InputField
              label="Education"
              name="education"
              type="select"
              options={[
                "High School",
                "Bachelor's Degree",
                "Any Graduate",
                "ITI",
                "Diploma",
                "Master's Degree",
              ]}
              placeholder="Select Education"
              onChange={handleInputChange}
            />

            <InputField
              label="Country"
              name="country"
              type="text"
              placeholder="Enter Country"
              onChange={handleInputChange}
            />

            <InputField
              label="State"
              name="state"
              type="text"
              placeholder="Enter State"
              onChange={handleInputChange}
            />

            <InputField
              label="City"
              name="city"
              type="text"
              placeholder="Enter City"
              onChange={handleInputChange}
            />

            <div className="flex justify-end mt-4">
              <button className="btn btn-outline mr-2" onClick={onFilterClick}>
                Reset
              </button>
              <UIButton onClick={onFilterClick}>Apply</UIButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
