"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface DetailsProps {
  rootRef?: React.RefObject<HTMLElement>;
  children?: ReactNode;
}

export default function Details({ rootRef, children }: DetailsProps) {
  return (
    <section ref={rootRef} className="h-screen flex items-center justify-center px-8" style={{ backgroundColor: "#EE352E", color: "white" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl text-center"
      >
        <h2 className="text-4xl font-bold mb-4">Dig Deeper</h2>
        <p className="text-lg leading-relaxed">
          Explore interactive visuals that compare cities, analyze accessibility gaps, and
          highlight how investments in mobility infrastructure ripple across communities.
        </p>
        {children}
      </motion.div>
    </section>
  );
}
