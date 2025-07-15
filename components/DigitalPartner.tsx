"use client";

import { useEffect, useState } from "react";

const sponsors = ["/images/media.png"];

export default function SponsorSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    // Set date visibility: show only from July 16, 2025
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
    <section className="w-full bg-[#0B0F19] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Gradient Line + Heading + Gradient Line */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#00C3FF80]" />
          <h2 className="animate-[gradient_6s_linear_infinite] text-3xl md:text-4xl font-semibold text-transparent bg-gradient-to-r from-[#00C3FF] via-[#0068FF] to-[#00C3FF] bg-[length:200%_auto] bg-clip-text">
            Official Media Partner
          </h2>
          <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#00C3FF80]" />
        </div>

        {/* Image Slider */}
        <div className="relative w-full h-[160px] sm:h-[180px] flex items-center justify-center">
          {sponsors.map((src, index) => (
            <div key={index} className="absolute flex flex-col items-center">
              <img
                src={src}
                alt={`Sponsor ${index + 1}`}
                className={`object-contain ${
                  index === currentIndex ? "animate-glow" : ""
                }`}
                style={{
                  width: "600px",
                  height: "350px",
                }}
              />
              <div className="mt-6 text-white text-base sm:text-lg font-semibold tracking-wide">
                <p className="text-blue-000"></p>
                <p className="text-blue-000"></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
