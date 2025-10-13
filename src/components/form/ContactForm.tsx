"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

interface ContactFormData {
  name: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const initialState: ContactFormData = {
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  };

  const [values, setValues] = useState<ContactFormData>(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",      // replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID",     // replace with your EmailJS Template ID
        values as Record<string, unknown>, // template parameters
        "YOUR_PUBLIC_KEY"       // replace with your EmailJS Public Key
      );

      alert("✅ Thank you for contacting us! We will get back to you shortly.");
      setValues(initialState);
    } catch (err) {
      console.error("EmailJS Error:", err);
      alert("❌ Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="it-contact__form-box">
      <form onSubmit={handleFormSubmit} className="contact-form">
        <div className="row">
          <div className="col-12 mb-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name*"
              required
              value={values.name}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="col-12 mb-3">
            <input
              type="email"
              name="email"
              placeholder="Your Email*"
              required
              value={values.email}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="col-12 mb-3">
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number*"
              required
              value={values.phoneNumber}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="col-12 mb-3">
            <input
              type="text"
              name="subject"
              placeholder="Subject*"
              required
              value={values.subject}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="col-12 mb-3">
            <textarea
              name="message"
              placeholder="Type Your Message*"
              required
              value={values.message}
              onChange={handleChange}
              className="form-control"
              rows={5}
            />
          </div>

          <div className="col-12">
            <button
              type="submit"
              className="it-btn hover-2"
              disabled={loading}
              style={{
                backgroundColor: "#007bff",
                color: "#fff",
                padding: "1px 25px",
                border: "none",
                borderRadius: "5px",
              }}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
