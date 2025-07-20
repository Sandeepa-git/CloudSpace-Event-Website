"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-[60px] sm:min-w-[90px] bg-[#00C3FF0D] border border-[#00C3FF30] backdrop-blur-sm rounded-md px-3 py-2 sm:px-4 sm:py-3 shadow-md mx-1 sm:mx-2">
      <span
        className="text-2xl sm:text-4xl font-extrabold text-[#E0F7FF]"
        style={{ textShadow: "0 0 6px #00C3FF, 0 0 10px #0068FF" }}
      >
        {value.toString().padStart(2, "0")}
      </span>
      <span className="mt-1 text-xs sm:text-base text-[#AEE8FF] uppercase tracking-wide">
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const PHASE_1_END = new Date(2025, 6, 19, 10, 0, 0).getTime();
  const PHASE_2_END = new Date(2025, 6, 26, 10, 0, 0).getTime();

  const [activePhase, setActivePhase] = useState<1 | 2>(1);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    function calculateTimeLeft(targetDate: number) {
      const now = Date.now();
      const distance = targetDate - now;

      if (distance <= 0) {
        return null;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    }

    function update() {
      if (activePhase === 1) {
        const tl = calculateTimeLeft(PHASE_1_END);
        if (tl === null) {
          setActivePhase(2);
          const phase2Time = calculateTimeLeft(PHASE_2_END);
          setTimeLeft(phase2Time ?? { days: 0, hours: 0, minutes: 0, seconds: 0 });
        } else {
          setTimeLeft(tl);
        }
      } else {
        const tl = calculateTimeLeft(PHASE_2_END);
        setTimeLeft(tl ?? { days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [activePhase]);

  return (
    <section id="hero" className="relative pt-16 sm:pt-20 md:pt-28 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-label="Animated cloud background"
        className="absolute top-0 left-0 w-full h-full object-cover -z-20 opacity-80"
      >
        <source src="/videos/Animate.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      {/* Content */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="py-8 sm:py-12 md:py-20 text-center max-w-4xl mx-auto">
          <h1
            className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_left,white,#00C3FF,#0068FF,white)] bg-[length:200%_auto] bg-clip-text text-transparent pb-4 text-3xl sm:text-4xl md:text-5xl font-semibold"
          >
            Trailblazing Toward Cloud Excellence
          </h1>

          <h2 className="text-white font-semibold mb-6 text-2xl sm:text-3xl">
            {activePhase === 1 ? "Preparing next stage..." : "Preparing next stage..."}
          </h2>

          {/* Countdown units in one line with horizontal scroll on small screens */}
          <div className="flex flex-nowrap gap-2 sm:gap-6 justify-center overflow-x-auto no-scrollbar">
            <CountdownUnit value={timeLeft.days} label="Days" />
            <CountdownUnit value={timeLeft.hours} label="Hours" />
            <CountdownUnit value={timeLeft.minutes} label="Minutes" />
            <CountdownUnit value={timeLeft.seconds} label="Seconds" />
          </div>
        </div>
      </div>

      {/* Hide scrollbar styling */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
