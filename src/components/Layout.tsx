
import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import ParticlesBackground from './ParticlesBackground';
import AnimatedBlobs from './AnimatedBlobs';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-x-hidden">
      <ParticlesBackground />
      <AnimatedBlobs />
      <Navigation />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        {children}
      </motion.main>
    </div>
  );
};

export default Layout;
