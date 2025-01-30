const AuthorizedPerson = ({ formData, handleChange }) => {
    return (
      <div className="space-y-4">
        <input
          type="text"
          name="authorizedFirstName"
          placeholder="First Name"
          className="input border-0 bg-gray-100 w-full"
          onChange={handleChange}
          value={formData.authorizedFirstName}
        />
        <input
          type="text"
          name="authorizedMiddleName"
          placeholder="Middle Name"
          className="input border-0 bg-gray-100 w-full"
          onChange={handleChange}
          value={formData.authorizedMiddleName}
        />
        <input
          type="text"
          name="authorizedLastName"
          placeholder="Last Name"
          className="input border-0 bg-gray-100 w-full"
          onChange={handleChange}
          value={formData.authorizedLastName}
        />
        <input
          type="text"
          name="position"
          placeholder="Position"
          className="input border-0 bg-gray-100 w-full"
          onChange={handleChange}
          value={formData.position}
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          className="input border-0 bg-gray-100 w-full"
          onChange={handleChange}
          value={formData.country}
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          className="input border-0 bg-gray-100 w-full"
          onChange={handleChange}
          value={formData.phoneNumber}
        />
        <input
          type="email"
          name="authorizedEmail"
          placeholder="Email Address"
          className="input border-0 bg-gray-100 w-full"
          onChange={handleChange}
          value={formData.authorizedEmail}
        />
      </div>
    );
  };
  
  export default AuthorizedPerson;
  