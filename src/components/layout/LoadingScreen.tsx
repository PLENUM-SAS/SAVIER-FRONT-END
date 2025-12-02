'use client'; // opcional en Vite, pero lo dejamos por compatibilidad
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onFinish();
    }, 5000); // ← 5 s totales
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ backgroundColor: '#EEECE8' }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1, ease: 'easeInOut' }} // fade-out más lento
        >
          {/* Logo arriba */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'circOut' }}
            className="absolute top-12"
          >
            <Logo className="w-32 text-[#346C53]" />
          </motion.div>

          {/* Anillos cromáticos → más lento */}
          <motion.div
            className="relative w-40 h-40"
            initial={{ rotate: 0 }}
            animate={{ rotate: 720 }} // dos vueltas completas
            transition={{ duration: 3, ease: 'easeInOut' }}
          >
            <Ring bg="#346C53" delay={0} />
            <Ring bg="#C55145" delay={0.3} />
            <Ring bg="#EBBF68" delay={0.6} />
            <Ring bg="#98A499" delay={0.9} />
          </motion.div>

          {/* Headline + claim → aparece más tarde y despacio */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <h1
              className="text-7xl md:text-9xl font-extrabold"
              style={{ fontFamily: 'Clash Display, sans-serif', color: '#346C53' }}
            >
              SAVIER
            </h1>
            <p className="mt-4 text-lg md:text-xl" style={{ color: '#98A499' }}>
              Donde cada rescate es una victoria contra el desperdicio
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* Ring animado → duración extendida */
function Ring({ bg, delay }: { bg: string; delay: number }) {
  return (
    <motion.div
      className="absolute inset-0 rounded-full"
      style={{ border: `8px solid ${bg}` }}
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: [0.6, 1.3, 1], opacity: [0, 1, 0] }}
      transition={{
        duration: 2.4,
        delay,
        ease: 'easeOut',
        times: [0, 0.6, 1],
      }}
    />
  );
}

/* Logo placeholder → cámbialo por tu SVG real */
function Logo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 48" fill="currentColor">
      <text x="0" y="36" fontSize="40" fontWeight="800">
        SAVIER
      </text>
    </svg>
  );
}