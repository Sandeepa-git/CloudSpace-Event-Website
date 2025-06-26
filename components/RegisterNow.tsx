"use client";

import React from "react";
import Link from "next/link";

export default function RegisterNow() {
  return (
    <section
      id="register"
      className="relative z-10 bg-gray-950 py-12 px-4 sm:px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl bg-gray-900/70 border border-[rgba(0,195,255,0.1)] p-6 sm:p-10 shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,195,255,0.3)] backdrop-blur-md animate-fade-in-up">
          {/* Left-aligned Gradient Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-left bg-[linear-gradient(to_right,#00C3FF,#0068FF,#00C3FF)] bg-clip-text text-transparent animate-[gradient_6s_linear_infinite] bg-[length:200%_auto] mb-4">
            Ready to Join the CloudSpace Experience?
          </h2>

          {/* Left-aligned Description */}
          <p className="text-[#D1EAF5]/70 text-base sm:text-lg text-left mb-8">
            Secure your spot and be a part of our transformative cloud journey.
            Register now to reserve your seat for all event phases!
          </p>

          {/* Left-aligned Button */}
          <div className="flex justify-start">
            <Link
              href="/register"
              className="inline-block rounded-full bg-gradient-to-r from-[#00C3FF] to-[#0068FF] px-8 py-3 text-sm sm:text-base font-medium text-white shadow-lg transition hover:scale-105 hover:shadow-xl"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
