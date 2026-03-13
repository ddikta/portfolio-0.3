import React from 'react';
import { motion } from 'motion/react';
import { 
  Linkedin, 
  Mail, 
  Database, 
  BarChart3, 
  Code2, 
  Terminal,
  ChevronRight,
  ArrowUpRight,
  MapPin,
  Briefcase,
  GraduationCap,
  MessageCircle
} from 'lucide-react';
import { PROJECTS, SKILLS, EXPERIENCES, EDUCATION, Project } from './types';

interface ProjectCardProps {
  project: Project;
  key?: React.Key;
}

const ProjectCard = ({ project }: ProjectCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative bg-brand-card border border-brand-border rounded-2xl p-6 hover:border-brand-accent/50 transition-all duration-300"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="p-2 bg-brand-accent/10 rounded-lg">
        <Database className="w-5 h-5 text-brand-accent" />
      </div>
      <a 
        href={project.link} 
        className="text-brand-text-dim hover:text-white transition-colors"
        target="_blank" 
        rel="noopener noreferrer"
      >
        <ArrowUpRight className="w-5 h-5" />
      </a>
    </div>
    
    <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-accent transition-colors">
      {project.title}
    </h3>
    <p className="text-brand-text-dim text-sm leading-relaxed mb-6">
      {project.description}
    </p>

    {project.metrics && (
      <div className="grid grid-cols-2 gap-4 mb-6">
        {project.metrics.map((metric, idx) => (
          <div key={idx} className="border-l border-brand-border pl-3">
            <div className="text-xs text-brand-text-dim uppercase tracking-wider">{metric.label}</div>
            <div className="text-lg font-mono font-medium">{metric.value}</div>
          </div>
        ))}
      </div>
    )}

    <div className="flex flex-wrap gap-2">
      {project.tags.map(tag => (
        <span 
          key={tag} 
          className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 bg-white/5 rounded border border-white/5 text-brand-text-dim"
        >
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-accent/30">
      {/* Background Pattern */}
      <div className="fixed inset-0 data-grid opacity-20 pointer-events-none" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-brand-border bg-brand-bg/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono text-sm font-bold tracking-tighter">
            DIKTA PRADIKA
          </span>
          <div className="flex gap-6 text-sm font-medium text-brand-text-dim">
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24 relative">
        {/* Hero Section */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-mono">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
                  </span>
                  Available for Data Analyst roles
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-text-dim text-xs font-mono">
                  <MapPin className="w-3 h-3" /> South Tangerang City
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                Dikta Pradika <br />
                <span className="text-brand-text-dim">Growth-Driven Data Analyst.</span>
              </h1>
              <p className="text-xl text-brand-text-dim max-w-2xl mb-8 leading-relaxed">
                Former Growth Consultant with 2 years of experience in data-driven performance analysis. 
                I specialize in translating complex campaign data into clear insights using SQL, Python, and Tableau to drive business growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://docs.google.com/presentation/d/1GkpuplYkwyG8wzE4twAhMzM7ZUcOt36Jle-_uFUiI_o/edit?usp=sharing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-brand-accent hover:text-white transition-all duration-300 flex items-center gap-2"
                >
                  View Case Study <ChevronRight className="w-4 h-4" />
                </a>
                <div className="flex items-center gap-3 px-4">
                  <a href="https://www.linkedin.com/in/dikta-pradika-99187761/" className="p-2 text-brand-text-dim hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><Linkedin className="w-5 h-5" /></a>
                  <a href="https://wa.me/628119511773" className="p-2 text-brand-text-dim hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><MessageCircle className="w-5 h-5" /></a>
                  <a href="mailto:diktapradika@gmail.com" className="p-2 text-brand-text-dim hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-brand-border group shadow-2xl shadow-brand-accent/5">
                {/* Grain Overlay to mask low-res */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                
                <div className="absolute inset-0 bg-brand-accent/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src="https://i.ibb.co.com/KcJ3rdFJ/image.png" 
                  alt="Dikta Pradika" 
                  className="w-full h-full object-cover grayscale object-[center_12%] group-hover:grayscale-0 transition-all duration-700 scale-125 group-hover:scale-115 brightness-[1.02] contrast-[1.05]"
                  style={{ filter: 'grayscale(1) contrast(1.1) brightness(1.05) drop-shadow(0 0 1px rgba(255,255,255,0.1))' }}
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-brand-card/80 backdrop-blur-md border border-brand-border rounded-xl z-30">
                  <div className="text-xs font-mono text-brand-accent mb-1 uppercase tracking-widest">Growth Consultant</div>
                  <div className="text-sm font-bold">Dikta Pradika</div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-accent/10 rounded-full blur-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-accent/5 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {[
            { icon: Terminal, label: 'Data Experience', value: '2+ Years' },
            { icon: BarChart3, label: 'Growth Metrics', value: '+10% Leads' },
            { icon: Code2, label: 'Tech Stack', value: 'SQL/Python' },
          ].map((stat, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-brand-border bg-brand-card/50">
              <stat.icon className="w-5 h-5 text-brand-accent mb-4" />
              <div className="text-sm text-brand-text-dim mb-1">{stat.label}</div>
              <div className="text-2xl font-bold font-mono">{stat.value}</div>
            </div>
          ))}
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-32">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
              <p className="text-brand-text-dim">Key analysis and growth optimization projects.</p>
            </div>
            <div className="hidden md:block h-px flex-1 bg-brand-border mx-8 mb-4" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <Briefcase className="w-6 h-6 text-brand-accent" />
            <h2 className="text-3xl font-bold">Working Experience</h2>
          </div>
          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l border-brand-border"
              >
                <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-brand-accent" />
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <div className="text-brand-accent font-medium">{exp.company}</div>
                  </div>
                  <div className="text-sm font-mono text-brand-text-dim bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    {exp.period}
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-brand-text-dim text-sm leading-relaxed flex gap-3">
                      <span className="text-brand-accent mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-32">
          <h2 className="text-3xl font-bold mb-12">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {SKILLS.map((skill, idx) => (
              <div key={idx}>
                <h3 className="text-sm font-mono text-brand-accent uppercase tracking-widest mb-6">{skill.category}</h3>
                <ul className="space-y-4">
                  {skill.items.map(item => (
                    <li key={item} className="flex items-center gap-3 text-brand-text-dim hover:text-white transition-colors group">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-border group-hover:bg-brand-accent transition-colors" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <GraduationCap className="w-6 h-6 text-brand-accent" />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-brand-border bg-brand-card/30">
                <div className="text-xs font-mono text-brand-accent mb-2">{edu.period}</div>
                <h3 className="text-lg font-bold mb-1">{edu.school}</h3>
                <div className="text-sm text-white/80 mb-2">{edu.degree}</div>
                {edu.details && <div className="text-xs text-brand-text-dim font-mono">{edu.details}</div>}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative">
          <div className="absolute inset-0 bg-brand-accent/5 blur-3xl rounded-full -z-10" />
          <div className="p-12 rounded-3xl border border-brand-border bg-brand-card text-center">
            <h2 className="text-4xl font-bold mb-6">Let's connect</h2>
            <p className="text-brand-text-dim max-w-lg mx-auto mb-10">
              I'm excited to bring my growth mindset and data analysis experience to your team. 
              Feel free to reach out for collaborations or opportunities!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="mailto:diktapradika@gmail.com" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform"
              >
                Email Me <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/dikta-pradika-99187761/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-accent text-white font-bold rounded-full hover:scale-105 transition-transform"
              >
                LinkedIn <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/628119511773" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white font-bold rounded-full hover:scale-105 transition-transform"
              >
                WhatsApp <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-brand-border py-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-brand-text-dim text-sm font-mono">
            © 2026 DIKTA PRADIKA. Built with React & Tailwind.
          </div>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/dikta-pradika-99187761/" target="_blank" rel="noopener noreferrer" className="text-brand-text-dim hover:text-white transition-colors text-sm">LinkedIn</a>
            <a href="https://wa.me/628119511773" target="_blank" rel="noopener noreferrer" className="text-brand-text-dim hover:text-white transition-colors text-sm">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
