import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MenuButton = ({ expanded, onClick }) => (
  <button
    type="button"
    className="text-white"
    onClick={onClick}
    aria-expanded={expanded}
    aria-label={expanded ? "Cerrar menú" : "Abrir menú"}
  >
    {!expanded ? (
      <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ) : (
      <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    )}
  </button>
);

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-base font-medium text-gray-400 transition-colors duration-300 hover:text-white"
  >
    {children}
  </Link>
);

const HeroSection = () => (
  <section className="relative w-full h-screen bg-black flex items-center justify-between px-8">
    {/* Texto alineado a la izquierda */}
    <div className="flex flex-col justify-center items-start max-w-lg space-y-6">
      <p className="text-sm font-semibold tracking-widest text-pink-500 uppercase">
        Plataforma de control
      </p>
      <h1 className="text-5xl font-bold text-pink-500 sm:text-6xl md:text-7xl">
        Bienvenido a Sicarderc
      </h1>
      <p className="text-lg font-light text-pink-300 sm:text-xl lg:text-2xl">
        Controla y gestiona tus pacientes con eficiencia
      </p>
      <Link
        to="/register"
        className="inline-flex items-center justify-center px-6 py-3 mt-6 text-base font-semibold text-white bg-pink-500 rounded-full shadow-md transition-transform duration-300 hover:scale-105 hover:bg-pink-600"
      >
        Regístrate ahora
      </Link>
    </div>

    {/* Imagen a la derecha */}
    <div className="w-1/2 h-full flex items-center justify-center">
      <img
        className="object-contain h-3/4"
        src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fG1lZGljYWx8ZW58MHx8MHx8fDA%3D" // Reemplaza con tu imagen
        alt="Hero image"
      />
    </div>
  </section>
);

const Home = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => setExpanded(prev => !prev);

  return (
    <div className="bg-black w-full h-screen">
      <header className="py-4 bg-black sm:py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="shrink-0">
              <a href="#" title="" className="flex items-center space-x-2">
                <span className="text-xl font-bold text-white">Sicarderc</span>
              </a>
            </div>

            <div className="flex md:hidden">
              <MenuButton expanded={expanded} onClick={toggleMenu} />
            </div>

            <nav className="hidden md:flex md:items-center md:justify-end md:space-x-12">
              <NavLink to="/register">Regístrate</NavLink>
              <NavLink to="/login">Inicia Sesión</NavLink>
            </nav>
          </div>

          {expanded && (
            <nav className="flex flex-col pt-8 pb-4 space-y-6 md:hidden">
              <NavLink to="/register">Regístrate</NavLink>
              <NavLink to="/login">Inicia Sesión</NavLink>
            </nav>
          )}
        </div>
      </header>
      <HeroSection />
    </div>
  );
};

export default Home;
