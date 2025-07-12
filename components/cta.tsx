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
      linkedin:
        "https://www.linkedin.com/in/nadil-kularathne-a31497307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
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
      linkedin:
        "https://www.linkedin.com/in/sandeepa-vimukthi-wimalasiri-92ab0a277/",
    },
  },
];

export default function Cta() {
  return (
    <section id="cta" className="relative overflow-hidden pb-20">
      {/* Background Blurred Shape */}
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

      {/* Main Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-gradient-to-r from-transparent via-gray-800/50 py-10 sm:py-12 md:py-20 rounded-lg">
          <div className="mx-auto max-w-3xl text-center">
            
            {/* 🔷 Gradient Header Line */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#00C3FF80]" />
              <h2 className="animate-[gradient_6s_linear_infinite] text-3xl md:text-4xl font-semibold text-transparent bg-gradient-to-r from-[#00C3FF] via-[#0068FF] to-[#00C3FF] bg-[length:200%_auto] bg-clip-text">
                Meet Our Organizing Team
              </h2>
              <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#00C3FF80]" />
            </div>

            {/* Team Cards */}
            <div
              className="grid gap-8 sm:grid-cols-2 md:grid-cols-3"
              role="list"
            >
              {teamMembers.map(({ name, role, imgSrc, social, email, contact }) => (
                <article
                  key={name}
                  className="rounded-xl bg-gray-900 p-6 text-center shadow-lg transition-transform hover:scale-[1.03]"
                  data-aos="fade-up"
                  role="listitem"
                >
                  <div className="relative mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full border-2 border-[#00C3FF]">
                    <Image
                      src={imgSrc}
                      alt={name}
                      width={112}
                      height={112}
                      className="object-cover"
                      priority
                    />
                  </div>
                  <h3 className="text-md font-semibold text-white truncate">{name}</h3>
                  <p className="mb-2 text-blue-300">{role}</p>

                  {/* Contact Icons */}
                  <div className="mt-4 flex justify-center gap-6 text-[#00C3FF]">
                    {social.linkedin && (
                      <a
                        href={social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="hover:text-[#0068FF] transition-colors"
                      >
                        <FaLinkedinIn size={20} />
                      </a>
                    )}
                    {email && (
                      <a
                        href={`mailto:${email}`}
                        aria-label="Email"
                        className="hover:text-[#0068FF] transition-colors"
                      >
                        <FaEnvelope size={20} />
                      </a>
                    )}
                    {contact && (
                      <a
                        href={`tel:${contact.replace(/\s+/g, "")}`}
                        aria-label="Phone"
                        className="hover:text-[#0068FF] transition-colors"
                      >
                        <FaPhone size={20} />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 🔷 Gradient Animation */}
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
        .animate-gradient {
          animation: gradient 6s linear infinite;
        }
      `}</style>
    </section>
  );
}
