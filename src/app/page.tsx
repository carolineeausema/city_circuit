"use client";
import React from "react";
import AnimatedSection from "@/components/AnimatedCircuit";
import BottomLine from "@/components/BottomLine";
import { useInView } from "framer-motion";

export default function HomePage() {
  const landingRef = React.useRef<HTMLElement>(null!);
  const problemRef = React.useRef<HTMLElement>(null!);
  const solutionRef = React.useRef<HTMLElement>(null!);
  const detailsRef = React.useRef<HTMLElement>(null!);

  const stations = [
    { label: "Landing", color: "#00933C", ref: landingRef },
    { label: "Problem", color: "#0039A6", ref: problemRef },
    { label: "Solution", color: "#FCCC0A", ref: solutionRef },
    { label: "Details", color: "#EE352E", ref: detailsRef },
  ];

  // For BottomLine, compute inView
  const stationsWithInView = stations.map((s) => ({
    ...s,
    inView: useInView(s.ref as any, { amount: 0.35, once: false }),
  }));

  return (
    <main className="relative overflow-x-hidden bg-black min-h-screen">
      <BottomLine stations={stationsWithInView} />

      <AnimatedSection rootRef={landingRef} className="bg-[#00933C] text-white" sectionId="landing">
        <h1 className="text-6xl font-extrabold tracking-tight">City Circuit</h1>
        <p className="text-xl text-gray-100 mt-4 max-w-xl mx-auto">
          Rethinking how transportation connects people, neighborhoods, and opportunity.
        </p>
        <div className="absolute bottom-10 animate-bounce text-sm opacity-80">↓ Next Stop</div>
      </AnimatedSection>

      <AnimatedSection rootRef={problemRef} className="bg-[#0039A6] text-white" sectionId="problem">
        <h2 className="text-4xl font-bold mb-4">The Problem</h2>
        <p className="max-w-2xl text-lg leading-relaxed text-gray-100">
          Millions live in transit deserts—areas where public transportation is scarce or unreliable.
        </p>
      </AnimatedSection>

      <AnimatedSection rootRef={solutionRef} className="bg-[#FCCC0A] text-black" sectionId="solution">
        <h2 className="text-4xl font-bold mb-4">The Solution</h2>
        <p className="max-w-2xl text-lg leading-relaxed text-black/80">
          City Circuit visualizes how better transit connections can shorten commute times and expand opportunities.
        </p>
      </AnimatedSection>

      <AnimatedSection rootRef={detailsRef} className="bg-[#EE352E] text-white" sectionId="details">
        <h2 className="text-4xl font-bold mb-4">More Details</h2>
        <p className="max-w-3xl text-lg leading-relaxed text-gray-100">
          Dive deeper into data and see how small improvements ripple across communities.
        </p>
      </AnimatedSection>
    </main>
  );
}
