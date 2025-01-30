const CompanyDetails = ({ formData, handleChange }) => {
    return (
      <div className="space-y-4">
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          className="input border-0 bg-gray-100 w-full"
          onChange={handleChange}
          value={formData.companyName}
          required
        />
        <input
          type="text"
          name="companyDescription"
          placeholder="Company Description"
          className="input border-0 bg-gray-100 w-full"
          onChange={handleChange}
          value={formData.companyDescription}
        />
        <input
          type="text"
          name="companyAddress"
          placeholder="Company Address"
          className="input border-0 bg-gray-100 w-full"
          onChange={handleChange}
          value={formData.companyAddress}
        />
        <input
          type="phone"
          name="companyPhone"
          placeholder="Company Phone Number"
          className="input border-0 bg-gray-100 w-full"
          onChange={handleChange}
          value={formData.companyPhone}
        />
        <input
          type="email"
          name="companyEmail"
          placeholder="Company Email Address"
          className="input border-0 bg-gray-100 w-full"
          onChange={handleChange}
          value={formData.companyEmail}
        />
        <input
          type="text"
          name="corporateOffice"
          placeholder="Corporate Office"
          className="input border-0 bg-gray-100 w-full"
          onChange={handleChange}
          value={formData.corporateOffice}
        />
        <input
          type="text"
          name="gstNumber"
          placeholder="GST Number"
          className="input border-0 bg-gray-100 w-full"
          onChange={handleChange}
          value={formData.gstNumber}
        />
      </div>
    );
  };
  
  export default CompanyDetails;
  