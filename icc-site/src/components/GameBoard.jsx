import React from "react";
import Temporizador from "./Temporizador";

const GameBoard = ({ 
    letras,
    indiceActual,
    cambioIndice,
    pregunta,
    respuesta,
    setRespuesta,
    enviarRespuesta,
    esRespuestaCorrecta,
}) => {
    // Cálculo del tamaño dinámico según la pantalla
    const screenWidth = window.innerWidth; // Obtener el ancho de la pantalla
    const circleSize = screenWidth < 768 ? 300 : 400; // Si la pantalla es pequeña, reducimos el tamaño del círculo
    const radius = circleSize / 2;
    const centerX = circleSize / 2;
    const centerY = circleSize / 2;

    return (
        <div className="flex flex-col md:flex-row h-screen md:w-[120vh]">
            {/* Sección izquierda: Círculo de letras */}
            <div className="w-full h-[60vh] md:w-1/2 md:h-auto flex items-center justify-center bg-gray-200 p-4">
                <div
                    className="relative bg-white rounded-full flex items-center justify-center"
                    style={{ width: `${circleSize}px`, height: `${circleSize}px` }}
                >
                    {letras.map((letra, index) => {
                        const angle = (index / letras.length) * (2 * Math.PI); // Ángulo en radianes
                        const x = centerX + radius * Math.cos(angle) - 20;
                        const y = centerY + radius * Math.sin(angle) - 20;

                        return (
                            <div
                                key={index}
                                className={`absolute flex items-center justify-center 
                                rounded-full transition-all duration-300 
                                ${indiceActual === index ? "bg-red-500 text-white" : "bg-blue-500 text-white"}`}
                                style={{
                                    left: `${x}px`,
                                    top: `${y}px`,
                                    width: '2rem', // Ajuste del tamaño de las letras
                                    height: '2rem',
                                    fontSize: `${circleSize < 768 ? '1rem' : '1.2rem'}`, // Ajuste del tamaño de la letra
                                }} // Cambia el índice al hacer clic
                            >
                                {letra}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Sección derecha: Preguntas y respuestas */}
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-white p-4 md:p-10">
                <Temporizador></Temporizador>

                <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-700">Pregunta:</h2>
                <p className="text-base md:text-lg text-gray-600 mb-6">
                    {pregunta} {/* Aquí se muestra la pregunta */}
                </p>
                
                {/* Campo para escribir la respuesta */}
                <input
                    type="text"
                    placeholder="Escribe tu respuesta..."
                    value={respuesta}
                    onChange={(e) => setRespuesta(e.target.value)} // Actualiza la respuesta en el estado
                    className="border border-gray-300 rounded-lg p-3 w-3/4 text-base md:text-lg text-black"
                />

                {/* Botón para enviar la respuesta */}
                <button
                    onClick={enviarRespuesta}
                    className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg text-base md:text-lg font-semibold"
                >
                    Enviar
                </button>

                {/* Mostrar si la respuesta es correcta o incorrecta */}
                {esRespuestaCorrecta !== null && (
                    <div className={`mt-4 ${esRespuestaCorrecta ? 'text-green-500' : 'text-red-500'}`}>
                        {esRespuestaCorrecta ? '¡Respuesta correcta!' : 'Respuesta incorrecta'}
                    </div>
                )}
            </div>
        </div>
    );
};

export default GameBoard;
