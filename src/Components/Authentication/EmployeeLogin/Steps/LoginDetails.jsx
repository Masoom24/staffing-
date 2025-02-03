const LoginDetails = ({ formData, handleChange }) => {
    return (
      <div className="space-y-4">
        <input
          type="text"
          name="loginNumber"
          placeholder="Login Phone Number"
          className="input border-0 bg-gray-100 w-full"
          onChange={handleChange}
          value={formData.loginNumber}
        />
        <input
          type="text"
          name="loginEmail"
          placeholder="Login Email Address"
          className="input border-0 bg-gray-100 w-full"
          onChange={handleChange}
          value={formData.loginEmail}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input border-0 bg-gray-100 w-full"
          onChange={handleChange}
          value={formData.password}
        />
      </div>
    );
  };
  
  export default LoginDetails;
  