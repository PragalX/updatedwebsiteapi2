import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const links = [
  { icon: Github, href: 'https://github.com/coderpragyan', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com/coderpragyan', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/in/coderpragyan', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:contact@pragyanpandey.com', label: 'Email' },
];

export default function SocialLinks() {
  return (
    <div className="flex gap-6">
      {links.map((link, i) => (
        <motion.a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="text-purple-300 hover:text-cyan-400 transition-colors"
        >
          <link.icon size={24} />
        </motion.a>
      ))}
    </div>
  );
}