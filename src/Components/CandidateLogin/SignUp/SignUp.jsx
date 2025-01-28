import React, { useState } from "react";
import { Link } from "react-router-dom";
import Experienced from "../../../assets/Experienced.png";
import Freshers from "../../../assets/Freshers.png";
import CarouselComponent from "../../Carousel/CarouselComponent";
import UIButton from "../../../Common/UIButton";
import "./SignUp.css"

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    country: "India",
    phone: "",
    email: "",
    password: "",
    workStatus: "",
    skills: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    // Perform further actions like sending the data to an API
  };

  return (
    <div className="candidate-register">
      <div className="register-left">
        <CarouselComponent />
      </div>
      <div className="register-right">
        <form className="registeration-form" onSubmit={handleSubmit}>
          <h1>Candidate Register</h1>
          <div className="form-row" id="names">
            <div>
              <label htmlFor="firstName">First Name</label>
              <br />
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="middleName">Middle Name</label>
              <br />
              <input
                type="text"
                id="middleName"
                name="middleName"
                placeholder="Middle Name"
                value={formData.middleName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="lastName">Last Name</label>
              <br />
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <label htmlFor="country">Country</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Australia">Australia</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-row">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label>Work Status</label>
            <div className="work-status-cards">
              <div className="card">
                <input
                  type="radio"
                  id="experienced"
                  name="workStatus"
                  value="Experienced"
                  checked={formData.workStatus === "Experienced"}
                  onChange={handleChange}
                  style={{ display: "none" }}
                />
                <label htmlFor="experienced">
                  <img
                    src={Experienced}
                    alt="experienced"
                    style={{ width: "20", height: "20.46" }}
                  />
                  <strong>I’m Experienced</strong>
                  <p>I have work experience (excluding internships).</p>
                </label>
              </div>
              <div className="card">
                <input
                  type="radio"
                  id="fresher"
                  name="workStatus"
                  value="Fresher"
                  checked={formData.workStatus === "Fresher"}
                  style={{ display: "none" }}
                  onChange={handleChange}
                />
                <label htmlFor="fresher">
                  <img
                    src={Freshers}
                    alt="fresher"
                    style={{ width: "30px", height: "18px" }}
                  />
                  <strong>I’m Fresher</strong>
                  <p>I am a student/haven’t worked after graduation</p>
                </label>
              </div>
            </div>
          </div>

          <div className="form-row">
            <label htmlFor="skills">Skill</label>
            <input
              type="text"
              id="skills"
              name="skills"
              placeholder="Mention your skills"
              value={formData.skills}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <UIButton text="Register" type="submit" style={{ width:"100%" }}/>
          </div>
          <p style={{ fontSize: "13px" }}>
            Already have account ? <Link to="/candidate-login">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
