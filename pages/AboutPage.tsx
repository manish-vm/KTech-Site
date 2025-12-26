
import React from 'react';
import { Helmet } from "react-helmet";

const whyChooseUsPoints = [
    "Backed by the legacy of the Krishnapillai Group of Companies",
    "Proven track record as a digital marketing agency in Chennai and Tamil Nadu",
    "Customized strategies for local, regional, and global businesses",
    "SEO-friendly and conversion-focused campaigns",
    "Serving clients across Chennai, Coimbatore, Madurai, Trichy, Salem, Tirunelveli, and beyond"
];

const AboutPage: React.FC = () => {
    return (
        <div className="bg-white">
            <Helmet>
                <title>About KTech Digital Solutions | A Krishnapillai Group Company</title>

                <meta
                    name="description"
                    content="KTech Digital Solutions, part of Krishnapillai Group, is a trusted digital marketing agency in Chennai offering SEO, PPC, SMM, branding & IT solutions across Tamil Nadu."
                />

                <meta name="keywords" content="about KTech Digital Solutions, Krishnapillai group company, digital marketing company Tamil Nadu, SEO agency Chennai, PPC company Chennai, social media agency Chennai" />

            </Helmet>
            {/* Hero Section */}
            <section className="bg-secondary text-white py-20" style={{ backgroundImage: "url('https://www.shutterstock.com/image-photo/contact-us-businessman-holding-cell-260nw-1860985426.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(15, 58, 123, 0.7)' }}>
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-2">About Us – KTech Digital Solutions</h1>
                    <p className="text-lg text-gray-200">A Proud Division of the Krishnapillai Group of Companies</p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20">
                <div className="container mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img src="https://t4.ftcdn.net/jpg/02/52/76/09/360_F_252760983_ZTCURKreID1WJkC7uiX6olt7hH0Q7v8X.jpg" alt="KTech Team" className="rounded-lg shadow-xl w-full" />
                    </div>
                    <div className="text-lg text-gray-700">
                        <h2 className="text-3xl font-bold text-primary mb-4">Who We Are</h2>
                        <p className="mb-4">
                            At KTech Digital Solutions, a proud division of the Krishnapillai Group of Companies, we believe every business in Tamil Nadu – from Chennai to Coimbatore, Madurai to Trichy – deserves a strong online presence. As one of the leading digital marketing companies in Tamil Nadu, we help startups, small businesses, and enterprises grow with proven online marketing strategies.
                        </p>
                        <p>
                            KTech Digital Solutions, operating under the trusted Krishnapillai Group of Companies, is a result-driven digital marketing agency in Chennai offering a wide range of services including SEO, Social Media Marketing, PPC advertising, and Website Development. Our parent group’s legacy of excellence and reliability inspires us to deliver innovative, data-driven, and customer-focused digital solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-20 mt-[-50px] mb-[20px]">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 text-center">
                        <div className="p-8 border rounded-lg shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                            <h3 className="text-3xl font-bold text-primary mb-4">Our Mission</h3>
                            <p className="text-gray-700">To empower businesses across Tamil Nadu with affordable and effective digital marketing services, helping them reach the right audience and maximize ROI.</p>
                        </div>
                        <div className="p-8 border rounded-lg shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                            <h3 className="text-3xl font-bold text-primary mb-4 ">Our Vision</h3>
                            <p className="text-gray-700">To become the most trusted SEO and digital marketing company in Tamil Nadu, backed by the strength and values of the Krishnapillai Group of Companies.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-light py-20">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-primary">Why Choose Us?</h2>
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

            {/* Closing Note */}
            <section className="py-20 text-center">
                <div className="container mx-auto px-6 lg:px-8">
                    <p className="text-xl text-gray-800 max-w-3xl mx-auto">
                        Whether you are a small business in Chennai, a retail shop in Madurai, or an eCommerce brand in Coimbatore, KTech Digital Solutions – powered by the Krishnapillai Group of Companies – is here to scale your business online. Partner with us today and discover why we are recognized as one of the best digital marketing companies in Tamil Nadu.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;