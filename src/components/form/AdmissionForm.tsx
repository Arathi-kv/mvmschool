"use client"
import React, { useState } from 'react';

const AdmissionForm: React.FC = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    guardianName: "",
    dob: "",
    aadhar: "",
    phone: "",
    address: "",
  });

  // Properly type the change event
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Properly type the submit event
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwfkD29bCkzglZa9-C5cqkX78IRV1QAkahluLh-e6uFweV3rvajey8G5KJXBUi98QdH/exec", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.result === "success") {
        alert("Admission form submitted successfully!");
        setFormData({
          studentName: "",
          guardianName: "",
          dob: "",
          aadhar: "",
          phone: "",
          address: "",
        });
      } else {
        alert("Error submitting form.");
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting form.");
    }
  };

  return (
    <div className="it-contact__form-box pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="it-contact-2__color-2">
              <div className="it-contact-2__text pb-30">
                <h5 className="it-contact-2__title-sm text-black">Admission Form</h5>
                <p>Required fields are marked *</p>
              </div>

              <div className="it-contact-2__form-box">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                      <div className="it-contact-2__input">
                        <input
                          type="text"
                          name="studentName"
                          placeholder="Student Name*"
                          required
                          style={{ color: "black" }}
                          value={formData.studentName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                      <div className="it-contact-2__input">
                        <input
                          type="text"
                          name="guardianName"
                          placeholder="Guardian Name*"
                          required
                          style={{ color: "black" }}
                          value={formData.guardianName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                      <div className="it-contact-2__input">
                        <input
                          type="date"
                          name="dob"
                          placeholder="Date of Birth*"
                          required
                          style={{ color: "black" }}
                          value={formData.dob}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                      <div className="it-contact-2__input">
                        <input
                          type="text"
                          name="aadhar"
                          placeholder="Aadhar Card Number*"
                          required
                          style={{ color: "black" }}
                          value={formData.aadhar}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-12">
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
                          name="address"
                          placeholder="Address*"
                          required
                          style={{ color: "black" }}
                          value={formData.address}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>

                  </div>
                  <button type="submit" className="it-btn hover-2">
                    <span>Submit Admission Form</span>
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

export default AdmissionForm;
