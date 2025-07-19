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
import RegisterNow from "@/components/RegisterNow";
import Preloader from "@/components/Preloader";
import SponsorSlider from "@/components/SponsorSlider";
import DigitalPartner from "@/components/DigitalPartner";
import EventStats from "@/components/EventStats";


export default function Home() {
  return (
    <>
      <Preloader />
      <PageIllustration />
      <Hero />
      <EventStats />
      <Features />
      <RegisterNow />
      <Workflows />
      <Testimonials />
      <SponsorSlider/>
      <DigitalPartner />
      <Cta />
      <Chatbot />
    </>
  );
}
