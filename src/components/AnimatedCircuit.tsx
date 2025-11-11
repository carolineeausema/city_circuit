// components/AnimatedSection.tsx
"use client";
import React from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  rootRef: React.RefObject<HTMLElement>;
  className?: string;
  sectionId?: string;
}

export default function AnimatedSection({
  children,
  rootRef,
  className = "",
  sectionId,
}: AnimatedSectionProps) {
  // useInView on the passed ref
  const isInView = useInView(rootRef as any, { amount: 0.35, once: false });

  const variants = {
    hidden: { opacity: 0, y: 60, scale: 0.995 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <motion.section
      id={sectionId}
      ref={rootRef as any}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`h-screen flex flex-col items-center justify-center text-center px-6 relative ${className}`}
    >
      {children}
    </motion.section>
  );
}
