"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface DetailsProps {
  rootRef?: React.RefObject<HTMLElement>;
  children?: ReactNode;
}

export default function Details({ rootRef, children }: DetailsProps) {
  return (
    <section ref={rootRef} className="min-h-screen flex items-center justify-center px-8 py-16" style={{ backgroundColor: "#EE352E", color: "white" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-4xl"
      >
        <h2 className="text-4xl font-bold mb-12">How It Works</h2>

        {/* Data Integration */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">1. Data Integration</h3>
          <ul className="space-y-3 text-lg leading-relaxed text-gray-100">
            <li className="flex items-start">
              <span className="font-bold mr-4">•</span>
              <span><strong>GTFS Data:</strong> pulls from public transit schedules and stops.</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-4">•</span>
              <span><strong>Census & ACS Data:</strong> demographic and socioeconomic overlays.</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-4">•</span>
              <span><strong>Accessibility Models:</strong> measures how many key destinations (jobs, schools, clinics) are reachable within 30–60 minutes.</span>
            </li>
          </ul>
        </div>

        {/* Interactive Map Interface */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">2. Interactive Map Interface</h3>
          <ul className="space-y-3 text-lg leading-relaxed text-gray-100">
            <li className="flex items-start">
              <span className="font-bold mr-4">•</span>
              <span>Default view centered on Sacramento.</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-4">•</span>
              <span>Layer toggles for income, age, and disability status.</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-4">•</span>
              <span>A "Simulate" mode where users can propose route changes and instantly visualize ripple effects.</span>
            </li>
          </ul>
        </div>

        {/* Storytelling & Advocacy */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">3. Storytelling & Advocacy</h3>
          <ul className="space-y-3 text-lg leading-relaxed text-gray-100">
            <li className="flex items-start">
              <span className="font-bold mr-4">•</span>
              <span>Generates before-and-after visualizations that show access improvements.</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-4">•</span>
              <span>Exports simple impact reports to strengthen community grant applications and policy proposals.</span>
            </li>
          </ul>
        </div>

        {/* Innovation Impact Table */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Innovation Impact</h3>
          <div className="bg-white/10 rounded-lg overflow-hidden">
            <table className="w-full text-lg">
              <thead className="bg-white/20 border-b border-white/30">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Impact Area</th>
                  <th className="px-6 py-4 text-left font-bold">Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/20">
                <tr className="hover:bg-white/5 transition">
                  <td className="px-6 py-4">Equity & Inclusion</td>
                  <td className="px-6 py-4">Makes transportation planning transparent, participatory, and community-driven.</td>
                </tr>
                <tr className="hover:bg-white/5 transition">
                  <td className="px-6 py-4">Data Modernization</td>
                  <td className="px-6 py-4">Uses open civic data to support evidence-based decision-making.</td>
                </tr>
                <tr className="hover:bg-white/5 transition">
                  <td className="px-6 py-4">Civic Trust</td>
                  <td className="px-6 py-4">Visualizes the tangible human benefit of government investment, improving trust and engagement.</td>
                </tr>
                <tr className="hover:bg-white/5 transition">
                  <td className="px-6 py-4">Sustainability</td>
                  <td className="px-6 py-4">Quantifies environmental benefits of improved transit access and reduced car dependence.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Example Scenario */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Example Scenario: Sacramento</h3>
          <div className="bg-white/10 rounded-lg p-6 border-l-4 border-white/50">
            <p className="text-lg leading-relaxed text-gray-100 mb-4">
              A young adult living in South Sacramento currently faces a 75-minute commute by bus to downtown.
            </p>
            <p className="text-lg leading-relaxed text-gray-100 mb-4">
              Street Shift lets planners simulate adding a new bus connector or extending light rail service — showing that the same person could reach downtown in 45 minutes and access 12,000 more jobs.
            </p>
            <p className="text-lg leading-relaxed text-gray-100">
              This visualization helps local governments justify funding applications and helps residents advocate for the change with evidence and empathy.
            </p>
          </div>
        </div>

        {/* Long-Term Vision */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Long-Term Vision</h3>
          <ul className="space-y-3 text-lg leading-relaxed text-gray-100">
            <li className="flex items-start">
              <span className="font-bold mr-4">•</span>
              <span>Street Shift could evolve into a nationwide civic platform that integrates with MPO and DOT datasets — a "digital twin" for transit equity.</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-4">•</span>
              <span>Over time, AI-driven simulations could recommend optimal routes or pilot projects based on real community priorities.</span>
            </li>
          </ul>
        </div>

        {/* Vision Statement */}
        <div className="bg-white/20 rounded-lg p-8 text-center border border-white/30">
          <p className="text-xl italic font-semibold text-gray-50">
            "Street Shift reimagines public transit planning as a shared act of storytelling — using data to visualize how equitable mobility creates thriving communities."
          </p>
        </div>

        {children}
      </motion.div>

    </section>
    
  );
}
