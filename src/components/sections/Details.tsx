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
        <div className="mb-16">
          <h2 className="flex items-center justify-start mb-8 gap-8">
            <span className="text-5xl font-bold" style={{ color: "#00933C" }}>How It Works:</span>
            <span className="text-5xl font-bold" style={{ color: "transparent", WebkitTextStroke: "2px #00933C", WebkitTextFillColor: "transparent" }}>City Circuit</span>
          </h2>
          <p className="text-lg leading-relaxed max-w-5xl" style={{ color: "#00933C" }}>
            City Circuit transforms complex transportation data into actionable insights through three key stages:
          </p>
        </div>

        {/* Enhanced Data flow diagram */}
        <div className="relative mb-20">
          <div className="flex items-center justify-between max-w-5xl mx-auto">
            {/* Stage 1: DATA */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative">
                <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-blue-500/20 to-blue-600/30 flex items-center justify-center text-3xl font-bold border-3 border-blue-500 mb-4 transform group-hover:scale-105 transition-transform duration-300" style={{ borderColor: '#0039A6' }}>
                  <span style={{ color: '#0039A6' }}>DATA</span>
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#0039A6' }}>Collect</h3>
              <p className="text-sm text-gray-600 max-w-32">Public transit, demographic, and geographic data</p>
            </motion.div>

            {/* Arrow 1 */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="hidden md:block flex items-center"
              style={{ height: '160px' }} // Match the stage circle height
            >
              <svg width="120" height="60" viewBox="0 0 120 60" fill="none" style={{ transform: 'translateY(-10px)' }}>
                <line x1="0" y1="30" x2="115" y2="30" stroke="#0039A6" strokeWidth="2"/>
                <circle cx="118" cy="30" r="3" fill="#0039A6"/>
              </svg>
            </motion.div>

            {/* Stage 2: ANALYZE */}
            <motion.div 
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-yellow-400/20 to-yellow-500/30 flex items-center justify-center text-3xl font-bold border-3 mb-4 transform group-hover:scale-105 transition-transform duration-300" style={{ borderColor: '#FCCC0A' }}>
                  <span style={{ color: '#FCCC0A' }}>ANALYZE</span>
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black text-sm font-bold">2</div>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#FCCC0A' }}>Process</h3>
              <p className="text-sm text-gray-600 max-w-32">Calculate accessibility scores and equity metrics</p>
            </motion.div>

            {/* Arrow 2 */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="hidden md:block flex items-center"
              style={{ height: '160px' }} // Match the stage circle height
            >
              <svg width="120" height="60" viewBox="0 0 120 60" fill="none" style={{ transform: 'translateY(-10px)' }}>
                <line x1="0" y1="30" x2="115" y2="30" stroke="#FCCC0A" strokeWidth="2"/>
                <circle cx="118" cy="30" r="3" fill="#FCCC0A"/>
              </svg>
            </motion.div>

            {/* Stage 3: SHOW */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative">
                <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/30 flex items-center justify-center text-3xl font-bold border-3 mb-4 transform group-hover:scale-105 transition-transform duration-300" style={{ borderColor: '#00933C' }}>
                  <span style={{ color: '#00933C' }}>SHOW</span>
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#00933C' }}>Visualize</h3>
              <p className="text-sm text-gray-600 max-w-32">Interactive maps and compelling narratives</p>
            </motion.div>
          </div>
        </div>

        <div className="h-20" />

        {/* Data Integration - Redesigned as alternating layout */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex items-center bg-black rounded-lg px-4 py-2 shadow-lg">
                <span className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3" style={{ backgroundColor: '#0039A6' }}>1</span>
                <h3 className="text-2xl font-bold text-white font-mono tracking-wide">DATA SOURCES</h3>
              </div>
            </div>
          </motion.div>

          <div className="space-y-12">
            {/* Row 1: Transit & Demographics */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300" style={{ backgroundColor: '#0039A6' }}></div>
                <div className="relative bg-white rounded-2xl p-8 border-l-4 shadow-lg hover:shadow-xl transition-all duration-300" style={{ borderColor: '#0039A6' }}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4" style={{ backgroundColor: '#0039A6' }}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold" style={{ color: '#0039A6' }}>Transit Service Data</h4>
                  </div>
                  <p className="text-gray-700 mb-4">Routes, stops, and schedules form the base map for simulations.</p>
                  <div className="space-y-2">
                    {[
                      { label: 'GTFS feeds (local agencies)', badge: 'GTFS', url: 'https://gtfs.org/' },
                      { label: 'Bureau of Transportation Statistics', badge: 'BTS', url: 'https://www.bts.gov/' },
                      { label: 'FTA — National Transit Database', badge: 'FTA', url: 'https://www.transit.dot.gov/' }
                    ].map((l, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="w-12 h-6 flex items-center justify-center rounded text-xs font-bold text-white" style={{ backgroundColor: '#0039A6' }}>{l.badge}</span>
                        <a className="text-sm text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer" href={l.url}>{l.label}</a>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-red-500 rounded-2xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300" style={{ backgroundColor: '#EE352E' }}></div>
                <div className="relative bg-white rounded-2xl p-8 border-r-4 shadow-lg hover:shadow-xl transition-all duration-300" style={{ borderColor: '#EE352E' }}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4" style={{ backgroundColor: '#EE352E' }}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold" style={{ color: '#EE352E' }}>Demographics & Socioeconomic</h4>
                  </div>
                  <p className="text-gray-700 mb-4">Identifies populations who rely on transit or face mobility barriers.</p>
                  <div className="space-y-2">
                    {[
                      { label: 'US Census — ACS 5-year estimates', badge: 'Census', url: 'https://data.census.gov/' },
                      { label: 'Local housing & permitting datasets', badge: 'LOCAL', url: '#' }
                    ].map((l, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="w-12 h-6 flex items-center justify-center rounded text-xs font-bold text-white" style={{ backgroundColor: '#EE352E' }}>{l.badge}</span>
                        {l.url !== '#' ? (
                          <a className="text-sm text-red-600 hover:underline" target="_blank" rel="noopener noreferrer" href={l.url}>{l.label}</a>
                        ) : (
                          <span className="text-sm text-gray-600">{l.label}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Row 2: Employment & Geography - Staggered */}
            <div className="grid md:grid-cols-3 gap-6">
              <div></div> {/* Spacer */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="md:col-span-2 relative group"
              >
                <div className="absolute inset-0 bg-orange-500 rounded-2xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300" style={{ backgroundColor: '#FF6319' }}></div>
                <div className="relative bg-white rounded-2xl p-6 border-t-4 shadow-lg hover:shadow-xl transition-all duration-300" style={{ borderColor: '#FF6319' }}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#FF6319' }}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0H8m0 0H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2h-4z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2" style={{ color: '#FF6319' }}>Employment & Opportunity</h4>
                      <p className="text-gray-700 mb-3">Used for reachable-jobs calculations and economic impact.</p>
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2">
                          <span className="w-16 h-6 flex items-center justify-center rounded text-xs font-bold text-white" style={{ backgroundColor: '#FF6319' }}>LODES</span>
                          <a className="text-sm text-orange-600 hover:underline" target="_blank" rel="noopener noreferrer" href="https://lehd.ces.census.gov/data/">LEHD / LODES (OnTheMap)</a>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-8 h-6 flex items-center justify-center rounded text-xs font-bold text-white" style={{ backgroundColor: '#FF6319' }}>BLS</span>
                          <a className="text-sm text-orange-600 hover:underline" target="_blank" rel="noopener noreferrer" href="https://www.bls.gov/">BLS local employment data</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Row 3: Geography & Environment */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-yellow-500 rounded-2xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300" style={{ backgroundColor: '#FCCC0A' }}></div>
                <div className="relative bg-white rounded-2xl p-6 border-b-4 shadow-lg hover:shadow-xl transition-all duration-300" style={{ borderColor: '#FCCC0A' }}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-black font-bold mr-4" style={{ backgroundColor: '#FCCC0A' }}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold" style={{ color: '#FCCC0A' }}>Geography & Travel</h4>
                  </div>
                  <p className="text-gray-700 mb-4 text-sm">Boundaries, road networks, and commuting flows for accurate isochrones and heatmaps.</p>
                  <div className="space-y-2">
                    {[
                      { label: 'Census TIGER/Line', badge: 'TIGER', url: 'https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.html' },
                      { label: 'CTPP / OnTheMap', badge: 'CTPP', url: 'https://www.bts.gov/content/census-transportation-planning-products' }
                    ].map((l, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-12 h-5 flex items-center justify-center rounded text-xs font-bold text-black" style={{ backgroundColor: '#FCCC0A' }}>{l.badge}</span>
                        <a className="text-xs text-yellow-700 hover:underline" target="_blank" rel="noopener noreferrer" href={l.url}>{l.label}</a>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-green-500 rounded-2xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300" style={{ backgroundColor: '#00933C' }}></div>
                <div className="relative bg-white rounded-2xl p-6 border-l-4 border-r-4 shadow-lg hover:shadow-xl transition-all duration-300" style={{ borderColor: '#00933C' }}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4" style={{ backgroundColor: '#00933C' }}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold" style={{ color: '#00933C' }}>Environmental Impact</h4>
                  </div>
                  <p className="text-gray-700 mb-4 text-sm">Estimate sustainability impacts of service changes.</p>
                  <div className="space-y-2">
                    {[
                      { label: 'EPA — Smart Location Database', badge: 'EPA', url: 'https://www.epa.gov/energy/smart-location-mapping' },
                      { label: 'DOE transport energy references', badge: 'DOE', url: '#' }
                    ].map((l, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-8 h-5 flex items-center justify-center rounded text-xs font-bold text-white" style={{ backgroundColor: '#00933C' }}>{l.badge}</span>
                        {l.url !== '#' ? (
                          <a className="text-xs text-green-700 hover:underline" target="_blank" rel="noopener noreferrer" href={l.url}>{l.label}</a>
                        ) : (
                          <span className="text-xs text-gray-600">{l.label}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Additional spacing before Analysis section */}
        <div className="h-16" />

        {/* Analytical Layer - Redesigned as timeline/process flow */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex items-center bg-black rounded-lg px-4 py-2 shadow-lg">
                <span className="w-8 h-8 rounded-full flex items-center justify-center text-black font-bold text-lg mr-3" style={{ backgroundColor: '#FCCC0A' }}>2</span>
                <h3 className="text-2xl font-bold text-white font-mono tracking-wide">ANALYSIS ENGINE</h3>
              </div>
            </div>
          </motion.div>

          {/* Process Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Center line - only between first and last elements */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 rounded-full" style={{ 
              background: 'linear-gradient(to bottom, #FCCC0A, #D4A004)',
              top: '6rem',
              bottom: '6rem'
            }}></div>
            
            <div className="space-y-16">
              {/* Accessibility Scores */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-center"
              >
                <div className="w-1/2 pr-12 text-right">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4" style={{ borderColor: '#FCCC0A' }}>
                    <h4 className="text-2xl font-bold mb-3" style={{ color: "#FCCC0A" }}>Accessibility Scores</h4>
                    <p className="text-base text-gray-700">
                      Calculate the number of jobs, schools, and hospitals reachable within 30, 45, or 60 minutes via transit for every neighborhood.
                    </p>
                  </div>
                </div>
                <div className="relative z-10 w-12 h-12 bg-white rounded-full border-4 flex items-center justify-center" style={{ borderColor: '#FCCC0A' }}>
                  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="w-1/2 pl-12"></div>
              </motion.div>

              {/* Equity Indices */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center"
              >
                <div className="w-1/2 pr-12"></div>
                <div className="relative z-10 w-12 h-12 bg-white rounded-full border-4 flex items-center justify-center" style={{ borderColor: '#FCCC0A' }}>
                  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l-3-9m3 9l3-9" />
                  </svg>
                </div>
                <div className="w-1/2 pl-12">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-r-4" style={{ borderColor: '#FCCC0A' }}>
                    <h4 className="text-2xl font-bold mb-3" style={{ color: "#FCCC0A" }}>Equity Indices</h4>
                    <p className="text-base text-gray-700">
                      Overlay accessibility improvements against demographic and income data to identify which communities benefit most.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Opportunity Gaps */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center"
              >
                <div className="w-1/2 pr-12 text-right">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4" style={{ borderColor: '#FCCC0A' }}>
                    <h4 className="text-2xl font-bold mb-3" style={{ color: "#FCCC0A" }}>Opportunity Gaps</h4>
                    <p className="text-base text-gray-700">
                      Identify neighborhoods where additional routes could maximize social benefit and reduce transportation inequality.
                    </p>
                  </div>
                </div>
                <div className="relative z-10 w-12 h-12 bg-white rounded-full border-4 flex items-center justify-center" style={{ borderColor: '#FCCC0A' }}>
                  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <div className="w-1/2 pl-12"></div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Additional spacing before User Experience section */}
        <div className="h-16" />

        {/* User Interface - Interactive showcase */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex items-center bg-black rounded-lg px-4 py-2 shadow-lg">
                <span className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3" style={{ backgroundColor: '#00933C' }}>3</span>
                <h3 className="text-2xl font-bold text-white font-mono tracking-wide">USER EXPERIENCE</h3>
              </div>
            </div>
            <div className="h-10" />
            <p className="text-base max-w-4xl mx-auto" style={{ color: "#00933C" }}>
              An intuitive interface that makes complex transportation data accessible to everyone. This becomes a <strong>compelling visual narrative</strong> that policymakers can use in grant proposals and budget hearings — connecting data to lived experience.
            </p>
          </motion.div>

          {/* Features showcase */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 hover:shadow-xl transition-all duration-300 group cursor-pointer" 
              style={{ borderColor: "#00933C" }}
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-100 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3" style={{ color: "#00933C" }}>Interactive Maps</h4>
              <p className="text-gray-700">
                Map-based web dashboard built with open-source frameworks like Mapbox GL or Leaflet for smooth, responsive visualization.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 hover:shadow-xl transition-all duration-300 group cursor-pointer" 
              style={{ borderColor: "#00933C" }}
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-100 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3" style={{ color: "#00933C" }}>Simple Controls</h4>
              <p className="text-gray-700">
                Intuitive drag-and-drop interface to add or modify routes, with real-time feedback on community impact.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 hover:shadow-xl transition-all duration-300 group cursor-pointer" 
              style={{ borderColor: "#00933C" }}
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-100 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3" style={{ color: "#00933C" }}>Rich Visualizations</h4>
              <p className="text-gray-700">
                Generate heatmaps, isochrone maps, and equity scorecards that tell compelling stories with data.
              </p>
            </motion.div>
          </div>

          {/* Dashboard Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border-2 border-dashed hover:border-solid transition-all duration-300" 
            style={{ borderColor: "#00933C" }}
          >
            <div className="absolute top-4 right-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center h-64 text-gray-400">
              <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-xl font-medium text-center text-white mb-2">Interactive Dashboard Preview</p>
              <p className="text-sm text-center text-gray-400 max-w-md">
                Coming soon: A fully interactive demo where you can explore Sacramento's transit network and simulate improvements in real-time
              </p>
            </div>
          </motion.div>
        </div>

        {/* Green divider before Impact & Vision section */}
        <div className="w-full h-px mb-20" style={{ backgroundColor: "#00933C" }}></div>

        {/* Impact - Interactive cards instead of table */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-5xl font-bold mb-6" style={{ color: "#00933C" }}>Impact & Vision</h3>
            <p className="text-lg max-w-5xl mx-auto" style={{ color: "#00933C" }}>
              City Circuit creates meaningful change across multiple dimensions of urban mobility and equity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { 
                title: "Equity", 
                description: "Enables communities to see how transit decisions affect opportunity gaps", 
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l-3-9m3 9l3-9" />
                  </svg>
                ), 
                color: "#EE352E",
                gradient: "from-red-500/20 to-red-600/30"
              },
              { 
                title: "Transparency", 
                description: "Makes planning data publicly accessible and interpretable", 
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ), 
                color: "#0039A6",
                gradient: "from-blue-500/20 to-blue-600/30"
              },
              { 
                title: "Participation", 
                description: "Encourages civic engagement and co-design in transportation planning", 
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                  </svg>
                ), 
                color: "#FF6319",
                gradient: "from-orange-500/20 to-orange-600/30"
              },
              { 
                title: "Efficiency", 
                description: "Helps governments target investments where they will have the greatest social return", 
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                ), 
                color: "#FCCC0A",
                gradient: "from-yellow-400/20 to-yellow-500/30"
              },
              { 
                title: "Innovation", 
                description: "Turns static datasets into dynamic, visual decision-making tools", 
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ), 
                color: "#B933AD",
                gradient: "from-purple-500/20 to-purple-600/30"
              },
              { 
                title: "Sustainability", 
                description: "Promotes environmental benefits through better transit planning", 
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ), 
                color: "#00933C",
                gradient: "from-green-500/20 to-green-600/30"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative group cursor-pointer`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full border-2 border-transparent hover:border-current" style={{ borderColor: item.color }}>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: item.color, color: item.color === '#FCCC0A' ? '#000' : '#fff' }}>
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3" style={{ color: item.color }}>{item.title}</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Example Scenario - Story format */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-r from-blue-50 via-white to-green-50 rounded-3xl p-12 shadow-xl"
          >
            <div className="absolute top-6 right-6">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-4xl font-bold mb-8" style={{ color: "#00933C" }}>
              Real Impact: Sacramento Student Story
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 border-l-4" style={{ borderColor: '#EE352E' }}>
                  <h4 className="text-xl font-bold mb-3" style={{ color: '#EE352E' }}>Current Reality</h4>
                  <p className="text-lg leading-relaxed text-gray-700">
                    A student in South Sacramento commuting to Sacramento State currently faces a <strong className="text-red-600">70-minute bus journey</strong> each way — turning a simple trip to campus into a significant barrier to education.
                  </p>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="bg-yellow-100 rounded-full p-4">
                    <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 border-l-4" style={{ borderColor: '#00933C' }}>
                  <h4 className="text-xl font-bold mb-3" style={{ color: '#00933C' }}>City Circuit Simulation</h4>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Our tool simulates adding a cross-town express connector, revealing that travel time drops to <strong className="text-green-600">45 minutes</strong> and access to educational and employment opportunities <strong className="text-green-600">increases by 35%</strong>.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-center justify-center bg-gray-50 rounded-2xl p-8 min-h-64">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{ color: '#EE352E' }}>70 min</div>
                  <div className="text-sm text-gray-600 mb-6">Current commute</div>
                  <div className="text-4xl mb-2">↓</div>
                  <div className="text-3xl font-bold mb-2" style={{ color: '#00933C' }}>45 min</div>
                  <div className="text-sm text-gray-600">With new connector</div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-xl text-gray-800 max-w-3xl mx-auto">
                This becomes a compelling visual narrative that policymakers can use in <strong>grant proposals and budget hearings</strong> — 
                <span className="text-green-600"> connecting data to lived experience</span>.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Vision Statement - Reimagined */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-blue-400/20 to-yellow-400/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-12 border-2" style={{ borderColor: "#00933C" }}>
            <div className="text-center">
              <blockquote className="text-3xl leading-relaxed font-light text-gray-800">
                "City Circuit reimagines public transit planning as a <span className="font-bold text-green-600">shared act of storytelling</span> — 
                one that combines <span className="font-bold text-blue-600">data</span>, 
                <span className="font-bold text-yellow-600"> design</span>, and 
                <span className="font-bold text-red-600"> empathy</span> to make mobility more equitable for everyone."
              </blockquote>
            </div>
          </div>
        </motion.div>

        {children}
      </motion.div>

    </section>
    
  );
}
