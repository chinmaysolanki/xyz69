import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { useGLTF, PresentationControls, Float } from '@react-three/drei';

const projects = [
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
  const { scene } = useGLTF('/project_model.glb');
  return (
    <primitive 
      object={scene} 
      scale={2} 
      position={[0, 0, 0]}
      rotation={[0, index * Math.PI / 2, 0]}
    />
  );
}

const Projects = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center"
        >
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            My Projects
          </h2>
        </motion.div>

        <div className="mt-20 flex flex-col gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col md:flex-row gap-10 bg-tertiary p-8 rounded-2xl"
            >
              <div className="flex-1">
                <h3 className="text-white font-black md:text-[30px] sm:text-[25px] xs:text-[20px] text-[16px]">
                  {project.title}
                </h3>
                <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
                  {project.description}
                </p>
                <ul className="mt-4 list-disc list-inside text-secondary">
                  {project.points.map((point, i) => (
                    <li key={i} className="text-[17px] leading-[30px]">{point}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[14px] text-[#915EFF] border border-[#915EFF] px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-1 h-[300px]">
                <Canvas>
                  <PresentationControls
                    global
                    rotation={[0.13, 0.1, 0]}
                    polar={[-Math.PI / 4, Math.PI / 4]}
                    azimuth={[-Math.PI / 4, Math.PI / 4]}
                  >
                    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
                      <ProjectModel index={index} />
                    </Float>
                  </PresentationControls>
                </Canvas>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 