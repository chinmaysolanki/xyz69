const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());

// Portfolio Data
const portfolioData = {
  profile: {
    name: "Chinmay Solanki",
    title: "Full Stack Developer & AI Engineer",
    bio: "Passionate about building innovative web applications and AI solutions. Specialized in React, Node.js, Python, and machine learning technologies.",
    location: "India",
    email: "chinmay@example.com",
    phone: "+91 XXXXXXXXXX",
    avatar: "/api/avatar",
    skills: [
      { name: "React.js", level: 95, category: "Frontend" },
      { name: "Node.js", level: 90, category: "Backend" },
      { name: "Python", level: 88, category: "Backend" },
      { name: "Machine Learning", level: 85, category: "AI/ML" },
      { name: "Three.js", level: 80, category: "3D Graphics" },
      { name: "MongoDB", level: 85, category: "Database" },
      { name: "Express.js", level: 90, category: "Backend" },
      { name: "TensorFlow", level: 75, category: "AI/ML" },
      { name: "Docker", level: 70, category: "DevOps" },
      { name: "AWS", level: 75, category: "Cloud" }
    ],
    socialLinks: {
      github: "https://github.com/chinmaysolanki",
      linkedin: "https://linkedin.com/in/chinmaysolanki",
      twitter: "https://twitter.com/chinmaysolanki",
      portfolio: "https://chinmaysolanki.dev"
    }
  },
  projects: [
    {
      id: 1,
      title: "SentinelMind | Autonomous Cybersecurity Brain",
      description: "An AI-powered cybersecurity system that autonomously detects and responds to threats using machine learning algorithms.",
      technologies: ["Python", "TensorFlow", "React", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/chinmaysolanki/sentinelmind",
      liveUrl: "https://sentinelmind.demo.com",
      imageUrl: "/api/project-image/1",
      category: "AI/ML",
      featured: true,
      status: "Active",
      createdAt: "2024-01-15"
    },
    {
      id: 2,
      title: "DataCitadel | 3D Portfolio Website",
      description: "A cyberpunk-themed 3D portfolio website built with React, Three.js, and advanced animations.",
      technologies: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
      githubUrl: "https://github.com/chinmaysolanki/datacitadel",
      liveUrl: "https://datacitadel.dev",
      imageUrl: "/api/project-image/2",
      category: "Frontend",
      featured: true,
      status: "Active",
      createdAt: "2024-02-20"
    },
    {
      id: 3,
      title: "QuantumDB | Distributed Database System",
      description: "A high-performance distributed database system optimized for real-time analytics and machine learning workloads.",
      technologies: ["Go", "Redis", "PostgreSQL", "Docker", "Kubernetes"],
      githubUrl: "https://github.com/chinmaysolanki/quantumdb",
      liveUrl: null,
      imageUrl: "/api/project-image/3",
      category: "Backend",
      featured: false,
      status: "In Development",
      createdAt: "2024-03-10"
    }
  ],
  experience: [
    {
      id: 1,
      company: "TechCorp Solutions",
      position: "Senior Full Stack Developer",
      duration: "2022 - Present",
      location: "Remote",
      description: "Leading development of enterprise-grade web applications and AI solutions for Fortune 500 companies.",
      achievements: [
        "Increased application performance by 40% through optimization",
        "Led team of 5 developers on multiple projects",
        "Implemented ML models that improved prediction accuracy by 25%"
      ]
    },
    {
      id: 2,
      company: "AI Innovations Lab",
      position: "Machine Learning Engineer",
      duration: "2021 - 2022",
      location: "Bangalore, India",
      description: "Developed and deployed machine learning models for computer vision and natural language processing applications.",
      achievements: [
        "Built CV models with 95% accuracy for medical image analysis",
        "Optimized model inference speed by 60%",
        "Published 3 research papers on AI applications"
      ]
    }
  ],
  stats: {
    projectsCompleted: 15,
    aiModelsTrained: 25,
    yearsExperience: 3,
    clientsSatisfied: 8,
    linesOfCode: 150000,
    coffeeCupsConsumed: 2847
  }
};

// API Routes
app.get('/api/status', (req, res) => {
  res.json({
    status: 'Active',
    server: 'Express.js',
    port: process.env.PORT || 5001,
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    version: '1.0.0'
  });
});

app.get('/api/profile', (req, res) => {
  res.json(portfolioData.profile);
});

app.get('/api/projects', (req, res) => {
  const { category, featured } = req.query;
  let projects = portfolioData.projects;
  
  if (category) {
    projects = projects.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }
  
  if (featured === 'true') {
    projects = projects.filter(p => p.featured);
  }
  
  res.json(projects);
});

app.get('/api/projects/:id', (req, res) => {
  const project = portfolioData.projects.find(p => p.id === parseInt(req.params.id));
  if (!project) {
    return res.status(404).json({ error: 'Project not found' });
  }
  res.json(project);
});

app.get('/api/experience', (req, res) => {
  res.json(portfolioData.experience);
});

app.get('/api/skills', (req, res) => {
  const { category } = req.query;
  let skills = portfolioData.profile.skills;
  
  if (category) {
    skills = skills.filter(s => s.category.toLowerCase() === category.toLowerCase());
  }
  
  res.json(skills);
});

app.get('/api/stats', (req, res) => {
  res.json(portfolioData.stats);
});

app.get('/api/contact', (req, res) => {
  res.json({
    email: portfolioData.profile.email,
    phone: portfolioData.profile.phone,
    location: portfolioData.profile.location,
    socialLinks: portfolioData.profile.socialLinks,
    availability: "Available for new projects",
    preferredContact: "email"
  });
});

// Contact form submission
app.post('/api/contact', (req, res) => {
  const { name, email, message, subject } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }
  
  // Here you would typically save to database or send email
  console.log('Contact form submission:', { name, email, subject, message });
  
  res.json({ 
    success: true, 
    message: 'Thank you for your message! I will get back to you soon.',
    timestamp: new Date().toISOString()
  });
});

// Server performance metrics
app.get('/api/metrics', (req, res) => {
  const used = process.memoryUsage();
  res.json({
    memory: {
      rss: Math.round(used.rss / 1024 / 1024 * 100) / 100 + ' MB',
      heapTotal: Math.round(used.heapTotal / 1024 / 1024 * 100) / 100 + ' MB',
      heapUsed: Math.round(used.heapUsed / 1024 / 1024 * 100) / 100 + ' MB'
    },
    uptime: Math.floor(process.uptime()) + ' seconds',
    platform: process.platform,
    nodeVersion: process.version,
    cpuArchitecture: process.arch
  });
});

// Serve static files from the React app in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log('Available API endpoints:');
  console.log('  GET /api/status - Server status');
  console.log('  GET /api/profile - Personal profile data');
  console.log('  GET /api/projects - All projects');
  console.log('  GET /api/projects/:id - Specific project');
  console.log('  GET /api/experience - Work experience');
  console.log('  GET /api/skills - Technical skills');
  console.log('  GET /api/stats - Portfolio statistics');
  console.log('  GET /api/contact - Contact information');
  console.log('  POST /api/contact - Submit contact form');
  console.log('  GET /api/metrics - Server performance metrics');
}); 