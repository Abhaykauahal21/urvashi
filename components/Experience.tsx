import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Career Path</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Experience & Education</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700 transform md:-translate-x-1/2"></div>

          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative flex items-center justify-between md:justify-normal mb-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-white dark:bg-slate-800 border-4 border-primary rounded-full transform -translate-x-1/2 md:translate-x-[-50%] z-10 flex items-center justify-center shadow-lg">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:text-right'}`}>
                <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-shadow">
                  <span className="text-xs font-bold text-secondary bg-secondary/10 px-2 py-1 rounded mb-2 inline-block">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">{exp.role}</h3>
                  <h4 className="text-primary font-medium mb-3 flex items-center gap-1 md:justify-end">
                     {index % 2 !== 0 && <Briefcase size={14} />} 
                     {exp.company}
                     {index % 2 === 0 && <Briefcase size={14} />}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
              
              {/* Empty Space for Grid alignment */}
              <div className="hidden md:block md:w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;