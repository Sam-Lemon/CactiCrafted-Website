import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

/**Importing and using social media icons in the footer. */
export default function FooterSocial () {

    return (
         <div className="footer-container">
            <p>© 2024. Sam Lemon. All Rights Reserved</p>
            <div className="social-icons">
                <p><i className="social-link fab fa-facebook fa-2x"></i></p>
                <p><i className="social-link fab fa-instagram fa-2x"></i></p>
                <p><i className="social-link fab fa-twitter fa-2x"></i></p>
            </div>
            <div className="terms-privacy">
                <p><a href="#">Terms & Conditions</a></p>
                <p>|</p>
                <p><a href="#">Privacy Policy</a></p>
            </div>
        </div>
    );
}
