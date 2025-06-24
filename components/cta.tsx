"use client";

import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const teamMembers = [
  {
    name: "Ravishka Prabath",
    role: "Chairman",
    imgSrc: "/images/Ravishka.jpg",
    bio: "Ravishka oversees the entire event and leads the organizing committee.",
    social: {
      linkedin: "https://linkedin.com/in/ravishka",
      facebook: "https://facebook.com/ravishka",
      instagram: "https://instagram.com/ravishka",
    },
  },
  {
    name: "Akinda Gunarathna",
    role: "Vice Chairman",
    imgSrc: "/images/Akinda.jpg",
    bio: "Akinda coordinates the sub-teams and handles operations planning.",
    social: {
      linkedin: "https://linkedin.com/in/akinda",
      facebook: "https://facebook.com/akinda",
      instagram: "https://instagram.com/akinda",
    },
  },
  {
    name: "Dureksha Arangala",
    role: "Secretary",
    imgSrc: "/images/Dureksha.jpg",
    bio: "Dureksha manages documentation, scheduling, and internal communication.",
    social: {
      linkedin: "https://linkedin.com/in/dureksha",
      facebook: "https://facebook.com/dureksha",
      instagram: "https://instagram.com/dureksha",
    },
  },
  {
    name: "Tishan Rajapaksha",
    role: "Treasurer",
    imgSrc: "/images/Tishan.jpg",
    bio: "Tishan oversees venue arrangements and logistics for the event.",
    social: {
      linkedin: "https://linkedin.com/in/tishan",
      facebook: "https://facebook.com/tishan",
      instagram: "https://instagram.com/tishan",
    },
  },
  {
    name: "Anjali Silva",
    role: "Program Lead",
    imgSrc: "/images/Anjali.jpg",
    bio: "Anjali manages promotions, social media, and outreach activities.",
    social: {
      linkedin: "https://linkedin.com/in/anjali",
      facebook: "https://facebook.com/anjali",
      instagram: "https://instagram.com/anjali",
    },
  },
  {
    name: "Sandeepa Wimalasiri",
    role: "Technical Lead",
    imgSrc: "/images/Sandeepa.jpg",
    bio: "Sandeepa handles technical setups, IT infrastructure, and support.",
    social: {
      linkedin: "https://linkedin.com/in/kasun",
      facebook: "https://facebook.com/kasun",
      instagram: "https://instagram.com/kasun",
    },
  },
];

export default function Cta() {
  return (
    <section id="cta" className="relative overflow-hidden pb-20">
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
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-transparent via-gray-800/50 py-12 md:py-20 rounded-lg">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="animate-gradient bg-gradient-to-r from-[#00C3FF] to-[#0068FF] bg-[length:200%_auto] bg-clip-text text-transparent pb-8 font-nacelle text-3xl font-semibold md:text-4xl"
              data-aos="fade-up"
            >
              Meet Our Organizing Team
            </h2>

            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              {teamMembers.map(({ name, role, imgSrc, bio, social }) => (
                <article
                  key={name}
                  className="rounded-xl bg-gray-900 p-6 text-center shadow-lg transition hover:scale-[1.03]"
                  data-aos="fade-up"
                >
                  <div className="relative mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full border-2 border-[#00C3FF]">
                    <Image
                      src={imgSrc}
                      alt={name}
                      width={112}
                      height={112}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{name}</h3>
                  <p className="mb-2 text-indigo-300">{role}</p>
                  <p className="text-sm text-gray-400">{bio}</p>

                  <div className="mt-4 flex justify-center gap-4 text-[#00C3FF]">
                    {social.linkedin && (
                      <a
                        href={social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="hover:text-[#0068FF] transition"
                      >
                        <FaLinkedinIn size={20} />
                      </a>
                    )}
                    {social.facebook && (
                      <a
                        href={social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="hover:text-[#0068FF] transition"
                      >
                        <FaFacebookF size={20} />
                      </a>
                    )}
                    {social.instagram && (
                      <a
                        href={social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="hover:text-[#0068FF] transition"
                      >
                        <FaInstagram size={20} />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

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
