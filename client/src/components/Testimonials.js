import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Dr. A. Sharma',
    title: 'Professor, Thapar Institute',
    feedback: 'Chinmay is a highly motivated student with a passion for AI and cybersecurity. His projects are innovative and impactful.',
  },
  {
    name: 'Priya Verma',
    title: 'Teammate, Digital Gatekeeper',
    feedback: 'Working with Chinmay was inspiring. He led the technical team with clarity and delivered a robust solution for ATM security.',
  },
  {
    name: 'Rohit Singh',
    title: 'Mentor, SentinelMind',
    feedback: 'Chinmay combines technical depth with creativity. His work on autonomous threat detection is truly next-level.',
  },
];

const Testimonials = () => (
  <section className="relative w-full min-h-screen mx-auto">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-center"
      >
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Testimonials
        </h2>
      </motion.div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        {testimonials.map((t, idx) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="bg-tertiary p-8 rounded-2xl shadow-card flex flex-col justify-between"
          >
            <div>
              <p className="text-white text-[16px] mb-6 italic">"{t.feedback}"</p>
              <h3 className="text-[#915EFF] font-bold text-[18px]">{t.name}</h3>
              <p className="text-secondary text-[14px]">{t.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials; 