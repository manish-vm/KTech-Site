import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

const services = [
    { title: 'Logo Design & Visual Identity', description: 'Modern, memorable logos that reflect your brand’s values.' },
    { title: 'Brand Strategy & Positioning', description: 'Understanding your market, differentiators & audience.' },
    { title: 'Brand Guidelines', description: 'Defining colors, fonts, imagery, and tone of voice for consistency.' },
    { title: 'Corporate Identity', description: 'Business cards, letterheads, and stationery designs.' },
    { title: 'Packaging Design', description: 'Creative and impactful design for physical products.' },
    { title: 'Brand Messaging & Taglines', description: 'Crafting the words that define your brand and what you offer.' },
    { title: 'Brand Refresh & Rebranding', description: 'For businesses looking to modernize or pivot.' },
    { title: 'Digital Branding', description: 'Social media visuals, profile branding, and digital banners.' },
];

const whyChooseUsPoints = [
    { title: "Local Cultural Insight", description: "Deep understanding of the Tamil Nadu market helps in creating relevant brands." },
    { title: "Trusted & Reliable", description: "Backed by Krishnapillai Group of Companies — trust, integrity & quality." },
    { title: "Creative & Strategic", description: "Our team balances stunning aesthetics with clear business goals." },
    { title: "Collaborative Process", description: "You are involved in each step, from concept and draft to the final design." }
];

const processSteps = [
    { number: 1, title: 'Initial Consultation', description: 'We dive into your business, values, audience, and aspirations.' },
    { number: 2, title: 'Market Research', description: 'We analyze competitors and identify what works locally.' },
    { number: 3, title: 'Concept Development', description: 'We create logo sketches, moodboards, and visual directions.' },
    { number: 4, title: 'Design & Revisions', description: 'We present design drafts for your feedback and finalize the look.' },
    { number: 5, title: 'Brand Guidelines', description: 'We prepare a document to ensure future consistency.' },
    { number: 6, title: 'Implementation', description: 'We apply brand visuals across your digital and offline assets.' },
];

const BrandingPage: React.FC = () => {
    return (
        <div className="bg-white">
            <Helmet>
                <title>Branding Services in Chennai | KTech Digital Solutions</title>
                <meta name="description" content="KTech Digital Solutions offers branding services in Chennai. Build logos, brand identity, and brand strategy to stand out in Tamil Nadu’s competitive market." />
                <meta name="keywords" content="branding services Chennai, logo design Chennai, brand identity Chennai, brand strategy Chennai, creative branding Tamil Nadu" />

            </Helmet>
            <section className="bg-secondary text-white py-20" style={{ backgroundImage: "url('https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?cs=srgb&dl=pexels-kaboompics-6224.jpg&fm=jpg')", backgroundSize: 'cover', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(13, 71, 161, 0.7)' }}>
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Branding Agency in Tamil Nadu</h1>
                    <p className="text-lg text-gray-200">Brand Identity & Strategy in Chennai & Beyond</p>
                </div>
            </section>

            <section className="py-16 text-center">
                <div className="container mx-auto px-6 lg:px-8">
                    <p className="max-w-3xl mx-auto text-lg text-gray-700">
                        Want a brand that stands out and connects deeply with customers? KTech Digital Solutions (part of Krishnapillai Group of Companies) provides expert branding services in Tamil Nadu, helping businesses in Chennai, Coimbatore, Madurai, Trichy and across the region evoke trust, recognition, and loyalty through compelling brand identities and strategies.
                    </p>
                </div>
            </section>

            <section className="py-12 bg-light">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-primary">Our Branding Services</h2>
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
                        <h2 className="text-4xl font-extrabold text-primary">Why Choose KTech for Branding?</h2>
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
                        <h2 className="text-4xl font-extrabold text-primary">Our Branding Process</h2>
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
                    <h2 className="text-3xl font-bold mb-4">Want a brand that people remember & trust? 🚀</h2>
                    <Link to="/contact" className="inline-block bg-white text-fuchsia-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-colors duration-300">
                        Get a Free Branding Consultation & Quote
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default BrandingPage;
