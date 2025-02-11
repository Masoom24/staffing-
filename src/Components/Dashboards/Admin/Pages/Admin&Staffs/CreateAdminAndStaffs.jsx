import React, { useRef, useState } from "react";
import CreateCard from "../../../../../Common/CreateCard";
import InputField from "../../../../../Common/InputField";
import UIButton from "../../../../../Common/UIButton";

const options = ["No roles are added by admin"];

const CreateAdminAndStaffs = () => {
  const [image, setImage] = useState(
    "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?ga=GA1.1.924684660.1738927689&semt=ais_incoming"
  );
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="p-4">
      {/* General Information Section */}
      <div className="bg-gray-100 flex items-center justify-center ">
        <CreateCard title="General Information">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <div className="flex items-center justify-center">
                <div className="avatar">
                  <div
                    className="w-30 h-30 sm:w-30 sm:h-30 rounded-md bg-gray-200 overflow-hidden cursor-pointer"
                    onClick={handleAvatarClick}
                  >
                    <img
                      src={image}
                      alt="Profile Preview"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}

                />
                
              </div>
              <label className="font-bold text-center block mt-2">Upload Profile Image</label>
            </div>

            <div>
              <InputField label="Role" name="role"  type="select" options={options} required />
              <InputField label="First Name" name="firstName" placeholder="First Name" required/>
            </div>

            <div>
              <InputField label="Last Name" name="lastName" placeholder="Last Name" required/>
              <InputField
                label="Email Address"
                name="email"
                type="email"
                placeholder="Email Address"
                required
              />
            </div>

            <div>
              <InputField
                label="Phone Number"
                name="phoneNumber"
                type="tel"
                placeholder="Phone Number"
                required
              />
            </div>
          </div>
        </CreateCard>
      </div>

      {/* Client Information Section */}
      <div className="mt-5">
        <CreateCard title="Client Information">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InputField label="Client Code" name="clientCode" placeholder="Client Code" />
            <InputField label="Department" name="department" placeholder="Department" />
            <InputField label="Position" name="position" placeholder="Position" />
          </div>
        </CreateCard>
      </div>

      {/* Login Information Section */}
      <div className="mt-5">
        <CreateCard title="Login Information">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField label="Username" name="username" placeholder="Username" required/>
            <InputField
              label="Password"
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </div>
        </CreateCard>
      </div>

      {/* Personal & Nominee Information Section */}
      <div className="mt-5 flex flex-col lg:flex-row justify-center gap-4">
        <div className="w-full lg:w-[65%]">
          <CreateCard title="Personal Information">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField label="Pan Card Number" name="panCard" placeholder="Pan Card Number" />
              <InputField
                label="Aadhar Card Number"
                name="aadharCard"
                placeholder="Aadhar Card Number"
              />
              <InputField label="PF Number" name="pfNumber" placeholder="PF Number" />
              <InputField label="ESIC Number" name="esicNumber" placeholder="ESIC Number" />
            </div>
          </CreateCard>
        </div>
        <div className="w-full lg:w-[32%] ">
          <CreateCard title="Nominee Information">
            <InputField label="Nominee Name" name="nomineeName" placeholder="Nominee Name" />
            <InputField
              label="Nominee Phone Number"
              name="nomineePhoneNumber"
              placeholder="Nominee Phone Number"
            />
          </CreateCard>
        </div>
      </div>

      {/* Address Section */}
      <div className="mt-5">
        <CreateCard title="Address">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <InputField
              label="Address Line 1"
              name="addressLine1"
              placeholder="Address Line 1"
            />
            <InputField label="Location/Area" name="location" placeholder="Location/Area" />
            <InputField
              label="Address Line 2"
              name="addressLine2"
              placeholder="Address Line 2"
            />
            <InputField label="Pincode" name="pincode" placeholder="Pincode" />
            <InputField label="Country" name="country" type="select" options={options} required/>
            <InputField label="State" name="state" type="select" options={options} />
            <InputField label="City" name="city" type="select" options={options} />
          </div>
        </CreateCard>
      </div>

      {/* Bank Details Section */}
      <div className="mt-5">
        <CreateCard title="Bank Details">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <InputField label="Account Name" name="accountName" placeholder="Account Name" />
            <InputField
              label="Account Number"
              name="accountNumber"
              placeholder="Account Number"
            />
            <InputField label="IFSC Code" name="ifscCode" placeholder="IFSC Code" />
            <InputField label="Bank Name" name="bankName" placeholder="Bank Name" />
            <InputField label="Bank Branch" name="bankBranch" placeholder="Bank Branch" />
          </div>
        </CreateCard>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center items-center mt-5 mb-5">
        <UIButton text="Create Admin and Staffs" />
      </div>
    </div>
  );
};

export default CreateAdminAndStaffs;
