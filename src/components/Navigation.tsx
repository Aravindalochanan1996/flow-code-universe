
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Code, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Resume', path: '/resume' },
    { name: 'Articles', path: '/articles' },
    { name: 'Profiles', path: '/profiles' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-purple-500/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2"
            >
              <Code className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link key={item.name} to={item.path}>
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'text-purple-400'
                        : 'text-gray-300 hover:text-purple-400'
                    }`}
                  >
                    {item.name}
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.span>
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-purple-400 p-2"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-black/40 backdrop-blur-lg"
        >
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path} onClick={() => setIsOpen(false)}>
                <motion.div
                  whileHover={{ x: 10 }}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-purple-400 bg-purple-500/10'
                      : 'text-gray-300 hover:text-purple-400'
                  }`}
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Navigation;
