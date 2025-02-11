import React from "react";
import InputField from "../../../Common/InputField";
import UIButton from "../../../Common/UIButton";

function AdminLogin() {
  return (
    <div className="bg-gray-200 w-full h-screen flex justify-center items-center">
      <div className="card w-1/3 shadow-lg rounded-lg p-6 bg-white">
        <div className="card-body">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Admin Login
          </h2>
          <form>
            <div className="mb-4">
              <InputField
                label={"Admin Username or Email"}
                placeholder={"Enter Admin Username or Email"}
                type="text"
                required
              />
            </div>
            <div className="mb-6">
              <InputField
                label={"Admin Password"}
                placeholder={"Enter Password"}
                type="password"
                required
              />
            </div>
            <div className="flex flex-1">
              <UIButton style={{ width: "100%" }} type="submit">
                Login as Admin
              </UIButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
