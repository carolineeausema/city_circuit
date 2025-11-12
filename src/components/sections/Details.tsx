"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface DetailsProps {
  rootRef?: React.RefObject<HTMLElement>;
  children?: ReactNode;
}

export default function Details({ rootRef, children }: DetailsProps) {
  return (
    <section ref={rootRef} className="min-h-screen flex items-center justify-center px-8 py-16" style={{ backgroundColor: "#FFF5F5", color: "#EE352E" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-6xl w-full"
      >
        <h2 className="text-5xl font-bold mb-12" style={{ color: "#EE352E" }}>How It Works</h2>

        <p className="text-xl leading-relaxed mb-12" style={{ color: "#EE352E" }}>
          The system combines multiple public data sources to simulate and visualize outcomes.
        </p>

        {/* Data Integration */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8" style={{ color: "#EE352E" }}>1. Data Integration</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-base border-collapse">
              <thead>
                <tr className="border-b-2" style={{ borderColor: "#EE352E" }}>
                  <th className="px-4 py-4 text-left font-bold" style={{ color: "#EE352E" }}>Data Type</th>
                  <th className="px-4 py-4 text-left font-bold" style={{ color: "#EE352E" }}>Purpose</th>
                  <th className="px-4 py-4 text-left font-bold" style={{ color: "#EE352E" }}>Example Sources</th>
                </tr>
              </thead>
              <tbody className="divide-y" style={{ borderColor: "#EE352E33" }}>
                <tr className="hover:bg-red-50/10 transition">
                  <td className="px-4 py-4 font-semibold" style={{ color: "#EE352E" }}>Transit Service Data</td>
                  <td className="px-4 py-4" style={{ color: "#EE352E" }}>Base layer for all routes, stops, and schedules</td>
                  <td className="px-4 py-4" style={{ color: "#EE352E" }}>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>GTFS feeds from local agencies</li>
                      <li>National Transit Map (BTS)</li>
                      <li>National Transit Database (FTA)</li>
                    </ul>
                  </td>
                </tr>
                <tr className="hover:bg-red-50/10 transition">
                  <td className="px-4 py-4 font-semibold" style={{ color: "#EE352E" }}>Demographics & Socioeconomic Data</td>
                  <td className="px-4 py-4" style={{ color: "#EE352E" }}>Identifies transit-dependent populations</td>
                  <td className="px-4 py-4" style={{ color: "#EE352E" }}>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>U.S. Census Bureau, ACS 5-year estimates</li>
                      <li>Car ownership, income, disability, age distributions</li>
                    </ul>
                  </td>
                </tr>
                <tr className="hover:bg-red-50/10 transition">
                  <td className="px-4 py-4 font-semibold" style={{ color: "#EE352E" }}>Employment & Opportunity Data</td>
                  <td className="px-4 py-4" style={{ color: "#EE352E" }}>Calculates reachable jobs and economic mobility</td>
                  <td className="px-4 py-4" style={{ color: "#EE352E" }}>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>LEHD Origin-Destination Employment Statistics (LODES)</li>
                      <li>Bureau of Labor Statistics local employment data</li>
                    </ul>
                  </td>
                </tr>
                <tr className="hover:bg-red-50/10 transition">
                  <td className="px-4 py-4 font-semibold" style={{ color: "#EE352E" }}>Geographic Boundaries & Infrastructure</td>
                  <td className="px-4 py-4" style={{ color: "#EE352E" }}>Enables accurate spatial mapping</td>
                  <td className="px-4 py-4" style={{ color: "#EE352E" }}>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Census TIGER/Line shapefiles</li>
                      <li>Local open data portals (road networks, zoning, bike lanes)</li>
                    </ul>
                  </td>
                </tr>
                <tr className="hover:bg-red-50/10 transition">
                  <td className="px-4 py-4 font-semibold" style={{ color: "#EE352E" }}>Commuting & Travel Patterns</td>
                  <td className="px-4 py-4" style={{ color: "#EE352E" }}>Validates mobility trends</td>
                  <td className="px-4 py-4" style={{ color: "#EE352E" }}>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Census Transportation Planning Products (CTPP)</li>
                      <li>OnTheMap (LEHD)</li>
                    </ul>
                  </td>
                </tr>
                <tr className="hover:bg-red-50/10 transition">
                  <td className="px-4 py-4 font-semibold" style={{ color: "#EE352E" }}>Environmental & Emissions Data</td>
                  <td className="px-4 py-4" style={{ color: "#EE352E" }}>Measures sustainability impacts</td>
                  <td className="px-4 py-4" style={{ color: "#EE352E" }}>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>EPA Smart Location Database</li>
                      <li>DOE Transportation Energy Data Book</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Analytical Layer */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8" style={{ color: "#EE352E" }}>2. Analytical Layer</h3>
          <p className="text-lg mb-6" style={{ color: "#EE352E" }}>Using these inputs, City Circuit calculates:</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-6 border-l-4" style={{ borderColor: "#EE352E" }}>
              <h4 className="text-xl font-bold mb-3" style={{ color: "#EE352E" }}>Accessibility Scores</h4>
              <p className="text-base" style={{ color: "#EE352E" }}>
                Number of jobs, schools, and hospitals reachable within 30, 45, or 60 minutes via transit.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 border-l-4" style={{ borderColor: "#EE352E" }}>
              <h4 className="text-xl font-bold mb-3" style={{ color: "#EE352E" }}>Equity Indices</h4>
              <p className="text-base" style={{ color: "#EE352E" }}>
                Overlays accessibility improvements against demographic and income data.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 border-l-4" style={{ borderColor: "#EE352E" }}>
              <h4 className="text-xl font-bold mb-3" style={{ color: "#EE352E" }}>Opportunity Gaps</h4>
              <p className="text-base" style={{ color: "#EE352E" }}>
                Identifies neighborhoods where additional routes could maximize social benefit.
              </p>
            </div>
          </div>
        </div>

        {/* User Interface */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8" style={{ color: "#EE352E" }}>3. User Interface</h3>
          <ul className="space-y-4 text-lg" style={{ color: "#EE352E" }}>
            <li className="flex items-start">
              <span className="font-bold mr-4">•</span>
              <span>Map-based web dashboard (built with open-source mapping frameworks like Mapbox GL or Leaflet).</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-4">•</span>
              <span>Simple controls to add or modify routes.</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-4">•</span>
              <span>Visual outputs such as heatmaps, isochrone maps, and equity scorecards.</span>
            </li>
          </ul>
        </div>

        {/* Implementation & Stakeholders */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8" style={{ color: "#EE352E" }}>Implementation & Stakeholders</h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 rounded-lg p-6" style={{ borderLeft: "4px solid #EE352E" }}>
              <h4 className="text-2xl font-bold mb-4" style={{ color: "#EE352E" }}>Primary Users</h4>
              <ul className="space-y-2 text-base" style={{ color: "#EE352E" }}>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Metropolitan Planning Organizations (e.g., SACOG)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>City transportation departments</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Advocacy groups & community coalitions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Researchers and grant writers</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-lg p-6" style={{ borderLeft: "4px solid #EE352E" }}>
              <h4 className="text-2xl font-bold mb-4" style={{ color: "#EE352E" }}>Stakeholders</h4>
              <ul className="space-y-2 text-base" style={{ color: "#EE352E" }}>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Local governments</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Federal Transit Administration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Regional transit agencies (e.g., SacRT)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Community nonprofits focused on mobility equity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Impact Table */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8" style={{ color: "#EE352E" }}>Impact</h3>
          <div className="bg-white/10 rounded-lg overflow-hidden border" style={{ borderColor: "#EE352E" }}>
            <table className="w-full text-lg">
              <thead className="bg-white/20 border-b-2" style={{ borderColor: "#EE352E" }}>
                <tr>
                  <th className="px-6 py-4 text-left font-bold" style={{ color: "#EE352E" }}>Dimension</th>
                  <th className="px-6 py-4 text-left font-bold" style={{ color: "#EE352E" }}>Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y" style={{ borderColor: "#EE352E33" }}>
                <tr className="hover:bg-red-50/5 transition">
                  <td className="px-6 py-4 font-semibold" style={{ color: "#EE352E" }}>Equity</td>
                  <td className="px-6 py-4" style={{ color: "#EE352E" }}>Enables communities to see how transit decisions affect opportunity gaps.</td>
                </tr>
                <tr className="hover:bg-red-50/5 transition">
                  <td className="px-6 py-4 font-semibold" style={{ color: "#EE352E" }}>Transparency</td>
                  <td className="px-6 py-4" style={{ color: "#EE352E" }}>Makes planning data publicly accessible and interpretable.</td>
                </tr>
                <tr className="hover:bg-red-50/5 transition">
                  <td className="px-6 py-4 font-semibold" style={{ color: "#EE352E" }}>Participation</td>
                  <td className="px-6 py-4" style={{ color: "#EE352E" }}>Encourages civic engagement and co-design in transportation planning.</td>
                </tr>
                <tr className="hover:bg-red-50/5 transition">
                  <td className="px-6 py-4 font-semibold" style={{ color: "#EE352E" }}>Efficiency</td>
                  <td className="px-6 py-4" style={{ color: "#EE352E" }}>Helps governments target investments where they will have the greatest social return.</td>
                </tr>
                <tr className="hover:bg-red-50/5 transition">
                  <td className="px-6 py-4 font-semibold" style={{ color: "#EE352E" }}>Innovation</td>
                  <td className="px-6 py-4" style={{ color: "#EE352E" }}>Turns static datasets into dynamic, visual decision-making tools.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Example Scenario */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8" style={{ color: "#EE352E" }}>Example Scenario: Sacramento</h3>
          <div className="bg-white/10 rounded-lg p-8 border-l-4" style={{ borderColor: "#EE352E" }}>
            <p className="text-lg leading-relaxed mb-4" style={{ color: "#EE352E" }}>
              Imagine a student in South Sacramento whose commute to Sacramento State currently takes <strong>70 minutes by bus</strong>.
            </p>
            <p className="text-lg leading-relaxed mb-4" style={{ color: "#EE352E" }}>
              City Circuit simulates the addition of a cross-town express connector — showing that travel time drops to <strong>45 minutes</strong> and access to educational and employment opportunities increases by <strong>35%</strong>.
            </p>
            <p className="text-lg leading-relaxed font-semibold" style={{ color: "#EE352E" }}>
              This becomes a visual story policymakers can show in grant proposals and budget hearings — connecting data to lived experience.
            </p>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="bg-white/20 rounded-lg p-10 text-center border-2" style={{ borderColor: "#EE352E" }}>
          <p className="text-2xl italic font-bold leading-relaxed" style={{ color: "#EE352E" }}>
            "City Circuit reimagines public transit planning as a shared act of storytelling — one that combines data, design, and empathy to make mobility more equitable for everyone."
          </p>
        </div>

        {children}
      </motion.div>

    </section>
    
  );
}
