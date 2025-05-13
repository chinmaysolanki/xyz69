import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Float, PresentationControls } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('/portfolio_model.glb');
  return <primitive object={scene} scale={2} />;
}

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.from(textRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
    });
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 ref={textRef} className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            Hi, I'm <span className="text-[#915EFF]">Chinmay Solanki</span>
          </h1>
          <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
            I develop AI solutions, secure systems, <br className="sm:block hidden" />
            and innovative applications
          </p>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

      <div className="absolute right-0 w-1/2 h-screen">
        <Canvas>
          <PresentationControls
            global
            rotation={[0.13, 0.1, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
          >
            <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
              <Model />
            </Float>
          </PresentationControls>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero; 