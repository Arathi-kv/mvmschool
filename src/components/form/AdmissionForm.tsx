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
    <form onSubmit={handleFormSubmit} className="admission-form">
      <div>
        <input
          type="text"
          placeholder="Student Name *"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          required
        />
      </div><br></br>
      <div>
        <input
          type="text"
          placeholder="Guardian Name *"
          value={guardianName}
          onChange={(e) => setGuardianName(e.target.value)}
          required
        />
      </div><br></br>
      <div>
        <input
          type="date"
          placeholder="DOB *"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />
      </div><br></br>
      <div>
        <input
          type="text"
          placeholder="Adhar card number *"
          value={adhar}
          onChange={(e) => setAdhar(e.target.value)}
          required
        />
      </div><br></br>
      <div>
        <input
          type="tel"
          placeholder="Phone Number *"
          value={studentPhoneNumber}
          onChange={(e) => setStudentPhoneNumber(e.target.value)}
          required
        />
      </div><br></br>
   <div>
  <textarea
    placeholder="Address"
    value={address}
    onChange={(e) => setAddress(e.target.value)}
    required
    style={{ height: "107px" }}
  />
</div>
<br></br>
      <div className="col-12">
  <button
    type="submit"
    style={{
      backgroundColor: "#43baff",
      color: "#fff",              
      padding: "10px 20px",
      border: "none",
      cursor: "pointer",
    }}
  >
    Submit
  </button>
</div>

    </form>
  );
}
