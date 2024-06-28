import React from "react";
import { MDBIcon } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function FooterSocial () {

    return (
         <div className="footer-container">
            <p>© 2024. Sam Lemon. All Rights Reserved</p>
            <div className="social-icons">
                <p><i class="social-link fab fa-facebook" fa-3x></i></p>
                <p><i class="social-link fab fa-instagram" fa-3x></i></p>
                <p><i class="social-link fab fa-twitter" fa-3x></i></p>
            </div>
            <p>Terms & Conditions | Privacy Policy</p>
        </div>
    );
}
