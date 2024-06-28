import React from "react";
import Newsletter from "./Newsletter";
import FooterMain from "./FooterMain";
import Socials from "./Socials";
import LogoImage from "./LogoImg";

function Footer () {
    return(
        <div className="footer">
            <Newsletter />
            <FooterMain />
            <div className="logoImg">
                <LogoImage />
            </div>
            <Socials />

        </div>
    );
}

export default Footer;
