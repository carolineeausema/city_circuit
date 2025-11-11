"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SolutionProps {
  rootRef?: React.RefObject<HTMLElement>;
  children?: ReactNode;
}

export default function Solution({ rootRef, children }: SolutionProps) {
  return (
    <section ref={rootRef} className="min-h-screen flex items-center justify-center px-8 py-16" style={{ backgroundColor: "#FCCC0A", color: "black" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-4xl"
      >
        {/* Opportunity Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-6">Solution</h2>
          <div className="space-y-4 text-lg leading-relaxed text-black/80">
            <p>
              Federal and regional funding for transportation increasingly prioritizes equity, climate resilience, and public participation.
              Programs such as the FTA's Reconnecting Communities Initiative and Thriving Communities Program require cities to demonstrate data-backed equity impacts of their proposals.
            </p>
            
            <p>
              However, local agencies often lack the tools to visualize those impacts interactively — leaving valuable funding and trust on the table.
            </p>
            
            <p className="font-semibold text-black">
              Street Shift fills this gap by transforming open transportation data into a visual, simulation-based platform that helps both governments and citizens understand how small shifts in transit planning can lead to big changes in access, opportunity, and sustainability.
            </p>
          </div>
        </div>

        {/* Proposed Solution Section */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Proposed Solution: Street Shift</h2>
          
          <p className="text-lg leading-relaxed text-black/80 mb-6">
            Street Shift is a web-based decision-support and storytelling platform that:
          </p>
          
          <ul className="space-y-4 text-lg leading-relaxed text-black/80 mb-6">
            <li className="flex items-start">
              <span className="font-bold mr-4">•</span>
              <span><strong>Maps current transit access</strong> across a city (starting with Sacramento).</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-4">•</span>
              <span><strong>Overlays key demographic data</strong> (income, age, disability, car ownership).</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-4">•</span>
              <span><strong>Lets users simulate transit improvements</strong> — such as adding a new bus line or extending a route.</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-4">•</span>
              <span><strong>Calculates impacts in real time</strong>, showing how commute times, job access, and emissions outcomes change.</span>
            </li>
          </ul>

          <p className="text-lg leading-relaxed text-black italic font-semibold">
            The platform bridges the technical and human dimensions of transit planning — empowering citizens, advocates, and government partners alike to design systems that reflect lived experience, not just ridership numbers.
          </p>
        </div>

        {children}
      </motion.div>
    </section>
  );
}
