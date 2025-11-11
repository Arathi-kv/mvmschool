import React from "react";

const Contact: React.FC = () => {
  return (
    <>
       {/* ===== Row 1: Contact Info ===== */}
      <section className="pt-100 pb-50 bg-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Get in Touch</h2>
          <p className="text-muted mb-5 mx-auto" style={{ maxWidth: "700px" }}>
            We’d love to hear from you! Whether you have questions about
            admissions, facilities, or general enquiries, our team is here to
            help.
          </p>

          <div className="row gy-4">
            {/* Address */}
            <div className="col-md-4">
              <div className="border rounded-3 p-4 h-100 shadow-sm">
                <div className="mb-3 text-primary fs-2">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <h5 className="fw-semibold mb-2">Address</h5>
                <p className="text-muted mb-0">
                  Valayamkulam, P.O Kokoor, <br />
                  Malappuram, Kerala
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="col-md-4">
              <div className="border rounded-3 p-4 h-100 shadow-sm">
                <div className="mb-3 text-primary fs-2">
                  <i className="bi bi-telephone"></i>
                </div>
                <h5 className="fw-semibold mb-2">Phone</h5>
                <p className="text-muted mb-0">
                  <a
                    href="tel:+919567871424"
                    className="d-block text-decoration-none text-muted"
                  >
                    +91 95678 71424
                  </a>
                  <a
                    href="tel:+917593078368"
                    className="d-block text-decoration-none text-muted"
                  >
                    +91 75930 78368
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="col-md-4">
              <div className="border rounded-3 p-4 h-100 shadow-sm">
                <div className="mb-3 text-primary fs-2">
                  <i className="bi bi-envelope"></i>
                </div>
                <h5 className="fw-semibold mb-2">Email</h5>
                <a
                  href="mailto:info@mvmrhss.com"
                  className="text-decoration-none text-muted"
                >
                  info@mvmrhss.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Row 2: Google Map ===== */}
      <section className="pb-5 bg-light">

        <div className="container-fluid px-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d62719.79036743412!2d76.00780473026326!3d10.735492920004937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3ba7bf237d6b5f7f%3A0xeacbf498dca297b!2sMVMR%20Higher%20Secondary%20School!3m2!1d10.7353865!2d76.0490679!5e0!3m2!1sen!2sin!4v1758607389722!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="School Location Map"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
