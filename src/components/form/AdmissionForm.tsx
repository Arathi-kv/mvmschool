"use client";

import axios from "axios";
import { useState } from "react";
import { SHEET_API_URL } from "./config"; // make sure this is defined

export default function AdmissionForm() {
  const [studentName, setStudentName] = useState("");
  const [guardianName, setGuardianName] = useState("");
  const [adress, setAdress] = useState("");
  const [dob, setDob] = useState("");
  const [Adhar, setAdhar] = useState("");
  const [studentPhoneNumber, setStudentPhoneNumber] = useState("");

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const data = {
    Name: studentName,
    Gardion: guardianName, // keeping old spelling
    Phone: studentPhoneNumber,
    Adress: adress,
    DOB: dob,
    Adhar: Adhar,
  };

  try {
    await axios.post(SHEET_API_URL, data);
    alert("Successfully registered!");

    // Reset form
    setStudentName("");
    setGuardianName("");
    setAdress("");
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
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Student Name *"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Guardian Name *"
            value={guardianName}
            onChange={(e) => setGuardianName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="date"
            className="form-control"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Adhar Card Number *"
            value={Adhar}
            onChange={(e) => setAdhar(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="tel"
            className="form-control"
            placeholder="Phone Number *"
            value={studentPhoneNumber}
            onChange={(e) => setStudentPhoneNumber(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Address *"
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
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
