import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import HoverCube from './HoverCube';
import apiService from '../services/apiService';

const Hero = () => {
  const textRef = useRef(null);
  const [profileData, setProfileData] = useState(null);
  const [statsData, setStatsData] = useState(null);
  const [skillsData, setSkillsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    gsap.from(textRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
    });

    // Fetch data from backend
    const fetchData = async () => {
      try {
        const [profile, stats, skills] = await Promise.all([
          apiService.getProfile(),
          apiService.getStats(),
          apiService.getSkills()
        ]);
        
        setProfileData(profile);
        setStatsData(stats);
        setSkillsData(skills);
      } catch (error) {
        console.error('Failed to fetch hero data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start">
        <div className="flex-1 flex lg:flex-row flex-col gap-10">
          <div className="flex-1">
          <h1 ref={textRef} className="font-black glow-text-cyan lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            Hi, I'm <span className="glow-text-blue font-black">
              {profileData?.name || 'Chinmay Solanki'}
            </span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12"
          >
            <p className="glow-text-cyan font-medium lg:text-[28px] sm:text-[24px] xs:text-[20px] text-[18px] lg:leading-[44px] sm:leading-[36px] leading-[32px]">
              <span className="glow-text-blue font-semibold">
                {profileData?.title || 'AI Engineer'}
              </span> 
              <span className="text-gray-400 mx-3">•</span> 
              <span className="glow-text-red font-semibold">Cybersecurity Expert</span> 
              <span className="text-gray-400 mx-3">•</span> 
              <span className="glow-text-purple font-semibold">Full Stack Developer</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 mb-4"
          >
            <p className="text-citadel-text-secondary text-[20px] leading-[36px] max-w-2xl mb-6">
              {profileData?.bio || 'Crafting intelligent solutions at the intersection of Machine Learning, Cybersecurity, and Innovation.'}
            </p>
            <p className="text-citadel-text-secondary text-[18px] leading-[32px] max-w-2xl">
              Building the future, one line of code at a time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-16 mb-8"
          >
            <div className="flex flex-wrap gap-6">
              <a
                href="#projects"
                className="citadel-button"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border-2 border-citadel-accent-cyan text-citadel-accent-cyan hover:bg-citadel-accent-cyan hover:text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-citadel-glow-cyan holographic"
              >
                Get In Touch
              </a>
            </div>
            
            <div className="mt-6">
              <a
                href="/Chinmay_Solanki_Resume.pdf"
                download
                className="bg-gradient-to-r from-citadel-accent-blue to-citadel-accent-purple text-white font-bold py-4 px-8 rounded-lg shadow-lg shadow-citadel-glow-blue transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-citadel-glow-purple citadel-button"
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="mt-16 pt-8 border-t border-gray-700 border-opacity-30"
          >
            <p className="glow-text-cyan text-[18px] mb-6 font-medium">Connect with me:</p>
            <div className="flex gap-6">
              <a
                href={profileData?.socialLinks?.linkedin || "https://www.linkedin.com/in/chinmay-solanki-27bb22276/"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-citadel-accent-blue hover:bg-citadel-accent-cyan flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg shadow-citadel-glow-blue hover:shadow-citadel-glow-cyan citadel-panel"
                title="Connect with me on LinkedIn"
              >
                <span className="text-black font-bold text-[16px]">LI</span>
              </a>
              <a
                href={profileData?.socialLinks?.github || "https://github.com/chinmaysolanki"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-citadel-accent-red hover:bg-citadel-accent-purple flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg shadow-citadel-glow-red hover:shadow-citadel-glow-purple citadel-panel"
              >
                <span className="text-white font-bold text-[16px]">GH</span>
              </a>
              <a
                href={`mailto:${profileData?.email || "chinmaysolanki123@gmail.com"}`}
                className="w-12 h-12 rounded-full bg-citadel-accent-cyan hover:bg-citadel-accent-blue flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg shadow-citadel-glow-cyan hover:shadow-citadel-glow-blue citadel-panel"
                title="Send me an email"
              >
                <span className="text-black font-bold text-[16px]">@</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side Panel with Stats and Skills */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="flex-1 lg:block hidden"
        >
          <HoverCube cubeSize={350} rainColor="#00ffcc" className="w-full">
            <div className="citadel-panel p-6 h-fit">
            <h3 className="glow-text-cyan text-[24px] font-bold mb-6">Quick Stats</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center data-stream">
                <span className="text-citadel-text-secondary">Projects Completed</span>
                <span className="glow-text-blue font-bold text-[20px]">
                  {isLoading ? '...' : `${statsData?.projectsCompleted || 15}+`}
                </span>
              </div>
              <div className="flex justify-between items-center data-stream">
                <span className="text-citadel-text-secondary">AI Models Trained</span>
                <span className="glow-text-red font-bold text-[20px]">
                  {isLoading ? '...' : `${statsData?.aiModelsTrained || 25}+`}
                </span>
              </div>
              <div className="flex justify-between items-center data-stream">
                <span className="text-citadel-text-secondary">Years Experience</span>
                <span className="glow-text-cyan font-bold text-[20px]">
                  {isLoading ? '...' : `${statsData?.yearsExperience || 3}+`}
                </span>
              </div>
              <div className="flex justify-between items-center data-stream">
                <span className="text-citadel-text-secondary">Lines of Code</span>
                <span className="glow-text-purple font-bold text-[20px]">
                  {isLoading ? '...' : `${statsData?.linesOfCode ? (statsData.linesOfCode / 1000).toFixed(0) + 'k' : '150k'}+`}
                </span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="glow-text-blue text-[18px] font-semibold mb-4">Current Focus</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-citadel-accent-purple animate-pulse shadow-lg shadow-citadel-glow-purple"></div>
                  <span className="text-citadel-text-secondary text-[14px]">Autonomous AI Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-citadel-accent-red animate-pulse shadow-lg shadow-citadel-glow-red"></div>
                  <span className="text-citadel-text-secondary text-[14px]">Advanced Threat Detection</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-citadel-accent-cyan animate-pulse shadow-lg shadow-citadel-glow-cyan"></div>
                  <span className="text-citadel-text-secondary text-[14px]">Neural Network Optimization</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="glow-text-purple text-[18px] font-semibold mb-4">Featured Tech</h4>
              <div className="flex flex-wrap gap-2">
                {isLoading ? (
                  <span className="text-citadel-text-secondary">Loading...</span>
                ) : (
                  skillsData.slice(0, 6).map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1 text-[12px] holographic text-citadel-accent-cyan rounded-full border border-citadel-accent-cyan"
                    >
                      {skill.name}
                    </span>
                  ))
                )}
              </div>
            </div>
          </div>
          </HoverCube>
        </motion.div>
      </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-citadel-accent-cyan flex justify-center items-start p-2 shadow-lg shadow-citadel-glow-cyan hover:shadow-citadel-glow-blue transition-all duration-300">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-citadel-accent-cyan mb-1 shadow-lg shadow-citadel-glow-cyan"
            />
          </div>
        </a>
      </div>



    </section>
  );
};

export default Hero; 