"use client";

import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function EventStats() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [showFirstImage, setShowFirstImage] = useState(false);
  const [showSecondImage, setShowSecondImage] = useState(false);

  useEffect(() => {
    if (inView) {
      setShowFirstImage(true);
      const timer = setTimeout(() => setShowSecondImage(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <section className="relative bg-black py-16 sm:py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto border-t border-[#00C3FF1A] pt-12">
        {/* Header */}
        <div className="flex flex-col items-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#00C3FF80]" />
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl sm:text-4xl font-semibold text-transparent bg-gradient-to-r from-[#00C3FF] via-[#0068FF] to-[#00C3FF] bg-[length:200%_auto] bg-clip-text animate-[gradient_9s_linear_infinite]">
                Phase 01 Completed
              </h2>
              <p className="mt-3 text-[#E0F7FF]/90 text-base sm:text-lg font-semibold">

              </p>
            </div>
            <span className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#00C3FF80]" />
          </div>
        </div>

        {/* Stats */}
        <div className="w-full flex flex-col justify-center gap-6 text-center mb-10">
          <div className="group border border-[#00C3FF30] rounded-2xl p-6 sm:p-8 shadow-md hover:scale-105 transition-transform duration-300 mx-auto max-w-md">
            <h3 className="mb-2 text-lg sm:text-xl font-semibold text-[#E0F7FF]">
              Total Participants
            </h3>
            <p className="text-4xl sm:text-5xl font-bold text-[#00C3FF] group-hover:text-[#0068D1] transition-colors duration-300">
              {inView ? <CountUp end={153} duration={5} /> : 0}
            </p>
          </div>
        </div>

        {/* Images side-by-side with grayscale transition */}
        <div ref={ref} className="flex flex-wrap sm:flex-nowrap justify-center gap-8">
          {/* First Image */}
          <div
            className={`w-full sm:w-1/2 max-w-[500px] rounded-xl shadow-xl border border-[#00C3FF30] overflow-hidden transition-opacity duration-1000 ${
              showFirstImage ? "opacity-100" : "opacity-0"
            }`}
          >
            {showFirstImage && (
              <Image
                src="/images/Phase 01.jpg"
                alt="Phase 01 Participants"
                width={600}
                height={400}
                className={`object-cover w-full h-auto transition-all duration-1000 ${
                  showFirstImage ? "grayscale-0" : "grayscale"
                }`}
                priority
              />
            )}
          </div>

          {/* Second Image */}
          <div
            className={`w-full sm:w-1/2 max-w-[500px] rounded-xl shadow-xl border border-[#00C3FF30] overflow-hidden transition-opacity duration-1000 ${
              showSecondImage ? "opacity-100" : "opacity-0"
            }`}
          >
            {showSecondImage && (
              <Image
                src="/images/Phase 01 All.jpg"
                alt="Phase 01 Group Photo"
                width={600}
                height={400}
                className={`object-cover w-full h-auto transition-all duration-9000 ${
                  showSecondImage ? "grayscale-0" : "grayscale"
                }`}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
