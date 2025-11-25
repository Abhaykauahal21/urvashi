import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Linkedin, Twitter, Github, CheckCircle, Download, Sparkles } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isResumeHovered, setIsResumeHovered] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'c12cd3cf-1cb2-4418-8dc8-47f7ecbe4db4', // Replace with your actual Web3Forms access key
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: 'Hey Urvashi here is New Contact Message from Portfolio',
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="contact" className="py-20 relative bg-gradient-to-b from-transparent to-purple-50/50 dark:to-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Let's Work Together</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-primary mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="space-y-8"
          >
            <h3 className="text-2xl font-bold">Have a project in mind?</h3>
            <p className="text-slate-600 dark:text-slate-300">
              I'm currently available for freelance projects and full-time opportunities. 
              Let's turn your ideas into digital reality.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Email Me</h4>
                  <p className="text-slate-500">guptaurvashi249@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-slate-500">Mathura, India</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
  <h4 className="font-semibold mb-4">Follow Me & Download Resume</h4>

  <div className="flex gap-4 items-center">
    {[
      // { icon: Github, link: "https://github.com/your-username" },
      { icon: Linkedin, link: "https://www.linkedin.com/in/urvashi-gupta-1a4b0a301/" },
      // { icon: Twitter, link: "https://twitter.com/your-username" },
    ].map((item, i) => (
      <motion.a
        key={i}
        whileHover={{ y: -5 }}
        href={item.link}
        target="_blank"
        className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg text-slate-600 dark:text-slate-300 hover:text-primary transition-all"
      >
        <item.icon size={20} />
      </motion.a>
    ))}

    {/* Resume Download Button with Tilt & Stars Effect */}
    <motion.div
      onHoverStart={() => setIsResumeHovered(true)}
      onHoverEnd={() => setIsResumeHovered(false)}
      whileHover={{
        rotateX: 10,
        rotateY: -10,
        rotateZ: 5,
        y: -5,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      style={{ perspective: "1000px" }}
      className="relative"
    >
      {/* Outer Animated Stars - Only on Hover */}
      {isResumeHovered && (
        <>
          <motion.div
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.8]
            }}
            transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0.2 }}
            className="absolute -top-6 -left-6 pointer-events-none"
          >
            <Sparkles className="text-yellow-300" size={16} />
          </motion.div>

          <motion.div
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.8]
            }}
            transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0.4 }}
            className="absolute -top-3 -right-6 pointer-events-none"
          >
            <Sparkles className="text-yellow-200" size={12} />
          </motion.div>

          <motion.div
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.8]
            }}
            transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0.6 }}
            className="absolute -bottom-4 -right-5 pointer-events-none"
          >
            <Sparkles className="text-yellow-300" size={14} />
          </motion.div>
        </>
      )}

      <motion.a
        href="/resume.pdf"
        download="Urvashi_Gupta_Resume.pdf"
        className="relative inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all z-10"
      >
        <Download size={18} />
        <span>Resume</span>
      </motion.a>
    </motion.div>
  </div>
</div>

            

          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea 
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send size={20} />
                {isLoading ? 'Sending...' : 'Send Message'}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm font-medium"
                >
                  <CheckCircle size={20} />
                  Thanks for your message! I'll get back to you soon.
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="text-red-600 dark:text-red-400 text-sm font-medium"
                >
                  Something went wrong. Please try again.
                </motion.div>
              )}
            </div>
          </motion.form>
        </div>
        
        <footer className="mt-20 text-center border-t border-slate-200 dark:border-slate-800 pt-8">
            <p className="font-script text-3xl mb-2 text-slate-800 dark:text-slate-200">Urvashi.dev</p>
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Made with ❤️ and React.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;