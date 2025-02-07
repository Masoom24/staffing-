import React from "react";
import UIButton from "../../../../../Common/UIButton";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import DomainIcon from "@mui/icons-material/Domain";
import InputField from "../../../../../Common/InputField";

function UpdateProfile({ handleTabChange }) {
  return (
    <div>
      <div className="flex justify-end w-full">
        <UIButton onClick={() => handleTabChange("Profile")}>
          <AccountCircleOutlinedIcon className="mr-2" />
          My Profile
        </UIButton>
      </div>
      <div className="card-body bg-white shadow-md rounded-md mt-4 w-full">
        <h2 className="card-title">
          <DomainIcon /> Company Details
        </h2>

        <form style={{ maxWidth: "none" }}>
          <InputField label={"Company Name"} />
          <InputField label={"Company Description"} />
          <InputField label={"Company Address"} />
          <InputField label={"Company Email Address"} />
          <InputField label={"Company Phone Number"} />
          <InputField label={"Company Office Address"} />
          <InputField label={"GST Number"} />
        </form>
      </div>
      <div className="card-body bg-white shadow-md rounded-md mt-4">
        <h2 className="card-title">
          <RecordVoiceOverIcon /> My Profile
        </h2>
        <form style={{ maxWidth: "none" }}>
          <div className="flex gap-4 sm:flex-col">
            <InputField label={"First Name"} />
            <InputField label={"Middle Name"} />
            <InputField label={"Last Name"} />
          </div>
          <div className="flex flex-col gap-4">
            <InputField label={"Position"} />
            <InputField label={"Phone Number"} />
            <InputField label={"Email Address"} />
            <InputField label={"Country"} />
          </div>
        </form>
      </div>
      <div className="card-body bg-white shadow-md rounded-md mt-4">
        <UIButton>Update Profile</UIButton>
      </div>
    </div>
  );
}

export default UpdateProfile;
