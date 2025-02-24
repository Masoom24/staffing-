import { useState } from "react";
import InputField from "../../../../Common/InputField";
import TitledCard from "../../../../Common/Card/TitledCard";

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
    <TitledCard title="Authorized Person Details">
      <div className="flex flex-row gap-4">
        <InputField
          label="First Name"
          required
          name="authorizedFirstName"
          placeholder="First Name"
          value={formData.authorizedFirstName}
          onChange={(e) => {
            handleChange(e);
            validateInput(e);
          }}
        />
        {errors.authorizedFirstName && (
          <h3 className="text-red-500">{errors.authorizedFirstName}</h3>
        )}
        <InputField
          label="Middle Name"
          name="authorizedMiddleName"
          placeholder="Middle Name"
          value={formData.authorizedMiddleName}
          onChange={(e) => {
            handleChange(e);
            validateInput(e);
          }}
        />
        {errors.authorizedMiddleName && (
          <h3 className="text-red-500">{errors.authorizedMiddleName}</h3>
        )}

        <InputField
          label="Last Name"
          required
          name="authorizedLastName"
          placeholder="Last Name"
          value={formData.authorizedLastName}
          onChange={(e) => {
            handleChange(e);
            validateInput(e);
          }}
        />
        {errors.authorizedLastName && (
          <h3 className="text-red-500">{errors.authorizedLastName}</h3>
        )}
      </div>

      <InputField
        label="Position"
        required
        name="position"
        placeholder="Position"
        value={formData.position}
        onChange={(e) => {
          handleChange(e);
          validateInput(e);
        }}
      />
      {errors.position && <h3 className="text-red-500">{errors.position}</h3>}

      <InputField
        label="Phone Number"
        required
        name="phoneNumber"
        type="tel"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={handleChange}
      />
      {errors.phoneNumber && (
        <h3 className="text-red-500">{errors.phoneNumber}</h3>
      )}

      <InputField
        label="Email Address"
        required
        name="authorizedEmail"
        type="email"
        placeholder="Email Address"
        value={formData.authorizedEmail}
        onChange={(e) => {
          handleChange(e);
          validateInput(e);
        }}
      />
      {errors.authorizedEmail && (
        <h3 className="text-red-500">{errors.authorizedEmail}</h3>
      )}

      <InputField
        label="Country"
        required
        name="country"
        placeholder="Country"
        value={formData.country}
        onChange={(e) => {
          handleChange(e);
          validateInput(e);
        }}
      />
      {errors.country && <h3 className="text-red-500">{errors.country}</h3>}
    </TitledCard>
  );
};

export default AuthorizedPerson;
