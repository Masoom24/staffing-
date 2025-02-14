import React, { useState } from "react";
import UIButton from "../../../../../Common/UIButton";
import QualificationForm from "./QualificationForm";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

function MyQualification() {
  const [showForm, setShowForm] = useState(false);
  const [qualifications, setQualifications] = useState([]);
  const [formData, setFormData] = useState({
    education: "",
    degree: "",
    specialization: "",
    university: "",
    courseType: "",
    passoutYear: "",
    board: "",
    school: "",
    percentage: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQualifications([...qualifications, formData]);
    setFormData({
      education: "",
      degree: "",
      specialization: "",
      university: "",
      courseType: "",
      passoutYear: "",
      board: "",
      school: "",
      percentage: "",
    });
    setShowForm(false);
  };

  const handleDelete = (index) => {
    setQualifications(qualifications.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setFormData(qualifications[index]);
    setShowForm(true);
    setQualifications(qualifications.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col m-4">
      <div>
        <UIButton
          onClick={() => setShowForm(true)}
          startIcon={<AddIcon/>}
          text="Add Qualification"
          className="btn btn-primary"
        />
      </div>

      {showForm && (
        <div className="modal modal-open">
          <div className="modal-box relative">
            <button
              onClick={() => setShowForm(false)}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              <CloseIcon />
            </button>
            <h3 className="font-bold text-lg">Add Qualification</h3>
            <QualificationForm
              formData={formData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              handleDiscard={() => setShowForm(false)}
            />
          </div>
        </div>
      )}

      <div className="mt-4 space-y-4 w-full text-left">
        {qualifications.map((qualification, index) => (
          <div key={index} className="card bg-base-100 shadow-md p-4">
            <h1 className="font-bold text-lg">{qualification.education}</h1>
            {qualification.board && <h1>Board: {qualification.board}</h1>}
            {qualification.school && <h1>School: {qualification.school}</h1>}
            {qualification.percentage && (
              <h1>Percentage: {qualification.percentage}</h1>
            )}
            {qualification.degree && <h1>Degree: {qualification.degree}</h1>}
            {qualification.specialization && (
              <h1>Specialization: {qualification.specialization}</h1>
            )}
            {qualification.university && (
              <h1>University: {qualification.university}</h1>
            )}
            {qualification.courseType && (
              <h1>Course Type: {qualification.courseType}</h1>
            )}
            {qualification.passoutYear && (
              <h1>Passout Year: {qualification.passoutYear}</h1>
            )}
            <div className="flex justify-end space-x-2 mt-2">
              <button onClick={() => handleEdit(index)} className="btn btn-sm">
                <EditIcon />
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="btn btn-sm"
              >
                <DeleteIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyQualification;
