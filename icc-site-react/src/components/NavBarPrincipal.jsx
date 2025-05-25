import { useState } from "react";
import LogoUtalca from "./LogoUtalca";
import BotonGitHub from "./BotonGitHub";

const links = [
  { label: "Inicio", href: "/" },
  { label: "Sobre Nosotros", href: "/about" },
  { label: "Contacto", href: "#" },
];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-fit sticky top-0 w-full z-50 px-4 py-2 shadow-md text-white justify-center items-center display flex bg-[#131217] border-b-1 border-gray-100 ">
      {/* Contenedor principal */}
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <LogoUtalca />
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
            PixelPlay
          </h2>
        </div>

        {/* Botón hamburguesa (mobile) */}
        <button
          className="md:hidden focus:outline-none"
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

        {/* Navegación (desktop) */}
        <div className="hidden md:flex items-center gap-8 ml-auto">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-sm font-medium leading-normal hover:text-blue-200 transition duration-300"
            >
              {link.label}
            </a>
          ))}
          <BotonGitHub />
        </div>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="md:hidden mt-2 flex flex-col space-y-2 bg-gray-100 text-black rounded-md p-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-center hover:text-blue-500 transition duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center hover:text-blue-500 transition duration-300"
          >
            GitHub
          </a>
        </div>
      )}
    </header>
  );
};
