import Image from "next/image";
import WorflowImg01 from "@/public/images/badgebasic.png";
import WorflowImg02 from "@/public/images/badgeintermediate.png";
import WorflowImg03 from "@/public/images/badgeadvance.png";
import Spotlight from "@/components/spotlight";

export default function Workflows() {
  return (
    <section id="workflows" className="py-8 sm:py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="pb-8 sm:pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-8 sm:pb-12 text-center md:pb-20">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#00C3FF,#0068FF,#00C3FF)] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-2xl sm:text-3xl md:text-4xl font-semibold text-transparent">
              Event Timeline
            </h2>
          </div>

          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                img: WorflowImg01,
                title: "Cloud Fundamentals",
                date: "July 12, 2025",
                desc: "This phase targets 1st and 2nd year undergraduates, helping them build a strong foundation in cloud computing concepts and understand the importance of cloud technologies in today’s world. The day features interactive sessions led by industry experts and engaging quizzes to reinforce learning and encourage active participation.",
              },
              {
                img: WorflowImg02,
                title: "Cloud Infrastructure & Design",
                date: "July 19, 2025",
                desc: "This phase focuses on cloud architecture, components, and best practices for designing cloud systems. The main target audience is 3rd and 4th year undergraduates, but any undergraduate with an interest in these topics is welcome to join. Includes workshops, demos, and quizzes.",
              },
              {
                img: WorflowImg03,
                title: "Cloud App Development & Security",
                date: "July 26, 2025",
                desc: "The final phase dives into developing, deploying, and securing applications in the cloud. All undergraduates are encouraged to participate. This phase offers technical sessions, workshops, demos, and quizzes focused on secure cloud-based solutions.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px hover:after:opacity-20 group-hover:before:opacity-100 transition-shadow duration-300"
              >
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 p-4 sm:p-6 flex flex-col">
                  <Image
                    src={item.img}
                    width={350}
                    height={288}
                    alt={item.title}
                    className="w-full max-w-[200px] sm:max-w-full mx-auto h-auto object-contain mb-4"
                    priority
                  />
                  <h3 className="text-lg sm:text-xl font-semibold text-[#E0F7FF] text-center">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#AEE8FF] text-center mb-3">
                    {item.date}
                  </p>
                  <p className="text-[#D1EAF5]/70 text-sm sm:text-base text-left flex-grow">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
