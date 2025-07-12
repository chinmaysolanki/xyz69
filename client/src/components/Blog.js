import React from 'react';
import { motion } from 'framer-motion';

const posts = [
  {
    title: 'Building Digital Gatekeeper: AI-Powered ATM Security',
    date: '2024-12-15',
    category: 'AI & Security',
    summary: 'A comprehensive deep dive into designing and deploying a real-time surveillance system using YOLOv8, OpenCV, and Raspberry Pi 5 to detect threats and secure ATM environments.',
    readTime: '8 min read',
    tags: ['YOLOv8', 'Computer Vision', 'Security', 'Raspberry Pi'],
    featured: true,
    gradient: 'from-[#a855f7] to-[#ff4757]'
  },
  {
    title: 'SentinelMind: Autonomous Cybersecurity with AI',
    date: '2024-11-28',
    category: 'Cybersecurity',
    summary: 'Exploring the architecture behind an autonomous cybersecurity brain that combines reinforcement learning, LLMs, and threat intelligence for real-time attack detection.',
    readTime: '12 min read',
    tags: ['BERT', 'Reinforcement Learning', 'LangChain', 'Blockchain'],
    featured: true,
    gradient: 'from-[#00d4ff] to-[#a855f7]'
  },
  {
    title: 'Machine Learning in Computer Vision: Best Practices',
    date: '2024-11-10',
    category: 'Machine Learning',
    summary: 'Key insights and practical tips for implementing robust computer vision systems, from data preprocessing to model optimization and deployment strategies.',
    readTime: '6 min read',
    tags: ['OpenCV', 'Deep Learning', 'Python', 'Model Optimization'],
    featured: false,
    gradient: 'from-[#ffa502] to-[#00d4ff]'
  },
  {
    title: 'Ethical Hacking: A Student\'s Perspective',
    date: '2024-10-22',
    category: 'Cybersecurity',
    summary: 'My journey into ethical hacking, penetration testing methodologies, and lessons learned from bug hunting and security research as a computer science student.',
    readTime: '5 min read',
    tags: ['Ethical Hacking', 'Penetration Testing', 'Security Research'],
    featured: false,
    gradient: 'from-[#ff4757] to-[#ffa502]'
  },
  {
    title: 'The Future of AI in Cybersecurity',
    date: '2024-10-05',
    category: 'AI & Security',
    summary: 'Analyzing emerging trends in AI-powered cybersecurity solutions, from automated threat detection to predictive security analytics and their real-world applications.',
    readTime: '7 min read',
    tags: ['AI', 'Cybersecurity', 'Automation', 'Threat Detection'],
    featured: false,
    gradient: 'from-[#a855f7] to-[#00d4ff]'
  },
  {
    title: 'Building Scalable React Applications',
    date: '2024-09-18',
    category: 'Web Development',
    summary: 'Best practices for structuring and scaling React applications, including state management, component optimization, and performance monitoring techniques.',
    readTime: '9 min read',
    tags: ['React', 'JavaScript', 'Performance', 'Architecture'],
    featured: false,
    gradient: 'from-[#00d4ff] to-[#ffa502]'
  }
];

const Blog = () => {
  const featuredPosts = posts.filter(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <section className="relative w-full min-h-screen mx-auto py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-primary-enhanced font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Latest Insights
          </h2>
          <p className="text-secondary-enhanced text-[18px] max-w-2xl mx-auto mt-4">
            Sharing knowledge about AI, cybersecurity, and technology
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#a855f7] to-[#00d4ff] rounded-full mx-auto mt-6"></div>
        </motion.div>

        {/* Featured Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-primary-enhanced font-bold text-[28px] mb-8 text-center">
            Featured Articles
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group cursor-pointer"
                whileHover={{ y: -5 }}
              >
                <div className="bg-black bg-opacity-20 border border-gray-700 rounded-2xl overflow-hidden hover:bg-opacity-30 transition-all duration-300">
                  <div className={`h-48 bg-gradient-to-r ${post.gradient} p-6 flex items-end relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    <div className="relative z-10">
                      <span className="px-3 py-1 bg-white bg-opacity-20 text-white text-[12px] font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-[12px] font-semibold">
                      FEATURED
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-[14px] text-secondary-enhanced">
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                      <span>•</span>
                      <span className="text-[#00d4ff]">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-primary-enhanced font-bold text-[20px] mb-3 line-clamp-2 group-hover:text-[#00d4ff] transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-secondary-enhanced text-[15px] leading-[24px] mb-4 line-clamp-3">
                      {post.summary}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-[11px] bg-gray-700 text-gray-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-[#a855f7] text-[14px] font-semibold group-hover:text-[#00d4ff] transition-colors">
                        Read Article →
                      </span>
                      <div className="w-8 h-8 bg-gradient-to-r from-[#a855f7] to-[#00d4ff] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-white text-[12px]">📖</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Regular Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-primary-enhanced font-bold text-[24px] mb-8 text-center">
            Recent Articles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                whileHover={{ y: -3 }}
              >
                <div className="bg-black bg-opacity-20 border border-gray-700 rounded-xl p-6 hover:bg-opacity-30 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 text-[11px] bg-gray-700 text-gray-300 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-[12px] text-secondary-enhanced">
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-primary-enhanced font-bold text-[18px] mb-3 line-clamp-2 group-hover:text-[#00d4ff] transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-secondary-enhanced text-[14px] leading-[22px] mb-4 flex-grow line-clamp-3">
                    {post.summary}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-600">
                    <span className="text-[13px] text-gray-400">
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                    <span className="text-[#a855f7] text-[13px] font-semibold group-hover:text-[#00d4ff] transition-colors">
                      Read More →
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-black bg-opacity-20 border border-gray-700 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-primary-enhanced font-bold text-[24px] mb-4">
              Stay Updated
            </h3>
            <p className="text-secondary-enhanced text-[16px] mb-6">
              Get notified when I publish new articles about AI, cybersecurity, and emerging technologies.
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-[#a855f7] to-[#00d4ff] text-white font-bold py-3 px-8 rounded-lg shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-105"
            >
              Subscribe to Updates
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog; 