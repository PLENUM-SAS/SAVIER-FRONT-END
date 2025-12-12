import { useState, useEffect, MouseEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X, ShoppingCart, User, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoSavier from '@/assets/YELLOW.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollY } = useScroll();

  // Transforma la opacidad del fondo según el scroll
  const navBgOpacity = useTransform(scrollY, [0, 100], [0.8, 0.98]);
  const navBlur = useTransform(scrollY, [0, 100], [12, 24]);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Productos', href: '/productos' },
    { name: 'Cómo Funciona', href: '/how-we-work' },
    { name: 'Para comercios', href: '/para-comercios' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleInicioClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollToTop, 75);
    } else {
      scrollToTop();
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled
        ? 'bg-[#346C53]/98 backdrop-blur-3xl border-b border-white/20 shadow-elevated'
        : 'bg-[#346C53]/90 backdrop-blur-2xl border-b border-white/10 shadow-strong'
        }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        backdropFilter: `blur(${navBlur}px) saturate(180%)`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'
          }`}>
          {/* Logo con animación mejorada y efecto premium */}
          <motion.div
            className="flex items-center gap-2 relative"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div
                className="relative"
                animate={{
                  rotate: [0, 3, -3, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: 'easeInOut',
                  repeatDelay: 4
                }}
              >
                <img
                  src={logoSavier}
                  alt="SAVIER"
                  className={`transition-all duration-500 drop-shadow-2xl ${scrolled ? 'h-9' : 'h-11'
                    }`}
                />
                {/* Glow effect mejorado - más sutil */}
                <motion.div
                  className="absolute inset-0 bg-[#EBBF68] rounded-full opacity-0 group-hover:opacity-30 -z-10 transition-opacity duration-500"
                  style={{
                    filter: 'blur(16px)',
                  }}
                  whileHover={{ scale: 1.8 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
              <motion.span
                className={`font-heading font-black text-white tracking-tight transition-all duration-500 ${scrolled ? 'text-xl' : 'text-2xl'
                  }`}
                whileHover={{ letterSpacing: '0.08em' }}
                transition={{ duration: 0.3 }}
              >
                SAVIER
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Navigation - Mejorado */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ y: -2 }}
              >
                <Link
                  to={link.href}
                  onClick={link.href === '/' ? handleInicioClick : undefined}
                  className="text-white/90 hover:text-white font-medium relative group py-2 transition-colors duration-300"
                >
                  {link.name}
                  {/* Underline animada mejorada con gradiente */}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-[#EBBF68] via-[#F4C46A] to-[#EBBF68] rounded-full"
                    initial={{ width: 0, opacity: 0 }}
                    whileHover={{ width: '100%', opacity: 1 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  />
                  {/* Glow effect más sutil */}
                  <span className="absolute inset-0 bg-[#EBBF68]/10 rounded-lg opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop Actions - Premium Edition */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Carrito mejorado con efectos sutiles */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="relative text-white/90 hover:text-white hover:bg-white/15 group transition-all duration-300"
              >
                <ShoppingCart className="h-5 w-5 transition-transform group-hover:scale-105 duration-300" />
                {/* Badge con animación de pulso más sutil */}
                <motion.span
                  className="absolute -top-1 -right-1 bg-gradient-to-br from-[#C55145] via-[#D4564A] to-[#C55145] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-strong"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: 'easeInOut'
                  }}
                >
                  0
                </motion.span>
                {/* Glow sutil en hover */}
                <motion.div
                  className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"
                />
              </Button>
            </motion.div>

            {/* Botón Login con efectos premium */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link to="/login">
                <Button
                  variant="outline"
                  className="group relative text-white/95 border-white/40 hover:text-white hover:border-white hover:bg-white/10 overflow-hidden transition-all duration-300"
                >
                  {/* Shine effect mejorado */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: '-200%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                  />
                  <User className="h-4 w-4 mr-2 relative z-10 transition-transform group-hover:scale-110" />
                  <span className="relative z-10 font-semibold">Iniciar sesión</span>
                </Button>
              </Link>
            </motion.div>

            {/* Botón Registro ultra-premium */}
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link to="/registro">
                <Button className="group relative bg-gradient-to-r from-[#F4C46A] via-[#EBBF68] to-[#F4C46A] bg-[length:200%] hover:bg-right text-[#346C53] hover:shadow-elevated hover:shadow-[#EBBF68]/40 font-bold overflow-hidden transition-all duration-500">
                  {/* Animated shine overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    initial={{ x: '-200%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 transition-transform group-hover:rotate-12" />
                    Registrarse
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </span>
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white rounded-lg hover:bg-white/10"
            whileTap={{ scale: 0.9 }}
            whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu - Ultra Premium Edition */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:hidden border-t border-white/15"
            style={{
              background: 'rgba(52, 108, 83, 0.97)',
              backdropFilter: 'blur(32px) saturate(180%)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            }}
          >
            <div className="px-6 py-8 space-y-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -30, opacity: 0 }}
                  transition={{
                    delay: i * 0.08,
                    type: 'spring',
                    stiffness: 300,
                    damping: 25
                  }}
                >
                  <Link
                    to={link.href}
                    onClick={(event) => {
                      if (link.href === '/') {
                        handleInicioClick(event);
                      } else {
                        setIsOpen(false);
                      }
                    }}
                    className="block text-white/90 hover:text-white font-medium py-4 px-5 rounded-xl hover:bg-white/15 transition-all duration-300 backdrop-blur-sm"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                className="flex flex-col gap-3 pt-6 border-t border-white/15 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <Button
                    variant="outline"
                    className="w-full group text-white/95 border-white/40 hover:text-white hover:border-white hover:bg-white/15 transition-all duration-300"
                  >
                    <User className="h-4 w-4 mr-2 transition-transform group-hover:scale-110" />
                    Iniciar sesión
                  </Button>
                </Link>
                <Link to="/registro" onClick={() => setIsOpen(false)}>
                  <Button className="w-full group bg-gradient-to-r from-[#F4C46A] via-[#EBBF68] to-[#F4C46A] text-[#346C53] hover:shadow-elevated hover:shadow-[#EBBF68]/50 font-bold transition-all duration-300">
                    <Sparkles className="h-4 w-4 mr-2 transition-transform group-hover:rotate-12" />
                    Registrarse
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-2" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
