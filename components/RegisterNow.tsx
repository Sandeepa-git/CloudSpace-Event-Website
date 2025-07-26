"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

export default function RegisterNow() {
  const [status, setStatus] = useState<"countdown" | "open" | "closed">("countdown");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const openDate = new Date("2025-07-14T19:00:00");
    const closeDate = new Date("2025-07-21T19:00:00");

    const updateCountdown = () => {
      const now = new Date();

      if (now < openDate) {
        const diff = openDate.getTime() - now.getTime();
        const totalSeconds = Math.floor(diff / 1000);
        const days = Math.floor(totalSeconds / (60 * 60 * 24));
        const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        setTimeLeft({ days, hours, minutes, seconds });
        setStatus("countdown");
      } else if (now >= openDate && now <= closeDate) {
        setStatus("open");
      } else {
        setStatus("closed");
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const getHeadingClass = () => {
    switch (status) {
      case "countdown":
        return "bg-gradient-to-r from-[#00C3FF] via-[#0068FF] to-[#00C3FF]";
      case "open":
        return "bg-gradient-to-r from-[#00F2FF] via-[#0096FF] to-[#00F2FF]";
      case "closed":
        return "bg-gradient-to-r from-[#7DD3FC] via-[#60A5FA] to-[#38BDF8]"; // Soft blues
    }
  };

  // SEO metadata
  const title = "Register Now - Join CloudSpace v1.0";
  const description =
    "Registration for CloudSpace v1.0 is opening soon. Secure your spot for the premier cloud computing event organized by IEEE Computer Society SLTC.";
  const url = "https://yourdomain.com/register"; // Replace with your actual URL
  const image = "https://yourdomain.com/images/register-og.png"; // Replace with your social preview image URL

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <section
        id="register"
        className="relative z-10 bg-gray-950 py-12 px-4 sm:px-6 md:px-12 lg:px-24"
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center min-h-[300px]">
          <div
            className="rounded-2xl bg-gray-900/70 border border-[rgba(0,195,255,0.1)] p-6 sm:p-10 shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,195,255,0.3)] backdrop-blur-md animate-float-glow"
            role="region"
            aria-live="polite"
          >
            {status === "open" ? (
              <>
                <h2
                  className={`text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-[length:200%_auto] animate-gradient ${getHeadingClass()} mb-6`}
                >
                  Ready to Join the CloudSpace Experience?
                </h2>
                <p className="text-[#D1EAF5]/70 text-base sm:text-lg mb-8">
                  Secure your spot and be a part of our transformative cloud journey.
                  Register now to reserve your seat for all event phases!
                </p>
                <div className="flex justify-center">
                  <Link
                    href="/signup"
                    className="inline-block rounded-full bg-gradient-to-r from-[#00C3FF] to-[#0068FF] px-8 py-3 text-sm sm:text-base font-medium text-white shadow-lg transition hover:scale-105 hover:shadow-xl"
                    aria-label="Register for CloudSpace event"
                  >
                    Register Now
                  </Link>
                </div>
              </>
            ) : status === "countdown" ? (
              <>
                <p
                  className={`text-3xl font-semibold text-transparent bg-clip-text bg-[length:200%_auto] animate-gradient ${getHeadingClass()} mb-4`}
                >
                  Registrations Opening Soon
                </p>
                <div
                  className="text-[#00C3FF]/80 font-mono text-sm sm:text-base"
                  aria-live="polite"
                  aria-atomic="true"
                  aria-label="Countdown timer"
                >
                  {`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
                </div>
              </>
            ) : (
              <>
                <p
                  className={`text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-[length:200%_auto] animate-gradient ${getHeadingClass()} mb-2`}
                >
                  Registrations Closed
                </p>
                <p className="text-[#D1EAF5]/60 text-base">
                  Thank you for your interest. Stay tuned for future events!
                </p>
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

          @keyframes gradient {
            0%, 100% {
              background-position: 0% center;
            }
            50% {
              background-position: 100% center;
            }
          }

          .animate-gradient {
            animation: gradient 6s ease-in-out infinite;
          }
        `}</style>
      </section>
    </>
  );
}
