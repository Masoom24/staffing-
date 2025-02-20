import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import UIButton from "../../../../../Common/UIButton";
import InputField from "../../../../../Common/InputField";
import ExperienceDetails from "./ExperienceDetails"; // Importing new component

const MyExperience = () => {
  const [form, setForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [experiences, setExperiences] = useState([]);
  const [formData, setFormData] = useState({
    organization: "",
    designation: "",
    currentCompany: "",
    startYear: "",
    keySkills: "",
    jobProfile: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedExperiences = [...experiences];
      updatedExperiences[editIndex] = formData;
      setExperiences(updatedExperiences);
      setEditIndex(null);
    } else {
      setExperiences([...experiences, formData]);
    }
    setForm(false);
    setFormData({
      organization: "",
      designation: "",
      currentCompany: "",
      startYear: "",
      keySkills: "",
      jobProfile: "",
    });
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData(experiences[index]);
    setForm(true);
  };

  const handleDelete = (index) => {
    setExperiences(experiences.filter((_, i) => i !== index));
  };

  return (
    <div className="m-4 space-y-4 w-1/2 text-left flex-row">
      <UIButton
        text="Add Experience"
        onClick={() => setForm(true)}
        startIcon={<AddIcon />}
      />

      {experiences.map((exp, index) => (
        <ExperienceDetails
          key={index}
          exp={exp}
          index={index}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}

      {form && (
        <div className="modal modal-open">
          <div className="modal-box bg-white rounded-lg shadow-lg">
            <div className="flex justify-between">
              <h2 className="text-lg font-bold">
                {editIndex !== null ? "Edit Experience" : "Add Experience"}
              </h2>
              <button
                className="btn rounded-full"
                onClick={() => setForm(false)}
              >
                <CloseIcon />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <InputField
                  label="Organization"
                  required
                  name="organization"
                  type="text"
                  placeholder="Ex. Google"
                  value={formData.organization}
                  onChange={handleInputChange}
                />
                <InputField
                  label="Designation"
                  required
                  name="designation"
                  type="text"
                  placeholder="Ex. Software Engineer"
                  value={formData.designation}
                  onChange={handleInputChange}
                />
                <InputField
                  label="Is this your current company?"
                  name="currentCompany"
                  type="select"
                  options={["Yes", "No"]}
                  value={formData.currentCompany}
                  onChange={handleInputChange}
                />
                <InputField
                  label="Started Working from?"
                  required
                  name="startYear"
                  type="text"
                  placeholder="Ex. 2020"
                  value={formData.startYear}
                  onChange={handleInputChange}
                />
                <InputField
                  label="Key Skills"
                  required
                  name="keySkills"
                  type="text"
                  placeholder="Ex. React, Node.js"
                  value={formData.keySkills}
                  onChange={handleInputChange}
                />
                <InputField
                  label="Job Profile"
                  required
                  name="jobProfile"
                  type="text"
                  placeholder="Ex. Your LinkedIn Profile"
                  value={formData.jobProfile}
                  onChange={handleInputChange}
                />
              </div>
              <UIButton type="submit">
                {editIndex !== null ? "Update Experience" : "Add Experience"}
              </UIButton>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyExperience;
