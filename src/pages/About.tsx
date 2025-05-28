
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const timelineItems = [
    {
      year: "2023",
      title: "Senior Frontend Developer",
      company: "Tech Company",
      description: "Leading frontend development team, implementing modern React applications with advanced animations and 3D elements."
    },
    {
      year: "2022",
      title: "Frontend Developer",
      company: "Startup Inc",
      description: "Developed responsive web applications using React, TypeScript, and modern CSS frameworks."
    },
    {
      year: "2021",
      title: "Junior Developer",
      company: "Web Agency",
      description: "Started my career building websites and learning modern web development technologies."
    },
    {
      year: "2020",
      title: "Computer Science Graduate",
      company: "University",
      description: "Graduated with a degree in Computer Science, specializing in web technologies and user interface design."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                About Me
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              I'm passionate about creating amazing web experiences that combine beautiful design with cutting-edge technology.
            </motion.p>
          </div>

          {/* Profile Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white mb-6">My Story</h2>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate frontend developer with a love for creating immersive digital experiences. 
                My journey began with a curiosity about how websites work, and it has evolved into a career 
                focused on building beautiful, functional, and accessible web applications.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I specialize in React, TypeScript, and modern CSS frameworks, with a particular interest in 
                animations, 3D graphics, and user experience design. I believe that great software is not 
                just about functionality, but about creating delightful interactions that users remember.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open source 
                projects, or sharing my knowledge through articles and tutorials.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="w-80 h-80 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <div className="w-72 h-72 bg-slate-800 rounded-full flex items-center justify-center">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-4 border-dashed border-purple-400/30 rounded-full"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <h2 className="text-3xl font-bold text-center text-white mb-12">My Journey</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500"></div>
              
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20"
                    >
                      <span className="text-purple-400 font-bold text-lg">{item.year}</span>
                      <h3 className="text-xl font-bold text-white mt-2">{item.title}</h3>
                      <p className="text-purple-300 font-medium">{item.company}</p>
                      <p className="text-gray-300 mt-2">{item.description}</p>
                    </motion.div>
                  </div>
                  
                  {/* Timeline dot */}
                  <motion.div
                    whileHover={{ scale: 1.5 }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900 z-10"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
