import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code, Sparkles, Zap, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const [isResumeHovered, setIsResumeHovered] = useState(false);
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
      {/* Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob dark:opacity-20 dark:bg-purple-900"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 dark:opacity-20 dark:bg-pink-900"></div>
      <div className="absolute -bottom-32 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 dark:opacity-20 dark:bg-blue-900"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 backdrop-blur-sm mb-6">
            <span className="flex h-2 w-2 relative mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Available for freelance</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-secondary">Urvashi Gupta</span>
            <br />
            Frontend Developer
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-lg leading-relaxed">
            A pre-final year student at GLA University, crafting clean, modern, and interactive web experiences.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all"
            >
              View My Work
            </motion.a>
            
            {/* Resume Button with Tilt & Stars Effect */}
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
                href="./assets/resume.pdf" 
                download
                className="px-8 py-3 bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-full font-medium hover:border-primary transition-all flex items-center gap-2 z-10 relative"
              >
                <Download size={18} />
                Resume
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Image / Illustration Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Decorative Rings */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-slate-300 dark:border-slate-700 animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 rounded-full border border-slate-200 dark:border-slate-800 animate-[spin_15s_linear_infinite_reverse]"></div>
            
            {/* Main Image */}
            <div className="absolute inset-6 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
               <img 
                 src="./assets/portrait.jpg" 
                 alt="Portrait" 
                 className="w-full h-full object-cover"
               />
            </div>

            {/* Floating Elements */}
            <motion.div 
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-4 -right-4 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-white/20 backdrop-blur-md"
            >
              <Code className="text-primary w-8 h-8" />
            </motion.div>

            <motion.div 
               animate={{ y: [0, 20, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute top-1/2 -left-12 p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-white/20 backdrop-blur-md flex items-center gap-2"
            >
              <Sparkles className="text-yellow-400 w-5 h-5" />
              <span className="font-bold text-sm">Creative</span>
            </motion.div>

            <motion.div 
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
               className="absolute -bottom-8 right-10 p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-white/20 backdrop-blur-md flex items-center gap-2"
            >
              <Zap className="text-blue-400 w-5 h-5" />
              <span className="font-bold text-sm">Fast</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-slate-400 hover:text-primary transition-colors">
          <ArrowDown size={24} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;


