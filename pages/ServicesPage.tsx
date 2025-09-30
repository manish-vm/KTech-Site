import React from 'react';
import { Link } from 'react-router-dom';

const services = [
    { 
        icon: '🔍', 
        title: 'Search Engine Optimization (SEO)', 
        description: 'Improve your Google rankings, organic traffic, and visibility with both local SEO (Chennai) and statewide Tamil Nadu focus.', 
        link: '/services/seo' 
    },
    { 
        icon: '👍', 
        title: 'Social Media Marketing (SMM)', 
        description: 'Engage your audience on Instagram, Facebook, LinkedIn, YouTube with creative content and paid campaigns.', 
        link: '/services/social-media-marketing' 
    },
    { 
        icon: '✍️', 
        title: 'Content Writing Services', 
        description: 'Blogs, website copy, product descriptions, video scripts crafted with SEO in mind to attract and convert.', 
        link: '/services/content-writing' 
    },
    { 
        icon: '🎯', 
        title: 'PPC & Google Ads', 
        description: 'Get faster results through targeted ads, remarketing, and display campaigns.', 
        link: '/services/ppc-advertising' 
    },
    { 
        icon: '💻', 
        title: 'Website Design & Development', 
        description: 'Mobile-responsive, speedy, SEO-friendly websites that look great and convert well.', 
        link: '/services/website-development' 
    },
    {
        icon: '📱',
        title: 'Mobile App Development',
        description: 'Custom Android & iOS apps to scale operations and improve user experience.',
        link: '/services/mobile-app-development'
    },
    { 
        icon: '✨', 
        title: 'Branding & Identity', 
        description: 'Logo design, brand strategy, guidelines to give your business a memorable presence.', 
        link: '/services/branding' 
    },
    { 
        icon: '🎬', 
        title: 'Video Marketing', 
        description: 'Produce engaging video content and promote it across platforms for maximum impact.', 
        link: '/services/video-marketing'
    },
    {
        icon: '🤝',
        title: 'Influencer Marketing',
        description: 'Partner with local influencers to expand reach and build trust.',
        link: '/services/influencer-marketing'
    },
    {
        icon: '☁️',
        title: 'Web Hosting',
        description: 'Reliable, secure, and fast hosting solutions for your website and applications.',
        link: '/services/web-hosting'
    },
    { 
        icon: '📊', 
        title: 'Web Analytics & Performance', 
        description: 'Use analytics tools to monitor traffic, user behavior, and optimize campaigns.', 
        link: '/services/web-analytics' 
    },
    {
        icon: '🛠️',
        title: 'Software Development',
        description: 'Custom software, CRM, and enterprise applications to automate and scale your business.',
        link: '/services/software-development'
    }
];

const ServicesPage: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-primary text-white py-20" style={{backgroundImage: "url('https://t4.ftcdn.net/jpg/05/16/79/57/360_F_516795722_dRBFwgdIjgEtYJcwq7xlPbElBgvD3Oqx.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(15, 58, 123, 0.7)'}}>
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Digital Marketing Services in <br></br> Chennai & Tamil Nadu</h1>
                    <p className="text-lg text-gray-200">Full-Stack Marketing Solutions</p>
                </div>
            </section>
            
            {/* Intro */}
            <section className="py-16 text-center">
                <div className="container mx-auto px-6 lg:px-8">
                     <p className="max-w-3xl mx-auto text-lg text-gray-700">
                        Looking to grow your business online? At KTech Digital Solutions (part of Krishnapillai Group of Companies), we provide end-to-end digital marketing services in Chennai, Coimbatore, Madurai, Trichy, and across Tamil Nadu. From SEO to social media, Google Ads, web development and beyond — we help you reach your audience, generate leads, and build brand authority.
                    </p>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="py-12 bg-light">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-primary">Our Full Digital Marketing Suite</h2>
                        <p className="mt-4 text-lg text-gray-600">Select a service to learn more about how we can help you succeed.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="flex flex-col bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-fuchsia-700">
                                <div className="text-5xl mb-4">{service.icon}</div>
                                <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                                <p className="text-gray-600 flex-grow mb-6">{service.description}</p>
                                <Link to={service.link} className="mt-auto inline-block text-fuchsia-700 font-semibold hover:text-orange-700 transition-colors">
                                    Learn More &rarr;
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
             {/* Call to Action */}
            <section className="py-20 bg-fuchsia-700 text-center text-white">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Digital Presence?</h2>
                    <p className="max-w-2xl mx-auto text-lg text-grey mb-8"> 👉Let's discuss how our integrated digital marketing strategies can take your business to the next level.</p>
                    <Link to="/contact" className="inline-block bg-white text-fuchsia-700 font-bold py-3 px-8 rounded-full text-lg hover: transition-transform transform hover:scale-105 duration-300">
                        Request a Free Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
