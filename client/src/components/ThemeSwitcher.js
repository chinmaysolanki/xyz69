import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const ThemeSwitcher = () => {
  const { toggleTheme, isTransitioning, isDark } = useTheme();

  return (
    <motion.div
      className="fixed top-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      <motion.button
        onClick={toggleTheme}
        disabled={isTransitioning}
        className={`relative w-16 h-8 rounded-full p-1 transition-all duration-300 shadow-lg hover:shadow-xl ${
          isDark 
            ? 'bg-gradient-to-r from-indigo-600 to-purple-600' 
            : 'bg-gradient-to-r from-yellow-400 to-orange-500'
        } ${isTransitioning ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
        whileHover={!isTransitioning ? { scale: 1.05 } : {}}
        whileTap={!isTransitioning ? { scale: 0.95 } : {}}
      >
        {/* Background glow effect */}
        <div 
          className={`absolute inset-0 rounded-full transition-all duration-300 ${
            isDark 
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 opacity-50' 
              : 'bg-gradient-to-r from-yellow-400 to-orange-500 opacity-50'
          } -z-10`}
        />
        
        {/* Toggle circle */}
        <motion.div
          className={`relative w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center text-sm ${
            isTransitioning ? 'animate-pulse' : ''
          }`}
          layout
          animate={{
            x: isDark ? 28 : 0,
            rotate: isDark ? 180 : 0
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30
          }}
        >
          <motion.span
            animate={{ rotate: isDark ? -180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isDark ? '🌙' : '☀️'}
          </motion.span>
        </motion.div>

        {/* Stars effect for dark mode */}
        {isDark && (
          <div className="absolute inset-0 overflow-hidden rounded-full">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${10 + Math.random() * 80}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
          </div>
        )}

        {/* Sun rays effect for light mode */}
        {!isDark && (
          <div className="absolute inset-0 overflow-hidden rounded-full">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-0.5 h-2 bg-yellow-200 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transformOrigin: 'center',
                  transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-12px)`
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1
                }}
              />
            ))}
          </div>
        )}
      </motion.button>

      {/* Theme label */}
      <motion.div
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <span className={`text-xs font-medium px-2 py-1 rounded-full transition-colors duration-300 ${
          isDark 
            ? 'text-purple-300 bg-purple-900 bg-opacity-50' 
            : 'text-orange-700 bg-orange-100 bg-opacity-80'
        }`}>
          {isDark ? 'Dark Mode' : 'Light Mode'}
        </span>
      </motion.div>

      {/* Tooltip on hover */}
      <motion.div
        className="absolute -left-20 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
        whileHover={{ opacity: 1 }}
      >
        <div className={`px-3 py-2 rounded-lg text-sm font-medium shadow-lg ${
          isDark 
            ? 'bg-gray-800 text-white border border-gray-600' 
            : 'bg-white text-gray-800 border border-gray-200'
        }`}>
          Switch to {isDark ? 'Light' : 'Dark'} Mode
          <div className={`absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 w-0 h-0 border-l-4 border-y-4 border-y-transparent ${
            isDark ? 'border-l-gray-800' : 'border-l-white'
          }`} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ThemeSwitcher; 