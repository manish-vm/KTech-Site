import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

const whyWorkWithUs = [
    { title: 'Dynamic Environment', description: 'Be part of a creative team where your ideas matter and you can make a real impact.' },
    { title: 'Continuous Learning', description: 'Stay ahead in the industry by learning the latest digital marketing tools and technologies.' },
    { title: 'Diverse Projects', description: 'Work on real projects for clients across different domains, from e-commerce to software.' },
    { title: 'Growth Opportunities', description: 'We offer a transparent culture with clear growth paths and performance-based incentives.' },
];

const whatWeLookFor = [
    "Passion for digital marketing, design, or development.",
    "A strong willingness to learn and adapt in a fast-changing industry.",
    "Good communication skills, both verbal and written.",
    "A team player attitude with the ability to take individual initiative.",
    "Basic understanding of your chosen domain (e.g., SEO, analytics, design)."
];

const CareersPage: React.FC = () => {
    return (
        <div className="bg-white">
            <Helmet>
                <title>Careers at KTech Digital Solutions | Digital Marketing Jobs Chennai</title>
                <meta name="description" content="Join KTech Digital Solutions, a leading digital marketing company in Chennai. Explore SEO, SMM, PPC, design & development job opportunities in Tamil Nadu." />
                <meta name="keywords" content="digital marketing jobs Chennai, SEO jobs Chennai, PPC jobs Chennai, SMM jobs Chennai, web development careers Chennai, Tamil Nadu marketing careers" />

            </Helmet>
            <section className="bg-secondary text-white py-20" style={{ backgroundImage: "url('https://cmb.ac.lk/wp-content/uploads/Job-Fair-2016.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(3, 15, 33, 0.81)' }}>
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Join Our Team at KTech Digital Solutions</h1>
                    <p className="text-lg text-gray-200">Careers in Digital Marketing & Tech in Tamil Nadu</p>
                </div>
            </section>

            <section className="py-16 text-center">
                <div className="container mx-auto px-6 lg:px-8">
                    <p className="max-w-3xl mx-auto text-lg text-gray-700">
                        Are you passionate about digital marketing, creativity, and technology? KTech Digital Solutions (part of Krishnapillai Group of Companies) is growing, and we invite talented individuals from Chennai, Coimbatore, Madurai, Trichy, and all over Tamil Nadu to join our team. If you love making an impact through SEO, PPC, website development, content creation, or design, you’re in the right place.
                    </p>
                </div>
            </section>

            <section className="py-12 bg-light">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-primary">Why Work With Us?</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whyWorkWithUs.map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-accent hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                                <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-primary mb-6">What We Look for in You</h2>
                        <ul className="space-y-4">
                            {whatWeLookFor.map((point, index) => (
                                <li key={index} className="flex items-start text-lg">
                                    <svg className="flex-shrink-0 h-6 w-6 text-green-500 mr-3 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-gray-700">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <img src="https://amer247.com/_next/static/media/career.c2a007ca.svg" alt="KTech Team Collaboration" className="rounded-lg shadow-xl w-[400px] h-[400px]" />
                    </div>
                </div>
            </section>

            <section className="py-20 bg-light">
                <div className="container mx-auto px-6 lg:px-8 text-center max-w-4xl">
                    <h2 className="text-4xl font-extrabold text-primary mb-6">How to Apply</h2>
                    <div className="text-lg text-gray-700 space-y-4 text-left p-8 border rounded-lg bg-white">
                        <p>1. Send your resume/CV to <a href="mailto:careers@ktechdigi.com" className="font-bold text-accent hover:underline">careers@ktechdigi.com</a>.</p>
                        <p>2. Include a cover letter explaining which role you’re applying for, your experience, and why you want to join our team.</p>
                        <p>3. If relevant, please share your portfolio or samples of your work (e.g., blogs, websites, social media campaigns, designs).</p>
                        <p>4. We will review all applications and reach out to shortlisted candidates for an interview. Interviews may include practical tasks or assignments depending on the role.</p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-accent text-center text-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-4">🚀 Think you have what it takes to help brands succeed online?</h2>
                    <a href="mailto:careers@ktechdigi.com" className="inline-block bg-white text-accent font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-colors duration-300">
                        Apply Now
                    </a>
                </div>
            </section>
        </div>
    );
};

export default CareersPage;
