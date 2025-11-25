import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Coffee, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">About Me</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Passionate about creating beautiful web interfaces</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              I'm Urvashi Gupta, a pre-final year student at GLA University, Mathura. My journey started when I realized I could turn my creative ideas into interactive reality on the web.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Specializing in the React ecosystem, I build seamless, accessible, and performant web applications. As I continue my studies, I am constantly exploring new technologies to sharpen my frontend magic.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-xl border border-pink-100 dark:border-pink-800/50">
                <Heart className="text-pink-500 mb-2" />
                <h4 className="font-bold">Design</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Pixel Perfect</p>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-100 dark:border-purple-800/50">
                <Coffee className="text-purple-500 mb-2" />
                <h4 className="font-bold">Code</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Clean & Scalable</p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800/50">
                <Globe className="text-blue-500 mb-2" />
                <h4 className="font-bold">Web</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Interactive</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:w-1/2 grid grid-cols-2 gap-4"
          >
             <img src="https://picsum.photos/id/42/400/500" className="rounded-2xl shadow-lg mt-8 transform hover:translate-y-2 transition-transform duration-500" alt="About 1" />
             <img src="https://picsum.photos/id/48/400/500" className="rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform duration-500" alt="About 2" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;