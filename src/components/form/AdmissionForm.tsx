"use client";

import axios from "axios";
import { useState } from "react";
import { SHEET_API_URL } from "./config";

export default function AdmissionForm() {
  const [studentName, setStudentName] = useState("");
  const [guardianName, setGuardianName] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [adhar, setAdhar] = useState("");
  const [studentPhoneNumber, setStudentPhoneNumber] = useState("");

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      Name: studentName,
      Guardian: guardianName,
      Phone: studentPhoneNumber,
      Address: address,
      DOB: dob,
      Adhar: adhar,
    };

    try {
      await axios.post(SHEET_API_URL, data);
      alert("Successfully registered!");

      // Reset form
      setStudentName("");
      setGuardianName("");
      setAddress("");
      setDob("");
      setAdhar("");
      setStudentPhoneNumber("");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleFormSubmit} className="p-4 border rounded shadow-sm bg-light">
        <div className="mb-3">
          <label className="form-label">Student Name *</label>
          <input
            type="text"
            className="form-control"
            placeholder="Student Name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Guardian Name *</label>
          <input
            type="text"
            className="form-control"
            placeholder="Guardian Name"
            value={guardianName}
            onChange={(e) => setGuardianName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Date of Birth *</label>
          <input
            type="date"
            className="form-control"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Adhar Card Number *</label>
          <input
            type="text"
            className="form-control"
            placeholder="Adhar Card Number"
            value={adhar}
            onChange={(e) => setAdhar(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone Number *</label>
          <input
            type="tel"
            className="form-control"
            placeholder="Phone Number"
            value={studentPhoneNumber}
            onChange={(e) => setStudentPhoneNumber(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Address *</label>
          <textarea
            className="form-control"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            rows={4}
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary px-5">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
