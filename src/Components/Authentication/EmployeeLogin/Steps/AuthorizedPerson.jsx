import { useState } from "react";

const AuthorizedPerson = ({ formData, handleChange }) => {
  const [errors, setErrors] = useState({});

  const validateInput = (e) => {
    const { name, value, pattern } = e.target;
    let error = "";

    if (!value.trim()) {
      error = "This field is required";
    } else if (pattern) {
      const regex = new RegExp(pattern);
      if (!regex.test(value)) {
        error = "Invalid format";
      }
    }

    if (name !== "position" && name !== "country" && /\d/.test(value)) {
      error = "Numbers are not allowed";
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  return (
    <div className="space-y-4">
      <div>
        <input
          type="text"
          name="authorizedFirstName"
          placeholder="First Name"
          className="input border-0 bg-gray-100 w-full"
          onChange={(e) => {
            handleChange(e);
            validateInput(e);
          }}
          value={formData.authorizedFirstName}
          required
        />
        {errors.authorizedFirstName && <h3 className="text-red-500">{errors.authorizedFirstName}</h3>}
      </div>
      <div>
        <input
          type="text"
          name="authorizedMiddleName"
          placeholder="Middle Name"
          className="input border-0 bg-gray-100 w-full"
          onChange={(e) => {
            handleChange(e);
            validateInput(e);
          }}
          value={formData.authorizedMiddleName}
        />
        {errors.authorizedMiddleName && <h3 className="text-red-500">{errors.authorizedMiddleName}</h3>}
      </div>
      <div>
        <input
          type="text"
          name="authorizedLastName"
          placeholder="Last Name"
          className="input border-0 bg-gray-100 w-full"
          onChange={(e) => {
            handleChange(e);
            validateInput(e);
          }}
          value={formData.authorizedLastName}
          required
        />
        {errors.authorizedLastName && <h3 className="text-red-500">{errors.authorizedLastName}</h3>}
      </div>
      <div>
        <input
          type="text"
          name="position"
          placeholder="Position"
          className="input border-0 bg-gray-100 w-full"
          onChange={(e) => {
            handleChange(e);
            validateInput(e);
          }}
          value={formData.position}
          required
        />
        {errors.position && <h3 className="text-red-500">{errors.position}</h3>}
      </div>
      <div>
        <input
          type="text"
          name="country"
          placeholder="Country"
          className="input border-0 bg-gray-100 w-full"
          onChange={(e) => {
            handleChange(e);
            validateInput(e);
          }}
          value={formData.country}
          required
        />
        {errors.country && <h3 className="text-red-500">{errors.country}</h3>}
      </div>
      <div>
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          className="input border-0 bg-gray-100 w-full"
          onChange={(e) => {
            handleChange(e);
          }}
          value={formData.phoneNumber}
          required
          maxLength="10"
          pattern="[0-9]{10}"
          title="Phone number should be 10 digits"
        />
        {errors.phoneNumber && <h3 className="text-red-500">{errors.phoneNumber}</h3>}
      </div>
      <div>
        <input
          type="email"
          name="authorizedEmail"
          placeholder="Email Address"
          className="input border-0 bg-gray-100 w-full"
          onChange={(e) => {
            handleChange(e);
            validateInput(e);
          }}
          value={formData.authorizedEmail}
          required
        />
        {errors.authorizedEmail && <h3 className="text-red-500">{errors.authorizedEmail}</h3>}
      </div>
    </div>
  );
};

export default AuthorizedPerson;
