"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SolutionProps {
  rootRef?: React.RefObject<HTMLElement>;
  children?: ReactNode;
  onQuickSim?: () => void;
}

export default function Solution({ rootRef, children, onQuickSim }: SolutionProps) {
  return (
    <section ref={rootRef} className="min-h-screen flex items-center justify-center px-8 pt-24 pb-16 bg-gray-900" style={{ color: "#FCCC0A" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-4xl mx-auto"
      >
        {/* Opportunity Section */}
        <div className="mb-16">
          <h2 className="flex items-center justify-start mb-8 gap-8">
            <span className="text-5xl font-bold" style={{ color: "#FCCC0A" }}>Opportunity:</span>
            <span className="text-5xl font-bold" style={{ color: "transparent", WebkitTextStroke: "2px #FCCC0A", WebkitTextFillColor: "transparent" }}>City Circuit</span>
          </h2>
          <div className="space-y-5 text-lg leading-relaxed" style={{ color: "#FCCC0A" }}>
            <p>
              Federal programs like the <strong>FTA's Reconnecting Communities</strong> and <strong>Thriving Communities Initiative</strong> increasingly require data-backed equity justifications in transportation proposals.
            </p>
            
            <p>
              However, local governments and MPOs (Metropolitan Planning Organizations) lack tools that can visualize these impacts in human terms — particularly across demographic and socioeconomic layers.
            </p>
            
          </div>
        </div>

        {/* Proposed Solution - Graphic summary */}
        <div className="mb-12">

          <p className="text-2xl mb-6 font-bold text-gray-900 px-6 py-4 rounded-lg text-center" style={{ backgroundColor: "#FCCC0A" }}>
            City Circuit is a visual, interactive platform that makes transit changes legible immediately — for agencies, advocates, and communities.
          </p>
        </div>

        <div className="h-15" />

        {/* Core Features - visual cards */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold mb-6" style={{ color: "#FCCC0A" }}>Core Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div className="flex gap-4 items-start p-6 rounded-lg bg-white/10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <div>
                <h4 className="text-xl font-bold" style={{ color: '#FCCC0A' }}>Interactive Transit Map</h4>
                <p className="text-sm text-gray-300 mt-2">GTFS-based routes with layered demographics so users can see who benefits from each change.</p>
              </div>
            </motion.div>

            <motion.div className="flex gap-4 items-start p-6 rounded-lg bg-white/10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.06 }}>
              <div>
                <h4 className="text-xl font-bold" style={{ color: '#FCCC0A' }}>
                  "What If?" Simulation
                </h4>
                <p className="text-sm text-gray-300 mt-2">Add/adjust routes and instantly see changes in commute times, reachability, and emissions.</p>
              </div>
            </motion.div>

            <motion.div className="flex gap-4 items-start p-6 rounded-lg bg-white/10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.12 }}>
              <div>
                <h4 className="text-xl font-bold" style={{ color: '#FCCC0A' }}>Equity Visualization</h4>
                <p className="text-sm text-gray-300 mt-2">Clear before/after visuals and export-ready graphics for grants and outreach.</p>
              </div>
            </motion.div>

            <motion.div className="flex gap-4 items-start p-6 rounded-lg bg-white/10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.18 }}>
              <div>
                <h4 className="text-xl font-bold" style={{ color: '#FCCC0A' }}>Storytelling Layer</h4>
                <p className="text-sm text-gray-300 mt-2">Narrative-ready visuals that translate numbers into human impact for presentations and community meetings.</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Application Preview */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 rounded-lg p-8 border-2 border-dashed border-white/20"
          >
            <div className="flex flex-col items-center justify-center h-64 text-gray-400">
              <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-lg font-medium text-center text-white mb-2">Interactive Demo Coming Soon</p>
              <p className="text-sm text-center mt-2 text-gray-400 max-w-md mb-4">
                A fully functional prototype of City Circuit's interface is currently in development
              </p>
              <a 
                href="https://github.com/carolineeausema/city_circuit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium rounded-lg transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                View Source Code
              </a>
            </div>
          </motion.div>
        </div>

        {children}
      </motion.div>
    </section>
    
  );
}
