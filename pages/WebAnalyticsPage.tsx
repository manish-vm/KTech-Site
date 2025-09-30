import React from 'react';
import { Link } from 'react-router-dom';

const services = [
    { title: 'Analytics Tool Setup', description: 'Configuration of Google Analytics (GA4), Tag Manager, etc.' },
    { title: 'Dashboard & Custom Reports', description: 'Tracking key metrics like traffic sources and page performance.' },
    { title: 'Behavior Flow Analysis', description: 'Understanding how users navigate your site using heatmaps and flow reports.' },
    { title: 'Conversion Funnel Tracking', description: 'Setup of goals, events, and e-commerce transaction tracking.' },
    { title: 'A/B Testing Implementation', description: 'Suggestions and setup for improving site conversion rates.' },
    { title: 'Analytics Audits', description: 'Fixing mis-tracking and data gaps to ensure accurate metrics.' },
    { title: 'CRM & Ads Integration', description: 'Getting a unified view of the complete customer journey.' },
    { title: 'Actionable Insights Reporting', description: 'Monthly or periodic reports that drive business decisions.' },
];

const whyChooseUsPoints = [
    { title: "Local Market Experience", description: "Strong understanding of user behavior in cities like Chennai, Coimbatore, and Madurai." },
    { title: "Trusted & Professional", description: "Backed by Krishnapillai Group’s commitment to reliability and quality." },
    { title: "Transparent Process", description: "You always know what we’re tracking and reporting on your behalf." },
    { title: "Focus on Actionable Insights", description: "We deliver data that helps you make smarter decisions, not just numbers." }
];

const processSteps = [
    { number: 1, title: 'Initial Setup & Goals', description: 'We identify what you want to track and measure.' },
    { number: 2, title: 'Tool Configuration', description: 'We implement GA4, Tag Manager, and other tools.' },
    { number: 3, title: 'Goal & Funnel Definition', description: 'We define what a conversion means for your business.' },
    { number: 4, title: 'Dashboard Creation', description: 'We build custom dashboards and reporting templates.' },
    { number: 5, title: 'Continuous Monitoring', description: 'We monitor for anomalies and track performance.' },
    { number: 6, title: 'Insight Delivery', description: 'We provide actionable insights and optimization suggestions.' },
];

const WebAnalyticsPage: React.FC = () => {
    return (
        <div className="bg-white">
            <section className="bg-secondary text-white py-20" style={{backgroundImage: "url('https://media.istockphoto.com/id/1867035079/photo/analytics-and-data-management-systems-business-analytics-and-data-management-systems-to-make.jpg?s=612x612&w=0&k=20&c=tFcJnBIWlkPhIumrPtkSJwFRNDMtdVfJ1CYbfUlx5fE=')", backgroundSize: 'cover', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(13, 71, 161, 0.7)'}}>
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Web Analytics Company in Tamil Nadu</h1>
                    <p className="text-lg text-gray-200">Website Analytics Services in Chennai & Beyond</p>
                </div>
            </section>

            <section className="py-16 text-center">
                <div className="container mx-auto px-6 lg:px-8">
                    <p className="max-w-3xl mx-auto text-lg text-gray-700">
                        Want to know exactly how visitors behave on your website? At KTech Digital Solutions (part of Krishnapillai Group of Companies), we provide expert web analytics services in Tamil Nadu, helping businesses in Chennai, Coimbatore, Madurai, Trichy and all over the state make data-driven decisions to increase engagement, conversions, and revenue.
                    </p>
                </div>
            </section>
            
            <section className="py-12 bg-light">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-primary">Our Web Analytics Services</h2>
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
                        <h2 className="text-4xl font-extrabold text-primary">Why Choose KTech for Web Analytics?</h2>
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
                        <h2 className="text-4xl font-extrabold text-primary">Our Web Analytics Process</h2>
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
                    <h2 className="text-3xl font-bold mb-4">Want to unlock the power of your website data? 🚀</h2>
                     <Link to="/contact" className="inline-block bg-white text-fuchsia-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-colors duration-300">
                        Get a Free Analytics Audit & Quote
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default WebAnalyticsPage;
