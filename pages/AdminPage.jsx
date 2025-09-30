import React, { useState, useEffect } from 'react';

// --- Default Data & Constants ---
const initialPortfolioProjects = [
  {
    image: 'https://static.vecteezy.com/system/resources/previews/026/608/976/large_2x/women-s-fashion-store-in-the-shopping-center-or-mall-clothes-store-with-mannequin-shopping-day-concept-by-ai-generated-free-photo.jpg',
    category: 'SEO & LOCAL PPC',
    title: 'Coimbatore Fashion Store',
    description: 'We executed a hyper-local SEO and Google Ads strategy to increase footfall and online sales for a boutique fashion store in Coimbatore.',
    result: '+60% Increase in Organic Traffic',
    link: '#'
  },
  {
    image: 'https://media.istockphoto.com/id/1409298953/photo/real-estate-agents-shake-hands-after-the-signing-of-the-contract-agreement-is-complete.jpg?s=612x612&w=0&k=20&c=SFybbpGMB0wIoI0tJotFqptzAYK_mICVITNdQIXqnyc=',
    category: 'WEBSITE DEVELOPMENT & SMM',
    title: 'Madurai Real Estate',
    description: 'Developed a high-converting website and ran targeted social media campaigns on Facebook and Instagram to generate qualified leads for a new property launch.',
    result: '300+ Quality Leads in 3 Months',
    link: '#'
  },
  {
    image: 'https://thumbs.dreamstime.com/b/store-modern-electronics-hub-featuring-sleek-gadgets-cutting-edge-displays-illuminated-bright-lights-offering-k-391483254.jpg',
    category: 'E-COMMERCE MARKETING',
    title: 'Chennai Electronics Hub',
    description: 'A full-funnel e-commerce marketing strategy including Google Shopping Ads and content marketing, resulting in a significant revenue boost.',
    result: '+150% ROI on Ad Spend',
    link: '#'
  }
];

const initialClientLogos = [
  'https://via.placeholder.com/150x60/cccccc/ffffff?text=Client+1',
  'https://via.placeholder.com/150x60/cccccc/ffffff?text=Client+2',
  'https://via.placeholder.com/150x60/cccccc/ffffff?text=Client+3',
  'https://via.placeholder.com/150x60/cccccc/ffffff?text=Client+4',
  'https://via.placeholder.com/150x60/cccccc/ffffff?text=Client+5',
  'https://via.placeholder.com/150x60/cccccc/ffffff?text=Client+6'
];

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

const PORTFOLIO_STORAGE_KEY = 'ktech_portfolio_projects';
const CLIENT_LOGOS_STORAGE_KEY = 'ktech_client_logos';
const BLOG_STORAGE_KEY = 'ktech_blog_posts';
const ADMIN_PASSWORD = 'admin@ktech';

const emptyProject = {
    image: '',
    category: '',
    title: '',
    description: '',
    result: '',
    link: '#',
};

const emptyBlogPost = {
    image: '',
    category: '',
    title: '',
    excerpt: '',
    author: '',
    date: '',
};


// --- Reusable Form Components ---
const InputField = ({ name, label, value, onChange }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input
            type="text"
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-fuchsia-700 focus:border-fuchsia-700 transition-colors duration-300"
            required
        />
    </div>
);

const TextareaField = ({ name, label, value, onChange }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <textarea
            name={name}
            id={name}
            rows={3}
            value={value}
            onChange={onChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-fuchsia-700 focus:border-fuchsia-700 transition-colors duration-300"
            required
        ></textarea>
    </div>
);


// --- Admin Login Component ---
const AdminLogin = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      onLogin();
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-primary">
            KTech<span className="text-fuchsia-700">.</span>
          </h1>
          <p className="text-gray-500 mt-1">Admin Panel</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="password" aria-label="Password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-fuchsia-700 focus:border-fuchsia-700"
                required
                aria-required="true"
              />
            </div>
            {error && <p className="text-red-500 text-sm" role="alert">{error}</p>}
            <button
              type="submit"
              className="w-full bg-fuchsia-700 text-white font-bold py-3 px-4 rounded-full hover:bg-fuchsia-900 transition-colors duration-300 transform hover:scale-105"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};


// --- Project Form Modal ---
const ProjectForm = ({ project, onSave, onCancel, isEditing }) => {
    const [formData, setFormData] = useState(project);

    useEffect(() => {
        setFormData(project);
    }, [project]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center animate-fade-in-up" onClick={onCancel} role="dialog" aria-modal="true">
            <div className="bg-white p-8 rounded-lg shadow-xl w-11/12 md:w-1/2 max-w-3xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                <h2 className="text-2xl font-bold text-primary mb-6">{isEditing ? 'Edit Project' : 'Add New Project'}</h2>
                <form onSubmit={handleSubmit} className="space-y-3">
                    <InputField name="title" label="Title" value={formData.title} onChange={handleChange} />
                    <InputField name="category" label="Category" value={formData.category} onChange={handleChange} />
                    <InputField name="image" label="Image URL" value={formData.image} onChange={handleChange} />
                    <TextareaField name="description" label="Description" value={formData.description} onChange={handleChange} />
                    <InputField name="result" label="Result" value={formData.result} onChange={handleChange} />
                    <InputField name="link" label="Link URL" value={formData.link} onChange={handleChange} />
                    
                    <div className="flex justify-end space-x-4 pt-4">
                        <button type="button" onClick={onCancel} className="bg-gray-200 text-gray-800 font-bold py-2 px-6 rounded-full hover:bg-gray-300 transition-colors">
                            Cancel
                        </button>
                        <button type="submit" className="bg-fuchsia-700 text-white font-bold py-2 px-6 rounded-full hover:bg-fuchsia-900 transition-colors">
                            {isEditing ? 'Save Changes' : 'Add Project'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// --- Blog Form Modal ---
const BlogForm = ({ post, onSave, onCancel, isEditing }) => {
    const [formData, setFormData] = useState(post);

    useEffect(() => {
        setFormData(post);
    }, [post]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center animate-fade-in-up" onClick={onCancel} role="dialog" aria-modal="true">
            <div className="bg-white p-8 rounded-lg shadow-xl w-11/12 md:w-1/2 max-w-3xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                <h2 className="text-2xl font-bold text-primary mb-6">{isEditing ? 'Edit Blog Post' : 'Add New Blog Post'}</h2>
                <form onSubmit={handleSubmit} className="space-y-3">
                    <InputField name="title" label="Title" value={formData.title} onChange={handleChange} />
                    <InputField name="category" label="Category" value={formData.category} onChange={handleChange} />
                    <InputField name="image" label="Image URL" value={formData.image} onChange={handleChange} />
                    <TextareaField name="excerpt" label="Description" value={formData.excerpt} onChange={handleChange} />
                    <InputField name="author" label="Author" value={formData.author} onChange={handleChange} />
                    <InputField name="date" label="Date (e.g., October 26, 2023)" value={formData.date} onChange={handleChange} />
                    
                    <div className="flex justify-end space-x-4 pt-4">
                        <button type="button" onClick={onCancel} className="bg-gray-200 text-gray-800 font-bold py-2 px-6 rounded-full hover:bg-gray-300 transition-colors">
                            Cancel
                        </button>
                        <button type="submit" className="bg-fuchsia-700 text-white font-bold py-2 px-6 rounded-full hover:bg-fuchsia-900 transition-colors">
                            {isEditing ? 'Save Changes' : 'Add Post'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};


// --- Main Admin Dashboard Component ---
const AdminDashboard = () => {
    // Portfolio State
    const [projects, setProjects] = useState([]);
    const [editingProject, setEditingProject] = useState(null);
    const [editingProjectIndex, setEditingProjectIndex] = useState(null);
    const [showProjectForm, setShowProjectForm] = useState(false);

    // Client Logos State
    const [clientLogos, setClientLogos] = useState([]);
    const [newLogoUrl, setNewLogoUrl] = useState('');
    
    // Blog State
    const [blogPosts, setBlogPosts] = useState([]);
    const [editingBlogPost, setEditingBlogPost] = useState(null);
    const [editingBlogPostIndex, setEditingBlogPostIndex] = useState(null);
    const [showBlogForm, setShowBlogForm] = useState(false);


    useEffect(() => {
        // Load portfolio projects
        try {
            const storedProjects = localStorage.getItem(PORTFOLIO_STORAGE_KEY);
            if (storedProjects) {
                setProjects(JSON.parse(storedProjects));
            } else {
                setProjects(initialPortfolioProjects);
                localStorage.setItem(PORTFOLIO_STORAGE_KEY, JSON.stringify(initialPortfolioProjects));
            }
        } catch (error) {
            console.error("Failed to parse portfolio projects from localStorage", error);
            setProjects(initialPortfolioProjects);
        }

        // Load client logos
        try {
            const storedLogos = localStorage.getItem(CLIENT_LOGOS_STORAGE_KEY);
            if (storedLogos) {
                setClientLogos(JSON.parse(storedLogos));
            } else {
                setClientLogos(initialClientLogos);
                localStorage.setItem(CLIENT_LOGOS_STORAGE_KEY, JSON.stringify(initialClientLogos));
            }
        } catch (error) {
            console.error("Failed to parse client logos from localStorage", error);
            setClientLogos(initialClientLogos);
        }

        // Load blog posts
        try {
            const storedBlogPosts = localStorage.getItem(BLOG_STORAGE_KEY);
            if (storedBlogPosts) {
                setBlogPosts(JSON.parse(storedBlogPosts));
            } else {
                setBlogPosts(initialBlogPosts);
                localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(initialBlogPosts));
            }
        } catch (error) {
            console.error("Failed to parse blog posts from localStorage", error);
            setBlogPosts(initialBlogPosts);
        }
    }, []);

    // --- Portfolio Handlers ---
    const saveProjects = (updatedProjects) => {
        setProjects(updatedProjects);
        localStorage.setItem(PORTFOLIO_STORAGE_KEY, JSON.stringify(updatedProjects));
    };
    
    const handleAddProject = () => {
        setEditingProject(emptyProject);
        setEditingProjectIndex(null);
        setShowProjectForm(true);
    }
    
    const handleEditProject = (index) => {
        setEditingProject(projects[index]);
        setEditingProjectIndex(index);
        setShowProjectForm(true);
    };

    const handleDeleteProject = (index) => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            const updatedProjects = projects.filter((_, i) => i !== index);
            saveProjects(updatedProjects);
        }
    };
    
    const handleSaveProject = (projectToSave) => {
        let updatedProjects;
        if (editingProjectIndex !== null) {
            updatedProjects = projects.map((p, i) => i === editingProjectIndex ? projectToSave : p);
        } else {
            updatedProjects = [...projects, projectToSave];
        }
        saveProjects(updatedProjects);
        setShowProjectForm(false);
        setEditingProject(null);
        setEditingProjectIndex(null);
    };

    const handleCancelProjectForm = () => {
        setShowProjectForm(false);
        setEditingProject(null);
        setEditingProjectIndex(null);
    }
    
    // --- Client Logo Handlers ---
    const saveLogos = (updatedLogos) => {
        setClientLogos(updatedLogos);
        localStorage.setItem(CLIENT_LOGOS_STORAGE_KEY, JSON.stringify(updatedLogos));
    };

    const handleAddLogo = (e) => {
        e.preventDefault();
        if (newLogoUrl.trim() === '') return;
        const updatedLogos = [...clientLogos, newLogoUrl.trim()];
        saveLogos(updatedLogos);
        setNewLogoUrl('');
    };

    const handleDeleteLogo = (index) => {
        if (window.confirm('Are you sure you want to delete this client logo?')) {
            const updatedLogos = clientLogos.filter((_, i) => i !== index);
            saveLogos(updatedLogos);
        }
    };
    
    // --- Blog Post Handlers ---
    const saveBlogPosts = (updatedPosts) => {
        setBlogPosts(updatedPosts);
        localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(updatedPosts));
    };

    const handleAddBlogPost = () => {
        setEditingBlogPost(emptyBlogPost);
        setEditingBlogPostIndex(null);
        setShowBlogForm(true);
    };

    const handleEditBlogPost = (index) => {
        setEditingBlogPost(blogPosts[index]);
        setEditingBlogPostIndex(index);
        setShowBlogForm(true);
    };

    const handleDeleteBlogPost = (index) => {
        if (window.confirm('Are you sure you want to delete this blog post?')) {
            const updatedPosts = blogPosts.filter((_, i) => i !== index);
            saveBlogPosts(updatedPosts);
        }
    };

    const handleSaveBlogPost = (postToSave) => {
        let updatedPosts;
        if (editingBlogPostIndex !== null) {
            updatedPosts = blogPosts.map((p, i) => i === editingBlogPostIndex ? postToSave : p);
        } else {
            updatedPosts = [...blogPosts, postToSave];
        }
        saveBlogPosts(updatedPosts);
        setShowBlogForm(false);
        setEditingBlogPost(null);
        setEditingBlogPostIndex(null);
    };

    const handleCancelBlogForm = () => {
        setShowBlogForm(false);
        setEditingBlogPost(null);
        setEditingBlogPostIndex(null);
    };

    return (
        <div className="bg-light min-h-screen">
            <div className="container mx-auto px-6 lg:px-8 py-12">
                {/* --- Portfolio Section --- */}
                <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
                    <h1 className="text-3xl font-extrabold text-primary">Manage Portfolio</h1>
                    <button onClick={handleAddProject} className="bg-fuchsia-700 text-white font-bold py-2 px-6 rounded-full hover:bg-fuchsia-900 transition-colors flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" /></svg>
                        <span>Add Project</span>
                    </button>
                </div>

                {showProjectForm && editingProject && (
                    <ProjectForm 
                        project={editingProject} 
                        onSave={handleSaveProject}
                        onCancel={handleCancelProjectForm}
                        isEditing={editingProjectIndex !== null}
                    />
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col group transition-shadow hover:shadow-xl">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-6 flex flex-col flex-grow">
                                <p className="text-sm font-semibold text-fuchsia-700 mb-1 tracking-wider">{project.category}</p>
                                <h3 className="text-xl font-bold text-primary mb-3 flex-grow">{project.title}</h3>
                                <div className="flex justify-end space-x-2 mt-4">
                                    <button onClick={() => handleEditProject(index)} className="text-sm bg-secondary text-white py-2 px-4 rounded-full hover:bg-primary transition-colors flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" /></svg>
                                        <span>Edit</span>
                                    </button>
                                    <button onClick={() => handleDeleteProject(index)} className="text-sm bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 transition-colors flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" /></svg>
                                        <span>Delete</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                 {projects.length === 0 && (
                    <div className="text-center py-20 text-gray-500 bg-white rounded-lg shadow-md mt-8">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" /></svg>
                        <h3 className="mt-2 text-sm font-medium text-gray-900">No projects</h3>
                        <p className="mt-1 text-sm text-gray-500">Get started by creating a new project.</p>
                    </div>
                )}
                
                {/* --- Blog Posts Section --- */}
                <div className="mt-16">
                    <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
                        <h1 className="text-3xl font-extrabold text-primary">Manage Blog Posts</h1>
                         <button onClick={handleAddBlogPost} className="bg-fuchsia-700 text-white font-bold py-2 px-6 rounded-full hover:bg-fuchsia-900 transition-colors flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" /></svg>
                            <span>Add Post</span>
                        </button>
                    </div>

                    {showBlogForm && editingBlogPost && (
                        <BlogForm 
                            post={editingBlogPost} 
                            onSave={handleSaveBlogPost}
                            onCancel={handleCancelBlogForm}
                            isEditing={editingBlogPostIndex !== null}
                        />
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                             <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col group transition-shadow hover:shadow-xl">
                                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                                <div className="p-6 flex flex-col flex-grow">
                                    <p className="text-sm font-semibold text-fuchsia-700 mb-1 tracking-wider">{post.category}</p>
                                    <h3 className="text-xl font-bold text-primary mb-2">{post.title}</h3>
                                    <p className="text-gray-500 text-sm flex-grow">{post.excerpt}</p>
                                    <div className="flex justify-end space-x-2 mt-4">
                                        <button onClick={() => handleEditBlogPost(index)} className="text-sm bg-secondary text-white py-2 px-4 rounded-full hover:bg-primary transition-colors flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" /></svg>
                                            <span>Edit</span>
                                        </button>
                                        <button onClick={() => handleDeleteBlogPost(index)} className="text-sm bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 transition-colors flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" /></svg>
                                            <span>Delete</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                     {blogPosts.length === 0 && (
                        <div className="text-center py-20 text-gray-500 bg-white rounded-lg shadow-md mt-8">
                            <p>No blog posts found. Get started by creating a new one.</p>
                        </div>
                    )}
                </div>

                {/* --- Client Logos Section --- */}
                <div className="mt-16">
                    <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
                        <h1 className="text-3xl font-extrabold text-primary">Manage Client Logos</h1>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                        <form onSubmit={handleAddLogo} className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="text"
                                value={newLogoUrl}
                                onChange={(e) => setNewLogoUrl(e.target.value)}
                                placeholder="Enter new client logo URL"
                                className="w-full flex-grow px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-fuchsia-700 focus:border-fuchsia-700"
                                required
                                aria-label="New Client Logo URL"
                            />
                            <button type="submit" className="bg-secondary text-white font-bold py-2 px-6 rounded-full hover:bg-primary transition-colors flex items-center justify-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" /></svg>
                                <span>Add Logo</span>
                            </button>
                        </form>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {clientLogos.map((logoUrl, index) => (
                            <div key={index} className="relative bg-white p-4 rounded-lg shadow-md flex items-center justify-center group aspect-video">
                                <img src={logoUrl} alt={`Client logo ${index + 1}`} className="max-h-16 object-contain" />
                                <button
                                    onClick={() => handleDeleteLogo(index)}
                                    className="absolute top-1 right-1 bg-red-600 text-white rounded-full h-6 w-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                    aria-label="Delete logo"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                        ))}
                    </div>
                     {clientLogos.length === 0 && (
                        <div className="text-center py-20 text-gray-500 bg-white rounded-lg shadow-md mt-8">
                            <p>No client logos found. Add one using the form above.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};


// --- Top-Level Admin Page Component ---
const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return isAuthenticated ? <AdminDashboard /> : <AdminLogin onLogin={() => setIsAuthenticated(true)} />;
};

export default AdminPage;