"use client";

import { useEffect, useState } from "react";

export default function HeroHome() {
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

  const displayTime = timeLeft ?? { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return (
    <section id="hero" className="relative pt-16 sm:pt-24 overflow-hidden">
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
          <div className="pb-10 sm:pb-14 text-center">
            {/* Heading */}
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_left,white,#00C3FF,#0068FF,white)] bg-[length:200%_auto] bg-clip-text text-transparent text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-semibold pb-4">
              BUILD THE FUTURE WITH CLOUD
            </h1>

            {/* Countdown Timer - Single Line */}
            <div
              className="mt-6 sm:mt-10 flex flex-nowrap justify-center overflow-x-auto gap-2 sm:gap-4 px-2 no-scrollbar"
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
                  className="flex-shrink-0 w-[72px] xs:w-[80px] sm:w-[100px] flex flex-col items-center justify-center bg-[#00C3FF0D] border border-[#00C3FF30] backdrop-blur-sm px-2 py-3 sm:px-4 sm:py-6 rounded-lg shadow-md"
                >
                  <span
                    className="text-lg xs:text-xl sm:text-3xl md:text-4xl font-extrabold text-[#E0F7FF]"
                    style={{
                      textShadow: "0 0 3px #00C3FF, 0 0 5px #0068FF",
                    }}
                  >
                    {unit.value.toString().padStart(2, "0")}
                  </span>
                  <span className="mt-1 text-[10px] xs:text-xs sm:text-sm text-[#AEE8FF] uppercase tracking-wider">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Subtitle or Description */}
            <div className="mx-auto max-w-3xl px-4 sm:px-0">
              <p
                className="mt-8 text-sm xs:text-base sm:text-lg text-indigo-200/70"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                {/* Optional subtitle or info goes here */}
              </p>
              <div className="mt-6 flex justify-center">
                {/* CTA or modal buttons */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
