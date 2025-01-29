import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Person as CandidateIcon,
  Work as EmployeeIcon,
} from "@mui/icons-material";
import UIButton from "../Common/UIButton";

function MainLayout() {
  const navigate = useNavigate();
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">The SkyIT Website</a>
      </div>
      <div className="flex">
        {/* Candidate Button */}
        <div className="mr-2">
          <UIButton
            startIcon={<CandidateIcon />}
            style={{ borderRadius: "50px" }}
            onClick={() => navigate("/candidate-login")}
          >
            <h1 className="font-bold hidden sm:block">Candidate</h1>
          </UIButton>
        </div>
        <div>
          <UIButton
            startIcon={<EmployeeIcon />}
            style={{ borderRadius: "50px" }}
            className="m-2"
            onClick={() => navigate("/employee-login")}
          >
            <h1 className="font-bold hidden sm:block">Employee</h1>
          </UIButton>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
