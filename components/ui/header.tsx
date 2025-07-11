"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showRegisterButton, setShowRegisterButton] = useState(false);
  const pathname = usePathname();

  // ✅ Hide Header on specific routes
  if (pathname === "/signup" || pathname === "/auth/signup") return null;

  // Check if it's after July 14, 2025, 00:00
  useEffect(() => {
    const now = new Date();
    const targetDate = new Date("2025-07-14T00:00:00");

    if (now >= targetDate) {
      setShowRegisterButton(true);
    }
  }, []);

  const handleAnimatedScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      el.classList.add("animate-pulse");
      setTimeout(() => el.classList.remove("animate-pulse"), 400);
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: "features", label: "About Us" },
    { id: "workflows", label: "Roadmap" },
    { id: "testimonials", label: "Merchandise" },
    { id: "cta", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3
            before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit]
            before:border before:border-transparent
            before:[background:linear-gradient(to_right,#0f172a,#1e293b,#0f172a)_border-box]
            before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]
            after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs"
        >
          {/* Logo */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-1 items-center justify-center space-x-6 text-base font-medium tracking-wide uppercase">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleAnimatedScroll(item.id)}
                className="text-[#D1EAF5]/70 whitespace-nowrap hover:bg-gradient-to-r hover:from-[#00C3FF] hover:to-[#0068FF] hover:bg-clip-text hover:text-transparent transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Register Button (Hidden until July 14, 2025, 00:00) */}
          <div className="hidden md:flex flex-1 items-center justify-end gap-3">
            {showRegisterButton && (
              <Link
                href="/signup"
                className="btn-sm bg-gradient-to-t from-[#00C3FF] to-[#0068FF] py-[5px] px-4 text-white shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.16)] hover:bg-[length:100%_150%] rounded transition-all duration-200 tracking-wide uppercase text-base text-center"
              >
                Register Now
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-md text-[#D1EAF5]/70 hover:text-[#00C3FF] focus:outline-none focus:ring-2 focus:ring-[#00C3FF]"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-2 rounded-2xl bg-gray-900/90 p-4 backdrop-blur-sm border border-[rgba(0,195,255,0.1)]">
            <ul className="flex flex-col space-y-4 text-center text-[#D1EAF5]/70 font-medium text-base tracking-wide uppercase">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleAnimatedScroll(item.id)}
                    className="block w-full rounded-md py-2 whitespace-nowrap hover:bg-gradient-to-r hover:from-[#00C3FF] hover:to-[#0068FF] hover:bg-clip-text hover:text-transparent transition-all duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}

              {/* Mobile Register Button (Hidden until July 14, 2025, 00:00) */}
              <li>
                {showRegisterButton && (
                  <Link
                    href="/signup"
                    className="btn-sm mx-auto bg-gradient-to-t from-[#00C3FF] to-[#0068FF] py-2 px-6 text-white rounded shadow transition hover:scale-105 tracking-wide uppercase text-base inline-block"
                  >
                    Register Now
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
