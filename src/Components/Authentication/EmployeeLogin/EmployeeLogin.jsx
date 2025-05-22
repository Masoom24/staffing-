import React, { useState } from "react";
import CarouselComponent from "../../../Common/Carousel/CarouselComponent";
import GoogleIcon from "@mui/icons-material/Google";
import UIButton from "../../../Common/UIButton";
import InputField from "../../../Common/InputField";
import { useNavigate } from "react-router-dom";

function EmployeeLogin() {
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const[isRemember, setIsRemember] =useState(false);
const navigate = useNavigate();

    const LoginWithEmail = (e) => {
    e.preventDefault();
    navigate("/employee/Dashboard"); // Redirect to Dashboard after login
  };
  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      <div className="flex justify-center items-center w-full md:w-1/2">
        <CarouselComponent />
      </div>
      <div className="flex justify-center items-center w-full md:w-1/2 bg-gray-100">
        <div className="w-full md:w-120 bg-white rounded-md shadow-lg p-4">
          <form action="" onSubmit={LoginWithEmail} >
            <h1 className="text-center text-lg font-bold mt-6">
              Hi, Welcome Back👋
            </h1>
            <div className="flex flex-col m-6">
   <InputField
            label="Email"
            name="email"
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />                 <InputField
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
            </div>

            <div className="flex flex-row justify-between m-6">
              <label htmlFor="password" className="label text-md pb-2">
               <input
              type="checkbox"
              checked={isRemember}
              onChange={(e) => setIsRemember(e.target.checked)}
              className="checkbox checkbox-sm"
            />
                            <span className="ml-2 text-sm">Remember Login</span>

              </label>
              <a href="#" className="text-red-600">
                Forgot password?
              </a>
            </div>
            <div className="flex flex-col m-6">
              <UIButton style={{width:"100%"}} onClick={LoginWithEmail} >Login</UIButton>
              <div className="divider">OR</div>
              <button className="btn w-full flex justify-center items-center">
                <GoogleIcon className="mr-2" /> Login with Google
              </button>

              <div className="mt-4 text-center">
                <p>
                  Don't have an account?{" "}
                  <a href="/employee/Registration" className="text-blue-600">
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EmployeeLogin;
