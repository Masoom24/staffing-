import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  YouTube,
  Twitter,
  LinkedIn,
  WhatsApp,
  KeyboardArrowRight,
  KeyboardArrowUp,
} from "@mui/icons-material";
import { ContactUs } from "../../data/MockData";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-4 right-4 md:right-6 p-3 bg-[#96be25] text-white rounded-full shadow-xl transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <KeyboardArrowUp fontSize="large" />
    </button>
  );
};

function Footer() {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    setContact(ContactUs);
  }, []);

  return (
    <footer className="bg-gray-200 text-gray-900 py-6">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
        {/* Logo & Play Store */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold">The Sky It</h2>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
            alt="Google Play Store"
            className="mt-4 w-full max-w-[160px]"
          />
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-left border-b-2 pb-2 border-[#96be25]">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              { name: "Candidate Login", path: "/candidate-login" },
              { name: "Client Login", path: "/client-login" },
            ].map((link, index) => (
              <li
                key={index}
                className="flex "
              >
                <KeyboardArrowRight className="text-[#96be25] mr-2" />
                <Link to={link.path} className="hover:text-[#96be25]">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h3 className="font-semibold text-left border-b-2 pb-2 border-[#96be25]">
            Pages
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: "About Us", path: "/about-us" },
            ].map((page, index) => (
              <li
                key={index}
                className="flex"
              >
                <KeyboardArrowRight className="text-[#96be25] mr-2" />
                <Link to={page.path} className="hover:text-[#96be25]">
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-semibold border-b-2 pb-2 border-[#96be25]">
            Contact Us
          </h3>
          <div className="mt-4 text-sm">
            <h2 className="font-bold">Corporate Office Address</h2>
            {contact ? (
              <>
                <h2>{contact.address}</h2>
                <h2>Email: {contact.emails[0]}</h2>
                <h2>Phone: {contact.phoneNumbers[0]}</h2>
              </>
            ) : (
              <p>Loading contact details...</p>
            )}
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex flex-wrap justify-center space-x-4 mt-6">
        {contact ? (
          <>
            <a
              href={contact.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="text-gray-600 hover:text-blue-600 cursor-pointer text-2xl" />
            </a>
            <a
              href={contact.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="text-gray-600 hover:text-pink-600 cursor-pointer text-2xl" />
            </a>
            <a
              href={contact.socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTube className="text-gray-600 hover:text-red-600 cursor-pointer text-2xl" />
            </a>
            <a
              href={contact.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="text-gray-600 hover:text-blue-400 cursor-pointer text-2xl" />
            </a>
            <a
              href={contact.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn className="text-gray-600 hover:text-blue-700 cursor-pointer text-2xl" />
            </a>
            <a
              href={contact.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsApp className="text-gray-600 hover:text-green-500 cursor-pointer text-2xl" />
            </a>
          </>
        ) : (
          <p>Loading social media...</p>
        )}
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm mt-6 border-t pt-4 px-4 md:px-6">
        <p className="text-center md:text-left">
          2025 © TheSkyIt. All rights reserved
        </p>
        <p className="text-center md:text-right">
          Developed by <span className="text-[#96be25]">TheSkyIt</span>
        </p>
      </div>

      <BackToTop />
    </footer>
  );
}

export default Footer;
