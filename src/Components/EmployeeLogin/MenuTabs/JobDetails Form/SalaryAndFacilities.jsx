import React from 'react';
import InputField from "../../../../Common/InputField";


const SalaryAndFacilities = ({ jobDetails, setJobDetails, setStep }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form>
      <h1 className="pb-4">Salary and Facilities</h1>
      <InputField
        label="Minimum Salary"
        name="minSalary"
        value={jobDetails.minSalary}
        onChange={handleChange}
        placeholder="Enter Minimum Salary"
      />
      <InputField
        label="Max Salary"
        name="maxSalary"
        value={jobDetails.maxSalary}
        onChange={handleChange}
        placeholder="Enter Max Salary"
      />
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
      <div className="flex float-right mt-4">
        <button className="btn  mr-2 border-lime-500 bg-white shadow-md text-lime-500" onClick={(e) => { e.preventDefault(); setStep(1); }}>Back</button>
        <button className="btn bg-lime-500 text-white shadow-md" onClick={(e) => { e.preventDefault(); setStep(3); }}>Next</button>
      </div>
    </form>
  );
};

export default SalaryAndFacilities;
