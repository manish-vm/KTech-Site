import React from 'react';
import { Link } from 'react-router-dom';

const features = [
    { title: 'Shared Hosting', description: 'Affordable solution for startups & small websites.' },
    { title: 'VPS / Managed Hosting', description: 'For growing businesses needing more resources.' },
    { title: 'Cloud Hosting', description: 'Scalable infrastructure to handle traffic spikes.' },
    { title: 'SSL Certificates & HTTPS', description: 'Security and trust for every visitor.' },
    { title: 'Daily Backups & Recovery', description: 'Never lose your important website content.' },
    { title: '99.9% Uptime Guarantee', description: 'Reliable service so your site stays live and accessible.' },
    { title: 'Fast SSD Storage', description: 'Ensures fast load times and a better user experience.' },
    { title: 'Expert Technical Support', description: 'Support for server issues, domain setup, and migration.' },
];

const whyChooseUsPoints = [
    { title: "Local Expertise", description: "We understand the hosting needs for businesses in Chennai, Coimbatore, etc." },
    { title: "Strong Reliability", description: "Backed by Krishnapillai Group’s robust infrastructure." },
    { title: "Transparent Pricing", description: "Clear, affordable hosting plans with no hidden costs." },
    { title: "Security First", description: "We implement secure systems, fast servers, and regular updates." }
];

const WebHostingPage: React.FC = () => {
    return (
        <div className="bg-white">
            <section className="bg-secondary text-white py-20" style={{backgroundImage: "url('https://www.shutterstock.com/image-vector/web-hosting-banner-icons-software-260nw-2019181394.jpg')", backgroundSize: 'cover', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(13, 51, 109, 0.76)'}}>
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Web Hosting Company in Tamil Nadu</h1>
                    <p className="text-lg text-gray-200">Reliable & Secure Hosting in Chennai & Beyond</p>
                </div>
            </section>

            <section className="py-16 text-center">
                <div className="container mx-auto px-6 lg:px-8">
                    <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-12">
                       Need fast, secure, and reliable hosting for your website? KTech Digital Solutions (part of the Krishnapillai Group of Companies) offers premium web hosting services in Tamil Nadu, serving businesses in Chennai, Coimbatore, Madurai, Trichy, and across the state. Get blazing-fast speed, robust security, and 99.9% uptime for your website and apps.
                    </p>
                     <h2 className="text-3xl font-bold text-primary mb-6">Why Reliable Hosting Matters</h2>
                    <p className="max-w-3xl mx-auto text-gray-700">
                        A slow or unreliable host can cost you traffic, sales, and user trust. Good hosting improves website loading speed, boosts your SEO rankings, and protects customer data, building essential credibility for your brand.
                    </p>
                </div>
            </section>
            
            <section className="py-12 bg-light">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-primary">Our Web Hosting Features</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((item, index) => (
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
                        <h2 className="text-4xl font-extrabold text-primary">Why Choose KTech for Web Hosting?</h2>
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
            
            <section className="py-20 bg-fuchsia-700 text-center text-white">
                 <div className="container mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-4">Want hosting that won’t let your website down? 🚀</h2>
                     <Link to="/contact" className="inline-block bg-white text-fuchsia-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-colors duration-300">
                        Get a Free Hosting Audit & Quote
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default WebHostingPage;
