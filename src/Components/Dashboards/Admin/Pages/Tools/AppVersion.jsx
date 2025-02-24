import React, { useState } from "react";
import { TextField, IconButton } from "@mui/material";
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
} from "@mui/icons-material";
import SearchBar from "../../../../../Common/SearchBar";
import UIButton from "../../../../../Common/UIButton";
import InputField from "../../../../../Common/InputField";

const AppVersion = () => {
  const [appVersions, setAppVersions] = useState([]);
  const [formData, setFormData] = useState({
    versionName: "",
    versionCode: "",
    versionDetails: "",
    status: "ACTIVE",
  });
  const [errors, setErrors] = useState({});
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error when user types
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.versionName.trim()) newErrors.versionName = "Version Name is required";
    if (!formData.versionCode.trim()) newErrors.versionCode = "Version Code is required";
    if (!formData.versionDetails.trim()) newErrors.versionDetails = "Version Details are required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return; // Stop submission if validation fails

    const newEntry = {
      ...formData,
      createdDate: new Date().toLocaleDateString(),
      createdTime: new Date().toLocaleTimeString(),
    };

    if (editIndex !== null) {
      const updatedVersions = [...appVersions];
      updatedVersions[editIndex] = newEntry;
      setAppVersions(updatedVersions);
      setEditIndex(null);
    } else {
      setAppVersions([...appVersions, newEntry]);
    }

    setFormData({
      versionName: "",
      versionCode: "",
      versionDetails: "",
      status: "ACTIVE",
    });
    document.getElementById("my_modal_3").close();
  };

  const handleEdit = (index) => {
    setFormData(appVersions[index]);
    setEditIndex(index);
    document.getElementById("my_modal_3").showModal();
  };

  const handleDelete = (index) => {
    setAppVersions(appVersions.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="flex flex-row justify-end m-4">
        <UIButton
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          <AddIcon /> Create New Version
        </UIButton>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              {editIndex !== null ? "Edit" : "Create"} App Version
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-row gap-4">
                <div className="w-full">
                  <InputField
                    label="Version Name"
                    name="versionName"
                    value={formData.versionName}
                    onChange={handleChange}
                    required
                    placeholder="Enter Version Name"
                  />
                  {errors.versionName && <p className="text-red-500 text-xs">{errors.versionName}</p>}
                </div>
                <div className="w-full">
                  <InputField
                    label="Version Code"
                    name="versionCode"
                    value={formData.versionCode}
                    onChange={handleChange}
                    required
                    placeholder="Enter Version Code"
                  />
                  {errors.versionCode && <p className="text-red-500 text-xs">{errors.versionCode}</p>}
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <div className="w-full">
                  <InputField
                    label="Version Details"
                    name="versionDetails"
                    value={formData.versionDetails}
                    onChange={handleChange}
                    required
                    placeholder="Enter Version Details"
                  />
                  {errors.versionDetails && <p className="text-red-500 text-xs">{errors.versionDetails}</p>}
                </div>
              </div>
              <div className="flex flex-row justify-end gap-4 mt-2">
                <UIButton type="submit">
                  {editIndex !== null ? "Update" : "Submit"}
                </UIButton>
              </div>
            </form>
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-1 top-1"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>
          </div>
        </dialog>
      </div>
      <div className="card bg-white shadow-md rounded-md m-4 p-4">
        <SearchBar />
        <div className="overflow-x-auto p-2">
          <table className="table w-full min-w-[600px]">
            <thead>
              <tr className="text-xs sm:text-sm">
                <th className="p-2">VERSION NAME</th>
                <th className="p-2">VERSION CODE</th>
                <th className="p-2">VERSION DETAILS</th>
                <th className="p-2">CREATED DATE</th>
                <th className="p-2">STATUS</th>
                <th className="p-2">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {appVersions.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-4">
                    <p className="text-gray-500">There is nothing to show</p>
                  </td>
                </tr>
              ) : (
                appVersions.map((app, index) => (
                  <tr key={index} className="text-xs sm:text-sm">
                    <td className="p-2">{app.versionName}</td>
                    <td className="p-2">{app.versionCode}</td>
                    <td className="p-2">{app.versionDetails}</td>
                    <td className="p-2">
                      {app.createdDate} <br /> {app.createdTime}
                    </td>
                    <td className="p-2">
                      <span
                        className={`badge badge-xs ${
                          app.status === "ACTIVE"
                            ? "badge-success"
                            : "badge-error"
                        }`}
                      >
                        {app.status}
                      </span>
                    </td>
                    <td className="flex gap-2 p-2">
                      <button
                        className="btn border-yellow-500 text-yellow-500 bg-white p-1 sm:p-2"
                        onClick={() => handleEdit(index)}
                      >
                        <EditIcon fontSize="small" />
                      </button>
                      <button
                        className="btn border-red-500 text-red-500 bg-white p-1 sm:p-2"
                        onClick={() => handleDelete(index)}
                      >
                        <DeleteIcon fontSize="small" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppVersion;
