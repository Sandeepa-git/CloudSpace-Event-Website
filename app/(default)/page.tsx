export const metadata = {
  title: "CLOUDSPACE V1.0",
  description: "Explore CloudSpace — empowering the future with cutting-edge cloud technology, innovative features, and seamless workflows.",
};


import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import Chatbot from "@/components/Chatbot";


export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Features />
      <Workflows />
      <Testimonials />
      <Cta />
      <Chatbot />
    </>
  );
}
