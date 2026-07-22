import React from 'react';
import HeroPage from '../components/HeroPage';
import WhatWeBuild from '../components/WhatWeBuild';
import TechStark from '../components/TechStark';
import MarqueeDivider from '../components/MarqueeDivider';
import WhyChooseUs from '../components/WhyChooseUs';
import ClientTestimonials from '../components/ClientTestimonials';
import TransformSection from '../components/TransformSection';

export default function Homepage() {
  return (
    <>
      <HeroPage />
      <MarqueeDivider />
      <WhatWeBuild />
      <TechStark />
      <WhyChooseUs />
      <ClientTestimonials />
      <TransformSection />
    </>
  );
}