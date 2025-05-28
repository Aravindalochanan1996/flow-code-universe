
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Code, ArrowRight } from 'lucide-react';

const Profiles = () => {
  const profiles = [
    {
      platform: "GitHub",
      username: "johndeveloper",
      description: "Open source contributions and personal projects",
      stats: {
        repositories: "50+",
        followers: "1.2k",
        contributions: "2k+"
      },
      icon: Github,
      color: "from-gray-600 to-gray-800",
      link: "#"
    },
    {
      platform: "LeetCode",
      username: "john_codes",
      description: "Algorithm and data structure practice",
      stats: {
        problems: "300+",
        rating: "1850",
        rank: "Top 15%"
      },
      icon: Code,
      color: "from-orange-500 to-yellow-500",
      link: "#"
    },
    {
      platform: "Codeforces",
      username: "johndev",
      description: "Competitive programming contests",
      stats: {
        rating: "1400+",
        contests: "50+",
        rank: "Specialist"
      },
      icon: Code,
      color: "from-blue-500 to-purple-500",
      link: "#"
    },
    {
      platform: "HackerRank",
      username: "john_developer",
      description: "Skills assessment and challenges",
      stats: {
        badges: "25+",
        rank: "Gold",
        score: "2000+"
      },
      icon: Code,
      color: "from-green-500 to-emerald-500",
      link: "#"
    },
    {
      platform: "Codewars",
      username: "johncode",
      description: "Code kata and programming challenges",
      stats: {
        kyu: "4 kyu",
        honor: "1500+",
        kata: "200+"
      },
      icon: Code,
      color: "from-red-500 to-pink-500",
      link: "#"
    }
  ];

  const achievements = [
    {
      title: "GitHub Stars",
      value: "500+",
      description: "Total stars across repositories"
    },
    {
      title: "Contributions",
      value: "2000+",
      description: "GitHub contributions in the last year"
    },
    {
      title: "Problems Solved",
      value: "800+",
      description: "Algorithm problems across platforms"
    },
    {
      title: "Contest Rating",
      value: "1850",
      description: "Highest competitive programming rating"
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
                Coding Profiles
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              My journey across various coding platforms, showcasing problem-solving skills and contributions to the developer community.
            </motion.p>
          </div>

          {/* Achievement Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold text-purple-400 mb-2"
                >
                  {achievement.value}
                </motion.div>
                <h3 className="text-white font-semibold mb-1">{achievement.title}</h3>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Platform Profiles */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {profiles.map((profile, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 h-full">
                  {/* Platform Header */}
                  <div className={`bg-gradient-to-r ${profile.color} p-6 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                    <div className="relative z-10">
                      <div className="flex items-center space-x-3 mb-2">
                        <profile.icon size={24} className="text-white" />
                        <h3 className="text-xl font-bold text-white">{profile.platform}</h3>
                      </div>
                      <p className="text-white/80 text-sm">@{profile.username}</p>
                    </div>
                  </div>

                  {/* Profile Content */}
                  <div className="p-6">
                    <p className="text-gray-300 mb-6">{profile.description}</p>
                    
                    {/* Stats */}
                    <div className="space-y-3 mb-6">
                      {Object.entries(profile.stats).map(([key, value], statIndex) => (
                        <div key={statIndex} className="flex justify-between items-center">
                          <span className="text-gray-400 capitalize">{key}:</span>
                          <span className="text-purple-400 font-semibold">{value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Visit Button */}
                    <motion.a
                      href={profile.link}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center space-x-2 w-full justify-center px-4 py-3 bg-purple-500/20 text-purple-400 font-medium rounded-lg border border-purple-500/30 hover:bg-purple-500/30 transition-all duration-300 group-hover:border-purple-400"
                    >
                      <span>Visit Profile</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub Contribution Graph Simulation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">GitHub Activity Overview</h3>
            <div className="grid grid-cols-12 gap-1 max-w-4xl mx-auto">
              {Array.from({ length: 365 }).map((_, index) => {
                const intensity = Math.random();
                let color = 'bg-gray-800';
                if (intensity > 0.7) color = 'bg-purple-500';
                else if (intensity > 0.5) color = 'bg-purple-600';
                else if (intensity > 0.3) color = 'bg-purple-700';
                else if (intensity > 0.1) color = 'bg-purple-800';

                return (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.001 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.5 }}
                    className={`w-3 h-3 rounded-sm ${color} transition-all duration-200`}
                  />
                );
              })}
            </div>
            <div className="flex justify-center mt-6 space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gray-800 rounded-sm"></div>
                <span>Less</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-purple-800 rounded-sm"></div>
                <div className="w-3 h-3 bg-purple-700 rounded-sm"></div>
                <div className="w-3 h-3 bg-purple-600 rounded-sm"></div>
                <div className="w-3 h-3 bg-purple-500 rounded-sm"></div>
              </div>
              <div className="flex items-center space-x-2">
                <span>More</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profiles;
