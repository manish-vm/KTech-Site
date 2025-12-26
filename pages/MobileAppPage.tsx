import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

const services = [
    { title: 'Android App Development', description: 'Native apps with a smooth and intuitive UI/UX.' },
    { title: 'iOS App Development', description: 'Tailored to Apple’s high standards for design and performance.' },
    { title: 'Cross-Platform Apps', description: 'Faster delivery with a single codebase using React Native or Flutter.' },
    { title: 'UI / UX Design', description: 'User-friendly interfaces and intuitive navigation flows.' },
    { title: 'Backend & API Integration', description: 'Secure data handling and server communication.' },
    { title: 'App Store & Play Store Deployment', description: 'We handle submission, guidelines, and updates.' },
    { title: 'Maintenance & Support', description: 'Ongoing bug fixes, updates, and performance enhancements.' },
    { title: 'App Optimization', description: 'Focus on speed, offline mode, caching, and push notifications.' },
];

const whyChooseUsPoints = [
    { title: "Local Market Focus", description: "We understand the Tamil Nadu market to build apps your users will love." },
    { title: "Trusted & Reliable", description: "Backed by the Krishnapillai Group’s infrastructure and reputation." },
    { title: "Transparent Process", description: "From design and development to deployment, you are always in the loop." },
    { title: "Performance-Driven", description: "We focus on great UI/UX, user satisfaction, and scalable performance." }
];

const processSteps = [
    { number: 1, title: 'Requirement Gathering', description: 'We define the app functionality and target audience.' },
    { number: 2, title: 'Planning & Wireframing', description: 'We map out the UI/UX flow and create design mockups.' },
    { number: 3, title: 'Designing App Screens', description: 'We craft the visual design and user flows.' },
    { number: 4, title: 'Development & Coding', description: 'Our team builds the frontend and backend of the app.' },
    { number: 5, title: 'Testing & QA', description: 'We check for device compatibility, bugs, and performance.' },
    { number: 6, title: 'Store Deployment', description: 'We handle the submission process for Android and iOS.' },
    { number: 7, title: 'Post-Launch Support', description: 'We provide updates, optimizations, and ongoing support.' },
];


const MobileAppPage: React.FC = () => {
    return (
        <div className="bg-white">
            <Helmet>
                <title>Mobile App Development Company in Chennai | KTech Digital Solutions</title>
                <meta name="description" content="Build powerful Android & iOS mobile apps with KTech Digital Solutions, Chennai. Expert mobile app developers in Tamil Nadu for business growth." />
                <meta name="keywords" content="mobile app development Chennai, iOS app development Chennai, Android app development Chennai, mobile app developers Tamil Nadu, app development company Chennai" />

            </Helmet>
            <section className="bg-secondary text-white py-20" style={{ backgroundImage: "url('https://t4.ftcdn.net/jpg/02/00/20/89/360_F_200208909_tvpqUno6arZycC8jWtduKEITDcqszvwj.jpg')", backgroundSize: 'cover', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(13, 71, 161, 0.7)' }}>
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Mobile App Development Company in Tamil Nadu</h1>
                    <p className="text-lg text-gray-200">Android & iOS App Experts in Chennai</p>
                </div>
            </section>

            <section className="py-16 text-center">
                <div className="container mx-auto px-6 lg:px-8">
                    <p className="max-w-3xl mx-auto text-lg text-gray-700">
                        Looking to build an app that users love? At KTech Digital Solutions (a part of Krishnapillai Group of Companies), we provide top-quality mobile app development services in Tamil Nadu, helping clients in Chennai, Coimbatore, Madurai, Trichy and across the state develop Android, iOS, and cross-platform apps that are fast, secure, and user-friendly.
                    </p>
                </div>
            </section>

            <section className="py-12 bg-light">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-primary">Our App Development Services</h2>
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
                        <h2 className="text-4xl font-extrabold text-primary">Why Choose KTech for Mobile Apps?</h2>
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
                        <h2 className="text-4xl font-extrabold text-primary">How We Develop Your App</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
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
                    <h2 className="text-3xl font-bold mb-4">Ready to bring your app idea to life? 🚀</h2>
                    <Link to="/contact" className="inline-block bg-white text-fuchsia-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-colors duration-300">
                        Get a Free App Consultation & Quote
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default MobileAppPage;
