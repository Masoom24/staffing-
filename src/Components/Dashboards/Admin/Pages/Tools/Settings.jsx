import React, { useState } from "react";
import InputField from "../../../../../Common/InputField";
import UIButton from "../../../../../Common/UIButton";
import CreateCard from "../../../../../Common/CreateCard";

function Settings() {
  // State to manage input values
  const [settings, setSettings] = useState({
    skillMatch: "",
    fcmServerKey: "",
    razorPayKeyId: "",
    razorPaySecretKey: "",
    smtpHost: "",
    smtpPort: "",
    isSecure: "",
    smtpEmail: "",
    smtpUsername: "",
    smtpPassword: "",
    androidAppLink: "",
    iosAppLink: "",
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  // Validate inputs
  const validateInputs = () => {
    const requiredFields = [
      "razorPayKeyId",
      "razorPaySecretKey",
      "smtpHost",
      "smtpPort",
      "isSecure",
      "smtpEmail",
      "smtpUsername",
      "smtpPassword",
    ];

    for (let field of requiredFields) {
      if (!settings[field]) {
        alert(`Please fill in the ${field.replace(/([A-Z])/g, " $1")}`); // Converts camelCase to readable text
        return false;
      }
    }
    return true;
  };

  // Handle update button click
  const handleUpdate = () => {
    if (!validateInputs()) return;

    console.log("Updated Settings:", settings);

    setSettings({
      skillMatch: "",
      fcmServerKey: "",
      razorPayKeyId: "",
      razorPaySecretKey: "",
      smtpHost: "",
      smtpPort: "",
      isSecure: "",
      smtpEmail: "",
      smtpUsername: "",
      smtpPassword: "",
      androidAppLink: "",
      iosAppLink: "",
    });

    alert("Settings Updated Successfully!");
  };

  return (
    <div className="flex flex-col m-4 gap-4">
      {/* Skill Matching */}
      <div className="card bg-white shadow-md rounded-md p-4">
        <div className="card-body">
          <InputField
            label={"Skill Matching (%) for Apply Job"}
            placeholder={"Ex. 36"}
            type="number"
            name="skillMatch"
            value={settings.skillMatch}
            onChange={handleInputChange}
          />
        </div>
      </div>

      {/* FCM Server Key */}
      <CreateCard title={"FCM (Firebase Cloud Messaging) Server Key"}>
        <InputField
          type="text"
          label={"FCM Server Key"}
          placeholder={"FCM Server Key"}
          name="fcmServerKey"
          value={settings.fcmServerKey}
          onChange={handleInputChange}
        />
      </CreateCard>

      {/* Payment Gateway & SMTP Settings */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* RazorPay */}
        <div className="w-full md:w-1/2">
          <CreateCard title={"RazorPay (Payment Gateway)"}>
            <InputField
              type="text"
              label={"RazorPay Key ID"}
              placeholder={"RazorPay Key ID"}
              name="razorPayKeyId"
              value={settings.razorPayKeyId}
              onChange={handleInputChange}
              required
            />
            <InputField
              type="text"
              label={"RazorPay Secret Key"}
              placeholder={"RazorPay Secret Key"}
              name="razorPaySecretKey"
              value={settings.razorPaySecretKey}
              onChange={handleInputChange}
              required
            />
          </CreateCard>
        </div>

        {/* SMTP Settings */}
        <div className="w-full md:w-1/2">
          <CreateCard title={"SMTP Settings (Email Settings)"}>
            <InputField
              label={"SMTP Host"}
              type="text"
              placeholder={"SMTP Host"}
              name="smtpHost"
              value={settings.smtpHost}
              onChange={handleInputChange}
              required
            />
            <InputField
              label={"SMTP Port (TLS/SSL)"}
              type="text"
              placeholder={"SMTP Port (TLS/SSL)"}
              name="smtpPort"
              value={settings.smtpPort}
              onChange={handleInputChange}
              required
            />
            <InputField
              label={"Is Secure?"}
              type="text"
              placeholder={"Is Secure?"}
              name="isSecure"
              value={settings.isSecure}
              onChange={handleInputChange}
              required
            />
            <InputField
              label={"SMTP Email"}
              type="text"
              placeholder={"SMTP Email"}
              name="smtpEmail"
              value={settings.smtpEmail}
              onChange={handleInputChange}
              required
            />
            <InputField
              label={"SMTP Username"}
              type="text"
              placeholder={"SMTP Username"}
              name="smtpUsername"
              value={settings.smtpUsername}
              onChange={handleInputChange}
              required
            />
            <InputField
              label={"SMTP Password"}
              type="password"
              placeholder={"SMTP Password"}
              name="smtpPassword"
              value={settings.smtpPassword}
              onChange={handleInputChange}
              required
            />
          </CreateCard>
        </div>
      </div>

      {/* Application Links */}
      <CreateCard title={"Application Links"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            label={"Android App Link"}
            placeholder={"Paste Link here"}
            name="androidAppLink"
            value={settings.androidAppLink}
            onChange={handleInputChange}
          />
          <InputField
            label={"iOS App Link"}
            placeholder={"Paste Link here"}
            name="iosAppLink"
            value={settings.iosAppLink}
            onChange={handleInputChange}
          />
        </div>
      </CreateCard>

      {/* Submit Button */}
      <div className="flex justify-end">
        <UIButton onClick={handleUpdate}>Update Settings</UIButton>
      </div>
    </div>
  );
}

export default Settings;
