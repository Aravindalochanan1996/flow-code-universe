
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Book } from 'lucide-react';

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "Building Interactive 3D Experiences with Three.js and React",
      excerpt: "Learn how to create immersive 3D web experiences using Three.js, React Three Fiber, and modern web technologies.",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["Three.js", "React", "3D", "WebGL"],
      featured: true
    },
    {
      id: 2,
      title: "Advanced Animation Techniques with Framer Motion",
      excerpt: "Discover professional animation patterns and techniques to make your React applications feel alive and engaging.",
      date: "2024-01-08",
      readTime: "6 min read",
      tags: ["Framer Motion", "React", "Animations", "UX"]
    },
    {
      id: 3,
      title: "TypeScript Best Practices for Large React Applications",
      excerpt: "Essential TypeScript patterns and practices for building maintainable and scalable React applications.",
      date: "2024-01-01",
      readTime: "10 min read",
      tags: ["TypeScript", "React", "Best Practices", "Architecture"]
    },
    {
      id: 4,
      title: "Creating Particle Systems with Canvas and WebGL",
      excerpt: "A deep dive into creating stunning particle effects for web applications using Canvas API and WebGL.",
      date: "2023-12-20",
      readTime: "12 min read",
      tags: ["WebGL", "Canvas", "Particles", "Graphics"]
    },
    {
      id: 5,
      title: "Modern CSS Techniques for Interactive Interfaces",
      excerpt: "Exploring cutting-edge CSS features and techniques for creating modern, interactive user interfaces.",
      date: "2023-12-15",
      readTime: "7 min read",
      tags: ["CSS", "UI/UX", "Responsive", "Modern Web"]
    },
    {
      id: 6,
      title: "Performance Optimization in React Applications",
      excerpt: "Comprehensive guide to optimizing React applications for better performance and user experience.",
      date: "2023-12-10",
      readTime: "9 min read",
      tags: ["React", "Performance", "Optimization", "Best Practices"]
    }
  ];

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
                Articles & Tutorials
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Sharing knowledge about frontend development, 3D graphics, animations, and modern web technologies.
            </motion.p>
          </div>

          {/* Featured Article */}
          {articles.filter(article => article.featured).map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-16"
            >
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-8 border border-purple-500/30">
                <div className="flex items-center space-x-2 mb-4">
                  <Book className="text-purple-400" size={20} />
                  <span className="text-purple-400 font-medium">Featured Article</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {article.title}
                </h2>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.filter(article => !article.featured).map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 h-full">
                  {/* Article Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-purple-500/30 to-pink-500/30 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 flex-grow leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mt-auto">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Want to Read More?</h3>
              <p className="text-gray-300 mb-6">
                Follow me on Medium and Dev.to for more articles about frontend development and web technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors"
                >
                  Visit Medium
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all"
                >
                  Visit Dev.to
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Articles;
