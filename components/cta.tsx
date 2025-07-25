"use client";

import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import { FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa";

const teamMembers = [
  {
    name: "Ravishka Rathnayake",
    role: "Chairperson",
    imgSrc: "/images/Ravishka.jpg",
    email: "ravishkaprabhath1025@gmail.com",
    contact: "0713581934",
    social: {
      linkedin: "https://www.linkedin.com/in/ravishkaprabhath",
    },
  },
  {
    name: "Akinda Gunarathne",
    role: "Vice-chairperson",
    imgSrc: "/images/Akinda.jpg",
    email: "akindagunarathne@gmail.com",
    contact: "+94 74 073 3951",
    social: {
      linkedin: "https://www.linkedin.com/in/akinda-gunarathne-5405191b2/",
    },
  },
  {
    name: "Dureksha Arangala",
    role: "Secretary",
    imgSrc: "/images/Dureksha.jpg",
    email: "durekshachammi2911@gmail.com",
    contact: "076 9395758",
    social: {
      linkedin: "https://www.linkedin.com/in/dureksha-arangala-03668019a",
    },
  },
  {
    name: "Nadil Kularathne",
    role: "Program Team Lead",
    imgSrc: "/images/Nadil.jpg",
    email: "Nadilx007@gmail.com",
    contact: "076 724 0074",
    social: {
      linkedin: "https://www.linkedin.com/in/nadil-kularathne-a31497307",
    },
  },
  {
    name: "Tishan Arunalu",
    role: "Treasurer",
    imgSrc: "/images/Tishan.jpg",
    email: "tishanarunalu435@gmail.com",
    contact: "+94 70 440 4093",
    social: {
      linkedin: "https://www.linkedin.com/in/tishan-arunalu-53b020316/",
    },
  },
  {
    name: "Sandeepa Wimalasiri",
    role: "Technical Team Lead",
    imgSrc: "/images/Sandeepa.jpg",
    email: "agsvwimalasiri@gmail.com",
    contact: "0750997715",
    social: {
      linkedin: "https://www.linkedin.com/in/sandeepa-vimukthi-wimalasiri-92ab0a277/",
    },
  },
];

export default function Cta() {
  return (
    <section id="cta" className="relative overflow-hidden pb-20 bg-[#0A0F1C]">
      {/* Blurred Background Shape */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
          priority
        />
      </div>

      {/* Section Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-gradient-to-r from-transparent via-[#1A243B]/60 to-transparent py-12 md:py-20 rounded-xl shadow-xl backdrop-blur-lg">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#00C3FF80]" />
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#00C3FF] via-[#0068FF] to-[#00C3FF] bg-clip-text text-transparent animate-[gradient_6s_linear_infinite]">
                Meet Our Organizing Team
              </h2>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#00C3FF80]" />
            </div>
            <p className="text-[#AEE8FF] text-sm sm:text-base">
              Passionate leaders driving the success of CloudSpace V1.0
            </p>
          </div>

          {/* Team Cards */}
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 px-6">
            {teamMembers.map(({ name, role, imgSrc, email, contact, social }) => (
              <article
                key={name}
                className="rounded-xl bg-[#121A2F] border border-[#00C3FF30] shadow-md p-6 text-center hover:shadow-xl transition-transform hover:scale-105"
              >
                <div className="relative mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full border-2 border-[#00C3FF] shadow-md">
                  <Image
                    src={imgSrc}
                    alt={name}
                    width={112}
                    height={112}
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#E0F7FF]">{name}</h3>
                <p className="text-sm text-[#AEE8FF] mb-4">{role}</p>

                <div className="flex justify-center gap-6 text-[#00C3FF]">
                  {social.linkedin && (
                    <a
                      href={social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#0068FF] transition"
                    >
                      <FaLinkedinIn size={18} />
                    </a>
                  )}
                  {email && (
                    <a
                      href={`mailto:${email}`}
                      className="hover:text-[#0068FF] transition"
                    >
                      <FaEnvelope size={18} />
                    </a>
                  )}
                  {contact && (
                    <a
                      href={`tel:${contact.replace(/\s+/g, "")}`}
                      className="hover:text-[#0068FF] transition"
                    >
                      <FaPhone size={18} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient Keyframes */}
      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-[gradient_6s_linear_infinite] {
          background-size: 200% auto;
          animation: gradient 6s linear infinite;
        }
      `}</style>
    </section>
  );
}
