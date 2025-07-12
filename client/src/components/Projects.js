import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { PresentationControls, Float } from '@react-three/drei';
import HoverCube from './HoverCube';
import apiService from '../services/apiService';

// Fallback data in case backend is not available
const fallbackProjects = [
  {
    title: "Real-Time Facial Recognition Attendance System",
    description: "Implemented a system to capture faces in real-time and mark attendance using ML and Deep Learning algorithms.",
    points: [
      "Developing the recognition engine",
      "Optimizing performance for live video feeds",
      "Integrating it with a backend database"
    ],
    tech: ["Python", "OpenCV", "Deep Learning", "ML"]
  },
  {
    title: "Digital Gatekeeper – ATM Security System",
    description: "Developed an AI-powered real-time surveillance system for ATMs to detect masked individuals, helmets, weapons, and aggressive behavior.",
    points: [
      "Implemented YOLOv8 on Raspberry Pi 5",
      "Integrated audio alerts and ATM access control",
      "Developed web-based dashboard for monitoring"
    ],
    tech: ["Python", "YOLOv8", "Raspberry Pi", "OpenCV", "PyTorch", "Flask"]
  },
  {
    title: "SentinelMind | Autonomous Cybersecurity Brain",
    description: "AI-powered system combining reinforcement learning, LLMs, and threat intelligence for real-time cyber attack detection and response.",
    points: [
      "Implemented BERT-based classifiers and PPO agents",
      "Built Flask REST API and React/TypeScript dashboard",
      "Integrated blockchain-based logging system"
    ],
    tech: ["Python", "BERT", "Reinforcement Learning", "LangChain", "Blockchain"]
  }
];

function ProjectModel({ index }) {
  const colors = ['#00ffcc', '#0088ff', '#aa44ff', '#ff0066'];
  return (
    <mesh rotation={[0, 0, 0]}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial 
        color={colors[index % colors.length]} 
        metalness={0.8} 
        roughness={0.1}
        emissive={colors[index % colors.length]}
        emissiveIntensity={0.3}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

const Projects = () => {
  const [projects, setProjects] = useState(fallbackProjects);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const data = await apiService.getProjects();
        
        // Transform backend data to match component structure
        const transformedProjects = data.map(project => ({
          title: project.title,
          description: project.description,
          points: [
            `Built with ${project.technologies.join(', ')}`,
            `Status: ${project.status}`,
            `Category: ${project.category}`
          ],
          tech: project.technologies,
          githubUrl: project.githubUrl,
          liveUrl: project.liveUrl,
          status: project.status,
          category: project.category
        }));
        
        setProjects(transformedProjects);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
        setError(error.message);
        // Keep fallback data on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="relative w-full min-h-screen mx-auto">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center"
        >
          <h2 className="glow-text-cyan font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            My Projects
          </h2>
          <p className="text-citadel-text-secondary text-[18px] max-w-2xl mx-auto mt-4">
            Innovative solutions at the intersection of <span className="glow-text-blue">AI</span>, <span className="glow-text-red">cybersecurity</span>, and <span className="glow-text-purple">technology</span>
          </p>
          
          {isLoading && (
            <div className="flex items-center justify-center mt-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-citadel-accent-cyan"></div>
              <span className="ml-3 text-citadel-text-secondary">Loading projects from backend...</span>
            </div>
          )}
          
          {error && (
            <div className="mt-8 p-4 bg-red-900 bg-opacity-50 border border-red-700 rounded-lg max-w-md mx-auto">
              <p className="text-red-300 text-sm">Failed to load projects: {error}</p>
              <p className="text-red-300 text-xs mt-2">Showing fallback data</p>
            </div>
          )}
        </motion.div>

        <div className="mt-20 flex flex-col gap-10">
          {projects.map((project, index) => (
            <HoverCube
              key={project.title}
              cubeSize={400}
              rainColor={index % 2 === 0 ? '#00ffcc' : '#aa44ff'}
              className="w-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col md:flex-row gap-10 citadel-card"
              >
              <div className="flex-1">
                <h3 className="glow-text-cyan font-black md:text-[30px] sm:text-[25px] xs:text-[20px] text-[16px] mb-4">
                  {project.title}
                </h3>
                <p className="text-citadel-text-secondary text-[17px] max-w-3xl leading-[30px] mb-6">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="glow-text-blue font-semibold text-[16px] mb-3">Key Features:</h4>
                  <ul className="text-citadel-text-secondary space-y-2">
                    {project.points.map((point, i) => (
                      <li key={i} className="text-[15px] leading-[28px] flex items-start">
                        <span className="glow-text-purple mr-3 text-[18px]">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => {
                    const techClasses = ['holographic text-citadel-accent-cyan border-citadel-accent-cyan', 'holographic text-citadel-accent-blue border-citadel-accent-blue', 'holographic text-citadel-accent-red border-citadel-accent-red', 'holographic text-citadel-accent-purple border-citadel-accent-purple'];
                    const className = techClasses[techIndex % techClasses.length];
                    return (
                      <motion.span
                        key={tech}
                        className={`text-[12px] px-3 py-1 rounded-full border ${className}`}
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    );
                  })}
                </div>
                
                {/* Project Links */}
                {(project.githubUrl || project.liveUrl) && (
                  <div className="flex gap-4 mt-4">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="citadel-button text-sm px-4 py-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Code
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 border-citadel-accent-cyan text-citadel-accent-cyan hover:bg-citadel-accent-cyan hover:text-black font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                )}
              </div>
              <div className="flex-1 h-[300px] citadel-panel overflow-hidden">
                <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                  <ambientLight intensity={0.2} color="#001122" />
                  <pointLight position={[10, 10, 10]} intensity={1} color="#00ffcc" />
                  <pointLight position={[-10, -5, 5]} intensity={0.5} color="#0088ff" />
                  <spotLight
                    position={[0, 10, 0]}
                    angle={0.3}
                    penumbra={1}
                    intensity={1}
                    color="#aa44ff"
                  />
                  <PresentationControls
                    global
                    rotation={[0.13, 0.1, 0]}
                    polar={[-Math.PI / 3, Math.PI / 3]}
                    azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
                    config={{ mass: 2, tension: 400 }}
                    snap={{ mass: 4, tension: 400 }}
                  >
                    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
                      <ProjectModel index={index} />
                    </Float>
                  </PresentationControls>
                </Canvas>
              </div>
              </motion.div>
            </HoverCube>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 