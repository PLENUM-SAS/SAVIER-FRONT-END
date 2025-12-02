import { useEffect, useState } from 'react';
import { motion, Variants, Easing } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from './ProductCard';

import heroBread from '@/assets/hero-bread.jpg';
import freshFruits from '@/assets/fresh-fruits.jpg';
import croissants from '@/assets/croissants.jpg';
import vegetables from '@/assets/vegetables.jpg';
import cheese from '@/assets/cheese.jpg';
import cakes from '@/assets/cakes.jpg';
import juice from '@/assets/juice.png';
import bowl from '@/assets/bowl.jpg';

const ProductGallery = () => {
  const products = [
    { image: heroBread, name: 'Pan de Masa Madre', commerce: 'Panadería Artesanal', commerceType: 'Panadería', discount: 50, originalPrice: 12000, stock: 8 },
    { image: freshFruits, name: 'Frutas Variadas Premium', commerce: 'Frutería La Cosecha', commerceType: 'Frutería', discount: 60, originalPrice: 25000, stock: 5 },
    { image: croissants, name: 'Croissants de Almendra x3', commerce: 'Café Parisino', commerceType: 'Cafetería', discount: 55, originalPrice: 18000, stock: 12 },
    { image: vegetables, name: 'Verduras Frescas Mix', commerce: 'Mercado Verde', commerceType: 'Frutería', discount: 65, originalPrice: 20000, stock: 3 },
    { image: cheese, name: 'Quesos Artesanales', commerce: 'Delicatessen Gourmet', commerceType: 'Tienda Gourmet', discount: 45, originalPrice: 45000, stock: 6 },
    { image: cakes, name: 'Torta de Chocolate', commerce: 'Dulce Tentación', commerceType: 'Pastelería', discount: 50, originalPrice: 35000, stock: 4 },
    { image: juice, name: 'Cafe de Caramelo', commerce: 'Café Saludable', commerceType: 'Cafetería', discount: 40, originalPrice: 15000, stock: 10 },
    { image: bowl, name: 'Bowl de Frutas y Yogur', commerce: 'Frutería La Cosecha', commerceType: 'Frutería', discount: 35, originalPrice: 18000, stock: 7 },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as Easing } },
  };

  /* ===== Contador gordo y lento ===== */
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
    <section className="py-24 lg:py-32 bg-savier-deep-black text-background">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
        {/* 1️⃣ Título épico */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-8"
        >
          <h2 className="font-heading text-5xl lg:text-7xl font-extrabold text-background">
           ⭐ Nuestros productos te esperan ⭐
          </h2>
        </motion.div>

        {/* 2️⃣ Contador gordo y lento */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center mb-8"
        >
          <motion.span
            className="font-bebas text-8xl md:text-9xl"
            style={{ color: '#EBBF68' }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            {count}
          </motion.span>
          <p className="mt-2 text-xl md:text-2xl">Con Savier, decimos adiós al desperdicio y te damos la bienvenida</p>
          <p className="mt-2 text-xl md:text-2xl">a los mejores productos con descuento de establecimientos cercanos</p>
        </motion.div>

        {/* 3️⃣ Imagen real flotando (sin pins) */}
        <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: [1, 1.03, 1] }}
  transition={{
    opacity: { duration: 1.5, ease: 'easeOut' },        // entrada única
    scale: { repeat: Infinity, duration: 4, ease: 'easeInOut' } // palpitación lenta
  }}
  className="max-w-3xl mx-auto mb-16"
>
  <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl">
    {/* Brillo eterno */}
    <motion.div
      animate={{ x: ['-100%', '100%'] }}
      transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
      className="absolute inset-0 z-10 w-full h-full pointer-events-none"
    >
      <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent blur-lg" />
    </motion.div>

    <img
      src="/MAPfondo.png"
      alt="Comercios cerca de ti"
      className="w-full h-auto object-contain"
    />
  </div>
</motion.div>

        {/* 4️⃣ Grid de productos (igual que antes) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {products.map((product, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProductCard {...product} />
            </motion.div>
          ))}
        </motion.div>

        {/* 5️⃣ CTA final (sin link) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button variant="hero" className="group">
            Explorar más productos
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGallery;