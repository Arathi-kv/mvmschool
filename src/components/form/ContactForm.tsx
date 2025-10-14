"use client";

import { useState } from "react";

function ContactForm() {
  const initialState = {
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  };

  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const { name, email, phoneNumber, subject, message } = values;

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      service_id: "gmail",
      template_id: "template_lblai0z",
      user_id: "user_mEWvBp6teHQpXmSA2yZ19",
      template_params: values,
    };

    try {
      await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      alert("Thank you for contacting us, we will get back to you.");
      setValues(initialState);
    } catch (err) {
      console.error(err);
      alert("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "25px",
        borderRadius: "10px",
        border: "1px solid #ddd",
        backgroundColor: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <input
        type="text"
        name="name"
        value={name}
        placeholder="Your Name *"
        onChange={handleChange}
        required
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "15px",
          border: "1px solid #ccc",
          borderRadius: "6px",
        }}
      />
      <input
        type="email"
        name="email"
        value={email}
        placeholder="Your Email *"
        onChange={handleChange}
        required
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "15px",
          border: "1px solid #ccc",
          borderRadius: "6px",
        }}
      />
      <input
        type="tel"
        name="phoneNumber"
        value={phoneNumber}
        placeholder="Phone Number *"
        onChange={handleChange}
        required
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "15px",
          border: "1px solid #ccc",
          borderRadius: "6px",
        }}
      />
      <input
        type="text"
        name="subject"
        value={subject}
        placeholder="Subject *"
        onChange={handleChange}
        required
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "15px",
          border: "1px solid #ccc",
          borderRadius: "6px",
        }}
      />
      <textarea
        name="message"
        value={message}
        placeholder="Type Your Message Here..."
        onChange={handleChange}
        required
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "6px",
          minHeight: "120px",
          resize: "vertical",
        }}
      />
      <button
        type="submit"
        disabled={loading}
        style={{
          width: "100%",
          padding: "12px",
          backgroundColor: loading ? "#ccc" : "#007bff",
          color: "#fff",
          fontWeight: "bold",
          border: "none",
          borderRadius: "6px",
          cursor: loading ? "not-allowed" : "pointer",
          transition: "background-color 0.2s",
        }}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

export default ContactForm;
