import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 p-4">
      <div className="container mx-auto flex flex-col items-center sm:flex-row sm:justify-between">
        <p className="text-center sm:text-left text-sm">
          © {new Date().getFullYear()} Client Staffing. Developed by - The SkyIT
        </p>
      </div>
    </footer>
  );
};

export default Footer;
