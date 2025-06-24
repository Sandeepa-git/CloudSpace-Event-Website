"use client";

import { useEffect, useState } from "react";

export default function HeroHome() {
  // null means "not mounted yet"
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    const targetDate = new Date(Date.now() + 20 * 24 * 60 * 60 * 1000).getTime();

    function updateTimer() {
      const now = new Date().getTime();
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

  // Render static zeros if not yet mounted to avoid hydration mismatch
  const displayTime = timeLeft ?? { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return (
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
            {/* Main Heading */}
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_left,white,#00C3FF,#0068FF,white)] bg-[length:200%_auto] bg-clip-text text-transparent pb-5 text-3xl sm:text-4xl md:text-5xl font-semibold"
            >
              BUILD THE FUTURE WITH CLOUD
            </h1>

            {/* Countdown Timer */}
            <div
              className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-6 max-w-full px-2 sm:px-0"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {[
                { label: "Days", value: displayTime.days },
                { label: "Hours", value: displayTime.hours },
                { label: "Minutes", value: displayTime.minutes },
                { label: "Seconds", value: displayTime.seconds },
              ].map((unit) => (
                <div
                  key={unit.label}
                  className="flex-shrink flex-grow min-w-[60px] max-w-[25%] sm:min-w-[120px] flex flex-col items-center justify-center bg-[#00C3FF0D] border border-[#00C3FF30] backdrop-blur-sm px-2 py-3 sm:px-4 sm:py-6 rounded-lg sm:rounded-xl shadow-md"
                >
                  <span
                    className="text-2xl sm:text-5xl md:text-6xl font-extrabold text-[#E0F7FF]"
                    style={{
                      textShadow: "0 0 6px #00C3FF, 0 0 10px #0068FF",
                    }}
                  >
                    {unit.value.toString().padStart(2, "0")}
                  </span>
                  <span className="mt-1 sm:mt-2 text-xs sm:text-base text-[#AEE8FF] uppercase tracking-wider sm:tracking-widest">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Optional Subtitle */}
            <div className="mx-auto max-w-3xl">
              <p
                className="mt-8 text-base sm:text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                {/* Add your subtitle or description here */}
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                {/* Add buttons or modal here if needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
