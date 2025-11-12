"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SolutionProps {
  rootRef?: React.RefObject<HTMLElement>;
  children?: ReactNode;
}

export default function Solution({ rootRef, children }: SolutionProps) {
  return (
    <section ref={rootRef} className="min-h-screen flex items-center justify-center px-8 py-16 bg-white" style={{ color: "#FCCC0A" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-5xl"
      >
        {/* Opportunity Section */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-8" style={{ color: "#FCCC0A" }}>Opportunity</h2>
          <div className="space-y-5 text-lg leading-relaxed" style={{ color: "#FCCC0A" }}>
            <p>
              Federal programs like the <strong>FTA's Reconnecting Communities</strong> and <strong>Thriving Communities Initiative</strong> increasingly require data-backed equity justifications in transportation proposals.
            </p>
            
            <p>
              However, local governments and MPOs (Metropolitan Planning Organizations) lack tools that can visualize these impacts in human terms — particularly across demographic and socioeconomic layers.
            </p>
            
            <p className="font-bold text-xl text-black">
              Street Shift proposes to fill that gap.
            </p>
          </div>
        </div>

        {/* Proposed Solution Section */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-8" style={{ color: "#FCCC0A" }}>Proposed Solution: City Circuit</h2>
          
          <p className="text-xl leading-relaxed mb-8 font-semibold" style={{ color: "#FCCC0A" }}>
            City Circuit is a web-based simulation and visualization platform that makes transit planning transparent and participatory. It allows both policymakers and residents to visualize the ripple effects of route changes in real time — showing how small shifts in service can create large shifts in access, opportunity, and equity.
          </p>
        </div>

        {/* Core Features */}
        <div>
          <h3 className="text-4xl font-bold mb-8" style={{ color: "#FCCC0A" }}>Core Features</h3>
          
          <div className="space-y-8">
            {/* Interactive Transit Map */}
            <div className="bg-white/10 rounded-lg p-6 border-l-4" style={{ borderColor: "#FCCC0A" }}>
              <h4 className="text-2xl font-bold mb-4" style={{ color: "#FCCC0A" }}>📍 Interactive Transit Map</h4>
              <ul className="space-y-3 text-lg" style={{ color: "#FCCC0A" }}>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Displays all existing bus and rail routes using GTFS data.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Overlays demographics (income, age, disability status, car ownership).</span>
                </li>
              </ul>
            </div>

            {/* What If Simulation Mode */}
            <div className="bg-white/10 rounded-lg p-6 border-l-4" style={{ borderColor: "#FCCC0A" }}>
              <h4 className="text-2xl font-bold mb-4" style={{ color: "#FCCC0A" }}>🔄 "What If?" Simulation Mode</h4>
              <ul className="space-y-3 text-lg" style={{ color: "#FCCC0A" }}>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Users can propose adding a new route, adjusting frequency, or extending a line.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>The platform recalculates key accessibility metrics — commute times, jobs reachable, emissions impact.</span>
                </li>
              </ul>
            </div>

            {/* Equity Visualization */}
            <div className="bg-white/10 rounded-lg p-6 border-l-4" style={{ borderColor: "#FCCC0A" }}>
              <h4 className="text-2xl font-bold mb-4" style={{ color: "#FCCC0A" }}>⚖️ Equity Visualization</h4>
              <ul className="space-y-3 text-lg" style={{ color: "#FCCC0A" }}>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Highlights which communities see the biggest improvements or remain underserved.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Generates simple "before and after" visuals that can be exported for grant applications or advocacy.</span>
                </li>
              </ul>
            </div>

            {/* Storytelling Layer */}
            <div className="bg-white/10 rounded-lg p-6 border-l-4" style={{ borderColor: "#FCCC0A" }}>
              <h4 className="text-2xl font-bold mb-4" style={{ color: "#FCCC0A" }}>📊 Storytelling Layer</h4>
              <ul className="space-y-3 text-lg" style={{ color: "#FCCC0A" }}>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Converts complex transit data into intuitive graphics that communicate both numbers and human impact.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {children}
      </motion.div>
    </section>
  );
}
