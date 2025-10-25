"use client";
import React, { useState, useRef, FormEvent, ChangeEvent } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

interface AdmissionData {
  studentName: string;
  guardianName: string;
  dob: string;
  aadhar: string;
  phone: string;
  address: string;
}

const AdmissionForm: React.FC = () => {
  const [formData, setFormData] = useState<AdmissionData>({
    studentName: "",
    guardianName: "",
    dob: "",
    aadhar: "",
    phone: "",
    address: "",
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
        "service_b8jhths", // Your EmailJS Service ID
        "template_5cv60tb", // Your EmailJS Template ID
        {
          studentName: formData.studentName,
          guardianName: formData.guardianName,
          dob: formData.dob,
          aadhar: formData.aadhar,
          phone: formData.phone,
          address: formData.address,
        },
        "rdpFsDpIb5RAcDe5S" // Your EmailJS Public Key
      );

      toast.success("Admission form submitted successfully!");
      setFormData({
        studentName: "",
        guardianName: "",
        dob: "",
        aadhar: "",
        phone: "",
        address: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send admission form. Try again later.");
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
                <h5 className="it-contact-2__title-sm text-black">Admission Form</h5>
                <p>Required fields are marked *</p>
              </div>

              <div className="it-contact-2__form-box">
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12">
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

                    <div className="col-xl-6 col-lg-6 col-md-6 col-12">
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

                    <div className="col-xl-6 col-lg-6 col-md-6 col-12">
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

                    <div className="col-xl-6 col-lg-6 col-md-6 col-12">
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

                    <div className="col-xl-6 col-lg-6 col-md-6 col-12">
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

                    <div className="col-12">
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

                  <button type="submit" className="it-btn hover-2" disabled={sending}>
                    <span>{sending ? "Submitting..." : "Submit Admission Form"}</span>
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
