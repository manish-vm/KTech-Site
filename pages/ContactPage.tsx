import React, { useState } from 'react';
import { Helmet } from "react-helmet";

// NOTE: Replace this placeholder with your actual Google Sheets Web App URL in the next step.
const GOOGLE_SHEET_API_URL = 'https://script.google.com/macros/s/AKfycbzK3rF23dWt9XoEFLqX1re6O6OXGYEktF9l1Dr74gi5Y_x2J4czAAGZZFVmyl6Da82nBA/exec';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        // Simple validation check (should match the 'required' attributes in the form)
        if (!formData.name || !formData.email || !formData.message) {
            setError('Please fill out all required fields.');
            setIsLoading(false);
            return;
        }

        try {
            // 1. Create FormData object for submission
            // We use standard URLSearchParams to correctly format the data for the App Script POST request.
            const data = new URLSearchParams(formData as any);

            const response = await fetch(GOOGLE_SHEET_API_URL, {
                method: 'POST',
                mode: 'no-cors', // Required for Google App Script due to cross-origin policy
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: data,
            });

            // Note: Since we use 'no-cors' mode for App Script, the 'response.ok' check is unreliable.
            // We assume success here, but a more robust backend would allow proper error handling.
            // For now, if the fetch completes without an error, we treat it as successful.

            setIsSubmitted(true);
            setFormData({ // Optionally clear the form after successful submission
                name: '',
                email: '',
                phone: '',
                company: '',
                message: '',
            });

        } catch (err) {
            console.error('Submission Error:', err);
            setError('There was an issue sending your message. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="bg-white">
            <Helmet>
                <title>Contact KTech Digital Solutions | Digital Marketing Company Chennai</title>
                <meta name="description" content="Contact KTech Digital Solutions, Chennai for SEO, social media, PPC, branding, web design & software solutions across Tamil Nadu. Let’s grow together." />
                <meta name="keywords" content="contact KTech Digital Solutions, digital marketing contact Chennai, SEO services enquiry Chennai, PPC services contact Tamil Nadu, marketing agency Chennai" />

            </Helmet>
            <section className="bg-primary text-white py-20" style={{ backgroundImage: "url('https://t3.ftcdn.net/jpg/05/30/96/04/360_F_530960431_c8fPd3HansYvrSJ4fJxZqp9OhjQmYoll.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(12, 45, 96, 0.7)' }}>
                <div className="container mx-auto px-6 lg:px-8 text-center" >
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Get in Touch</h1>
                    <p className="text-lg text-gray-200">We'd love to hear from you. Let's talk about how we can grow your business.</p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Left Column: Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-primary mb-4">Get in Touch With Us</h2>
                                <p className="text-gray-600 text-lg">
                                    We’d love to hear about your project! Whether you’re in Chennai, Coimbatore, Madurai, Trichy, or anywhere in Tamil Nadu, reach out to us for a free consultation or quote. Our team at KTech Digital Solutions (a division of the Krishnapillai Group of Companies) is ready to help you grow your online presence with SEO, SMM, PPC, Website Development & more.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-primary border-b-2 border-fuchsia-700 pb-2">Contact Details</h3>
                                <div className="flex items-center text-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-fuchsia-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="text-gray-700">1 cross street, Venkateswara Nagar, peramanur, Maraimalai nagar, Chengalpattu - 603204</span>
                                </div>
                                <div className="flex items-center text-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-fuchsia-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <a href="mailto:info@ktechdigi.com" className="text-gray-700 hover:text-fuchsia-700">info@ktechdigi.com</a>
                                </div>
                                <div className="flex items-center text-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-fuchsia-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    <span className="text-gray-700">+91 8148736007</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-primary border-b-2 border-fuchsia-700 pb-2 mb-4">Why Reach Out to Us?</h3>
                                <ul className="space-y-3">
                                    {["Fast and local response", "Backed by the Krishnapillai Group of Companies – trust and reliability", "Transparent quotes & free initial consultation", "Full-service digital support", "Serving clients from Chennai, Coimbatore, Madurai, Salem, Trichy, and all across Tamil Nadu"].map(point => (
                                        <li key={point} className="flex items-start">
                                            <svg className="flex-shrink-0 h-6 w-6 text-green-500 mr-2 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                            <span className="text-gray-700">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-light p-8 rounded-lg shadow-lg">
                            {isSubmitted ? (
                                <div className="text-center flex flex-col items-center justify-center h-full animate-fade-in-up">
                                    <svg className="w-20 h-20 text-green-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <h3 className="text-2xl font-bold text-primary mb-2">Thank You!</h3>
                                    <p className="text-gray-700">Your message has been sent successfully. We will get back to you shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">{error}</div>}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                        <input type="text" name="name" id="Name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-fuchsia-700 focus:border-fuchsia-700" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                        <input type="email" name="email" id="Email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-fuchsia-700 focus:border-fuchsia-700" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number <span className="text-xs text-gray-500">(Optional)</span></label>
                                        <input type="tel" name="phone" id="Phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-fuchsia-700 focus:border-fuchsia-700" />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name <span className="text-xs text-gray-500">(Optional)</span></label>
                                        <input type="text" name="company" id="Company" value={formData.company} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-fuchsia-700 focus:border-fuchsia-700" />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                        <textarea name="message" id="Message" rows={5} required value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-fuchsia-700 focus:border-fuchsia-700"></textarea>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full bg-fuchsia-700 text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-orange-700 transition-transform transform hover:scale-105 duration-300 flex items-center justify-center disabled:opacity-75 disabled:cursor-not-allowed"
                                        >
                                            {isLoading ? (
                                                <>
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Sending...
                                                </>
                                            ) : (
                                                'Send Message'
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;