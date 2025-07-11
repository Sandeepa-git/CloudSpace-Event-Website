"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function RegisterNow() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const now = new Date();
    const targetDate = new Date("2025-07-14T00:00:00"); // Target date and time at midnight

    if (now >= targetDate) {
      setShowContent(true);
    }
  }, []);

  return (
    <section
      id="register"
      className="relative z-10 bg-gray-950 py-12 px-4 sm:px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl bg-gray-900/70 border border-[rgba(0,195,255,0.1)] p-6 sm:p-10 shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,195,255,0.3)] backdrop-blur-md animate-float-glow">
          {showContent ? (
            <>
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
                  href="/signup"
                  className="inline-block rounded-full bg-gradient-to-r from-[#00C3FF] to-[#0068FF] px-8 py-3 text-sm sm:text-base font-medium text-white shadow-lg transition hover:scale-105 hover:shadow-xl"
                >
                  Register Now
                </Link>
              </div>
            </>
          ) : (
            <p className="text-xl text-center text-white">
              Registrations Opening Soon
            </p>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes floatGlowSubtle {
          0%, 100% {
            transform: translateY(0) scale(1);
            box-shadow: 0 0 4px rgba(0, 195, 255, 0.1);
            filter: drop-shadow(0 0 2px rgba(0, 195, 255, 0.1));
          }
          50% {
            transform: translateY(-6px) scale(1.01);
            box-shadow: 0 0 12px rgba(0, 195, 255, 0.2);
            filter: drop-shadow(0 0 6px rgba(0, 195, 255, 0.2));
          }
        }

        .animate-float-glow {
          animation: floatGlowSubtle 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
