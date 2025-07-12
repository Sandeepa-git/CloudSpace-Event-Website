"use client";

import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";
import { useCallback, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const GOOGLE_SHEET_WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbzb_Sgcp1hACgUS6elYqlRDDXYnmgirYZxGykrMtJEiT9IzTvUFBvYofkrVbDV4tGFw/exec";

export default function Footer() {
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSendMessage = async () => {
    if (message.trim() === "") {
      alert("Please enter a message before sending.");
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch(GOOGLE_SHEET_WEB_APP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const result = await response.json();

      if (result.status === "success") {
        alert("Message sent successfully!");
        setMessage("");
      } else {
        alert("Failed to send message: " + result.message);
      }
    } catch (error: any) {
      alert("Error sending message: " + error.message);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <footer
      style={{ fontFamily: "Agency, sans-serif" }}
      className="relative bg-gray-900 text-[#D1EAF5] pt-16 pb-16"
    >
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 opacity-15"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={FooterIllustration}
          width={1076}
          height={378}
          alt="Footer illustration"
          priority
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-[#00C3FF33] pb-14 text-center md:text-left">
          {/* Branding & Contact */}
          <div className="space-y-6 max-w-xs md:max-w-none mx-auto md:mx-0">
            <div className="flex justify-center md:justify-start">
              <Logo />
            </div>
            <p className="text-[#ffffff] text-sm">
              Empowering Tomorrow’s Cloud Experts through innovative cloud
              events and community learning.
            </p>
            <div className="text-sm space-y-2 text-[#ffffff]">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@cloudspace.com"
                  className="underline hover:text-[#0068FF]"
                >
                  cloudspacesltc@gmail.com
                </a>
              </p>
              <p>
                <strong></strong>{" "}
                <a
                  href="tel:+94123456789"
                  className="underline hover:text-[#0068FF]"
                >
                  
                </a>
              </p>
              <p><br></br>Sri Lanka Technology Campus,<br />Colombo, Sri Lanka</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mx-auto md:mx-0 max-w-xs md:max-w-none">
            <h3 className="text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-[#00C3FF] to-[#0068FF] bg-clip-text text-transparent mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3 text-[#ffffff] text-sm">
              {[
                { label: "About Us", href: "#features" },
                { label: "Roadmap", href: "#workflows" },
                { label: "Merchandise", href: "#testimonials" },
                { label: "Contact Us", href: "#cta" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="hover:text-[#0068FF] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="mx-auto md:mx-0 max-w-xs md:max-w-none">
            <h3 className="text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-[#00C3FF] to-[#0068FF] bg-clip-text text-transparent mb-6">
              Follow Us
            </h3>
            <ul className="flex justify-center md:justify-start gap-6 text-[#ffffff]">
              <li>
                <a
                  href="http://facebook.com/CloudSpacelk"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:text-[#00C3FF] transition"
                >
                  <FontAwesomeIcon icon={faFacebookF} className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/cloudspacelk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-[#00C3FF] transition"
                >
                  <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/cloudspacelk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-[#00C3FF] transition"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-12 gap-4 text-center">
          <p className="text-xs text-[#07466499] uppercase tracking-wide">
            © 2025 CloudSpace. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00C3FF] to-[#0068FF] px-5 py-2 text-white font-semibold uppercase tracking-wide shadow-lg hover:brightness-110 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
