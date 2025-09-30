import React from 'react';
import { Link } from 'react-router-dom';

const services = [
    { title: 'Custom Application Development', description: 'Software built from scratch to match your business model.' },
    { title: 'Web App Development', description: 'Browser-based solutions for internal tools, dashboards, and portals.' },
    { title: 'Mobile App Backend', description: 'APIs, server logic, and integration for mobile and web.' },
    { title: 'CRM & ERP Solutions', description: 'Manage customers, inventory, sales, and employees in one system.' },
    { title: 'E-commerce Platform Development', description: 'Online stores with payment, UI/UX, and product catalogues.' },
    { title: 'UI/UX Design Services', description: 'User-friendly interfaces, intuitive navigation, and responsive design.' },
    { title: 'Data Reporting & Analytics', description: 'Dashboards, custom reports, and performance tracking.' },
    { title: 'Maintenance & Support', description: 'Regular updates, bug fixes, and feature enhancements.' },
];

const whyChooseUsPoints = [
    { title: "Local Business Acumen", description: "Strong expertise in the Tamil Nadu business environment and local tech requirements." },
    { title: "Trusted Quality", description: "Backed by Krishnapillai Group of Companies – ensuring trust, quality, and reliability." },
    { title: "Future-Proof Solutions", description: "We write clean code and build scalable architecture for long-term growth." },
    { title: "Transparent & Affordable", description: "A clear process and cost-effective pricing for SMEs and startups." }
];

const processSteps = [
    { number: 1, title: 'Requirement Gathering', description: 'We dive deep to understand your workflows and needs.' },
    { number: 2, title: 'Planning & Design', description: 'We create UI/UX wireframes and decide on the tech stack.' },
    { number: 3, title: 'Development', description: 'Our team codes the frontend, backend, and integrations.' },
    { number: 4, title: 'QA & Testing', description: 'We rigorously test for functionality, security, and performance.' },
    { number: 5, title: 'Deployment', description: 'We handle server setup, hosting, and optimization.' },
    { number: 6, title: 'Support & Maintenance', description: 'We offer ongoing support for scaling, bug fixes, and upgrades.' },
];

const SoftwareDevPage: React.FC = () => {
    return (
        <div className="bg-white">
            <section className="bg-secondary text-white py-20" style={{backgroundImage: "url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg')", backgroundSize: 'cover', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(13, 71, 161, 0.7)'}}>
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Best Software Development Company in <br></br>Tamil Nadu</h1>
                    <p className="text-lg text-gray-200">Custom Software & Web App Experts in Chennai</p>
                </div>
            </section>

            <section className="py-16 text-center">
                <div className="container mx-auto px-6 lg:px-8">
                    <p className="max-w-3xl mx-auto text-lg text-gray-700">
                       Looking for reliable software solutions that scale with your business? At KTech Digital Solutions (part of Krishnapillai Group of Companies), we deliver custom software, enterprise applications, CRM tools, and web/mobile apps with top-quality development standards. Serving clients across Chennai, Coimbatore, Madurai, Trichy, and all over Tamil Nadu, we build software tuned to your exact needs.
                    </p>
                </div>
            </section>
            
            <section className="py-12 bg-light">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-primary">Our Software Development Services</h2>
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
                        <h2 className="text-4xl font-extrabold text-primary">Why Choose KTech for Software Development?</h2>
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
                        <h2 className="text-4xl font-extrabold text-primary">Our Software Development Process</h2>
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
                    <h2 className="text-3xl font-bold mb-4">Ready to build software that transforms your business? 🚀</h2>
                     <Link to="/contact" className="inline-block bg-white text-fuchsia-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-colors duration-300">
                        Get a Free Software Consultation & Quote
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default SoftwareDevPage;
