"use client";
import React, { useState } from "react";

const AdmissionForm = () => {
  const [form, setForm] = useState({
    studentName: "",
    guardianName: "",
    dob: "",
    aadharNumber: "",
    phone: "",
    address: "",
    email: "", // ✅ added email field
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.studentName,
          email: form.email, // ✅ send user's email
          subject: `Admission Request from ${form.studentName}`,
          message: `
Guardian Name: ${form.guardianName}
Date of Birth: ${form.dob}
Aadhaar Number: ${form.aadharNumber}
Phone Number: ${form.phone}
Address: ${form.address}
Email: ${form.email}
          `,
        }),
      });

      if (res.ok) {
        setStatus("✅ Form submitted successfully!");
        setForm({
          studentName: "",
          guardianName: "",
          dob: "",
          aadharNumber: "",
          phone: "",
          address: "",
          email: "",
        });
      } else {
        setStatus("❌ Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("⚠️ Error sending data.");
    }
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold text---it-heading-primary">Admission Form</h2>
          <p className="text-muted">
            Please fill in all the required details to submit your admission request.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "900px" }}>
          <div className="row g-4">
            <div className="col-md-6">
              <label className="form-label fw-semibold">Student Name*</label>
              <input
                type="text"
                name="studentName"
                value={form.studentName}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Guardian Name*</label>
              <input
                type="text"
                name="guardianName"
                value={form.guardianName}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Date of Birth*</label>
              <input
                type="date"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Aadhaar Number*</label>
              <input
                type="text"
                name="aadharNumber"
                value={form.aadharNumber}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Phone Number*</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>

            {/* ✅ Email Field */}
            <div className="col-md-6">
              <label className="form-label fw-semibold">Email*</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>

            <div className="col-12">
              <label className="form-label fw-semibold">Address*</label>
              <textarea
                name="address"
                rows={3}
                value={form.address}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>
          </div>

          <div className="text-center mt-4">
            <button
              type="submit"
              className="btn px-5 py-2 fw-semibold"
              style={{
                backgroundColor: "#43baff",
                color: "#fff",
                border: "none",
                width: "40%",
                minWidth: "180px",
              }}
            >
              Submit
            </button>
          </div>

          {status && (
            <p className="text-center mt-3 fw-semibold text-secondary">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default AdmissionForm;
