import React from "react";
import CarouselComponent from "../Carousel/CarouselComponent";
import GoogleIcon from "@mui/icons-material/Google";

function EmployeeLogin() {
  return (
    <div className="flex flex-row w-full h-screen">
      <div className="flex w-200 justify-center items-center">
        <CarouselComponent />
      </div>
      <div className="flex w-200 bg-gray-100 justify-center items-center">
        <div className="flex justify-center w-120 bg-white rounded-md shadow-lg">
          <form action="">
            <h1 className="text-center text-lg font-bold mt-6">
              Hi, Welcome Back👋
            </h1>
            <div className="flex flex-col m-6">
              <label htmlFor="email" className="text-md pb-2">
                Email
              </label>
              <input
                type="email"
                className="p-2 rounded-md"
                placeholder="example@gmail.com"
                required
              />
            </div>
            <div className="flex flex-col m-6">
              <label htmlFor="password" className="text-md pb-2">
                Password
              </label>
              <input
                type="email"
                className="p-2 rounded-md"
                placeholder="Password"
                required
              />
            </div>
            <div className="flex flex-row justify-between m-6">
              <label htmlFor="password" className="text-md pb-2">
                <input type="checkbox" />
                Remember Login
              </label>
              <a href="#" className="text-red-600">
                Forgot password?
              </a>
            </div>
            <div className="flex flex-col m-6">
              <button className="btn btn-primary mb-4">Login</button>
              <hr />
              <button className="btn  mt-4">
                <GoogleIcon className="mr-2" /> Login with Google
              </button>

              <div className="mt-4">
                <p>
                  Dont have an account?{" "}
                  <a href="/employee-registration">Sign Up</a>
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
