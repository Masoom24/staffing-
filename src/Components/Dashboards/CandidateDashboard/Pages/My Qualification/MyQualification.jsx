import React, { useState } from "react";
import UIButton from "../../../../../Common/UIButton";
import QualificationForm from "./QualificationForm";
import QualificationDetails from "./QualificationDetails";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

function MyQualification() {
  const [showForm, setShowForm] = useState(false);
  const [qualifications, setQualifications] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
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
    if (editIndex !== null) {
      const updatedQualifications = [...qualifications];
      updatedQualifications[editIndex] = formData;
      setQualifications(updatedQualifications);
      setEditIndex(null);
    } else {
      setQualifications([...qualifications, formData]);
    }
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
    setEditIndex(index);
    setShowForm(true);
  };

  return (
    <div className="flex flex-col m-4">
      <div>
        <UIButton
          onClick={() => {
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
            setEditIndex(null);
            setShowForm(true);
          }}
          startIcon={<AddIcon />}
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
            <h3 className="font-bold text-lg">
              {editIndex !== null ? "Edit Qualification" : "Add Qualification"}
            </h3>

            {/* Add Qualification form */}
            <QualificationForm
              formData={formData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              handleDiscard={() => setShowForm(false)}
            />
          </div>
        </div>
      )}

      {/* Qualification Details Component */}
      <div>
        <QualificationDetails
          qualifications={qualifications}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default MyQualification;
