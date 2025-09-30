import React from 'react';
import { Link } from 'react-router-dom';

const services = [
    { title: 'Custom Business Websites', description: 'Designed to reflect your unique brand and goals.' },
    { title: 'Ecommerce Websites', description: 'Shops with payment integrations, carts, and product pages.' },
    { title: 'CMS-Based Sites (WordPress)', description: 'Easy for you to update content without code.' },
    { title: 'Responsive & Mobile-First Design', description: 'Works perfectly across phones, tablets, and desktops.' },
    { title: 'Website Redesign & UX/UI', description: 'Modernize old sites for better performance and usability.' },
    { title: 'Speed Optimization & Security', description: 'Fast load times, secure code, and SSL implementation.' },
    { title: 'Landing Page Design', description: 'High-converting pages for ad campaigns and promotions.' },
    { title: 'Web App Development', description: 'Custom functionality, tools, and dashboards for your business.' },
];

const whyChooseUsPoints = [
    { title: "Local Market Insight", description: "We understand the needs of businesses across Chennai, Coimbatore, and Madurai." },
    { title: "Transparent Process", description: "Clear pricing, well-defined timelines, and constant communication." },
    { title: "Trusted Foundation", description: "Backed by the Krishnapillai Group of Companies, ensuring credibility and quality." },
    { title: "Performance Focused", description: "We build sites with speed, mobile-friendliness, and SEO integrated from the start." }
];

const processSteps = [
    { number: 1, title: 'Discovery & Requirements', description: 'We learn about your needs and audience.' },
    { number: 2, title: 'Planning & Wireframing', description: 'We map out the structure, layout, and user experience.' },
    { number: 3, title: 'Design & Prototyping', description: 'We create the visual design and branding.' },
    { number: 4, title: 'Development & Coding', description: 'Our team builds the front-end and back-end.' },
    { number: 5, title: 'Content & SEO Setup', description: 'We integrate content and optimize for search.' },
    { number: 6, title: 'Testing & QA', description: 'We ensure functionality, speed, and security.' },
    { number: 7, title: 'Launch & Deployment', description: 'Your new website goes live on a secure server.' },
    { number: 8, title: 'Support & Maintenance', description: 'We provide ongoing updates and bug fixes.' },
];


const WebDevPage: React.FC = () => {
    return (
        <div className="bg-white">
            <section className="bg-secondary text-white py-20" style={{backgroundImage: "url('https://t4.ftcdn.net/jpg/02/83/46/33/360_F_283463385_mfnrx6RPU3BqObhVuVjYZjeZ5pegE7xq.jpg')", backgroundSize: 'cover', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(13, 71, 161, 0.7)'}}>
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Website Development Company in Tamil Nadu</h1>
                    <p className="text-lg text-gray-200">Web Design & Development in Chennai & Beyond</p>
                </div>
            </section>

            <section className="py-16 text-center">
                <div className="container mx-auto px-6 lg:px-8">
                    <p className="max-w-3xl mx-auto text-lg text-gray-700">
                        Looking for a mobile-friendly, high-performance website? At KTech Digital Solutions (a part of Krishnapillai Group of Companies), we build secure, SEO-optimized websites for businesses across Chennai, Coimbatore, Madurai, Trichy, and the whole of Tamil Nadu. Whether you need a simple business site, ecommerce store, or a custom web app, we’ve got you covered.
                    </p>
                </div>
            </section>
            
            <section className="py-12 bg-light">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-primary">Our Web Development Services</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((item, index) => (
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
                        <h2 className="text-4xl font-extrabold text-primary">Why Choose KTech for Web Development?</h2>
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
                        <h2 className="text-4xl font-extrabold text-primary">How We Build Your Website</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    <h2 className="text-3xl font-bold mb-4">Ready for a website that looks amazing and works even better? 🚀</h2>
                     <Link to="/contact" className="inline-block bg-white text-fuchsia-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-colors duration-300">
                        Get a Free Consultation & Quote
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default WebDevPage;
