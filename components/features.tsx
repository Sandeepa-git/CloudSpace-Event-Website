"use client";

import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";

export default function Features() {
  return (
    <section
      id="features"
      className="relative bg-black py-16 sm:py-20 px-4 sm:px-6 lg:px-12"
    >
      {/* Background Shapes */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Gray blur"
          className="max-w-none"
          priority
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blue blur"
          className="max-w-none"
          priority
        />
      </div>

      {/* Content */}
      <div className="w-full max-w-6xl mx-auto border-t border-[#00C3FF1A] pt-12">
        {/* Gradient Heading with Lines */}
        <div className="flex flex-col items-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#00C3FF80]" />
            <h2 className="animate-[gradient_6s_linear_infinite] text-3xl sm:text-4xl font-semibold text-transparent bg-gradient-to-r from-[#00C3FF] via-[#0068FF] to-[#00C3FF] bg-[length:200%_auto] bg-clip-text text-center">
              About Us
            </h2>
            <span className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#00C3FF80]" />
          </div>
        </div>

        {/* Grid Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-y-10 md:gap-x-20 px-2 md:px-4">
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={FeaturesImage}
              alt="Cloud Feature Illustration"
              width={320}
              height={320}
              className="rounded-lg object-contain"
              priority
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 max-w-xl text-center md:text-left">
            <h3 className="animate-[gradient_6s_linear_infinite] text-2xl sm:text-3xl font-semibold text-transparent bg-gradient-to-r from-[#00C3FF] via-[#0068FF] to-[#00C3FF] bg-[length:200%_auto] bg-clip-text mb-6">
              Empowering Tomorrow’s Cloud Experts
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[#D1EAF5]/70">
              <strong className="text-[#E0F7FF]/70">CloudSpace v1.0</strong> is
              the pioneering cloud computing event organized by the IEEE
              Computer Society Student Branch Chapter of SLTC. This initiative
              marks a major step towards empowering the next generation of
              technology leaders in Sri Lanka by introducing them to the power
              and potential of cloud technologies, with a focus on{" "}
              <strong className="text-[#E0F7FF]/70">
                Amazon Web Services (AWS)
              </strong>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
