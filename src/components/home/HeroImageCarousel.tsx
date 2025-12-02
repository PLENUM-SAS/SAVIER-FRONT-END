import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Star } from 'lucide-react';

// Imágenes locales
import pan from '/src/assets/hero/PAN.png';
import galletas from '/src/assets/hero/GALLETAS.png';
import desayunos from '/src/assets/hero/DESAYUNO.png';
import torticas from '/src/assets/hero/TORTICA.png';
import panaderiaarte from '/src/assets/hero/panaderiaartesanal.png';

const HeroImageCarousel = () => {
  const items = [
    { image: pan, discount: 65, review: { text: "El pan está crujiente y delicioso, ¡como recién horneado!", author: "María R." } },
    { image: galletas, discount: 70, review: { text: "Galletas crujientes y dulces, mi favorito.", author: "Carlos S." } },
    { image: desayunos, discount: 55, review: { text: "Desayuno completo y fresco, repetiré.", author: "Lucía M." } },
    { image: torticas, discount: 60, review: { text: "Torticas suaves y esponjosas, ¡sabor casero!", author: "Ana P." } },
  ];

  const [index, setIndex] = useState(0);
  const current = items[index];

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 5000);
    return () => clearInterval(t);
  }, [items.length]);

  return (
    <div className="relative w-full h-[500px] lg:h-[650px] rounded-3xl overflow-hidden shadow-strong">
      {/* Imagen con cambio suave (sin desaparecer) */}
      <motion.div
        key={current.image}
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <img
          src={current.image}
          alt="Producto SAVIER"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Palpitación y brillo eternos (sin desaparecer) */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
      >
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent blur-lg" />
        </motion.div>
      </motion.div>

      {/* Contenido que cambia a la par (sin desaparecer) */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {/* Descuento con deslizamiento suave */}
        <motion.div
          key={current.discount}
          className="absolute top-4 right-4 w-20 h-20 rounded-full bg-accent flex items-center justify-center shadow-accent"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="font-bebas text-2xl text-accent-foreground">-{current.discount}%</span>
        </motion.div>

        {/* Reseña con deslizamiento suave */}
        <motion.div
          key={current.review.text}
          className="absolute bottom-24 left-4 glass rounded-2xl px-5 py-4 shadow-medium max-w-xs"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="text-sm text-foreground italic">“{current.review.text}”</p>
          <p className="text-xs text-muted-foreground mt-1">— {current.review.author}</p>
        </motion.div>

        {/* Logo con deslizamiento suave */}
        <motion.div
          className="absolute top-4 left-[35%] glass rounded-2xl px-4 py-3 shadow-medium flex items-center gap-3"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img src={panaderiaarte} alt="SAVIER" className="h-8 w-auto" />
          <div>
            <p className="font-semibold text-foreground text-sm">Panadería Artesanal</p>
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-accent text-accent" />
              <span className="text-xs text-muted-foreground">4.8</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition ${i === index ? 'bg-white' : 'bg-white/40'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroImageCarousel;