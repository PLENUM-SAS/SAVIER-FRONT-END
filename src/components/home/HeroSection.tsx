import { motion } from "framer-motion";
import { ArrowRight, Play, Clock, Star, Package } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bread.jpg";
import fruitsImage from "@/assets/fresh-fruits.jpg";

const HeroSection = () => {
  const stats = [
    { number: "15K+", label: "Productos rescatados", color: "text-primary" },
    { number: "320+", label: "Comercios aliados", color: "text-secondary" },
    { number: "70%", label: "Ahorro promedio", color: "text-accent" },
  ];

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 lg:space-y-10">
            {/* Pre-headline */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary"
            >
              <span className="text-lg">🌱</span>
              <span className="text-sm font-semibold uppercase tracking-wider">
                Rescata productos, salva el planeta
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground leading-[1.1]"
            >
              Productos{" "}
              <span className="relative text-primary">
                frescos
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute bottom-2 left-0 h-1 bg-primary/30 rounded-full"
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

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/productos">
                <Button variant="hero" className="group w-full sm:w-auto">
                  Explorar productos ahora
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                </Button>
              </Link>
              <Button variant="heroOutline" className="w-full sm:w-auto">
                <Play className="h-5 w-5" />
                Ver cómo funciona
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <span className={`font-bebas text-4xl lg:text-5xl ${stat.color}`}>
                    {stat.number}
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Images */}
          <div className="relative h-[500px] lg:h-[650px]">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute right-0 top-8 w-[85%] h-[75%] z-10"
            >
              <img
                src={heroImage}
                alt="Productos frescos de panadería"
                className="w-full h-full object-cover rounded-3xl shadow-strong"
              />
              {/* Discount Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2, type: "spring" }}
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-accent flex items-center justify-center shadow-accent"
              >
                <span className="font-bebas text-2xl text-accent-foreground">-65%</span>
              </motion.div>
            </motion.div>

            {/* Secondary Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 0.8, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute left-0 top-20 w-[55%] h-[55%] -z-0"
            >
              <img
                src={fruitsImage}
                alt="Frutas frescas"
                className="w-full h-full object-cover rounded-3xl opacity-70"
              />
            </motion.div>

            {/* Floating Card - Disponible ahora */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="absolute bottom-24 left-4 glass rounded-2xl px-5 py-4 shadow-medium animate-float"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Últimas 5 unidades</p>
                  <p className="text-xs text-muted-foreground">Disponible ahora</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Card - Comercio */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="absolute top-4 left-[35%] glass rounded-2xl px-5 py-4 shadow-medium animate-float-delayed"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold">
                  PA
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Panadería Artesanal</p>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-accent text-accent" />
                    <span className="text-xs text-muted-foreground">4.8</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
