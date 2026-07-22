import React from 'react';
import { Check } from 'lucide-react';
import { useInquiry } from '../contexts/InquiryContext'; // ✅ import hook

const WhyChooseUs = () => {
  const inquiry = useInquiry(); // ✅ get modal controls

  const reasons = [
    {
      number: '01',
      title: 'Strategy Before Execution',
      description:
        'We begin by understanding your business, goals, and users before writing a single line of code or creating a design. This ensures every solution solves real business challenges—not just technical ones.',
    },
    {
      number: '02',
      title: 'Design That Creates Trust',
      description:
        'Exceptional design goes beyond aesthetics. We craft intuitive user experiences and memorable brand identities that build credibility, strengthen customer confidence, and leave lasting impressions.',
    },
    {
      number: '03',
      title: 'Modern Technology Stack',
      description:
        'From responsive websites and scalable web applications to AI-powered automation, we leverage modern technologies that are secure, fast, and built for future growth.',
    },
    {
      number: '04',
      title: 'AI-Driven Innovation',
      description:
        'We integrate intelligent automation, custom AI assistants, workflow optimization, and smart analytics to help businesses work more efficiently and make better decisions.',
    },
    {
      number: '05',
      title: 'Built for Scalability',
      description:
        "Whether you're launching a startup, expanding an established company, or creating your next digital platform, our solutions are engineered to evolve alongside your business.",
    },
    {
      number: '06',
      title: 'One Technology Partner',
      description:
        'Instead of working with multiple agencies for branding, development, and AI, you get one dedicated partner capable of delivering everything under one roof—from concept to deployment.',
    },
  ];

  const promises = [
    'Strategic Thinking',
    'Premium Design',
    'Clean & Scalable Code',
    'AI-Powered Solutions',
    'Transparent Communication',
    'Long-Term Partnership',
  ];

  const shortReasons = [
    {
      title: 'Strategic Approach',
      desc: 'Every project begins with understanding your business before building the solution.',
    },
    {
      title: 'Premium Design',
      desc: 'Beautiful, intuitive digital experiences that strengthen your brand.',
    },
    {
      title: 'Future-Ready Technology',
      desc: 'Modern development practices that ensure speed, security, and scalability.',
    },
    {
      title: 'AI Innovation',
      desc: 'Smarter systems that automate processes and unlock new opportunities.',
    },
    {
      title: 'Reliable Partnership',
      desc: 'Clear communication, dependable delivery, and continuous support.',
    },
    {
      title: 'End-to-End Solutions',
      desc: 'Everything from branding and design to software development and AI—all in one place.',
    },
  ];

  return (
    <section className="relative bg-[#F7FAFC] text-slate-800 py-20 px-4 md:px-12 lg:px-16 overflow-hidden">
      
      {/* ─── BACKGROUND PATTERN (FRAME GRID) ─── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="frameGridWhy" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
              <rect x="4" y="4" width="40" height="40" fill="none" stroke="#6C63FF" strokeWidth="0.8"/>
              <rect x="10" y="10" width="28" height="28" fill="none" stroke="#6C63FF" strokeWidth="0.4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#frameGridWhy)"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-wide text-[#6C63FF] uppercase">
            WHY CHOOSE MSAFI LABS
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mt-3 font-medium">
            Building More Than Digital Solutions
          </p>
          <div className="w-24 h-1 bg-[#6C63FF] mx-auto mt-4 rounded-full" />
        </div>

        {/* DETAILED REASONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((item) => (
            <div
              key={item.number}
              className="bg-white/90 backdrop-blur-[1px] rounded-xl p-6 border border-slate-100 hover:shadow-lg transition-shadow duration-300"
            >
              <span className="text-4xl font-black text-[#6C63FF]/20 block mb-2">
                {item.number}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* OUR PROMISE */}
        <div className="bg-white/90 backdrop-blur-[1px] rounded-2xl p-8 md:p-12 border border-slate-100 mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-8">
            Our Promise
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {promises.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#6C63FF]/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-[#6C63FF]" />
                </div>
                <span className="text-sm font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SHORT VERSION CARDS */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold tracking-wide text-slate-500 uppercase">
              Why Us
            </p>
            <h3 className="text-2xl md:text-4xl font-bold text-slate-900">
              Your Vision. Our Expertise. <br />
              <span className="text-[#6C63FF]">Extraordinary Results.</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shortReasons.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/90 backdrop-blur-[1px] border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h4 className="text-md font-bold text-slate-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA – now a button that opens the modal */}
        <div className="mt-20">
          <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-[#6C63FF] to-[#6C63FF] px-8 py-12 text-center shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Build Something Extraordinary?
            </h3>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              Whether you're launching a new brand, building powerful software, or
              integrating AI into your business, we're here to turn your vision into
              reality.
            </p>
            <button
              onClick={() => inquiry.open('talk')}
              className="inline-flex items-center mt-8 rounded-full bg-white px-8 py-4 text-[#070707] font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;