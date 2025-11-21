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
    const customPositions = [0.15, 0.45, 0.85]; // Relative positions for Problem, Idea, Solution
    const pos = customPositions.map(position => position * width);
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

      // Calculate scroll progress for train based on actual section positions
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Get the actual positions of the first and last stations
      const firstStation = stations[0]?.ref.current;
      const lastStation = stations[stations.length - 1]?.ref.current;
      
      if (!firstStation || !lastStation) {
        setScrollProgress(0);
        return;
      }
      
      // Start showing train when approaching the first section
      const firstSectionTop = firstStation.getBoundingClientRect().top + scrollY;
      const startOffset = Math.max(0, firstSectionTop - viewportHeight * 0.5);
      
      // End showing train before the bottom of the page
      // Stop the train when we're about 20% from the bottom
      const maxScroll = documentHeight - viewportHeight;
      const endOffset = Math.min(
        lastStation.getBoundingClientRect().bottom + scrollY,
        maxScroll * 0.8 // Stop at 80% of total scroll
      );
      
      // Calculate progress within this range
      const trainRange = endOffset - startOffset;
      const currentPosition = scrollY - startOffset;
      
      let rawProgress = 0;
      if (trainRange > 0) {
        rawProgress = Math.max(0, Math.min(1, currentPosition / trainRange));
      }
      
      // Map to a range that lets train continue off-screen to the right
      const progress = 0.05 + (rawProgress * 0.95); // Range from 0.05 to 1.0, allowing it to move off-screen
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [stations]);

  return (
    <div
      ref={containerRef}
      className="fixed left-0 right-0 bottom-6 z-50 pointer-events-none"
    >
      {/* Backdrop blur with fade effect */}
      <div 
        className="absolute inset-x-0 backdrop-blur-xl"
        style={{
          top: '-3rem',
          bottom: '-1.5rem',
          maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0) 100%)',
        }}
      />
      
      <div className="relative w-full px-0 z-10">
        {/* SubwayCar train */}
        <SubwayCar progress={scrollProgress} />

        {/* Station dots */}
        <div className="relative flex items-center justify-center h-12">
          {/* Track line - positioned to go through the center of the dots */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-black rounded-full transform -translate-y-1/2 z-0" />
          
          {stations.map((s, i) => {
            const isActive = activeIndex === i;
            // Custom positions: Problem at 15%, Idea at 45%, Solution at 85%
            // This gives enough room for labels to display properly
            const customPositions = [0.15, 0.45, 0.85];
            const leftPosition = customPositions[i] * 100;
            
            return (
              <div 
                key={s.label} 
                className="absolute flex items-center justify-center"
                style={{
                  left: `${leftPosition}%`,
                  transform: 'translateX(-50%)',
                  top: '50%',
                  marginTop: '-10px' // Half the height of the dot (20px / 2)
                }}
              >
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
