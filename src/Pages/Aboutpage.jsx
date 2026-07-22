// Pages/Aboutpage.jsx
import React from 'react';
import AboutHero from '../components/AboutHero';
import OurStory from '../components/OurStory';
import OurEthos from '../components/OurEthos';
import FounderPhilosophy from '../components/FounderPhilosophy';
import OurLabs from '../components/OurLabs';
import WhyChooseUs from '../components/WhyChooseUs';
import OurProcess from '../components/OurProcess';
import CoreValues from '../components/CoreValues';
import Technologies from '../components/Technologies';
import AboutCTA from '../components/AboutCTA';

export default function About() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans'", background: '#FBFBFD' }}>
      <AboutHero />
      <OurStory />
      <OurEthos />
      <FounderPhilosophy />
      <OurLabs />
      <WhyChooseUs />
      <OurProcess />
      <CoreValues />
      <Technologies />
      <AboutCTA />
    </div>
  );
}