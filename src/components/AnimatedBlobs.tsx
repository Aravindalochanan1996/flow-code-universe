
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBlobs = () => {
  const blobs = [
    {
      size: 'w-72 h-72',
      position: 'top-1/4 left-1/4',
      color: 'from-purple-500/20 to-pink-500/20',
      delay: 0
    },
    {
      size: 'w-96 h-96',
      position: 'top-3/4 right-1/4',
      color: 'from-blue-500/20 to-purple-500/20',
      delay: 2
    },
    {
      size: 'w-80 h-80',
      position: 'bottom-1/4 left-1/2',
      color: 'from-pink-500/20 to-red-500/20',
      delay: 4
    }
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className={`absolute ${blob.size} ${blob.position} bg-gradient-to-r ${blob.color} rounded-full blur-3xl`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            delay: blob.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBlobs;
