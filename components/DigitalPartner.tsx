"use client";

import { useEffect, useState } from "react";

const sponsors = ["/images/media.png"];

export default function SponsorSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    const now = new Date();
    const showFrom = new Date("2025-07-15T19:00:00");

    if (now >= showFrom) {
      setShowSlider(true);
    }
  }, []);

  useEffect(() => {
    if (!showSlider) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sponsors.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [showSlider]);

  if (!showSlider) return null;

  return (
    <section className="w-full bg-[#0B0F19] py-16 px-4 sm:px-6 lg:px-8" aria-label="Official Media Partner Slider">
      <div className="max-w-5xl mx-auto text-center">
        {/* Gradient Lines + Heading */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#00C3FF80]" />
          <h2 className="animate-[gradient_6s_linear_infinite] text-3xl md:text-4xl font-semibold text-transparent bg-gradient-to-r from-[#00C3FF] via-[#0068FF] to-[#00C3FF] bg-[length:200%_auto] bg-clip-text">
            Official Media Partner
          </h2>
          <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#00C3FF80]" />
        </div>

        {/* Image Slider */}
        <div className="relative w-full h-[350px] flex items-center justify-center overflow-hidden">
          {sponsors.map((src, index) => (
            <div
              key={index}
              className={`absolute transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              } flex flex-col items-center`}
              aria-hidden={index !== currentIndex}
            >
              <img
                src={src}
                alt={`Sponsor ${index + 1}`}
                className={`object-contain ${index === currentIndex ? "animate-glow" : ""}`}
                style={{
                  width: "600px",
                  height: "350px",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Glow animation */}
      <style jsx>{`
        @keyframes glowPulse {
          0%, 100% {
            filter: drop-shadow(0 0 3px rgba(0, 195, 255, 0.25)) drop-shadow(0 0 4px rgba(0, 104, 255, 0.2));
          }
          50% {
            filter: drop-shadow(0 0 6px rgba(0, 195, 255, 0.35)) drop-shadow(0 0 8px rgba(0, 104, 255, 0.3));
          }
        }
        .animate-glow {
          animation: glowPulse 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
