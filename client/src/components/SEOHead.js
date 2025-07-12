import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({
  title = "Chinmay Solanki - AI Engineer & Cybersecurity Expert",
  description = "Experienced AI Engineer and Cybersecurity Expert specializing in machine learning, threat detection, and full-stack development. Building intelligent solutions for the future.",
  keywords = "AI Engineer, Cybersecurity Expert, Machine Learning, Python, React, TensorFlow, Full Stack Developer, Portfolio",
  author = "Chinmay Solanki",
  image = "/og-image.jpg",
  url = "https://chinmaysolanki.dev",
  type = "website"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Chinmay Solanki",
    "jobTitle": ["AI Engineer", "Cybersecurity Expert", "Full Stack Developer"],
    "description": description,
    "url": url,
    "image": image,
    "sameAs": [
      "https://www.linkedin.com/in/chinmay-solanki-27bb22276/",
      "https://github.com/chinmaysolanki"
    ],
    "email": "chinmaysolanki123@gmail.com",
    "telephone": "+919659757000",
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Cybersecurity",
      "Python Programming",
      "React Development",
      "TensorFlow",
      "Deep Learning",
      "Computer Vision",
      "Natural Language Processing",
      "Web Development",
      "Cloud Computing"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "AI Engineer",
      "description": "Specializes in building intelligent AI systems and cybersecurity solutions"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Technology Institute"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    }
  };

  const projectsStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Chinmay Solanki's Projects",
    "description": "Portfolio of AI and cybersecurity projects",
    "itemListElement": [
      {
        "@type": "SoftwareApplication",
        "name": "SentinelMind",
        "description": "AI-powered cybersecurity system using Reinforcement Learning and LLMs",
        "applicationCategory": "SecurityApplication",
        "operatingSystem": "Cross-platform",
        "programmingLanguage": ["Python", "TensorFlow"],
        "author": {
          "@type": "Person",
          "name": "Chinmay Solanki"
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "Automated Attendance System",
        "description": "Face recognition-based attendance tracking system",
        "applicationCategory": "EducationApplication",
        "operatingSystem": "Cross-platform",
        "programmingLanguage": ["Python", "OpenCV"],
        "author": {
          "@type": "Person",
          "name": "Chinmay Solanki"
        }
      },
      {
        "@type": "WebSite",
        "name": "Interactive 3D Portfolio",
        "description": "Modern portfolio website with 3D animations and AI chatbot",
        "url": url,
        "author": {
          "@type": "Person",
          "name": "Chinmay Solanki"
        },
        "programmingLanguage": ["JavaScript", "React", "Three.js"]
      }
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="theme-color" content="#a855f7" />
      
      {/* Viewport and Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Chinmay Solanki Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content="@chinmaysolanki" />

      {/* LinkedIn */}
      <meta property="article:author" content="https://www.linkedin.com/in/chinmay-solanki-27bb22276/" />

      {/* Additional SEO Meta Tags */}
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="coverage" content="worldwide" />
      <meta name="target" content="all" />
      <meta name="audience" content="all" />
      <meta name="classification" content="business" />

      {/* Technical Skills for Job Search */}
      <meta name="skills" content="Python, JavaScript, React, TensorFlow, PyTorch, Machine Learning, Deep Learning, Computer Vision, NLP, Cybersecurity, Cloud Computing, AWS, Docker, Kubernetes" />
      <meta name="experience" content="3+ years in AI and Cybersecurity" />
      <meta name="location" content="Available for remote work" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link rel="preconnect" href="https://api.github.com" />

      {/* DNS Prefetch for faster loading */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//api.github.com" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(projectsStructuredData)}
      </script>

      {/* Additional structured data for breadcrumbs */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": url
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "About",
              "item": `${url}#about`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Projects",
              "item": `${url}#projects`
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Contact",
              "item": `${url}#contact`
            }
          ]
        })}
      </script>

      {/* Organization structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Chinmay Solanki - AI & Cybersecurity Services",
          "description": "Professional AI engineering and cybersecurity consulting services",
          "url": url,
          "email": "chinmaysolanki123@gmail.com",
          "telephone": "+919659757000",
          "areaServed": "Worldwide",
          "serviceType": ["AI Development", "Cybersecurity Consulting", "Machine Learning Solutions", "Web Development"],
          "founder": {
            "@type": "Person",
            "name": "Chinmay Solanki"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead; 