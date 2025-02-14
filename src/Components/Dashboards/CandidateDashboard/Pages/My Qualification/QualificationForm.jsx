import React from "react";
import InputField from "../../../../../Common/InputField";
import UIButton from "../../../../../Common/UIButton";

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
            <InputField
              label="Board"
              name="board"
              value={formData.board}
              onChange={handleInputChange}
              placeholder="Enter your board name"
              required
            />
            <InputField
              label="School"
              name="school"
              value={formData.school}
              onChange={handleInputChange}
              placeholder="Enter your school name"
              required
            />
            <InputField
              label="Percentage"
              name="percentage"
              type="number"
              value={formData.percentage}
              onChange={handleInputChange}
              placeholder="Enter your percentage"
              required
            />
            <InputField
              label="Passout Year"
              name="passoutYear"
              type="number"
              value={formData.passoutYear}
              onChange={handleInputChange}
              placeholder="Enter your passout year"
              required
            />
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
            <InputField
              label="Degree"
              name="degree"
              type="select"
              value={formData.degree}
              onChange={handleInputChange}
              options={degreeOptions[formData.education]}
              required
            />
            <InputField
              label="Specialization"
              name="specialization"
              value={formData.specialization}
              onChange={handleInputChange}
              placeholder="Enter your specialization"
              required
            />
            <InputField
              label="University"
              name="university"
              value={formData.university}
              onChange={handleInputChange}
              placeholder="Enter your university name"
              required
            />
            <InputField
              label="Course Type"
              name="courseType"
              type="select"
              value={formData.courseType}
              onChange={handleInputChange}
              options={["Full Time", "Part Time", "Distance Learning"]}
              required
            />
            <InputField
              label="Passout Year"
              name="passoutYear"
              type="number"
              value={formData.passoutYear}
              onChange={handleInputChange}
              placeholder="Enter your passout year"
              required
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <InputField
        label="Education"
        name="education"
        type="select"
        value={formData.education}
        onChange={handleInputChange}
        options={[
          "12th Passout or below",
          "ITI",
          "Diploma",
          "Graduation",
          "Post Graduation",
        ]}
        required
      />
      {renderFields()}
      <div className="flex justify-end space-x-2">
        <UIButton
          type="button"
          onClick={handleDiscard}
        >
          Discard
        </UIButton>
        <UIButton type="submit">Submit</UIButton>
      </div>
    </form>
  );
}

export default QualificationForm;
