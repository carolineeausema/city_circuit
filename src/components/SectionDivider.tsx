"use client";
import React from "react";

interface SectionDividerProps {
  color: string;
  // 1-based index or short number to show inside the center badge (e.g., 2 for "Problem")
  number?: number;
  // Thickness of the divider line in pixels (default is 1)
  thickness?: number;
}

export default function SectionDivider({ color, number, thickness = 1 }: SectionDividerProps) {
  return (
    // remove vertical padding so the divider line sits flush between sections
    <div className="w-full bg-white flex items-center justify-center">
      <div className="w-full relative">
        {/* Main line positioned at the bottom of this small container so below it is pure white */}
        <div className="absolute left-0 right-0 bottom-0" style={{ backgroundColor: color, height: `${thickness}px` }} />

        {/* Left end dots (three small dots) */}
        <div className="absolute left-6 bottom-0 flex items-center space-x-1 -translate-y-1/2">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color, opacity: 0.85 }} />
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color, opacity: 0.7 }} />
        </div>

        {/* Right end dots (three small dots) */}
        <div className="absolute right-6 bottom-0 flex items-center space-x-1 -translate-y-1/2">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color, opacity: 0.7 }} />
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color, opacity: 0.85 }} />
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
        </div>

        {/* Center badge filled with the section color and number (if provided) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold text-white"
            style={{ backgroundColor: color }}
          >
            {number != null ? number : null}
          </div>
        </div>
      </div>
    </div>
  );
}
