import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    avatar: string;
    rating: number;
    text: string;
    savings: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "María González",
        role: "Usuaria frecuente",
        avatar: "https://i.pravatar.cc/150?img=1",
        rating: 5,
        text: "¡SAVIER cambió mi forma de comprar! Ahorro hasta 70% en productos frescos de excelente calidad. El pan de panadería artesanal que compro aquí es increíble.",
        savings: "$450.000/mes"
    },
    {
        id: 2,
        name: "Carlos Ramírez",
        role: "Cliente satisfecho",
        avatar: "https://i.pravatar.cc/150?img=12",
        rating: 5,
        text: "Excelente iniciativa contra el desperdicio de alimentos. He encontrado productos de alta calidad a precios increíbles. La app es muy fácil de usar.",
        savings: "$380.000/mes"
    },
    {
        id: 3,
        name: "Laura Martínez",
        role: "Eco-consciente",
        avatar: "https://i.pravatar.cc/150?img=5",
        rating: 5,
        text: "Me encanta poder contribuir al planeta mientras ahorro dinero. Los comercios locales ofrecen productos frescos y deliciosos. ¡100% recomendado!",
        savings: "$520.000/mes"
    },
    {
        id: 4,
        name: "Diego Torres",
        role: "Usuario premium",
        avatar: "https://i.pravatar.cc/150?img=8",
        rating: 5,
        text: "La mejor app para compras inteligentes. He probado frutas, verduras, pan y pasteles de primera calidad. El sistema de notificaciones es perfecto.",
        savings: "$600.000/mes"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection;
            if (nextIndex < 0) nextIndex = testimonials.length - 1;
            if (nextIndex >= testimonials.length) nextIndex = 0;
            return nextIndex;
        });
    };

    // Auto-play carousel
    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 6000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
        <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
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
                    className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
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
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Star className="h-4 w-4 fill-primary" />
                        <span className="text-sm font-semibold uppercase tracking-wider">
                            Testimonios Reales
                        </span>
                    </motion.div>
                    <h2 className="font-heading text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
                        Lo que dicen nuestros{' '}
                        <span className="text-gradient-primary">usuarios</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Miles de personas ya están ahorrando dinero y ayudando al planeta con SAVIER
                    </p>
                </motion.div>

                {/* Carousel */}
                <div className="relative max-w-4xl mx-auto">
                    <div className="relative h-[500px] lg:h-[400px] flex items-center justify-center">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.3 }
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipe = swipePower(offset.x, velocity.x);
                                    if (swipe < -swipeConfidenceThreshold) {
                                        paginate(1);
                                    } else if (swipe > swipeConfidenceThreshold) {
                                        paginate(-1);
                                    }
                                }}
                                className="absolute w-full"
                            >
                                <div className="glass-strong rounded-3xl p-8 lg:p-12 relative overflow-hidden">
                                    {/* Quote icon */}
                                    <motion.div
                                        className="absolute top-8 right-8 text-primary/10"
                                        animate={{ rotate: [0, 5, -5, 0] }}
                                        transition={{ duration: 5, repeat: Infinity }}
                                    >
                                        <Quote className="h-24 w-24" />
                                    </motion.div>

                                    <div className="relative z-10">
                                        {/* Rating */}
                                        <div className="flex items-center gap-1 mb-6">
                                            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: i * 0.1 }}
                                                >
                                                    <Star className="h-6 w-6 fill-accent text-accent" />
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Testimonial text */}
                                        <p className="text-xl lg:text-2xl text-foreground font-medium mb-8 leading-relaxed">
                                            "{testimonials[currentIndex].text}"
                                        </p>

                                        <div className="flex items-center justify-between flex-wrap gap-6">
                                            {/* User info */}
                                            <div className="flex items-center gap-4">
                                                <motion.img
                                                    src={testimonials[currentIndex].avatar}
                                                    alt={testimonials[currentIndex].name}
                                                    className="w-16 h-16 rounded-full border-4 border-primary/20"
                                                    whileHover={{ scale: 1.1 }}
                                                />
                                                <div>
                                                    <h4 className="font-heading font-bold text-lg text-foreground">
                                                        {testimonials[currentIndex].name}
                                                    </h4>
                                                    <p className="text-muted-foreground">
                                                        {testimonials[currentIndex].role}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Savings badge */}
                                            <motion.div
                                                className="bg-gradient-to-br from-success/20 to-success/10 border border-success/30 rounded-2xl px-6 py-3"
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                <p className="text-sm text-muted-foreground mb-1">Ahorro mensual</p>
                                                <p className="font-bebas text-3xl text-success">
                                                    {testimonials[currentIndex].savings}
                                                </p>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation buttons */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <motion.button
                            onClick={() => paginate(-1)}
                            className="glass rounded-full p-4 hover:bg-white/80 transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ChevronLeft className="h-6 w-6 text-foreground" />
                        </motion.button>

                        {/* Dots indicator */}
                        <div className="flex items-center gap-3">
                            {testimonials.map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => {
                                        setDirection(index > currentIndex ? 1 : -1);
                                        setCurrentIndex(index);
                                    }}
                                    className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                            ? 'w-8 bg-primary'
                                            : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                                        }`}
                                    whileHover={{ scale: 1.2 }}
                                />
                            ))}
                        </div>

                        <motion.button
                            onClick={() => paginate(1)}
                            className="glass rounded-full p-4 hover:bg-white/80 transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ChevronRight className="h-6 w-6 text-foreground" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
