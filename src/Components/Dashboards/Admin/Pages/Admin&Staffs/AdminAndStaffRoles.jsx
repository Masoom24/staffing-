import React, { useState } from "react";
import UIButton from "../../../../../Common/UIButton";
import InputField from "../../../../../Common/InputField";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const AdminAndStaffRoles = () => {
  const permissions = [
    { name: "Admin & Staffs" },
    { name: "Admin & Staff Roles" },
    { name: "Candidates" },
    { name: "Employers" },
    { name: "Job Posts" },
    { name: "Interviews" },
    { name: "HR - Education" },
    { name: "HR - Job Categories" },
    { name: "HR - Job Timings" },
    { name: "Pages - SEO Details" },
    { name: "Pages - Contact Info" },
    { name: "Pages - Terms & Policies" },
    { name: "Tools - Settings" },
    { name: "Tools - App Versions" },
  ];

  const [roleName, setRoleName] = useState("");
  const [selectedPermissions, setSelectedPermissions] = useState({});
  const [roles, setRoles] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // States for modals
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlertModal, setShowAlertModal] = useState(false);

  const [roleToDelete, setRoleToDelete] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  // Handle permission checkbox changes
  const handlePermissionChange = (permissionName, type) => {
    setSelectedPermissions((prev) => ({
      ...prev,
      [permissionName]: {
        ...prev[permissionName],
        [type]: !prev[permissionName]?.[type],
      },
    }));
  };

  // Handle role creation or update
  const handleCreateRole = () => {
    if (!roleName.trim()) {
      setAlertMessage("Role name is required!");
      setShowAlertModal(true);
      return;
    }

    const permissionsList = Object.entries(selectedPermissions).reduce(
      (acc, [key, value]) => {
        if (value.isRead || value.isWrite) {
          acc.push({ name: key, ...value });
        }
        return acc;
      },
      []
    );

    if (permissionsList.length === 0) {
      setAlertMessage("Please select at least one permission.");
      setShowAlertModal(true);
      return;
    }

    if (isEditing) {
      // Update the role
      const updatedRoles = [...roles];
      updatedRoles[editIndex] = { roleName, permissions: permissionsList };
      setRoles(updatedRoles);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      // Create a new role
      setRoles([...roles, { roleName, permissions: permissionsList }]);
    }

    setRoleName("");
    setSelectedPermissions({});
  };

  // Handle role editing
  const handleEdit = (role, index) => {
    setRoleName(role.roleName);
    setSelectedPermissions(
      role.permissions.reduce((acc, perm) => {
        acc[perm.name] = { isRead: perm.isRead, isWrite: perm.isWrite };
        return acc;
      }, {})
    );
    setIsEditing(true);
    setEditIndex(index);
  };

  // Handle role deletion (opens confirm modal)
  const handleDelete = (roleToDelete) => {
    setRoleToDelete(roleToDelete);
    setShowConfirmModal(true);
  };

  // Confirm delete action
  const confirmDelete = () => {
    setRoles(roles.filter((role) => role !== roleToDelete));
    setRoleToDelete(null);
    setShowConfirmModal(false);
  };

  return (
    <div className="flex flex-col sm:flex-row md-flex-row">
      <div className="card-body bg-white rounded-md shadow-md m-0 p-0 sm:p-8 mt-4 sm:m-4 md:m-4">
        <h2 className="text-lg font-bold text-gray-900 p-4 pb-0 sm:p-8 sm:pb-0">{isEditing ? "Edit Role" : "Create Role"}</h2>
        <form className="form-control max-w-full" style={{ width: "100%", maxWidth: "none" }}>
          <InputField
            label="Role Name"
            type="text"
            placeholder="Enter role name"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
          />

          {/* Permissions Table */}
          <div className="mt-4">
            <h3 className="text-md font-semibold text-gray-800 mb-2">Permissions</h3>
            <div className="overflow-x-auto">
              <table className="table w-full ">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="text-left">Permission Name</th>
                    <th className="text-center">Is Read</th>
                    <th className="text-center">Is Write</th>
                  </tr>
                </thead>
                <tbody>
                  {permissions.map((permission, index) => (
                    <tr key={index}>
                      <td className="text-left">{permission.name}</td>
                      <td className="text-center">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-success"
                          checked={selectedPermissions[permission.name]?.isRead || false}
                          onChange={() => handlePermissionChange(permission.name, "isRead")}
                        />
                      </td>
                      <td className="text-center">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-success"
                          checked={selectedPermissions[permission.name]?.isWrite || false}
                          onChange={() => handlePermissionChange(permission.name, "isWrite")}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <UIButton text={isEditing ? "Update Role" : "Create Role"} onClick={handleCreateRole} />
          </div>
        </form>
      </div>

      <div className="card-body bg-white rounded-md shadow-md m-0 sm:m-4 md:m-4 mt-4 mb-4">
        <h2 className="text-lg font-bold text-gray-900">Admin & Staff Roles</h2>
        {roles.length === 0 ? (
          <p className="text-gray-600 mt-2">No roles created yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="text-left">Role</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {roles.map((role, index) => (
                  <tr key={index}>
                    <td className="text-gray-800">{role.roleName}</td>
                    <td className="flex justify-center gap-2">
                      <button
                        className="btn btn-ghost border-yellow-500 text-yellow-500"
                        onClick={() => handleEdit(role, index)}
                      >
                        <EditIcon />
                      </button>
                      <button
                        className="btn btn-ghost border-red-500 text-red-500"
                        onClick={() => handleDelete(role)}
                      >
                        <DeleteIcon />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Alert Modal */}
      {showAlertModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Alert</h3>
            <p className="py-4">{alertMessage}</p>
            <div className="modal-action">
              <button className="btn" onClick={() => setShowAlertModal(false)}>
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Delete Modal */}
      {showConfirmModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Confirm Delete</h3>
            <p className="py-4">
              Are you sure you want to delete the role "{roleToDelete?.roleName}"?
            </p>
            <div className="modal-action">
              <button className="btn btn-error" onClick={confirmDelete}>
                Yes, Delete
              </button>
              <button className="btn" onClick={() => setShowConfirmModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminAndStaffRoles;
