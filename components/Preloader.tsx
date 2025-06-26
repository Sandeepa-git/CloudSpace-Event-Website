"use client";
import React, { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  React.useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1700);
    const removeTimer = setTimeout(() => setLoading(false), 2200);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-tr from-[#000012] via-[#00001f] to-[#000033] transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      role="status"
      aria-label="Loading"
    >
      <div className="flex space-x-4">
        <span className="dot bg-[#00C3FF] animate-dot1" />
        <span className="dot bg-[#0068FF] animate-dot2" />
        <span className="dot bg-[#00A5E5] animate-dot3" />
      </div>
      <p className="mt-6 text-[#00C3FF] font-semibold text-lg tracking-wider select-none">
        Setting Up CloudSpace
      </p>
    </div>
  );
}
