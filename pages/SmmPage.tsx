
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

const offerings = [
    { icon: '🎨', title: 'Content Creation', description: 'Designing engaging posts, stories, reels, graphics, and video content that captures attention.' },
    { icon: '📈', title: 'Strategy Development', description: 'Crafting a custom social media strategy aligned with your business objectives and choosing the right platforms.' },
    { icon: '📢', title: 'Paid Advertising Campaigns', description: 'Running targeted ad campaigns on platforms like Facebook, Instagram and YouTube to reach new customers.' },
    { icon: '🤝', title: 'Community Engagement', description: 'Responding to comments/messages, interacting with your audience, and building a loyal follower base.' },
    { icon: '✨', title: 'Social Media Optimization (SMO)', description: 'Optimizing your profiles with consistent branding, clear bios, and a uniform visual style.' },
    { icon: '🤝', title: 'Influencer Collaboration', description: 'Partnering with local influencers in Chennai/Tamil Nadu to expand your reach (if needed).' },
];

const platforms = [
    { name: 'Facebook', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/facebook.svg' },
    { name: 'Instagram', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/instagram.svg' },
    { name: 'LinkedIn', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/linkedin.svg' },
    { name: 'X (Twitter)', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/x.svg' },
    { name: 'YouTube', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/youtube.svg' },
    { name: 'Pinterest', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/pinterest.svg' },
];

const processSteps = [
    { icon: '1', title: 'Discussion & Goal Setting', description: 'We begin by understanding what you want to achieve with your social media marketing.' },
    { icon: '2', title: 'Audience & Competitor Research', description: 'We analyze your target audience and what your competitors are doing.' },
    { icon: '3', title: 'Content Calendar & Ad Setup', description: 'We create a strategic content plan and set up ad campaigns if required.' },
    { icon: '4', title: 'Execution & Refinement', description: 'We post content, engage with users, monitor metrics, and continuously refine our strategy.' },
];

const whyChooseUsPoints = [
    { title: 'Local Market Knowledge', description: 'Deep understanding of Tamil Nadu market & audience behaviour.' },
    { title: 'Transparent Reporting', description: 'Clear goals, consistent optimization, and detailed performance reports.' },
    { title: 'Trusted Partner', description: 'Backed by Krishnapillai Group’s trust & local credibility.' },
    { title: 'Affordable Packages', description: 'Tailored pricing for SMEs and startups to ensure great ROI.' }
];

const SmmPage: React.FC = () => {
    return (
        <div className="bg-white">
            <Helmet>
                <title>Social Media Marketing Company in Chennai | KTech Digital Solutions</title>

                <meta name="description"
                    content="Grow your brand online with expert social media marketing in Chennai. KTech Digital Solutions helps businesses with Facebook, Instagram, LinkedIn & YouTube ads." />

                <meta name="keywords"
                    content="social media marketing Chennai, SMM company Chennai, Facebook ads Chennai, Instagram marketing Chennai, LinkedIn marketing Chennai, YouTube ads Chennai, Tamil Nadu social media services" />
            </Helmet>
            <section className="bg-primary text-white py-20" style={{ backgroundImage: "url('https://wallpapers.com/images/featured/social-media-apps-dgwr9vwvb0svnu9w.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(15, 58, 123, 0.7)' }}>
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Social Media Marketing Company in Tamil Nadu</h1>
                    <p className="text-lg text-gray-200">Your SMM Agency in Chennai & Coimbatore</p>
                </div>
            </section>

            <section className="py-16 text-center">
                <div className="container mx-auto px-6 lg:px-8">
                    <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-8">
                        Want to grow your brand’s presence on social media? At KTech Digital Solutions (Krishnapillai Group of Companies), we deliver powerful social media marketing services in Tamil Nadu, helping businesses in Chennai, Coimbatore, Madurai, Trichy, and Salem connect with their audience, increase engagement, and boost sales. Let’s build your brand story and reach where it matters most.
                    </p>
                    <h2 className="text-3xl font-bold text-primary mb-4">Why Your Brand Needs a Strong Social Presence</h2>
                    <p className="max-w-3xl mx-auto text-gray-700">
                        Social media isn’t just for sharing—it’s a platform where customers discover, compare, and decide. With over 3+ billion users globally and increasing smartphone usage in Tamil Nadu, having a clear social media strategy is key to building trust, awareness, and driving conversions.
                    </p>
                </div>
            </section>

            <section className="py-12 bg-light">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-primary">Our SMM Services</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                        {offerings.map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-fuchsia-700 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-extrabold text-primary mb-12">Platforms We Work On</h2>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                        {platforms.map(platform => (
                            <div key={platform.name} className="flex flex-col items-center group">
                                <img src={platform.logo} alt={platform.name} className="h-12 w-12 md:h-16 md:w-16 grayscale group-hover:grayscale-0 transition-all duration-300" />
                                <span className="mt-2 text-sm text-gray-600 font-medium">{platform.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-light">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-primary">Why Choose KTech for Social Media Marketing?</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                        {whyChooseUsPoints.map((point, index) => (
                            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                                <h3 className="font-bold text-xl text-primary mb-2">{point.title}</h3>
                                <p className="text-gray-600">{point.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-primary">Our Process</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {processSteps.map((step) => (
                            <div key={step.icon} className="text-center p-4 bg-light rounded-lg shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                                <div className="mx-auto w-16 h-16 rounded-full bg-fuchsia-700 text-white flex items-center justify-center text-2xl font-bold mb-4">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                                <p className="text-gray-600 text-sm">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-secondary text-center text-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-4">Ready to amplify your social presence?</h2>
                    <Link to="/contact" className="inline-block bg-fuchsia-700 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-fuchsia-900 transition-transform transform hover:scale-105 duration-300">
                        Get a Free Social Media Audit & Quote
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default SmmPage;