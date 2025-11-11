"use client";
import React from "react";
import BottomLine from "@/components/BottomLine";
import Landing from "@/components/sections/Landing";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Details from "@/components/sections/Details";
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

      <Landing rootRef={landingRef} />

      <Problem rootRef={problemRef} />

      <Solution rootRef={solutionRef} />

      <Details rootRef={detailsRef} />
    </main>
  );
}
