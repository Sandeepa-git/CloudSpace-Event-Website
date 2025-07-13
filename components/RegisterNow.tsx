"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function RegisterNow() {
  const [showContent, setShowContent] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-07-13T19:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setShowContent(true);
        return;
      }

      const totalSeconds = Math.floor(diff / 1000);
      const days = Math.floor(totalSeconds / (60 * 60 * 24));
      const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown(); // Run immediately
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
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
              {/* Heading */}
              <h2 className="animate-[gradient_6s_linear_infinite] text-3xl md:text-4xl font-semibold text-transparent bg-gradient-to-r from-[#00C3FF] via-[#0068FF] to-[#00C3FF] bg-[length:200%_auto] bg-clip-text mb-6">
                Ready to Join the CloudSpace Experience?
              </h2>

              {/* Description */}
              <p className="text-[#D1EAF5]/70 text-base sm:text-lg text-left mb-8">
                Secure your spot and be a part of our transformative cloud journey.
                Register now to reserve your seat for all event phases!
              </p>

              {/* Button */}
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
            <>
              <p className="text-3xl font-semibold text-center text-transparent bg-gradient-to-r from-[#00C3FF] via-[#0068FF] to-[#00C3FF] bg-clip-text bg-[length:200%_auto] animate-[gradient_6s_linear_infinite] mb-4">
                Registrations Opening Soon
              </p>

              {/* Countdown */}
              <div className="text-center text-[#00C3FF]/80 font-mono text-sm sm:text-base">
                {`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
              </div>
            </>
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
