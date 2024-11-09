import { motion } from 'framer-motion';

interface Props {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className = '' }: Props) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {text}
    </motion.span>
  );
}