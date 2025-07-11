"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const TshirtFront = "/images/tshirtfront.png";
const TshirtBack = "/images/tshirtback.png";

export default function MerchandiseSection() {
  const [showMerchandise, setShowMerchandise] = useState(false);

  useEffect(() => {
    const now = new Date();
    const targetDate = new Date("2025-07-19T00:00:00");
    if (now >= targetDate) {
      setShowMerchandise(true);
    }
  }, []);

  return (
    <section>
      <div id="merchandise" className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="border-t py-8 md:py-12">
          {/* Header */}
          <div className="mx-auto max-w-xl pb-8 text-center">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#00C3FF,#0068FF,#00C3FF)] bg-[length:200%_auto] bg-clip-text pb-2 text-xl sm:text-2xl md:text-3xl font-semibold text-transparent">
              Merchandise
            </h2>
            <p className="text-sm sm:text-base text-[#00C3FF]/70">
              Get your official CloudSpace gear and show off your passion for cloud tech.
            </p>
          </div>

          {showMerchandise ? (
            <>
              <div className="mx-auto grid gap-4 sm:grid-cols-2">
                {/* Front */}
                <article className="group relative flex flex-col items-center text-center rounded-xl bg-gray-900/50 p-3 backdrop-blur-xs transition hover:shadow-lg">
                  <div className="w-full max-w-[220px]">
                    <Image
                      className="rounded-md object-contain"
                      src={TshirtFront}
                      alt="CloudSpace T-shirt Front"
                      width={220}
                      height={367}
                      priority
                    />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-gray-100">T-shirt (Front)</h3>
                </article>

                {/* Back */}
                <article className="group relative flex flex-col items-center text-center rounded-xl bg-gray-900/50 p-3 backdrop-blur-xs transition hover:shadow-lg">
                  <div className="w-full max-w-[220px]">
                    <Image
                      className="rounded-md object-contain"
                      src={TshirtBack}
                      alt="CloudSpace T-shirt Back"
                      width={220}
                      height={367}
                      priority
                    />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-gray-100">T-shirt (Back)</h3>
                </article>
              </div>

              <div className="mt-6 text-center">
                <button className="rounded-full bg-[#0068FF] px-4 py-2 text-sm text-white font-medium shadow-md hover:bg-[#009FDF] transition duration-300 ease-in-out">
                  Order Now
                </button>
              </div>
            </>
          ) : (
            <p className="text-xl text-center text-white animate-merch-glow">
              Merchandise Dropping Soon
            </p>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes floatGlowSubtle {
          0%, 100% {
            transform: translateY(0) scale(1);
            box-shadow: 0 0 4px rgba(0, 195, 255, 0.12);
            filter: drop-shadow(0 0 3px rgba(0, 195, 255, 0.12));
          }
          50% {
            transform: translateY(-4px) scale(1.01);
            box-shadow: 0 0 8px rgba(0, 195, 255, 0.2);
            filter: drop-shadow(0 0 6px rgba(0, 195, 255, 0.2));
          }
        }

        .animate-merch-glow {
          animation: floatGlowSubtle 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
