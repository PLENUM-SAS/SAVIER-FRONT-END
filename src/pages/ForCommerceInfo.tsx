import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, TrendingUp, Leaf, Wallet, Store, CheckCircle, Calculator, Star, BellRing, DollarSign } from 'lucide-react';

// Logos simulados para marcas colombianas (Placeholders visuales con tipografías distintivas)
const BRANDS_ROW_1 = [
  { name: "Éxito", img: "https://placehold.co/180x80/white/346C53?text=Exito&font=rubik" },
  { name: "Carulla", img: "https://placehold.co/180x80/white/346C53?text=Carulla&font=playfair" },
  { name: "Jumbo", img: "https://placehold.co/180x80/white/346C53?text=Jumbo&font=montserrat" },
  { name: "D1", img: "https://placehold.co/180x80/white/346C53?text=D1&font=oswald" },
  { name: "Ara", img: "https://placehold.co/180x80/white/346C53?text=Ara&font=lato" },
  { name: "Tostao", img: "https://placehold.co/180x80/white/346C53?text=Tostao&font=raleway" },
];

const BRANDS_ROW_2 = [
  { name: "Crepes & Waffles", img: "https://placehold.co/180x80/white/346C53?text=Crepes&font=playfair" },
  { name: "El Corral", img: "https://placehold.co/180x80/white/346C53?text=El+Corral&font=oswald" },
  { name: "Frisby", img: "https://placehold.co/180x80/white/346C53?text=Frisby&font=rubik" },
  { name: "Kokoriko", img: "https://placehold.co/180x80/white/346C53?text=Kokoriko&font=montserrat" },
  { name: "Olimpica", img: "https://placehold.co/180x80/white/346C53?text=Olimpica&font=lato" },
  { name: "Pan Pa' Ya", img: "https://placehold.co/180x80/white/346C53?text=PanPaYa&font=raleway" },
];

const STATS = [
  { value: "15%", label: "Comisión por venta", icon: <Wallet className="w-8 h-8 text-[#EBBF68]" /> },
  { value: "2.8M", label: "Ingreso promedio/mes", icon: <TrendingUp className="w-8 h-8 text-[#EBBF68]" /> },
  { value: "-60%", label: "Desperdicio de alimentos", icon: <Leaf className="w-8 h-8 text-[#EBBF68]" /> },
  { value: "24h", label: "Tiempo de activación", icon: <Store className="w-8 h-8 text-[#EBBF68]" /> }
];

// Componente Marquee Infinito Mejorado con Imágenes
const BrandMarquee = ({ brands, direction = "left" }: { brands: typeof BRANDS_ROW_1, direction?: "left" | "right" }) => {
  return (
    <div className="w-full overflow-hidden py-4 group relative">
      {/* Gradient Overlay para suavizar bordes */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#346C53] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#346C53] to-transparent z-10"></div>

      <motion.div
        className="flex gap-8 items-center whitespace-nowrap"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
      >
        {[...brands, ...brands, ...brands].map((brand, i) => (
          <div key={i} className="flex-shrink-0 w-[180px] h-[80px] bg-white rounded-lg shadow-lg overflow-hidden opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer">
            <img src={brand.img} alt={brand.name} className="w-full h-full object-cover" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// Notificación Simulada Interactiva
const LiveNotification = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(true);
      setTimeout(() => setVisible(false), 4000);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          className="absolute top-24 right-6 z-20 bg-white text-[#346C53] p-4 rounded-xl shadow-2xl flex items-center gap-3 w-80 border-l-4 border-[#C55145]"
        >
          <div className="bg-green-100 p-2 rounded-full">
            <DollarSign className="w-5 h-5 text-green-700" />
          </div>
          <div>
            <p className="font-bold text-sm">¡Nueva Venta!</p>
            <p className="text-xs text-gray-500">Panadería Los Andes acaba de recuperar $25.000</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const RevenueCalculator = () => {
  const [dailyWaste, setDailyWaste] = useState(50000);
  const [daysOpen, setDaysOpen] = useState(26);
  const monthlyRecovery = dailyWaste * daysOpen * 0.7;

  return (
    <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-[#EBBF68]/30 shadow-2xl relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-[#EBBF68]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="flex items-center gap-3 mb-6 relative z-10">
        <div className="bg-[#EBBF68] p-2 rounded-lg">
          <Calculator className="w-6 h-6 text-[#346C53]" />
        </div>
        <h3 className="text-2xl font-bold text-white">Calculadora de Ganancias</h3>
      </div>

      <div className="space-y-8 relative z-10">
        <div>
          <div className="flex justify-between text-[#EEECE8] mb-2 text-sm font-medium">
            <label>Valor diario desperdiciado</label>
            <span className="text-[#EBBF68]">${dailyWaste.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min="10000"
            max="500000"
            step="10000"
            value={dailyWaste}
            onChange={(e) => setDailyWaste(Number(e.target.value))}
            className="w-full accent-[#EBBF68] h-2 bg-[#1F4D36] rounded-lg appearance-none cursor-pointer hover:accent-[#F2D494] transition-colors"
          />
        </div>

        <div>
          <div className="flex justify-between text-[#EEECE8] mb-2 text-sm font-medium">
            <label>Días abiertos al mes</label>
            <span className="text-[#EBBF68]">{daysOpen} días</span>
          </div>
          <input
            type="range"
            min="1"
            max="31"
            value={daysOpen}
            onChange={(e) => setDaysOpen(Number(e.target.value))}
            className="w-full accent-[#EBBF68] h-2 bg-[#1F4D36] rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div className="bg-[#1F4D36]/80 p-4 rounded-xl border border-[#98A499]/20 transform transition-transform hover:scale-105 duration-300">
          <p className="text-[#EEECE8]/80 text-sm mb-1">Ingreso potencial mensual</p>
          <div className="flex items-baseline gap-2">
            <p className="text-4xl font-black text-[#EBBF68]">
              ${monthlyRecovery.toLocaleString()}
            </p>
            <span className="text-xs text-[#EEECE8]/50">COP</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ForCommerceInfo() {
  return (
    <div className="min-h-screen bg-[#346C53] text-white font-sans overflow-x-hidden">

      {/* Navbar Fixed */}
      <nav className="fixed w-full z-50 bg-[#346C53]/90 backdrop-blur-md border-b border-[#98A499]/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-[#EBBF68] p-2 rounded-lg group-hover:rotate-12 transition-transform">
              <Store className="w-6 h-6 text-[#346C53]" />
            </div>
            <span className="text-xl font-bold tracking-tight">SAVIER <span className="font-light opacity-80">Partners</span></span>
          </Link>
          <div className="flex gap-4">
            <Link to="/comercios/login" className="hidden md:block">
              <button className="px-5 py-2.5 text-[#EEECE8] hover:text-white transition-colors font-medium hover:underline decoration-[#EBBF68] underline-offset-4">
                Iniciar Sesión
              </button>
            </Link>
            <Link to="/comercios/registro">
              <button className="bg-[#EBBF68] text-[#346C53] px-6 py-2.5 rounded-full font-bold hover:bg-[#F2D494] transition-all shadow-lg hover:shadow-[#EBBF68]/20 active:scale-95 flex items-center gap-2">
                Registrar Negocio <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[90vh] flex items-center">
        {/* Animated Background Blobs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#EBBF68]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#C55145]/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none"
        />

        {/* Live Notification Demo */}
        <div className="hidden lg:block">
          <LiveNotification />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-[#EBBF68] text-sm font-semibold mb-6 hover:bg-white/20 transition-colors cursor-default">
              <BellRing className="w-4 h-4 animate-pulse" />
              ¡Últimos cupos para registro gratuito este mes!
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-6 tracking-tight">
              Convierte el desperdicio en <span className="text-[#EBBF68] underline decoration-[#C55145] decoration-4 underline-offset-4">rentabilidad</span>.
            </h1>
            <p className="text-xl text-[#EEECE8]/90 mb-10 leading-relaxed max-w-lg">
              La plataforma #1 en Colombia para rescatar comida. Aumenta tus ingresos, reduce costos y cuida el planeta con un solo clic.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link to="/comercios/registro" className="w-full sm:w-auto">
                <button className="w-full bg-[#C55145] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#D66255] transition-all shadow-xl hover:shadow-[#C55145]/30 flex items-center justify-center gap-2 group">
                  Empezar Prueba Gratis
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/comercios/login" className="w-full sm:w-auto">
                <button className="w-full bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all border border-white/20 backdrop-blur-sm">
                  Ver Demo
                </button>
              </Link>
            </div>

            <div className="flex items-center gap-6 px-4 py-4 bg-[#1F4D36]/50 rounded-2xl border border-[#98A499]/20 w-fit backdrop-blur-sm">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#346C53] overflow-hidden bg-gray-200">
                    <img src={`https://ui-avatars.com/api/?name=User+${i}&background=random`} alt="User" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-[#EBBF68]">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-sm text-[#EEECE8] font-medium">Amado por +500 comercios</p>
              </div>
            </div>
          </motion.div>

          {/* Calculator Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block w-full"
          >
            <RevenueCalculator />
          </motion.div>
        </div>
      </section>

      {/* Marquees Section */}
      <section className="py-16 bg-[#2A5C46]/50 backdrop-blur-sm border-y border-[#98A499]/20 relative overflow-hidden">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold mb-2">Las mejores marcas confían en SAVIER</h3>
          <p className="text-[#EEECE8]/60">Únete al ecosistema de ahorro más grande del país</p>
        </div>

        <div className="flex flex-col gap-8">
          <BrandMarquee brands={BRANDS_ROW_1} direction="left" />
          <BrandMarquee brands={BRANDS_ROW_2} direction="right" />
        </div>
      </section>

      {/* Stats Cards */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#1F4D36] border border-[#98A499]/20 p-8 rounded-3xl text-center hover:bg-[#255a40] transition-all duration-300 hover:-translate-y-2 box-shadow-xl group"
            >
              <div className="bg-[#EBBF68]/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#EBBF68]/20 transition-colors">
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-white mb-2">{stat.value}</h3>
              <p className="text-[#EEECE8]/70 text-sm font-bold uppercase tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto bg-[#EBBF68] rounded-[2.5rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[#346C53] opacity-5 pattern-grid-lg"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-[#1F4D36] mb-8 leading-tight">
              ¿Tienes productos que <br /> no se vendieron hoy?
            </h2>
            <p className="text-[#1F4D36] text-xl mb-12 max-w-2xl mx-auto font-medium opacity-90">
              No los tires. Publícalos en SAVIER en menos de 1 minuto y recupera tu inversión.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/comercios/registro">
                <button className="bg-[#1F4D36] text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-[#153424] transition-all shadow-2xl hover:scale-105 active:scale-95 w-full sm:w-auto flex items-center justify-center gap-3">
                  <Wallet className="w-6 h-6" />
                  Empezar a Ganar
                </button>
              </Link>
            </div>
            <p className="mt-6 text-[#1F4D36]/70 text-sm font-semibold">
              <CheckCircle className="w-4 h-4 inline mr-1" />
              Sin tarjeta de crédito requerida
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#98A499]/20 bg-[#1F4D36]/80 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Store className="w-6 h-6 text-[#EBBF68]" />
            <span className="font-bold text-xl">SAVIER <span className="font-light opacity-75">Partners</span></span>
          </div>
          <div className="flex gap-8 text-[#EEECE8]/60 text-sm font-medium">
            <Link to="#" className="hover:text-[#EBBF68] transition-colors">Términos</Link>
            <Link to="#" className="hover:text-[#EBBF68] transition-colors">Privacidad</Link>
            <Link to="#" className="hover:text-[#EBBF68] transition-colors">Contacto</Link>
          </div>
          <p className="text-[#EEECE8]/40 text-sm">&copy; {new Date().getFullYear()} Savier Inc.</p>
        </div>
      </footer>

    </div>
  );
}