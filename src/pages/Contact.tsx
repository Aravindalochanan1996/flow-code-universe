
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 2000);
  };

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
                Get In Touch
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Have a project in mind or want to collaborate? I'd love to hear from you. Send me a message and let's create something amazing together!
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
                <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </motion.div>

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-green-400 text-center font-medium"
                    >
                      Message sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-red-400 text-center font-medium"
                    >
                      Something went wrong. Please try again later.
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Info & Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="space-y-8"
            >
              {/* Contact Information */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
                <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    I'm always excited to work on interesting projects and collaborate with amazing people. 
                    Whether you have a project in mind, need consultation, or just want to say hello, 
                    feel free to reach out!
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    I typically respond within 24 hours and I'm open to discussing opportunities 
                    ranging from freelance projects to full-time positions.
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
                <h3 className="text-2xl font-bold text-white mb-6">Find Me Online</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Mail, label: 'Email', href: 'mailto:john@example.com', color: 'hover:text-red-400' },
                    { icon: Github, label: 'GitHub', href: '#', color: 'hover:text-gray-400' },
                    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-blue-400' },
                    { icon: Twitter, label: 'Twitter', href: '#', color: 'hover:text-cyan-400' }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center space-x-3 p-4 bg-white/5 rounded-lg border border-purple-500/20 text-gray-300 ${social.color} transition-all duration-300 group`}
                    >
                      <social.icon size={24} className="group-hover:scale-110 transition-transform" />
                      <span className="font-medium">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Response Info */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30"
              >
                <h4 className="text-lg font-bold text-white mb-2">Quick Response Guaranteed</h4>
                <p className="text-gray-300 text-sm">
                  I check my messages regularly and aim to respond within 24 hours. 
                  For urgent inquiries, feel free to reach out via LinkedIn.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
