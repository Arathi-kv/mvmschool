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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);

    try {
      await emailjs.send(
        "service_b8jhths", // Your EmailJS Service ID
        "template_5cv60tb", // Your EmailJS Template ID
        formData,
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
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Admission Form</h2>
          <p className="text-muted">
            Please fill in all required details to submit your admission request.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-lg rounded-4">
              <div className="card-body p-4 p-md-5">
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="row g-4">
                    {/* Student Name */}
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Student Name*</label>
                      <input
                        type="text"
                        name="studentName"
                        className="form-control"
                        required
                        value={formData.studentName}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Guardian Name */}
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Guardian Name*</label>
                      <input
                        type="text"
                        name="guardianName"
                        className="form-control"
                        required
                        value={formData.guardianName}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Date of Birth */}
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Date of Birth*</label>
                      <input
                        type="date"
                        name="dob"
                        className="form-control"
                        required
                        value={formData.dob}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Aadhar */}
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Aadhar Number*</label>
                      <input
                        type="text"
                        name="aadhar"
                        className="form-control"
                        required
                        value={formData.aadhar}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Phone */}
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Phone Number*</label>
                      <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Address */}
                    <div className="col-12">
                      <label className="form-label fw-semibold">Address*</label>
                      <textarea
                        name="address"
                        className="form-control"
                        rows={3}
                        required
                        value={formData.address}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center mt-4">
                    <button
                      type="submit"
                      className="btn btn-primary px-5 py-2 rounded-pill"
                      disabled={sending}
                    >
                      {sending ? "Submitting..." : "Submit Admission Form"}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <p className="text-center text-muted mt-4 small">
              *All fields are mandatory. Your details will be kept confidential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionForm;
