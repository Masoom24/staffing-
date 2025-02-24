import React from "react";
import InputField from "../../../../../../Common/InputField";
import TitledCard from "../../../../../../Common/Card/TitledCard";

const SalaryAndFacilities = ({ jobDetails, setJobDetails }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <TitledCard title="Salary and Facilities">
      <form style={{ maxWidth: "none" }}>
        <InputField
          label="Facilities"
          name="facilities"
          value={jobDetails.facilities}
          onChange={handleChange}
          placeholder="Enter Facilities"
        />
        <div className="flex flex-row gap-4">
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
        </div>
        <InputField
          label="Salary Deduction Details"
          name="salaryDeductions"
          value={jobDetails.salaryDeductions}
          onChange={handleChange}
          placeholder="Enter Deduction Details"
        />
      </form>
    </TitledCard>
  );
};

export default SalaryAndFacilities;
