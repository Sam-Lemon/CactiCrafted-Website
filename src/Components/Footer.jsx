import React from "react";
import Newsletter from "./Newsletter";
import FooterMain from "./FooterMain";
import Socials from "./Socials";

function Footer () {
    return(
        <div className="footer">
            <Newsletter />
            <FooterMain />
            <Socials />

        </div>
    );
}

export default Footer;
