"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const TshirtFront = "/images/Shirt.png";
const launchTime = new Date(2025, 6, 19, 10, 0, 0); // July 19, 2025 10:00 AM
const closeTime = new Date(2025, 6, 25, 23, 59, 59); // July 25, 2025 11:59 PM

export default function MerchandiseSection() {
  const [isClient, setIsClient] = useState(false);
  const [isLive, setIsLive] = useState(false);
  const [ordersClosed, setOrdersClosed] = useState(false);
  const [timeLeft, setTimeLeft] = useState<null | {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>(null);

  useEffect(() => {
    setIsClient(true);

    const updateTimer = () => {
      const now = new Date();

      if (now >= closeTime) {
        setIsLive(false);
        setOrdersClosed(true);
        setTimeLeft(null);
        return;
      }

      if (now >= launchTime) {
        setIsLive(true);
        setOrdersClosed(false);
        setTimeLeft(null);
        return;
      }

      const diff = launchTime.getTime() - now.getTime();
      setIsLive(false);
      setOrdersClosed(false);
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!isClient) return null;

  return (
    <section
      id="merchandise"
      aria-label="CloudSpace Merchandise"
      className="bg-black text-white py-16 px-4"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {ordersClosed ? (
          <>
            <h2
              className="animate-[gradient_6s_linear_infinite] text-3xl md:text-4xl font-semibold text-transparent bg-gradient-to-r from-[#00C3FF] via-[#0068FF] to-[#00C3FF] bg-[length:200%_auto] bg-clip-text mb-6"
              tabIndex={0}
            >
              Orders Are Now Closed
            </h2>
            <p className="text-lg sm:text-xl text-gray-400">
              Thanks for your support! Stay tuned for future drops.
            </p>
          </>
        ) : !isLive && timeLeft ? (
          <>
            <h2
              className="animate-[gradient_6s_linear_infinite] text-3xl md:text-4xl font-semibold text-transparent bg-gradient-to-r from-[#00C3FF] via-[#0068FF] to-[#00C3FF] bg-[length:200%_auto] bg-clip-text mb-2"
              tabIndex={0}
            >
              Merchandise Dropping Soon!
            </h2>
            <p className="text-xl sm:text-2xl font-medium mb-8 text-gray-300">
              Launching in
            </p>
            <div
              role="timer"
              aria-live="polite"
              className="flex gap-4 sm:gap-6 justify-center text-2xl sm:text-3xl font-bold"
            >
              <div className="flex flex-col items-center">
                <span>{timeLeft.days}</span>
                <span className="text-sm sm:text-base">Days</span>
              </div>
              <div className="flex flex-col items-center">
                <span>{timeLeft.hours}</span>
                <span className="text-sm sm:text-base">Hours</span>
              </div>
              <div className="flex flex-col items-center">
                <span>{timeLeft.minutes}</span>
                <span className="text-sm sm:text-base">Minutes</span>
              </div>
              <div className="flex flex-col items-center">
                <span>{timeLeft.seconds}</span>
                <span className="text-sm sm:text-base">Seconds</span>
              </div>
            </div>
          </>
        ) : (
          <>
            <h2
              className="animate-[gradient_6s_linear_infinite] text-3xl md:text-4xl font-semibold text-transparent bg-gradient-to-r from-[#00C3FF] via-[#0068FF] to-[#00C3FF] bg-[length:200%_auto] bg-clip-text mb-6"
              tabIndex={0}
            >
              Merchandise Available Now!
            </h2>

            <div
              className="relative group mb-4 w-full max-w-[320px] mx-auto"
              aria-label="CloudSpace T-shirt"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00C3FF]/30 via-[#0068FF]/20 to-[#00C3FF]/30 blur-2xl animate-pulse scale-[1.15] z-0" />
              <div className="relative z-10 rounded-xl overflow-hidden cursor-pointer transform transition-transform duration-700 hover:scale-105 animate-float-rotate-soft">
                <Image
                  src={TshirtFront}
                  alt="CloudSpace T-shirt Front View"
                  width={320}
                  height={480}
                  className="object-contain w-full h-auto rounded-xl relative z-20"
                  priority
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-20 animate-shiny-gradient-soft mix-blend-screen z-30"
                />
              </div>
            </div>

            <p className="text-white text-lg sm:text-xl font-semibold mb-8 max-w-xl leading-snug">
              Suit up, show up and stand out in CloudSpace flex. Grab yours now!
            </p>

            <a
              href="https://forms.gle/SU6sUYjCqR1XzAWv5"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#0068FF] text-white font-semibold shadow-md hover:bg-[#009FDF] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#00C3FF]"
            >
              Order Now
            </a>
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes floatRotateSoft {
          0% {
            transform: translateY(0) rotateY(0deg);
          }
          50% {
            transform: translateY(-8px) rotateY(8deg);
          }
          100% {
            transform: translateY(0) rotateY(0deg);
          }
        }

        @keyframes shinyGradientSoft {
          0% {
            background-position: -150% 0;
          }
          100% {
            background-position: 150% 0;
          }
        }

        .animate-float-rotate-soft {
          animation: floatRotateSoft 8s ease-in-out infinite;
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }

        .animate-shiny-gradient-soft {
          background-size: 150% 100%;
          animation: shinyGradientSoft 5s linear infinite;
        }
      `}</style>
    </section>
  );
}
