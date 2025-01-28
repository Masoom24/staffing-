import React from "react";
import PropTypes from "prop-types";

const UIButton = ({ text, type = "button", onClick, startIcon, endIcon, style = {}, children }) => {
  const buttonStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #96BE25",
    backgroundColor: "#96BE25",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "14px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.06)",
    ...style,
  };

  const iconStyles = {
    marginRight: (text || children) && startIcon ? "8px" : 0,
    marginLeft: (text || children) && endIcon ? "8px" : 0,
  };

  return (
    <button type={type} onClick={onClick} style={buttonStyles}>
      {startIcon && <span style={iconStyles}>{startIcon}</span>}
      <div>{text || children}</div>
      {endIcon && <span style={iconStyles}>{endIcon}</span>}
    </button>
  );
};

UIButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  startIcon: PropTypes.element,
  endIcon: PropTypes.element,
  style: PropTypes.object,
  children: PropTypes.node, // Add children prop validation
};

export default UIButton;
