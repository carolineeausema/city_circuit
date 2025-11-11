"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SolutionProps {
  rootRef?: React.RefObject<HTMLElement>;
  children?: ReactNode;
}

export default function Solution({ rootRef, children }: SolutionProps) {
  return (
    <section ref={rootRef} className="h-screen flex items-center justify-center px-8" style={{ backgroundColor: "#FCCC0A", color: "black" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl text-center"
      >
        <h2 className="text-4xl font-bold mb-4">Our Solution</h2>
        <p className="text-lg leading-relaxed text-black/80">
          City Circuit models how small improvements in public transport networks can reshape
          access — showing how added routes, micro-mobility options, or smart hubs transform
          commute times and opportunities.
        </p>
        {children}
      </motion.div>
    </section>
  );
}
