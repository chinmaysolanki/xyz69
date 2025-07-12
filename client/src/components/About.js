import React from 'react';
import { motion } from 'framer-motion';
import GitHubStats from './GitHubStats';

const About = () => {

  const skills = [
    { name: 'Python', level: 95 },
    { name: 'Machine Learning', level: 90 },
    { name: 'Ethical Hacking', level: 88 },
    { name: 'Deep Learning', level: 85 },
    { name: 'Cyber Forensics', level: 85 },
    { name: 'Computer Vision', level: 82 },
    { name: 'React/TypeScript', level: 80 },
    { name: 'Blockchain', level: 75 },
  ];

  return (
    <section className="relative w-full min-h-screen mx-auto py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center"
        >
          <motion.h2 
            className="text-primary-enhanced font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-4xl mx-auto mt-6"
          >
            <p className="text-secondary-enhanced text-[20px] leading-relaxed mb-4">
              Passionate about creating <span className="text-[#a855f7] font-semibold bg-[#a855f7] bg-opacity-10 px-3 py-1 rounded-lg border border-[#a855f7] border-opacity-30">intelligent solutions</span> that make a difference
            </p>
            <p className="text-secondary-enhanced text-[16px] leading-relaxed opacity-90">
              Transforming ideas into reality through <span className="text-[#00d4ff] font-medium">AI innovation</span> • <span className="text-[#ff4757] font-medium">Cybersecurity excellence</span> • <span className="text-[#ffa502] font-medium">Cutting-edge research</span>
            </p>
          </motion.div>
        </motion.div>

                 {/* Achievement Metrics */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="mt-24 mb-20"
         >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: '20+', label: 'Projects Completed', icon: '🚀', color: '#a855f7' },
              { number: '5+', label: 'Technologies Mastered', icon: '⚡', color: '#00d4ff' },
              { number: '2+', label: 'Years Experience', icon: '💡', color: '#ff4757' },
              { number: '100%', label: 'Passion Driven', icon: '🎯', color: '#ffa502' }
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                className="bg-black bg-opacity-20 border border-gray-700 rounded-xl p-6 text-center hover:bg-opacity-30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-[32px] mb-2">{metric.icon}</div>
                <div 
                  className="text-[28px] font-bold mb-1"
                  style={{ color: metric.color }}
                >
                  {metric.number}
                </div>
                <div className="text-secondary-enhanced text-[12px] font-medium">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-32 flex flex-col gap-16 overflow-hidden">
          <div className="flex flex-col md:flex-row gap-16">
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-primary-enhanced font-black md:text-[30px] sm:text-[25px] xs:text-[20px] text-[16px] mb-6">
                Who am I?
              </h3>
              <div className="bg-black bg-opacity-20 border border-gray-700 rounded-xl p-12 hover:bg-opacity-30 transition-all duration-300">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <p className="text-secondary-enhanced text-[17px] max-w-3xl leading-[30px] mb-6">
                    👋 Hey there! I'm <span className="text-[#00d4ff] font-bold bg-[#00d4ff] bg-opacity-10 px-2 py-1 rounded">Chinmay Solanki</span>, a passionate 20-year-old Computer Science student at 
                    <span className="text-[#a855f7] font-bold"> Thapar Institute of Engineering and Technology</span>, specializing in 
                    <span className="text-[#ff4757] font-bold"> Machine Learning, Cybersecurity, and AI applications</span>.
                  </p>
                  <p className="text-secondary-enhanced text-[17px] max-w-3xl leading-[30px] mb-6">
                    🚀 With expertise in <span className="text-[#ffa502] font-bold">Python, Deep Learning, and Ethical Hacking</span>, I focus on 
                    developing innovative solutions that bridge the gap between cutting-edge technology and 
                    real-world security challenges. I believe in <span className="text-[#a855f7] font-semibold italic">learning by building</span>.
                  </p>
                  <p className="text-secondary-enhanced text-[17px] max-w-3xl leading-[30px] mb-6">
                    💡 My projects range from <a href="https://github.com/chinmaysolanki/automated-attendance-system-using-face-recognition" target="_blank" rel="noopener noreferrer" className="text-[#00d4ff] font-bold hover:text-[#00bcd4] underline transition-colors">AI-powered surveillance systems</a> to 
                    <a href="https://github.com/chinmaysolanki/SentinelMind" target="_blank" rel="noopener noreferrer" className="text-[#ff4757] font-bold hover:text-[#ff3742] underline transition-colors"> SentinelMind (autonomous cybersecurity)</a>, demonstrating my ability to integrate 
                    multiple technologies including computer vision, reinforcement learning, and blockchain.
                  </p>
                  <div className="border-t border-gray-600 pt-4 mt-6">
                    <p className="text-secondary-enhanced text-[15px] italic opacity-80">
                      "The intersection of AI and cybersecurity is where the future of digital safety lies. 
                      I'm committed to being at the forefront of this revolution." 
                      <span className="text-[#a855f7] font-semibold">- Chinmay</span>
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-primary-enhanced font-black md:text-[30px] sm:text-[25px] xs:text-[20px] text-[16px] mb-6">
                My Skills
              </h3>
              <div className="bg-black bg-opacity-20 border border-gray-700 rounded-xl p-12 hover:bg-opacity-30 transition-all duration-300">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mb-6"
                >
                  <p className="text-secondary-enhanced text-[15px] mb-6 opacity-90">
                    🎯 My technical arsenal spans across multiple domains, each skill refined through real-world projects and continuous learning.
                  </p>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills.map((skill, index) => {
                    const colors = ['#a855f7', '#00d4ff', '#ff4757', '#ffa502'];
                    const skillColor = colors[index % colors.length];
                    
                    return (
                      <motion.div 
                        key={skill.name} 
                        className="group bg-black bg-opacity-40 border border-gray-600 p-5 rounded-xl hover:bg-opacity-60 transition-all duration-300 cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.03, y: -5 }}
                      >
                        <div className="flex justify-between items-center mb-3">
                          <div className="flex items-center gap-3">
                            <div 
                              className="w-3 h-3 rounded-full shadow-lg"
                              style={{ backgroundColor: skillColor, boxShadow: `0 0 15px ${skillColor}30` }}
                            />
                            <p className="text-primary-enhanced text-[15px] font-bold group-hover:text-white transition-colors">{skill.name}</p>
                          </div>
                          <motion.span 
                            className="text-[13px] font-bold px-2 py-1 rounded-full"
                            style={{ 
                              color: skillColor,
                              backgroundColor: `${skillColor}20`,
                              border: `1px solid ${skillColor}40`
                            }}
                            initial={{ scale: 0.8 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                          <motion.div
                            className="h-3 rounded-full shadow-lg relative"
                            style={{ 
                              background: `linear-gradient(90deg, ${skillColor}, ${skillColor}80)`,
                              boxShadow: `0 0 10px ${skillColor}30`
                            }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.2, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                          >
                            <div 
                              className="absolute top-0 right-0 w-2 h-3 rounded-r-full opacity-80"
                              style={{ backgroundColor: skillColor }}
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Technology Categories */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="mt-8 pt-6 border-t border-gray-600"
                >
                  <h4 className="text-primary-enhanced text-[16px] font-bold mb-4">Technology Stack</h4>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { name: 'TensorFlow', category: 'AI/ML' },
                      { name: 'PyTorch', category: 'AI/ML' },
                      { name: 'OpenCV', category: 'Computer Vision' },
                      { name: 'Kali Linux', category: 'Cybersecurity' },
                      { name: 'Wireshark', category: 'Network Analysis' },
                      { name: 'React', category: 'Frontend' },
                      { name: 'Node.js', category: 'Backend' },
                      { name: 'Docker', category: 'DevOps' }
                    ].map((tech, index) => (
                      <motion.span
                        key={tech.name}
                        className="px-3 py-2 bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 rounded-lg text-[12px] text-secondary-enhanced hover:from-[#a855f7] hover:to-[#00d4ff] hover:text-white transition-all duration-300 cursor-pointer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech.name}
                        <span className="ml-1 opacity-60">• {tech.category}</span>
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="w-full mt-20 mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="bg-black bg-opacity-20 border border-gray-700 rounded-xl p-10">
              <h3 className="text-primary-enhanced font-black text-[28px] mb-8 text-center">
                Interactive Skills Showcase
              </h3>
              
              {/* Skill Orbs/Bubbles */}
              <div className="relative h-[400px] overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-4 p-8">
                  {skills.map((skill, index) => {
                    const colors = ['#a855f7', '#00d4ff', '#ff4757', '#ffa502'];
                    const skillColor = colors[index % colors.length];
                    const size = 60 + (skill.level / 100) * 40; // Size based on skill level
                    
                    return (
                      <motion.div
                        key={skill.name}
                        className="relative group cursor-pointer"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: index * 0.15,
                          type: "spring",
                          bounce: 0.4
                        }}
                                                 whileHover={{ 
                           scale: 1.2,
                           zIndex: 10
                         }}
                         animate={{
                           y: [0, -10, 0],
                           rotate: [0, 5, -5, 0],
                           transition: {
                             y: {
                               duration: 3 + index * 0.5,
                               repeat: Infinity,
                               ease: "easeInOut"
                             },
                             rotate: {
                               duration: 4 + index * 0.3,
                               repeat: Infinity,
                               ease: "easeInOut"
                             }
                           }
                         }}
                        style={{
                          width: `${size}px`,
                          height: `${size}px`
                        }}
                      >
                        {/* Glowing orb */}
                        <div
                          className="w-full h-full rounded-full flex items-center justify-center text-white font-bold text-[10px] shadow-2xl border-2 relative overflow-hidden"
                          style={{
                            backgroundColor: `${skillColor}40`,
                            borderColor: skillColor,
                            boxShadow: `0 0 30px ${skillColor}60, inset 0 0 20px ${skillColor}20`
                          }}
                        >
                          {/* Animated background gradient */}
                          <div 
                            className="absolute inset-0 rounded-full opacity-30"
                            style={{
                              background: `conic-gradient(from 0deg, ${skillColor}, transparent, ${skillColor})`
                            }}
                          />
                          
                          {/* Skill percentage in center */}
                          <div className="relative z-10 text-center">
                            <div className="text-[14px] font-bold" style={{ color: skillColor }}>
                              {skill.level}%
                            </div>
                          </div>
                          
                          {/* Hover tooltip */}
                          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-90 text-white px-3 py-1 rounded-lg text-[12px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20">
                            {skill.name}
                          </div>
                        </div>
                        
                        {/* Pulsing ring effect */}
                        <div 
                          className="absolute inset-0 rounded-full animate-ping opacity-20"
                          style={{
                            backgroundColor: skillColor,
                            animationDuration: `${2 + index * 0.3}s`
                          }}
                        />
                      </motion.div>
                    );
                  })}
                </div>
                
                {/* Background floating particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(15)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full opacity-20"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.2, 0.5, 0.2]
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Interactive Legend */}
              <motion.div
                className="mt-6 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <p className="text-secondary-enhanced text-[14px] mb-4">
                  💡 Hover over the skill orbs to see details • Size represents proficiency level
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {['Beginner', 'Intermediate', 'Advanced', 'Expert'].map((level, index) => (
                    <div key={level} className="flex items-center gap-2">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{
                          backgroundColor: ['#ffa502', '#ff4757', '#00d4ff', '#a855f7'][index],
                          opacity: 0.7
                        }}
                      />
                      <span className="text-secondary-enhanced text-[12px]">{level}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Professional Journey Timeline */}
          <motion.div 
            className="mt-32 mb-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="text-center mb-16">
              <h3 className="text-primary-enhanced font-black text-[32px] mb-4">
                My Journey
              </h3>
              <p className="text-secondary-enhanced text-[16px] max-w-2xl mx-auto">
                Every expert was once a beginner. Here's my path of continuous learning and growth.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    year: '2022',
                    title: 'Started My Journey',
                    description: 'Began Computer Science at Thapar University. First encounter with programming and cybersecurity concepts.',
                    icon: '🎓',
                    color: '#a855f7'
                  },
                  {
                    year: '2023',
                    title: 'Deep Dive into AI',
                    description: 'Explored machine learning and deep learning. Built first AI projects and participated in hackathons.',
                    icon: '🤖',
                    color: '#00d4ff'
                  },
                  {
                    year: '2024',
                    title: 'Advanced Expertise',
                    description: 'Mastered cybersecurity tools, created SentinelMind AI system, and actively contributing to open-source projects on GitHub.',
                    icon: '🚀',
                    color: '#ff4757'
                  }
                ].map((milestone, index) => (
                                                       <motion.div
                    key={milestone.year}
                    className="bg-black bg-opacity-20 border border-gray-700 rounded-xl p-8 text-center hover:bg-opacity-30 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ y: -10, scale: 1.03 }}
                  >
                    <div className="flex justify-center mb-4">
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center text-[24px] shadow-lg group-hover:shadow-xl transition-all duration-300"
                        style={{ 
                          backgroundColor: `${milestone.color}20`,
                          border: `2px solid ${milestone.color}`,
                          boxShadow: `0 0 20px ${milestone.color}30`
                        }}
                      >
                        {milestone.icon}
                      </div>
                    </div>
                    <div 
                      className="text-[20px] font-bold mb-2"
                      style={{ color: milestone.color }}
                    >
                      {milestone.year}
                    </div>
                    <h4 className="text-primary-enhanced text-[18px] font-bold mb-3">
                      {milestone.title}
                    </h4>
                    <p className="text-secondary-enhanced text-[14px] leading-relaxed">
                      {milestone.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-32 mb-24 text-center"
          >
            <div className="bg-gradient-to-r from-[#a855f7] via-[#00d4ff] to-[#ff4757] p-[1px] rounded-2xl max-w-4xl mx-auto">
              <div className="bg-[#0f0f23] rounded-2xl p-12">
                <h3 className="text-primary-enhanced font-bold text-[28px] mb-4">
                  Let's Build Something Amazing Together
                </h3>
                <p className="text-secondary-enhanced text-[16px] mb-6 max-w-2xl mx-auto">
                  Whether it's AI innovation, cybersecurity solutions, or cutting-edge web applications, 
                  I'm always excited to collaborate on projects that push the boundaries of technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    className="px-8 py-3 bg-gradient-to-r from-[#a855f7] to-[#00d4ff] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get In Touch
                  </motion.button>
                  <motion.a
                    href="https://www.linkedin.com/in/chinmay-solanki-27bb22276/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-gradient-to-r from-[#0077b5] to-[#005885] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Connect on LinkedIn
                  </motion.a>
                  <motion.a
                    href="https://github.com/chinmaysolanki"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-gradient-to-r from-[#ff4757] to-[#ffa502] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View GitHub
                  </motion.a>
                  <motion.button
                    className="px-8 py-3 border-2 border-[#a855f7] text-[#a855f7] font-bold rounded-lg hover:bg-[#a855f7] hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View Projects
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* GitHub Stats Integration */}
          <GitHubStats />
        </div>
      </div>
    </section>
  );
};

export default About; 