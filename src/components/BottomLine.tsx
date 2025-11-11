"use client";
import React, { useEffect, useRef, useState } from "react";

type Station = {
  label: string;
  ref: React.RefObject<HTMLElement>;
  color: string;
};

export default function BottomLine({ stations }: { stations: Station[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [positions, setPositions] = useState<number[]>([]);

  // Compute dot positions
  const updatePositions = () => {
    if (!containerRef.current) return;
    const width = containerRef.current.offsetWidth;
    const pos = stations.map((_, i) => (i / (stations.length - 1)) * width);
    setPositions(pos);
  };

  useEffect(() => {
    updatePositions();
    window.addEventListener("resize", updatePositions);
    return () => window.removeEventListener("resize", updatePositions);
  }, [stations]);

  // Determine active station based on viewport center
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const handler = () => {
      const index = stations.findIndex((s) => {
        const ref = s.ref.current;
        if (!ref) return false;
        const rect = ref.getBoundingClientRect();
        return rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5;
      });
      if (index >= 0) setActiveIndex(index);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [stations]);

  return (
    <div
      ref={containerRef}
      className="fixed left-0 right-0 bottom-6 z-50 pointer-events-none"
    >
      <div className="relative w-full max-w-[1100px] mx-auto px-6">
        {/* Track */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 rounded-full transform -translate-y-1/2" />

        {/* Station dots */}
        <div className="relative flex justify-between items-center w-full">
          {stations.map((s, i) => {
            const isActive = activeIndex === i;
            return (
              <div key={s.label} className="relative w-0 flex-1 flex items-center justify-center">
                {/* Dot */}
                <div className="relative z-10">
                  <div
                    className={`rounded-full w-5 h-5 flex items-center justify-center transform transition-transform duration-300 ${
                      isActive ? "scale-125" : "scale-100"
                    }`}
                  >
                    <span
                      style={{
                        display: "block",
                        width: 14,
                        height: 14,
                        borderRadius: 9999,
                        background: isActive ? s.color : "rgba(255,255,255,0.18)",
                        boxShadow: isActive ? `0 0 12px ${s.color}66` : "none",
                      }}
                    />
                  </div>
                </div>

                {/* Label styled like subway signage */}
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-max pointer-events-auto">
                  <div
                    onClick={() => s.ref.current?.scrollIntoView({ behavior: "smooth" })}
                    className={`px-3 py-1 rounded-md text-xs font-bold uppercase text-white tracking-wider cursor-pointer select-none shadow-md ${
                      isActive ? "bg-gray-900" : "bg-gray-800/80"
                    }`}
                  >
                    {s.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
