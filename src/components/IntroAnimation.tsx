import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function IntroAnimation() {
  const [showIntro, setShowIntro] = useState(true);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (step < 2) {
        setStep(step + 1);
      } else {
        setShowIntro(false);
      }
    }, 1500); // Faster animation

    return () => clearTimeout(timer);
  }, [step]);

  if (!showIntro) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black z-50 flex items-center justify-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {step === 0 && (
          <motion.div
            className="text-center"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <h1 className="text-3xl md:text-6xl gradient-text glitch">
              Welcome to Developer's Den
            </h1>
          </motion.div>
        )}
        {step === 1 && (
          <motion.div
            className="text-2xl md:text-4xl text-[#00e1ff] glitch"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            IT'S PRAGYAN'S ASSISTANT
          </motion.div>
        )}
        {step === 2 && (
          <motion.div
            className="flex flex-col items-center justify-center space-y-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.5 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span 
              className="text-4xl md:text-6xl gradient-text"
              animate={{ 
                textShadow: [
                  "0 0 10px #00e1ff",
                  "0 0 20px #ff006e",
                  "0 0 10px #00e1ff"
                ]
              }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              {'<'} PRAGYAN {'>'}
            </motion.span>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}