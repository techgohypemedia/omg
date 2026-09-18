import React from "react";
import Image from "next/image";

interface GoldSunMarkProps {
  className?: string;
  size?: number;
  useVector?: boolean;
}

export function GoldSunMark({
  className = "",
  size = 24,
  useVector = false,
}: GoldSunMarkProps) {
  if (useVector) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Outer ring */}
        <circle
          cx="50"
          cy="50"
          r="44"
          stroke="#A8842F"
          strokeWidth="2"
          strokeDasharray="280"
          strokeDashoffset="10"
        />
        {/* Cardinal orientation dots */}
        <circle cx="50" cy="2" r="1.5" fill="#A8842F" />
        <circle cx="50" cy="98" r="1.5" fill="#A8842F" />
        <circle cx="2" cy="50" r="1.5" fill="#A8842F" />
        <circle cx="98" cy="50" r="1.5" fill="#A8842F" />
        {/* Center dot */}
        <circle cx="50" cy="50" r="5" fill="#A8842F" />
        {/* Cardinal main rays */}
        <line x1="50" y1="20" x2="50" y2="42" stroke="#A8842F" strokeWidth="1.6" />
        <line x1="50" y1="58" x2="50" y2="80" stroke="#A8842F" strokeWidth="1.6" />
        <line x1="20" y1="50" x2="42" y2="50" stroke="#A8842F" strokeWidth="1.6" />
        <line x1="58" y1="50" x2="80" y2="50" stroke="#A8842F" strokeWidth="1.6" />
        {/* Diagonal medium rays */}
        <line x1="29" y1="29" x2="44" y2="44" stroke="#A8842F" strokeWidth="1.3" />
        <line x1="71" y1="29" x2="56" y2="44" stroke="#A8842F" strokeWidth="1.3" />
        <line x1="29" y1="71" x2="44" y2="56" stroke="#A8842F" strokeWidth="1.3" />
        <line x1="71" y1="71" x2="56" y2="56" stroke="#A8842F" strokeWidth="1.3" />
        {/* Fine sub-rays */}
        <line x1="39" y1="23" x2="46" y2="43" stroke="#A8842F" strokeWidth="1" />
        <line x1="61" y1="23" x2="54" y2="43" stroke="#A8842F" strokeWidth="1" />
        <line x1="39" y1="77" x2="46" y2="57" stroke="#A8842F" strokeWidth="1" />
        <line x1="61" y1="77" x2="54" y2="57" stroke="#A8842F" strokeWidth="1" />
        <line x1="23" y1="39" x2="43" y2="46" stroke="#A8842F" strokeWidth="1" />
        <line x1="23" y1="61" x2="43" y2="54" stroke="#A8842F" strokeWidth="1" />
        <line x1="77" y1="39" x2="57" y2="46" stroke="#A8842F" strokeWidth="1" />
        <line x1="77" y1="61" x2="57" y2="54" stroke="#A8842F" strokeWidth="1" />
      </svg>
    );
  }

  return (
    <div
      className={`relative inline-flex items-center justify-center flex-shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/images/omg-sun-mark.png"
        alt="OMG Sun Mark"
        width={size}
        height={size}
        className="object-contain w-full h-full"
      />
    </div>
  );
}
