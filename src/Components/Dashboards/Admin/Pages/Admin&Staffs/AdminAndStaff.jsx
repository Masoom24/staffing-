import React, { useState } from "react";
import UIButton from "../../../../../Common/UIButton";
import CreateAdminAndStaffs from "./CreateAdminAndStaffs";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const AdminAndStaff = () => {
  const [activeTab, setActiveTab] = useState("Dashboard"); // Default tab

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const data = [
    
    {
      id: 1,
      name: "Ghamesh Rahangdale",
      department: "IT Department",
      phone: "+91-73835-62111",
      email: "ghamesh.sde@example.com",
      created: "Jul 02, 2024 12:55 PM",
      status: true,
      profile: "https://img.freepik.com/premium-photo/casual-young-man-shirt_146377-2992.jpg?uid=R65975106&ga=GA1.1.924684660.1738927689&semt=ais_hybrid",
    },
    
  ];

  return (
    <div>
      {activeTab === "Dashboard" && (
        <div>
          <div className="flex justify-end pt-3 pr-3">
            <UIButton
              text="Add Admin & Staff"
              onClick={() => handleTabChange("Create admin")}
            />
          </div>
          <div className="card-body bg-white rounded-md shadow-md m-4">
            <div>
              <label className="input input-bordered bg-gray-200 flex items-center gap-2">
                <input
                  type="text"
                  className="grow"
                  placeholder="Search Admin & Staff"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>

            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Admin & Staff</th>
                    <th>Phone Number</th>
                    <th>Email Address</th>
                    <th>Created</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar ">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src={item.profile}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold text-sky-500">{item.name}</div>
                            <div className="text-sm opacity-50">
                              {item.department}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{item.phone}</td>
                      <td>{item.email}</td>
                      <td>{item.created}</td>
                      <td>
                        <input
                          type="checkbox"
                          className="toggle toggle-success"
                          defaultChecked={item.status}
                        />
                      </td>
                      <td>
                        <div className="flex space-x-2">
                          <button className="btn btn-ghost border-yellow-500 text-yellow-500">
                            <EditIcon />
                          </button>
                          <button className="btn btn-ghost border-red-500 text-red-500">
                            <DeleteIcon />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === "Create admin" && <CreateAdminAndStaffs />}
    </div>
  );
};

export default AdminAndStaff;
