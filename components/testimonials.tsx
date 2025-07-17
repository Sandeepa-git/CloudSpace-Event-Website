"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const TshirtFront = "/images/Shirt.png";

// July 16, 2025 at 7:00 PM (local time)
const launchTime = new Date(2025, 6, 19, 10, 0, 0);

export default function MerchandiseSection() {
  const [isLive, setIsLive] = useState<boolean>(false);

  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      if (now >= launchTime) {
        setIsLive(true);
      }
    };

    checkTime(); // check immediately

    const timer = setInterval(checkTime, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!isLive) return null;

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#0068FF]">
          Merchandise Available Now!
        </h2>

        <div className="w-full max-w-[300px] animate-glowPulse mb-6">
          <Image
            src={TshirtFront}
            alt="CloudSpace T-shirt Front"
            width={300}
            height={450}
            className="rounded-md object-contain w-full h-auto"
            priority
          />
        </div>

        <button className="px-6 py-3 rounded-full bg-[#0068FF] text-white font-semibold shadow-md hover:bg-[#009FDF] transition duration-300">
          Order Now
        </button>
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
          background-color: #111827;
          padding: 0.25rem;
          border-radius: 0.5rem;
          display: inline-block;
        }
      `}</style>
    </section>
  );
}
