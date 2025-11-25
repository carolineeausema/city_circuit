"use client";
import React from "react";
import BottomLine from "@/components/BottomLine";
import CornerP5 from "@/components/CornerP5";
import Landing from "@/components/sections/Landing";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Details from "@/components/sections/Details";
import { useInView, useScroll, useTransform, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import SectionDivider from "@/components/SectionDivider";

export default function HomePage() {
  const landingRef = React.useRef<HTMLElement>(null!);
  const problemRef = React.useRef<HTMLElement>(null!);
  const solutionRef = React.useRef<HTMLElement>(null!);
  const detailsRef = React.useRef<HTMLElement>(null!);
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const stations = [
    { label: "Problem", color: "#EE352E", ref: problemRef }, // Red
    { label: "Idea", color: "#FCCC0A", ref: solutionRef }, // Keep yellow
    { label: "Solution", color: "#00933C", ref: detailsRef }, // Green
  ];

  // Handle click outside to close tooltip
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
        setShowTooltip(false);
      }
    };

    if (showTooltip) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showTooltip]);

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
        {/* Asterisk with click tooltip */}
        <div ref={tooltipRef} className="fixed top-8 left-8 z-40 group cursor-pointer">
          <div
            onClick={() => setShowTooltip(!showTooltip)}
            className="text-6xl font-bold hover:text-gray-500 transition-colors"
            style={{ color: "#00933C" }}
          >
            *
          </div>
          
          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute left-16 top-0 bg-white/90 backdrop-blur-md border border-gray-200/30 rounded-lg p-4 w-80 shadow-lg ring-1 ring-black/10">
              <div className="space-y-3">
                <p className="text-sm text-gray-900 leading-relaxed">
                  This website features custom-built interactive graphics and animations. For optimal performance, please use Chrome with standard screen dimensions.
                </p>
                <div className="pt-2 border-t border-gray-200">
                  <a 
                    href="https://github.com/carolineeausema/city_circuit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-green-700 hover:text-green-800 font-medium transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    View Source Code
                  </a>
                  <p className="text-xs text-gray-500 mt-2">
                    Note: This link leads to my GitHub repository and will show my name.
                  </p>
                </div>
              </div>
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