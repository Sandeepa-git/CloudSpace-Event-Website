// app/layout.tsx
import "./css/style.css";

import { Inter } from "next/font/google";
import localFont from "next/font/local";

import Header from "@/components/ui/header";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Google font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Local font: Nacelle
const nacelle = localFont({
  src: [
    {
      path: "../public/fonts/Agency.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Agency.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Agency.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Agency.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-nacelle",
  display: "swap",
});

// Local font: Agency
const agency = localFont({
  src: [
    {
      path: "../public/fonts/Agency.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Agency.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-agency",
  display: "swap",
});

export const metadata = {
  title: "Register Now",
  description: "Register for the event now!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${nacelle.variable} ${agency.variable} bg-gray-950 text-gray-200 antialiased`}
        style={{ fontFamily: "var(--font-agency), sans-serif" }}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
        </div>
        {/* ✅ Include Vercel Analytics & Speed Insights */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
