import { useEffect, useState } from 'react';
import { motion, Variants, Easing, AnimatePresence } from 'framer-motion';
import { ArrowRight, Search, X, Filter, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
  const allProducts = [
    { image: heroBread, name: 'Pan de Masa Madre', commerce: 'Panadería Artesanal', commerceType: 'Panadería', discount: 50, originalPrice: 12000, stock: 8 },
    { image: freshFruits, name: 'Frutas Variadas Premium', commerce: 'Frutería La Cosecha', commerceType: 'Frutería', discount: 60, originalPrice: 25000, stock: 5 },
    { image: croissants, name: 'Croissants de Almendra x3', commerce: 'Café Parisino', commerceType: 'Cafetería', discount: 55, originalPrice: 18000, stock: 12 },
    { image: vegetables, name: 'Verduras Frescas Mix', commerce: 'Mercado Verde', commerceType: 'Frutería', discount: 65, originalPrice: 20000, stock: 3 },
    { image: cheese, name: 'Quesos Artesanales', commerce: 'Delicatessen Gourmet', commerceType: 'Tienda Gourmet', discount: 45, originalPrice: 45000, stock: 6 },
    { image: cakes, name: 'Torta de Chocolate', commerce: 'Dulce Tentación', commerceType: 'Pastelería', discount: 50, originalPrice: 35000, stock: 4 },
    { image: juice, name: 'Cafe de Caramelo', commerce: 'Café Saludable', commerceType: 'Cafetería', discount: 40, originalPrice: 15000, stock: 10 },
    { image: bowl, name: 'Bowl de Frutas y Yogur', commerce: 'Frutería La Cosecha', commerceType: 'Frutería', discount: 35, originalPrice: 18000, stock: 7 },
  ];

  const categories = ['Todos', 'Panadería', 'Frutería', 'Cafetería', 'Tienda Gourmet', 'Pastelería'];

  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  // Filtrar productos
  useEffect(() => {
    let filtered = allProducts;

    // Filtro por categoría
    if (selectedCategory !== 'Todos') {
      filtered = filtered.filter(p => p.commerceType === selectedCategory);
    }

    // Filtro por búsqueda
    if (searchQuery) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.commerce.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchQuery]);

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as Easing
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: -20,
      transition: { duration: 0.3 }
    }
  };

  /* Contador animado */
  const [count, setCount] = useState(0);
  const target = 324;
  useEffect(() => {
    const duration = 3500;
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
        {/* Título */}
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

        {/* Contador */}
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

        {/* Imagen con mapa */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: [1, 1.03, 1] }}
          transition={{
            opacity: { duration: 1.5, ease: 'easeOut' },
            scale: { repeat: Infinity, duration: 4, ease: 'easeInOut' }
          }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl">
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

        {/* NUEVO: Barra de búsqueda y filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* Búsqueda */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted" />
              <Input
                type="text"
                placeholder="Buscar productos o comercios..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-14 pl-12 pr-12 bg-muted/10 border-muted/30 text-background placeholder:text-muted/50 focus:border-accent text-lg"
              />
              {searchQuery && (
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-background"
                >
                  <X className="h-5 w-5" />
                </motion.button>
              )}
            </div>
          </div>

          {/* Filtros de categoría */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <motion.div
              className="flex items-center gap-2 text-muted/70"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Filter className="h-4 w-4" />
              <span className="text-sm font-medium">Filtrar:</span>
            </motion.div>

            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                    ? 'bg-accent text-accent-foreground shadow-lg'
                    : 'bg-muted/10 text-muted hover:bg-muted/20 hover:text-background'
                  }`}
              >
                {category}
                {selectedCategory === category && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-accent rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Resultados encontrados */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-6 text-muted/70"
          >
            <span className="inline-flex items-center gap-2">
              <TrendingDown className="h-4 w-4 text-accent" />
              {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
            </span>
          </motion.div>
        </motion.div>

        {/* Grid de productos filtrados */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + searchQuery}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredProducts.map((product, index) => (
              <motion.div key={`${product.name}-${index}`} variants={itemVariants}>
                <ProductCard {...product} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Mensaje si no hay resultados */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">😔</div>
            <h3 className="font-heading text-2xl font-bold text-background mb-2">
              No encontramos productos
            </h3>
            <p className="text-muted mb-6">
              Intenta ajustar tus filtros o búsqueda
            </p>
            <Button
              variant="accent"
              onClick={() => {
                setSelectedCategory('Todos');
                setSearchQuery('');
              }}
            >
              Limpiar filtros
            </Button>
          </motion.div>
        )}

        {/* CTA final */}
        {filteredProducts.length > 0 && (
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
        )}
      </div>
    </section>
  );
};

export default ProductGallery;