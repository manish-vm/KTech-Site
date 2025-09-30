
import React from 'react';
import { Link } from 'react-router-dom';

const contentTypes = [
    { icon: '📰', title: 'Blog & Article Writing', description: 'SEO friendly content that ranks and educates your audience.' },
    { icon: '📄', title: 'Website Copy & Landing Pages', description: 'Clear, persuasive copy aimed at conversions.' },
    { icon: '🛒', title: 'Product Descriptions & E-Commerce Content', description: 'To help your products stand out.' },
    { icon: '📱', title: 'Social Media Writing', description: 'Engaging posts, captions, reels, and ads.' },
    { icon: '🔗', title: 'Guest Posts & Backlink Content', description: 'To build authority and boost SEO.' },
    { icon: '📧', title: 'Newsletters & Email Copy', description: 'To nurture leads and retain customers.' },
];

const processSteps = [
    { step: 1, title: 'Discussion & Goals', description: 'We dive deep into your brand, audience, and content goals.' },
    { step: 2, title: 'Keyword/Topic Research', description: 'We find what your audience in Tamil Nadu is searching for.' },
    { step: 3, title: 'Content Plan & Calendar', description: 'We schedule topics and get your approval on outlines.' },
    { step: 4, title: 'Writing & Creation', description: 'Our expert writers craft high-quality, original content.' },
    { step: 5, title: 'Review & SEO Optimization', description: 'We review, edit, and optimize content for search engines.' },
];

const whyChooseUsPoints = [
    "Backed by the Krishnapillai Group – trusted & reliable service.",
    "Deep understanding of Tamil Nadu market: Chennai, Coimbatore, Madurai, etc.",
    "SEO-friendly copy – keywords inserted naturally, focused on readability & engagement.",
    "Quality + affordability – high standard copy without high agency costs.",
];

const clientLogos = [
  'https://via.placeholder.com/150x60/cccccc/ffffff?text=Client+A',
  'https://via.placeholder.com/150x60/cccccc/ffffff?text=Client+B',
  'https://via.placeholder.com/150x60/cccccc/ffffff?text=Client+C',
  'https://via.placeholder.com/150x60/cccccc/ffffff?text=Client+D',
];

const ContentPage: React.FC = () => {
    return (
        <div className="bg-white">
            <section className="bg-secondary text-white py-20" style={{backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661775756810-82dbd209fc95?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d3JpdGluZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(15, 58, 123, 0.7)'}}>
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Content Writing Agency in Tamil Nadu & Chennai</h1>
                    <p className="text-lg text-gray-200">SEO Copywriting & Website Copy Experts</p>
                </div>
            </section>
            
            <section className="py-16 text-center">
                <div className="container mx-auto px-6 lg:px-8">
                     <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-8">
                        Do you need content that connects, converts, and ranks? At KTech Digital Solutions (a part of Krishnapillai Group of Companies), we offer premium content writing services in Tamil Nadu and Chennai, crafting compelling copy for blogs, websites, and social media that engages your audience and boosts your search rankings.
                    </p>
                    <h2 className="text-3xl font-bold text-primary mb-4">What is Content Writing & Why It Matters?</h2>
                    <p className="max-w-3xl mx-auto text-gray-700">
                        Content writing is the backbone of all online marketing. It involves producing clear, valuable, and original content—blog posts, product descriptions, website copy, and more. Without powerful content, even the best designs or SEO strategies won’t make an impact. High quality content helps you gain user trust, improve dwell time, reduce bounce rate, and lets Google understand that your site is valuable.
                    </p>
                </div>
            </section>

             <section className="py-12 bg-light">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-primary">Types of Content We Provide</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                        {contentTypes.map((item, index) => (
                             <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-fuchsia-700 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                                <div className="text-4xl mb-4">{item.icon}</div>
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
                         <h2 className="text-4xl font-extrabold text-primary">Why Choose KTech for Content Writing?</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whyChooseUsPoints.map((point, index) => (
                            <div key={index} className="text-center p-6 bg-light rounded-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                                 <svg className="w-12 h-12 text-fuchsia-700 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                 <p className="font-semibold text-primary">{point}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="py-20 bg-light">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-primary">Our Process – How We Work</h2>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0">
                        {processSteps.map((step, index) => (
                            <React.Fragment key={step.step}>
                                <div className="flex flex-col items-center p-4 text-center w-60">
                                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-3">{step.step}</div>
                                    <h3 className="font-bold text-primary mb-1">{step.title}</h3>
                                    <p className="text-sm text-gray-600">{step.description}</p>
                                </div>
                                {index < processSteps.length - 1 && <div className="hidden md:block w-16 h-1 bg-gray-300"></div>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="py-20">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-primary mb-8">Trusted by Brands Across Tamil Nadu</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8">We have worked with businesses across industries in Tamil Nadu including Retail, E-commerce, Real Estate, Education, and more.</p>
                    <div className="flex flex-wrap justify-center items-center gap-8">
                        {clientLogos.map((logo, index) => (
                            <img key={index} src={logo} alt={`Client logo ${index + 1}`} className="max-h-12 opacity-60 hover:opacity-100 transition-opacity duration-300" />
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="py-20 bg-fuchsia-700 text-center text-white">
                 <div className="container mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-4">Ready to elevate your brand with compelling content? ✅</h2>
                    <p className="text-lg mb-6">Let’s discuss your content needs.</p>
                     <Link to="/contact" className="inline-block bg-white text-fuchsia-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-colors duration-300">
                        Get a Free Content Audit & Quote
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ContentPage;