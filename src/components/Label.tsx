// components/Label.tsx
"use client";

import React from "react";

interface LabelProps {
  station: {
    label: string;
    color?: string;
    ref: React.RefObject<HTMLElement>;
  };
  isActive: boolean;
}

const Label: React.FC<LabelProps> = ({ station, isActive }) => {
  return (
    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-max pointer-events-auto flex items-center">
      <div
        onClick={() => station.ref.current?.scrollIntoView({ behavior: "smooth" })}
        className={`flex items-center px-3 py-1 cursor-pointer select-none shadow-md rounded-sm ${
          isActive ? "bg-black" : "bg-black/90"
        }`}
      >
        {/* Station Name */}
        <div className="text-white font-bold uppercase text-sm leading-tight mr-3">
          {station.label.split(" ").map((word, idx) => (
            <div key={idx}>{word}</div>
          ))}
        </div>

        {/* Example Line Circles */}
        <div className="flex space-x-1">
          <div className="w-6 h-6 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-xs">
            2
          </div>
          <div className="w-6 h-6 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-xs">
            3
          </div>
        </div>
      </div>
    </div>
  );
};

export default Label;
