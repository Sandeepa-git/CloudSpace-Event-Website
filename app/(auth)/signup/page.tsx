"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabase = createClient(
  "https://dbcszijifmlkqyafomnu.supabase.co", // replace with your project URL
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRiY3N6aWppZm1sa3F5YWZvbW51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3NjQ3NTYsImV4cCI6MjA2NjM0MDc1Nn0.FfPOF322XTm9O3A4oXqcq5br3yc7IKuLFYcANQWvw-o"                 // replace with your anon key
);

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  university: string;
  year: string;
  whatsapp: string;
};

type Errors = {
  [K in keyof FormData]: string;
};

export default function SignUp() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    university: "",
    year: "",
    whatsapp: "",
  });

  const [errors, setErrors] = useState<Errors>({
    firstName: "",
    lastName: "",
    email: "",
    university: "",
    year: "",
    whatsapp: "",
  });

  const [successMessage, setSuccessMessage] = useState<string>("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?\d{7,15}$/;

  const validate = (): boolean => {
    let valid = true;
    const newErrors: Errors = {
      firstName: "",
      lastName: "",
      email: "",
      university: "",
      year: "",
      whatsapp: "",
    };

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
      valid = false;
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
      valid = false;
    }
    if (!formData.university.trim()) {
      newErrors.university = "University is required";
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
      newErrors.whatsapp = "Invalid WhatsApp number";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSuccessMessage("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage("");
    if (!validate()) return;

    try {
      const { error } = await supabase.from("Cloudspace Registration").insert([
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          university: formData.university,
          year: formData.year,
          whatsapp: formData.whatsapp,
        },
      ]);

      if (error) {
        alert("Failed to save data: " + error.message);
      } else {
        setSuccessMessage("Registration successful! You can now go back to home.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          university: "",
          year: "",
          whatsapp: "",
        });
        setErrors({
          firstName: "",
          lastName: "",
          email: "",
          university: "",
          year: "",
          whatsapp: "",
        });
      }
    } catch (error: any) {
      alert("An error occurred: " + error.message);
    }
  };

  const fields: {
    label: string;
    id: keyof FormData;
    type: string;
    autoComplete: string;
    placeholder?: string;
  }[] = [
    { label: "First Name", id: "firstName", type: "text", autoComplete: "given-name" },
    { label: "Last Name", id: "lastName", type: "text", autoComplete: "family-name" },
    { label: "Email", id: "email", type: "email", autoComplete: "email" },
    { label: "University", id: "university", type: "text", autoComplete: "organization" },
    { label: "Academic Year", id: "year", type: "text", autoComplete: "off", placeholder: "e.g. 1st Year, 2nd Year" },
    { label: "WhatsApp Number", id: "whatsapp", type: "tel", autoComplete: "tel", placeholder: "e.g. +94XXXXXXXXX" },
  ];

  return (
    <section className="bg-[#000000] text-white min-h-screen flex items-center justify-center">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#00C3FF,#0068FF,#00C3FF)] bg-[length:200%_auto] bg-clip-text text-transparent font-nacelle text-3xl font-semibold md:text-4xl">
              Create an account
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
                    value={formData[id]}
                    onChange={handleChange}
                    className={`form-input w-full rounded-lg bg-gray-800 text-white border ${
                      errors[id]
                        ? "border-red-500"
                        : "border-[#00C3FF]/30 focus:border-[#00C3FF]"
                    }`}
                    placeholder={placeholder || `Your ${label.toLowerCase()}`}
                    required
                    autoComplete={autoComplete}
                  />
                  {errors[id] && (
                    <p className="mt-1 text-xs text-red-500">{errors[id]}</p>
                  )}
                </div>
              ))}
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
