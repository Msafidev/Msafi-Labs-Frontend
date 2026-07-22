import React from 'react';

const techs = [
  {
    name: "React",
    logo: (
      <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
        <ellipse cx="20" cy="20" rx="3.2" ry="3.2" fill="#fff"/>
        <ellipse cx="20" cy="20" rx="18" ry="6.5" stroke="#fff" strokeWidth="1.8" fill="none"/>
        <ellipse cx="20" cy="20" rx="18" ry="6.5" stroke="#fff" strokeWidth="1.8" fill="none" transform="rotate(60 20 20)"/>
        <ellipse cx="20" cy="20" rx="18" ry="6.5" stroke="#fff" strokeWidth="1.8" fill="none" transform="rotate(120 20 20)"/>
      </svg>
    )
  },
  {
    name: "Python",
    logo: (
      <svg width="26" height="26" viewBox="0 0 40 40" fill="none">
        <path d="M20 4C13 4 11 7 11 11v3h9v1H8S4 15 4 22s3.5 7 3.5 7H10v-4c0-4 2-6 6-6h8c3.5 0 6-2.5 6-6v-5c0-3.5-2.5-4-10-4zM15.5 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill="white" opacity="0.9"/>
        <path d="M20 36c7 0 9-3 9-7v-3h-9v-1h12s4 0 4-7-3.5-7-3.5-7H30v4c0 4-2 6-6 6h-8c-3.5 0-6 2.5-6 6v5c0 3.5 2.5 4 10 4zM24.5 31.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="white" opacity="0.6"/>
      </svg>
    )
  },
  {
    name: "Django",
    logo: (
      <svg width="22" height="28" viewBox="0 0 32 40" fill="none">
        <text x="2" y="32" fontFamily="Georgia, serif" fontSize="30" fontWeight="bold" fill="white">D</text>
      </svg>
    )
  },
  {
    name: "Tailwind CSS",
    logo: (
      <svg width="32" height="20" viewBox="0 0 54 33" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M27 0C19.8 0 15.3 3.6 13.5 10.8c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C30.744 12.672 33.808 15.84 40.5 15.84c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C36.756 3.168 33.692 0 27 0zM13.5 15.84C6.3 15.84 1.8 19.44 0 26.64c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 28.512 20.308 31.68 27 31.68c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C23.256 19.008 20.192 15.84 13.5 15.84z" fill="white"/>
      </svg>
    )
  },
  {
    name: "Next.js",
    logo: (
      <svg width="26" height="26" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="17" stroke="white" strokeWidth="2" fill="none"/>
        <path d="M14 28V14l16 18h-4L14 18v10z" fill="white"/>
        <path d="M26 14h4v14" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    name: "UI/UX Design",
    logo: (
      <svg width="20" height="28" viewBox="0 0 30 44" fill="none">
        <rect x="1" y="1" width="13" height="13" rx="6.5" fill="white" opacity="0.6"/>
        <rect x="16" y="1" width="13" height="13" rx="6.5" fill="white" opacity="0.9"/>
        <rect x="1" y="16" width="13" height="13" rx="6.5" fill="white" opacity="0.75"/>
        <rect x="16" y="16" width="13" height="13" rx="6.5" fill="white" opacity="0.5"/>
        <rect x="1" y="31" width="13" height="13" rx="6.5" fill="white" opacity="0.6"/>
      </svg>
    )
  },
  {
    name: "AI Infrastructure",
    logo: (
      <svg width="26" height="26" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="4" fill="white"/>
        <circle cx="8" cy="10" r="3" fill="white" opacity="0.7"/>
        <circle cx="32" cy="10" r="3" fill="white" opacity="0.7"/>
        <circle cx="8" cy="30" r="3" fill="white" opacity="0.7"/>
        <circle cx="32" cy="30" r="3" fill="white" opacity="0.7"/>
        <line x1="20" y1="20" x2="8" y2="10" stroke="white" strokeWidth="1.5" opacity="0.5"/>
        <line x1="20" y1="20" x2="32" y2="10" stroke="white" strokeWidth="1.5" opacity="0.5"/>
        <line x1="20" y1="20" x2="8" y2="30" stroke="white" strokeWidth="1.5" opacity="0.5"/>
        <line x1="20" y1="20" x2="32" y2="30" stroke="white" strokeWidth="1.5" opacity="0.5"/>
      </svg>
    )
  },
  {
    name: "Custom APIs",
    logo: (
      <svg width="30" height="22" viewBox="0 0 44 32" fill="none">
        <rect x="1" y="1" width="42" height="30" rx="5" stroke="white" strokeWidth="2" fill="none"/>
        <text x="6" y="22" fontFamily="monospace" fontSize="14" fontWeight="bold" fill="white" opacity="0.9">{"</>"}</text>
        <line x1="30" y1="8" x2="30" y2="24" stroke="white" strokeWidth="1.5" opacity="0.4"/>
        <circle cx="36" cy="12" r="2" fill="white" opacity="0.7"/>
        <circle cx="36" cy="20" r="2" fill="white" opacity="0.5"/>
      </svg>
    )
  },
  {
    name: "Automation",
    logo: (
      <svg width="26" height="26" viewBox="0 0 40 40" fill="none">
        <path d="M20 4v6M20 30v6M4 20h6M30 20h6" stroke="white" strokeWidth="2.2" strokeLinecap="round" opacity="0.7"/>
        <circle cx="20" cy="20" r="8" stroke="white" strokeWidth="2" fill="none"/>
        <circle cx="20" cy="20" r="3" fill="white"/>
        <path d="M8.2 8.2l4.2 4.2M27.6 27.6l4.2 4.2M31.8 8.2l-4.2 4.2M12.4 27.6l-4.2 4.2" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      </svg>
    )
  }
];

const MarqueeDivider = () => {
  const items = [...techs, ...techs];

  return (
    <div className="overflow-hidden bg-[#6C63FF] border-y-[3px] border-[#6C63FF] py-3">
      <div className="flex items-center whitespace-nowrap animate-marquee">
        {items.map((tech, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2.5 px-8 text-[13px] font-semibold text-white tracking-wide"
          >
            {tech.logo}
            {tech.name}
            <span className="w-[5px] h-[5px] rounded-full bg-white/35 shrink-0 ml-1" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeDivider;