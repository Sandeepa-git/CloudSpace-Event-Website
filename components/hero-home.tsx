"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function HeroHome() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Calculate 20th of next month dynamically
    function getNextMonth20th() {
      const now = new Date();
      // If month is December (11), increment year
      const year = now.getMonth() === 11 ? now.getFullYear() + 1 : now.getFullYear();
      // Next month (0-based)
      const month = (now.getMonth() + 1) % 12;
      // 20th day of next month, at 00:00:00
      return new Date(year, month, 20, 0, 0, 0).getTime();
    }

    const targetDate = getNextMonth20th();

    function updateTimer() {
      const now = Date.now();
      const distance = targetDate - now;

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    // ...rest of your component JSX (unchanged)
    <section id="hero" className="relative pt-20 sm:pt-28 overflow-hidden">
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
      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <div className="py-10 sm:py-12 md:py-20">
          <div className="pb-8 sm:pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_left,white,#00C3FF,#0068FF,white)] bg-[length:200%_auto] bg-clip-text text-transparent pb-5 text-3xl sm:text-4xl md:text-5xl font-semibold"
            >
              Trailblazing Toward Cloud Excellence
            </h1>

            {/* Countdown */}
            <div
              className="mt-8 sm:mt-10 flex gap-2 sm:gap-4 max-w-full px-1 sm:px-0 overflow-x-auto no-scrollbar whitespace-nowrap justify-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex-shrink-0 min-w-[68px] sm:min-w-[90px] flex flex-col items-center justify-center text-center bg-[#00C3FF0D] border border-[#00C3FF30] backdrop-blur-sm px-2 py-2 sm:px-4 sm:py-4 rounded-md shadow-md"
                >
                  <span
                    className="text-lg sm:text-2xl font-bold text-[#E0F7FF]"
                    style={{ textShadow: "0 0 4px #00C3FF, 0 0 8px #0068FF" }}
                  >
                    {value.toString().padStart(2, "0")}
                  </span>
                  <span className="mt-1 text-[10px] sm:text-xs text-[#AEE8FF] uppercase tracking-wide">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Subtitle / CTA area */}
            <div className="mx-auto max-w-3xl">
              <p
                className="mt-8 text-sm sm:text-lg text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              ></p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"></div>
            </div>
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
