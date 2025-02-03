import React from "react";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import { useNavigate } from "react-router-dom";
import {
  Email,
  Phone,
  Public,
  Work,
  School,
  Search,
} from "@mui/icons-material";
import UIButton from "../../../../Common/UIButton";

function MyProfile() {
  const navigate = useNavigate();
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex flex-row justify-end gap-2">
        <UIButton className>
          <EditIcon className="mr-2"/>
          Update Profile
        </UIButton>
        <UIButton>
          <AutoFixHighIcon className="mr-2"/>
          Generate Resume
        </UIButton>
      </div>
      {/* Card 1: Profile Details */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body flex flex-col md:flex-row items-center gap-4">
          <div className="avatar">
            <div className="w-32 md:w-50 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <h1 className="text-lg font-bold">Ghamesh Rahangdale</h1>
            <div className="flex flex-col md:flex-row gap-2">
              <p className="flex items-center gap-2">
                <Email /> ghamesh@example.com
              </p>
              <p className="flex items-center gap-2">
                <Phone /> +123 456 7890
              </p>
              <p className="flex items-center gap-2">
                <Public /> India
              </p>
            </div>

            <div className="mt-4 mb-4">
              <h1 className="font-bold">Skills</h1>
              <p className="text-left flex">Web Development, React, Node.js</p>
            </div>

            <div className="flex-1 w-56 mt-2">
              <div className="flex justify-between">
                <h1 className="text-sm">Profile Completion</h1>
                <h1>
                  <strong>25%</strong>
                </h1>
              </div>

              <progress
                className="progress progress-success w-full md:w-56 h-1.5"
                value="25"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2: Qualifications */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <School /> Qualifications
            </h2>

            <UIButton
              onClick={() => navigate("/updateQualification")}
              startIcon={<AddIcon />}
            ></UIButton>
          </div>
          <div className="mt-4 text-center text-gray-500">No data found.</div>
        </div>
      </div>

      {/* Card 3: Experience */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Work /> Experience
            </h2>
            <UIButton
              onClick={() => navigate("/updateExperience")}
              startIcon={<AddIcon />}
            ></UIButton>
          </div>
          <div className="mt-4 text-center text-gray-500">No data found.</div>
        </div>
      </div>

      {/* Card 4: Job Search Requirements */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Search /> Job Search Requirements
            </h2>
          </div>
          <div className="mt-4 text-center text-gray-500">No data found.</div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
