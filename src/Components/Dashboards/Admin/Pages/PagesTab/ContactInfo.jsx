import React, { useState } from "react";
import CreateCard from "../../../../../Common/CreateCard";
import InputField from "../../../../../Common/InputField";
import UIButton from "../../../../../Common/UIButton";

function ContactInfo() {
  const [contactInfo, setContactInfo] = useState({
    websiteFooter: "",
    address: "",
    phone1: "",
    phone2: "",
    phone3: "",
    email1: "",
    email2: "",
    email3: "",
    googleMap: "",
    facebook: "",
    instagram: "",
    youtube: "",
    twitter: "",
    linkedin: "",
    whatsapp: "",
  });

  const handleInputChange = (label, value) => {
    setContactInfo((prev) => ({
      ...prev,
      [label]: value,
    }));
  };

  const handleUpdate = () => {
    console.log("Updated Contact Info:", contactInfo);
  };

  return (
    <div className="m-4">
      <CreateCard title="Contact Info Page">
        <form className="form-control w-full" style={{ maxWidth: "none" }}>
          <div className="flex flex-col gap-4">
            <InputField
              label="Website Footer (About Us)"
              required
              placeholder="Enter about us details"
              value={contactInfo.websiteFooter}
              onChange={(e) =>
                handleInputChange("websiteFooter", e.target.value)
              }
            />
            <InputField
              label="Address"
              required
              placeholder="Enter address"
              value={contactInfo.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:gap-4">
            <InputField
              label="Phone Number 1"
              required
              placeholder="Enter phone number"
              value={contactInfo.phone1}
              onChange={(e) => handleInputChange("phone1", e.target.value)}
            />
            <InputField
              label="Phone Number 2"
              required
              placeholder="Enter phone number"
              value={contactInfo.phone2}
              onChange={(e) => handleInputChange("phone2", e.target.value)}
            />
            <InputField
              label="Phone Number 3"
              required
              placeholder="Enter phone number"
              value={contactInfo.phone3}
              onChange={(e) => handleInputChange("phone3", e.target.value)}
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:gap-4">
            <InputField
              label="Email Address 1"
              required
              placeholder="Enter email address"
              value={contactInfo.email1}
              onChange={(e) => handleInputChange("email1", e.target.value)}
            />
            <InputField
              label="Email Address 2"
              required
              placeholder="Enter email address"
              value={contactInfo.email2}
              onChange={(e) => handleInputChange("email2", e.target.value)}
            />
            <InputField
              label="Email Address 3"
              required
              placeholder="Enter email address"
              value={contactInfo.email3}
              onChange={(e) => handleInputChange("email3", e.target.value)}
            />
          </div>

          <InputField
            label="Google Map Link"
            required
            placeholder="Enter Google Map link"
            value={contactInfo.googleMap}
            onChange={(e) => handleInputChange("googleMap", e.target.value)}
          />

          <div className="flex flex-col sm:flex-row sm:gap-4">
            <InputField
              label="Facebook"
              required
              placeholder="Enter Facebook link"
              value={contactInfo.facebook}
              onChange={(e) => handleInputChange("facebook", e.target.value)}
            />
            <InputField
              label="Instagram"
              required
              placeholder="Enter Instagram link"
              value={contactInfo.instagram}
              onChange={(e) => handleInputChange("instagram", e.target.value)}
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:gap-4">
            <InputField
              label="YouTube"
              required
              placeholder="Enter YouTube link"
              value={contactInfo.youtube}
              onChange={(e) => handleInputChange("youtube", e.target.value)}
            />
            <InputField
              label="Twitter"
              required
              placeholder="Enter Twitter link"
              value={contactInfo.twitter}
              onChange={(e) => handleInputChange("twitter", e.target.value)}
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:gap-4">
            <InputField
              label="LinkedIn"
              required
              placeholder="Enter LinkedIn link"
              value={contactInfo.linkedin}
              onChange={(e) => handleInputChange("linkedin", e.target.value)}
            />
            <InputField
              label="Whatsapp"
              required
              placeholder="Enter WhatsApp number"
              value={contactInfo.whatsapp}
              onChange={(e) => handleInputChange("whatsapp", e.target.value)}
            />
          </div>

          <div className="flex flex-row justify-end">
            <UIButton
              type="button"
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded w-full sm:w-auto"
              onClick={handleUpdate}
            >
              Update Contact Info
            </UIButton>
          </div>
        </form>
      </CreateCard>
    </div>
  );
}

export default ContactInfo;
