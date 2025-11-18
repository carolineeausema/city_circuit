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
      color: NYC.green,
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
      color: NYC.orange,
      title: 'Environmental & Emissions',
      desc: 'Estimate sustainability impacts of service changes.',
      links: [
        { label: 'EPA — Smart Location Database', url: 'https://www.epa.gov/energy/smart-location-mapping', badge: 'EPA' },
        { label: 'DOE transport energy & emissions references', url: '#', badge: 'DOE' },
      ],
    },
  ];

  return (
    <section ref={rootRef} className="min-h-screen flex items-center justify-center px-8 py-16" style={{ backgroundColor: "#FFF5F5", color: "#EE352E" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-4xl mx-auto w-full"
      >
        <h2 className="text-5xl font-bold mb-12" style={{ color: "#EE352E" }}>How It Works</h2>

        <p className="text-xl leading-relaxed mb-6" style={{ color: "#EE352E" }}>
          The system combines multiple public data sources to simulate and visualize outcomes. Below is a concise, visual summary of inputs City Circuit ingests and why they matter.
        </p>

        {/* Data flow diagram */}
        <div className="flex items-center justify-center mb-10">
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="w-28 h-28 rounded-full bg-white/10 flex items-center justify-center text-2xl font-bold" style={{ color: '#0039A6' }}>DATA</div>
              <div className="mt-2 text-sm text-gray-700">Public sources</div>
            </div>
            <svg width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12h60" stroke="#0039A6" strokeWidth="2" strokeLinecap="round"/><path d="M62 12l8-6v12l-8-6" fill="#0039A6"/></svg>
            <div className="text-center">
              <div className="w-28 h-28 rounded-full bg-white/10 flex items-center justify-center text-2xl font-bold" style={{ color: '#FCCC0A' }}>ANALYZE</div>
              <div className="mt-2 text-sm text-gray-700">Models & metrics</div>
            </div>
            <svg width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12h60" stroke="#FCCC0A" strokeWidth="2" strokeLinecap="round"/><path d="M62 12l8-6v12l-8-6" fill="#FCCC0A"/></svg>
            <div className="text-center">
              <div className="w-28 h-28 rounded-full bg-white/10 flex items-center justify-center text-2xl font-bold" style={{ color: '#00933C' }}>SHOW</div>
              <div className="mt-2 text-sm text-gray-700">Interactive UI</div>
            </div>
          </div>
        </div>

        {/* Data Integration (cards) */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-6" style={{ color: "#EE352E" }}>1. Data Integration</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {DATA_CARDS.map(card => (
              <div key={card.id} className="p-6 rounded-lg bg-white/10" style={{ borderLeft: '4px solid #EE352E' }}>
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-bold mb-2" style={{ color: card.color }}>{card.title}</h4>
                    <div className="text-sm text-gray-600">{card.id.toUpperCase()}</div>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">{card.desc}</p>
                  <div className="text-sm text-gray-600">Suggested sources:</div>
                <ul className="list-inside list-disc text-sm mt-2 text-gray-300">
                  {card.links.map((l, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-7 h-7 flex items-center justify-center rounded-full text-xs font-semibold text-white" style={{ background: card.color }}>{l.badge}</span>
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
