import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CompanyDetails from "./Steps/CompanyDetails";
import AuthorizedPerson from "./Steps/AuthorizedPerson";
import LoginDetails from "./Steps/LoginDetails";
import Preview from "./Steps/Preview";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import UIButton from "../../Common/UIButton";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const EmployeeRegistration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: "",
    companyDescription: "",
    companyAddress: "",
    companyPhone: "",
    companyEmail: "",
    corporateOffice: "",
    gstNumber: "",
    authorizedFirstName: "",
    authorizedMiddleName: "",
    authorizedLastName: "",
    position: "",
    country: "",
    phoneNumber: "",
    authorizedEmail: "",
    loginNumber: "",
    loginEmail: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (validateStep(step)) setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const RegisterEmployee = () => {
    // API endpoint to register employee
    // This function will be called when the user clicks on the "Register" button
    alert("Employee Registered");
    setFormData("");
  };

  const navigate = useNavigate();

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
    <div className="flex h-screen">
      <div style={{ backgroundColor: "#96BE25" }} className="w-1/4 p-6">
        <div className="flex justify-between">
          <h1 className=" mb-4 text-xl text-white font-bold">Team SkyIT</h1>
          <label htmlFor="my-drawer-2" className="btn btn-ghost text-white">
            <KeyboardDoubleArrowLeftIcon />
          </label>
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
            <a href="/employee-login" className="text-blue-600">
              Login
            </a>
          </h1>
      </div>

      <div className="w-3/4 p-8">
        <h2 className="text-xl font-semibold mb-4">
          {step === 1
            ? "Setup Your Company Details"
            : step === 2
            ? "Setup Your Personal Details"
            : step === 3
            ? "Your Login Credentials"
            : "Preview Your Details"}
        </h2>

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

        <div className="flex justify-end mt-6 space-x-4">
          {step > 1 && <UIButton onClick={prevStep}>Previous</UIButton>}
          {step < 4 && <UIButton onClick={nextStep}>Continue</UIButton>}
          {step === 4 && (
            <UIButton onClick={RegisterEmployee}>Register</UIButton>
          )}
        </div>

        {/* Footer */}
        <footer className="footer sm:footer-horizontal footer-center bg-white text-base-content p-4 ">
          <p>
            {" "}
            © {new Date().getFullYear()} Client Staffing Developed by - The
            SkyIT
          </p>
        </footer>
      </div>
    </div>
  );
};

export default EmployeeRegistration;
