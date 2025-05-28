
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with React, TypeScript, and Stripe integration. Features include real-time inventory, user authentication, and responsive design.",
      image: "/placeholder.svg",
      tags: ["React", "TypeScript", "Stripe", "Tailwind"],
      category: "web",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "3D Portfolio Website",
      description: "An interactive portfolio website featuring Three.js animations, particle effects, and smooth page transitions using Framer Motion.",
      image: "/placeholder.svg",
      tags: ["React", "Three.js", "Framer Motion", "WebGL"],
      category: "3d",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      category: "web",
      github: "#",
      demo: "#"
    },
    {
      id: 4,
      title: "Weather Visualization",
      description: "Interactive weather data visualization using D3.js and real-time APIs. Features include animated charts and geographic mapping.",
      image: "/placeholder.svg",
      tags: ["React", "D3.js", "APIs", "Data Viz"],
      category: "data",
      github: "#",
      demo: "#"
    },
    {
      id: 5,
      title: "AR Product Viewer",
      description: "Augmented reality product viewer using WebXR APIs, allowing customers to visualize products in their space before purchasing.",
      image: "/placeholder.svg",
      tags: ["WebXR", "Three.js", "AR", "JavaScript"],
      category: "3d",
      github: "#",
      demo: "#"
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with real-time data visualization, automated reporting, and engagement metrics.",
      image: "/placeholder.svg",
      tags: ["React", "Chart.js", "APIs", "Analytics"],
      category: "data",
      github: "#",
      demo: "#"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: '3d', name: '3D & Interactive' },
    { id: 'data', name: 'Data Visualization' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                My Projects
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              A collection of projects that showcase my skills in frontend development, 3D graphics, and interactive design.
            </motion.p>
          </div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-purple-500/20'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Overlay Buttons */}
                    <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-purple-500/50 transition-colors"
                      >
                        <Github size={20} />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-purple-500/50 transition-colors"
                      >
                        <ArrowRight size={20} />
                      </motion.a>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
