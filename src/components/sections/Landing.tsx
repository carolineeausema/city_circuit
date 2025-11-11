"use client";
import { ReactNode } from "react";

interface LandingProps {
  rootRef?: React.RefObject<HTMLElement>;
  children?: ReactNode;
}

export default function Landing({ rootRef, children }: LandingProps) {
  return (
    <section ref={rootRef} className="h-screen flex items-center justify-center bg-black text-white px-8">
      <div className="max-w-4xl text-center">
        <h1 className="text-6xl font-extrabold tracking-tight text-white">City Circuit</h1>
        <p className="text-xl text-gray-200 mt-4 max-w-xl mx-auto">
          Rethinking how transportation connects people, neighborhoods, and opportunity.
        </p>
        <div className="absolute bottom-10 animate-bounce text-sm opacity-70">
          ↓ Scroll to explore
        </div>
        {children}
      </div>
    </section>
  );
}
