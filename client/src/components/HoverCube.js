import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import MatrixRain from './MatrixRain';

const HoverCube = ({ 
  children, 
  cubeSize = 300,
  rainColor = '#00ffcc',
  className = '',
  disabled = false 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const cubeVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateX: -15,
      rotateY: 15,
      z: -100,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      z: 0,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1], // Custom cubic-bezier for smooth entry
      }
    }
  };

  const containerVariants = {
    rest: {
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className={`relative ${className}`}
      variants={containerVariants}
      initial="rest"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ 
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {/* Original content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Matrix Cube Overlay */}
      {!disabled && (
        <motion.div
          className="absolute inset-0 pointer-events-none z-20"
          variants={cubeVariants}
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Cube Container */}
          <div 
            className="relative w-full h-full"
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Front Face */}
            <div 
              className="absolute inset-0 border border-citadel-accent-cyan bg-citadel-bg-primary bg-opacity-10"
              style={{
                transform: `translateZ(${cubeSize / 6}px)`,
                boxShadow: `
                  0 0 20px var(--citadel-glow-cyan),
                  inset 0 0 20px rgba(0, 255, 204, 0.1)
                `,
              }}
            >
              {/* Matrix Rain disabled for less visual noise */}
              {/* <MatrixRain 
                width={cubeSize} 
                height={cubeSize * 0.67} 
                color={rainColor}
                speed={1.5}
                density={0.9}
              /> */}
            </div>

            {/* Top Face */}
            <div 
              className="absolute inset-0 border border-citadel-accent-blue bg-citadel-bg-secondary bg-opacity-15"
              style={{
                transform: `rotateX(90deg) translateZ(${cubeSize / 6}px)`,
                transformOrigin: 'top',
                boxShadow: `0 0 15px var(--citadel-glow-blue)`,
              }}
            >
              {/* <MatrixRain 
                width={cubeSize} 
                height={cubeSize * 0.67} 
                color={rainColor}
                speed={0.8}
                density={0.5}
              /> */}
            </div>

            {/* Right Face */}
            <div 
              className="absolute inset-0 border border-citadel-accent-purple bg-citadel-bg-primary bg-opacity-8"
              style={{
                transform: `rotateY(90deg) translateZ(${cubeSize / 6}px)`,
                transformOrigin: 'right',
                boxShadow: `0 0 15px var(--citadel-glow-purple)`,
              }}
            >
              {/* <MatrixRain 
                width={cubeSize} 
                height={cubeSize * 0.67} 
                color="#aa44ff"
                speed={1.2}
                density={0.6}
              /> */}
            </div>

            {/* Holographic Grid Lines */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Vertical lines */}
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={`v-${i}`}
                  className="absolute top-0 bottom-0 w-px bg-citadel-accent-cyan opacity-30"
                  style={{
                    left: `${(i + 1) * 16.67}%`,
                    boxShadow: `0 0 4px var(--citadel-glow-cyan)`,
                    animation: `pulse 2s ease-in-out infinite alternate`,
                    animationDelay: `${i * 0.1}s`
                  }}
                />
              ))}
              
              {/* Horizontal lines */}
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={`h-${i}`}
                  className="absolute left-0 right-0 h-px bg-citadel-accent-blue opacity-30"
                  style={{
                    top: `${(i + 1) * 20}%`,
                    boxShadow: `0 0 4px var(--citadel-glow-blue)`,
                    animation: `pulse 2.5s ease-in-out infinite alternate`,
                    animationDelay: `${i * 0.15}s`
                  }}
                />
              ))}
            </div>

            {/* Corner Indicators */}
            <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-citadel-accent-cyan opacity-60" />
            <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-citadel-accent-cyan opacity-60" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-citadel-accent-cyan opacity-60" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-citadel-accent-cyan opacity-60" />

            {/* Data Stream Indicators */}
            <div className="absolute top-2 right-2 flex space-x-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-citadel-accent-cyan animate-pulse"
                  style={{
                    animationDelay: `${i * 0.2}s`,
                    boxShadow: `0 0 6px var(--citadel-glow-cyan)`
                  }}
                />
              ))}
            </div>

            {/* Security Status */}
            <div className="absolute bottom-2 left-2 text-xs text-citadel-accent-cyan font-mono opacity-80">
              SECURE
            </div>

            {/* Scanning Line */}
            <motion.div
              className="absolute left-0 right-0 h-px bg-citadel-accent-cyan opacity-60"
              animate={{
                top: ['0%', '100%', '0%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                boxShadow: `0 0 10px var(--citadel-glow-cyan)`
              }}
            />
          </div>
        </motion.div>
      )}

      {/* Ambient glow effect */}
      {!disabled && isHovered && (
        <motion.div
          className="absolute -inset-4 rounded-lg pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            background: `radial-gradient(circle, var(--citadel-glow-cyan) 0%, transparent 70%)`,
                            opacity: 0.3,
            zIndex: 5
          }}
        />
      )}
    </motion.div>
  );
};

export default HoverCube; 