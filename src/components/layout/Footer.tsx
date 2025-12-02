import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Youtube, Leaf } from "lucide-react";

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
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "Youtube" },
  ];

  return (
    <footer className="bg-savier-deep-black text-muted pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <span className="font-heading text-3xl font-black text-background tracking-tight">
                SAVIER
              </span>
            </Link>
            <p className="text-muted/80 text-sm leading-relaxed">
              Comida que merece ser disfrutada. Conectamos comercios locales con compradores inteligentes.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-muted/10 flex items-center justify-center text-muted hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* For Buyers */}
          <div>
            <h4 className="font-heading font-bold text-background mb-6">
              Para Compradores
            </h4>
            <ul className="space-y-3">
              {footerLinks.compradores.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Businesses */}
          <div>
            <h4 className="font-heading font-bold text-background mb-6">
              Para Comercios
            </h4>
            <ul className="space-y-3">
              {footerLinks.comercios.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="font-heading font-bold text-background mb-6">
              Legal y Contacto
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-muted/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted/60 text-sm">
            © {currentYear} SAVIER. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted/60">
            <span>Colombia 🇨🇴</span>
            <span className="flex items-center gap-1">
              <Leaf className="h-4 w-4 text-success" />
              Comprometidos con el planeta
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
