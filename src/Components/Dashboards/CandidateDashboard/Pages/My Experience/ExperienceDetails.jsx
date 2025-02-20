import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ExperienceDetails = ({ exp, index, onEdit, onDelete }) => {
  return (
    <div className="card bg-white shadow-md rounded-md relative">
      <div className="card-body">
        <h1 className="font-bold text-lg">{exp.designation} at {exp.organization}</h1>
        <table className="table bg-base-200">
          <tbody>
            {exp.designation && (
              <tr>
                <th>Designation</th>
                <th>:</th>
                <td>{exp.designation}</td>
              </tr>
            )}
            {exp.currentCompany && (
              <tr>
                <th>Current Company</th>
                <th>:</th>
                <td>{exp.currentCompany}</td>
              </tr>
            )}
            {exp.startYear && (
              <tr>
                <th>Start Year</th>
                <th>:</th>
                <td>{exp.startYear}</td>
              </tr>
            )}
            {exp.keySkills && (
              <tr>
                <th>Key Skills</th>
                <th>:</th>
                <td>{exp.keySkills}</td>
              </tr>
            )}
            {exp.jobProfile && (
              <tr>
                <th>Job Profile</th>
                <th>:</th>
                <td>{exp.jobProfile}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="absolute top-0 right-0 mt-2 mr-2">
        <button
          onClick={() => onEdit(index)}
          className="btn btn-sm bg-white border-yellow-500 text-yellow-500 mr-2 p-2"
        >
          <EditIcon />
        </button>
        <button
          onClick={() => onDelete(index)}
          className="btn btn-sm bg-white border-red-500 text-red-500 p-2"
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default ExperienceDetails;
