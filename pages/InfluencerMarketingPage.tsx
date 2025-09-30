import React from 'react';
import { Link } from 'react-router-dom';

const benefits = [
    "Build trust by using real people who resonate with your audience.",
    "Amplify your message quickly across social media platforms.",
    "Reach niche audiences via micro-influencers who have more engaged followers.",
    "Mix paid and barter collaborations for optimal budget use.",
    "Boost brand awareness, product launches, events, and promotions."
];

const platforms = [
    { name: 'Facebook', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/facebook.svg' },
    { name: 'Instagram', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/instagram.svg' },
    { name: 'YouTube', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/youtube.svg' },
    { name: 'LinkedIn', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/linkedin.svg' },
    { name: 'X (Twitter)', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/x.svg' },
    { name: 'Reels & Shorts', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/tiktok.svg' },
];

const whyChooseUsPoints = [
    { title: "Local Connections", description: "Deep connections with influencers in Tamil Nadu cities — local reach + relevance." },
    { title: "Transparent Collaborations", description: "You know follower counts, engagement, and deliverables upfront." },
    { title: "Creative Strategy", description: "We align content with your brand values through creative briefs." },
    { title: "Trusted Partner", description: "Backed by Krishnapillai Group — trust, reliability, and strong local understanding." }
];

const processSteps = [
    { number: 1, title: 'Goal Setting & Budget', description: 'Define goals: awareness, leads, or sales?' },
    { number: 2, title: 'Influencer Research', description: 'Find relevant voices for your audience in Tamil Nadu.' },
    { number: 3, title: 'Strategy & Briefing', description: 'Set deliverables, timeline, and content themes.' },
    { number: 4, title: 'Content Creation', description: 'Influencer creates content approved by you.' },
    { number: 5, title: 'Launch & Monitoring', description: 'Track reach, engagement, and conversions.' },
    { number: 6, title: 'Reporting & Analysis', description: 'Receive a detailed report with learnings and adjustments.' },
];

const InfluencerMarketingPage: React.FC = () => {
    return (
        <div className="bg-white">
            <section className="bg-secondary text-white py-20" style={{backgroundImage: "url('https://codecalibre.com/wp-content/uploads/2025/01/Influencer-marketing.jpeg')", backgroundSize: 'cover', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(13, 71, 161, 0.7)'}}>
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Influencer Marketing Agency in Tamil Nadu & Chennai</h1>
                    <p className="text-lg text-gray-200">Partner with Local & Micro-Influencers</p>
                </div>
            </section>

            <section className="py-16 text-center">
                <div className="container mx-auto px-6 lg:px-8">
                     <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-12">
                        Want to amplify your brand with trusted voices? At KTech Digital Solutions (part of Krishnapillai Group of Companies), we connect your brand with authentic influencers across Chennai, Coimbatore, Madurai, Trichy and all of Tamil Nadu for collaborations that drive engagement, visibility, and conversions.
                    </p>
                    <h2 className="text-3xl font-bold text-primary mb-6">What Influencer Marketing Can Do for You</h2>
                    <ul className="max-w-3xl mx-auto space-y-3 text-left">
                        {benefits.map((benefit, index) => (
                             <li key={index} className="flex items-start">
                                <svg className="flex-shrink-0 h-6 w-6 text-green-500 mr-3 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span className="text-gray-700">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            
            <section className="py-20 bg-light">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                     <h2 className="text-4xl font-extrabold text-primary mb-12">Platforms We Work With</h2>
                     <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                        {platforms.map(platform => (
                            <div key={platform.name} className="flex flex-col items-center group hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                                <img src={platform.logo} alt={platform.name} className="h-12 w-12 md:h-16 md:w-16 grayscale group-hover:grayscale-0 transition-all duration-300"/>
                                <span className="mt-2 text-sm text-gray-600 font-medium">{platform.name}</span>
                            </div>
                        ))}
                     </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-primary">Why Choose KTech for Influencer Marketing?</h2>
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
                        <h2 className="text-4xl font-extrabold text-primary">Our Influencer Campaign Process</h2>
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
                    <h2 className="text-3xl font-bold mb-4">Ready to grow your brand through real stories and authentic voices?</h2>
                     <Link to="/contact" className="inline-block bg-white text-fuchsia-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-colors duration-300">
                        Get a Free Campaign Quote
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default InfluencerMarketingPage;
