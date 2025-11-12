"use client";
import { ReactNode, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SubwayMapBackground from "../SubwayMapBackground";

interface LandingProps {
  rootRef?: React.RefObject<HTMLElement>;
  children?: ReactNode;
}

export default function Landing({ rootRef, children }: LandingProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [hovered, setHovered] = useState(false);
  const [mouse, setMouse] = useState<{ x: number; y: number } | null>(null);

  return (
    <section
      ref={rootRef}
      className="flex items-center justify-center px-8 relative bg-white"
      style={{ color: "#00933C", minHeight: "100vh" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setMouse(null); }}
      onMouseMove={e => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        setMouse({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
    >
      {/* Animated subway SVG background */}
      <SubwayMapBackground hovered={hovered} mouse={mouse} />

      <div className="max-w-4xl text-center relative z-10">
        <h1 className="text-6xl font-extrabold tracking-tight" style={{ color: "#00933C" }}>City Circuit</h1>
        <p className="text-xl mt-4 max-w-2xl mx-auto" style={{ color: "#00933C" }}>
          A web-based simulation and visualization platform that makes transit planning transparent and participatory.
        </p>
        <p className="text-lg mt-6 max-w-3xl mx-auto italic font-medium" style={{ color: "#00933C" }}>
          Visualize how small shifts in service create large shifts in access, opportunity, and equity.
        </p>
        {children}
      </div>

      {/* Scroll to explore text that fades out */}
      <motion.div
        ref={scrollRef}
        style={{ opacity, color: "#00933C" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-sm pointer-events-none z-10"
      >
        <div className="animate-bounce">↓ Scroll to explore</div>
      </motion.div>
    </section>
  );
}
