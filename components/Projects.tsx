import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold tracking-wider uppercase text-sm">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Featured Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Floating Action Buttons */}
                <div className="absolute bottom-4 right-4 flex gap-3 z-20 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <a href={project.link} className="p-2 bg-white text-slate-900 rounded-full hover:bg-primary hover:text-white transition-colors" title="View Code">
                    <Github size={20} />
                  </a>
                  <a href={project.link} className="p-2 bg-white text-slate-900 rounded-full hover:bg-primary hover:text-white transition-colors" title="Live Demo">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;