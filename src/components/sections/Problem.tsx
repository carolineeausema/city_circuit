"use client";
import { ReactNode } from "react";

interface ProblemProps {
  rootRef?: React.RefObject<HTMLElement>;
  children?: ReactNode;
}

export default function Problem({ rootRef, children }: ProblemProps) {
  return (
    <section ref={rootRef} className="h-screen flex items-center justify-center bg-blue-900 text-white px-8">
      <div className="max-w-2xl text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">The Problem</h2>
        <p className="text-lg leading-relaxed text-gray-200">
          Millions live in transit deserts—areas where public transportation is scarce or unreliable.
          This limits access to jobs, education, and essential services.
        </p>
        {children}
      </div>
    </section>
  );
}
