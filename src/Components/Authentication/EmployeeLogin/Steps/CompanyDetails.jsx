import { useState } from "react";

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
    if (name !== "companyDescription" && /\d/.test(value) && name !== "companyPhone" && name !== "gstNumber") {
      error = "Numbers are not allowed";
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  return (
    <div className="space-y-4">
      <div>
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          className="input border-0 bg-gray-100 w-full"
          onChange={(e) => {
            handleChange(e);
            validateInput(e);
          }}
          value={formData.companyName}
          required
          minLength={2}
          maxLength={100}
        />
        {errors.companyName && <h3 className="text-red-500">{errors.companyName}</h3>}
      </div>
      <div>
        <input
          type="text"
          name="companyDescription"
          placeholder="Company Description"
          className="input border-0 bg-gray-100 w-full"
          onChange={handleChange}
          value={formData.companyDescription}
          maxLength={500}
        />
      </div>
      <div>
        <input
          type="text"
          name="companyAddress"
          placeholder="Company Address"
          className="input border-0 bg-gray-100 w-full"
          onChange={(e) => {
            handleChange(e);
            validateInput(e);
          }}
          value={formData.companyAddress}
          required
        />
        {errors.companyAddress && <h3 className="text-red-500">{errors.companyAddress}</h3>}
      </div>
      <div>
        <input
          type="tel"
          name="companyPhone"
          placeholder="Company Phone Number"
          className="input border-0 bg-gray-100 w-full"
          onChange={(e) => {
            handleChange(e);
            validateInput(e);
          }}
          value={formData.companyPhone}
          required
          maxLength="10"
          pattern="[0-9]{10}"
          title="Phone number should be 10 digits"
        />
        {errors.companyPhone && <h3 className="text-red-500">{errors.companyPhone}</h3>}
      </div>
      <div>
        <input
          type="email"
          name="companyEmail"
          placeholder="Company Email Address"
          className="input border-0 bg-gray-100 w-full"
          onChange={handleChange}
          value={formData.companyEmail}
          required
        />
      </div>
      <div>
        <input
          type="text"
          name="corporateOffice"
          placeholder="Corporate Office"
          className="input border-0 bg-gray-100 w-full"
          onChange={(e) => {
            handleChange(e);
            validateInput(e);
          }}
          value={formData.corporateOffice}
          required
        />
        {errors.corporateOffice && <h3 className="text-red-500">{errors.corporateOffice}</h3>}
      </div>
      <div>
        <input
          type="text"
          name="gstNumber"
          placeholder="GST Number"
          className="input border-0 bg-gray-100 w-full"
          onChange={(e) => {
            handleChange(e);
            validateInput(e);
          }}
          value={formData.gstNumber}
          required
          pattern="[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}"
          title="Enter a valid GST Number (e.g., 22AAAAA0000A1Z5)"
        />
        {errors.gstNumber && <h3 className="text-red-500">{errors.gstNumber}! Follow this pattern 22AAAAA0000A1Z5</h3>}
      </div>
    </div>
  );
};

export default CompanyDetails;
