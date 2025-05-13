import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-primary">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-16 h-16 border-4 border-[#915EFF] border-t-transparent rounded-full"
      />
    </div>
  );
};

export default Loading; 