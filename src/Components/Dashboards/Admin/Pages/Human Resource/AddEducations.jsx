import React, { useState } from "react";
import SearchBar from "../../../../../Common/SearchBar";
import InputField from "../../../../../Common/InputField";
import UIButton from "../../../../../Common/UIButton";
import { Radio, RadioGroup, FormControlLabel } from "@mui/material";
import { School, AccountBalance, Edit, Delete } from "@mui/icons-material";

function AddEducations() {
  const [educationType, setEducationType] = useState("School");
  const [educationName, setEducationName] = useState("");
  const [shortName, setShortName] = useState("");
  const [degree, setDegree] = useState("");
  const [educations, setEducations] = useState([]);
  const [editing, setEditing] = useState(null);
  const [error, setError] = useState("");

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!educationName || !shortName || !degree) {
      setError("All fields are required.");
      return;
    }

    if (/\d/.test(educationName) || /\d/.test(degree)) {
      setError("Education name and degree cannot contain numbers.");
      return;
    }

    setError("");

    if (editing) {
      setEducations(
        educations.map((edu) =>
          edu.id === editing
            ? { ...edu, short: shortName, name: educationName, type: educationType, degree: degree }
            : edu
        )
      );
      setEditing(null);
    } else {
      const newEducation = {
        id: educations.length + 1,
        short: shortName,
        name: educationName,
        type: educationType,
        degree: degree,
      };
      setEducations([...educations, newEducation]);
    }

    setEducationName("");
    setShortName("");
    setDegree("");
  };

  const handleDelete = (id) => {
    setEducations(educations.filter((edu) => edu.id !== id));
  };

  const handleEdit = (id) => {
    const eduToEdit = educations.find((edu) => edu.id === id);
    setEducationName(eduToEdit.name);
    setShortName(eduToEdit.short);
    setDegree(eduToEdit.degree);
    setEducationType(eduToEdit.type);
    setEditing(id);
  };

  // Pagination Logic
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = educations.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(educations.length / recordsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col md:flex-row m-4 gap-4">
      <div className="card bg-white w-full md:w-1/2 shadow-md rounded-md p-4">
        <div className="card-body">
          <h1 className="card-title font-bold text-center md:text-left">
            {editing ? "Edit Education" : "Create Education"}
          </h1>
          <form className="form-control" onSubmit={handleSubmit}>
            <InputField
              label="Education"
              placeholder="Education name"
              type="text"
              required
              value={educationName}
              onChange={(e) => setEducationName(e.target.value)}
            />
            <InputField
              label="Short"
              placeholder="Short"
              required
              value={shortName}
              type="number"
              onChange={(e) => setShortName(e.target.value)}
            />
            <label className="block text-sm font-medium mb-1">Type</label>
            <RadioGroup
              row
              value={educationType}
              onChange={(e) => setEducationType(e.target.value)}
            >
              <FormControlLabel
                value="School"
                control={<Radio icon={<School />} checkedIcon={<School />} />}
                label="School"
              />
              <FormControlLabel
                value="University"
                control={<Radio icon={<AccountBalance />} checkedIcon={<AccountBalance />} />}
                label="University"
              />
            </RadioGroup>
            <div className="mt-2">
              <InputField
                label="Degree"
                placeholder="Add Degree"
                type="text"
                required
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
              />
            </div>
            {error && <h2 className="text-red-500 text-center text-sm mt-2">{error}</h2>}
            <div className="mt-4 flex justify-center md:justify-end">
              <UIButton type="submit">{editing ? "Update" : "Submit"}</UIButton>
            </div>
          </form>
        </div>
      </div>

      <div className="card bg-white w-full shadow-md rounded-md">
        <div className="card-body">
          <SearchBar />
          {educations.length === 0 ? (
            <h1 className="text-left text-gray-500 mt-6">No education is created yet. Use the form on the left side to create new education.</h1>
          ) : (
            <>
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>SORT</th>
                    <th>EDUCATION</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {currentRecords.map((edu) => (
                    <tr key={edu.id}>
                      <td className="font-bold">{edu.short}</td>
                      <td className="font-bold">
                        <span className="badge badge-xs badge-success">{edu.type}</span> {edu.name}
                      </td>
                      <td>
                        <button
                          className="btn border-yellow-500 text-yellow-500 bg-white btn-sm"
                          onClick={() => handleEdit(edu.id)}
                        >
                          <Edit />
                        </button>
                        <button
                          className="btn border-red-500 bg-white text-red-500 btn-sm ml-2"
                          onClick={() => handleDelete(edu.id)}
                        >
                          <Delete />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-between items-center mt-4">
                <span>
                  Showing {indexOfFirstRecord + 1}-{indexOfLastRecord} of {educations.length} records
                </span>
                <div>
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="btn btn-ghost "
                  >
                    Prev
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                    <button
                      key={pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                      className={`btn ${pageNumber === currentPage ? "bg-lime-400 text-white" : "btn-outline"} mx-1`}
                    >
                      {pageNumber}
                    </button>
                  ))}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="btn btn-ghost"
                  >
                    Next
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddEducations;
