import { motion } from 'framer-motion';
import { Shield, Award, TrendingUp, Users, Leaf, Clock } from 'lucide-react';

const badges = [
    {
        icon: Shield,
        title: "100% Seguro",
        description: "Pagos protegidos",
        color: "from-blue-500 to-cyan-500",
    },
    {
        icon: Award,
        title: "Calidad Garantizada",
        description: "Productos verificados",
        color: "from-amber-500 to-orange-500",
    },
    {
        icon: TrendingUp,
        title: "Hasta 70% Off",
        description: "Descuentos reales",
        color: "from-green-500 to-emerald-500",
    },
    {
        icon: Users,
        title: "+15K Usuarios",
        description: "Comunidad activa",
        color: "from-purple-500 to-pink-500",
    },
    {
        icon: Leaf,
        title: "Eco-Friendly",
        description: "Reducimos desperdicio",
        color: "from-teal-500 to-green-500",
    },
    {
        icon: Clock,
        title: "Soporte 24/7",
        description: "Siempre disponibles",
        color: "from-indigo-500 to-blue-500",
    },
];

const TrustBadges = () => {
    return (
        <section className="py-16 lg:py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
            {/* Background pattern */}
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
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-2">
                        ¿Por qué elegir SAVIER?
                    </h3>
                    <p className="text-muted-foreground">
                        Más que una app, una comunidad comprometida con el planeta
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {badges.map((badge, index) => {
                        const Icon = badge.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -8, scale: 1.05 }}
                                className="relative group"
                            >
                                <div className="glass-strong rounded-2xl p-6 text-center h-full flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:shadow-elevated">
                                    {/* Animated gradient background on hover */}
                                    <motion.div
                                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${badge.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                                    />

                                    {/* Icon with glow effect */}
                                    <motion.div
                                        className="relative"
                                        whileHover={{ rotate: [0, -10, 10, 0] }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <div className={`absolute inset-0 bg-gradient-to-br ${badge.color} blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full`} />
                                        <div className={`relative w-12 h-12 rounded-full bg-gradient-to-br ${badge.color} flex items-center justify-center shadow-medium`}>
                                            <Icon className="h-6 w-6 text-white" />
                                        </div>
                                    </motion.div>

                                    <div className="relative z-10">
                                        <h4 className="font-heading font-bold text-sm text-foreground mb-1">
                                            {badge.title}
                                        </h4>
                                        <p className="text-xs text-muted-foreground">
                                            {badge.description}
                                        </p>
                                    </div>

                                    {/* Shine effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                                        initial={{ x: '-100%' }}
                                        whileHover={{ x: '100%' }}
                                        transition={{ duration: 0.6 }}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Stats counter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
                >
                    {[
                        { number: "15K+", label: "Productos rescatados", color: "text-primary" },
                        { number: "320+", label: "Comercios aliados", color: "text-secondary" },
                        { number: "70%", label: "Ahorro promedio", color: "text-accent" },
                        { number: "5 Ton", label: "CO₂ evitado", color: "text-success" },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center glass rounded-2xl p-6"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <motion.div
                                className={`font-bebas text-4xl lg:text-5xl ${stat.color} mb-2`}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * index, type: "spring", stiffness: 200 }}
                            >
                                {stat.number}
                            </motion.div>
                            <p className="text-sm text-muted-foreground font-medium">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TrustBadges;
