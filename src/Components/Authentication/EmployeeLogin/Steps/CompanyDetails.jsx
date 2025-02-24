import { useState } from "react";
import InputField from "../../../../Common/InputField";
import TitledCard from "../../../../Common/Card/TitledCard";

const CompanyDetails = ({ formData, handleChange }) => {
  const [errors, setErrors] = useState({});

  const validateInput = (e) => {
    const { name, value, pattern } = e.target;
    let error = "";
    if (pattern) {
      const regex = new RegExp(pattern);
      if (!regex.test(value)) {
        error = "Invalid format";
      }
    }
    if (
      name !== "companyDescription" &&
      /\d/.test(value) &&
      name !== "companyPhone" &&
      name !== "gstNumber"
    ) {
      error = "Numbers are not allowed";
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  return (
    <TitledCard title="Setup Company Details">
      <div className="space-y-4">
        <InputField
          label="Company Name"
          required
          name="companyName"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={(e) => {
            handleChange(e);
            validateInput(e);
          }}
        />
        {errors.companyName && (
          <h3 className="text-red-500">{errors.companyName}</h3>
        )}

        <InputField
          label="Company Description"
          name="companyDescription"
          required
          placeholder="Company Description"
          value={formData.companyDescription}
          onChange={handleChange}
        />

        <div className="flex flex-row gap-4">
          <InputField
            label="Company Email Address"
            required
            name="companyEmail"
            type="email"
            placeholder="Company Email Address"
            value={formData.companyEmail}
            onChange={handleChange}
          />

          <InputField
            label="Company Phone Number"
            required
            name="companyPhone"
            type="tel"
            placeholder="Company Phone Number"
            value={formData.companyPhone}
            onChange={(e) => {
              handleChange(e);
              validateInput(e);
            }}
          />
          {errors.companyPhone && (
            <h3 className="text-red-500">{errors.companyPhone}</h3>
          )}
        </div>
        <div className="flex flex-row gap-4">
          <InputField
            label="Company Address"
            required
            name="companyAddress"
            placeholder="Company Address"
            value={formData.companyAddress}
            onChange={(e) => {
              handleChange(e);
              validateInput(e);
            }}
          />
          {errors.companyAddress && (
            <h3 className="text-red-500">{errors.companyAddress}</h3>
          )}
          <InputField
            label="Corporate Office"
            name="corporateOffice"
            placeholder="Corporate Office"
            value={formData.corporateOffice}
            onChange={(e) => {
              handleChange(e);
              validateInput(e);
            }}
          />
          {errors.corporateOffice && (
            <h3 className="text-red-500">{errors.corporateOffice}</h3>
          )}
        </div>

        <InputField
          label="GST Number"
          name="gstNumber"
          placeholder="GST Number"
          value={formData.gstNumber}
          onChange={(e) => {
            handleChange(e);
            validateInput(e);
          }}
        />
        {errors.gstNumber && (
          <h3 className="text-red-500">
            {errors.gstNumber}! Follow this pattern 22AAAAA0000A1Z5
          </h3>
        )}
      </div>
    </TitledCard>
  );
};

export default CompanyDetails;
