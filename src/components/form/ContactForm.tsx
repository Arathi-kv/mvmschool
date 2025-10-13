"use client";

import React, { useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      service_id: "gmail",
      template_id: "template_lblai0z",
      user_id: "user_mEWvBp6teHQpXmSA2yZ19",
      template_params: formData,
    };

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("✅ Thank you for contacting us!");
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          subject: "",
          message: "",
        });
      } else {
        alert("⚠️ Failed to send. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("❌ Error sending message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="it-contact__form-box">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="row">
          <div className="col-12 mb-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name*"
              required
              value={formData.name}
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
              value={formData.email}
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
              value={formData.phoneNumber}
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
              value={formData.subject}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="col-12 mb-3">
            <textarea
              name="message"
              placeholder="Type Your Message*"
              required
              value={formData.message}
              onChange={handleChange}
              className="form-control"
              rows={5}
            />
          </div>

          <div className="col-12">
            <button
              type="submit"
              className="it-btn hover-2"
              style={{
                backgroundColor: "#007bff",
                color: "#ffffffff",
                padding: "1px 25px",
                border: "none",
                borderRadius: "5px",
              }}
              disabled={loading}
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
