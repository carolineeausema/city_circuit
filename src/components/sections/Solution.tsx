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
    <section ref={rootRef} className="min-h-screen flex items-center justify-center px-8 py-16 bg-white" style={{ color: "#FCCC0A" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-4xl mx-auto"
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
            
          </div>
        </div>

        {/* Proposed Solution - Graphic summary */}
        <div className="mb-12">
          <h2 className="text-5xl font-bold mb-6" style={{ color: "#FCCC0A" }}>Proposed Solution: City Circuit</h2>

          <p className="text-lg mb-6" style={{ color: "#FCCC0A" }}>
            City Circuit is a visual, interactive platform that makes transit changes legible immediately — for agencies, advocates, and communities.
          </p>

          {/* At-a-glance stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 rounded-lg p-6 flex flex-col items-start"
              style={{ borderLeft: '6px solid #FCCC0A' }}
            >
              <div className="text-5xl font-extrabold" style={{ color: "#FCCC0A" }}>−15%</div>
              <div className="mt-2 text-sm text-gray-100">Average commute time</div>
              <div className="mt-3 text-sm text-gray-300">Simulations show targeted routing reduces commute time for underserved neighborhoods.</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="bg-white/5 rounded-lg p-6 flex flex-col items-start"
              style={{ borderLeft: '6px solid #00AEEF' }}
            >
              <div className="text-5xl font-extrabold" style={{ color: "#00AEEF" }}>+34%</div>
              <div className="mt-2 text-sm text-gray-100">Jobs reachable</div>
              <div className="mt-3 text-sm text-gray-300">Adding/redistributing services increases reachable jobs within 45 minutes.</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16 }}
              className="bg-white/5 rounded-lg p-6 flex flex-col items-start"
              style={{ borderLeft: '6px solid #00933C' }}
            >
              <div className="text-5xl font-extrabold" style={{ color: "#00933C" }}>Equitable</div>
              <div className="mt-2 text-sm text-gray-100">Distribution</div>
              <div className="mt-3 text-sm text-gray-300">Prioritizes improvements for high-need communities based on demographics.</div>
            </motion.div>
          </div>

          {/* Short explainer CTA */}
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <button onClick={() => onQuickSim?.()} className="px-5 py-3 rounded-md font-semibold" style={{ background: '#FCCC0A', color: '#000' }}>Try a quick simulation</button>
            <p className="text-sm text-gray-300 mt-2 sm:mt-0">Start by drawing a route or selecting a neighborhood to see immediate impacts.</p>
          </div>
        </div>

        {/* Core Features - visual cards */}
        <div>
          <h3 className="text-4xl font-bold mb-6" style={{ color: "#FCCC0A" }}>Core Features</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div className="flex gap-4 items-start p-6 rounded-lg bg-white/5" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <div className="w-14 h-14 rounded-md flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.04)' }}>
                <span className="text-2xl">📍</span>
              </div>
              <div>
                <h4 className="text-xl font-bold" style={{ color: '#FCCC0A' }}>Interactive Transit Map</h4>
                <p className="text-sm text-gray-300 mt-2">GTFS-based routes with layered demographics so users can see who benefits from each change.</p>
              </div>
            </motion.div>

            <motion.div className="flex gap-4 items-start p-6 rounded-lg bg-white/5" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.06 }}>
              <div className="w-14 h-14 rounded-md flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.04)' }}>
                <span className="text-2xl">🔄</span>
              </div>
              <div>
                <h4 className="text-xl font-bold" style={{ color: '#FCCC0A' }}>
                  "What If?" Simulation
                </h4>
                <p className="text-sm text-gray-300 mt-2">Add/adjust routes and instantly see changes in commute times, reachability, and emissions.</p>
              </div>
            </motion.div>

            <motion.div className="flex gap-4 items-start p-6 rounded-lg bg-white/5" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.12 }}>
              <div className="w-14 h-14 rounded-md flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.04)' }}>
                <span className="text-2xl">⚖️</span>
              </div>
              <div>
                <h4 className="text-xl font-bold" style={{ color: '#FCCC0A' }}>Equity Visualization</h4>
                <p className="text-sm text-gray-300 mt-2">Clear before/after visuals and export-ready graphics for grants and outreach.</p>
              </div>
            </motion.div>

            <motion.div className="flex gap-4 items-start p-6 rounded-lg bg-white/5" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.18 }}>
              <div className="w-14 h-14 rounded-md flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.04)' }}>
                <span className="text-2xl">📊</span>
              </div>
              <div>
                <h4 className="text-xl font-bold" style={{ color: '#FCCC0A' }}>Storytelling Layer</h4>
                <p className="text-sm text-gray-300 mt-2">Narrative-ready visuals that translate numbers into human impact for presentations and community meetings.</p>
              </div>
            </motion.div>
          </div>
        </div>

        {children}
      </motion.div>
    </section>
  );
}
