import React from "react";
import NewsletterForm from "./NewsletterForm";

/**This is the newsletter sign up, with the imported NewsletterForm
 * component.*/
export default function Newsletter() {
  return (
    <div className="footer-newsletter text-center">
      <div className="newsletter-header">
        <h3>Newsletter Sign Up</h3>
        <p>Sign up to receive exclusive coupons and product updates.</p>
      </div>
      <NewsletterForm />
    </div>
  );
}
