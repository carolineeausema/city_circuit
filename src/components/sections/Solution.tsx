"use client";
import { motion } from "framer-motion";

export default function Solution() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-100 px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl text-center"
      >
        <h2 className="text-4xl font-bold mb-4">Our Solution</h2>
        <p className="text-lg leading-relaxed">
          City Circuit models how small improvements in public transport networks can reshape
          access — showing how added routes, micro-mobility options, or smart hubs transform
          commute times and opportunities.
        </p>
      </motion.div>
    </section>
  );
}
