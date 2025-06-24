"use client";

import Image from "next/image";
import MerchandiseImg01 from "@/public/images/Bag.jpg";
import MerchandiseImg02 from "@/public/images/Tshirt.jpg";
import MerchandiseImg03 from "@/public/images/Bottle.jpg";

const merchandise = [
  {
    img: MerchandiseImg01,
    title: "EcoGrow T-shirt",
    description: "Sustainable cotton shirt with green tech logo",
  },
  {
    img: MerchandiseImg02,
    title: "AgroTech Cap",
    description: "Stylish cap representing modern agriculture",
  },
  {
    img: MerchandiseImg03,
    title: "Smart Farming Tote Bag",
    description: "Reusable tote with printed circuit-style design",
  },
];

export default function MerchandiseSection() {
  return (
    <section>
      <div id="testimonials" className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#00C3FF,#0068FF,#00C3FF)] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-2xl sm:text-3xl md:text-4xl font-semibold text-transparent"
              style={{
                transition: "background-position 0.5s ease-in-out",
              }}
            >
              Merchandise
            </h2>

            <p className="text-lg text-[#00C3FF]/70">
              Discover our exclusive merchandise designed for agri-tech
              enthusiasts.
            </p>
          </div>

          {/* Merchandise Cards */}
          <div className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
            {merchandise.map((item, index) => (
              <article
                key={index}
                className="group relative rounded-2xl bg-gray-900/50 p-4 sm:p-5 backdrop-blur-xs transition hover:shadow-2xl"
                style={{
                  animation: "floatGlowSubtle 6s ease-in-out infinite",
                }}
              >
                <div className="flex flex-col gap-3 items-center text-center">
                  <Image
                    className="rounded-lg w-full max-w-[180px] sm:max-w-[280px] mx-auto"
                    src={item.img}
                    alt={item.title}
                    width={400}
                    height={300}
                  />
                  <h3 className="text-base sm:text-lg font-semibold text-gray-100">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#00C3FF]/70">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Inline animation */}
      <style jsx>{`
        @keyframes floatGlowSubtle {
          0%,
          100% {
            transform: translateY(0) scale(1);
            box-shadow: 0 0 6px rgba(0, 195, 255, 0.15);
            filter: drop-shadow(0 0 4px rgba(0, 195, 255, 0.15));
          }
          50% {
            transform: translateY(-6px) scale(1.02);
            box-shadow: 0 0 12px 2px rgba(0, 195, 255, 0.3);
            filter: drop-shadow(0 0 8px rgba(0, 195, 255, 0.3));
          }
        }
      `}</style>
    </section>
  );
}
