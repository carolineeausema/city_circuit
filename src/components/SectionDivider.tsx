"use client";
import React from "react";

interface SectionDividerProps {
  color: string;
}

export default function SectionDivider({ color }: SectionDividerProps) {
  return (
    <div className="w-full bg-white py-4 flex items-center justify-center">
      <div className="w-full max-w-[1100px] px-6 relative">
        {/* Main line */}
        <div className="absolute left-0 right-0 top-1/2 h-px transform -translate-y-1/2" style={{ backgroundColor: color }} />
        
        {/* Decorative circle in center */}
        <div className="relative flex justify-center">
          <div
            className="w-6 h-6 rounded-full border-2"
            style={{ borderColor: color, backgroundColor: "white" }}
          />
        </div>
      </div>
    </div>
  );
}
