"use client"
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwvlZUWnBkiUX0g3sNm3zIICxj8txo96i1e7ezco-D6aF0JPW2YpU_e2y-5MoIK1DK9/exec", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.result === "success") {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Error sending message.");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending message.");
    }
  };

  return (
    <div className="it-contact__form-box pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="it-contact-2__color-2">
              <div className="it-contact-2__text pb-30">
                <h5 className="it-contact-2__title-sm text-black">Have Any Question?</h5>
                <p>Your email address will not be published. Required fields are marked *</p>
              </div>
              <div className="it-contact-2__form-box">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-12">
                      <div className="it-contact-2__input">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name*"
                          required
                          style={{ color: "black" }}
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-12">
                      <div className="it-contact-2__input">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address*"
                          required
                          style={{ color: "black" }}
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="it-contact-2__input">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number*"
                          required
                          style={{ color: "black" }}
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="it-contact-2__input">
                        <textarea
                          name="message"
                          placeholder="Write Your Message"
                          required
                          style={{ color: "black" }}
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="it-btn hover-2">
                    <span>Send Your Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
