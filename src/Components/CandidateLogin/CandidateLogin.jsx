import React from "react";
import "./CandidateLogin.css";
import CarouselComponent from "../Carousel/CarouselComponent";
import Login from "./LoginForm/Login";

function CandidateLogin() {
  return (
    <div className="candidate-login-page">
      <div className="left">
        <CarouselComponent />
      </div>
      <div className="right">
        <Login />
      </div>
    </div>
  );
}

export default CandidateLogin;
