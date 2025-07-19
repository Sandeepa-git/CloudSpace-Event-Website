"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import StudentsImage from "@/public/images/Phase 01.jpg"; // Adjust if path changes

export default function EventStats() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="relative bg-black py-16 sm:py-20 px-4 sm:px-6 lg:px-12">
      {/* Container */}
      <div className="w-full max-w-6xl mx-auto border-t border-[#00C3FF1A] pt-12">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#00C3FF80]" />
            <div className="flex flex-col items-center text-center">
              <h2 className="animate-[gradient_9s_linear_infinite] text-3xl sm:text-4xl font-semibold text-transparent bg-gradient-to-r from-[#00C3FF] via-[#0068FF] to-[#00C3FF] bg-[length:200%_auto] bg-clip-text">
                Participation Stats
              </h2>
              <p className="text-[#E0F7FF]/90 text-base sm:text-lg font-semibold mt-3">
                Phase 01 Completed
              </p>
            </div>
            <span className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#00C3FF80]" />
          </div>
        </div>

        {/* Content Layout */}
        <div
          ref={ref}
          className="flex flex-col md:flex-row items-center justify-between gap-y-10 md:gap-x-12 lg:gap-x-20"
        >
          {/* Left: Stats */}
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 text-center md:text-left">
            <div className="border border-[#00C3FF30] rounded-2xl p-6 sm:p-8 shadow-md hover:scale-105 transition-transform duration-300">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#E0F7FF]">
                Total Registrants
              </h3>
              <p className="text-4xl sm:text-5xl font-bold text-[#00C3FF]">
                {inView ? <CountUp end={366} duration={5} /> : 0}
              </p>
            </div>
            <div className="border border-[#00C3FF30] rounded-2xl p-6 sm:p-8 shadow-md hover:scale-105 transition-transform duration-300">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#E0F7FF]">
                Phase 01 Participants
              </h3>
              <p className="text-4xl sm:text-5xl font-bold text-[#00C3FF]">
                {inView ? <CountUp end={117} duration={5} /> : 0}
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="w-full max-w-[500px]">
              <Image
                src={StudentsImage}
                alt="Phase 01 Participants"
                width={600}
                height={400}
                className="rounded-xl shadow-xl border border-[#00C3FF30] object-cover w-full h-auto md:h-[370px]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
