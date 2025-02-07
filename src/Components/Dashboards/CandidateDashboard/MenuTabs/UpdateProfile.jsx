import React, { useState, useEffect } from "react";
import UIButton from "../../../../Common/UIButton";
import InputField from "../../../../Common/InputField";
import { Person, Home, Work, Search } from "@mui/icons-material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

function UpdateProfile({ handleTabChange }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countryNames = data.map((country) => country.name.common).sort();
        setCountries(countryNames);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  return (
    <div>
      <div className="m-4 flex justify-end">
        <UIButton onClick={() => handleTabChange("My Profile")}>
          <AccountCircleOutlinedIcon className="mr-2" />
          My Profile
        </UIButton>
      </div>
      <div className="card card-body bg-white m-4">
        <h1 className="card-title flex items-center">
          <Person className="mr-2" /> Basic Details
        </h1>
        <div className="flex w-full justify-between">
          <div className="avatar w-100 mt-4">
            <div className="ring-primary ring-offset-base-100 w-40 h-40 rounded-full ring ring-offset-2">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
            <button className="btn rounded-full bg-lime-400 shadow-lg ">
              <FileUploadOutlinedIcon />
            </button>
          </div>
          <div className="flex w-full flex-col justify-between">
            <div className="flex w-full justify-between">
              <InputField label="First Name" placeholder="First Name" />
              <InputField label="Middle Name" placeholder="Middle Name" />
              <InputField label="Last Name" placeholder="Last Name" />
            </div>
            <div className="flex w-full justify-between">
              <InputField type="select" label="Country" options={countries} />
              <InputField label="Phone Number" placeholder="Phone Number" />
              <InputField label="Phone Number 2" placeholder="Phone Number 2" />
            </div>
            <div className="flex w-full justify-between">
              <InputField label="Email" placeholder="Email" />
              <InputField label="WhatsApp Number" placeholder="WhatsApp Number" />
            </div>
            <div className="flex w-full justify-between">
              <InputField type="date" label="Birth Date" placeholder="DOB" />
              <InputField type="radio" label="Gender" options={["Male", "Female", "Other"]} />
            </div>
            <div className="flex w-full justify-between">
              <InputField label="Parent Name" placeholder="Parent Name" />
              <InputField label="Parent Number" placeholder="Parent Number" />
            </div>
          </div>
        </div>
      </div>
      <div className="card card-body bg-white m-4">
        <h1 className="card-title flex items-center">
          <Home className="mr-2" /> Address
        </h1>
        <InputField label="Address Line 1" />
        <InputField label="Address Line 2" />
        <div className="flex gap-4 w-full justify-between">
          <InputField label="Location/Area" placeholder="City/Village" />
          <InputField label="Pincode" placeholder="Pincode" />
          <InputField type="select" label="State" options={["Maharashtra", "Delhi", "Karnataka"]} />
          <InputField type="select" label="City" options={["Mumbai", "Pune", "Bangalore"]} />
        </div>
      </div>
      <div className="card card-body bg-white m-4">
        <h1 className="card-title flex items-center">
          <Work className="mr-2" /> Professional Details
        </h1>
        <InputField type="dropdown" label="Highest Qualification" options={["B.Tech", "M.Tech", "MBA"]} />
        <InputField label="Skills" />
        <InputField label="Total Experience (in years)" />
        <InputField type="radio" label="Currently Working" options={["Yes", "No"]} />
        <div className="flex gap-2">
          <UIButton>Add Qualification</UIButton>
          <UIButton>Add Experience</UIButton>
        </div>
        <div className="mt-4 flex flex-row justify-between">
          <InputField label="Aadhar Number" placeholder="Ex 1234-4567-8901" />
          <InputField label="Pan Number" placeholder="Ex ABCDE1234F" />
          <InputField label="PF Number" placeholder="PF Number" />
          <InputField label="ESIC Number" placeholder="ESIC Number" />
        </div>
      </div>
      <div className="card card-body bg-white m-4">
        <h1 className="card-title flex items-center">
          <Search className="mr-2" /> Job Search Requirement
        </h1>
        <div>
            <InputField type="select" label={"Location"} options={["Nagpur", "Mumbai", "Surat"]}/>
            <InputField type="select" label={"Job Type"} options={["FullTime(12HRS)", "FullTime(8HRS)", "Part Time", "Night Sift", "Day shift", ]}/>
            <InputField type="text" label={"Expected Salary ₹ (In Hand CTC)"} />
        </div>
        <div>
            <InputField type="select" label={"Need Industries Options"} options={["Information Technology", "Banking", "Chemical", "Engineering", "Fertilizers", "Agriculture", "Fire&Safety", "Manufacturing"]}/>
            <InputField type="text" label={"Need A Department"} />
            <InputField type="radio" label="Shift Wise?" options={["Not Sure", "Yes", "No"]} />
            <InputField type="radio" label="Facilities?" options={["Not Sure", "Yes", "No"]} />
            <InputField type="radio" label="Ready for give Comittment" options={["Not Sure", "Yes", "No"]} />

        </div>
        
      </div>
      <div className="card card-body bg-white m-4 flex flex-row justify-center">
        <UIButton>Update Profile</UIButton>
      </div>
    </div>
  );
}

export default UpdateProfile;