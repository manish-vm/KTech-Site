import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `py-2 px-3 rounded-md text-sm font-medium transition-colors duration-300 ${
      isActive ? 'bg-gradient-to-t from-purple-800 via-fuchsia-700 to-pink-500 text-white' : 'text-primary hover:bg-secondary hover:text-white'
    }`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block py-2 px-4 text-sm ${isActive ? 'bg-gradient-to-t from-purple-800 via-fuchsia-700 to-pink-500 text-white' : 'text-primary'}`;
  
  const services = [
    { name: 'Digital Marketing', path: '/services', end: true },
    { name: 'SEO Services', path: '/services/seo' },
    { name: 'Social Media Marketing', path: '/services/social-media-marketing' },
    { name: 'Content Writing', path: '/services/content-writing' },
    { name: 'PPC Advertising', path: '/services/ppc-advertising' },
    { name: 'Website Development', path: '/services/website-development' },
    { name: 'Mobile App Development', path: '/services/mobile-app-development' },
    { name: 'Branding Services', path: '/services/branding' },
    { name: 'Video Marketing', path: '/services/video-marketing' },
    { name: 'Influencer Marketing', path: '/services/influencer-marketing' },
    { name: 'Web Hosting', path: '/services/web-hosting' },
    { name: 'Web Analytics', path: '/services/web-analytics' },
    { name: 'Software Development', path: '/services/software-development' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/">
                <img src="pages/ktech_logo.png" height="80px" width="150px"/>
            </Link>
          </div>
          <div className="hidden md:block">
            <nav className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={navLinkClass}>Home</NavLink>
              <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
              <div className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
                 <NavLink to="/services" className={navLinkClass}>Services</NavLink>
                 {isServicesOpen && (
                   <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                     <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                       {services.map(service => (
                          <NavLink key={service.path} to={service.path} end={service.end} className={({isActive}) => `block px-4 py-2 text-sm ${isActive ? 'bg-gradient-to-t from-purple-800 via-fuchsia-700 to-pink-500 text-white' : 'text-gray-700 hover:bg-gray-100'}`} role="menuitem">{service.name}</NavLink>
                       ))}
                     </div>
                   </div>
                 )}
              </div>
              <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
              <NavLink to="/careers" className={navLinkClass}>Careers</NavLink>
              <NavLink to="/contact" className={({isActive}) => `py-2 px-4 rounded-full text-sm font-medium transition-colors duration-300 ${isActive ? 'bg-gradient-to-t from-purple-800 via-fuchsia-700 to-pink-500 text-white' : 'bg-gradient-to-t from-pink-500 via-fuchsia-700 to-purple-800 text-white hover:bg-orange-700'}`}>Contact Us</NavLink>
            </nav>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-fuchsia-700 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-fuchsia-700 focus:outline-none "
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
  <div className="md:hidden" id="mobile-menu">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      <NavLink to="/" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
      <NavLink to="/about" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>About Us</NavLink>
      
      {/* Services with toggle */}
      <button
        onClick={() => setIsServicesOpen(!isServicesOpen)}
        className="w-full text-left block py-2 px-4 text-sm text-primary hover:bg-secondary hover:text-white rounded-md"
      >
        Services
      </button>

      {isServicesOpen && (
        <div className="pl-4 border-l-2 border-fuchsia-700">
          {services.map(service => (
            <NavLink
              key={service.path}
              to={service.path}
              end={service.end}
              className={mobileNavLinkClass}
              onClick={() => {
                setIsMenuOpen(false);
                setIsServicesOpen(false); // close submenu after clicking
              }}
            >
              {service.name}
            </NavLink>
          ))}
        </div>
      )}

      <NavLink to="/blog" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>Blog</NavLink>
      <NavLink to="/careers" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>Careers</NavLink>
      <Link
        to="/contact"
        className="block text-center mt-4 w-full py-2 px-4 bg-gradient-to-t from-pink-500 via-fuchsia-700 to-purple-800 text-white rounded-full text-sm font-medium hover:bg-orange-700 transition-colors duration-300"
        onClick={() => setIsMenuOpen(false)}
      >
        Contact Us
      </Link>
    </div>
  </div>
)}

    </header>
  );
};

export default Header;

