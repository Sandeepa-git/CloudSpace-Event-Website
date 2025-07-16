"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const TshirtFront = "/images/Shirt.png";

// Helper to calculate time left
function getTimeLeft(targetDate: Date) {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();

  if (diff <= 0) return null;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

export default function MerchandiseSection() {
  // Target date: July 16, 2025, 19:00 local time (month index 6 for July)
  const targetDate = new Date(2025, 6, 19, 19, 0, 0);

  const [timeLeft, setTimeLeft] = React.useState(getTimeLeft(targetDate));

  React.useEffect(() => {
    if (!timeLeft) return;

    const timerId = setInterval(() => {
      const newTimeLeft = getTimeLeft(targetDate);
      setTimeLeft(newTimeLeft);

      if (!newTimeLeft) {
        clearInterval(timerId);
      }
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, targetDate]);

  // Show merchandise only after countdown finishes
  if (!timeLeft) {
    return (
      <section>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-4xl font-bold mb-4 text-[#0068FF]">Merchandise Available Now!</h2>
          <div className="mx-auto w-full max-w-[300px] animate-glowPulse">
            <Image
              className="rounded-md object-contain mx-auto"
              src={TshirtFront}
              alt="CloudSpace T-shirt Front"
              width={300}
              height={450}
              priority
            />
          </div>
          <button className="mt-6 rounded-full bg-[#0068FF] px-6 py-3 text-white font-semibold shadow-md hover:bg-[#009FDF] transition duration-300 ease-in-out">
            Order Now
          </button>
        </div>
      </section>
    );
  }

  // Countdown display before launch
  return (
    <section>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#0068FF]">Merchandise Launching Soon!</h2>
        <p className="text-lg text-[#ffffff]/80 mb-12">
          Get ready! Official CloudSpace gear will be available after the countdown.
        </p>

        <div className="flex justify-center gap-8 text-[#0068FF] font-mono text-3xl">
          <div>
            <div className="text-6xl font-bold">{timeLeft.days}</div>
            <div className="text-sm uppercase mt-1">Days</div>
          </div>
          <div>
            <div className="text-6xl font-bold">{String(timeLeft.hours).padStart(2, "0")}</div>
            <div className="text-sm uppercase mt-1">Hours</div>
          </div>
          <div>
            <div className="text-6xl font-bold">{String(timeLeft.minutes).padStart(2, "0")}</div>
            <div className="text-sm uppercase mt-1">Minutes</div>
          </div>
          <div>
            <div className="text-6xl font-bold">{String(timeLeft.seconds).padStart(2, "0")}</div>
            <div className="text-sm uppercase mt-1">Seconds</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes glowPulse {
          0%, 100% {
            box-shadow: 0 0 8px rgba(0, 195, 255, 0.2);
            filter: drop-shadow(0 0 6px rgba(0, 195, 255, 0.2));
          }
          55% {
            box-shadow: 0 0 16px rgba(0, 195, 255, 0.4);
            filter: drop-shadow(0 0 12px rgba(0, 195, 255, 0.4));
          }
        }

        .animate-glowPulse {
          animation: glowPulse 6s ease-in-out infinite;
          border-radius: 0.375rem;
          position: relative;
          background-color: #111827; /* Dark background for better glow visibility */
          padding: 0.25rem;
          display: inline-block;
        }
      `}</style>
    </section>
  );
}
