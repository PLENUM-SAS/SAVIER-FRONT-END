import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Store, MapPin } from 'lucide-react';

const stores = [
  { id: 1, type: 'Panadería', name: 'Panadería Artesanal', discount: 50, distance: 120 },
  { id: 2, type: 'Frutería', name: 'Frutería La Cosecha', discount: 60, distance: 80 },
  { id: 3, type: 'Cafetería', name: 'Café Parisino', discount: 55, distance: 150 },
  { id: 4, type: 'Pastelería', name: 'Dulce Tentación', discount: 50, distance: 200 },
];

export default function MapNearby() {
  const [count, setCount] = useState(0);
  const target = 324;

  useEffect(() => {
    const duration = 2500;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-savier-deep-black text-background">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
        {/* Contador animado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="font-bebas text-7xl md:text-8xl" style={{ color: '#EBBF68' }}>
            {count}
          </span>
          <p className="mt-2 text-xl md:text-2xl">productos cerca de ti</p>
        </motion.div>

        {/* Mapa visual */}
        <div className="relative max-w-5xl mx-auto">
          {/* Fondo mapa estilo glass */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-80 rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md"
          >
            {/* Punto central "Yo" */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold">
                  Yo
                </div>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm">Me</span>
              </div>
            </div>

            {/* Tiendas alrededor */}
            {stores.map((s, i) => {
              const angle = (i * 360) / stores.length;
              const radius = 30; // %
              const top = `calc(50% + ${radius * Math.sin((angle * Math.PI) / 180)}% - 40px)`;
              const left = `calc(50% + ${radius * Math.cos((angle * Math.PI) / 180)}% - 40px)`;

              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
                  style={{ top, left }}
                  className="absolute w-20"
                >
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-terracotta flex items-center justify-center text-background">
                      <Store className="w-5 h-5" />
                    </div>
                    <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap">
                      {s.type}
                    </span>
                    <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded-full">
                      -{s.discount}%
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Filtros visuales (solo estético) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {['Tipo de comercio', 'Categoría', 'Descuento', 'Ciudad'].map((f) => (
            <div
              key={f}
              className="px-4 py-2 rounded-full border border-white/20 bg-white/10 text-sm backdrop-blur-sm"
            >
              {f}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}