import React from "react";
import UIButton from "../../../../../Common/UIButton";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import DomainIcon from "@mui/icons-material/Domain";
import InputField from "../../../../../Common/InputField";

function UpdateProfile({ handleTabChange }) {
  return (
    <div className="p-6">
      <div className="flex justify-end w-full mb-6">
        <UIButton onClick={() => handleTabChange("Profile")} className="px-6 py-2">
          <AccountCircleOutlinedIcon className="mr-2" />
          My Profile
        </UIButton>
      </div>

      <div className="card-body bg-white shadow-md rounded-md mt-6 p-6 w-full">
        <h2 className="card-title text-xl font-semibold mb-4">
          <DomainIcon className="mr-2" />
          Company Details
        </h2>

        <form style={{ maxWidth: "none" }}>
          <InputField label={"Company Name"} className="mb-4" />
          <InputField label={"Company Description"} className="mb-4" />
          <InputField label={"Company Address"} className="mb-4" />
          <InputField label={"Company Email Address"} className="mb-4" />
          <InputField label={"Company Phone Number"} className="mb-4" />
          <InputField label={"Company Office Address"} className="mb-4" />
          <InputField label={"GST Number"} className="mb-4" />
        </form>
      </div>

      <div className="card-body bg-white shadow-md rounded-md mt-6 p-6">
        <h2 className="card-title text-xl font-semibold mb-4">
          <RecordVoiceOverIcon className="mr-2" />
          My Profile
        </h2>
        <form style={{ maxWidth: "none" }}>
          <div className="flex gap-6 sm:flex-col mb-4">
            <InputField label={"First Name"} className="mb-4" />
            <InputField label={"Middle Name"} className="mb-4" />
            <InputField label={"Last Name"} className="mb-4" />
          </div>
          <div className="flex flex-col gap-6">
            <InputField label={"Position"} className="mb-4" />
            <InputField label={"Phone Number"} className="mb-4" />
            <InputField label={"Email Address"} className="mb-4" />
            <InputField label={"Country"} className="mb-4" />
          </div>
        </form>
      </div>

      <div className="card-body bg-white shadow-md rounded-md mt-6 p-6">
        <UIButton className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md">Update Profile</UIButton>
      </div>
    </div>
  );
}

export default UpdateProfile;
