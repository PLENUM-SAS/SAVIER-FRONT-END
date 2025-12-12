import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  ShoppingBag,
  Package,
  CheckCircle,
  Sparkles,
  Search,
  Clock,
  Shield,
  Leaf,
  TrendingDown,
  Users,
  ChevronDown
} from 'lucide-react';
import { useState } from 'react';
import Footer from '@/components/layout/Footer';

// Imágenes locales
import paso1 from '/src/assets/howwework/ProductosFrescos.png';
import paso2 from '/src/assets/howwework/CantidadReserva.png';
import paso3 from '/src/assets/howwework/RecogeRecibe.png';

const HowWeWorkPage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  const pasos = [
    {
      id: 1,
      number: "01",
      icon: Search,
      title: "Descubre productos frescos",
      description: "Explora cientos de productos de comercios locales cerca de ti. Filtra por tipo, descuento o categoría. Encuentra exactamente lo que buscas.",
      image: paso1,
      color: "#C44A3D",
      gradient: "from-primary/20 to-primary/5",
      details: [
        "Más de 500+ productos disponibles",
        "Filtros inteligentes por categoría",
        "Descuentos de hasta 70%",
        "Actualizaciones en tiempo real"
      ]
    },
    {
      id: 2,
      number: "02",
      icon: ShoppingBag,
      title: "Elige cantidad y reserva",
      description: "Selecciona las unidades que necesitas. Pago seguro online y confirmación instantánea. Tu stock queda reservado al momento.",
      image: paso2,
      color: "#F4C46A",
      gradient: "from-accent/20 to-accent/5",
      details: [
        "Pago 100% seguro",
        "Stock reservado al instante",
        "Sin cargos ocultos",
        "Confirmación por email y app"
      ]
    },
    {
      id: 3,
      number: "03",
      icon: Package,
      title: "Recoge o recibe",
      description: "Recoge en el comercio en el horario indicado o recibe delivery en casa. Simple, rápido y sostenible.",
      image: paso3,
      color: "#2F6E58",
      gradient: "from-secondary/20 to-secondary/5",
      details: [
        "Horarios flexibles de recogida",
        "Delivery disponible",
        "Empaques eco-friendly",
        "¡Disfruta productos frescos!"
      ]
    },
  ];

  const benefits = [
    {
      icon: TrendingDown,
      title: "Ahorra dinero",
      description: "Hasta 70% de descuento en productos de calidad",
      color: "text-primary"
    },
    {
      icon: Leaf,
      title: "Ayuda al planeta",
      description: "Reduce el desperdicio de alimentos",
      color: "text-secondary"
    },
    {
      icon: Users,
      title: "Apoya lo local",
      description: "Fortalece los comercios de tu comunidad",
      color: "text-accent"
    },
    {
      icon: Clock,
      title: "Ahorra tiempo",
      description: "Reserva en segundos, recoge cuando quieras",
      color: "text-success"
    }
  ];

  const faqs = [
    {
      question: "¿Cómo funcionan los descuentos?",
      answer: "Los comercios ofrecen productos que están cerca de su fecha de venta óptima con descuentos de hasta 70%. Son productos frescos y de calidad, solo que deben venderse pronto."
    },
    {
      question: "¿Los productos son seguros para consumir?",
      answer: "¡Absolutamente! Todos los productos están en perfecto estado y son seguros. Los comercios solo publican lo que ellos mismos venderían. La fecha de 'mejor antes de' no es la fecha de caducidad."
    },
    {
      question: "¿Puedo cancelar mi pedido?",
      answer: "Sí, puedes cancelar hasta 2 horas antes del horario de recogida seleccionado. El reembolso es automático y se procesa en 3-5 días hábiles."
    },
    {
      question: "¿Qué método de pago aceptan?",
      answer: "Aceptamos tarjetas de crédito, débito, PSE, y billeteras digitales como Nequi y Daviplata. El pago es 100% seguro y encriptado."
    },
    {
      question: "¿Hay delivery o solo recogida?",
      answer: "Depende del comercio. Algunos ofrecen delivery, otros solo recogida en tienda. Lo puedes ver en cada producto antes de comprarlo."
    }
  ];

  const stats = [
    { number: "15K+", label: "Productos rescatados", icon: Package },
    { number: "320+", label: "Comercios aliados", icon: Users },
    { number: "5 Ton", label: "CO₂ evitado", icon: Leaf },
    { number: "70%", label: "Ahorro promedio", icon: TrendingDown }
  ];

  return (
    <>
      <Helmet>
        <title>Cómo Funciona SAVIER | Rescata Alimentos Frescos</title>
        <meta name="description" content="Descubre cómo SAVIER te ayuda a ahorrar dinero mientras reduces el desperdicio de alimentos. Simple, rápido y sostenible." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section Premium */}
        <motion.section
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FAFAF7] via-[#F5F1E8] to-[#E9E5DA]" />

          {/* Animated gradient overlay */}
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

          {/* Decorative circles */}
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-20">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary border border-primary/20 mb-8 backdrop-blur-sm shadow-primary"
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Sparkles className="h-4 w-4" />
              </motion.div>
              <span className="text-sm font-semibold uppercase tracking-wider">
                Proceso Simple y Sostenible
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading text-5xl lg:text-7xl font-extrabold text-foreground mb-6"
            >
              ¿Cómo funciona{' '}
              <span className="text-gradient-primary">SAVIER</span>?
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Conectamos comercios locales con compradores inteligentes.
              Rescata productos frescos con hasta 70% de descuento y ayuda al planeta.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/productos">
                <Button variant="hero" size="lg" className="group">
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Explorar productos
                  <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-2" />
                </Button>
              </Link>
              <Button variant="heroOutline" size="lg" className="group">
                Ver demostración
                <ChevronDown className="h-5 w-5 ml-2 transition-transform group-hover:translate-y-1" />
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Benefits Grid */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
          {/* Decorative gradient orbs */}
          <motion.div
            className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-foreground mb-4">
                ¿Por qué elegir <span className="text-gradient-primary">SAVIER</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Múltiples beneficios con cada compra
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.15,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ y: -12, scale: 1.03 }}
                    className="glass-strong rounded-2xl p-8 text-center group cursor-pointer relative overflow-hidden"
                  >
                    {/* Gradient overlay on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />

                    <motion.div
                      className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-background to-muted/50 flex items-center justify-center relative z-10 shadow-soft"
                      whileHover={{
                        rotate: [0, -10, 10, -10, 0],
                        scale: [1, 1.1, 1.1, 1.1, 1]
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className={`h-9 w-9 ${benefit.color}`} />
                    </motion.div>

                    <h3 className="font-heading font-bold text-xl text-foreground mb-3 relative z-10">
                      {benefit.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Steps Section with Timeline */}
        <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(45deg, #346C53 0px, #346C53 1px, transparent 1px, transparent 20px)`,
            }} />
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
                Tres pasos para{' '}
                <span className="text-gradient-primary">empezar</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Un proceso simple que toma menos de 5 minutos
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline connector (desktop only) */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-secondary transform -translate-x-1/2 opacity-20" />

              {pasos.map((paso, index) => {
                const Icon = paso.icon;
                return (
                  <motion.div
                    key={paso.id}
                    className={`relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 mb-24 last:mb-0`}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    {/* Content Side */}
                    <div className="flex-1 w-full">
                      <motion.div
                        className="glass-strong rounded-3xl p-8 lg:p-10 relative overflow-hidden group"
                        whileHover={{
                          y: -8,
                          rotateY: index % 2 === 0 ? 3 : -3,
                        }}
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        {/* Gradient overlay on hover */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${paso.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                        />

                        {/* Watermark number */}
                        <motion.span
                          className="absolute top-6 right-6 font-bebas text-8xl lg:text-9xl opacity-10 select-none"
                          style={{ color: paso.color }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          {paso.number}
                        </motion.span>

                        <div className="relative z-10">
                          {/* Icon with 3D effect */}
                          <motion.div
                            className="w-20 h-20 mb-6 rounded-2xl flex items-center justify-center relative"
                            style={{
                              background: `linear-gradient(135deg, ${paso.color}20, ${paso.color}05)`,
                            }}
                            whileHover={{
                              rotateY: 360,
                              scale: 1.1,
                            }}
                            transition={{ duration: 0.8, type: "spring" }}
                          >
                            <Icon className="h-10 w-10" style={{ color: paso.color }} />
                          </motion.div>

                          <h3 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                            {paso.title}
                          </h3>
                          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            {paso.description}
                          </p>

                          {/* Details list */}
                          <ul className="space-y-2 mb-6">
                            {paso.details.map((detail, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * i }}
                                className="flex items-center gap-2 text-sm text-muted-foreground"
                              >
                                <CheckCircle className="h-4 w-4 text-success" />
                                {detail}
                              </motion.li>
                            ))}
                          </ul>

                          {/* CTA Button */}
                          <Link to="/productos">
                            <Button
                              className="group"
                              style={{
                                background: `linear-gradient(135deg, ${paso.color}, ${paso.color}dd)`,
                              }}
                            >
                              Empezar ahora
                              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-2" />
                            </Button>
                          </Link>
                        </div>
                      </motion.div>
                    </div>

                    {/* Image Side */}
                    <motion.div
                      className="flex-1 w-full"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.3 }}
                    >
                      <motion.div
                        className="relative overflow-hidden rounded-3xl shadow-elevated group cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      >
                        <img
                          src={paso.image}
                          alt={paso.title}
                          className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        {/* Overlay badge */}
                        <motion.div
                          className="absolute bottom-6 left-6 right-6"
                          initial={{ y: 20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          viewport={{ once: true }}
                        >
                          <div className="glass-dark rounded-2xl p-4">
                            <p className="text-white font-semibold">Paso {paso.id} de 3</p>
                            <p className="text-white/70 text-sm">{paso.title}</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    </motion.div>

                    {/* Timeline node (desktop only) */}
                    <motion.div
                      className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center z-20"
                      style={{
                        background: `linear-gradient(135deg, ${paso.color}, ${paso.color}dd)`,
                        boxShadow: `0 0 30px ${paso.color}40`,
                      }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.3, type: "spring" }}
                    >
                      <span className="text-white font-bebas text-2xl">{paso.number}</span>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-br from-secondary via-secondary/95 to-secondary text-white relative overflow-hidden">
          {/* Decorative elements */}
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-4">
                Nuestro impacto juntos
              </h2>
              <p className="text-white/80 text-lg">
                Cada rescate cuenta para un planeta más sostenible
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.05 }}
                    className="glass-dark rounded-2xl p-6 text-center"
                  >
                    <Icon className="h-8 w-8 mx-auto mb-3 text-accent" />
                    <div className="font-bebas text-5xl text-white mb-2">
                      {stat.number}
                    </div>
                    <p className="text-white/70 text-sm font-medium">
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-[0.015]">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }} />
          </div>

          <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 mb-6"
              >
                <Shield className="h-4 w-4" />
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Preguntas Frecuentes
                </span>
              </motion.div>

              <h2 className="font-heading text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
                Todo lo que necesitas saber
              </h2>
              <p className="text-lg text-muted-foreground">
                Resolvemos tus dudas sobre SAVIER
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.01 }}
                  className="glass-strong rounded-2xl overflow-hidden shadow-smooth"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full text-left p-6 flex items-center justify-between hover:bg-primary/5 transition-all duration-300"
                  >
                    <h3 className="font-heading font-bold text-lg text-foreground pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.3, type: "spring" }}
                      className="flex-shrink-0"
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${openFAQ === index ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                        }`}>
                        <ChevronDown className="h-5 w-5" />
                      </div>
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFAQ === index ? "auto" : 0,
                      opacity: openFAQ === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-4" />
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Additional help CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center glass-strong rounded-2xl p-8"
            >
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                ¿Tienes más preguntas?
              </h3>
              <p className="text-muted-foreground mb-4">
                Nuestro equipo está listo para ayudarte
              </p>
              <Button variant="outline" size="lg" className="group">
                Contactar soporte
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-2" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 lg:py-32 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white relative overflow-hidden">
          {/* Animated background pattern */}
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
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

          {/* Decorative gradient orbs */}
          <motion.div
            className="absolute -top-24 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />

          <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Sparkle icon with enhanced animation */}
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 10, 0],
                  scale: [1, 1.1, 1, 1.1, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-block mb-8"
              >
                <div className="relative">
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-accent rounded-full blur-xl"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                  <div className="relative bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/20">
                    <Sparkles className="h-16 w-16 text-accent" />
                  </div>
                </div>
              </motion.div>

              <motion.h2
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                ¿Listo para empezar?
              </motion.h2>

              <motion.p
                className="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Únete a <span className="font-bold text-accent">miles de personas</span> que ya están ahorrando dinero y ayudando al planeta
              </motion.p>

              {/* CTA Buttons with enhanced effects */}
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Link to="/registro">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button variant="accent" size="lg" className="group w-full sm:w-auto shadow-elevated">
                      <Sparkles className="h-5 w-5 mr-2" />
                      Crear cuenta gratis
                      <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-2" />
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/productos">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm shadow-medium"
                    >
                      <ShoppingBag className="h-5 w-5 mr-2" />
                      Ver productos
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/80"
              >
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-accent" />
                  <span>100% seguro</span>
                </div>
                <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full" />
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Sin tarjeta de crédito</span>
                </div>
                <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full" />
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-accent" />
                  <span>Cancela cuando quieras</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HowWeWorkPage;