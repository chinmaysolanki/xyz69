import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('');

  const loadingTexts = useMemo(() => [
    'Initializing AI modules...',
    'Securing connections...',
    'Loading project data...',
    'Optimizing performance...',
    'Finalizing setup...',
    'Ready to showcase!'
  ], []);

  useEffect(() => {
    setCurrentText(loadingTexts[0]);
    
    // Simplified loading simulation
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 2000);

    // Fallback timer in case something goes wrong
    const fallbackTimer = setTimeout(() => {
      onLoadingComplete();
    }, 4000);

    // Progress animation
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2;
        if (newProgress >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return newProgress;
      });
    }, 40);

    // Text updates
    const textTimer = setInterval(() => {
      setCurrentText(prev => {
        const currentIndex = loadingTexts.indexOf(prev);
        const nextIndex = (currentIndex + 1) % loadingTexts.length;
        return loadingTexts[nextIndex];
      });
    }, 350);

    return () => {
      clearTimeout(timer);
      clearTimeout(fallbackTimer);
      clearInterval(progressTimer);
      clearInterval(textTimer);
    };
  }, [onLoadingComplete, loadingTexts]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-gradient-to-br from-[#0f0f23] via-[#1a1a3e] to-[#0f0f23] flex items-center justify-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center max-w-md mx-auto px-6">
          {/* Logo/Name Animation */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12"
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-[#a855f7] to-[#00d4ff] rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30">
              <span className="text-white text-[32px] font-bold">C</span>
            </div>
            <h1 className="text-primary-enhanced text-[28px] font-bold mb-2">
              Chinmay Solanki
            </h1>
            <p className="text-secondary-enhanced text-[14px]">
              AI Engineer • Cybersecurity Expert
            </p>
          </motion.div>

          {/* Loading Bar Container */}
          <div className="mb-8">
            <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#a855f7] via-[#00d4ff] to-[#ff4757] rounded-full shadow-lg shadow-purple-500/30"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "easeOut" }}
              />
            </div>
            
            {/* Progress Percentage */}
            <motion.div
              className="mt-4 text-primary-enhanced font-mono text-[18px] font-bold"
              key={progress}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              {Math.floor(progress)}%
            </motion.div>
          </div>

          {/* Loading Text */}
          <motion.div
            className="mb-8 h-6"
            key={currentText}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-secondary-enhanced text-[14px] font-mono">
              {currentText}
            </p>
          </motion.div>

          {/* Tech Icons Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex justify-center gap-4 mb-8"
          >
            {['🤖', '🔐', '⚡', '🚀'].map((icon, index) => (
              <motion.div
                key={index}
                className="text-[24px]"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                {icon}
              </motion.div>
            ))}
          </motion.div>

          {/* Skip Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="text-center"
          >
            <button
              onClick={onLoadingComplete}
              className="text-secondary-enhanced text-[12px] hover:text-primary-enhanced transition-colors duration-300 underline"
            >
              Skip Loading
            </button>
          </motion.div>

          {/* Binary Rain Effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-[#a855f7] text-[12px] font-mono opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: '-20px'
                }}
                animate={{
                  y: window.innerHeight + 40,
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              >
                {Math.random() > 0.5 ? '1' : '0'}
              </motion.div>
            ))}
          </div>


        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen; 