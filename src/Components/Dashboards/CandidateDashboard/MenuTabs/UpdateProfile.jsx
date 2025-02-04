import React from "react";
import UIButton from "../../../../Common/UIButton";
import { Person, Home, Work, Search } from "@mui/icons-material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function UpdateProfile({handleTabChange}) {
  return (
    <div>
      <div className="m-4 flex justify-end">
        <UIButton onClick={()=>handleTabChange("My Profile")}><AccountCircleOutlinedIcon className="mr-2"/>My Profile</UIButton>
      </div>
      <div className="card card-body bg-white m-4">
        <h1 className="card-title flex items-center">
          <Person className="mr-2" /> Basic Details
        </h1>
      </div>
      <div className="card card-body bg-white m-4">
        <h1 className="card-title flex items-center">
          <Home className="mr-2" /> Address
        </h1>
      </div>
      <div className="card card-body bg-white m-4">
        <h1 className="card-title flex items-center">
          <Work className="mr-2" /> Professional Details
        </h1>
      </div>
      <div className="card card-body bg-white m-4">
        <h1 className="card-title flex items-center">
          <Search className="mr-2" /> Job Search Requirement
        </h1>
      </div>
      <div className="card card-body bg-white m-4 flex flex-row justify-center">
        <UIButton>Update Profile</UIButton>
      </div>
    </div>
  );
}

export default UpdateProfile;
