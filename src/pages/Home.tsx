import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedText from '../components/AnimatedText';
import ColorShift from '../components/ColorShift';
import SocialLinks from '../components/SocialLinks';
import BackgroundMusic from '../components/BackgroundMusic';
import TechStack from '../components/TechStack';
import { blogs } from '../data/blogs';

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-black text-white p-4 md:p-8 overflow-hidden"
    >
      <BackgroundMusic />
      <div className="max-w-4xl mx-auto space-y-8 md:space-y-16">
        <motion.header
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="text-center space-y-4"
        >
          <motion.div
            animate={{ 
              textShadow: [
                "0 0 10px #00e1ff",
                "0 0 20px #ff006e",
                "0 0 10px #00e1ff"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <h1 className="text-4xl md:text-6xl font-bold font-mono glitch">Pragyan Pandey</h1>
          </motion.div>
          <AnimatedText
            text="Developer + Security Researcher + Cloud Architect"
            className="text-lg md:text-xl text-purple-300 italic"
          />
          <motion.p 
            className="text-cyan-400 font-mono"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            @coderpragyan
          </motion.p>
        </motion.header>

        <TechStack />

        <motion.section
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold text-purple-300">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {blogs.slice(0, 2).map((blog, i) => (
              <Link
                key={blog.id}
                to="/blogs"
                className="block p-4 rounded-lg cyber-border hover:bg-purple-900/30 transition-all transform hover:scale-105 duration-300"
              >
                <h3 className="text-xl font-bold text-cyan-400">{blog.title}</h3>
                <p className="text-purple-300">{blog.date}</p>
              </Link>
            ))}
          </div>
        </motion.section>

        <motion.footer
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center space-y-6 py-8"
        >
          <SocialLinks />
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/blogs"
              className="px-6 py-2 rounded-full cyber-border hover:bg-purple-900/30 transition-all transform hover:scale-110 duration-300"
            >
              Read Blog
            </Link>
            <Link
              to="/api"
              className="px-6 py-2 rounded-full cyber-border hover:bg-purple-900/30 transition-all transform hover:scale-110 duration-300"
            >
              API Docs
            </Link>
          </div>
        </motion.footer>
      </div>
    </motion.div>
  );
}