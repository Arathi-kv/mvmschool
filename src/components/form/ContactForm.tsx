"use client";
import React, { useState, useRef, FormEvent, ChangeEvent } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);

    try {
      await emailjs.send(
        "service_d59q71c", // Your EmailJS Service ID
        "template_zm0dgv8", // Your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "rdpFsDpIb5RAcDe5S" // Your EmailJS Public Key
      );

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message. Try again later.");
    } finally {
      setSending(false);
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
                <form ref={formRef} onSubmit={handleSubmit}>
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
                  <button type="submit" className="it-btn hover-2" disabled={sending}>
                    <span>{sending ? "Sending..." : "Send Your Message"}</span>
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
