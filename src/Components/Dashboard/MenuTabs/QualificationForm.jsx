import React from "react";

function QualificationForm({
  formData,
  handleInputChange,
  handleSubmit,
  handleDiscard,
}) {
  const renderFields = () => {
    switch (formData.education) {
      case "12th Passout or below":
        return (
          <>
            <div>
              <label className="label">Board</label>
              <input
                type="text"
                name="board"
                value={formData.board}
                onChange={handleInputChange}
                placeholder="Enter your board name"
                className="input w-full border-0 bg-gray-200"
                required
              />
            </div>
            <div>
              <label className="label">School</label>
              <input
                type="text"
                name="school"
                value={formData.school}
                onChange={handleInputChange}
                placeholder="Enter your school name"
                className="input w-full border-0 bg-gray-200"
                required
              />
            </div>
            <div>
              <label className="label">Percentage</label>
              <input
                type="number"
                name="percentage"
                value={formData.percentage}
                onChange={handleInputChange}
                placeholder="Enter your percentage"
                className="input w-full border-0 bg-gray-200"
                required
              />
            </div>
            <div>
              <label className="label">Passout Year</label>
              <input
                type="number"
                name="passoutYear"
                value={formData.passoutYear}
                onChange={handleInputChange}
                placeholder="Enter your passout year"
                className="input w-full border-0 bg-gray-200"
                required
              />
            </div>
          </>
        );
      case "ITI":
      case "Diploma":
      case "Graduation":
      case "Post Graduation":
        const degreeOptions = {
          ITI: ["Electrical", "Mechanical", "COPA", "Other"],
          Diploma: ["Mechanical", "Electrical", "Civil", "Other"],
          Graduation: ["B.Tech", "B.Sc", "BBA", "Other"],
          "Post Graduation": ["M.Tech", "MBA", "M.Sc", "Other"],
        };

        return (
          <>
            <div>
              <label className="label">Degree</label>
              <select
                name="degree"
                value={formData.degree}
                onChange={handleInputChange}
                className="select w-full border-0 bg-gray-200"
                required
              >
                <option value="" disabled>
                  Select Degree
                </option>
                {degreeOptions[formData.education].map((degree) => (
                  <option key={degree} value={degree}>
                    {degree}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="label">Specialization</label>
              <input
                type="text"
                name="specialization"
                value={formData.specialization}
                onChange={handleInputChange}
                placeholder="Enter your specialization"
                className="input w-full border-0 bg-gray-200"
                required
              />
            </div>
            <div>
              <label className="label">University</label>
              <input
                type="text"
                name="university"
                value={formData.university}
                onChange={handleInputChange}
                placeholder="Enter your university name"
                className="input w-full border-0 bg-gray-200"
                required
              />
            </div>
            <div>
              <label className="label">Course Type</label>
              <select
                name="courseType"
                value={formData.courseType}
                onChange={handleInputChange}
                className="select w-full border-0 bg-gray-200"
                required
              >
                <option value="" disabled>
                  Select Course Type
                </option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Distance Learning">Distance Learning</option>
              </select>
            </div>
            <div>
              <label className="label">Passout Year</label>
              <input
                type="text"
                name="passoutYear"
                value={formData.passoutYear}
                onChange={handleInputChange}
                placeholder="Enter your passout year"
                className="input w-full border-0 bg-gray-200"
                required
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="label">Education</label>
        <select
          name="education"
          value={formData.education}
          onChange={handleInputChange}
          className="select w-full border-0 bg-gray-200"
          required
        >
          <option value="" disabled>
            Select Education
          </option>
          <option value="12th Passout or below">12th Passout or below</option>
          <option value="ITI">ITI</option>
          <option value="Diploma">Diploma</option>
          <option value="Graduation">Graduation</option>
          <option value="Post Graduation">Post Graduation</option>
        </select>
      </div>
      {renderFields()}
      <div className="flex justify-end space-x-2">
        <button type="button" onClick={handleDiscard} className="btn btn-outline border-lime-400 text-lime-400">
          Discard
        </button>
        <button type="submit" className="btn btn-primary bg-lime-400 border-0 text-white">
          Submit
        </button>
      </div>
    </form>
  );
}

export default QualificationForm;
