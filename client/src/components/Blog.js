import React from 'react';
import { motion } from 'framer-motion';

const posts = [
  {
    title: 'How I Built an AI-Powered ATM Security System',
    date: '2024-04-10',
    summary: 'A deep dive into the design, challenges, and deployment of a real-time surveillance system using YOLOv8 and Raspberry Pi.',
    link: '#',
  },
  {
    title: 'Lessons from Building SentinelMind',
    date: '2024-03-22',
    summary: 'Exploring the architecture and AI techniques behind an autonomous cybersecurity brain for predictive threat hunting.',
    link: '#',
  },
  {
    title: 'My Journey into Ethical Hacking',
    date: '2024-02-15',
    summary: 'Reflections and tips from my experience learning penetration testing and bug hunting as a student.',
    link: '#',
  },
];

const Blog = () => (
  <section className="relative w-full min-h-screen mx-auto">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-center"
      >
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Blog
        </h2>
      </motion.div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        {posts.map((post, idx) => (
          <motion.div
            key={post.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="bg-tertiary p-8 rounded-2xl shadow-card flex flex-col justify-between"
          >
            <div>
              <h3 className="text-white font-bold text-[22px] mb-2">{post.title}</h3>
              <p className="text-secondary text-[14px] mb-4">{post.date}</p>
              <p className="text-white text-[16px] mb-6">{post.summary}</p>
            </div>
            <a
              href={post.link}
              className="mt-auto px-4 py-2 bg-[#915EFF] text-white rounded-lg font-bold shadow-md hover:bg-[#7a4fdc] transition-colors w-fit"
            >
              Read More
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Blog; 