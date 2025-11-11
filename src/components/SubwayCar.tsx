// components/SubwayCar.tsx
"use client";

import React from "react";

interface SubwayCarProps {
  progress: number; // 0 = start, 1 = end
}

const SubwayCar: React.FC<SubwayCarProps> = ({ progress }) => {
  return (
    <div
      className="absolute bottom-6 flex items-center transform transition-transform duration-100"
      style={{
        left: `${progress * 100}%`,
        transform: `translateX(-50%)`,
      }}
    >
      {/* D-Train Text in Deloitte Style with quad shape and pointed bottom right */}
      <div className="relative px-4 py-2 bg-white shadow-lg border-2 border-[#004B87]" style={{ borderRadius: "0 50px 0 0" }}>
        <div className="flex items-center gap-0 whitespace-nowrap relative z-10">
          <span
            className="font-bold text-sm tracking-wider text-[#004B87]"
            style={{
              fontFamily: "'Arial', 'Helvetica', sans-serif",
              letterSpacing: "0.05em",
              lineHeight: "1",
            }}
          >
            DTrain
          </span>
          
          {/* Deloitte Green Dot - positioned like a period with no gap */}
          <div className="relative flex items-center justify-center ml-0" style={{ transform: "translateY(4px)" }}>
            <div className="w-1.5 h-1.5 bg-[#31A84F] rounded-full shadow-md" />
            <div className="absolute w-2.5 h-2.5 bg-[#31A84F] rounded-full opacity-15 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubwayCar;
