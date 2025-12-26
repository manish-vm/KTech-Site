
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

const services = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-fuchsia-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        ),
        title: 'Search Engine Optimization (SEO)',
        description: 'Our SEO services in Tamil Nadu and Chennai help your business rank higher on Google and attract quality leads. We handle on-page SEO, off-page SEO, keyword research, local SEO for Tamil Nadu cities, and content optimization to drive long-term organic growth. Whether you’re in Chennai, Coimbatore, or Madurai, our SEO strategies deliver sustainable results.',
        link: '/services/seo'
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-fuchsia-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V10a2 2 0 012-2h8z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16H5a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2" />
            </svg>
        ),
        title: 'Social Media Marketing (SMM)',
        description: 'As a trusted social media marketing company in Tamil Nadu, we create high-impact campaigns for Instagram, Facebook, and LinkedIn. From paid ads in Chennai to organic growth in Madurai and Trichy, we ensure your brand builds followers, engagement, and conversions.',
        link: '/services/social-media-marketing'
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-fuchsia-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3" />
            </svg>
        ),
        title: 'PPC & Google Ads',
        description: 'Our PPC advertising services in Tamil Nadu provide instant visibility and measurable ROI. We design targeted Google Ads campaigns that reach customers in Chennai, Salem, Coimbatore, and Tirunelveli, ensuring maximum conversions at the lowest cost.',
        link: '/services/ppc-advertising'
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-fuchsia-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        title: 'Website Design & Development',
        description: 'We are a leading website development company in Tamil Nadu, delivering SEO-friendly, mobile-responsive, and fast-loading websites. From WordPress websites in Chennai to eCommerce stores in Coimbatore, our designs focus on user experience and higher conversions.',
        link: '/services/website-development'
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-fuchsia-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        title: 'Content Marketing',
        description: 'Our content marketing services in Tamil Nadu include SEO blogs, ad copy, and website content optimized for Google ranking. We help businesses across Trichy, Erode, and Chennai improve brand authority through engaging and keyword-rich content.',
        link: '/services/content-writing'
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-fuchsia-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
        ),
        title: 'Email & WhatsApp Marketing',
        description: 'With our email and WhatsApp marketing services in Tamil Nadu, you can connect with customers instantly. We design campaigns that increase engagement, retention, and repeat sales for businesses in Madurai, Vellore, and Chennai.'
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-fuchsia-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        title: 'E-Commerce Marketing',
        description: 'Our e-commerce marketing services in Tamil Nadu help online stores boost sales with SEO, Google Shopping Ads, and social media promotions. From Amazon marketing in Chennai to Facebook shop ads in Coimbatore, we grow your online revenue.'
    },
];

const whyChooseUsPoints = [
    "Local Expertise – We know the Tamil Nadu market – Chennai, Coimbatore, Madurai, Trichy & beyond.",
    "Proven Results – SEO, PPC & SMM campaigns that drive traffic, leads & sales.",
    "Affordable Packages – Tailored for startups, SMEs & enterprises.",
    "Dedicated Support – Transparent reporting & continuous optimization.",
    "Full Digital Solutions – From websites to marketing, everything under one roof."
];

const clientLogos = [
    'https://via.placeholder.com/150x60/cccccc/ffffff?text=Client+1',
    'https://via.placeholder.com/150x60/cccccc/ffffff?text=Client+2',
    'https://via.placeholder.com/150x60/cccccc/ffffff?text=Client+3',
    'https://via.placeholder.com/150x60/cccccc/ffffff?text=Client+4',
    'https://via.placeholder.com/150x60/cccccc/ffffff?text=Client+5',
    'https://via.placeholder.com/150x60/cccccc/ffffff?text=Client+6'
];

const initialPortfolioProjects = [
    {
        image: 'https://static.vecteezy.com/system/resources/previews/026/608/976/large_2x/women-s-fashion-store-in-the-shopping-center-or-mall-clothes-store-with-mannequin-shopping-day-concept-by-ai-generated-free-photo.jpg',
        category: 'SEO & LOCAL PPC',
        title: 'Coimbatore Fashion Store',
        description: 'We executed a hyper-local SEO and Google Ads strategy to increase footfall and online sales for a boutique fashion store in Coimbatore.',
        result: '+60% Increase in Organic Traffic',
        link: '#'
    },
    {
        image: 'https://media.istockphoto.com/id/1409298953/photo/real-estate-agents-shake-hands-after-the-signing-of-the-contract-agreement-is-complete.jpg?s=612x612&w=0&k=20&c=SFybbpGMB0wIoI0tJotFqptzAYK_mICVITNdQIXqnyc=',
        category: 'WEBSITE DEVELOPMENT & SMM',
        title: 'Madurai Real Estate',
        description: 'Developed a high-converting website and ran targeted social media campaigns on Facebook and Instagram to generate qualified leads for a new property launch.',
        result: '300+ Quality Leads in 3 Months',
        link: '#'
    },
    {
        image: 'https://thumbs.dreamstime.com/b/store-modern-electronics-hub-featuring-sleek-gadgets-cutting-edge-displays-illuminated-bright-lights-offering-k-391483254.jpg',
        category: 'E-COMMERCE MARKETING',
        title: 'Chennai Electronics Hub',
        description: 'A full-funnel e-commerce marketing strategy including Google Shopping Ads and content marketing, resulting in a significant revenue boost.',
        result: '+150% ROI on Ad Spend',
        link: '#'
    }
];

const PORTFOLIO_STORAGE_KEY = 'ktech_portfolio_projects';

const HomePage: React.FC = () => {

    const [portfolioProjects, setPortfolioProjects] = useState(initialPortfolioProjects);

    useEffect(() => {
        try {
            const storedProjects = localStorage.getItem(PORTFOLIO_STORAGE_KEY);
            if (storedProjects) {
                setPortfolioProjects(JSON.parse(storedProjects));
            } else {
                // If nothing is in storage, initialize it with the default projects
                localStorage.setItem(PORTFOLIO_STORAGE_KEY, JSON.stringify(initialPortfolioProjects));
            }
        } catch (error) {
            console.error("Failed to access localStorage:", error);
            // State is already initialized with defaults, so we're good.
        }
    }, []);

    return (
        <div className="bg-white">
            <Helmet>
                <title>Digital Marketing Company in Chennai | KTech Digital Solutions</title>

                <meta
                    name="description"
                    content="KTech Digital Solutions is a leading digital marketing company in Chennai, Tamil Nadu. We provide SEO, social media, PPC, branding, web development & more."
                />

                <meta name="keywords" content="digital marketing company Chennai, SEO services Chennai, social media marketing Chennai, PPC services Chennai, branding services Chennai, web development Chennai, mobile app development Chennai, Tamil Nadu digital marketing, best digital marketing agency Chennai" />

            </Helmet>
            {/* Hero Section */}
            <section className="bg-sky-50 overflow-hidden">
                <div className="container mx-auto px-6 lg:px-8 py-16 md:py-20">
                    <div className="grid md:grid-cols-2 items-center gap-12">
                        {/* Left Column */}
                        <div className="animate-fade-in-up">
                            <span className="inline-block bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-5 py-2 rounded-md font-semibold text-sm mb-6 shadow-md">
                                ROI-Driven Digital Marketing Company in Tamil Nadu
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight mb-5">
                                Transform Your Business with KTech Digital Solutions
                            </h1>
                            <p className="text-gray-600 text-lg mb-10 max-w-xl">
                                From Startups to Enterprises – We help brands grow online with SEO, Social Media, PPC, and Complete Digital Marketing Services.
                            </p>
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                <Link to="/contact" className="inline-block text-center bg-gradient-to-r from-fuchsia-600 to-purple-700 text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                    Get Free Consultation
                                </Link>
                                <Link to="/services" className="inline-block text-center bg-white text-fuchsia-700 border-2 border-fuchsia-700 font-bold py-3 px-8 rounded-lg hover:bg-fuchsia-700 hover:text-white transition-colors duration-300 transform hover:-translate-y-0.5">
                                    Our Services
                                </Link>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="relative mt-12 md:mt-0 flex justify-center items-center h-80 md:h-96 lg:h-auto">
                            <div className="absolute w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-cyan-200 to-sky-400 rounded-full"></div>
                            <img
                                src="pages/home_bg.png"
                                alt="Digital Marketing Expert with Laptop"
                                className="relative z-10 w-full max-w-xs sm:max-w-sm lg:max-w-md mb-[50px] "

                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Summary of Expertise */}
            <section className="py-16 bg-light">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-primary mb-4">Grow Your Business Across Tamil Nadu</h2>
                    <p className="max-w-4xl mx-auto text-lg text-gray-700">
                        We help businesses across Tamil Nadu – Chennai, Coimbatore, Madurai, Trichy, Salem & more grow with SEO, Social Media Marketing, Google Ads, and Website Development. Get more traffic, leads, and sales with our proven strategies.
                    </p>
                </div>
            </section>

            {/* Core Services Section */}
            <section className="py-20">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-primary">Our Core Digital Marketing Services</h2>
                        <p className="mt-4 text-lg text-gray-600">Everything you need to dominate the digital landscape.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-fuchsia-700 flex flex-col">
                                <div className="mb-4">{service.icon}</div>
                                <h3 className="text-2xl font-bold text-primary mb-2">{service.title}</h3>
                                <p className="text-gray-600 flex-grow">{service.description}</p>
                                {service.link && (
                                    <Link to={service.link} className="mt-4 font-semibold text-secondary hover:text-fuchsia-700 transition-colors self-start">
                                        Learn More &rarr;
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-light py-20">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-primary">Why Choose KTech Digital Solutions?</h2>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <ul className="space-y-4">
                            {whyChooseUsPoints.map((point, index) => (
                                <li key={index} className="flex items-start text-lg">
                                    <svg className="flex-shrink-0 h-6 w-6 text-green-500 mr-3 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-gray-700">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="py-20">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-primary">Our Success Stories</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">A glimpse into the results we've delivered for clients across Tamil Nadu.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {portfolioProjects.map((project, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-all duration-300 border">
                                <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity" />
                                <div className="p-6 flex flex-col">
                                    <p className="text-sm font-semibold text-fuchsia-700 mb-2 tracking-wider">{project.category}</p>
                                    <h3 className="text-2xl font-bold text-primary mb-3">{project.title}</h3>
                                    <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                                    <div className="bg-green-100 text-green-800 font-bold py-2 px-4 rounded-full inline-block self-start mb-6 text-center">
                                        {project.result}
                                    </div>
                                    <a href={project.link} className="font-semibold text-secondary hover:text-fuchsia-700 transition-colors">
                                        View Case Study &rarr;
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Social Proof/Clients Section */}
            <section className="py-20">
                <div className="container mx-auto px-6 lg:px-8 mt-[-50px]">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-primary">Our Clients & Results</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            We’ve partnered with businesses across Tamil Nadu in industries like Retail, Education, Real Estate, Fashion, Beauty & Salon, and E-Commerce.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                        {clientLogos.map((logo, index) => (
                            <div key={index} className="flex justify-center">
                                <img src={logo} alt={`Client logo ${index + 1}`} className="max-h-16 opacity-60 hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;



