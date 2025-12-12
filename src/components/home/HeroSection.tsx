import { motion } from "framer-motion";
import { ArrowRight, Play, Clock, Star, Sparkles, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroImageCarousel from './HeroImageCarousel';

const HeroSection = () => {
  const stats = [
    { number: "15K+", label: "Productos rescatados", color: "text-primary", icon: Sparkles },
    { number: "320+", label: "Comercios aliados", color: "text-secondary", icon: Star },
    { number: "70%", label: "Ahorro promedio", color: "text-accent", icon: Leaf },
  ];

  // Partículas flotantes decorativas
  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 30 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 15,
  }));

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Fondo con gradiente mejorado y múltiples capas */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAFAF7] via-[#F5F1E8] to-[#E9E5DA]" />

      {/* Capa de gradiente adicional para profundidad */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Partículas flotantes mejoradas con movimiento orgánico */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              background: `radial-gradient(circle, hsl(5 56% 52% / 0.08) 0%, hsl(157 40% 31% / 0.04) 100%)`,
            }}
            animate={{
              y: [0, -40, -20, -50, 0],
              x: [0, 20, -15, 25, 0],
              scale: [1, 1.2, 0.9, 1.15, 1],
              opacity: [0.3, 0.6, 0.4, 0.7, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Patrón de puntos decorativo con animación sutil */}
      <motion.div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #346C53 1.5px, transparent 1.5px)',
          backgroundSize: '40px 40px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '40px 40px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 lg:space-y-10">
            {/* Pre-headline mejorado */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-secondary/10 to-success/10 text-secondary border border-secondary/20 shadow-sm"
            >
              <motion.span
                className="text-lg"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                🌱
              </motion.span>
              <span className="text-sm font-semibold uppercase tracking-wider">
                Rescata productos, salva el planeta
              </span>
              <motion.div
                className="w-2 h-2 rounded-full bg-secondary"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Headline mejorado */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground leading-[1.1]"
            >
              Productos{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">frescos</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute bottom-2 left-0 right-0 h-3 bg-primary/20 rounded-full -z-0"
                />
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="absolute bottom-1 left-0 h-1 bg-primary rounded-full"
                />
              </span>{" "}
              a precios que no creerás
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              Conectamos comercios locales con compradores inteligentes. Productos de calidad con hasta 70% de descuento, rescatados antes del desperdicio.
            </motion.p>

            {/* CTAs mejorados */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/productos" className="relative group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="hero"
                    className="group w-full sm:w-auto relative overflow-hidden shadow-lg hover:shadow-primary/50 transition-all duration-300"
                  >
                    {/* Ripple effect container */}
                    <motion.div
                      className="absolute inset-0 bg-primary/30 rounded-lg"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative z-10 flex items-center gap-2">
                      Explorar productos ahora
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                    </span>
                  </Button>
                </motion.div>
              </Link>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="heroOutline"
                  className="w-full sm:w-auto relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    <Play className="h-5 w-5" />
                    Ver cómo funciona
                  </span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats mejoradas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center sm:text-left group cursor-pointer"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="relative inline-block">
                      <motion.div
                        className={`font-bebas text-4xl lg:text-5xl ${stat.color} relative z-10`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {stat.number}
                      </motion.div>
                      {/* Icono decorativo */}
                      <motion.div
                        className={`absolute -top-2 -right-6 ${stat.color} opacity-20`}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <Icon className="h-6 w-6" />
                      </motion.div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 group-hover:text-foreground transition-colors">
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column - Carrusel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full h-[500px] lg:h-[650px]"
          >
            {/* Glow effect detrás del carrusel */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-3xl blur-3xl -z-10"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <HeroImageCarousel />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;