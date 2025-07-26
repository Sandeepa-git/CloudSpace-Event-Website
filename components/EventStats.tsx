"use client";

import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Head from "next/head";

export default function EventStats() {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });

  const [showFirstImage, setShowFirstImage] = useState(false);
  const [showSecondImage, setShowSecondImage] = useState(false);
  const [showThirdImage, setShowThirdImage] = useState(false);
  const [showFourthImage, setShowFourthImage] = useState(false);

  useEffect(() => {
    if (inView1) {
      setShowFirstImage(true);
      const timer = setTimeout(() => setShowSecondImage(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [inView1]);

  useEffect(() => {
    if (inView2) {
      setShowThirdImage(true);
      const timer = setTimeout(() => setShowFourthImage(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [inView2]);

  // SEO Metadata
  const title = "Event Stats - CloudSpace v1.0 by IEEE Computer Society SLTC";
  const description =
    "Explore the statistics of CloudSpace v1.0, the premier cloud computing event organized by the IEEE Computer Society Student Branch Chapter of SLTC.";
  const url = "https://yourdomain.com/event-stats"; // Replace with your actual URL
  const image = "https://yourdomain.com/images/event-stats-og.png"; // Replace with your social preview image URL

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <section
        className="relative bg-black py-16 sm:py-20 px-4 sm:px-6 lg:px-12"
        aria-label="Event statistics and participant images"
      >
        <div className="max-w-6xl mx-auto border-t border-[#00C3FF1A] pt-12">
          {/* ----------- PHASE 01 ----------- */}
          <SectionHeading title="Phase 01 Completed" />
          <CountCard
            inView={inView1}
            count={153}
            label="Participants in Phase 01"
          />
          <div
            ref={ref1}
            className="flex flex-wrap sm:flex-nowrap justify-center gap-8 mb-20"
          >
            <ImageCard
              visible={showFirstImage}
              src="/images/Session 01.png"
              alt="Phase 01 Participants"
            />
            <ImageCard
              visible={showSecondImage}
              src="/images/Phase 01 All.jpg"
              alt="Phase 01 Group Photo"
            />
          </div>

          {/* ----------- PHASE 02 ----------- */}
          <SectionHeading title="Phase 02 Completed" />
          <CountCard
            inView={inView2}
            count={85}
            label="Participants in Phase 02"
          />
          <div
            ref={ref2}
            className="flex flex-wrap sm:flex-nowrap justify-center gap-8 mb-20"
          >
            <ImageCard
              visible={showThirdImage}
              src="/images/Session02_01.png"
              alt="Phase 02 Participants"
            />
            <ImageCard
              visible={showFourthImage}
              src="/images/Session02_02.png"
              alt="Phase 02 Group Photo"
            />
          </div>

          {/* ----------- TOTAL PARTICIPANTS ----------- */}
          <div ref={ref3}>
            <SectionHeading title="Event Total Participants" />
            <CountCard
              inView={inView3}
              count={238}
              label="Total Participants in All Phases"
            />
          </div>
        </div>
      </section>
    </>
  );
}

// ----- Subcomponents -----

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center mb-10 sm:mb-12">
      <div className="inline-flex items-center gap-3">
        <span className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#00C3FF80]" />
        <div className="flex flex-col items-center text-center">
          <h2
            className="text-3xl sm:text-4xl font-semibold text-transparent bg-gradient-to-r from-[#00C3FF] via-[#0068FF] to-[#00C3FF] bg-[length:200%_auto] bg-clip-text animate-[gradient_9s_linear_infinite]"
            tabIndex={0}
          >
            {title}
          </h2>
        </div>
        <span className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#00C3FF80]" />
      </div>
    </div>
  );
}

function CountCard({
  inView,
  count,
  label,
}: {
  inView: boolean;
  count: number;
  label: string;
}) {
  return (
    <div className="w-full flex flex-col justify-center gap-6 text-center mb-10">
      <div className="group border border-[#00C3FF30] rounded-2xl p-6 sm:p-8 shadow-md hover:scale-105 transition-transform duration-300 mx-auto max-w-md">
        <h3 className="mb-2 text-lg sm:text-xl font-semibold text-[#E0F7FF]">
          {label}
        </h3>
        <p className="text-4xl sm:text-5xl font-bold text-[#00C3FF] group-hover:text-[#0068D1] transition-colors duration-300" aria-live="polite" aria-atomic="true">
          {inView ? <CountUp end={count} duration={5} /> : 0}
        </p>
      </div>
    </div>
  );
}

function ImageCard({
  visible,
  src,
  alt,
}: {
  visible: boolean;
  src: string;
  alt: string;
}) {
  return (
    <div
      className={`w-full sm:w-1/2 max-w-[500px] rounded-xl shadow-xl border border-[#00C3FF30] overflow-hidden transition-opacity duration-1000 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden={!visible}
    >
      {visible && (
        <Image
          src={src}
          alt={alt}
          width={600}
          height={400}
          className={`object-cover w-full h-auto transition-all duration-1000 ${
            visible ? "grayscale-0" : "grayscale"
          }`}
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  );
}
