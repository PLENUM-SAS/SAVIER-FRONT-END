import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingBag, Package, CheckCircle, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

// Imágenes locales
import paso1 from '/src/assets/howwework/ProductosFrescos.png';
import paso2 from '/src/assets/howwework/CantidadReserva.png';
import paso3 from '/src/assets/howwework/RecogeRecibe.png';
import logoSavier from '/src/assets/logosavier.svg';

const HowWeWorkPage = () => {
  const pasos = [
    {
      id: 1,
      number: "01",
      icon: <ShoppingBag className="w-12 h-12" />,
      title: "Descubre productos frescos",
      description: "Explora cientos de productos de comercios locales. Filtra por tipo de comercio, descuento o categoría. Elige exactamente lo que quieres.",
      image: paso1,
      color: "#C55145",
    },
    {
      id: 2,
      number: "02",
      icon: <Package className="w-12 h-12" />,
      title: "Elige cantidad y reserva",
      description: "Selecciona cuántas unidades quieres. Agrega al carrito, paga online de forma segura y recibe confirmación inmediata con tu stock reservado.",
      image: paso2,
      color: "#EBBF68",
    },
    {
      id: 3,
      number: "03",
      icon: <CheckCircle className="w-12 h-12" />,
      title: "Recoge o recibe",
      description: "Pasa por el comercio en el horario indicado o recibe tu pedido en casa. ¡Listo para disfrutar tus productos frescos!",
      image: paso3,
      color: "#346C53",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EEECE8] to-[#FFFFFF]">
      {/* Hero limpio con logo estático y sin botones abajo */}
      <motion.section
        className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        {/* Imagen de fondo estática */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/howwework/hero-background.jpg"
            alt="SAVIER Cómo Funciona"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        </div>

        {/* Logo estático con palpitación */}
        <motion.div
          className="absolute top-8 left-8 z-20"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        >
          <img
            src={logoSavier}
            alt="SAVIER"
            className="h-16 w-auto drop-shadow-lg"
          />
        </motion.div>

        {/* Contenido sin botones abajo */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1
            className="font-bebas text-6xl lg:text-7xl text-white mb-6 drop-shadow-lg"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            ¿Cómo Funciona?
          </motion.h1>

          <motion.p
            className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            SAVIER te conecta con productos frescos a precios increíbles, mientras le das una segunda oportunidad
            a la comida de los negocios locales. Cada rescate es un paso simple que reduce el desperdicio y apoya al planeta.
          </motion.p>
        </div>
      </motion.section>

      {/* Pasos (sin cambios en tu lógica) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {pasos.map((paso, index) => (
          <motion.div
            key={paso.id}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 mb-24`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Content */}
            <div className="flex-1 relative">
              <div className="relative z-10">
                <div className="text-8xl md:text-9xl font-bebas opacity-10 absolute -top-8 -left-4" style={{ color: paso.color }}>
                  {paso.number}
                </div>
                <div className="relative z-20 pl-4">
                  <div className="text-6xl mb-4" style={{ filter: `drop-shadow(0 0 20px ${paso.color}40)` }}>
                    {paso.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#262626] mb-4">{paso.title}</h3>
                  <p className="text-lg text-[#6F6F6F] mb-6 leading-relaxed">{paso.description}</p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <Link to="/productos">
                      <Button variant="hero" size="xl" className="group">
                        <ShoppingBag className="h-5 w-5 mr-2" />
                        Explorar productos ahora
                        <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-2" />
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Imagen */}
            <motion.div
              className="flex-1 w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img src={paso.image} alt={paso.title} className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </section>

      {/* Final CTA */}
      <motion.section
        className="text-center py-20 px-6 bg-[#346C53] text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-bebas text-5xl lg:text-6xl mb-6">¿Empezamos?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Únete a la revolución contra el desperdicio de alimentos</p>
        <Link to="/registro">
          <Button variant="accent" size="xl" className="group">
            <Sparkles className="h-5 w-5" />
            Crear cuenta en 30s
          </Button>
        </Link>
        <p className="text-sm text-white/70 mt-4">Sin tarjeta de crédito · Cancela cuando quieras</p>
      </motion.section>
    </div>
  );
};

export default HowWeWorkPage;