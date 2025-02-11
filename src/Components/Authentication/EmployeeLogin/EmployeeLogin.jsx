import React from "react";
import CarouselComponent from "../../../Common/Carousel/CarouselComponent";
import GoogleIcon from "@mui/icons-material/Google";
import UIButton from "../../../Common/UIButton";
import InputField from "../../../Common/InputField";

function EmployeeLogin() {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      <div className="flex justify-center items-center w-full md:w-1/2">
        <CarouselComponent />
      </div>
      <div className="flex justify-center items-center w-full md:w-1/2 bg-gray-100">
        <div className="w-full md:w-120 bg-white rounded-md shadow-lg p-4">
          <form action="">
            <h1 className="text-center text-lg font-bold mt-6">
              Hi, Welcome Back👋
            </h1>
            <div className="flex flex-col m-6">
              <InputField label={"Email"} placeholder={"example@gmail.com"} />
              <InputField
                label={"Password"}
                placeholder={"Enter your password"}
              />
            </div>

            <div className="flex flex-row justify-between m-6">
              <label htmlFor="password" className="label text-md pb-2">
                <input type="checkbox" />
                Remember Login
              </label>
              <a href="#" className="text-red-600">
                Forgot password?
              </a>
            </div>
            <div className="flex flex-col m-6">
              <UIButton>Login</UIButton>
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
