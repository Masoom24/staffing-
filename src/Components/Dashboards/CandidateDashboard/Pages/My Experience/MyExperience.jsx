import React, { useState } from "react";
import UIButton from "../../../../../Common/UIButton";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InputField from "../../../../../Common/InputField";

function MyExperience() {
  const [form, setForm] = useState(false);
  const [experiences, setExperiences] = useState([]); // Array to store experiences
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
    setExperiences((prevExperiences) => [...prevExperiences, formData]); // Add new experience to array
    setForm(false); // Close the modal
    setFormData({
      organization: "",
      designation: "",
      currentCompany: "",
      startYear: "",
      keySkills: "",
      jobProfile: "",
    }); // Reset form fields
  };

  return (
    <div className="flex flex-col m-4">
      <div>
        <UIButton text="Add Experience" startIcon={<AddIcon/>} onClick={() => setForm(true)} />
      </div>

      {/* Experience Cards */}
      <div>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="card w-full mt-4 bg-base-100 card-lg shadow-sm"
          >
            <div className="card-body">
              <h2 className="text-lg font-bold text-lime-500">
                {exp.organization}
              </h2>
              <h2>
                <strong>Designation:</strong> {exp.designation}
              </h2>
              <h2>
                <strong>Current Company:</strong> {exp.currentCompany}
              </h2>
              <h2>
                <strong>Start Year:</strong> {exp.startYear}
              </h2>
              <h2>
                <strong>Key Skills:</strong> {exp.keySkills}
              </h2>
              <h2>
                <strong>Job Profile:</strong> {exp.jobProfile}
              </h2>
              <div className="flex justify-end card-action">
                <button className="btn border-lime-500 bg-white text-lime-500 mr-2">
                  <EditIcon />
                </button>
                <button className="btn bg-lime-500 text-white">
                  <DeleteIcon className="text-white" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {form && (
        <div className="modal modal-open">
          <div className="modal-box bg-white rounded-lg shadow-lg">
            <div className="flex justify-between">
              <h2 className="text-lg font-bold">Add Experience</h2>
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
                  placeholder="Ex. The SkyIT"
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
                  placeholder="2025"
                  value={formData.startYear}
                  onChange={handleInputChange}
                />
                <InputField
                  label="Key Skills"
                  required
                  name="keySkills"
                  type="text"
                  placeholder="Ex. React, MERN"
                  value={formData.keySkills}
                  onChange={handleInputChange}
                />
                <InputField
                  label="Job Profile"
                  required
                  name="jobProfile"
                  type="text"
                  placeholder="Your LinkedIn Profile"
                  value={formData.jobProfile}
                  onChange={handleInputChange}
                />
              </div>
              <UIButton type="submit">Add Experience</UIButton>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyExperience;
