import React, { useState } from "react";
import LogoUtalca from "./LogoUtalca";
import BotonGitHub from "./BotonGitHub";

function NavBarPrincipal() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-gray-900 px-4 py-1 shadow-md z-50">
      {/* Contenedor principal */}
      <div className="flex items-center justify-between">
        {/* Logo a la izquierda */}
        <div className="flex items-center">
          <LogoUtalca />
        </div>

        {/* Botón para menú en pantallas pequeñas */}
        <button
          className="block md:hidden text-gray-900 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Menú en pantallas grandes */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          <a
            href="/"
            className="hover:text-blue-400 transition duration-300"
          >
            Inicio
          </a>
          <a
            href="/about"
            className="hover:text-blue-400 transition duration-300"
          >
            Sobre Nosotros
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition duration-300"
          >
            Contacto
          </a>
          <BotonGitHub/>
        </div>
      </div>

      {/* Menú desplegable en pantallas pequeñas */}
      <div
        className={`${
          menuOpen ? "block bg-gray-100" : "hidden"
        } md:hidden mt-2 flex flex-col space-y-2`}
      >
        <a
          href="#"
          className="hover:text-blue-400 transition duration-300 text-center"
        >
          Inicio
        </a>
        <a
          href="#"
          className="hover:text-blue-400 transition duration-300 text-center"
        >
          Sobre Nosotros
        </a>
        <a
          href="#"
          className="hover:text-blue-400 transition duration-300 text-center"
        >
          Contacto
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition duration-300 text-center"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}

export default NavBarPrincipal;