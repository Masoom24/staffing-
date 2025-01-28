import React from "react";
import { useState } from "react";
import "../CandidateLogin.css";
import { Link } from "react-router-dom";
import UIButton from "../../../Common/UIButton";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRemember, setIsRemember] = useState(false);

  const navigate = useNavigate();

  const LoginWithEmail = () => {
    navigate("/dashboard");
  };

  const LoginWithGoogle = () => {
    console.log("Login Hitted!");
  };

  return (
    <form onSubmit={LoginWithEmail} className="login-form">
      <h1 style={{ fontSize: "18px" }}>
        Hi, Welcome to <span>ClientStaffing!</span>👋
      </h1>

      <div className="input-container">
        <label>Email</label>
        <br />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@email.com"
        />
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>
      <div className="extra-options">
        <label>
          <input
            type="checkbox"
            checked={isRemember}
            onChange={(e) => {
              setIsRemember(e.target.checked);
            }}
            name="remember"
          />
          Remember Login
        </label>
        <a href="#" className="forgot-password">
          Forgot Password?
        </a>
      </div>

      <UIButton
        text="Login"
        type="submit"
        style={{ width: "100%", fontSize: "16px" }}
      />

      <hr
        style={{
          margin: "20px 0px",
          backgroundColor: "#eaeaea",
        }}
      />

      <UIButton
        onClick={LoginWithGoogle}
        text="Login with Google"
        startIcon={<GoogleIcon />}
        style={{
          backgroundColor: "transparent",
          color: "#00000099",
          border: "1px solid #00000066",
          width: "100%",
        }}
      />

      <p style={{ fontSize: "13px" }}>
        Don’t have an account ? <Link to="/sign-up">Sign Up</Link>
      </p>
    </form>
  );
}

export default Login;
