/**This is the footer component. I imported several
 * other components in here to make the footer.
 */

import React from "react";
import Newsletter from "./Newsletter";
import FooterMain from "./FooterMain";
import Socials from "./Socials";

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
