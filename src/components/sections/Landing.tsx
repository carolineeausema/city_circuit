"use client";
import { ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface LandingProps {
  rootRef?: React.RefObject<HTMLElement>;
  children?: ReactNode;
}

export default function Landing({ rootRef, children }: LandingProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={rootRef} className="flex items-center justify-center px-8 relative bg-white" style={{ color: "#00933C", minHeight: "100vh" }}>
      <div className="max-w-4xl text-center">
        <h1 className="text-6xl font-extrabold tracking-tight" style={{ color: "#00933C" }}>City Circuit</h1>
        <p className="text-xl mt-4 max-w-xl mx-auto" style={{ color: "#00933C" }}>
          Rethinking how transportation connects people, neighborhoods, and opportunity.
        </p>
        {children}
      </div>

      {/* Scroll to explore text that fades out */}
      <motion.div
        ref={scrollRef}
        style={{ opacity, color: "#00933C" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-sm pointer-events-none"
      >
        <div className="animate-bounce">↓ Scroll to explore</div>
      </motion.div>
    </section>
  );
}
