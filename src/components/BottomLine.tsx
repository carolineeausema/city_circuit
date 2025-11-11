"use client";
import React, { useEffect, useRef, useState } from "react";
import Label from "./Label";
import SubwayCar from "./SubwayCar";

type Station = {
  label: string;
  ref: React.RefObject<HTMLElement>;
  color: string;
};

export default function BottomLine({ stations }: { stations: Station[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [positions, setPositions] = useState<number[]>([]);
  const [maxHeight, setMaxHeight] = useState(0);

  // Compute dot positions and track max section height
  const updatePositions = () => {
    if (!containerRef.current) return;
    const width = containerRef.current.offsetWidth;
    const pos = stations.map((_, i) => (i / (stations.length - 1)) * width);
    setPositions(pos);

    // Calculate max height of all sections
    const heights = stations.map((s) => s.ref.current?.offsetHeight || 0);
    const max = Math.max(...heights);
    setMaxHeight(max);
  };

  useEffect(() => {
    updatePositions();
    window.addEventListener("resize", updatePositions);
    // Also update on scroll to track dynamic heights
    window.addEventListener("scroll", updatePositions);
    return () => {
      window.removeEventListener("resize", updatePositions);
      window.removeEventListener("scroll", updatePositions);
    };
  }, [stations]);

  // Determine active station based on viewport center
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const handler = () => {
      const index = stations.findIndex((s) => {
        const ref = s.ref.current;
        if (!ref) return false;
        const rect = ref.getBoundingClientRect();
        return rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5;
      });
      if (index >= 0) setActiveIndex(index);

      // Calculate scroll progress for train
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const pageHeight = document.body.scrollHeight - viewportHeight;
      const progress = pageHeight > 0 ? scrollY / pageHeight : 0;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
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
        <div className="absolute top-1/2 left-0 w-full h-px bg-black rounded-full transform -translate-y-1/2" />

        {/* SubwayCar train */}
        <SubwayCar progress={scrollProgress} />

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
                        background: isActive ? s.color : "rgba(0,0,0,0.18)",
                        boxShadow: isActive ? `0 0 12px ${s.color}66` : "none",
                      }}
                    />
                  </div>
                </div>

                {/* Label using new Label component */}
                <Label station={s} isActive={isActive} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
