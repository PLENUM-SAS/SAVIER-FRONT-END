import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Youtube, Leaf, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    compradores: [
      { name: "Cómo funciona", href: "/#como-funciona" },
      { name: "Productos disponibles", href: "/productos" },
      { name: "Comercios", href: "/comercios" },
      { name: "Ciudades", href: "/ciudades" },
      { name: "Preguntas frecuentes", href: "/faq" },
    ],
    comercios: [
      { name: "Registrar comercio", href: "/comercios/registro" },
      { name: "Panel de control", href: "/comercios/login" },
      { name: "Comisiones", href: "/comercios/comisiones" },
      { name: "Tipos de comercio", href: "/comercios/tipos" },
      { name: "Soporte", href: "/soporte" },
    ],
    legal: [
      { name: "Términos de servicio", href: "/terminos" },
      { name: "Privacidad", href: "/privacidad" },
      { name: "Contacto", href: "/contacto" },
      { name: "Blog", href: "/blog" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-500" },
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
    { icon: Youtube, href: "#", label: "Youtube", color: "hover:bg-red-600" },
  ];

  return (
    <footer className="relative bg-gradient-dark text-muted overflow-hidden">
      {/* Multi-layer Wave Divider - Ultra Dynamic */}
      <div className="absolute top-0 left-0 right-0 h-32 overflow-hidden">
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          {/* Wave Layer 1 - Frontal */}
          <motion.path
            d="M0,0 C150,80 350,0 600,50 C850,100 1050,20 1200,60 L1200,0 L0,0 Z"
            fill="hsl(40, 14%, 98%)"
            opacity="1"
            animate={{
              d: [
                "M0,0 C150,80 350,0 600,50 C850,100 1050,20 1200,60 L1200,0 L0,0 Z",
                "M0,0 C150,20 350,80 600,30 C850,10 1050,70 1200,40 L1200,0 L0,0 Z",
                "M0,0 C150,60 350,20 600,70 C850,80 1050,30 1200,50 L1200,0 L0,0 Z",
                "M0,0 C150,80 350,0 600,50 C850,100 1050,20 1200,60 L1200,0 L0,0 Z",
              ],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Wave Layer 2 - Middle */}
          <motion.path
            d="M0,0 C200,60 400,20 600,40 C800,60 1000,10 1200,30 L1200,0 L0,0 Z"
            fill="hsl(40, 14%, 98%)"
            opacity="0.6"
            animate={{
              d: [
                "M0,0 C200,60 400,20 600,40 C800,60 1000,10 1200,30 L1200,0 L0,0 Z",
                "M0,0 C200,20 400,60 600,25 C800,15 1000,50 1200,35 L1200,0 L0,0 Z",
                "M0,0 C200,60 400,20 600,40 C800,60 1000,10 1200,30 L1200,0 L0,0 Z",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          {/* Wave Layer 3 - Background */}
          <motion.path
            d="M0,0 C300,45 500,15 700,35 C900,50 1100,20 1200,25 L1200,0 L0,0 Z"
            fill="hsl(40, 14%, 98%)"
            opacity="0.3"
            animate={{
              d: [
                "M0,0 C300,45 500,15 700,35 C900,50 1100,20 1200,25 L1200,0 L0,0 Z",
                "M0,0 C300,25 500,45 700,20 C900,30 1100,55 1200,30 L1200,0 L0,0 Z",
                "M0,0 C300,45 500,15 700,35 C900,50 1100,20 1200,25 L1200,0 L0,0 Z",
              ],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-8 relative z-10">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 pb-16 border-b border-muted/20"
        >
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block mb-4"
            >
              <Mail className="h-12 w-12 text-accent" />
            </motion.div>
            <h3 className="font-heading text-2xl lg:text-3xl font-bold text-background mb-3">
              ¡No te pierdas las ofertas!
            </h3>
            <p className="text-muted/70 mb-6">
              Recibe notificaciones de los mejores productos y descuentos directamente en tu email
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="tu@email.com"
                className="h-12 bg-muted/10 border-muted/30 text-background placeholder:text-muted/50 focus:border-accent"
              />
              <Button className="h-12 bg-accent text-accent-foreground hover:bg-accent/90 font-bold sm:w-auto group">
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                Suscribirme
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Link to="/" className="inline-block group">
              <motion.span
                className="font-heading text-3xl font-black text-background tracking-tight"
                whileHover={{ letterSpacing: '0.05em' }}
              >
                SAVIER
              </motion.span>
            </Link>
            <p className="text-muted/80 text-sm leading-relaxed">
              Comida que merece ser disfrutada. Conectamos comercios locales con compradores inteligentes.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-11 h-11 rounded-xl bg-muted/10 flex items-center justify-center text-muted hover:text-white transition-all duration-300 ${social.color}`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: 'spring', stiffness: 300 }}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* For Buyers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-heading font-bold text-background mb-6 flex items-center gap-2">
              Para Compradores
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-accent"
              >
                ✨
              </motion.span>
            </h4>
            <ul className="space-y-3">
              {footerLinks.compradores.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className="text-muted/70 hover:text-accent transition-colors text-sm inline-block hover:translate-x-1 transition-transform"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* For Businesses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-heading font-bold text-background mb-6 flex items-center gap-2">
              Para Comercios
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="text-secondary"
              >
                🏪
              </motion.span>
            </h4>
            <ul className="space-y-3">
              {footerLinks.comercios.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className="text-muted/70 hover:text-accent transition-colors text-sm inline-block hover:translate-x-1 transition-transform"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-heading font-bold text-background mb-6">
              Legal y Contacto
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className="text-muted/70 hover:text-accent transition-colors text-sm inline-block hover:translate-x-1 transition-transform"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-muted/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted/60 text-sm">
            © {currentYear} SAVIER. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted/60">
            <span>Colombia 🇨🇴</span>
            <motion.span
              className="flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Leaf className="h-4 w-4 text-success" />
              </motion.div>
              Comprometidos con el planeta
            </motion.span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
