import React, { useState } from "react";
import UIButton from "../../../../../Common/UIButton";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import DomainIcon from "@mui/icons-material/Domain";
import InputField from "../../../../../Common/InputField";
import CreateCard from "../../../../../Common/CreateCard";

function UpdateProfile({ handleTabChange }) {
  const [formData, setFormData] = useState({
    companyName: "",
    companyDescription: "",
    companyAddress: "",
    companyEmail: "",
    companyPhone: "",
    companyOfficeAddress: "",
    gstNumber: "",
    firstName: "",
    middleName: "",
    lastName: "",
    position: "",
    phoneNumber: "",
    emailAddress: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="m-4">
      <div className="flex justify-end w-full mb-6">
        <UIButton onClick={() => handleTabChange("Profile")} className="px-6 py-2">
          <AccountCircleOutlinedIcon className="mr-2" /> My Profile
        </UIButton>
      </div>

      <div>
      <CreateCard title={<><DomainIcon className="mr-2" /> Company Details</>}>
        <form style={{ maxWidth: "none" }}>
          <InputField label="Company Name" name="companyName" placeholder="Enter Company Name" required onChange={handleChange} />
          <InputField label="Company Description" name="companyDescription" placeholder="Enter Company Description" required onChange={handleChange} />
          <InputField label="Company Address" name="companyAddress" placeholder="Enter Company Address" required onChange={handleChange} />
          <InputField label="Company Email Address" name="companyEmail" placeholder="Enter Company Email Address" required onChange={handleChange} />
          <InputField label="Company Phone Number" name="companyPhone" placeholder="Enter Company Phone Number" required onChange={handleChange} />
          <InputField label="Company Office Address" name="companyOfficeAddress" placeholder="Enter Corporate Office Address" onChange={handleChange} />
          <InputField label="GST Number" name="gstNumber" placeholder="Enter GST Number" onChange={handleChange} />
        </form>
      </CreateCard>
      </div>
      
    <div className="mt-4">
    <CreateCard className="" title={<><RecordVoiceOverIcon className="mr-2" /> My Profile</>}>
        <form style={{ maxWidth: "none" }}>
          <div className="flex sm:flex-col gap-4 sm:gap-0">
            <InputField label="First Name" name="firstName" placeholder="Enter First Name" required onChange={handleChange} />
            <InputField label="Middle Name" name="middleName" placeholder="Enter Middle Name" onChange={handleChange} />
            <InputField label="Last Name" name="lastName" placeholder="Enter Last Name" required onChange={handleChange} />
          </div>
          <div className="flex flex-col">
            <InputField label="Position" name="position" placeholder="Enter Position" required onChange={handleChange} />
            <InputField label="Phone Number" name="phoneNumber" placeholder="Enter Phone Number" required onChange={handleChange} />
            <InputField label="Email Address" name="emailAddress" placeholder="Enter Email Address" required onChange={handleChange} />
            <InputField label="Country" name="country" placeholder="Enter Country" required onChange={handleChange} />
          </div>
        </form>
      </CreateCard>
    </div>
      

      <div className="card-body bg-white shadow-md rounded-md mt-6 p-6">
        <UIButton className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md">
          Update Profile
        </UIButton>
      </div>
    </div>
  );
}

export default UpdateProfile;
