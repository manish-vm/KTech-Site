import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

const initialBlogPosts = [
    {
        image: 'https://brandvisage.com/wp-content/uploads/2023/09/SEO.jpg',
        category: 'SEO',
        title: 'Top 5 Local SEO Tips for Businesses in Chennai',
        excerpt: 'Learn how to optimize your Google My Business profile and attract more local customers in the competitive Chennai market.',
        author: 'KTech Team',
        date: 'October 26, 2023',
    },
    {
        image: 'https://digisampann.in/wp-content/uploads/2025/06/youtube-shorts-vs-instagram-reels_800x800.png',
        category: 'Social Media',
        title: 'Instagram Reels vs. YouTube Shorts: Which is Better for Your Brand?',
        excerpt: 'A deep dive into the two leading short-form video platforms and how to choose the right one for your marketing strategy.',
        author: 'KTech Team',
        date: 'October 22, 2023',
    },
    {
        image: 'https://nomadicadvertising.com/wp-content/uploads/2023/10/Blue-Gradient-Modern-Freelancer-YouTube-Thumbnail-5.jpg',
        category: 'PPC',
        title: 'How to Reduce Your Google Ads Spend Without Sacrificing Leads',
        excerpt: 'Discover practical strategies for optimizing your PPC campaigns to improve ROI and lower your cost-per-conversion.',
        author: 'KTech Team',
        date: 'October 18, 2023',
    },
];

const BLOG_STORAGE_KEY = 'ktech_blog_posts';

const BlogPage: React.FC = () => {
    const [blogPosts, setBlogPosts] = useState(initialBlogPosts);

    useEffect(() => {
        try {
            const storedPosts = localStorage.getItem(BLOG_STORAGE_KEY);
            if (storedPosts) {
                setBlogPosts(JSON.parse(storedPosts));
            } else {
                localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(initialBlogPosts));
            }
        } catch (error) {
            console.error("Failed to access localStorage for blog posts:", error);
        }
    }, []);

    return (
        <div className="bg-white">
            <Helmet>
                <title>Digital Marketing Blog Chennai | KTech Digital Solutions</title>
                <meta name="description" content="Stay updated with the latest digital marketing tips, SEO strategies & social media trends. Read KTech Digital Solutions’ blog from Chennai." />
                <meta name="keywords" content="digital marketing blog Chennai, SEO blog Tamil Nadu, social media tips Chennai, PPC blog Chennai, content marketing blog Chennai" />

            </Helmet>
            <section className="bg-primary text-white py-20" style={{ backgroundImage: "url('https://www.searchenginejournal.com/wp-content/uploads/2024/04/22-places-you-should-be-sharing-your-content-576.jpg')", backgroundSize: 'cover', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(2, 21, 52, 0.81)' }}>
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Digital Marketing Blog & Resources</h1>
                    <p className="text-lg text-gray-200">Tips, Trends & Insights from Tamil Nadu's Experts</p>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <p className="max-w-3xl mx-auto text-lg text-gray-700">
                            Welcome to the K-Tech Digital Solutions Blog, your resource hub for all things digital marketing in Tamil Nadu. Whether you are a business owner in Chennai, Coimbatore, Madurai, Trichy, or any part of the state, here you’ll find expert tips, strategy guides, case studies, and latest trends to grow your online presence, boost SEO, run better ad campaigns, and stay ahead in social media.
                        </p>
                    </div>

                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-extrabold text-primary">Latest Articles</h2>
                        <p className="mt-4 text-lg text-gray-600">Our latest thoughts, ideas, and insights.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {blogPosts.map((post, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-all duration-300 border">
                                <img src={post.image} alt={post.title} className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity" />
                                <div className="p-6 flex flex-col">
                                    <p className="text-sm font-semibold text-fuchsia-700 mb-2 tracking-wider">{post.category}</p>
                                    <h3 className="text-2xl font-bold text-primary mb-3 h-20">{post.title}</h3>
                                    <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                                    <div className="text-sm text-gray-500 mt-4">
                                        <span>By {post.author}</span> &bull; <span>{post.date}</span>
                                    </div>
                                    <span className="mt-4 font-semibold text-secondary hover:text-fuchsia-700 transition-colors self-start cursor-pointer">
                                        Read More &rarr;
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    {blogPosts.length === 0 && (
                        <div className="mt-16 text-center text-2xl font-bold text-primary col-span-full">
                            No articles found. More posts coming soon!
                        </div>
                    )}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-extrabold text-primary mt-20">More posts coming soon!</h2>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPage;
