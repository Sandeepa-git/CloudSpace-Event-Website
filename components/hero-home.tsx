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
    const storageKey = "countdownTarget";
    let storedTarget = localStorage.getItem(storageKey);
    let targetDate: number;

    if (storedTarget) {
      targetDate = parseInt(storedTarget, 10);
    } else {
      targetDate = new Date().getTime() + 20 * 24 * 60 * 60 * 1000; // 20 days from now
      localStorage.setItem(storageKey, targetDate.toString());
    }

    function updateTimer() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const displayTime = timeLeft ?? {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-label="Animated cloud background"
        className="absolute top-0 left-0 w-full h-full object-cover -z-20"
      >
        <source src="/videos/Animate.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/40 -z-10" />

      <div className="relative z-10 max-w-6xl px-4 sm:px-6 text-center w-full">
        <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_left,white,#00C3FF,#0068FF,white)] bg-[length:200%_auto] bg-clip-text text-transparent text-3xl sm:text-5xl font-semibold pb-4">
          BUILD THE FUTURE WITH CLOUD
        </h1>

        <div className="mt-8 w-full overflow-hidden">
          <div className="flex justify-center gap-2 sm:gap-4 px-2 scale-[0.85] sm:scale-100">
            {[
              { label: "Days", value: displayTime.days },
              { label: "Hours", value: displayTime.hours },
              { label: "Minutes", value: displayTime.minutes },
              { label: "Seconds", value: displayTime.seconds },
            ].map((unit) => (
              <div
                key={unit.label}
                className="w-[70px] sm:w-[80px] flex flex-col items-center justify-center bg-[#00C3FF0D] border border-[#00C3FF30] backdrop-blur-sm px-3 py-4 rounded-lg shadow-md shrink-0"
              >
                <span
                  className="text-xl sm:text-3xl font-extrabold text-[#E0F7FF]"
                  style={{
                    textShadow: "0 0 3px #00C3FF, 0 0 5px #0068FF",
                  }}
                >
                  {unit.value.toString().padStart(2, "0")}
                </span>
                <span className="mt-1 text-xs sm:text-sm text-[#AEE8FF] uppercase tracking-wider">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
