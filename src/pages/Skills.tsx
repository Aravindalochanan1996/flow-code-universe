
import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text3D, Center } from '@react-three/drei';

const SkillSphere = ({ skill, position }: { skill: string, position: [number, number, number] }) => {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="#8B5CF6" transparent opacity={0.8} />
    </mesh>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "HTML5", level: 98 },
        { name: "CSS3", level: 95 },
        { name: "Tailwind CSS", level: 90 }
      ]
    },
    {
      title: "3D & Animation",
      skills: [
        { name: "Three.js", level: 85 },
        { name: "Framer Motion", level: 88 },
        { name: "CSS Animations", level: 92 },
        { name: "WebGL", level: 75 },
        { name: "GSAP", level: 80 },
        { name: "Lottie", level: 85 }
      ]
    },
    {
      title: "Tools & Frameworks",
      skills: [
        { name: "Vite", level: 90 },
        { name: "Webpack", level: 85 },
        { name: "Git", level: 95 },
        { name: "Figma", level: 88 },
        { name: "Node.js", level: 80 },
        { name: "REST APIs", level: 92 }
      ]
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
                My Skills
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              A comprehensive overview of my technical skills and expertise in modern web development.
            </motion.p>
          </div>

          {/* 3D Skills Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="h-96 mb-16 rounded-xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20"
          >
            <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#A855F7" />
              
              <Center>
                <Text3D
                  font="/fonts/helvetiker_regular.typeface.json"
                  size={0.8}
                  height={0.1}
                  curveSegments={12}
                  bevelEnabled
                  bevelThickness={0.02}
                  bevelSize={0.02}
                  bevelOffset={0}
                  bevelSegments={5}
                >
                  SKILLS
                  <meshStandardMaterial color="#8B5CF6" />
                </Text3D>
              </Center>
              
              <SkillSphere skill="React" position={[-3, 2, 0]} />
              <SkillSphere skill="TypeScript" position={[3, 2, 0]} />
              <SkillSphere skill="Three.js" position={[-3, -2, 0]} />
              <SkillSphere skill="Framer Motion" position={[3, -2, 0]} />
              
              <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
            </Canvas>
          </motion.div>

          {/* Skills Categories */}
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20"
              >
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-purple-400 text-sm">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full relative"
                        >
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute right-0 top-0 w-2 h-2 bg-white rounded-full"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <h3 className="text-3xl font-bold text-white mb-8">Additional Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Redux", "Next.js", "Vue.js", "Sass", "Less", "GraphQL", 
                "Docker", "AWS", "Firebase", "Supabase", "MongoDB", "PostgreSQL",
                "Jest", "Cypress", "Storybook", "Webpack", "Rollup", "ESLint"
              ].map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full border border-purple-500/30 hover:border-purple-400 transition-all duration-300 cursor-pointer"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
