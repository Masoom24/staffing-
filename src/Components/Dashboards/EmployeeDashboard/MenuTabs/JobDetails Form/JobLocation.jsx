import React from 'react';
import InputField from "../../../../../Common/InputField";


const JobLocation = ({ jobDetails, setJobDetails, setStep}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form>
      <h1 className="pb-4">Job Location</h1>
      <InputField
        label="Address Line 1"
        name="addressLine1"
        value={jobDetails.addressLine1}
        onChange={handleChange}
        placeholder="Enter Address Line 1"
      />
      <InputField
        label="Address Line 2"
        name="addressLine2"
        value={jobDetails.addressLine2}
        onChange={handleChange}
        placeholder="Enter Address Line 2"
      />
      <InputField
        label="Area Landmark"
        name="areaLandmark"
        value={jobDetails.areaLandmark}
        onChange={handleChange}
        placeholder="Enter Area Landmark"
      />
      <InputField
        label="Country"
        name="country"
        value={jobDetails.country}
        onChange={handleChange}
        placeholder="Enter Country"
      />
      <InputField
        label="State"
        name="state"
        value={jobDetails.state}
        onChange={handleChange}
        placeholder="Enter State"
      />
      <InputField
        label="City"
        name="city"
        value={jobDetails.city}
        onChange={handleChange}
        placeholder="Enter City"
      />
      <div className="flex float-right mt-4">
        <button className="btn  mr-2 border-lime-500 bg-white shadow-md text-lime-500" onClick={(e) => { e.preventDefault(); setStep(2); }}>Back</button>
        <button className="btn bg-lime-500 text-white shadow-md">Create</button>
      </div>
    </form>
  );
};

export default JobLocation;
