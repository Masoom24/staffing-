import React from "react";
import CarouselComponent from "../Carousel/CarouselComponent";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";

function EmployeeRegistration() {
  return (
    <div className="flex flex-row w-full h-auto ">
      <div className="flex h-screen flex-col w-150 bg-blue-50 justify-center items-center shadow-2xl">
      <h1 className="text-left text-lg font-bold m-4 text-red-700">The <span className="text-blue-900">Staffing</span></h1>
        <ul className="steps steps-vertical">
          <li data-content="✓" className="step step-info">
            <div>
              <h1 className="text-left text-lg font-bold">Company details</h1>
              <h1 className="text-sm">Setup Your Company Details</h1>
            </div>
          </li>
          <li data-content="✓" className="step step-info">
            <div>
              <h1 className="text-left text-lg font-bold">Autherised Person</h1>
              <h1 className="text-sm">Setup Your Personal Details</h1>
            </div>
          </li>
          <li className="step">
            <div>
              <h1 className="text-left text-lg font-bold">Login Details</h1>
              <h1 className="text-sm">Your Login Credentials</h1>
            </div>
          </li>
          <li className="step">
            <div>
              <h1 className="text-left text-lg font-bold">Preview</h1>
              <h1 className="text-sm">Review Registration Data</h1>
            </div>
          </li>
          <p className="text-sm m-4">
            Already have an account? <a href="">Login</a>
          </p>
        </ul>
      </div>
      
      <div className="flex w-full h-auto bg-gray-100 justify-center items-center">
        <div className="flex justify-center w-full bg-white rounded-md  ">
          <form action="" className="w-full">
            <h1 className="text-center text-lg font-bold mt-6">
              Register Profile
            </h1>
            <div className="flex flex-col mt-6">
              <label htmlFor="company-name" className="text-md pb-2">
                Company Name
              </label>
              <input
                type="text"
                name="company-name"
                className="p-2 rounded-md border-0 bg-gray-200"
                placeholder="Company Name"
                required
              />
            </div>
            <div className="flex flex-col mt-6">
              <label htmlFor="company-description" className="text-md pb-2">
                Company Description
              </label>
              <input
                type="text"
                name="company-description"
                className="p-2 rounded-md border-0 bg-gray-200"
                placeholder="Company Description"
                required
              />
            </div>
            <div className="flex flex-col mt-6">
              <label htmlFor="company-address" className="text-md pb-2">
                Company Address
              </label>
              <input
                type="text"
                name="company-address"
                className="p-2 rounded-md border-0 bg-gray-200"
                placeholder="Company Address"
                required
              />
            </div>
            <div className="flex flex-col mt-6">
              <label htmlFor="company-email" className="text-md pb-2">
                Company Email Address
              </label>
              <input
                type="email"
                name="company-email"
                className="p-2 rounded-md border-0 bg-gray-200"
                placeholder="Company Email"
                required
              />
            </div>
            <div className="flex flex-col mt-6">
              <label htmlFor="company-address" className="text-md pb-2">
                Company Phone Number
              </label>
              <input
                type="text"
                name="company-address"
                className="p-2 rounded-md border-0 bg-gray-200"
                placeholder="987654321"
                required
              />
            </div>
            <div className="flex flex-col mt-6">
              <label htmlFor="company-address" className="text-md pb-2">
                Corporate Office Address
              </label>
              <input
                type="text"
                name="company-address"
                className="p-2 rounded-md border-0 bg-gray-200"
                placeholder="Company Address"
                required
              />
            </div>
            <div className="flex flex-col mt-6">
              <label htmlFor="company-address" className="text-md pb-2">
                GST Number
              </label>
              <input
                type="text"
                name="company-address"
                className="p-2 rounded-md border-0 bg-gray-200"
                placeholder="GST Number"
                required
              />
            </div>

            <h1 className="mt-6">
              <RecordVoiceOverIcon className="mr-2" />
              Autherised Person
            </h1>
            <div className="flex justify-between mt-6">
              <div className="flex flex-col">
                <label htmlFor="" className="pb-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Ghamesh"
                  className="p-2 w-27 rounded-md border-0 bg-gray-200"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="pb-1">
                  Middle Name
                </label>
                <input
                  type="text"
                  placeholder="Ghamesh"
                  className="p-2  w-27 rounded-md border-0 bg-gray-200"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="pb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Ghamesh"
                  className="p-2  w-27 rounded-md border-0 bg-gray-200"
                />
              </div>
            </div>
            <div className="flex flex-col mt-6">
              <label htmlFor="position" className="text-md pb-2">
                Position
              </label>
              <input
                type="text"
                name="position"
                className="p-2 rounded-md border-0 bg-gray-200"
                placeholder="Position"
                required
              />
            </div>
            <div className="flex flex-col mt-6">
              <label htmlFor="phone" className="text-md pb-2">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                className="p-2 rounded-md border-0 bg-gray-200"
                placeholder="phone"
                required
              />
            </div>
            <div className="flex flex-col mt-6">
              <label htmlFor="email" className="text-md pb-2">
                Email Address
              </label>
              <input
                type="text"
                name="email"
                className="p-2 rounded-md border-0 bg-gray-200"
                placeholder="Email"
                required
              />
            </div>
            <div className="flex flex-col mt-6">
              <label htmlFor="country" className="text-md pb-2">
                contry
              </label>
              <input
                type="text"
                name="country"
                className="p-2 rounded-md border-0 bg-gray-200"
                placeholder="Country"
                required
              />
            </div>

            <div className="flex flex-col mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EmployeeRegistration;
