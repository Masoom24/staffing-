import React from "react";
import InputField from "../../../../../Common/InputField";

const SalaryAndFacilities = ({ jobDetails, setJobDetails }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form style={{ maxWidth: "none" }}>
      <h1 className="pb-4">Salary and Facilities</h1>
      
      <InputField
        label="Facilities"
        name="facilities"
        value={jobDetails.facilities}
        onChange={handleChange}
        placeholder="Enter Facilities"
      />
      <InputField
        label="CTC Salary"
        name="ctcSalary"
        value={jobDetails.ctcSalary}
        onChange={handleChange}
        placeholder="Enter CTC Salary"
      />
      <InputField
        label="In Hand Salary"
        name="inHandSalary"
        value={jobDetails.inHandSalary}
        onChange={handleChange}
        placeholder="Enter In Hand Salary"
      />
      <InputField
        label="Salary Deduction Details"
        name="salaryDeductions"
        value={jobDetails.salaryDeductions}
        onChange={handleChange}
        placeholder="Enter Deduction Details"
      />
    </form>
  );
};

export default SalaryAndFacilities;
