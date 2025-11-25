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
  // Define the line configurations for each station
  const getLineConfig = (stationLabel: string) => {
    switch (stationLabel.toLowerCase()) {
      case 'problem':
        return [
          { number: '1', bgColor: 'bg-red-600' },
          { number: '2', bgColor: 'bg-yellow-500' }
        ];
      case 'idea':
        return [
          { number: '2', bgColor: 'bg-yellow-500' },
          { number: '3', bgColor: 'bg-green-600' }
        ];
      case 'solution':
        return [
          { number: '3', bgColor: 'bg-green-600' }
        ];
      default:
        return [
          { number: '2', bgColor: 'bg-red-600' },
          { number: '3', bgColor: 'bg-red-600' }
        ];
    }
  };

  const lineConfig = getLineConfig(station.label);

  return (
    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-max pointer-events-auto flex items-center">
      <div
        onClick={() => station.ref.current?.scrollIntoView({ behavior: "smooth" })}
        className={`flex items-center px-2 py-1 cursor-pointer select-none shadow-md rounded-sm ${
          isActive ? "bg-black" : "bg-black/90"
        }`}
      >
        {/* Station Name */}
        <div className="text-white font-bold uppercase text-xs leading-tight mr-2">
          {station.label.split(" ").map((word, idx) => (
            <div key={idx}>{word}</div>
          ))}
        </div>

        {/* Dynamic Line Circles */}
        <div className="flex space-x-1">
          {lineConfig.map((line, idx) => (
            <div key={idx} className={`w-4 h-4 rounded-full ${line.bgColor} text-white font-bold flex items-center justify-center text-xs`}>
              {line.number}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Label;
