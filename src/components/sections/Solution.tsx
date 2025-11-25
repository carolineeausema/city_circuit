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
          >
            <div className="relative group">
              <a 
                href="https://chriswhong.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block relative overflow-hidden rounded-lg"
              >
                <img 
                  src="/transit desert.jpg" 
                  alt="Transit Desert Visualization"
                  className="w-full h-auto transition-opacity hover:opacity-90"
                  style={{
                    clipPath: 'inset(0 0 40% 0)',
                    transform: 'scale(1)',
                    transformOrigin: 'top center'
                  }}
                />
              </a>
              {/* Hover popup - moved outside the link so it doesn't get clipped */}
              <div className="absolute top-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                Map credits: https://chriswhong.com/
              </div>
            </div>
          </motion.div>
        </div>

        {children}
      </motion.div>
    </section>
    
  );
}
