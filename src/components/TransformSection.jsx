import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useInquiry } from '../contexts/InquiryContext'; // ✅ import hook

// Import your image
import transformImage from '../assets/transform-image.jpg';

const TransformCard = () => {
  const inquiry = useInquiry(); // ✅ get modal controls

  return (
    <section className="relative bg-[#6C63FF] text-white py-20 px-4 md:px-12 lg:px-16 overflow-hidden">
      
      {/* Background Pattern – white lines on purple, subtle */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="frameGridPurple" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
              <rect x="4" y="4" width="40" height="40" fill="none" stroke="white" strokeWidth="0.8"/>
              <rect x="10" y="10" width="28" height="28" fill="none" stroke="white" strokeWidth="0.4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#frameGridPurple)"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Card – white background with border and shadow */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5 items-stretch">
            {/* Image */}
            <div className="md:col-span-2 h-64 md:h-auto overflow-hidden bg-slate-50">
              <img
                src={transformImage}
                alt="Transform Ideas Into Digital Excellence"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight mb-3">
                Transform Ideas Into <br />
                <span className="text-[#6C63FF]">Digital Excellence</span>
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 max-w-lg">
                We partner with ambitious businesses to design powerful brands,
                build scalable software, and leverage AI-driven solutions that
                accelerate growth. Let's discuss how we can bring your vision to
                life.
              </p>
              <button
                onClick={() => inquiry.open('project')}
                className="inline-flex items-center gap-2 rounded-full bg-[#6C63FF] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#5b54e0] hover:-translate-y-0.5 hover:shadow-lg w-fit"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformCard;