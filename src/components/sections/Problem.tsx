"use client";
import { ReactNode } from "react";

interface ProblemProps {
  rootRef?: React.RefObject<HTMLElement>;
  children?: ReactNode;
}

export default function Problem({ rootRef, children }: ProblemProps) {
  return (
    <section ref={rootRef} className="px-8 bg-white" style={{ color: "#EE352E", minHeight: "100vh" }}>
      <div className="max-w-4xl mx-auto text-left">
        <h2 className="text-5xl font-bold mb-8" style={{ color: "#EE352E" }}>The Problem</h2>
        
        <div className="space-y-6 text-lg leading-relaxed mb-8" style={{ color: "#EE352E" }}>
          <p>
            Transit connects people to opportunity, but planning new routes is often <strong>opaque, technical, and inaccessible</strong> to the communities it affects.
          </p>

          <p>
            Agencies still rely on models and static maps that miss who benefits and who’s left behind. As a result, many neighborhoods—often low-income, young, or disabled—remain <strong>transit deserts</strong> with poor access to jobs, schools, and care.
          </p>

          <div className="h-15" />
          
          <div className="my-8">
            <h3 className="text-2xl font-bold mb-6" style={{ color: "#EE352E" }}>In the US:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 - whole card is a link */}
              <a
                href="https://www.brookings.edu/wp-content/uploads/2016/06/0818_transportation_tomer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zero-vehicle households stat — read Brookings 2016 report"
                className="group bg-white border-2 border-[#EE352E] rounded-xl shadow-md p-6 flex flex-col items-center justify-center transition-transform duration-200 hover:scale-105 hover:bg-[#EE352E] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#EE352E]/30 relative"
              >
                <div className="text-4xl md:text-5xl font-extrabold mb-2 transition-colors duration-200 group-hover:text-white text-[#EE352E]">700,000+</div>
                <div className="text-lg font-semibold text-center transition-colors duration-200 group-hover:text-white">
                  Zero-vehicle households in major metros lack reliable transit access
                </div>
                <div className="mt-2 text-xs opacity-70 group-hover:text-white">Brookings, 2016</div>
              </a>
              {/* Card 2 - whole card is a link */}
              <a
                href="https://meps.ahrq.gov/data_files/publications/st558/stat558.shtml#:~:text=Findings,Hispanic%20White%20adults%20(4.6%25)."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Unreliable transportation stat — read MEPS Stat 558"
                className="group bg-white border-2 border-[#EE352E] rounded-xl shadow-md p-6 flex flex-col items-center justify-center transition-transform duration-200 hover:scale-105 hover:bg-[#EE352E] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#EE352E]/30 relative"
              >
                <div className="text-4xl md:text-5xl font-extrabold mb-2 transition-colors duration-200 group-hover:text-white text-[#EE352E]">6.2%</div>
                <div className="text-lg font-semibold text-center transition-colors duration-200 group-hover:text-white">
                  Adults reporting missed work or appointments due to unreliable transit
                </div>
                <div className="mt-2 text-xs opacity-70 group-hover:text-white">NIH, 2023</div>
              </a>
              {/* Card 3 - whole card is a link */}
              <a
                href="https://www.smithsonianmag.com/innovation/dozens-us-cities-have-transit-deserts-where-people-get-stranded-180968463/#:~:text=Transportation%20deserts%20were%20present%20to,alternatives%20to%20individual%20car%20ownership."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Transit deserts stat — read Smithsonian 2018 article"
                className="group bg-white border-2 border-[#EE352E] rounded-xl shadow-md p-6 flex flex-col items-center justify-center transition-transform duration-200 hover:scale-105 hover:bg-[#EE352E] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#EE352E]/30 relative"
              >
                <div className="text-4xl md:text-5xl font-extrabold mb-2 transition-colors duration-200 group-hover:text-white text-[#EE352E]">43%</div>
                <div className="text-lg font-semibold text-center transition-colors duration-200 group-hover:text-white">
                  Transit-dependent residents in major cities live in transit deserts
                </div>
                <div className="mt-2 text-xs opacity-70 group-hover:text-white">Smithsonian, 2018</div>
              </a>
            </div>
          </div>

          <div className="h-15" />
          
          <div className="relative">
            <p className="text-xl font-medium mt-6 mb-0 text-[#EE352E] p-6 rounded-lg text-center">
              Residents don't have an easy way to understand or influence local transit changes.            
            </p>
          </div>

        </div>
        
        {children}
      </div>

      <div className="h-20" />
    </section>
  );
}
