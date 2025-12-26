import React, { useState } from 'react';
import { Helmet } from "react-helmet";

const offerings = [
    { title: 'On-Page SEO', description: 'Meta tags, titles, headings, content optimization, site structure.' },
    { title: 'Off-Page SEO', description: 'Link building, outreach, backlinks from relevant domains.' },
    { title: 'Technical SEO', description: 'Site speed, mobile optimization, schema markup, crawl errors fixes.' },
    { title: 'Local SEO', description: 'Google My Business, “near me” searches, map listings for Tamil Nadu cities.' },
    { title: 'Global SEO', description: 'For brands expanding beyond local market.' },
    { title: 'Keyword Research & Analysis', description: 'Finding the right low-competition and high‐volume keywords.' },
    { title: 'Content Optimization', description: 'SEO friendly blogs, landing pages focused on your keywords.' },
    { title: 'SEO Audits', description: 'Full website audits with actionable recommendations.' },
];

const whyChooseUsPoints = [
    "Backed by Krishnapillai Group: trust, reliability and strong local understanding.",
    "Deep knowledge of Tamil Nadu market + urban centres like Chennai, Coimbatore etc.",
    "Transparent process: we report monthly, show rankings, explain work done.",
    "Ethical (white-hat) SEO techniques that give long-term stability.",
    "Cost-effective pricing for small to medium businesses.",
];

const processSteps = [
    { number: 1, title: 'Discovery & SEO Audit', description: 'Understand your current site & competition.' },
    { number: 2, title: 'Keyword & Market Research', description: 'Focus on what your customers are searching.' },
    { number: 3, title: 'On-Page Optimization', description: 'Content, tags, structure, speed etc.' },
    { number: 4, title: 'Off-Page & Local SEO', description: 'Build backlinks, manage Google My Business, citations.' },
    { number: 5, title: 'Monitoring & Reporting', description: 'Track traffic, ranking, adjust as needed.' },
    { number: 6, title: 'Continuous Optimization', description: 'SEO is ongoing; we refine to stay ahead.' },
];

const faqs = [
    { q: "How long before I see results with SEO?", a: "SEO is a long-term strategy. While some improvements can be seen in as little as 3 months, significant results typically take 6-12 months, depending on competition and your website's current state." },
    { q: "Is local SEO enough or do I need global search too?", a: "It depends on your business goals. If you serve a local clientele in Tamil Nadu, local SEO is paramount. If you sell products or services online to a wider audience, a global SEO strategy is necessary for expansion." },
    { q: "Will you help rank for “SEO services Chennai” and “SEO services Tamil Nadu”?", a: "Yes, our strategies are specifically designed to target relevant local and regional keywords like 'SEO services Chennai' to attract customers in your service areas." },
    { q: "Do you guarantee first page of Google?", a: "No reputable SEO company can guarantee a #1 ranking. Google's algorithm is complex and constantly changing. However, we guarantee to use proven, white-hat SEO strategies to give you the best possible chance of achieving high rankings and sustainable organic growth." },
];

const FaqItem: React.FC<{ q: string, a: string }> = ({ q, a }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left py-4 px-2 flex justify-between items-center text-lg font-semibold text-primary hover:bg-light">
                {q}
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
            </button>
            {isOpen && <div className="p-4 text-gray-700 bg-light">{a}</div>}
        </div>
    );
};


const SeoPage: React.FC = () => {
    return (
        <div className="bg-white">
            <Helmet>
                <title>SEO Services in Chennai | Best SEO Company - KTech Digital Solutions</title>

                <meta name="description"
                    content="Boost your rankings with expert SEO services in Chennai. KTech Digital Solutions offers keyword research, on-page SEO, link building & local SEO across Tamil Nadu." />

                <meta name="keywords"
                    content="SEO services Chennai, best SEO company Chennai, SEO agency Tamil Nadu, on-page SEO Chennai, link building services Chennai, local SEO Chennai, technical SEO Chennai" />
            </Helmet>
            <section className="bg-secondary text-white py-20" style={{ backgroundImage: "url('https://png.pngtree.com/background/20230617/original/pngtree-web-banner-and-business-graph-chart-mockup-featuring-a-3d-rendered-picture-image_3681684.jpg')", backgroundSize: 'cover', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(13, 71, 161, 0.7)' }}>
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Best SEO Company in Tamil Nadu</h1>
                    <p className="text-lg text-gray-200">Your SEO Agency in Chennai & Beyond</p>
                </div>
            </section>

            <section className="py-16 text-center">
                <div className="container mx-auto px-6 lg:px-8">
                    <p className="max-w-3xl mx-auto text-lg text-gray-700">
                        Are you searching for a reliable SEO company in Tamil Nadu that helps your business rank higher on Google? At KTech Digital Solutions (part of Krishnapillai Group of Companies), we specialize in delivering tailor-made SEO services for businesses in Chennai, Coimbatore, Madurai, Trichy, Salem and across Tamil Nadu. We understand how people search locally, and we build strategies that increase visibility, traffic, and conversions.
                    </p>
                </div>
            </section>

            <section className="py-12 bg-light">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-primary">What We Offer</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {offerings.map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-fuchsia-700 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
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
                        <h2 className="text-3xl font-bold text-primary mb-6">Why Choose KTech for SEO?</h2>
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
                    <div>
                        <img src="https://www.pagetraffic.in/wp-content/uploads/2023/03/affordable-seo-services.png" alt="SEO Growth" className="rounded-lg shadow-xl w-full" />
                    </div>
                </div>
            </section>

            <section className="py-20 bg-light">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-primary">Our SEO Process</h2>
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

            <section className="py-20">
                <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-primary">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-2">
                        {faqs.map((faq, index) => <FaqItem key={index} q={faq.q} a={faq.a} />)}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-fuchsia-700 text-center text-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-4">Ready to boost your online presence with the best SEO in Tamil Nadu?</h2>
                    <p className="text-lg">👉 Contact us today for a free SEO audit & quote.</p>
                </div>
            </section>

        </div>
    );
};

export default SeoPage;