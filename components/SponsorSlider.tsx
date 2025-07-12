"use client";

import React, { useEffect, useState, useRef } from "react";

const sponsors = [
  { src: "/images/awsdevgr.png", name: "" },
];

export default function SponsorSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sponsors.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 50) {
      setCurrentIndex((prev) =>
        diff > 0
          ? prev === 0
            ? sponsors.length - 1
            : prev - 1
          : (prev + 1) % sponsors.length
      );
    }
    touchStartX.current = null;
  };

  return (
    <section className="w-full bg-[#0B0F19] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">

        {/* Gradient Heading */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-[#00C3FF80]" />
          <h2 className="animate-[gradient_6s_linear_infinite] text-2xl sm:text-3xl md:text-4xl font-semibold text-transparent bg-gradient-to-r from-[#00C3FF] via-[#0068FF] to-[#00C3FF] bg-[length:200%_auto] bg-clip-text">
            Our Knowledge Partners
          </h2>
          <div className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-[#00C3FF80]" />
        </div>

        {/* Slider Container */}
        <div
          className="relative w-full h-[160px] sm:h-[200px] flex items-center justify-center overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <img
                src={sponsor.src}
                alt={sponsor.name || `Sponsor ${index + 1}`}
                className="object-contain mx-auto animate-glow"
                style={{
                  width: "80vw",        // Responsive width
                  maxWidth: "320px",    // Max for larger screens
                  height: "auto",
                }}
              />
              {sponsor.name && (
                <p className="mt-4 text-white text-sm sm:text-base font-medium">
                  {sponsor.name}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Glow Animation */}
      <style jsx>{`
        @keyframes glowPulse {
          0% {
            filter: drop-shadow(0 0 3px rgba(0, 195, 255, 0.25)) drop-shadow(0 0 4px rgba(0, 104, 255, 0.2));
          }
          50% {
            filter: drop-shadow(0 0 6px rgba(0, 195, 255, 0.35)) drop-shadow(0 0 8px rgba(0, 104, 255, 0.3));
          }
          100% {
            filter: drop-shadow(0 0 3px rgba(0, 195, 255, 0.25)) drop-shadow(0 0 4px rgba(0, 104, 255, 0.2));
          }
        }

        .animate-glow {
          animation: glowPulse 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
