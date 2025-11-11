"use client";
import { motion } from "framer-motion";

export default function Details() {
  return (
    <section className="h-screen flex items-center justify-center bg-white text-gray-900 px-8">
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
      </motion.div>
    </section>
  );
}
