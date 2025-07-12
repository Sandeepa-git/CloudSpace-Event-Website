"use client";

import { useEffect, useState } from "react";

const sponsors = ["/images/media.png"];

export default function SponsorSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sponsors.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#0B0F19] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="animate-[gradient_6s_linear_infinite] text-3xl md:text-4xl font-semibold text-transparent bg-gradient-to-r from-[#00C3FF] via-[#0068FF] to-[#00C3FF] bg-[length:200%_auto] bg-clip-text mb-6">
          Official Media Partner
        </h2>

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
