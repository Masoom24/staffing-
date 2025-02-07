import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UIButton from "../../../../Common/UIButton";
import GoogleIcon from "@mui/icons-material/Google";
import InputField from "../../../../Common/InputField";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRemember, setIsRemember] = useState(false);

  const navigate = useNavigate();

  const LoginWithEmail = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const LoginWithGoogle = () => {
    ("Login Hitted!");
  };

  return (
    <div className="flex flex-col justify-center w-120">
      <form
        onSubmit={LoginWithEmail}
        className="bg-white w-full h-120 p-6 rounded-lg shadow-md"
      >
        <h1 className="text-lg font-bold mb-4">
          Hi, Welcome to <span className="text-green-500">ClientStaffing!</span>{" "}
          👋
        </h1>

        <div className="text-left">
          <InputField
            label="Email"
            name="email"
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputField
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex justify-between items-center mb-4">
          <label className="cursor-pointer flex items-center">
            <input
              type="checkbox"
              checked={isRemember}
              onChange={(e) => setIsRemember(e.target.checked)}
              className="checkbox checkbox-sm"
            />
            <span className="ml-2 text-sm">Remember Login</span>
          </label>
          <a href="#" className="text-sm text-red-500 hover:text-green-500">
            Forgot Password?
          </a>
        </div>

        <UIButton style={{ width: "100%" }} onClick={LoginWithEmail}>
          Login
        </UIButton>

        <div className="divider">OR</div>

        <button
          type="button"
          onClick={LoginWithGoogle}
          className="btn btn-outline w-full flex items-center justify-center"
        >
          <GoogleIcon className="mr-2" /> Login with Google
        </button>

        <p className="text-sm mt-4 text-center">
          Don’t have an account?{" "}
          <Link to="/sign-up" className="text-blue-500">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
