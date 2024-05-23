import React from "react";
import { DecorativeRing } from "./DecorativeRing";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-left">
          <h1 className="section-title">Contact</h1>
          <p className="contact-description">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I'll get back to you as soon as possible.
          </p>
        </div>
        <div className="contact-right">
          <ContactForm />
        </div>
        <DecorativeRing className="decorative-ring-contact" />
      </div>
    </div>
  );
}
