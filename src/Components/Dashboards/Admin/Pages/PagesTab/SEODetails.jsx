import React, { useState } from "react";
import InputField from "../../../../../Common/InputField";
import UIButton from "../../../../../Common/UIButton";

function SEODetails() {
  const [seoData, setSeoData] = useState({
    page: "",
    title: "",
    description: "",
    keywords: "",
  });

  const handleChange = (field, value) => {
    setSeoData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log("SEO Data Submitted:", seoData);
    // Add API call or further processing here
  };

  return (
    <div className="m-4 gap-4">
      <div className="card bg-white w-full shadow-md rounded-md p-4">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h1 className="card-title">Search Engine Optimization</h1>
            <div>
              <InputField
                type="select"
                options={[
                  "Home Page",
                  "Contact Us Page",
                  "Client Privacy Policy Page",
                  "Candidate Terms & Condition Page",
                  "Client Terms & Conditions Page",
                  "Refund Policy Page",
                ]}
                onChange={(e) => handleChange("page", e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-4 mt-4">
            <InputField
              label="SEO Title"
              placeholder="Enter SEO Title"
              required
              value={seoData.title}
              onChange={(e) => handleChange("title", e.target.value)}
            />
            <InputField
              label="SEO Description"
              placeholder="Enter SEO Description"
              required
              value={seoData.description}
              onChange={(e) => handleChange("description", e.target.value)}
            />
            <InputField
              label="SEO Keywords (Comma-separated)"
              placeholder="Enter SEO Keywords"
              required
              value={seoData.keywords}
              onChange={(e) => handleChange("keywords", e.target.value)}
            />

            <div className="flex justify-end">
              <UIButton onClick={handleSubmit}>Submit</UIButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SEODetails;
