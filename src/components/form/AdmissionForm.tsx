"use client";
import React, { useState } from "react";

const AdmissionForm = () => {
  const [form, setForm] = useState({
    studentName: "",
    guardianName: "",
    dob: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        email: form.email,
        subject: `Admission Enquiry from ${form.studentName}`,
        message: `
Guardian Name: ${form.guardianName}
Date of Birth: ${form.dob}
Phone Number: ${form.phone}

Message:
${form.message}
        `,
      }),
    });

    if (res.ok) {
      setStatus("✅ Mail sent successfully!");
      setForm({
        studentName: "",
        guardianName: "",
        dob: "",
        phone: "",
        email: "",
        message: "",
      });
    } else {
      setStatus("❌ Failed to send mail. Try again.");
    }
  } catch (error) {
    console.error(error);
    setStatus("⚠️ Error sending message.");
  }
};

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
      <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800">
        Admission Form
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Student Name
          </label>
          <input
            type="text"
            name="studentName"
            value={form.studentName}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Guardian Name
          </label>
          <input
            type="text"
            name="guardianName"
            value={form.guardianName}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Date of Birth
          </label>
          <input
            type="date"
            name="dob"
            value={form.dob}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Message</label>
          <textarea
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium transition"
        >
          Send Message
        </button>
      </form>

      {status && (
        <p className="text-center text-gray-700 mt-4 font-medium">{status}</p>
      )}
    </div>
  );
};

export default AdmissionForm;
