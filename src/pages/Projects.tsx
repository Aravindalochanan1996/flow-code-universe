import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { Github, ExternalLink, Star, GitFork, Briefcase, FolderGit2 } from 'lucide-react';

const GITHUB_USERNAME = 'Aravindalochanan1996';
const INITIAL_REPO_COUNT = 9;

interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics?: string[];
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  pushed_at: string;
}

interface GithubProject {
  repo: string;
  title: string;
  description: string;
  tags: string[];
  category: 'ai' | 'fullstack' | 'automation' | 'frontend';
  demo?: string;
}

// Hand-picked personal projects from GitHub, shown above the full repo list
const githubProjects: GithubProject[] = [
  {
    repo: 'project-using-langchain-langgraph',
    title: 'Banking AI Assistant',
    description: 'Intelligent document processing pipeline for banking cheque clearing: an agentic LangGraph workflow with human-in-the-loop review, versioned prompts, schema validation and model evaluation.',
    tags: ['Python', 'LangGraph', 'LangChain', 'Pydantic', 'HITL'],
    category: 'ai',
  },
  {
    repo: 'mfe-microservices',
    title: 'AuraHR – AI-Powered HRMS',
    description: 'HRMS portal with a React micro-frontend shell (People, Timesheets, Finance & Payroll, Recruitment), a FastAPI microservices gateway, MongoDB and a global AI HR Copilot.',
    tags: ['React', 'Micro-Frontends', 'FastAPI', 'MongoDB', 'AI Copilot'],
    category: 'ai',
  },
  {
    repo: 'chatbot-using-RAG-streamlit',
    title: 'Resume RAG Chatbot',
    description: 'Upload PDF resumes and ask questions about them. Text is chunked, embedded into a local Chroma vector database and answered with retrieval-augmented generation.',
    tags: ['Python', 'Streamlit', 'LangChain', 'ChromaDB', 'Ollama'],
    category: 'ai',
  },
  {
    repo: 'pdf-reader-using-RAG',
    title: 'PDF Q&A with RAG',
    description: 'Reads local PDFs, creates sentence embeddings and retrieves relevant passages from a FAISS index, with a command-line interface and a notebook version.',
    tags: ['Python', 'FAISS', 'Sentence Transformers', 'RAG'],
    category: 'ai',
  },
  {
    repo: 'ai-interview-champion',
    title: 'AI Interview Champion',
    description: 'Study app for AI and Data interviews: 28 topics across AI, data and the Microsoft enterprise stack, with 109 interview questions and model answers.',
    tags: ['JavaScript', 'GenAI', 'RAG', 'Azure OpenAI'],
    category: 'ai',
    demo: 'https://ai-interview-champion.vercel.app',
  },
  {
    repo: 'ai-learning-champion',
    title: 'AI Learning Champion',
    description: 'Interview prep for AI Centre of Excellence roles: Agent Runtime Platform, AI Ops, AI QA/SRE, AWS and Azure Platform Engineer, each with a role overview, key tools, topic sections and interview Q&A.',
    tags: ['React', 'Vite', 'AI Ops', 'MCP', 'Agent Platforms'],
    category: 'ai',
    demo: 'https://ai-learning-champion.vercel.app',
  },
  {
    repo: 'interview-preparation-guide',
    title: 'PrepStack – Interview Prep Kit',
    description: 'Interview preparation app with role-based learning paths, beginner-to-advanced tracks across web, backend, DevOps, cloud, testing and AI, plus scenario and tricky questions.',
    tags: ['JavaScript', 'Node.js', 'Learning Paths', 'Flashcards'],
    category: 'ai',
  },
  {
    repo: 'demand-dashboard',
    title: 'Demand Dashboard',
    description: 'Role-based dashboard with JWT login for business users and admins, editable client tables, Excel workbook upload, soft deletes and an audit of the last edit.',
    tags: ['React', 'FastAPI', 'MongoDB', 'JWT', 'RBAC'],
    category: 'fullstack',
  },
  {
    repo: 'hrmsportal',
    title: 'HRMS Portal',
    description: 'Responsive HR portal with registration and JWT login, profile management and daily attendance check-in/out with working-hours calculation and monthly history.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    category: 'fullstack',
  },
  {
    repo: 'magnetic-apparels',
    title: 'Magnetic Apparels',
    description: 'E-commerce platform for dresses, shoes, watches and wallets that combines Vue, React and Angular front ends with a Node.js, Express and MongoDB API.',
    tags: ['Node.js', 'MongoDB', 'React', 'Angular', 'Vue'],
    category: 'fullstack',
  },
  {
    repo: 'web3-demo-app',
    title: 'Web3.js Demo App',
    description: 'Full-stack Ethereum explorer on the Sepolia testnet: account balances, gas prices, blocks, transactions and address validation through an Express API.',
    tags: ['Node.js', 'Express', 'Web3.js', 'Ethereum'],
    category: 'fullstack',
  },
  {
    repo: 'automation-on-mails',
    title: 'Outlook Attachment Downloader',
    description: 'Scheduled automation that downloads matching attachments from an Outlook folder through Microsoft Graph, skipping files it has already saved.',
    tags: ['Python', 'Microsoft Graph', 'MSAL', 'Task Scheduler'],
    category: 'automation',
  },
  {
    repo: 'python-timesheet-imap-downloader',
    title: 'Timesheet IMAP Downloader',
    description: 'Downloads and parses timesheet data from email bodies and attachments over IMAP and exports it to CSV or Excel, with logging, type hints and tests.',
    tags: ['Python', 'IMAP', 'openpyxl', 'pytest'],
    category: 'automation',
  },
  {
    repo: 'js-compiler',
    title: 'JS Compiler',
    description: 'In-browser JavaScript editor and runner built on the Monaco editor, the engine behind VS Code.',
    tags: ['Angular', 'TypeScript', 'Monaco Editor'],
    category: 'frontend',
  },
  {
    repo: 'code-snippet-app',
    title: 'Code Snippet App',
    description: 'App for saving and browsing code snippets with syntax highlighting.',
    tags: ['React', 'TypeScript', 'Material UI', 'Tailwind CSS'],
    category: 'frontend',
    demo: 'https://code-snippet-app-one.vercel.app',
  },
  {
    repo: 'expense-tracker',
    title: 'Expense Tracker',
    description: 'Personal expense tracker with an Angular Material interface and a JSON Server mock API.',
    tags: ['Angular', 'Angular Material', 'JSON Server'],
    category: 'frontend',
    demo: 'https://expense-tracker-gamma-henna.vercel.app',
  },
  {
    repo: 'lift-simulator',
    title: 'Lift Simulator',
    description: 'Elevator simulation with state managed through NgRx store and effects.',
    tags: ['Angular', 'TypeScript', 'NgRx'],
    category: 'frontend',
  },
];

const featuredRepoNames = new Set(githubProjects.map((project) => project.repo.toLowerCase()));

const fetchRepos = async (): Promise<GithubRepo[]> => {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=100`
  );
  if (!res.ok) throw new Error(`GitHub API responded with ${res.status}`);
  const repos: GithubRepo[] = await res.json();
  // Skip forks and the profile README repo
  return repos.filter(
    (repo) => !repo.fork && repo.name.toLowerCase() !== GITHUB_USERNAME.toLowerCase()
  );
};

const formatRepoName = (name: string) =>
  name.replace(/[-_]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [showAllRepos, setShowAllRepos] = useState(false);
  const [githubFilter, setGithubFilter] = useState('all');

  const { data: repos, isLoading, isError } = useQuery({
    queryKey: ['github-repos', GITHUB_USERNAME],
    queryFn: fetchRepos,
    staleTime: 1000 * 60 * 10,
  });

  const projects = [
    {
      id: 1,
      title: "Workforcenexa",
      subtitle: "AI-Powered HRMS, Finance & Employee Usage Platform",
      client: "D4 Insight",
      description: "Leading the evolution of Workforcenexa from a single-purpose AI recruitment tool into a complete HRMS with Finance and Employee Usage portals.",
      highlights: [
        "Multi-agent AI architecture with autonomous agents for recruitment screening, HR case resolution, finance approvals and employee self-service, coordinated by a central orchestration layer",
        "Microfrontends with Module Federation and matching FastAPI microservices for People, Finance, Auth and Recruitment",
        "AI-driven payroll and finance anomaly detection, natural-language HR queries and agentic workflow automation",
        "Centralized Auth microfrontend and service with role-based access control for multi-tenant usage",
      ],
      tags: ["React", "Python", "FastAPI", "PostgreSQL", "Multi-Agent AI", "Module Federation", "AWS"],
      category: "ai",
    },
    {
      id: 2,
      title: "AI-Powered Web Application Development",
      subtitle: "Internal Project",
      client: "D4 Insight",
      description: "Fully functional React web applications designed, scaffolded and deployed to production primarily through prompt-driven workflows.",
      highlights: [
        "Built and shipped apps end-to-end with Claude, Codex and GitHub Copilot",
        "Explored intelligent document processing and agentic AI patterns for banking use cases",
        "Documented reusable prompt patterns and best practices for future AI-assisted builds",
      ],
      tags: ["React", "Claude", "Codex", "GitHub Copilot", "LLM Integrations", "Prompt Engineering"],
      category: "ai",
    },
    {
      id: 3,
      title: "Ecomm – Online Banking",
      subtitle: "Cards, Lending & Mortgage UI",
      client: "Bank of America",
      description: "Modernized online banking experiences by migrating legacy FTL pages to the Sparta React-based platform.",
      highlights: [
        "Implemented Family Banking in the Cards module and the Manage Spending Categories feature",
        "Built the Mortgage Loan UI with real-time REST API data for user-specific loan details",
        "Geolocation-based conditional rendering for Washington D.C. loan pre-closure laws, extensible to future regional rules",
      ],
      tags: ["React", "REST APIs", "JavaScript", "Fintech"],
      category: "web",
    },
    {
      id: 4,
      title: "ETSS – Employee Tracking System",
      subtitle: "Role-Based Employee Management",
      client: "TCS",
      description: "A role-based Angular employee management application built from scratch with Admin, HR and User roles, each with distinct permissions and dashboards.",
      highlights: [
        "Consistent, accessible Angular Material component library across dashboards and forms",
        "Employee details, role assignments and activity logs with reactive form validation",
        "RESTful CRUD integration optimized for load time, memory leaks and cross-device responsiveness",
      ],
      tags: ["Angular", "Angular Material", "TypeScript", "REST APIs", "RBAC"],
      category: "web",
    },
    {
      id: 5,
      title: "CAPE – Reporting and Analysis Solution",
      subtitle: "Modern Banking Platform",
      client: "FIS Global",
      description: "Reporting & Analysis Solution processing data across Retail Deposits, Commercial Deposits, Retail Lending and Enterprise Customers.",
      highlights: [
        "Operational Reports, Dashboards and Change Analytics modules built in Angular",
        "Multitenancy, multi-currency and multilingual configurations for global banking",
        "Configurable report generation with preview and PDF / Excel export",
      ],
      tags: ["Angular", "Bootstrap", "Dashboards", "Reporting", "Fintech"],
      category: "data",
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ai', name: 'AI & Agentic' },
    { id: 'web', name: 'Web Apps' },
    { id: 'data', name: 'Reporting & Data' }
  ];

  const githubCategories = [
    { id: 'all', name: 'All' },
    { id: 'ai', name: 'AI & LLM' },
    { id: 'fullstack', name: 'Full-Stack' },
    { id: 'automation', name: 'Automation' },
    { id: 'frontend', name: 'Frontend' }
  ];

  const filteredGithubProjects = githubFilter === 'all'
    ? githubProjects
    : githubProjects.filter(project => project.category === githubFilter);

  // Featured repos already have their own cards above
  const otherRepos = repos?.filter((repo) => !featuredRepoNames.has(repo.name.toLowerCase()));
  const visibleRepos = showAllRepos ? otherRepos : otherRepos?.slice(0, INITIAL_REPO_COUNT);

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
              From multi-agent AI platforms to large-scale banking applications — the work I've delivered across AI, fintech and enterprise domains.
            </motion.p>
          </div>

          <div className="flex items-center justify-center gap-3 mb-6">
            <Briefcase className="text-purple-400" size={28} />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Professional Projects
            </h2>
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
            className="grid md:grid-cols-2 gap-8"
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
                <div className="h-full bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  {/* Project Header */}
                  <div className="relative px-6 py-5 bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                    <div className="flex items-center gap-2 text-purple-300 text-sm font-medium mb-2">
                      <Briefcase size={16} />
                      <span>{project.client}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mt-1">{project.subtitle}</p>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <p className="text-gray-300 text-sm mb-4">
                      {project.description}
                    </p>
                    <ul className="space-y-2 mb-5">
                      {project.highlights.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-400 text-sm flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>

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

          {/* Personal Projects on GitHub */}
          <div className="mt-24 pt-16 border-t border-purple-500/20">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <FolderGit2 className="text-purple-400" size={28} />
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Personal Projects on GitHub
                </h2>
              </div>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Projects I've built on my own to explore AI, full-stack architecture and automation.
                Each one links to its source code on GitHub.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {githubCategories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setGithubFilter(category.id)}
                  className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    githubFilter === category.id
                      ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-purple-500/20'
                  }`}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>

            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGithubProjects.map((project, index) => (
                <motion.div
                  key={project.repo}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="flex flex-col bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={`https://github.com/${GITHUB_USERNAME}/${project.repo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-white/10 rounded-lg text-purple-300 hover:text-white hover:bg-purple-500/30 transition-colors"
                    >
                      <Github size={16} /> Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* All GitHub Repositories */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                More on GitHub
              </h2>
              <p className="text-gray-300">
                Experiments, learning repos and prototypes, live from{' '}
                <a
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300"
                >
                  github.com/{GITHUB_USERNAME}
                </a>
              </p>
            </div>

            {isLoading && (
              <p className="text-center text-gray-400">Loading repositories...</p>
            )}

            {isError && (
              <p className="text-center text-gray-400">
                Couldn't load repositories right now.{' '}
                <a
                  href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300"
                >
                  View them on GitHub
                </a>
              </p>
            )}

            {visibleRepos && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleRepos?.map((repo, index) => (
                  <motion.div
                    key={repo.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index % 6) * 0.05 }}
                    whileHover={{ y: -6 }}
                    className="flex flex-col bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="text-lg font-bold text-white break-words">
                        {formatRepoName(repo.name)}
                      </h3>
                      <div className="flex gap-2 shrink-0">
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${repo.name} on GitHub`}
                          className="p-2 bg-white/10 rounded-full text-purple-300 hover:text-white hover:bg-purple-500/30 transition-colors"
                        >
                          <Github size={16} />
                        </a>
                        {repo.homepage && (
                          <a
                            href={repo.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${repo.name} live demo`}
                            className="p-2 bg-white/10 rounded-full text-purple-300 hover:text-white hover:bg-purple-500/30 transition-colors"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm mb-4 flex-1">
                      {repo.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      {repo.language && (
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                          {repo.language}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Star size={14} /> {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork size={14} /> {repo.forks_count}
                      </span>
                      <span className="ml-auto">
                        {new Date(repo.pushed_at).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {otherRepos && otherRepos.length > INITIAL_REPO_COUNT && (
              <div className="text-center mt-10">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowAllRepos((prev) => !prev)}
                  className="px-6 py-3 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
                >
                  {showAllRepos ? 'Show fewer' : `Show all ${otherRepos.length} repositories`}
                </motion.button>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
