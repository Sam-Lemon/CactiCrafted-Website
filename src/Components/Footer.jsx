import React from "react";
import Newsletter from "./Newsletter";
import FooterMain from "./FooterMain";
import FooterSocial from "./FooterSocial";

function Footer () {
    return(
        <div className="footer">
            <Newsletter />
            <FooterMain />
            <FooterSocial />

        </div>
    );
}

export default Footer;
