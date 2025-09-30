import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 bg-secondary p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-extrabold mb-2">📞 Looking for the best digital marketing agency in Tamil Nadu &amp; Chennai?</h2>
          <p className="max-w-3xl mx-auto mb-6 text-gray-200">
            Whether you’re in Coimbatore, Madurai, Trichy, Salem, or Chennai, KTech Digital Solutions helps your business grow online.
          </p>
          <Link to="/contact" className="inline-block bg-gradient-to-t from-purple-800 via-fuchsia-700 to-pink-500  text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-fuchsia-500 transition-transform transform hover:scale-105 duration-300">
            👉 Get a Free Quote
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Column 1: Brand & Info */}
            <div className="space-y-4">
              <Link to="/" className="text-3xl font-extrabold text-white">
               <img src="pages/logo.png" height="30px" width="30px" alt="K-Tech Logo"/>K-Tech
              </Link>
              <p className="text-gray-300 text-sm">Part of Krishnapillai Group of Companies</p>
              <div className="flex items-center justify-center md:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
               </svg>
                <a href="https://share.google/lMJgBBXVsIGqwtJ8Y"><span>Chengalpattu, Tamil Nadu</span></a>
              </div>
            </div>
            {/* Column 2: Quick Links */}
            <div className="space-y-2">
              <h3 className="font-bold text-lg text-white mb-2">Quick Links</h3>
              <ul className="space-y-1 text-gray-300">
                <li><Link to="/" className="hover:text-fuchsia-700 transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-fuchsia-700 transition-colors">About Us</Link></li>
                <li><Link to="/services" className="hover:text-fuchsia-700 transition-colors">Services</Link></li>
                <li><Link to="/blog" className="hover:text-fuchsia-700 transition-colors">Blog</Link></li>
                <li><Link to="/careers" className="hover:text-fuchsia-700 transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="hover:text-fuchsia-700 transition-colors">Contact</Link></li>
              </ul>
            </div>
            {/* Column 3: Contact & Social Media (MODIFIED) */}
            <div className="space-y-2">
              <h3 className="font-bold text-lg text-white mb-2">Contact Us</h3>
              {/* Email */}
              <div className="flex items-center justify-center md:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@ktechdigi.com" className="hover:text-fuchsia-700 transition-colors">info@ktechdigi.com</a>
              </div>
              {/* Phone */}
              <div className="flex items-center justify-center md:justify-start mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href="tel:+911234567890" className="hover:text-fuchsia-700 transition-colors">+91 8148736007</a>
              </div>
              
              {/* Social Media Links (NEW) */}
              <h3 className="font-bold text-lg text-white mb-2 pt-4 border-t border-gray-700 md:border-t-0 md:pt-0">Follow Us</h3>
              <div className="flex space-x-4 justify-center md:justify-start ">
                
                {/* Instagram Icon */}
                <a 
                  href="https://www.instagram.com/k_tech_digi?igsh=MXI2NnZ5aWttODZpcA==" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-fuchsia-700 transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <img src="https://static.vecteezy.com/system/resources/previews/042/148/632/non_2x/instagram-logo-instagram-social-media-icon-free-png.png" alt="insta_logo" 
                  height="53px" width="53px"/>
                </a>
                
                {/* X (Twitter) Icon */}
                <a 
                  href="https://x.com/ktectdigital?t=DlYgOP6qfLQsTIarnOv2bg&s=08" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-fuchsia-700 transition-colors"
                  aria-label="Follow us on X (formerly Twitter)"
                >
                   <img src="https://static.vecteezy.com/system/resources/previews/027/395/710/non_2x/twitter-brand-new-logo-3-d-with-new-x-shaped-graphic-of-the-world-s-most-popular-social-media-free-png.png" alt="insta_logo" 
                  height="35px" width="35px" className="mt-[8px]"/>
                </a>
              </div>
            </div>
        </div>
        
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} KTech Digital Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;