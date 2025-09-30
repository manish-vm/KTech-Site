import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import SeoPage from './pages/SeoPage';
import SmmPage from './pages/SmmPage';
import ContentPage from './pages/ContentPage';
import ContactPage from './pages/ContactPage';
import PpcPage from './pages/PpcPage';
import InfluencerMarketingPage from './pages/InfluencerMarketingPage';
import WebDevPage from './pages/WebDevPage';
import WebHostingPage from './pages/WebHostingPage';
import MobileAppPage from './pages/MobileAppPage';
import WebAnalyticsPage from './pages/WebAnalyticsPage';
import BrandingPage from './pages/BrandingPage';
import VideoMarketingPage from './pages/VideoMarketingPage';
import SoftwareDevPage from './pages/SoftwareDevPage';
import BlogPage from './pages/BlogPage';
import CareersPage from './pages/CareersPage';
import AdminPage from './pages/AdminPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <ScrollToTop />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/seo" element={<SeoPage />} />
          <Route path="/services/social-media-marketing" element={<SmmPage />} />
          <Route path="/services/content-writing" element={<ContentPage />} />
          <Route path="/services/ppc-advertising" element={<PpcPage />} />
          <Route path="/services/influencer-marketing" element={<InfluencerMarketingPage />} />
          <Route path="/services/website-development" element={<WebDevPage />} />
          <Route path="/services/web-hosting" element={<WebHostingPage />} />
          <Route path="/services/mobile-app-development" element={<MobileAppPage />} />
          <Route path="/services/web-analytics" element={<WebAnalyticsPage />} />
          <Route path="/services/branding" element={<BrandingPage />} />
          <Route path="/services/video-marketing" element={<VideoMarketingPage />} />
          <Route path="/services/software-development" element={<SoftwareDevPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;