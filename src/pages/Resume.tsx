import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";

const Resume = () => {
  const experience = [
    {
      title: "Systems Engineer",
      company: "Tata Consultancy Services",
      period: "2023 - Present",
      description: [
        "Worked on a large-scale web application using React, Vue and TypeScript",
        "Collaborated with cross-functional teams to deliver high-quality software",
        "Improved application performance by 40% through code optimization",
        "Mentored junior developers and established coding standards",
      ],
    },
    {
      title: "Programmer Analyst",
      company: "FIS Global Solutions",
      period: "2020 - 2023",
      description: [
        "Developed modern Angular applications with TypeScript",
        "Created reusable component libraries used across multiple projects",
        "Collaborated with UX/UI designers to implement pixel-perfect designs",
        "Integrated REST APIs and managed state with Ngrx",
        "Participated in Agile ceremonies and contributed to sprint planning",
        "Implemented unit and end-to-end tests to ensure code quality",
      ],
    },
    {
      title: "Data Analyst",
      company: "Urjanet Energy Solutions Pvt Ltd",
      period: "2019 - 2020",
      description: [
        "Built responsive websites using HTML, CSS, and JavaScript",
        "Converted Figma designs into functional web interfaces",
        "Optimized websites for search engines and accessibility",
        "Participated in code reviews and agile development processes",
      ],
    },
  ];

  const education = [
    // {
    //   degree: "Bachelor of Science in Computer Science",
    //   school: "State University",
    //   period: "2017 - 2021",
    //   details: "Graduated Magna Cum Laude with a focus on Web Development and User Interface Design"
    // }
  ];

  const certifications = [
    "React Developer Certification - Meta",
    "TypeScript Fundamentals - Microsoft",
    "Three.js Journey - Bruno Simon",
    "Frontend Masters - Advanced CSS",
    "AWS Cloud Practitioner",
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                Resume
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Download my resume or view my professional experience and
              qualifications below.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/assets/docs/resume.pdf"; // Update filename if needed
                link.download = "Aravindalochanan_Resume.pdf"; // Desired download name
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <ArrowDown size={20} />
              <span>Download Resume</span>
            </motion.button>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4 text-center">
              Contact Information
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail size={20} className="text-purple-400" />
                <span>angulararavind@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Github size={20} className="text-purple-400" />
                <span>https://github.com/Aravindalochanan1996</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Linkedin size={20} className="text-purple-400" />
                <span>www.linkedin.com/in/aravindalochanan-ramanujam</span>
              </div>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              Professional Experience
            </h2>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {job.title}
                      </h3>
                      <p className="text-purple-400 font-medium">
                        {job.company}
                      </p>
                    </div>
                    <span className="text-gray-400 text-sm md:text-base">
                      {job.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {job.description.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-gray-300 flex items-start"
                      >
                        <span className="text-purple-400 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <span className="text-gray-400">{edu.period}</span>
                </div>
                <p className="text-purple-400 font-medium mb-2">{edu.school}</p>
                <p className="text-gray-300">{edu.details}</p>
              </motion.div>
            ))}
          </motion.div> */}

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4 border border-purple-500/30 text-center"
                >
                  <span className="text-white font-medium">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
