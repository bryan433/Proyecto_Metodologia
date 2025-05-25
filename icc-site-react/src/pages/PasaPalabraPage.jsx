import React from 'react'
import { useState } from 'react'
import GameBoard from '../components/GameBoard'
import ModalGanador from '../components/ModalGanador'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import '../App.css'

function PasaPalabraPage(){
  const [indiceActual, setIndiceActual] = useState(0)
  const [preguntas, setPreguntas] = useState([]);
  const [respuesta, setRespuesta] = useState(''); 
  const [esRespuestaCorrecta, setRespuestaCorrecta] = useState(null);
  const [numeroRespuestasCorrectas, setNumeroRespuestasCorrectas] = useState(0);
  const [numeroVidas, setnumeroVidas] = useState(3);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [ganador, setGanador] = useState(false);
  const location = useLocation();
  const [dificultad, setDificultad] = useState('');
  const [letras, setLetras] = useState([]);

  const todasLasPreguntas = [
    { letra: 'A', pregunta: '¿Qué animal es conocido por su gran trompa?', respuesta: 'elefante' },
    { letra: 'B', pregunta: '¿Qué insecto produce miel?', respuesta: 'abeja' },
    { letra: 'C', pregunta: '¿Cómo se llama el continente donde está Egipto?', respuesta: 'africa' },
    { letra: 'D', pregunta: '¿Qué gas es fundamental para la respiración humana?', respuesta: 'dioxido de carbono' },
    { letra: 'E', pregunta: '¿Cuál es el órgano encargado de bombear sangre en el cuerpo?', respuesta: 'corazon' },
    { letra: 'F', pregunta: '¿Qué objeto se usa para volar en el cielo con viento?', respuesta: 'cometa' },
    { letra: 'G', pregunta: '¿Qué instrumento musical tiene cuerdas y se toca con las manos?', respuesta: 'guitarra' },
    { letra: 'H', pregunta: '¿Qué gas es el más abundante en el universo?', respuesta: 'hidrogeno' },
    { letra: 'I', pregunta: '¿Qué país tiene como capital a Islamabad?', respuesta: 'pakistan' },
    { letra: 'J', pregunta: '¿Qué fruta tropical es de color amarillo y tiene cáscara gruesa?', respuesta: 'banana' },
    { letra: 'K', pregunta: '¿Cuál es un arte marcial de origen japonés?', respuesta: 'karate' },
    { letra: 'L', pregunta: '¿Qué mamífero marino es conocido por cantar bajo el agua?', respuesta: 'ballena' },
    { letra: 'M', pregunta: '¿Qué astro es el satélite natural de la Tierra?', respuesta: 'luna' },
    { letra: 'N', pregunta: '¿Qué gas compone la mayor parte del aire que respiramos?', respuesta: 'nitrogeno' },
    { letra: 'Ñ', pregunta: 'Contiene la letra Ñ, ¿cómo se llama el río más largo de España?', respuesta: 'tajo' },
    { letra: 'O', pregunta: '¿Qué fruta es redonda, de color anaranjado y rica en vitamina C?', respuesta: 'naranja' },
    { letra: 'P', pregunta: '¿Qué metal precioso es conocido por su color dorado?', respuesta: 'oro' },
    { letra: 'Q', pregunta: '¿Qué capital de Ecuador empieza con la letra Q?', respuesta: 'quito' },
    { letra: 'R', pregunta: '¿Qué animal es conocido por su rapidez y manchas en la piel?', respuesta: 'guepardo' },
    { letra: 'S', pregunta: '¿Qué líquido se usa para cocinar y proviene del mar?', respuesta: 'sal' },
    { letra: 'T', pregunta: '¿Qué planeta del sistema solar es el más grande?', respuesta: 'jupiter' },
    { letra: 'U', pregunta: '¿Qué país sudamericano tiene a Montevideo como capital?', respuesta: 'uruguay' },
    { letra: 'V', pregunta: '¿Qué líquido rojo transporta oxígeno en el cuerpo humano?', respuesta: 'sangre' },
    { letra: 'W', pregunta: '¿Qué ciudad de Estados Unidos es la capital del país?', respuesta: 'washington d.c.' },
    { letra: 'X', pregunta: 'Contiene la letra X, ¿qué instrumento musical de percusión tiene placas metálicas?', respuesta: 'xilofono' },
    { letra: 'Y', pregunta: '¿Qué país de Asia tiene su nombre con la letra Y?', respuesta: 'yemen' },
    { letra: 'Z', pregunta: '¿Qué mamífero con rayas blancas y negras vive en África?', respuesta: 'cebra' },
  ];

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const dificultadParam = queryParams.get('dificultad');
    setDificultad(dificultadParam || '');

    if (dificultadParam === 'baja') {
      setPreguntas(todasLasPreguntas.slice(0, 10)); // Primeras 8 preguntas
      setLetras("ABCDEFGHIJ".split(''));
    }
    else if (dificultadParam === 'media') {
      setPreguntas(todasLasPreguntas.slice(0, 15)); // Primeras 15 preguntas
      setLetras("ABCDEFGHIJKLMNO".split(''));
    }
    else if (dificultadParam === 'completa') {
      setPreguntas(todasLasPreguntas); 
      setLetras("ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split(''));
    }
  }, [location])

  console.log(dificultad);

  const cambioIndice = (nuevoIndice) => {
    setIndiceActual(nuevoIndice); 
  };
  

  const enviarRespuesta = () =>{
    if (respuesta.toLowerCase() === preguntas[indiceActual].respuesta.toLowerCase()) {
      setRespuestaCorrecta(true);
      setNumeroRespuestasCorrectas((prev) => {
        const nuevasCorrectas = prev + 1;

        // Mostrar el modal si se alcanzan 3 respuestas correctas
       if (nuevasCorrectas === 3) {
          setMostrarModal(true);
          setGanador(true);
        }

        return nuevasCorrectas;
      });

      console.log(numeroRespuestasCorrectas);
      
      // Después de mostrar el mensaje de "Respuesta correcta", avanza al siguiente índice
      setTimeout(() => {
          // Avanzar al siguiente índice (letra)
          cambioIndice((indiceActual + 1) % preguntas.length);
          setRespuesta(""); // Limpiar la respuesta
          setRespuestaCorrecta(null); // Restablecer el estado de la respuesta
      }, 1000); // Tiempo para mostrar la respuesta correcta
  } else {
      console.log("Respuesta incorrecta");
      setnumeroVidas(prev => prev - 1); 

      if (numeroVidas < 1) {
          setMostrarModal(true); 
          setGanador(false);
      }
      console.log(numeroVidas);
      setRespuestaCorrecta(false);
  }

  }

  const reiniciarJuego = () =>{
    setIndiceActual(0);
    setRespuesta("");
    setRespuestaCorrecta(null);
    setNumeroRespuestasCorrectas(0);
    setMostrarModal(false);
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Pasapalabra</h1>
      <GameBoard
        letras={letras}
        indiceActual={indiceActual}
        cambioIndice={cambioIndice}
        pregunta={preguntas[indiceActual]?.pregunta} 
        respuesta={respuesta}
        setRespuesta={setRespuesta}
        enviarRespuesta={enviarRespuesta}
        esRespuestaCorrecta={esRespuestaCorrecta}
      />
      <ModalGanador
      mostrar={mostrarModal}
      ganador={numeroRespuestasCorrectas >= 3} 
      onClose={() => {
        setMostrarModal(false);
        reiniciarJuego();
      }}
/>
    </div>
    </>
  )
}

export default PasaPalabraPage
