import React, { useState, useEffect } from "react";
import UIButton from "../../../../../Common/UIButton";
import InputField from "../../../../../Common/InputField";
import { Person, Home, Work, Search } from "@mui/icons-material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

function UpdateProfile({ handleTabChange }) {
  const [countries, setCountries] = useState([]);
  const [profileImage, setProfileImage] = useState("https://img.freepik.com/premium-vector/cloud-upload-icon-green-background-white-arrow-vector-symbol_797523-4164.jpg?uid=R65975106&ga=GA1.1.924684660.1738927689&semt=ais_hybrid");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countryNames = data.map((country) => country.name.common).sort();
        setCountries(countryNames);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4 flex justify-end">
        <UIButton onClick={() => handleTabChange("My Profile")}>
          <AccountCircleOutlinedIcon className="mr-2" />
          My Profile
        </UIButton>
      </div>
      <div className="card card-body bg-white mb-4 p-4">
        <h1 className="card-title flex items-center text-lg font-semibold mb-4">
          <Person className="mr-2" /> Basic Details
        </h1>
        <div className="flex flex-col md:flex-row md:gap-6">
          <div>
            <div className="flex items-center justify-center">
              <div className="avatar">
                <div className="w-30 h-30 sm:w-30 sm:h-30 rounded-md bg-gray-200 overflow-hidden cursor-pointer">
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt="Profile Preview"
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      No Image
                    </div>
                  )}
                </div>
              </div>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                id="profileImageInput"
                onChange={handleFileChange}
              />
            </div>
            <label
              htmlFor="profileImageInput"
              className="font-bold text-center block mt-2 cursor-pointer"
            >
              Upload Profile Image
            </label>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <InputField
                label="First Name"
                placeholder="First Name"
                required
              />
              <InputField
                label="Middle Name"
                placeholder="Middle Name"
                required
              />
              <InputField label="Last Name" placeholder="Last Name" required />
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <InputField
                type="select"
                label="Country"
                options={countries}
                required
              />
              <InputField
                label="Phone Number"
                placeholder="Phone Number"
                required
              />
              <InputField label="Phone Number 2" placeholder="Phone Number 2" />
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <InputField label="Email" placeholder="Email" required />
              <InputField
                label="WhatsApp Number"
                placeholder="WhatsApp Number"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <InputField type="date" label="Birth Date" placeholder="DOB" />
              <InputField
                type="radio"
                label="Gender"
                options={["Male", "Female", "Other"]}
                required
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <InputField label="Parent Name" placeholder="Parent Name" />
              <InputField label="Parent Number" placeholder="Parent Number" />
            </div>
          </div>
        </div>
      </div>

      <div className="card card-body bg-white mb-4 p-4">
        <h1 className="card-title flex items-center text-lg font-semibold mb-4">
          <Home className="mr-2" /> Address
        </h1>
        <InputField label="Address Line 1" required />
        <InputField label="Address Line 2" />
        <div className="flex flex-col sm:flex-row sm:gap-4">
          <InputField label="Location/Area" placeholder="City/Village" />
          <InputField label="Pincode" placeholder="Pincode" required />
          <InputField
            type="select"
            label="State"
            required
            options={["Maharashtra", "Delhi", "Karnataka"]}
          />
          <InputField
            type="select"
            label="City"
            options={["Mumbai", "Pune", "Bangalore"]}
            required
          />
        </div>
      </div>

      <div className="card card-body bg-white mb-4 p-4">
        <h1 className="card-title flex items-center text-lg font-semibold mb-4">
          <Work className="mr-2" /> Professional Details
        </h1>
        <InputField
          type="dropdown"
          label="Highest Qualification"
          options={["B.Tech", "M.Tech", "MBA"]}
        />
        <InputField label="Skills" />
        <InputField label="Total Experience (in years)" />
        <InputField
          type="radio"
          label="Currently Working"
          options={["Yes", "No"]}
        />
        <div className="flex flex-col sm:flex-row gap-2">
          <UIButton>Add Qualification</UIButton>
          <UIButton>Add Experience</UIButton>
        </div>
        <div className="mt-4 flex flex-col sm:flex-row sm:gap-4">
          <InputField label="Aadhar Number" placeholder="Ex 1234-4567-8901" />
          <InputField label="Pan Number" placeholder="Ex ABCDE1234F" />
          <InputField label="PF Number" placeholder="PF Number" />
          <InputField label="ESIC Number" placeholder="ESIC Number" />
        </div>
      </div>

      <div className="card card-body bg-white mb-4 p-4">
        <h1 className="card-title flex items-center text-lg font-semibold mb-4">
          <Search className="mr-2" /> Job Search Requirement
        </h1>
        <div className="flex flex-col sm:flex-row sm:gap-4">
          <InputField
            type="select"
            label="Location"
            options={["Nagpur", "Mumbai", "Surat"]}
          />
          <InputField
            type="select"
            label="Job Type"
            options={[
              "FullTime(12HRS)",
              "FullTime(8HRS)",
              "Part Time",
              "Night Sift",
              "Day shift",
            ]}
          />
          <InputField type="text" label="Expected Salary ₹ (In Hand CTC)" />
        </div>
      </div>

      <div className="card card-body bg-white flex flex-col items-center p-4">
        <UIButton>Update Profile</UIButton>
      </div>
    </div>
  );
}

export default UpdateProfile;
