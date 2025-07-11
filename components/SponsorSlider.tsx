"use client";

import { useEffect, useState } from "react";

const sponsors = ["/images/KnowledgePt.jpg"];

export default function SponsorSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sponsors.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Reduced opacity glow
  const glowFilter =
    `drop-shadow(0 0 6px rgba(0, 195, 255, 0.4)) ` +
    `drop-shadow(0 0 8px rgba(0, 104, 255, 0.4)) ` +
    `drop-shadow(0 0 10px rgba(0, 195, 255, 0.4)) ` +
    `drop-shadow(1.5px 0 6px rgba(0, 195, 255, 0.4)) ` +
    `drop-shadow(-1.5px 0 6px rgba(0, 195, 255, 0.4)) ` +
    `drop-shadow(0 1.5px 6px rgba(0, 195, 255, 0.4)) ` +
    `drop-shadow(0 -1.5px 6px rgba(0, 195, 255, 0.4))`;

  return (
    <section className="w-full bg-[#0B0F19] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#00C3FF,#0068FF,#00C3FF)] bg-[length:200%_auto] bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">
          Knowledge Partner
        </h2>

        <div className="relative w-full h-[140px] overflow-visible flex flex-col items-center justify-center">
          {sponsors.map((src, index) => (
            <div
              key={index}
              className={`absolute transition-opacity duration-1000 ease-in-out flex flex-col items-center ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{ transition: "opacity 1s ease, filter 1s ease" }}
            >
              <img
                src={src}
                alt={`Sponsor ${index + 1}`}
                className="object-contain"
                style={{
                  width: "240px",
                  height: "120px",
                  filter: index === currentIndex ? glowFilter : "none",
                }}
              />
              <div className="mt-6 text-white text-sm sm:text-base font-medium leading-tight text-center">
                <p>AWS USER GROUPS</p>
                <p>COLOMBO</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: -200% center;
          }
        }
      `}</style>
    </section>
  );
}
