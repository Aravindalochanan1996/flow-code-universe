import React from "react";
import { motion } from "framer-motion";
import { Bot, Layers, Server } from "lucide-react";

const About = () => {
  const timelineItems = [
    {
      year: "2025-present",
      title: "AI Engineer / Technical Consultant",
      company: "D4 Insight",
      description:
        "Leading Workforcenexa's evolution into a full HRMS, Finance and Employee Usage platform with a multi-agent AI, microfrontend and microservices architecture (React, Python FastAPI, PostgreSQL, AWS).",
    },
    {
      year: "2023-2025",
      title: "System Engineer",
      company: "Tata Consultancy Services",
      description:
        "Built Angular and Angular Material front ends, CMS integrations over RESTful services, and refactored legacy modules to cut load times and redundant HTTP calls.",
    },
    {
      year: "2020-2022",
      title: "Programmer Analyst",
      company: "FIS Global Solutions",
      description:
        "Delivered Angular and Bootstrap UI for the Modern Banking Platform, from requirement analysis to OpenShift deployments through Jenkins.",
    },
    {
      year: "2019-2020",
      title: "Data Analyst",
      company: "Urjanet Energy Solutions",
      description:
        "Top performer meeting SLAs and quality metrics, troubleshooting data defects and providing root-cause analysis to engineering teams.",
    },
  ];

  const focusAreas = [
    {
      icon: Bot,
      title: "AI Engineering",
      description:
        "Building AI-powered apps with Claude, Codex and GitHub Copilot — multi-agent architectures, LLM integrations and intelligent document workflows.",
    },
    {
      icon: Layers,
      title: "Front-End Architecture",
      description:
        "Reusable React and Angular component libraries, microfrontends with Module Federation, and pixel-accurate UI from Figma designs.",
    },
    {
      icon: Server,
      title: "Full-Stack & Cloud",
      description:
        "Node.js and Python (FastAPI) microservices, RESTful and GraphQL APIs, PostgreSQL and MongoDB, deployed on Microsoft Azure and AWS.",
    },
  ];

  const competencies = [
    "React.js",
    "Angular & Angular Material",
    "TypeScript / JavaScript (ES6+)",
    "Redux",
    "Node.js",
    "Python (FastAPI)",
    "RESTful APIs & GraphQL",
    "Responsive & Component-Driven UI",
    "Microsoft Azure & AWS",
    "CI/CD & DevOps",
    "Agile / Scrum",
    "AI-Assisted & Prompt-Driven Development",
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
              AI Engineer and Full-Stack Developer with 7+ years of experience
              building scalable, high-performance applications across fintech
              and enterprise domains.
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
                I'm a software developer based in Chennai, India, with 7+ years
                of experience designing and building web applications with
                React and Angular. I've worked on large-scale banking platforms
                for Bank of America and FIS Global, and enterprise applications
                at Tata Consultancy Services.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I translate complex business and design requirements into
                responsive, reusable and accessible UI components, integrate
                RESTful and GraphQL APIs, and deliver cloud-hosted,
                production-grade solutions on Microsoft Azure and AWS.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, at D4 Insight, I'm focused on AI-powered development —
                building apps with Claude, Codex and GitHub Copilot, and
                architecting Workforcenexa with multi-agent AI, microfrontends
                and microservices. My core interests are AI-assisted software
                development, front-end architecture and prompt engineering.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <img
                    src="/lovable-uploads/4d533780-39d5-474e-9e34-b3ad5afb3a78.png"
                    alt="Aravindalochanan Ramanujam"
                    className="w-72 h-72 rounded-full object-cover bg-slate-800"
                  />
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 border-4 border-dashed border-purple-400/30 rounded-full"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* What I Focus On */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              What I Focus On
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {focusAreas.map((area) => (
                <motion.div
                  key={area.title}
                  whileHover={{ y: -6 }}
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20"
                >
                  <area.icon className="text-purple-400 mb-4" size={32} />
                  <h3 className="text-xl font-bold text-white mb-2">{area.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{area.description}</p>
                </motion.div>
              ))}
            </div>
            <h3 className="text-2xl font-bold text-center text-white mb-6">
              Core Competencies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {competencies.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full border border-purple-500/30"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              My Journey
            </h2>
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
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20"
                    >
                      <span className="text-purple-400 font-bold text-lg">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-2">
                        {item.title}
                      </h3>
                      <p className="text-purple-300 font-medium">
                        {item.company}
                      </p>
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
