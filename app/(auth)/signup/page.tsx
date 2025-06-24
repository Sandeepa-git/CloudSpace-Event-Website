"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabase = createClient(
  "https://dbcszijifmlkqyafomnu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRiY3N6aWppZm1sa3F5YWZvbW51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3NjQ3NTYsImV4cCI6MjA2NjM0MDc1Nn0.FfPOF322XTm9O3A4oXqcq5br3yc7IKuLFYcANQWvw-o"
);

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  university: string;
  otherUniversity: string;
  year: string;
  whatsapp: string;
};

type Errors = {
  [K in keyof FormData]: string;
};

const universities = [
  // Your universities list here ...
  "SLTC Research University",
  "University of Colombo",
  "University of Peradeniya",
  "University of Sri Jayewardenepura",
  "University of Moratuwa",
  "University of Kelaniya",
  "University of Jaffna",
  "Rajarata University of Sri Lanka",
  "University of Ruhuna",
  "Univercity of Jaffna",
  "University of Vauniya",
  "University of Visual & Performing Arts",
  "University of the Wayamba",
  "University of Sabaragamuwa",
  "Uwa Wellassa University",
  "University of Eastern",
  "South Eastern University of Sri Lanka",
  "Open University of Sri Lanka",
  "General Sir John Kotelawala Defence University",
  "Sri Lanka Institute of Information Technology (SLIIT)",
  "NSBM Green University",
  "Asia Pacific Institute of Information Technology (APIIT)",
  "Informatics Institute of Technology (IIT)",
  "ESOFT Metro Campus",
  "National Institute of Business Management (NIBM)",
  "Horizon Campus",
  "American National College",
  "SAITM (South Asian Institute of Technology and Medicine)",
  "Royal Institute International",
  "Colombo International Nautical & Engineering College (CINEC)",
  "American College of Higher Education (ACHE)",
  "Institute of Chartered Accountants of Sri Lanka (CA Sri Lanka)",
  // Add more as needed
];

const academicYears = ["1st Year", "2nd Year", "3rd Year", "4th Year"];

export default function SignUp() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    university: "",
    otherUniversity: "",
    year: "",
    whatsapp: "",
  });

  const [errors, setErrors] = useState<Errors>({
    firstName: "",
    lastName: "",
    email: "",
    university: "",
    otherUniversity: "",
    year: "",
    whatsapp: "",
  });

  const [successMessage, setSuccessMessage] = useState<string>("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[A-Za-z]+$/; // Letters only
  const phoneRegex = /^\+?\d+$/;

  const validate = (): boolean => {
    let valid = true;
    const newErrors: Errors = {
      firstName: "",
      lastName: "",
      email: "",
      university: "",
      otherUniversity: "",
      year: "",
      whatsapp: "",
    };

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
      valid = false;
    } else if (!nameRegex.test(formData.firstName)) {
      newErrors.firstName = "First Name must contain only letters";
      valid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
      valid = false;
    } else if (!nameRegex.test(formData.lastName)) {
      newErrors.lastName = "Last Name must contain only letters";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
      valid = false;
    }

    // University validation:
    if (!formData.university) {
      newErrors.university = "University is required";
      valid = false;
    } else if (formData.university === "Other" && !formData.otherUniversity.trim()) {
      newErrors.otherUniversity = "Please enter your university name";
      valid = false;
    }

    if (!formData.year.trim()) {
      newErrors.year = "Academic Year is required";
      valid = false;
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "WhatsApp Number is required";
      valid = false;
    } else if (!phoneRegex.test(formData.whatsapp)) {
      newErrors.whatsapp =
        "WhatsApp number must contain only numbers, optionally starting with +";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSuccessMessage("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage("");
    if (!validate()) return;

    // If university is 'Other', submit the otherUniversity value
    const universityToSubmit =
      formData.university === "Other" ? formData.otherUniversity.trim() : formData.university;

    try {
      const { error } = await supabase.from("Cloudspace Registration").insert([
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          university: universityToSubmit,
          year: formData.year,
          whatsapp: formData.whatsapp,
        },
      ]);

      if (error) {
        alert("Failed to save data: " + error.message);
      } else {
        setSuccessMessage(
          "Registration successful! You can now go back to home."
        );
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          university: "",
          otherUniversity: "",
          year: "",
          whatsapp: "",
        });
        setErrors({
          firstName: "",
          lastName: "",
          email: "",
          university: "",
          otherUniversity: "",
          year: "",
          whatsapp: "",
        });
      }
    } catch (error: any) {
      alert("An error occurred: " + error.message);
    }
  };

  const fields = [
    { label: "First Name", id: "firstName", type: "text", autoComplete: "given-name" },
    { label: "Last Name", id: "lastName", type: "text", autoComplete: "family-name" },
    { label: "Email", id: "email", type: "email", autoComplete: "email" },
    {
      label: "WhatsApp Number",
      id: "whatsapp",
      type: "tel",
      autoComplete: "tel",
      placeholder: "e.g. +94XXXXXXXXX",
    },
  ];

  return (
    <section className="bg-[#000000] text-white min-h-screen flex items-center justify-center">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#00C3FF,#0068FF,#00C3FF)] bg-[length:200%_auto] bg-clip-text text-transparent font-nacelle text-3xl font-semibold md:text-4xl">
              Claim Your Seat
            </h1>
          </div>

          {successMessage && (
            <div className="mb-6 rounded bg-green-700 p-4 text-center text-white">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mx-auto max-w-[400px]" noValidate>
            <div className="space-y-5">
              {fields.map(({ label, id, type, autoComplete, placeholder }) => (
                <div key={id}>
                  <label
                    htmlFor={id}
                    className="mb-1 block text-sm font-medium text-[#00C3FF]/70"
                  >
                    {label} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id={id}
                    name={id}
                    type={type}
                    value={formData[id as keyof FormData]}
                    onChange={handleChange}
                    className={`form-input w-full rounded-lg bg-gray-800 text-white border ${
                      errors[id as keyof FormData]
                        ? "border-red-500"
                        : "border-[#00C3FF]/30 focus:border-[#00C3FF]"
                    }`}
                    placeholder={placeholder || `Your ${label.toLowerCase()}`}
                    required
                    autoComplete={autoComplete}
                  />
                  {errors[id as keyof FormData] && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors[id as keyof FormData]}
                    </p>
                  )}
                </div>
              ))}

              {/* University Dropdown */}
              <div>
                <label
                  htmlFor="university"
                  className="mb-1 block text-sm font-medium text-[#00C3FF]/70"
                >
                  University <span className="text-red-500">*</span>
                </label>
                <select
                  id="university"
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  className={`form-select w-full rounded-lg bg-gray-800 text-white border ${
                    errors.university
                      ? "border-red-500"
                      : "border-[#00C3FF]/30 focus:border-[#00C3FF]"
                  }`}
                  required
                >
                  <option value="">Select your university</option>
                  {universities.map((uni) => (
                    <option key={uni} value={uni}>
                      {uni}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>
                {errors.university && (
                  <p className="mt-1 text-xs text-red-500">{errors.university}</p>
                )}
              </div>

              {/* Other University Input - show only if "Other" selected */}
              {formData.university === "Other" && (
                <div>
                  <label
                    htmlFor="otherUniversity"
                    className="mb-1 block text-sm font-medium text-[#00C3FF]/70"
                  >
                    Please specify your university <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="otherUniversity"
                    name="otherUniversity"
                    type="text"
                    value={formData.otherUniversity}
                    onChange={handleChange}
                    className={`form-input w-full rounded-lg bg-gray-800 text-white border ${
                      errors.otherUniversity
                        ? "border-red-500"
                        : "border-[#00C3FF]/30 focus:border-[#00C3FF]"
                    }`}
                    placeholder="Enter your university name"
                    required
                    autoComplete="off"
                  />
                  {errors.otherUniversity && (
                    <p className="mt-1 text-xs text-red-500">{errors.otherUniversity}</p>
                  )}
                </div>
              )}

              {/* Academic Year Dropdown */}
              <div>
                <label
                  htmlFor="year"
                  className="mb-1 block text-sm font-medium text-[#00C3FF]/70"
                >
                  Academic Year <span className="text-red-500">*</span>
                </label>
                <select
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className={`form-select w-full rounded-lg bg-gray-800 text-white border ${
                    errors.year
                      ? "border-red-500"
                      : "border-[#00C3FF]/30 focus:border-[#00C3FF]"
                  }`}
                  required
                >
                  <option value="">Select your academic year</option>
                  {academicYears.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                {errors.year && (
                  <p className="mt-1 text-xs text-red-500">{errors.year}</p>
                )}
              </div>
            </div>

            <div className="mt-6 space-y-5">
              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-[#00C3FF] to-[#0068FF] py-2 font-semibold text-white transition hover:opacity-90"
              >
                Register
              </button>

              <div className="text-center">
                <Link
                  href="/"
                  className="text-[#00C3FF] hover:underline mt-4 inline-block cursor-pointer"
                >
                  ← Back to Home
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
