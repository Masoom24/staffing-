import React, { useState } from "react";
import UIButton from "../../../Common/UIButton";
import CloseIcon from "@mui/icons-material/Close";

function MyExperience() {
  const [form, setForm] = useState(false);
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
    console.log("Form Data Submitted:", formData);
    // Reset the form
    setFormData({
      organization: "",
      designation: "",
      currentCompany: "",
      startYear: "",
      keySkills: "",
      jobProfile: "",
    });
    setForm(false); // Close the modal
  };

  return (
    <div className="flex flex-col m-4">
      <div>
        <UIButton
          text="Add Experience"
          onClick={() => setForm(true)}
          className="btn btn-primary"
        />
      </div>

      {/* Modal */}
      {form && (
        <div className="modal modal-open">
          <div className="modal-box bg-white rounded-lg shadow-lg">
            <div className="flex justify-between">
              <h2 className="text-lg font-bold ">Add Experience</h2>
              <button
                className="btn rounded-full"
                onClick={() => setForm(false)}
              >
                <CloseIcon />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label htmlFor="organization">Organization</label>
                <input
                  type="text"
                  name="organization"
                  placeholder="Ex. The SkyIT"
                  value={formData.organization}
                  onChange={handleInputChange}
                  required
                  className="border border-gray-300 bg-gray-200 p-2 rounded-md focus:outline-none"
                />

                <label htmlFor="designation">Designation</label>
                <input
                  type="text"
                  name="designation"
                  placeholder="Ex. Software Engineer"
                  value={formData.designation}
                  onChange={handleInputChange}
                  required
                  className="border border-gray-300 bg-gray-200 p-2 rounded-md focus:outline-none"
                />

                <label htmlFor="currentCompany">
                  Is this your current company?
                </label>
                <select
                  name="currentCompany"
                  value={formData.currentCompany}
                  onChange={handleInputChange}
                  className="border border-gray-300 bg-gray-200 p-2 rounded-md focus:outline-none"
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>

                <label htmlFor="startYear">Started Working from?</label>
                <input
                  type="text"
                  name="startYear"
                  placeholder="2025"
                  value={formData.startYear}
                  onChange={handleInputChange}
                  required
                  className="border border-gray-300 bg-gray-200 p-2 rounded-md focus:outline-none"
                />

                <label htmlFor="keySkills">Key Skills</label>
                <input
                  type="text"
                  name="keySkills"
                  placeholder="Ex. React, MERN"
                  value={formData.keySkills}
                  onChange={handleInputChange}
                  required
                  className="border border-gray-300 bg-gray-200 p-2 rounded-md focus:outline-none"
                />

                <label htmlFor="jobProfile">Job Profile</label>
                <input
                  type="text"
                  name="jobProfile"
                  placeholder="Your LinkedIn Profile"
                  value={formData.jobProfile}
                  onChange={handleInputChange}
                  required
                  className="border border-gray-300 bg-gray-200 p-2 rounded-md focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary bg-lime-400 border-0 mt-4"
              >
                Add Experience
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyExperience;

