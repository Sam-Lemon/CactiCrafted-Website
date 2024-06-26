import React from "react";
import { MDBIcon } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function FooterSocial () {

    return (
         <div className="footer-container">
            <p>© 2024. Sam Lemon. All Rights Reserved</p>
            <div className="social-icons">
                <MDBIcon fab icon="facebook" />
                <MDBIcon fab icon="instagram" />
                <MDBIcon fab icon="twitter" />
            </div>
            <p>Terms & Conditions | Privacy Policy</p>
        </div>
    );
}

