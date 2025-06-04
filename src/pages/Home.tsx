import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Scene3D from "../components/Scene3D";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
            {/* Profile Photo */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center mb-6 sm:mb-8"
            >
              <Avatar className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 border-2 sm:border-4 border-purple-400 shadow-lg shadow-purple-500/25">
                <AvatarImage
                  src="/lovable-uploads/4d533780-39d5-474e-9e34-b3ad5afb3a78.png"
                  alt="Aravindalochanan R"
                  className="object-cover"
                />
                <AvatarFallback className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  AR
                </AvatarFallback>
              </Avatar>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 px-2">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Hello, I'm
              </span>
              <br />
              <span className="text-white break-words">Aravindalochanan R</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              I create beautiful, interactive, and user-friendly web experiences
              using modern technologies
            </p>
          </motion.div>

          {/* 3D Scene */}
          <motion.div
            variants={itemVariants}
            className="mb-8 sm:mb-10 md:mb-12 px-2"
          >
            <div className="h-48 sm:h-64 md:h-80 lg:h-96">
              <Scene3D />
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-14 md:mb-16 px-4"
          >
            <Link to="/projects" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 text-sm sm:text-base"
              >
                View My Projects
              </motion.button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300 text-sm sm:text-base"
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-4 sm:space-x-6 mb-12 sm:mb-14 md:mb-16 px-4"
          >
            {[
              {
                icon: Github,
                href: "https://github.com/Aravindalochanan1996",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "www.linkedin.com/in/aravindalochanan-ramanujam",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:lochanan1996@gmail.com",
                label: "Email",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank" // Open in new tab
                rel="noopener noreferrer" // Security best practice
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-full text-purple-400 hover:text-white hover:bg-purple-500/20 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-purple-400"
            >
              <span className="text-xs sm:text-sm mb-2">Scroll Down</span>
              <ArrowDown size={16} className="sm:w-5 sm:h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
