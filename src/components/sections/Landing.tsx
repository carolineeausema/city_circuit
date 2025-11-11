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
    <section ref={rootRef} className="h-screen flex items-center justify-center px-8 relative" style={{ backgroundColor: "#00933C" }}>
      <div className="max-w-4xl text-center">
        <h1 className="text-6xl font-extrabold tracking-tight text-white">City Circuit</h1>
        <p className="text-xl text-gray-200 mt-4 max-w-xl mx-auto">
          Rethinking how transportation connects people, neighborhoods, and opportunity.
        </p>
        {children}
      </div>

      {/* Scroll to explore text that fades out */}
      <motion.div
        ref={scrollRef}
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-sm text-white pointer-events-none"
      >
        <div className="animate-bounce">↓ Scroll to explore</div>
      </motion.div>
    </section>
  );
}
