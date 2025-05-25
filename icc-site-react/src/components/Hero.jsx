import React from "react";
import ImagenHero from "./ImagenHero";

function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-[70vh] w-full bg-gray-100 px-6 md:px-20">
      {/* Imagen con bordes circulares */}
      <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-12">
        <img
          src="https://icc.utalca.cl/imagenes/slider/2.png"
          alt="Imagen Utalca"
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg"
        />
      </div>

      {/* Texto a la derecha */}
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Bienvenido al Team ICC
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Ingenieria Civil en Computación Universidad de Talca
        </p>
      </div>
    </div>
  );
}

export default Hero;