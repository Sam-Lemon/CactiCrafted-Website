import React from "react";
import FooterMain from "./FooterMain";
import Newsletter from "./Newsletter";
import Socials from "./Socials";

/**This is the footer component. I imported several
 * other components in here to make the footer.*/

function Footer() {
  return (
    <div className="footer">
      <Newsletter />
      <FooterMain />
      <Socials />
    </div>
  );
}

export default Footer;
