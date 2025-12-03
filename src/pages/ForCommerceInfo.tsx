import React from 'react';
import { Link } from 'react-router-dom';

const stats = [
  { value: 15, suffix: '%', label: 'comisión por venta', icon: '💰' },
  { value: 2.8, suffix: 'M COP', label: 'ingreso promedio/mes', icon: '📈' },
  { value: 60, suffix: '%', label: 'reducción de desperdicio', icon: '🌱' },
  { value: 24, suffix: 'h', label: 'activación', icon: '⚡' }
];

const benefits = [
  { icon: '💰', title: 'Ingresos extra sin inversión', description: 'Sube tus productos en minutos y empieza a vender hoy.' },
  { icon: '📊', title: 'Panel intuitivo', description: 'Controla stock, precios y órdenes desde cualquier dispositivo.' },
  { icon: '🏪', title: 'Para todo tipo de comercio', description: 'Panadería, frutería, cafetería, carnicería, supermercado, pastelería, gourmet…' },
  { icon: '⚡', title: 'Pago semanal', description: 'Dinero en tu cuenta cada viernes, sin demoras.' },
  { icon: '🌱', title: 'Reputación verde', description: 'Certificado de impacto que puedes exhibir en tu tienda.' },
  { icon: '🧑‍💻', title: 'Soporte humano 24/7', description: 'WhatsApp prioritario y videollamadas cuando necesites.' }
];

export default function ForCommerceInfo() {
  return (
    <div className="min-h-screen bg-[#346C53] text-white">
      {/* Header interno */}
      <div className="sticky top-0 z-40 bg-[#346C53]/90 backdrop-blur-md border-b border-[#98A499]/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">CoSaver – Para Comercios</h1>
          <div className="flex gap-4">
            <Link to="/commerce-login">
              <button className="border border-[#EBBF68] text-[#EBBF68] px-4 py-2 rounded-lg hover:bg-[#EBBF68]/10 transition">
                Iniciar sesión como empresa
              </button>
            </Link>
            <Link to="/commerce-register">
              <button className="bg-[#C55145] text-white px-4 py-2 rounded-lg hover:bg-[#C55145]/90 transition">
                Registrarse como empresa
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="text-center px-6 py-20">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4">Convierte excedentes en ingresos</h2>
        <p className="text-lg text-[#EEECE8] mb-8 max-w-2xl mx-auto">
          Sin costos de setup, comisión justa, pago semanal. Únete a cientos de comercios que ya están ganando mientras ayudan al planeta.
        </p>
      </section>

      {/* Stats */}
      <section className="px-6 mb-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white/5 border border-[#98A499]/30 rounded-2xl p-6 text-center hover:scale-105 transition"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-[#EBBF68]">{stat.value}{stat.suffix}</div>
              <div className="text-sm text-[#EEECE8]/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Beneficios */}
      <section className="px-6 mb-20 max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-10">Beneficios para tu comercio</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-white/5 border border-[#98A499]/30 rounded-2xl p-6 hover:border-[#EBBF68] transition"
            >
              <div className="text-3xl mb-3">{b.icon}</div>
              <h4 className="text-lg font-semibold text-white mb-2">{b.title}</h4>
              <p className="text-sm text-[#EEECE8]/80">{b.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="text-center px-6 py-16">
        <div className="max-w-3xl mx-auto bg-[#C55145] rounded-2xl p-10">
          <h3 className="text-3xl font-bold mb-4">¿Listo para empezar?</h3>
          <p className="text-[#EEECE8] mb-6">Activa tu comercio en 3 sencillos pasos. Sin costos ocultos.</p>
          <Link to="/commerce-register">
            <button className="bg-[#EBBF68] text-[#346C53] font-bold px-8 py-3 rounded-lg hover:bg-[#EBBF68]/90 transition">
              Registrar mi comercio gratis
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}