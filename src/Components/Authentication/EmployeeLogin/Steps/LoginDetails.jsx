import { useState } from "react";
import InputField from "../../../../Common/InputField";
import TitledCard from "../../../../Common/Card/TitledCard";

const LoginDetails = ({ formData, handleChange }) => {
  const [passwordError, setPasswordError] = useState("");

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be at least 8 characters long, include one letter, one number, and one special character."
      );
    } else {
      setPasswordError("");
    }
  };

  const handlePasswordChange = (e) => {
    handleChange(e);
    validatePassword(e.target.value);
  };

  return (
    <TitledCard title="Login Details">
      <div className="space-y-4">
        <InputField
          label="Login Phone Number"
          name="loginNumber"
          type="text"
          placeholder="Login Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <InputField
          label="Login Email Address"
          name="loginEmail"
          type="text"
          placeholder="Login Email Address"
          value={formData.authorizedEmail}
          onChange={handleChange}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handlePasswordChange}
          required
        />
        {passwordError && <h2 className="text-red-500 text-xs">{passwordError}</h2>}
      </div>
    </TitledCard>
  );
};

export default LoginDetails;
