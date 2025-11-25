import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">My Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Skills & Technologies</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Frontend Category */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-3xl">💻</span> Frontend Development
            </h3>
            {SKILLS.filter(s => s.category === 'frontend').map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium flex items-center gap-2">
                    {skill.icon} {skill.name}
                  </span>
                  <span className="text-slate-500 text-sm">{skill.level}%</span>
                </div>
                <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full relative"
                  >
                    <div className="absolute top-0 right-0 bottom-0 w-[2px] bg-white/50 shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Categories (Design & Tools) */}
          <div>
             <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-3xl">🛠️</span> Design & Tools
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {SKILLS.filter(s => s.category !== 'frontend').map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center text-center gap-2 group hover:border-primary/50 transition-colors"
                >
                  <span className="text-4xl filter drop-shadow-md group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
                  <h4 className="font-semibold">{skill.name}</h4>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
                     <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="h-full bg-secondary"
                     />
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Soft Skills Chips */}
            <div className="mt-8">
               <h4 className="font-semibold mb-4">Soft Skills</h4>
               <div className="flex flex-wrap gap-3">
                 {['Communication', 'Problem Solving', 'Creativity', 'Teamwork', 'Agile'].map((item, i) => (
                   <motion.span 
                    key={item}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="px-4 py-2 bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-300 rounded-full text-sm font-medium border border-pink-100 dark:border-pink-800"
                   >
                     {item}
                   </motion.span>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;