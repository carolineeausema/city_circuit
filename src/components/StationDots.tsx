// components/StationDots.tsx
"use client";
import React from "react";
import { useInView } from "framer-motion";

interface Station {
  label: string;
  ref: React.RefObject<HTMLElement>;
  color: string; // hex or tailwind color
}

export default function StationDots({ stations }: { stations: Station[] }) {
  // determine which station is currently in view (first one that isInView)
  const inViewStates = stations.map((s) =>
    useInView(s.ref as any, { amount: 0.45, once: false })
  );

  // choose the highest-priority visible station (first true). fallback to last scrolled index by scanning.
  const activeIndex = inViewStates.findIndex(Boolean);
  const active = activeIndex === -1 ? undefined : activeIndex;

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 pointer-events-none">
      <div className="flex flex-col items-center space-y-6">
        {/* vertical track */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -z-0 rounded" />
        {stations.map((s, i) => {
          const isActive = active === i;
          return (
            <div key={s.label} className="relative z-10">
              <div
                title={s.label}
                className={`rounded-full w-4 h-4 flex items-center justify-center transition transform ${
                  isActive ? "scale-125" : "scale-100"
                }`}
              >
                <span
                  className={`block w-3 h-3 rounded-full`}
                  style={{
                    background: isActive ? s.color : "rgba(255,255,255,0.18)",
                    boxShadow: isActive ? `0 0 12px ${s.color}66` : "none",
                  }}
                />
              </div>
              <div className="sr-only">{s.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
