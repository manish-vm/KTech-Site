import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

const services = [
    { title: 'YouTube Marketing', description: 'Channel setup, video SEO, video ads, and audience growth.' },
    { title: 'Video Production & Editing', description: 'Professional filming, post-production, and motion graphics.' },
    { title: 'Video Promotion', description: 'Sharing across social media, YouTube, and websites.' },
    { title: 'Video Optimization', description: 'Optimizing titles, thumbnails, tags, and descriptions for search.' },
    { title: 'Video Analytics', description: 'Measuring viewer behavior, traffic sources, and retention.' },
    { title: 'Live Video & Webinars', description: 'Engaging your audience in real-time.' },
    { title: 'Explainer & Demo Videos', description: 'Clearly showcasing your products and services.' },
    { title: 'Testimonial Videos', description: 'Building trust with authentic customer stories.' },
];

const whyChooseUsPoints = [
    { title: "Local Audience Understanding", description: "We know the Tamil Nadu market and what resonates with viewers in Chennai, Coimbatore, etc." },
    { title: "Trusted & Credible", description: "Backed by the Krishnapillai Group of Companies, ensuring reliability and quality." },
    { title: "Creative Storytelling", description: "We combine creative ideas with high production values for impactful videos." },
    { title: "Focus on Measurable Outcomes", description: "We track views, engagement, leads, and conversions to ensure ROI." }
];

const processSteps = [
    { number: 1, title: 'Goal Setting & Strategy', description: 'We understand your message and target audience.' },
    { number: 2, title: 'Concept & Scripting', description: 'We develop the creative concept and align it with your brand voice.' },
    { number: 3, title: 'Production', description: 'Our team handles the shooting, animation, and recording.' },
    { number: 4, title: 'Post-Production', description: 'We manage editing, sound design, and motion graphics.' },
    { number: 5, title: 'Optimization & SEO', description: 'We optimize titles, thumbnails, and tags for visibility.' },
    { number: 6, title: 'Publishing & Promotion', description: 'We distribute your video across all relevant platforms.' },
];

const VideoMarketingPage: React.FC = () => {
    return (
        <div className="bg-white">
            <Helmet>
                <title>Video Marketing Services in Chennai | KTech Digital Solutions</title>
                <meta name="description" content="Engage customers with video marketing in Chennai. KTech Digital Solutions offers promotional videos, explainer videos & YouTube ads across Tamil Nadu." />
                <meta name="keywords" content="video marketing Chennai, video ads Chennai, YouTube marketing Chennai, explainer video Chennai, corporate video Tamil Nadu" />

            </Helmet>
            <section className="bg-secondary text-white py-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmlkZW8lMjBlZGl0aW5nfGVufDB8fDB8fHww')", backgroundSize: 'cover', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(13, 71, 161, 0.7)' }}>
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Video Marketing Agency in Tamil Nadu</h1>
                    <p className="text-lg text-gray-200">Video Content & YouTube Marketing in Chennai & Beyond</p>
                </div>
            </section>

            <section className="py-16 text-center">
                <div className="container mx-auto px-6 lg:px-8">
                    <p className="max-w-3xl mx-auto text-lg text-gray-700">
                        Want videos that attract, engage, and convert? At KTech Digital Solutions (a part of Krishnapillai Group of Companies), we deliver impactful video marketing services in Tamil Nadu, helping brands across Chennai, Coimbatore, Madurai, Trichy and across the state tell their story, build trust, and grow conversions with creative video content.
                    </p>
                </div>
            </section>

            <section className="py-12 bg-light">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-primary">Our Video Marketing Services</h2>
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
                        <h2 className="text-4xl font-extrabold text-primary">Why Choose KTech for Video Marketing?</h2>
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
                        <h2 className="text-4xl font-extrabold text-primary">Our Video Marketing Process</h2>
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
                    <h2 className="text-3xl font-bold mb-4">Ready to make your brand unforgettable with video content? 🎥</h2>
                    <Link to="/contact" className="inline-block bg-white text-fuchsia-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-colors duration-300">
                        Get a Free Video Marketing Quote
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default VideoMarketingPage;
