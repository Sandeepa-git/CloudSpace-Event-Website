import Image from "next/image";
import WorflowImg01 from "@/public/images/badgebasic.png";
import WorflowImgCombined from "@/public/images/badgeadvance.png";
import Spotlight from "@/components/spotlight";

export default function Workflows() {
  return (
    <section id="workflows" className="py-6 sm:py-10 md:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
        <div className="pb-6 sm:pb-10 md:pb-16">
          {/* Section header */}
          <div className="mx-auto max-w-2xl pb-6 sm:pb-10 text-center md:pb-16">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#00C3FF,#0068FF,#00C3FF)] bg-[length:200%_auto] bg-clip-text pb-3 font-nacelle text-xl sm:text-2xl md:text-3xl font-semibold text-transparent">
              Event Timeline
            </h2>
          </div>

          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid gap-5 grid-cols-1 sm:grid-cols-2">
            {[
              {
                img: WorflowImg01,
                title: "Day 1 – Cloud Fundamentals",
                date: "July 19, 2025",
                desc: "On the first day of the event, 19th July 2025, from 10:00 AM to 1:00 PM, at the SLTC Padukka premises, CloudSpace v1.0 will begin with a deep dive into the fundamentals of cloud computing. Participants will explore essential concepts such as service models (IaaS, PaaS, SaaS), deployment models (public, private, hybrid), and the evolution of cloud technologies. Through real-world examples and interactive discussions, this session will provide a strong foundation for understanding how cloud computing is transforming the tech landscape"
              },
              {
                img: WorflowImgCombined,
                title: "Day 2 – Infrastructure, Application Development, DevOps & Security",
                date: "July 26, 2025",
                desc: "On the second day of the event, 26th July 2025, from 10:00 AM to 4:00 PM, at the SLTC Padukka premises, participants will take a practical leap into AWS infrastructure, application development, DevOps, and cloud security. The session will cover core AWS services such as S3, EC2, Lambda, and IAM, with hands-on deployment of a full-stack application using GitHub. Participants will also explore key DevOps practices, including containerization with Docker, implementing CI/CD pipelines, and automating deployments for scalable cloud applications. In addition, essential cloud security concepts will be introduced to ensure best practices in securing modern cloud-native environments.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group/card relative h-full overflow-hidden rounded-xl bg-gray-800 p-px hover:after:opacity-20 group-hover:before:opacity-100 transition-shadow duration-300"
              >
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 p-4 sm:p-5 flex flex-col">
                  <Image
                    src={item.img}
                    width={300}
                    height={250}
                    alt={item.title}
                    className="w-full max-w-[160px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[180px] mx-auto h-auto object-contain mb-3"
                    priority
                  />
                  <h3 className="text-base sm:text-lg font-semibold text-[#E0F7FF] text-center mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#AEE8FF] text-center mb-2">
                    {item.date}
                  </p>
                  <p className="text-[#D1EAF5]/70 text-xs sm:text-sm text-left flex-grow leading-snug">
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
