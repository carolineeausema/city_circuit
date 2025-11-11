"use client";
import { ReactNode } from "react";

interface ProblemProps {
  rootRef?: React.RefObject<HTMLElement>;
  children?: ReactNode;
}

export default function Problem({ rootRef, children }: ProblemProps) {
  return (
    <section ref={rootRef} className="flex items-center justify-center px-8 bg-white" style={{ color: "#0039A6", minHeight: "100vh" }}>
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl font-bold mb-6" style={{ color: "#0039A6" }}>The Problem</h2>
        
        <div className="space-y-4 text-lg leading-relaxed mb-6" style={{ color: "#0039A6" }}>
          <p>
            Public transit is one of the strongest levers local governments have to advance equity, opportunity, and sustainability — yet the process for planning new routes or improvements remains opaque and data-heavy.
          </p>
          
          <p>
            Transit agencies rely on technical models and static reports that rarely translate into intuitive, human-centered insights. Communities living in transit deserts — areas with poor access to reliable public transportation — are often young, lower-income, or disabled residents who face the steepest barriers to education, employment, and healthcare.
          </p>
          
          <p>
            While public input is technically "invited," most residents can't see or simulate how proposed changes would affect their daily lives.
          </p>
        </div>
        
        <div className="border-t-2 pt-4 mt-6" style={{ borderColor: "#0039A6" }}>
          <p className="text-base font-semibold italic" style={{ color: "#0039A6" }}>
            Transit planners have data, but not a shared story that shows how route changes shift opportunity and access.
          </p>
        </div>
        
        {children}
      </div>
    </section>
  );
}
