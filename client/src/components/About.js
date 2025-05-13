import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import { gsap } from 'gsap';

const About = () => {
  const containerRef = useRef(null);

  const skills = [
    { name: 'Machine Learning', level: 90 },
    { name: 'Python', level: 95 },
    { name: 'Deep Learning', level: 85 },
    { name: 'Ethical Hacking', level: 88 },
    { name: 'Cyber Forensics', level: 85 },
    { name: 'Full Stack', level: 80 },
  ];

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
            About Me
          </h2>
        </motion.div>

        <div className="mt-20 flex flex-col gap-10 overflow-hidden">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex-1">
              <h3 className="text-white font-black md:text-[30px] sm:text-[25px] xs:text-[20px] text-[16px]">
                Who am I?
              </h3>
              <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
                I'm Chinmay Solanki, an enthusiastic 20-year-old pursuing a career in Machine Learning, 
                Cyber Forensics, and Ethical Hacking. Currently studying at Thapar Institute of Engineering 
                and Technology, I'm passionate about applying theoretical knowledge to real-world challenges.
              </p>
            </div>

            <div className="flex-1">
              <h3 className="text-white font-black md:text-[30px] sm:text-[25px] xs:text-[20px] text-[16px]">
                My Skills
              </h3>
              <div className="mt-4 flex flex-wrap gap-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="bg-tertiary p-3 rounded-lg">
                    <p className="text-white text-[14px]">{skill.name}</p>
                    <div className="w-full bg-black-200 rounded-full h-2.5 mt-2">
                      <div
                        className="bg-[#915EFF] h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="h-[400px] w-full">
            <Canvas>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              {skills.map((skill, index) => (
                <Float
                  key={skill.name}
                  speed={1.5}
                  rotationIntensity={1}
                  floatIntensity={2}
                  position={[
                    Math.cos(index * (Math.PI * 2) / skills.length) * 3,
                    Math.sin(index * (Math.PI * 2) / skills.length) * 3,
                    0
                  ]}
                >
                  <Text
                    color="#915EFF"
                    fontSize={0.5}
                    maxWidth={200}
                    lineHeight={1}
                    letterSpacing={0.02}
                    textAlign="center"
                    font="https://fonts.gstatic.com/s/raleway/v14/1Ptsg8zYS_SKggPNwC4Q4FqL_KWxWMT.woff2"
                  >
                    {skill.name}
                  </Text>
                </Float>
              ))}
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 