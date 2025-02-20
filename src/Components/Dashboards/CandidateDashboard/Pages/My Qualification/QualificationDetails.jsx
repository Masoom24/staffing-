import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const QualificationDetails = ({ qualifications, handleEdit, handleDelete }) => {
  return (
    <div className="mt-4 space-y-4 w-1/3 text-left flex-row">
      {qualifications.map((qualification, index) => (
        <div key={index} className="card bg-white shadow-md rounded-md relative">
          <div className="card-body">
            <h1 className="font-bold text-lg">{qualification.education}</h1>
            <table className="table bg-base-200">
              <tbody>
                {qualification.board && (
                  <tr>
                    <th>Board</th>
                    <th>:</th>
                    <td>{qualification.board}</td>
                  </tr>
                )}
                {qualification.school && (
                  <tr>
                    <th>School</th>
                    <th>:</th>
                    <td>{qualification.school}</td>
                  </tr>
                )}
                {qualification.percentage && (
                  <tr>
                    <th>Percentage</th>
                    <th>:</th>
                    <td>{qualification.percentage}</td>
                  </tr>
                )}
                {qualification.degree && (
                  <tr>
                    <th>Degree</th>
                    <th>:</th>
                    <td>{qualification.degree}</td>
                  </tr>
                )}
                {qualification.specialization && (
                  <tr>
                    <th>Specialization</th>
                    <th>:</th>
                    <td>{qualification.specialization}</td>
                  </tr>
                )}
                {qualification.university && (
                  <tr>
                    <th>University</th>
                    <th>:</th>
                    <td>{qualification.university}</td>
                  </tr>
                )}
                {qualification.courseType && (
                  <tr>
                    <th>Course Type</th>
                    <th>:</th>
                    <td>{qualification.courseType}</td>
                  </tr>
                )}
                {qualification.passoutYear && (
                  <tr>
                    <th>Passout</th>
                    <th>:</th>
                    <td>{qualification.passoutYear}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="absolute top-0 right-0 mt-2 mr-2">
            <button
              onClick={() => handleEdit(index)}
              className="btn btn-sm bg-white border-yellow-500 text-yellow-500 mr-2 p-2"
            >
              <EditIcon />
            </button>
            <button
              onClick={() => handleDelete(index)}
              className="btn btn-sm bg-white border-red-500 text-red-500 p-2"
            >
              <DeleteIcon />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QualificationDetails;
