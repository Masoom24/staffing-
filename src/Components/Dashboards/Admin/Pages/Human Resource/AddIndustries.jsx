import React, { useState } from "react";
import InputField from "../../../../../Common/InputField";
import UIButton from "../../../../../Common/UIButton";
import SearchBar from "../../../../../Common/SearchBar";
import { Edit, Delete, Save, Cancel } from "@mui/icons-material";

function AddIndustries() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [skills, setSkills] = useState("");
  const [icon, setIcon] = useState(null);
  const [editId, setEditId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5; // Number of records per page

  // Handle input validation
  const isValidCategory = category.trim().length >= 3;
  const isValidSkills = skills.trim().length >= 3;
  const isValidIcon = icon !== null;
  const isValidForm = isValidCategory && isValidSkills && isValidIcon;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidForm) {
      return alert("Please fill all fields correctly!");
    }

    // Check for duplicate category name
    if (
      categories.some(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      )
    ) {
      return alert("Category already exists!");
    }

    const newCategory = {
      id: editId || categories.length + 1,
      icon: editId ? icon : URL.createObjectURL(icon),
      category,
      skills,
    };

    if (editId) {
      // Edit existing category
      setCategories(
        categories.map((item) => (item.id === editId ? newCategory : item))
      );
      setEditId(null);
    } else {
      // Add new category
      setCategories([...categories, newCategory]);
    }

    setCategory("");
    setSkills("");
    setIcon(null);
  };

  const handleEdit = (id) => {
    const editCategory = categories.find((item) => item.id === id);
    setCategory(editCategory.category);
    setSkills(editCategory.skills);
    setIcon(editCategory.icon);
    setEditId(id);
  };

  const handleDelete = (id) => {
    setCategories(categories.filter((item) => item.id !== id));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Pagination logic
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = categories.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const totalPages = Math.ceil(categories.length / recordsPerPage);

  return (
    <div className="flex flex-col lg:flex-row m-4 gap-4">
      {/* Form Section */}
      <div className="card bg-white w-full lg:w-1/2 shadow-md rounded-md p-4">
        <h1 className="card-title mb-4">
          {editId ? "Edit Job Category" : "Create Job Category"}
        </h1>
        <form className="form-control" onSubmit={handleSubmit}>
          <InputField
            label="Category"
            placeholder="Enter category name"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
          <div className="form-control mb-4">
            <label className="block text-sm font-medium mb-1">
              Upload Icon
            </label>
            <input
              type="file"
              className="file-input file-input-bordered w-full"
              accept="image/*"
              onChange={(e) => setIcon(e.target.files[0])}
              required={!editId} // Only required if adding a new category
            />
          </div>
          <InputField
            label="Skills"
            placeholder="Enter relevant skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            required
          />
          <div className="flex justify-end mt-4">
            <UIButton type="submit" disabled={!isValidForm}>
              {editId ? "Update" : "Submit"}
            </UIButton>
          </div>
        </form>
      </div>

      {/* Table Section */}
      <div className="card bg-white w-full shadow-md rounded-md p-4">
        <div className="flex justify-between mb-4 flex-wrap">
          <SearchBar />
        </div>
        <div className="overflow-x-auto">
          {categories.length === 0 ? (
            <p className="text-center text-gray-500">
              No Job category is created yet. Use this form to create one.
            </p>
          ) : (
            <table className="table w-full">
              <thead>
                <tr>
                  <th>#</th>
                  <th>ICON</th>
                  <th>CATEGORY</th>
                  <th>SKILLS</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {currentRecords.map((item, index) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td>{indexOfFirstRecord + index + 1}</td>
                    <td>
                      <img src={item.icon} alt="icon" className="w-8 h-8" />
                    </td>
                    <td>{item.category}</td>
                    <td>{item.skills}</td>
                    <td>
                      <div className="flex gap-2">
                        {editId === item.id ? (
                          <>
                            <button
                              className="btn p-2 border-green-500 text-green-500 bg-white"
                              onClick={() => setEditId(null)}
                            >
                              <Cancel />
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              className="btn p-2 border-yellow-500 text-yellow-500 bg-white"
                              onClick={() => handleEdit(item.id)}
                            >
                              <Edit />
                            </button>
                            <button
                              className="btn bg-white text-red-500 border-red-500 p-2"
                              onClick={() => handleDelete(item.id)}
                            >
                              <Delete />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Pagination */}
        {categories.length < recordsPerPage && (
          <div className="flex justify-between items-center mt-4">
            <span>
              Showing {indexOfFirstRecord + 1}-
              {Math.min(indexOfLastRecord, categories.length)} of{" "}
              {categories.length} records
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="btn btn-ghost"
              >
                Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`btn ${
                      pageNumber === currentPage
                        ? "bg-lime-400 text-white"
                        : "btn-outline"
                    } mx-1`}
                  >
                    {pageNumber}
                  </button>
                )
              )}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="btn btn-ghost"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddIndustries;
