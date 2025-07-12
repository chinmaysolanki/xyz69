import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Dr. Anil Sharma',
    title: 'Professor of Computer Science, Thapar Institute',
    feedback: 'Chinmay consistently demonstrates exceptional problem-solving abilities and deep understanding of AI concepts. His project on facial recognition attendance shows remarkable technical maturity for his age.',
    rating: 5,
    avatar: '👨‍🏫',
    highlight: 'Technical Excellence'
  },
  {
    name: 'Priya Verma',
    title: 'Team Lead, Digital Gatekeeper Project',
    feedback: 'Working with Chinmay on the ATM security system was inspiring. He not only led the technical implementation but also brought innovative ideas that enhanced our solution significantly.',
    rating: 5,
    avatar: '👩‍💻',
    highlight: 'Leadership Skills'
  },
  {
    name: 'Rohit Singh',
    title: 'Senior Developer & Mentor',
    feedback: 'Chinmay combines technical depth with creative problem-solving. His autonomous threat detection work in SentinelMind project showcases his ability to work with cutting-edge technologies.',
    rating: 5,
    avatar: '👨‍💼',
    highlight: 'Innovation'
  },
  {
    name: 'Anisha Gupta',
    title: 'Cybersecurity Researcher',
    feedback: 'I had the opportunity to review Chinmay\'s work on ethical hacking methodologies. His approach is methodical, thorough, and demonstrates strong ethical foundations.',
    rating: 5,
    avatar: '🔐',
    highlight: 'Security Expertise'
  },
  {
    name: 'Vikram Patel',
    title: 'ML Engineer, Tech Corp',
    feedback: 'Chinmay\'s understanding of machine learning concepts and practical implementation is impressive. His ability to optimize neural networks shows great potential.',
    rating: 5,
    avatar: '🤖',
    highlight: 'ML Proficiency'
  },
  {
    name: 'Sarah Johnson',
    title: 'Open Source Contributor',
    feedback: 'Chinmay\'s contributions to various projects show his commitment to learning and sharing knowledge. His code quality and documentation are exemplary.',
    rating: 5,
    avatar: '🌟',
    highlight: 'Open Source'
  }
];

const Testimonials = () => {
  const StarRating = ({ rating }) => (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <span 
          key={i} 
          className={`text-[16px] ${i < rating ? 'text-[#ffa502]' : 'text-gray-600'}`}
        >
          ⭐
        </span>
      ))}
    </div>
  );

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
            What People Say
          </h2>
          <p className="text-secondary-enhanced text-[18px] max-w-2xl mx-auto mt-4">
            Testimonials from colleagues, mentors, and collaborators
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#a855f7] to-[#00d4ff] rounded-full mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-black bg-opacity-20 border border-gray-700 p-6 rounded-2xl hover:bg-opacity-30 transition-all duration-300 group"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#a855f7] to-[#00d4ff] rounded-full flex items-center justify-center text-[24px]">
                  {testimonial.avatar}
                </div>
                <div className="px-3 py-1 bg-gradient-to-r from-[#a855f7] to-[#00d4ff] rounded-full">
                  <span className="text-white text-[10px] font-semibold">{testimonial.highlight}</span>
                </div>
              </div>

              <StarRating rating={testimonial.rating} />

              <blockquote className="text-secondary-enhanced text-[15px] leading-[24px] mb-6 italic relative">
                <span className="text-[#a855f7] text-[30px] absolute -top-2 -left-2 font-serif">"</span>
                <span className="pl-4">{testimonial.feedback}</span>
                <span className="text-[#00d4ff] text-[30px] absolute -bottom-6 -right-2 font-serif">"</span>
              </blockquote>

              <div className="pt-4 border-t border-gray-600">
                <h3 className="text-primary-enhanced font-bold text-[16px] mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-[#00d4ff] text-[13px] font-medium">
                  {testimonial.title}
                </p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-[#a855f7] to-[#00d4ff] rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-black bg-opacity-20 border border-gray-700 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-primary-enhanced font-bold text-[24px] mb-4">
              Ready to work together?
            </h3>
            <p className="text-secondary-enhanced text-[16px] mb-6">
              Let's create something amazing and build lasting professional relationships.
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-[#a855f7] to-[#00d4ff] text-white font-bold py-3 px-8 rounded-lg shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 