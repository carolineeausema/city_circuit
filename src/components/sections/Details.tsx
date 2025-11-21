"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface DetailsProps {
  rootRef?: React.RefObject<HTMLElement>;
  children?: ReactNode;
}

export default function Details({ rootRef, children }: DetailsProps) {
  // NYC subway palette (common line colors)
  const NYC = {
    red: '#EE352E',
    green: '#00933C',
    blue: '#0039A6',
    yellow: '#FCCC0A',
    orange: '#FF6319',
    purple: '#B933AD',
    brown: '#996633',
    gray: '#A7A9AC',
  };

  const DATA_CARDS = [
    {
      id: 'transit',
      color: NYC.blue,
      title: 'Transit Service Data',
      desc: 'Routes, stops, and schedules form the base map for simulations.',
      links: [
        { label: 'GTFS feeds (local agencies)', url: 'https://gtfs.org/', badge: 'GTFS' },
        { label: 'Bureau of Transportation Statistics — National Transit Map', url: 'https://www.bts.gov/', badge: 'BTS' },
        { label: 'FTA — National Transit Database', url: 'https://www.transit.dot.gov/', badge: 'FTA' },
      ],
    },
    {
      id: 'demographics',
      color: NYC.red,
      title: 'Demographics & Socioeconomic',
      desc: 'Identifies populations who rely on transit or face mobility barriers.',
      links: [
        { label: 'US Census — ACS 5-year estimates', url: 'https://data.census.gov/', badge: 'Census' },
        { label: 'Local housing & permitting datasets', url: '#', badge: 'LOCAL' },
      ],
    },
    {
      id: 'employment',
      color: NYC.orange,
      title: 'Employment & Opportunity',
      desc: 'Used for reachable-jobs calculations and economic impact.',
      links: [
        { label: 'LEHD / LODES (OnTheMap)', url: 'https://lehd.ces.census.gov/data/', badge: 'LODES' },
        { label: 'BLS local employment data', url: 'https://www.bls.gov/', badge: 'BLS' },
      ],
    },
    {
      id: 'geography',
      color: NYC.yellow,
      title: 'Geography & Travel Patterns',
      desc: 'Boundaries, road networks, and commuting flows for accurate isochrones and heatmaps.',
      links: [
        { label: 'Census TIGER/Line', url: 'https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.html', badge: 'TIGER' },
        { label: 'CTPP / OnTheMap', url: 'https://www.bts.gov/content/census-transportation-planning-products', badge: 'CTPP' },
      ],
    },
    {
      id: 'environment',
      color: NYC.green,
      title: 'Environmental & Emissions',
      desc: 'Estimate sustainability impacts of service changes.',
      links: [
        { label: 'EPA — Smart Location Database', url: 'https://www.epa.gov/energy/smart-location-mapping', badge: 'EPA' },
        { label: 'DOE transport energy & emissions references', url: '#', badge: 'DOE' },
      ],
    },
  ];

  return (
    <section ref={rootRef} className="min-h-screen flex items-center justify-center px-8 pt-24 pb-16" style={{ backgroundColor: "#FFFFFF", color: "#00933C" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-4xl mx-auto w-full"
      >
        <h2 className="text-5xl font-bold mb-12" style={{ color: "#00933C" }}>How It Works</h2>

        <p className="text-xl leading-relaxed mb-6" style={{ color: "#00933C" }}>
          The system combines multiple public data sources to simulate and visualize outcomes. Below is a concise, visual summary of inputs City Circuit ingests and why they matter.
        </p>

        <div className="h-15" />

        {/* Data flow diagram */}
        <div className="flex items-center justify-center mb-10">
          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-white/10 flex items-center justify-center text-2xl font-bold border-2" style={{ color: '#0039A6', borderColor: '#0039A6' }}>DATA</div>
              <div className="mt-2 text-sm text-gray-700">Public sources</div>
            </div>
            <div className="flex items-center" style={{ marginTop: '-20px' }}>
              <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12h116" stroke="#0039A6" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-white/10 flex items-center justify-center text-2xl font-bold border-2" style={{ color: '#FCCC0A', borderColor: '#FCCC0A' }}>ANALYZE</div>
              <div className="mt-2 text-sm text-gray-700">Models & metrics</div>
            </div>
            <div className="flex items-center" style={{ marginTop: '-20px' }}>
              <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12h116" stroke="#FCCC0A" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-white/10 flex items-center justify-center text-2xl font-bold border-2" style={{ color: '#00933C', borderColor: '#00933C' }}>SHOW</div>
              <div className="mt-2 text-sm text-gray-700">Interactive UI</div>
            </div>
          </div>
        </div>

        <div className="h-15" />

        {/* Data Integration (cards) */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-6" style={{ color: "#00933C" }}>1. Data Integration</h3>

          <div className="h-5" />

          <div className="grid md:grid-cols-2 gap-6">
            {DATA_CARDS.map(card => (
              <div key={card.id} className="p-6 rounded-lg bg-white/10 border-2" style={{ borderColor: '#00933C' }}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold" style={{ color: card.color }}>{card.title}</h4>
                    <div className="text-sm text-gray-600">{card.id.toUpperCase()}</div>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">{card.desc}</p>
                  <div className="text-sm text-gray-600">Suggested sources:</div>
                <ul className="list-inside list-disc text-sm mt-2 text-gray-300">
                  {card.links.map((l, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-14 h-14 flex items-center justify-center rounded-full text-sm font-semibold text-white" style={{ background: card.color }}>{l.badge}</span>
                      {l.url && l.url !== '#' ? (
                        <a className="underline text-gray-700" target="_blank" rel="noopener noreferrer" href={l.url}>{l.label}</a>
                      ) : (
                        <span className="text-gray-700">{l.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Analytical Layer */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8" style={{ color: "#00933C" }}>2. Analytical Layer</h3>
          <p className="text-lg mb-6" style={{ color: "#00933C" }}>Using these inputs, City Circuit calculates:</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-6 border-2" style={{ borderColor: "#00933C" }}>
              <h4 className="text-xl font-bold mb-3" style={{ color: "#00933C" }}>Accessibility Scores</h4>
              <p className="text-base" style={{ color: "#00933C" }}>
                Number of jobs, schools, and hospitals reachable within 30, 45, or 60 minutes via transit.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 border-2" style={{ borderColor: "#00933C" }}>
              <h4 className="text-xl font-bold mb-3" style={{ color: "#00933C" }}>Equity Indices</h4>
              <p className="text-base" style={{ color: "#00933C" }}>
                Overlays accessibility improvements against demographic and income data.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 border-2" style={{ borderColor: "#00933C" }}>
              <h4 className="text-xl font-bold mb-3" style={{ color: "#00933C" }}>Opportunity Gaps</h4>
              <p className="text-base" style={{ color: "#00933C" }}>
                Identifies neighborhoods where additional routes could maximize social benefit.
              </p>
            </div>
          </div>
        </div>

        {/* User Interface */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8" style={{ color: "#00933C" }}>3. User Interface</h3>
          <ul className="space-y-4 text-lg" style={{ color: "#00933C" }}>
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

        {/* User Interface Sketch Placeholder */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 rounded-lg p-8 border-2 border-dashed" style={{ borderColor: "#00933C" }}
          >
            <div className="flex flex-col items-center justify-center h-64 text-gray-400">
              <p className="text-lg font-medium text-center" style={{ color: "#00933C" }}>User Interface Sketch Placeholder</p>
              <p className="text-sm text-center mt-2 text-gray-500">Interactive dashboard mockup will go here</p>
            </div>
          </motion.div>
        </div>

        {/* Implementation & Stakeholders */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8" style={{ color: "#00933C" }}>Implementation & Stakeholders</h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 rounded-lg p-6 border-2" style={{ borderColor: "#00933C" }}>
              <h4 className="text-2xl font-bold mb-4" style={{ color: "#00933C" }}>Primary Users</h4>
              <ul className="space-y-2 text-base" style={{ color: "#00933C" }}>
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

            <div className="bg-white/10 rounded-lg p-6 border-2" style={{ borderColor: "#00933C" }}>
              <h4 className="text-2xl font-bold mb-4" style={{ color: "#00933C" }}>Stakeholders</h4>
              <ul className="space-y-2 text-base" style={{ color: "#00933C" }}>
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
          <h3 className="text-3xl font-bold mb-8" style={{ color: "#00933C" }}>Impact</h3>
          <div className="bg-white/10 rounded-lg overflow-hidden border" style={{ borderColor: "#00933C" }}>
            <table className="w-full text-lg">
              <thead className="bg-white/20 border-b-2" style={{ borderColor: "#00933C" }}>
                <tr>
                  <th className="px-6 py-4 text-left font-bold" style={{ color: "#00933C" }}>Dimension</th>
                  <th className="px-6 py-4 text-left font-bold" style={{ color: "#00933C" }}>Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y" style={{ borderColor: "#00933C33" }}>
                <tr className="hover:bg-green-50/5 transition">
                  <td className="px-6 py-4 font-semibold" style={{ color: "#00933C" }}>Equity</td>
                  <td className="px-6 py-4" style={{ color: "#00933C" }}>Enables communities to see how transit decisions affect opportunity gaps.</td>
                </tr>
                <tr className="hover:bg-green-50/5 transition">
                  <td className="px-6 py-4 font-semibold" style={{ color: "#00933C" }}>Transparency</td>
                  <td className="px-6 py-4" style={{ color: "#00933C" }}>Makes planning data publicly accessible and interpretable.</td>
                </tr>
                <tr className="hover:bg-green-50/5 transition">
                  <td className="px-6 py-4 font-semibold" style={{ color: "#00933C" }}>Participation</td>
                  <td className="px-6 py-4" style={{ color: "#00933C" }}>Encourages civic engagement and co-design in transportation planning.</td>
                </tr>
                <tr className="hover:bg-green-50/5 transition">
                  <td className="px-6 py-4 font-semibold" style={{ color: "#00933C" }}>Efficiency</td>
                  <td className="px-6 py-4" style={{ color: "#00933C" }}>Helps governments target investments where they will have the greatest social return.</td>
                </tr>
                <tr className="hover:bg-green-50/5 transition">
                  <td className="px-6 py-4 font-semibold" style={{ color: "#00933C" }}>Innovation</td>
                  <td className="px-6 py-4" style={{ color: "#00933C" }}>Turns static datasets into dynamic, visual decision-making tools.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Example Scenario */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8" style={{ color: "#00933C" }}>Example Scenario: Sacramento</h3>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 rounded-lg p-8 border-2" style={{ borderColor: "#00933C" }}>
              <p className="text-lg leading-relaxed mb-4" style={{ color: "#00933C" }}>
                Imagine a student in South Sacramento whose commute to Sacramento State currently takes <strong>70 minutes by bus</strong>.
              </p>
              <p className="text-lg leading-relaxed mb-4" style={{ color: "#00933C" }}>
                City Circuit simulates the addition of a cross-town express connector — showing that travel time drops to <strong>45 minutes</strong> and access to educational and employment opportunities increases by <strong>35%</strong>.
              </p>
              <p className="text-lg leading-relaxed font-semibold" style={{ color: "#00933C" }}>
                This becomes a visual story policymakers can show in grant proposals and budget hearings — connecting data to lived experience.
              </p>
            </div>
          </div>
        </div>

        <div className="h-25" />

        {/* Vision Statement */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/20 rounded-lg p-5 text-center border-1" style={{ borderColor: "#00933C" }}>
            <p className="text-4xl leading-relaxed" style={{ color: "#00933C" }}>
              "City Circuit reimagines public transit planning as a shared act of storytelling — one that combines data, design, and empathy to make mobility more equitable for everyone."
            </p>
          </div>
        </div>

        {children}
      </motion.div>

    </section>
    
  );
}
