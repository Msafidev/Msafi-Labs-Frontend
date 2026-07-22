import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';  // ✅ import Link

// Import your local images
import AI from '../assets/AI.png';
import design from '../assets/design.png';
import code from '../assets/code.png';
import Msafi from '../assets/Msafi.png';

const WhatWeBuild = () => {
  const labs = [
    {
      title: "Design Lab",
      subtitle: "(Brand Identity & Graphics)",
      description: "From visual identities and intuitive user interfaces to marketing assets and social media branding, we craft experiences that capture attention and build trust.",
      image: design,
      link: "/the-labs/design"
    },
    {
      title: "Code Lab",
      subtitle: "(Custom Software & Web Development)",
      description: "We develop modern websites, web applications, e-commerce platforms, and scalable backend systems that deliver speed, security, and seamless user experiences.",
      image: code,
      link: "/the-labs/code"
    },
    {
      title: "AI Lab",
      subtitle: "(Intelligent Systems & Workflows)",
      description: "Harness the power of AI with custom chatbots, business automation, intelligent analytics, and smart integrations designed to improve efficiency and unlock new opportunities.",
      image: AI,
      link: "/the-labs/ai"
    },
    {
      title: "Msafi Platform",
      subtitle: "(Scalable Growth Products)",
      description: "We combine strategy and modern technology to deploy platforms built intentionally for long-term scalability and absolute user engagement.",
      image: Msafi,
      link: "/the-labs/platform"
    }
  ];

  return (
    <section className="relative bg-white text-slate-800 py-20 px-4 md:px-12 lg:px-16 overflow-hidden">
      
      {/* ─── BACKGROUND PATTERN (FRAME GRID) ─── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="frameGrid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
              <rect x="4" y="4" width="40" height="40" fill="none" stroke="#6C63FF" strokeWidth="0.8"/>
              <rect x="10" y="10" width="28" height="28" fill="none" stroke="#6C63FF" strokeWidth="0.4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#frameGrid)"/>
        </svg>
      </div>

      {/* ─── CONTENT ─── */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <h2 className="text-3xl md:text-5xl font-black tracking-wide text-[#6C63FF] uppercase">
            WHAT WE DO
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {labs.map((lab, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-[1px] border border-slate-100 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center p-6 text-center overflow-hidden group"
            >
              {/* Image */}
              <div className="w-full h-44 mb-6 rounded-lg overflow-hidden flex items-center justify-center bg-slate-50">
                <img
                  src={lab.image}
                  alt={lab.title}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Text */}
              <div className="flex-1 flex flex-col items-center">
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  {lab.title}
                </h3>
                <span className="text-xs font-medium text-slate-500 block mt-1 mb-4">
                  {lab.subtitle}
                </span>
                <p className="text-xs text-slate-500 leading-relaxed max-w-[250px] mb-6">
                  {lab.description}
                </p>
              </div>

              {/* Action Link – now using React Router <Link> */}
              <div className="mt-auto">
                <Link
                  to={lab.link}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#6C63FF] hover:text-[#5b54e0] transition-colors duration-200"
                >
                  Read More
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;