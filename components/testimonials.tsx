"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const TshirtFront = "/images/Shirt.png";
const launchTime = new Date(2025, 6, 19, 10, 0, 0); // July 19, 2025 10:00 AM

export default function MerchandiseSection() {
  const [isClient, setIsClient] = useState(false);
  const [isLive, setIsLive] = useState(false);
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
      const diff = launchTime.getTime() - now.getTime();

      if (diff <= 0) {
        setIsLive(true);
        setTimeLeft(null);
        return;
      }

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
    <section id="testimonials" className="bg-black text-white py-16 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {!isLive && timeLeft ? (
          <>
            <a
              href="https://forms.gle/SU6sUYjCqR1XzAWv5"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-[gradient_6s_linear_infinite] text-3xl md:text-4xl font-semibold text-transparent bg-gradient-to-r from-[#00C3FF] via-[#0068FF] to-[#00C3FF] bg-[length:200%_auto] bg-clip-text inline-block mb-2"
            >
              Merchandise Dropping Soon!
            </a>
            <p className="text-xl sm:text-2xl font-medium mb-8 text-gray-300">
              Launching in
            </p>
            <div className="flex gap-4 sm:gap-6 justify-center text-2xl sm:text-3xl font-bold">
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
            <a
              href="https://forms.gle/SU6sUYjCqR1XzAWv5"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-[gradient_6s_linear_infinite] text-3xl md:text-4xl font-semibold text-transparent bg-gradient-to-r from-[#00C3FF] via-[#0068FF] to-[#00C3FF] bg-[length:200%_auto] bg-clip-text inline-block mb-6"
            >
              Merchandise Available Now!
            </a>

            <div className="w-full max-w-[300px] mb-6 animate-glowEdge">
              <Image
                src={TshirtFront}
                alt="CloudSpace T-shirt Front"
                width={300}
                height={450}
                className="rounded-md object-contain w-full h-auto"
                priority
              />
            </div>

            <a
              href="https://forms.gle/SU6sUYjCqR1XzAWv5"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#0068FF] text-white font-semibold shadow-md hover:bg-[#009FDF] transition duration-300"
            >
              Order Now
            </a>
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes glowEdge {
          0%,
          100% {
            filter: drop-shadow(0 0 2px rgba(0, 195, 255, 0.5))
              drop-shadow(0 0 4px rgba(0, 195, 255, 0.4))
              drop-shadow(0 0 6px rgba(0, 195, 255, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 4px rgba(0, 195, 255, 0.5))
              drop-shadow(0 0 8px rgba(0, 195, 255, 0.4))
              drop-shadow(0 0 10px rgba(0, 195, 255, 0.3));
          }
        }

        .animate-glowEdge {
          animation: glowEdge 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
