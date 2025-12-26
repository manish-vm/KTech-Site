import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

const offerings = [
    { title: 'Search Ads Campaigns', description: 'Google Search PPC for keywords relevant to your business.' },
    { title: 'Display & Banner Ads', description: 'Visual ads on relevant websites & placements to build brand awareness.' },
    { title: 'YouTube Video Ads', description: 'Capture audiences through engaging video campaigns.' },
    { title: 'Remarketing / Retargeting', description: 'Bring back visitors who didn’t convert initially.' },
    { title: 'Shopping Ads (eCommerce)', description: 'Showcase your products directly in Google Shopping.' },
    { title: 'Geo-Targeted Ads', description: 'Focus ads in specific areas across Tamil Nadu — Chennai, Madurai, Trichy etc.' },
    { title: 'Ad Copywriting & Creative Design', description: 'Engaging ad text and visuals for better CTR.' },
    { title: 'Budget Optimization & Bid Management', description: 'Maximize results within your ad budget.' },
];

const whyPpcMatters = [
    "Immediate presence on top of Google SERPs — ideal for quick results.",
    "Pay only when someone clicks — ensures budget efficiency.",
    "Targeted ads let you reach users in specific locations like Chennai, Salem, Coimbatore etc.",
    "Useful for seasonal events, product launches, or when SEO results are ramping up.",
    "Complements SEO and social media strategy to maximize visibility."
];

const whyChooseUsPoints = [
    { title: "Local Market Knowledge", description: "Deep understanding of Tamil Nadu market & audience behaviour." },
    { title: "Transparent Reporting", description: "Know exactly where your money is going with clear, detailed reports." },
    { title: "Trusted Partner", description: "Backed by Krishnapillai Group — reliability, trust & consistency." },
    { title: "ROI Focused", description: "Experienced team optimizes to reduce Cost per Click (CPC) and improve ROI." }
];

const processSteps = [
    { number: 1, title: 'Consultation & Goal Setting', description: 'We identify your goals: leads, sales, or sign-ups.' },
    { number: 2, title: 'Keyword & Competitor Analysis', description: 'We find high-intent, relevant keywords for your audience.' },
    { number: 3, title: 'Ad Creation & Design', description: 'We write compelling headlines, descriptions, and creatives.' },
    { number: 4, title: 'Campaign Setup & Geo-targeting', description: 'We launch campaigns targeting specific cities like Chennai, Coimbatore, etc.' },
    { number: 5, title: 'Monitoring & Optimization', description: 'We constantly adjust bids and pause low-performing ads.' },
    { number: 6, title: 'Reporting & Scaling', description: 'You receive weekly/monthly reports, and we scale successful campaigns.' },
];

const PpcPage: React.FC = () => {
    return (
        <div className="bg-white">
            <Helmet>
                <title>PPC Company in Chennai | Google Ads Services - KTech Digital Solutions</title>

                <meta name="description"
                    content="Run high-converting Google Ads & PPC campaigns with KTech Digital Solutions, Chennai. Get targeted leads with expert PPC management across Tamil Nadu." />

                <meta name="keywords"
                    content="PPC services Chennai, Google Ads Chennai, pay per click Chennai, PPC management company Chennai, SEM services Chennai, search engine marketing Tamil Nadu" />
            </Helmet>
            <section className="bg-secondary text-white py-20" style={{ backgroundImage: "url('https://media.istockphoto.com/id/1464312029/photo/digital-online-marketing-commerce-sale-concept-promotion-of-products-or-services-through.jpg?s=612x612&w=0&k=20&c=8steJIQoLUfmZQw-URHyNKZYjRsasgbP9RHL29rwqI8=')", backgroundSize: 'cover', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(13, 71, 161, 0.7)' }}>
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-2">PPC Company in Tamil Nadu</h1>
                    <p className="text-lg text-gray-200">Google Ads & Paid Advertising Agency in Chennai & Coimbatore</p>
                </div>
            </section>

            <section className="py-16 text-center">
                <div className="container mx-auto px-6 lg:px-8">
                    <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-12">
                        Want instant leads & traffic? At KTech Digital Solutions (part of Krishnapillai Group of Companies), we offer expert PPC advertising services in Tamil Nadu, helping businesses in Chennai, Coimbatore, Madurai, Trichy, and nearby cities get predictable, high-quality leads and conversions through Google Ads, Display & YouTube campaigns.
                    </p>
                    <h2 className="text-3xl font-bold text-primary mb-6">Why PPC Matters for Your Business</h2>
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 text-left">
                        {whyPpcMatters.map((point, index) => (
                            <div key={index} className="flex items-start">
                                <svg className="flex-shrink-0 h-6 w-6 text-green-500 mr-3 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                <span className="text-gray-700">{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 bg-light">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-primary">Our PPC Services</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {offerings.map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-fuchsia-700 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                                <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-primary">Why Choose KTech for PPC?</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whyChooseUsPoints.map((point, index) => (
                            <div key={index} className="text-center p-6 bg-light rounded-lg shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                                <h3 className="font-bold text-xl text-primary mb-2">{point.title}</h3>
                                <p className="text-gray-600">{point.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-light">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-primary">Our PPC Campaign Process</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {processSteps.map((step) => (
                            <div key={step.number} className="text-center p-6 bg-white rounded-lg shadow-md flex flex-col items-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-fuchsia-700 text-center text-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-4">Ready to drive immediate traffic and high-quality leads?</h2>
                    <Link to="/contact" className="inline-block bg-white text-fuchsia-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-colors duration-300">
                        Get a Free PPC Audit & Quote
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default PpcPage;
