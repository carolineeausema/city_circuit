"use client";
import React from "react";
import BottomLine from "@/components/BottomLine";
import CornerP5 from "@/components/CornerP5";
import Landing from "@/components/sections/Landing";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Details from "@/components/sections/Details";
import { useInView, useScroll, useTransform, motion } from "framer-motion";
import { useState } from "react";
import SectionDivider from "@/components/SectionDivider";

export default function HomePage() {
  const landingRef = React.useRef<HTMLElement>(null!);
  const problemRef = React.useRef<HTMLElement>(null!);
  const solutionRef = React.useRef<HTMLElement>(null!);
  const detailsRef = React.useRef<HTMLElement>(null!);
  const [showTooltip, setShowTooltip] = useState(false);

  const stations = [
    { label: "Problem", color: "#EE352E", ref: problemRef }, // Red
    { label: "Idea", color: "#FCCC0A", ref: solutionRef }, // Keep yellow
    { label: "Solution", color: "#00933C", ref: detailsRef }, // Green
  ];

  // For BottomLine, compute inView
  const stationsWithInView = stations.map((s) => ({
    ...s,
    inView: useInView(s.ref as any, { amount: 0.35, once: false }),
  }));

  return (
    <main className="relative overflow-x-visible min-h-screen">
      {/* Layer 1: White background (bottom) */}
      <div className="fixed top-0 left-0 w-full h-full bg-white -z-10" />

  {/* Layer 2: (SVG subway map background is now handled in Landing section) */}
      
      {/* Layer 3: All page content (top) - opaque backgrounds */}
      <div className="relative z-10">
        {/* Asterisk with hover tooltip */}
        <div className="fixed top-8 left-8 z-40 group cursor-pointer">
          <div
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="text-6xl font-bold hover:text-gray-500 transition-colors"
            style={{ color: "#00933C" }}
          >
            *
          </div>
          
          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute left-16 top-0 bg-white/80 backdrop-blur-md border border-gray-200/30 rounded-lg p-4 w-72 shadow-lg ring-1 ring-black/10">
              <p className="text-sm text-gray-900 leading-relaxed">
                This is a website with graphics I programmed myself - which is super fun! ....but if there are some glitchy graphics or formatting, it is likely because this site prefers Chrome with regular dimensions uwu
              </p>
            </div>
          )}
        </div>

        <BottomLine stations={stationsWithInView} />

        <Landing rootRef={landingRef} />
        {/* Fade this first divider from invisible to visible as the user scrolls */}
        <motion.div style={{ opacity: useTransform(useScroll().scrollY, [0, 300], [0, 1]) }}>
          <SectionDivider color="#0039A6" number={1} />
        </motion.div>

        <div className="h-25" />

        <Problem rootRef={problemRef} />
  <SectionDivider color="#FCCC0A" number={2} thickness={3} />

  <Solution rootRef={solutionRef} onQuickSim={() => landingRef.current?.scrollIntoView({ behavior: 'smooth' })} />
  <SectionDivider color="#EE352E" number={3} />

        <Details rootRef={detailsRef} />

        {/* Extra space for bottom line */}
        <div className="h-32 bg-white" />
      </div>
    </main>
  );
}