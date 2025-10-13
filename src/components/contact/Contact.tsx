import React from "react";
import ContactForm from "@/components/form/ContactForm";

const Contact = () => {
  return (
    <>
      {/* Top Section: Map + Info */}
      <div className="it-contact__area pt-120 pb-120">
        <div className="container">
          <div className="row g-5 align-items-start">
            {/* Left side: Map */}
            <div className="col-xl-6 col-lg-6">
              <div className="it-contact__location">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d62719.79036743412!2d76.00780473026326!3d10.735492920004937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3ba7bf237d6b5f7f%3A0xeacbf498dca297b!2sMVMR%20Higher%20Secondary%20School!3m2!1d10.7353865!2d76.0490679!5e0!3m2!1sen!2sin!4v1758607389722!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0, borderRadius: "10px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Right side: Contact Info */}
            <div className="col-xl-6 col-lg-6">
              <div className="it-contact__right-box p-4 shadow-sm rounded-3 bg-white">
                <div className="it-contact__section-box mb-4">
                  <h4 className="it-section-title mb-3">Get in Touch</h4>
                  <p>
                    We’d love to hear from you! Whether you have questions about
                    admissions, facilities, or general enquiries, our team is here
                    to help.
                  </p>
                </div>

                <div className="it-contact__content mb-4">
                  <h5 className="mb-3">Contact Info</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <div className="it-contact__list">
                        <span>Address</span>
                        <a href="#">
                          Valayamkulam, P.O Kokoor Malappuram, Kerala
                        </a>
                      </div>
                    </li>
                    <li className="mb-2">
                      <div className="it-contact__list">
                        <span>Phone</span>
                        <a href="tel:+919567871424">
                          +91 95678 71424 / +91 75930 78368
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="it-contact__list">
                        <span>Email</span>
                        <a href="mailto:info@mvmrhss.com">info@mvmrhss.com</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Contact Form */}
      <div className="it-contact__form-section pt-100 pb-120 bg-light">
        <div className="container">
          <div className="text-center mb-50">
            <h3 className="it-section-title mb-3">Send Us a Message</h3>
            <p className="text-muted">
              Have any questions? Fill out the form below and we’ll get back to you soon.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="it-contact__form-box p-4 shadow-sm bg-white rounded-3">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
