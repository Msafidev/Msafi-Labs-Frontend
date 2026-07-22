import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

// Import icons from react-icons
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapPin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-[#0D0E1A] text-white/80 font-sans overflow-hidden">
      {/* Subtle Frame-Grid Pattern (white on dark) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="footerGrid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
              <rect x="4" y="4" width="40" height="40" fill="none" stroke="white" strokeWidth="0.8"/>
              <rect x="10" y="10" width="28" height="28" fill="none" stroke="white" strokeWidth="0.4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footerGrid)"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 lg:px-16 pt-16 pb-4">
        {/* Main Footer Grid */}
        {/* 🟢 CHANGED: grid-cols-1 → grid-cols-2 for mobile */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Logo & About */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold tracking-tight inline-block">
              <span className="text-[#6C63FF]">Msafi</span>
              <span className="text-white"> Labs</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Building premium digital experiences through innovative
              design, software engineering, and AI-powered solutions.
            </p>
            <div className="flex space-x-3 pt-2">
                {/* All social links open in a new tab (target="_blank") */}
                <a href="https://facebook.com/msafilabs" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '19px', opacity: 0.85 }}>
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://linkedin.com/in/austineochiengdev" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '19px', opacity: 0.85 }}>
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://twitter.com/msafilabs" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '19px', opacity: 0.85 }}>
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a href="https://instagram.com/msafi.labs" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '19px', opacity: 0.85 }}>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-white transition-colors duration-200">About Us</Link></li>
                <li><Link to="/portfolio" className="hover:text-white transition-colors duration-200">Our Work</Link></li>
                <li className="flex items-center gap-2">
                  <Link to="/careers" className="hover:text-white transition-colors duration-200">Careers</Link>
                  <span className="text-[10px] font-medium bg-white/10 text-white/60 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Coming Soon
                  </span>
                </li>
                <li><Link to="/contact" className="hover:text-white transition-colors duration-200">Contact</Link></li>
              </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/the-labs/design" className="hover:text-white transition-colors duration-200">Design Lab</Link></li>
              <li><Link to="/the-labs/code" className="hover:text-white transition-colors duration-200">Code Lab</Link></li>
              <li><Link to="/the-labs/ai" className="hover:text-white transition-colors duration-200">AI Lab</Link></li>
              <li><Link to="/the-labs/platform" className="hover:text-white transition-colors duration-200">Msafi Platform</Link></li>
            </ul>
          </div>

          {/* Column 4: Resources & Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog" className="hover:text-white transition-colors duration-200">Blog</Link></li>
              <li><Link to="/faqs" className="hover:text-white transition-colors duration-200">FAQs</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors duration-200">Terms</Link></li>
            </ul>
            <div className="mt-6 space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <FaMapPin className="w-4 h-4 text-[#6C63FF] mt-0.5 flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="w-4 h-4 text-[#6C63FF] flex-shrink-0" />
                <a href="mailto:msafilabs@gmail.com" className="hover:text-white transition-colors duration-200">
                  msafilabs@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="w-4 h-4 text-[#6C63FF] flex-shrink-0" />
                <a href="tel:+254759015376" className="hover:text-white transition-colors duration-200">
                  +254 759 015 376
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-center gap-2 pt-6 text-center text-sm text-white/50">
          <p>© 2026 Msafi Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;