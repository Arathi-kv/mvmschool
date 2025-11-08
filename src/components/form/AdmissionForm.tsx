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
          email: "school@example.com",
          subject: `Admission Request from ${form.studentName}`,
          message: `
Guardian Name: ${form.guardianName}
Date of Birth: ${form.dob}
Aadhaar Number: ${form.aadharNumber}
Phone Number: ${form.phone}
Address: ${form.address}
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-10">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-extrabold text-blue-900 mb-2">
          Admission Form
        </h2>
        <p className="text-gray-600 text-sm">
          Please fill in all required details to submit your admission request.
        </p>
      </div>

      {/* ✅ Wider form box */}
      <div
        className="bg-white p-8 rounded-2xl shadow-xl w-full"
        style={{ maxWidth: "1000px" }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Two-column layout for first four fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Student Name*
              </label>
              <input
                type="text"
                name="studentName"
                value={form.studentName}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Guardian Name*
              </label>
              <input
                type="text"
                name="guardianName"
                value={form.guardianName}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Date of Birth*
              </label>
              <input
                type="date"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Aadhaar Number*
              </label>
              <input
                type="text"
                name="aadharNumber"
                value={form.aadharNumber}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Phone and Address */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Phone Number*
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Address*
            </label>
            <textarea
              name="address"
              rows={3}
              value={form.address}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            />
          </div>

          {/* ✅ Inline button styles */}
        <button
  type="submit"
  style={{
    width: "40%", // moderate width
    backgroundColor: "#43baff",
    color: "#fff",
    fontWeight: 500,
    fontSize: "14px",
    padding: "10px 0",
    border: "none",
    borderRadius: "0", // no rounded corners
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    display: "block",
    margin: "20px auto 0", // 20px space before button, centered
  }}
  onMouseOver={(e) =>
    (e.currentTarget.style.backgroundColor = "#1593e2")
  }
  onMouseOut={(e) =>
    (e.currentTarget.style.backgroundColor = "#43baff")
  }
>
  Submit Admission Form
</button>


        </form>

        {status && (
          <p
            style={{
              textAlign: "center",
              color: "#374151",
              marginTop: "1rem",
              fontWeight: 500,
            }}
          >
            {status}
          </p>
        )}

        <p
          style={{
            textAlign: "center",
            color: "#6B7280",
            fontSize: "0.875rem",
            marginTop: "1.5rem",
          }}
        >
          *All fields are mandatory. Your details will be kept confidential.
        </p>
      </div>
    </div>
  );
};

export default AdmissionForm;
