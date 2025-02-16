import React from "react";
import InputField from "../../../../../../Common/InputField";

const JobLocation = ({ jobDetails, setJobDetails }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form style={{ maxWidth: "none" }}>
      <h1 className="pb-4">Job Location</h1>
      <div className="flex flex-row gap-4 w-full">
        <div className="flex flex-col w-full">
          <InputField
            label="Address Line 1"
            name="addressLine1"
            value={jobDetails.addressLine1}
            onChange={handleChange}
            placeholder="Enter Address Line 1"
            required
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
        </div>
        <div className="flex flex-col w-full">
        <InputField
          label="Country"
          name="country"
          value={jobDetails.country}
          onChange={handleChange}
          placeholder="Enter Country"
          required
        />
        <InputField
          label="State"
          name="state"
          value={jobDetails.state}
          onChange={handleChange}
          placeholder="Enter State"
          required
        />
        <InputField
          label="City"
          name="city"
          value={jobDetails.city}
          onChange={handleChange}
          placeholder="Enter City"
          required
        />
      </div>
      </div>
    </form>
  );
};

export default JobLocation;
