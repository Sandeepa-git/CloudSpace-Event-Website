"use client";

import { useEffect, useState } from "react";

const sponsors = ["/images/awsdevgr.png"];

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
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-transparent bg-gradient-to-r from-[#00C3FF] via-[#0068FF] to-[#00C3FF] bg-clip-text animate-gradient-move">
          Knowledge Partner
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
                  width: "300px",
                  height: "130px",
                }}
              />
              <div className="mt-6 text-white text-base sm:text-lg font-semibold tracking-wide">
                <p className="text-blue-000">AWS USER GROUPS</p>
                <p className="text-blue-000">COLOMBO</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-move {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: -200% center;
          }
        }

        .animate-gradient-move {
          background-size: 200% auto;
          animation: gradient-move 6s linear infinite;
        }

        @keyframes glowPulse {
          0% {
            filter: drop-shadow(0 0 3px rgba(0, 195, 255, 0.25))
              drop-shadow(0 0 4px rgba(0, 104, 255, 0.2))
              drop-shadow(0 0 5px rgba(0, 195, 255, 0.25));
          }
          50% {
            filter: drop-shadow(0 0 4px rgba(0, 195, 255, 0.35))
              drop-shadow(0 0 6px rgba(0, 104, 255, 0.3))
              drop-shadow(0 0 7px rgba(0, 195, 255, 0.35));
          }
          100% {
            filter: drop-shadow(0 0 3px rgba(0, 195, 255, 0.25))
              drop-shadow(0 0 4px rgba(0, 104, 255, 0.2))
              drop-shadow(0 0 5px rgba(0, 195, 255, 0.25));
          }
        }

        .animate-glow {
          animation: glowPulse 2.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
