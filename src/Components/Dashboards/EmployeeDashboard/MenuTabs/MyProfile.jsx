import React from "react";
import UIButton from "../../../../Common/UIButton";
import EditIcon from "@mui/icons-material/Edit";
import { Email, Phone, Home } from "@mui/icons-material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";

function MyProfile({ handleTabChange }) {
  const mockData = {
    companyName: "The Great Spirit pvt. ltd.",
    companyAddress: "123, ABC Street, New York",
    companyPhone: "1234567890",
    country: "India",
    companyEmail: "mock@gmail.com",
    companyWebsite: "https://themock.com",
    companyDescription: "We are a leading construction company in the region.",
  };

  const autherisedPerson = {
    personName: "John Doe",
    position: "CEO",
    personPhone: "9876543210",
    personEmail: "johndoe@gmail.com",
    personAddress: "456, DEF Street, New York",
  };

  return (
    <div className="p-4">
      {/* Update Profile Button */}
      <div className="mb-4 flex justify-end">
        <UIButton onClick={() => handleTabChange("Update Profile")}>
          <EditIcon />
          Update Profile
        </UIButton>
      </div>

      {/* Company Details Card */}
      <div className="card-body bg-white rounded-md shadow-md p-4">
        <h2 className="card-title flex items-center space-x-2 text-lg font-bold">
          <AccountCircleOutlinedIcon />
          <span>Company Details</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center mt-4">
          {/* Company Logo */}
          <div className="avatar flex-shrink-0">
            <div className="ring-primary ring-offset-base-100 w-32 h-32 md:w-40 md:h-40 rounded-full ring ring-offset-2">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Company Logo"
              />
            </div>
          </div>
          {/* Company Information */}
          <div className="mt-4 md:mt-0 md:ml-6 space-y-3 flex-grow">
            <h2 className="card-title text-2xl font-bold">
              {mockData.companyName}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center">
                <Email className="mr-1" />
                <span className="text-md">{mockData.companyEmail}</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-1" />
                <span className="text-md">+91-{mockData.companyPhone}</span>
              </div>
              <div className="flex items-center">
                <Home className="mr-1" />
                <span className="text-md">{mockData.country}</span>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-sm">Company Address</h1>
              <h2 className="text-sm">{mockData.companyAddress}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Authorised Person Card */}
      <div className="card-body bg-white rounded-md shadow-md p-4 mt-4">
        <h2 className="card-title flex items-center space-x-2 text-lg font-bold">
          <RecordVoiceOverIcon />
          <span>Authorised Person</span>
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <div className="text-md">
            <strong>Person Name: </strong>
            <div>{autherisedPerson.personName}</div>
          </div>
          <div className="text-md">
            <strong>Position: </strong>
            <div>{autherisedPerson.position}</div>
          </div>
          <div className="text-md">
            <strong>Phone: </strong>
            <div>{autherisedPerson.personPhone}</div>
          </div>
          <div className="text-md">
            <strong>Email: </strong>
            <div>{autherisedPerson.personEmail}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
