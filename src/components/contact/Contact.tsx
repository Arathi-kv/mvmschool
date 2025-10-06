

import React from 'react';

const Contact = () => {
  return (
    <>
      <div className="it-contact__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
            <div className="it-contact__location">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d62719.79036743412!2d76.00780473026326!3d10.735492920004937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3ba7bf237d6b5f7f%3A0xeacbf498dca297b!2sMVMR%20Higher%20Secondary%20School%20P2PX%2B5J6%20Valayamkulam%20Kokkur%2C%20Kerala%20679591!3m2!1d10.735386499999999!2d76.0490679!5e0!3m2!1sen!2sin!4v1758607389722!5m2!1sen!2sin"
                width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe></div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="it-contact__right-box">
                <div className="it-contact__section-box pb-20">
                  <h4 className="it-section-title pb-15">Get in Touch</h4>
                  <p>We’d love to hear from you! Whether you have questions about admissions, facilities, or general enquiries, our team is here to help. Reach out to us through phone, email, or by visiting our campus directly. </p>
                </div>
                <div className="it-contact__content">
                  <h5>Contact Info</h5>
                  <ul>
                    <li>
                      <div className="it-contact__list">
                        <span>Address</span>
                        <a href="#">Valayamkulam,
                            P.O Kokoor Malappuram ,
                            Kerala</a>
                      </div>
                    </li>
                    <li>
                      <div className="it-contact__list">
                        <span>Phone</span>
                        <a href="tel:+919567871424">+919567871424  +917593078368</a>
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
    </>
  );
};

export default Contact;