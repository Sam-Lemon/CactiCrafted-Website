import React from "react";
import logo from "../images/logo-transparent-png.png";

/**Importing and returning the company logo. Putting it
 * in it's own component makes it easy to put a logo
 * anywhere it may be needed.*/
export default function LogoImage() {
  const logoStyle = {
    width: "5rem",
  };

  return (
    <img src={logo} style={logoStyle} alt="Logo" />
  );
}
