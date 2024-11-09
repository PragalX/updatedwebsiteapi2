import { motion } from 'framer-motion';
import ColorShift from './ColorShift';
import {
  LayoutGrid,
  Cloud,
  Server,
  Github,
  Database,
  Globe,
  Cpu,
  Code,
  Terminal
} from 'lucide-react';

const technologies = [
  { name: 'React', icon: LayoutGrid, color: '#61DAFB' },
  { name: 'Python', icon: Terminal, color: '#3776AB' },
  { name: 'Ruby', icon: Code, color: '#CC342D' },
  { name: 'JavaScript', icon: Globe, color: '#F7DF1E' },
  { name: 'Node.js', icon: Server, color: '#339933' },
  { name: 'Cloud', icon: Cloud, color: '#FF9900' }
];

const cloudPlatforms = [
  { name: 'AWS', description: 'Advanced Cloud Infrastructure Specialist' },
  { name: 'Azure', description: 'Enterprise Solutions Architect' },
  { name: 'IBM Cloud', description: 'Quantum Computing Explorer' },
  { name: 'Oracle Cloud', description: 'Database Performance Expert' },
  { name: 'Heroku', description: 'Rapid Deployment Master' },
  { name: 'VPS/RDP', description: 'Infrastructure Optimization Wizard' }
];

export default function TechStack() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold text-purple-300">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 p-4 rounded-lg cyber-border"
            >
              <ColorShift>
                <tech.icon size={24} />
              </ColorShift>
              <span className="font-mono">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold text-purple-300">About Me</h2>
        <div className="prose prose-invert max-w-none space-y-4">
          <p className="text-cyan-400 font-mono">
            Full-stack developer and security researcher with a passion for building secure, scalable systems.
            Specializing in cloud architecture and penetration testing.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold text-purple-300">Cloud Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cloudPlatforms.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-4 rounded-lg cyber-border space-y-2"
            >
              <ColorShift>
                <h3 className="text-xl font-bold">{platform.name}</h3>
              </ColorShift>
              <p className="text-sm text-purple-300">{platform.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}