import Image from "next/image";
import WorflowImg01 from "@/public/images/awscert2.png";
import WorflowImg02 from "@/public/images/awscert1.png";
import WorflowImg03 from "@/public/images/awscert3.png";
import Spotlight from "@/components/spotlight";

export default function Workflows() {
  return (
    <section id="workflows" className="py-8 sm:py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-2 sm:px-4 md:px-6">
        <div className="pb-8 sm:pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-8 sm:pb-12 text-center md:pb-20">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#00C3FF,#0068FF,#00C3FF)] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-2xl sm:text-3xl md:text-4xl font-semibold text-transparent">
              Event Timeline
            </h2>
            <p className="text-base sm:text-lg text-[#D1EAF5]/70"></p>
          </div>

          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <a
              href="#0"
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-[#00C3FF]/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-[#00C3FF] after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <div className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(0,195,255,0.1)] bg-gray-800/65 text-[#E0F7FF]/70 opacity-0 transition-opacity group-hover/card:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width={9} height={8} fill="none">
                    <path fill="#E0F7FF" d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z" />
                  </svg>
                </div>
                <Image src={WorflowImg01} width={350} height={288} alt="Workflow 01" className="w-full h-auto object-contain" />
                <div className="p-4 sm:p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal hover:bg-gray-800/60">
                      <span className="bg-gradient-to-r from-[#00C3FF] to-[#0068FF] bg-clip-text text-transparent">
                        01. Cloud Fundamentals (July 12, 2025)
                      </span>
                    </span>
                  </div>
                  <p className="text-[#D1EAF5]/70 text-sm sm:text-base">
                    This phase targets 1st -year and 2nd -year undergraduates, helping them build a strong foundation in cloud computing concepts and understand the importance of cloud technologies in today’s world. The day features interactive sessions led by industry experts and engaging quizzes to reinforce learning and encourage active participation.
                  </p>
                </div>
              </div>
            </a>

            {/* Card 2 */}
            <a
              href="#workflows"
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-[#00C3FF]/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-[#00C3FF] after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <div className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(0,195,255,0.1)] bg-gray-800/65 text-[#E0F7FF]/70 opacity-0 transition-opacity group-hover/card:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width={9} height={8} fill="none">
                    <path fill="#E0F7FF" d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z" />
                  </svg>
                </div>
                <Image src={WorflowImg02} width={350} height={288} alt="Workflow 02" className="w-full h-auto object-contain" />
                <div className="p-4 sm:p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal hover:bg-gray-800/60">
                      <span className="bg-gradient-to-r from-[#00C3FF] to-[#0068FF] bg-clip-text text-transparent">
                        02. Cloud Infrastructure & Design (July 19, 2025)
                      </span>
                    </span>
                  </div>
                  <p className="text-[#D1EAF5]/70 text-sm sm:text-base">
                    This phase focuses on cloud architecture, components, and best practices for designing cloud systems. The main target audience is 3rd -year and 4th -year undergraduates, but any undergraduate with an interest in these topics is welcome to join without restrictions. The learning experience is enriched through a mix of sessions, hands-on workshops, demonstrations, and quizzes, ensuring both theoretical understanding and practical exposure.
                  </p>
                </div>
              </div>
            </a>

            {/* Card 3 */}
            <a
              href="#0"
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-[#00C3FF]/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-[#00C3FF] after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <div className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(0,195,255,0.1)] bg-gray-800/65 text-[#E0F7FF]/70 opacity-0 transition-opacity group-hover/card:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width={9} height={8} fill="none">
                    <path fill="#E0F7FF" d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z" />
                  </svg>
                </div>
                <Image src={WorflowImg03} width={350} height={288} alt="Workflow 03" className="w-full h-auto object-contain" />
                <div className="p-4 sm:p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal hover:bg-gray-800/60">
                      <span className="bg-gradient-to-r from-[#00C3FF] to-[#0068FF] bg-clip-text text-transparent">
                        03. Cloud Application Development & Security (July 26, 2025)
                      </span>
                    </span>
                  </div>
                  <p className="text-[#D1EAF5]/70 text-sm sm:text-base">
                    The final phase dives into developing, deploying, and securing applications in the cloud. Similar to Phase 2, the core audience is 3rd -year and 4th -year undergraduates, though all interested undergraduates are encouraged to participate. This phase offers a comprehensive blend of sessions, workshops, demos, and quizzes, aimed at equipping undergraduates with the skills needed to create secure and efficient cloud-based solutions.
                  </p>
                </div>
              </div>
            </a>
          </Spotlight>
        </div>
      </div>
    </section>
  );
}