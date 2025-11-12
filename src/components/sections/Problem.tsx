"use client";
import { ReactNode } from "react";

interface ProblemProps {
  rootRef?: React.RefObject<HTMLElement>;
  children?: ReactNode;
}

export default function Problem({ rootRef, children }: ProblemProps) {
  return (
    <section ref={rootRef} className="flex items-center justify-center px-8 bg-white" style={{ color: "#0039A6", minHeight: "100vh" }}>
      <div className="max-w-4xl text-left">
        <h2 className="text-5xl font-bold mb-8" style={{ color: "#0039A6" }}>The Problem</h2>
        
        <div className="space-y-6 text-lg leading-relaxed mb-8" style={{ color: "#0039A6" }}>
          <p>
            Public transit is one of the most powerful tools cities have to connect people to opportunity, yet the process for planning new routes and improvements remains <strong>opaque, technical, and inaccessible</strong> to the very communities it affects most.
          </p>
          
          <p>
            Transit agencies depend on models, spreadsheets, and static maps that fail to capture who benefits and who's left behind. Meanwhile, underserved neighborhoods — often low-income, young, or disabled — continue to live in <strong>transit deserts</strong> with limited or no reliable access to jobs, schools, or healthcare.
          </p>
          
          <div className="my-8">
            <h3 className="text-2xl font-bold mb-6" style={{ color: "#0039A6" }}>In the U.S.:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div
                tabIndex={0}
                role="region"
                aria-label="Zero-vehicle households stat"
                className="group bg-white border-2 border-[#0039A6] rounded-xl shadow-md p-6 flex flex-col items-center justify-center transition-transform duration-200 hover:scale-105 hover:bg-[#0039A6] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#0039A6]/30 relative"
              >
                <div className="text-4xl md:text-5xl font-extrabold mb-2 transition-colors duration-200 group-hover:text-white text-[#0039A6]">700,000+</div>
                <div className="text-lg font-semibold text-center transition-colors duration-200 group-hover:text-white">
                  zero-vehicle households in the 100 largest metro areas lack access to transit service
                </div>
                <div className="mt-2 text-xs opacity-70 group-hover:text-white">Brookings, 2016</div>
                <a
                  href="https://www.brookings.edu/wp-content/uploads/2016/06/0818_transportation_tomer.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute left-1/2 -translate-x-1/2 bottom-4 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200 bg-[#0039A6] text-white px-3 py-1 rounded shadow text-xs font-semibold z-10"
                  tabIndex={-1}
                  aria-label="Read Brookings 2016 report PDF"
                >
                  View Source
                </a>
              </div>
              {/* Card 2 */}
              <div
                tabIndex={0}
                role="region"
                aria-label="Unreliable transportation stat"
                className="group bg-white border-2 border-[#0039A6] rounded-xl shadow-md p-6 flex flex-col items-center justify-center transition-transform duration-200 hover:scale-105 hover:bg-[#0039A6] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#0039A6]/30 relative"
              >
                <div className="text-4xl md:text-5xl font-extrabold mb-2 transition-colors duration-200 group-hover:text-white text-[#0039A6]">6.2%</div>
                <div className="text-lg font-semibold text-center transition-colors duration-200 group-hover:text-white">
                  of U.S. adults report unreliable transportation prevented essential appointments or work in the past year
                </div>
                <div className="mt-2 text-xs opacity-70 group-hover:text-white">NIH, 2023</div>
                <a
                  href="https://meps.ahrq.gov/data_files/publications/st558/stat558.shtml#:~:text=Findings,Hispanic%20White%20adults%20(4.6%25)."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute left-1/2 -translate-x-1/2 bottom-4 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200 bg-[#0039A6] text-white px-3 py-1 rounded shadow text-xs font-semibold z-10"
                  tabIndex={-1}
                  aria-label="Read AHRQ MEPS Stat 558 report"
                >
                  View Source
                </a>
              </div>
              {/* Card 3 */}
              <div
                tabIndex={0}
                role="region"
                aria-label="Transit deserts stat"
                className="group bg-white border-2 border-[#0039A6] rounded-xl shadow-md p-6 flex flex-col items-center justify-center transition-transform duration-200 hover:scale-105 hover:bg-[#0039A6] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#0039A6]/30 relative"
              >
                <div className="text-4xl md:text-5xl font-extrabold mb-2 transition-colors duration-200 group-hover:text-white text-[#0039A6]">43%</div>
                <div className="text-lg font-semibold text-center transition-colors duration-200 group-hover:text-white">
                  of transit-dependent residents in 52 major cities live in areas classified as transit deserts
                </div>
                <div className="mt-2 text-xs opacity-70 group-hover:text-white">Smithsonian, 2018</div>
                <a
                  href="https://www.smithsonianmag.com/innovation/dozens-us-cities-have-transit-deserts-where-people-get-stranded-180968463/#:~:text=Transportation%20deserts%20were%20present%20to,alternatives%20to%20individual%20car%20ownership."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute left-1/2 -translate-x-1/2 bottom-4 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200 bg-[#0039A6] text-white px-3 py-1 rounded shadow text-xs font-semibold z-10"
                  tabIndex={-1}
                  aria-label="Read Smithsonian 2018 transit deserts article"
                >
                  View Source
                </a>
              </div>
            </div>
          </div>
          
          <p className="text-xl font-semibold italic mt-6">
            Yet most residents have no accessible way to understand how proposed transit changes would actually affect their lives — or to advocate for alternatives.
          </p>
        </div>
        
        <div className="border-t-2 pt-6 mt-8" style={{ borderColor: "#0039A6" }}>
                      <p className="font-bold text-xl text-black">
              City Circuit proposes to fill that gap.
            </p>
        </div>
        
        {children}
      </div>
    </section>
  );
}
