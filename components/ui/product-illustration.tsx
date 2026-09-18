import React from 'react';

interface ProductIllustrationProps {
  type: 'amethyst' | 'wand' | 'pyramid' | 'moonstone' | 'pyrite' | 'clock' | 'meditation-box' | 'protection-box' | 'wealth-box';
  className?: string;
}

export function ProductIllustration({ type, className = '' }: ProductIllustrationProps) {
  switch (type) {
    case 'amethyst':
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-full p-8 ${className}`}>
          {/* Raw Amethyst cluster geometry */}
          <polygon points="100,25 125,75 100,165 75,75" stroke="#D3B36B" strokeWidth="1.5" fill="none" opacity="0.9" />
          <line x1="100" y1="25" x2="100" y2="165" stroke="#A8842F" strokeWidth="1" />
          <polygon points="65,60 85,95 70,160 50,110" stroke="#D3B36B" strokeWidth="1.2" opacity="0.8" />
          <polygon points="135,55 150,105 130,160 115,90" stroke="#D3B36B" strokeWidth="1.2" opacity="0.8" />
          <polygon points="40,90 60,120 45,155 30,125" stroke="#A8842F" strokeWidth="1" opacity="0.6" />
          <polygon points="160,85 175,120 155,155 140,115" stroke="#A8842F" strokeWidth="1" opacity="0.6" />
          {/* Base rock facet */}
          <path d="M30 155 L45 155 L70 160 L100 165 L130 160 L155 155 L170 155 L150 175 L100 178 L50 175 Z" stroke="#A8842F" strokeWidth="1" fill="#A8842F" fillOpacity="0.08" />
          {/* Radiant energy sparkles */}
          <circle cx="100" cy="18" r="1.5" fill="#D3B36B" />
          <circle cx="60" cy="50" r="1" fill="#D3B36B" />
          <circle cx="140" cy="45" r="1" fill="#D3B36B" />
        </svg>
      );

    case 'wand':
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-full p-8 ${className}`}>
          {/* Crystal Hand Wand: one end pointed, the other round */}
          <g transform="rotate(-35 100 100)">
            {/* Round end (handle) */}
            <path d="M75 140 A25 25 0 0 0 125 140" stroke="#D3B36B" strokeWidth="1.5" fill="none" />
            <ellipse cx="100" cy="140" rx="25" ry="10" stroke="#A8842F" strokeWidth="1" strokeDasharray="2 2" />
            {/* Wand body facets */}
            <line x1="75" y1="140" x2="82" y2="55" stroke="#D3B36B" strokeWidth="1.5" />
            <line x1="125" y1="140" x2="118" y2="55" stroke="#D3B36B" strokeWidth="1.5" />
            <line x1="100" y1="145" x2="100" y2="55" stroke="#A8842F" strokeWidth="1.2" />
            <line x1="90" y1="142" x2="92" y2="55" stroke="#A8842F" strokeWidth="0.8" opacity="0.6" />
            <line x1="110" y1="142" x2="108" y2="55" stroke="#A8842F" strokeWidth="0.8" opacity="0.6" />
            {/* Pointed end facets */}
            <polygon points="100,20 82,55 100,55" stroke="#D3B36B" strokeWidth="1.5" />
            <polygon points="100,20 118,55 100,55" stroke="#D3B36B" strokeWidth="1.5" />
            {/* Energy rings */}
            <circle cx="100" cy="20" r="3" stroke="#D3B36B" strokeWidth="1" fill="#D3B36B" fillOpacity="0.2" />
            <circle cx="100" cy="155" r="2" fill="#D3B36B" opacity="0.8" />
          </g>
        </svg>
      );

    case 'pyramid':
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-full p-8 ${className}`}>
          {/* Sacred 4-sided pyramid with apex */}
          {/* Base */}
          <polygon points="100,35 40,145 100,168" stroke="#D3B36B" strokeWidth="1.5" fill="#A8842F" fillOpacity="0.05" />
          <polygon points="100,35 100,168 160,145" stroke="#D3B36B" strokeWidth="1.5" fill="#A8842F" fillOpacity="0.12" />
          <line x1="40" y1="145" x2="160" y2="145" stroke="#A8842F" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
          <line x1="100" y1="35" x2="100" y2="168" stroke="#D3B36B" strokeWidth="1.8" />
          {/* Internal energetic geometry */}
          <line x1="70" y1="90" x2="130" y2="90" stroke="#A8842F" strokeWidth="0.8" opacity="0.5" />
          <line x1="55" y1="117" x2="145" y2="117" stroke="#A8842F" strokeWidth="0.8" opacity="0.5" />
          {/* Apex beacon */}
          <circle cx="100" cy="35" r="3.5" fill="#D3B36B" />
          <line x1="100" y1="18" x2="100" y2="28" stroke="#D3B36B" strokeWidth="1" />
          <line x1="88" y1="23" x2="95" y2="30" stroke="#A8842F" strokeWidth="0.8" />
          <line x1="112" y1="23" x2="105" y2="30" stroke="#A8842F" strokeWidth="0.8" />
        </svg>
      );

    case 'moonstone':
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-full p-8 ${className}`}>
          {/* Chandrakanta — smooth oval with glowing moonlight waves */}
          <ellipse cx="100" cy="100" rx="55" ry="68" stroke="#D3B36B" strokeWidth="1.6" fill="#A8842F" fillOpacity="0.05" />
          <ellipse cx="98" cy="98" rx="46" ry="58" stroke="#A8842F" strokeWidth="0.8" opacity="0.6" />
          {/* Moon sheen / adularescence waves */}
          <path d="M65 85 C 80 65, 120 70, 135 90 C 120 110, 80 105, 65 85 Z" stroke="#D3B36B" strokeWidth="1.2" fill="#D3B36B" fillOpacity="0.15" />
          <path d="M75 115 C 90 100, 125 105, 130 125" stroke="#E9DBBC" strokeWidth="1" opacity="0.7" />
          <circle cx="115" cy="80" r="2" fill="#FCFAF5" />
          {/* Subtle lunar phase arcs */}
          <path d="M50 100 A 50 63 0 0 1 150 100" stroke="#A8842F" strokeWidth="0.6" strokeDasharray="2 4" />
        </svg>
      );

    case 'pyrite':
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-full p-8 ${className}`}>
          {/* Pyrite: intersecting natural cubic golden crystals */}
          {/* Cube 1 */}
          <polygon points="70,75 120,60 145,95 95,110" stroke="#D3B36B" strokeWidth="1.4" fill="#A8842F" fillOpacity="0.1" />
          <polygon points="70,75 95,110 95,150 70,115" stroke="#D3B36B" strokeWidth="1.4" fill="#A8842F" fillOpacity="0.2" />
          <polygon points="95,110 145,95 145,135 95,150" stroke="#D3B36B" strokeWidth="1.4" fill="#A8842F" fillOpacity="0.15" />
          {/* Intersecting Cube 2 */}
          <polygon points="90,45 130,35 150,65 110,75" stroke="#A8842F" strokeWidth="1" opacity="0.8" />
          <polygon points="110,75 150,65 150,105 110,115" stroke="#A8842F" strokeWidth="1" opacity="0.8" />
          {/* Cube 3 */}
          <polygon points="45,100 75,90 90,115 60,125" stroke="#D3B36B" strokeWidth="1" opacity="0.7" />
          <polygon points="45,100 60,125 60,155 45,130" stroke="#A8842F" strokeWidth="1" opacity="0.7" />
          {/* Fine striations characteristic of natural pyrite cubes */}
          <line x1="75" y1="80" x2="115" y2="68" stroke="#D3B36B" strokeWidth="0.6" opacity="0.5" />
          <line x1="80" y1="90" x2="120" y2="78" stroke="#D3B36B" strokeWidth="0.6" opacity="0.5" />
        </svg>
      );

    case 'clock':
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-full p-8 ${className}`}>
          {/* Natural agate/geode slice clock */}
          <path d="M100 25 C145 20, 175 60, 170 100 C165 145, 140 175, 100 172 C55 170, 25 140, 28 100 C30 55, 60 30, 100 25 Z" stroke="#D3B36B" strokeWidth="1.8" fill="#A8842F" fillOpacity="0.05" />
          {/* Concentric growth rings of the agate */}
          <path d="M100 40 C135 36, 160 70, 155 100 C150 135, 130 158, 100 156 C65 154, 42 130, 45 100 C47 65, 70 44, 100 40 Z" stroke="#A8842F" strokeWidth="0.8" opacity="0.6" />
          <path d="M100 58 C125 55, 142 80, 138 100 C134 125, 120 142, 100 140 C75 138, 58 120, 60 100 C62 75, 80 60, 100 58 Z" stroke="#D3B36B" strokeWidth="0.6" strokeDasharray="3 3" opacity="0.5" />
          {/* Minimalist 12, 3, 6, 9 markers */}
          <line x1="100" y1="46" x2="100" y2="54" stroke="#D3B36B" strokeWidth="1.5" />
          <line x1="154" y1="100" x2="146" y2="100" stroke="#D3B36B" strokeWidth="1.5" />
          <line x1="100" y1="154" x2="100" y2="146" stroke="#D3B36B" strokeWidth="1.5" />
          <line x1="46" y1="100" x2="54" y2="100" stroke="#D3B36B" strokeWidth="1.5" />
          {/* Center spindle & elegant clock hands */}
          <circle cx="100" cy="100" r="3.5" fill="#D3B36B" />
          {/* Hour hand pointing North-East (Vastu sacred alignment) */}
          <line x1="100" y1="100" x2="125" y2="75" stroke="#FCFAF5" strokeWidth="1.6" strokeLinecap="round" />
          {/* Minute hand pointing toward 12 */}
          <line x1="100" y1="100" x2="100" y2="60" stroke="#D3B36B" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );

    case 'meditation-box':
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-full p-6 ${className}`}>
          {/* Sacred meditation box with cream accent */}
          <rect x="35" y="45" width="130" height="110" rx="3" stroke="#A8842F" strokeWidth="1.5" fill="#221A0E" />
          <rect x="30" y="40" width="140" height="24" rx="2" stroke="#D3B36B" strokeWidth="1.5" fill="#EFE4CE" fillOpacity="0.25" />
          {/* Gold ribbon / bindu */}
          <line x1="100" y1="40" x2="100" y2="155" stroke="#A8842F" strokeWidth="1" strokeDasharray="4 2" />
          {/* Devanagari Dhyan stamp inside */}
          <text x="100" y="115" textAnchor="middle" fill="#D3B36B" fontSize="26" fontFamily="var(--font-devanagari)" opacity="0.9">ध्यान</text>
          <circle cx="100" cy="52" r="3" fill="#EFE4CE" />
        </svg>
      );

    case 'protection-box':
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-full p-6 ${className}`}>
          {/* Sacred energy protection box with midnight accent */}
          <rect x="35" y="45" width="130" height="110" rx="3" stroke="#A8842F" strokeWidth="1.5" fill="#171208" />
          <rect x="30" y="40" width="140" height="24" rx="2" stroke="#D3B36B" strokeWidth="1.5" fill="#22304E" fillOpacity="0.4" />
          <line x1="100" y1="40" x2="100" y2="155" stroke="#A8842F" strokeWidth="1" strokeDasharray="4 2" />
          <text x="100" y="115" textAnchor="middle" fill="#D3B36B" fontSize="26" fontFamily="var(--font-devanagari)" opacity="0.9">रक्षा</text>
          <circle cx="100" cy="52" r="3" fill="#22304E" stroke="#D3B36B" strokeWidth="0.8" />
        </svg>
      );

    case 'wealth-box':
      return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-full p-6 ${className}`}>
          {/* Sacred health & wealth box with plum accent */}
          <rect x="35" y="45" width="130" height="110" rx="3" stroke="#A8842F" strokeWidth="1.5" fill="#2E2413" />
          <rect x="30" y="40" width="140" height="24" rx="2" stroke="#D3B36B" strokeWidth="1.5" fill="#4B2A45" fillOpacity="0.35" />
          <line x1="100" y1="40" x2="100" y2="155" stroke="#A8842F" strokeWidth="1" strokeDasharray="4 2" />
          <text x="100" y="115" textAnchor="middle" fill="#D3B36B" fontSize="26" fontFamily="var(--font-devanagari)" opacity="0.9">श्री</text>
          <circle cx="100" cy="52" r="3" fill="#4B2A45" stroke="#D3B36B" strokeWidth="0.8" />
        </svg>
      );

    default:
      return null;
  }
}
