import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="footer sm:footer-horizontal footer-center bg-white text-base-content p-4">
        <p>
          {" "}
          © {new Date().getFullYear()} Client Staffing Developed by - The
          SkyIT
        </p>
      </footer>
    </div>
  )
}

export default Footer
