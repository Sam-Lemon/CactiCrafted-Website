import React from "react";
import NewsletterForm from './NewsletterForm';

export default function Newsletter () {

    return (
        <div className="footer-newsletter text-center">
            <div className="newsletter-header">
                <h3>Newsletter Signup</h3>
                <p>Sign up to receive exclusive coupons and product updates.</p>
            </div>
            <NewsletterForm />
        </div>


    );
}