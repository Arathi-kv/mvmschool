"use client";
import React, { useState } from "react";

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
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const dataToSend = {
      Name: formData.studentName,
      Gardion: formData.guardianName,
      DOB: formData.dob,
      Adhar: formData.aadhar,
      Phone: formData.phone,
      Adress: formData.address,
    };

    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/aef03dc8-ef15-48e0-b6bb-ea7881275f7d",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataToSend),
        }
      );

      if (res.ok) {
        alert("Successfully registered!");
        setFormData({
          studentName: "",
          guardianName: "",
          dob: "",
          aadhar: "",
          phone: "",
          address: "",
        });
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting form!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="it-contact__form-box">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="row">
          <div className="col-12 mb-3">
            <input
              type="text"
              name="studentName"
              placeholder="Student Name*"
              required
              value={formData.studentName}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="col-12 mb-3">
            <input
              type="text"
              name="guardianName"
              placeholder="Guardian Name*"
              required
              value={formData.guardianName}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="col-12 mb-3">
            <input
              type="date"
              name="dob"
              placeholder="Date of Birth*"
              required
              value={formData.dob}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="col-12 mb-3">
            <input
              type="text"
              name="aadhar"
              placeholder="Aadhar*"
              required
              value={formData.aadhar}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="col-12 mb-3">
            <input
              type="tel"
              name="phone"
              placeholder="Phone*"
              required
              value={formData.phone}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="col-12 mb-3">
            <textarea
              name="address"
              placeholder="Address*"
              required
              value={formData.address}
              onChange={handleChange}
              className="form-control"
              rows={4}
            />
          </div>

          <div className="col-12">
            <button type="submit" className="it-btn hover-2" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
