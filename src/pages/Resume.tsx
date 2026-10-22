import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, Github, Linkedin, Phone, MapPin } from "lucide-react";

const Resume = () => {
  const experience = [
    {
      title: "AI Engineer / Technical Consultant",
      company: "D4 Insight | Chennai",
      period: "12/2025 - Present",
      description: [
        "Built and shipped multiple React-based, AI-powered web applications using Claude, Codex, and GitHub Copilot, moving from prompt to production with minimal manual scaffolding",
        "Developing Workforcenexa, transforming it from a single-purpose AI recruitment tool into a complete HRMS, Finance, and Employee Usage platform with a multi-agent AI architecture",
        "Designed a microfrontend/microservices architecture (People, Finance, Auth, Recruitment) using React and Python (FastAPI) with PostgreSQL, deploying to AWS EC2",
        "Architected reusable, modular React component libraries, translating Figma mockups into responsive, pixel-accurate, production-ready UI",
        "Integrated RESTful and LLM-powered APIs for resume parsing, candidate matching, and intelligent document workflows, improving screening turnaround time",
        "Collaborated with the AI Center of Excellence (CoE) to embed AI tools into development pipelines, experimenting with prompt engineering and model evaluation",
      ],
    },
    {
      title: "System Engineer",
      company: "Tata Consultancy Services | Chennai",
      period: "01/2023 - 12/2025",
      description: [
        "Developed front-end features using Angular components, services, directives, and modules based on business requirements and client mockups",
        "Built and styled UI screens with Angular Material and Flex Layout, delivering a consistent, accessible design system",
        "Built CMS integrations using RESTful HTTP services to dynamically manage content and reduce manual content-release effort",
        "Refactored legacy Angular modules for improved performance, reducing load times and eliminating redundant HTTP calls",
        "Managed multiple concurrent projects with timely delivery, quality assurance, and adherence to compliance requirements",
      ],
    },
    {
      title: "Programmer Analyst",
      company: "FIS Global Solutions | Chennai",
      period: "03/2020 - 12/2022",
      description: [
        "Provided full front-end development support across the project lifecycle, from requirement analysis to deployment",
        "Built UI templates, layouts, and forms using Angular and Bootstrap for the Modern Banking Platform team",
        "Implemented client-side form validations and reusable UI directives to reduce duplicate code across modules",
        "Fixed and unit-tested bugs raised by QA, maintaining a high first-time-fix rate",
        "Deployed application builds to OpenShift through Jenkins, supporting reliable release cycles",
      ],
    },
    {
      title: "Data Analyst",
      company: "Urjanet Energy Solutions | Chennai",
      period: "03/2019 - 02/2020",
      description: [
        "Top performer with a consistent track record of meeting SLAs and quality metrics across multiple customer accounts",
        "Troubleshot data defect tickets, providing detailed root-cause analysis (RCA) to engineering teams",
        "Communicated requirements through Jira with subject-matter experts and tracked issues to resolution",
        "Maintained documentation of recurring defect patterns to support faster future troubleshooting",
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

  const achievements = [
    "Leading the transformation of Workforcenexa into a full-scale HRMS, Finance, and Employee Usage platform with multi-agent AI, microfrontend, and microservices foundations",
    "Adopted AI-assisted, prompt-driven development (Claude, Codex, Copilot) to move applications from prompt to production, shortening delivery cycles",
    "Built and maintained Angular Material component libraries reused across multiple enterprise modules",
    "Consistently met SLAs and quality metrics across engagements at TCS, FIS Global, and Urjanet Energy Solutions",
    "Contributed to large-scale banking platforms (Bank of America, FIS Global) supporting lending, deposits, and reporting workflows",
    "Worked across fintech, banking, and enterprise recruitment technology domains",
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
                link.download = "Aravindalochanan_R_Resume.pdf"; // Desired download name
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
              {[
                { icon: Mail, label: "lochanan1996@gmail.com", href: "mailto:lochanan1996@gmail.com" },
                { icon: Phone, label: "+91-7871888848", href: "tel:+917871888848" },
                { icon: MapPin, label: "Chennai, India" },
                { icon: Github, label: "github.com/Aravindalochanan1996", href: "https://github.com/Aravindalochanan1996" },
                { icon: Linkedin, label: "linkedin.com/in/aravindalochanan-ramanujam", href: "https://www.linkedin.com/in/aravindalochanan-ramanujam" },
              ].map((item) => (
                <div key={item.label} className="flex items-center space-x-2 text-gray-300">
                  <item.icon size={20} className="text-purple-400" />
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-300 transition-colors break-all"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </div>
              ))}
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

          {/* Key Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              Key Achievements
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4 border border-purple-500/30"
                >
                  <span className="text-white font-medium">{achievement}</span>
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
