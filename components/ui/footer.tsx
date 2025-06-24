"use client";

import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";
import { useCallback, useState } from "react";

const GOOGLE_SHEET_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzb_Sgcp1hACgUS6elYqlRDDXYnmgirYZxGykrMtJEiT9IzTvUFBvYofkrVbDV4tGFw/exec"; // ← Replace with yours

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
            <p className="text-[#00C3FF] text-sm">
              Empowering Tomorrow’s Cloud Experts through innovative cloud events and community learning.
            </p>
            <div className="text-sm space-y-2 text-[#00C3FFcc]">
              <p><strong>Email:</strong> <a href="mailto:info@cloudspace.com" className="underline hover:text-[#0068FF]">info@cloudspace.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+94123456789" className="underline hover:text-[#0068FF]">+94 123 456 789</a></p>
              <p>Colombo, Sri Lanka</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mx-auto md:mx-0 max-w-xs md:max-w-none">
            <h3 className="text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-[#00C3FF] to-[#0068FF] bg-clip-text text-transparent mb-5">Quick Links</h3>
            <ul className="space-y-3 text-[#00C3FFcc] text-sm">
              {[
                { label: "About Us", href: "#features" },
                { label: "Roadmap", href: "#workflows" },
                { label: "Merchandise", href: "#testimonials" },
                { label: "Contact Us", href: "#cta" },
                { label: "Register", href: "#register" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="hover:text-[#0068FF] transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          

          {/* Social Links */}
          <div className="mx-auto md:mx-0 max-w-xs md:max-w-none">
            <h3 className="text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-[#00C3FF] to-[#0068FF] bg-clip-text text-transparent mb-6">Follow Us</h3>
            <ul className="flex justify-center md:justify-start gap-8 text-[#00C3FF]">
              <li><a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg className="h-8 w-8 fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24h11.494v-9.294H9.691v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.725 0 1.324-.6 1.324-1.324V1.325C24 .6 23.4 0 22.675 0z" /></svg></a></li>
              <li><a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg className="h-8 w-8 fill-current" viewBox="0 0 24 24"><path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm5.5-.625a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zM12 9.25a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5z" /></svg></a></li>
              <li><a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg className="h-8 w-8 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.039-1.851-3.039-1.852 0-2.136 1.447-2.136 2.942v5.666H9.353V9h3.414v1.561h.049c.476-.9 1.637-1.851 3.37-1.851 3.6 0 4.265 2.369 4.265 5.455v6.287zM5.337 7.433a2.07 2.07 0 112.07-2.07 2.07 2.07 0 01-2.07 2.07zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .77 0 1.723v20.554C0 23.23.792 24 1.771 24h20.451C23.2 24 24 23.23 24 22.277V1.723C24 .77 23.2 0 22.225 0z" /></svg></a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-12 gap-4 text-center">
          <p className="text-xs text-[#00C3FF99] uppercase tracking-wide">© 2025 CloudSpace. All rights reserved.</p>
          <button onClick={scrollToTop} aria-label="Back to top" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00C3FF] to-[#0068FF] px-5 py-2 text-white font-semibold uppercase tracking-wide shadow-lg hover:brightness-110 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
