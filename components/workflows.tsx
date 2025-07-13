"use client";

import Image from "next/image";
import WorflowImg01 from "@/public/images/badgebasic.png";
import WorflowImgCombined from "@/public/images/badgeadvance.png";
import Spotlight from "@/components/spotlight";

export default function Workflows() {
  return (
    <section id="workflows" className="py-10 sm:py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center mb-10 sm:mb-12">
          <div className="flex items-center justify-center">
            <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-[#00C3FF80]" />
            <h2 className="mx-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-gradient-to-r from-[#00C3FF] via-[#0068FF] to-[#00C3FF] bg-[length:200%_auto] bg-clip-text animate-[gradient_6s_linear_infinite]">
              Event Timeline
            </h2>
            <div className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-[#00C3FF80]" />
          </div>
        </div>

        {/* Spotlight Cards */}
        <Spotlight className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2">
          {[
            {
              img: WorflowImg01,
              title: "Phase 1 – Cloud Essentials & Future Impact",
              date: "July 19, 2025",
              desc: `Step into the world of cloud computing and discover how it’s revolutionizing industries worldwide. This module introduces the fundamentals of cloud technology and its transformative role across data science, software engineering, and cybersecurity. Gain a foundational understanding of key AWS services and cloud platforms, exploring how cloud computing delivers scalability, flexibility, and global reach. Learn how cloud innovation continues to drive the future of technology through practical applications and real-world impact. Whether you’re a student, professional, or tech enthusiast, this module provides the essential knowledge to understand and leverage the power of cloud computing.
`,
            },
            {
              img: WorflowImgCombined,
              title: "Phase 2 – Cloud Infrastructure, DevOps & Security",
              date: "July 26, 2025",
              desc: `Take your cloud knowledge to the next level with hands-on experience in real-world tools and frameworks. This phase focuses on building secure, scalable infrastructure and adopting modern DevOps practices using AWS. Explore essential AWS services such as S3 (storage), EC2 (compute), Lambda (serverless), and Fargate (container orchestration). Develop practical skills with DevOps tools like Docker, Kubernetes, and AWS CodePipeline to optimize development and deployment workflows. Apply the AWS Well-Architected Framework to design solutions that balance cost-efficiency, performance, reliability, and security. Additionally, utilize CloudWatch for real-time monitoring, logging, and operational insights. Whether you’re a developer, aspiring cloud architect, or tech enthusiast, this phase equips you with the critical skills to build and manage secure, cloud-native applications effectively.`,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group/card relative h-full overflow-hidden rounded-xl bg-gray-800 p-px hover:after:opacity-20 group-hover:before:opacity-100 transition-shadow duration-300"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 p-5 sm:p-6 flex flex-col">
                <Image
                  src={item.img}
                  width={280}
                  height={200}
                  alt={item.title}
                  className="mx-auto mb-4 w-full max-w-[180px] sm:max-w-[220px] object-contain"
                  priority
                />
                <h3 className="text-md sm:text-lg font-semibold text-[#E0F7FF] text-center mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#AEE8FF] text-center mb-2">
                  {item.date}
                </p>
                <p className="text-[#D1EAF5]/70 text-xs sm:text-sm leading-snug text-center flex-grow">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </Spotlight>
      </div>
    </section>
  );
}
