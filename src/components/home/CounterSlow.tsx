import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CounterSlow = () => {
  const [count, setCount] = useState(0);
  const target = 324;

  useEffect(() => {
    const duration = 3500; // más lento
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <motion.span
        className="font-bebas text-8xl md:text-9xl"
        style={{ color: '#EBBF68' }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        {count}
      </motion.span>
      <p className="mt-2 text-xl md:text-2xl">productos cerca de ti</p>
    </>
  );
};

export default CounterSlow;