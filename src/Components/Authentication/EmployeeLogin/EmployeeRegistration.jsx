import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CompanyDetails from "./Steps/CompanyDetails";
import AuthorizedPerson from "./Steps/AuthorizedPerson";
import LoginDetails from "./Steps/LoginDetails";
import Preview from "./Steps/Preview";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import UIButton from "../../../Common/UIButton";

const EmployeeRegistration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: "The Sky IT",
    companyDescription: "Software Development Company",
    companyEmail: "masoomyadav@gmail.com",
    companyPhone: "9876541230",
    companyAddress: "Indore",
    authorizedFirstName: "Ghamesh",
    authorizedMiddleName: "R",
    authorizedLastName: "Rahangdale",
    position: "Frontend Developer",
    country: "India",
    phoneNumber: "9874563210",
    authorizedEmail: "masoom@gmail.com",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (validateStep(step)) setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  //Handle Employee Registration 
  const RegisterEmployee = () => {
    alert("Employee Registered");
    navigate("/employee/Dashboard")
  };

  const validateStep = (currentStep) => {
    switch (currentStep) {
      case 1:
        return (
          formData.companyName &&
          formData.companyEmail &&
          formData.companyAddress
        );
      case 2:
        return (
          formData.authorizedFirstName &&
          formData.authorizedMiddleName &&
          formData.authorizedLastName &&
          formData.authorizedEmail &&
          formData.phoneNumber
        );
      case 3:
        const passwordRegex =
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(formData.password);
      default:
        return true;
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Mobile Steps - Visible on Small Screens */}
      <div className="md:hidden w-full bg-gray-100 p-4">
        <ul className="steps steps-horizontal text-black font-bold">
          <li className={`step ${step >= 1 ? "step-neutral" : ""}`}>Company</li>
          <li className={`step ${step >= 2 ? "step-neutral" : ""}`}>
            Authorized
          </li>
          <li className={`step ${step >= 3 ? "step-neutral" : ""}`}>Login</li>
          <li className={`step ${step === 4 ? "step-neutral" : ""}`}>
            Preview
          </li>
        </ul>
      </div>

      {/* Sidebar - Hidden on Mobile */}
      <div
        style={{ backgroundColor: "#96BE25" }}
        className="hidden md:block md:w-1/5 fixed h-screen p-6"
      >
        <div className="flex justify-between">
          <h1 className="mb-4 text-xl text-white font-bold">Team SkyIT</h1>
        </div>
        <ul className="steps text-white font-bold steps-vertical mt-6">
          <li className={`step ${step >= 1 ? "step-neutral" : ""}`}>
            Company Details
          </li>
          <li className={`step ${step >= 2 ? "step-neutral" : ""}`}>
            Authorized Person
          </li>
          <li className={`step ${step >= 3 ? "step-neutral" : ""}`}>
            Login Details
          </li>
          <li className={`step ${step === 4 ? "step-neutral" : ""}`}>
            Preview
          </li>
        </ul>
        <h1 className="mt-6 text-left text-white text-sm">
          Already have an account?{" "}
          <a href="/employee/Login" className="text-blue-600">
            Login
          </a>
        </h1>
      </div>

      {/* Main Content */}
      <div
        className="w-full md:w-4/5 ml-auto p-4 bg-gray-200 "
        style={{ height: "100%" }}
      >
        {step === 1 && (
          <CompanyDetails formData={formData} handleChange={handleChange} />
        )}
        {step === 2 && (
          <AuthorizedPerson formData={formData} handleChange={handleChange} />
        )}
        {step === 3 && (
          <LoginDetails formData={formData} handleChange={handleChange} />
        )}
        {step === 4 && <Preview formData={formData} />}

        {/* Navigation Buttons */}
        <div className="flex justify-end mt-6 space-x-4">
          {step > 1 && <UIButton onClick={prevStep}>Previous</UIButton>}
          {step < 4 && <UIButton onClick={nextStep}>Continue</UIButton>}
          {step === 4 && (
            <UIButton onClick={RegisterEmployee}>Register</UIButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeRegistration;
