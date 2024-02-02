let Abrahamlincoln =  { name:"Presidente"};
let Marito = {name:"MaritoLincoln"}


const preguntas = [
  {
      pregunta: "¿Cuál fue el nombre del 16º presidente de los Estados Unidos?",
      opciones: [
          "Abraham Lincoln",
          "Marito Lincoln",
          "John F. Kennedy",
          "Barack Obama",
      ],
      respuestaCorrecta: 1,
  },
  {
      pregunta: "¿En qué año nació Abraham Lincoln?",
      opciones: ["1809", "1820", "1830", "1840"],
      respuestaCorrecta: 1,
  },
  {
      pregunta: "¿En qué año murió Abraham Lincoln?",
      opciones: ["1860", "1861", "1862", "1865"],
      respuestaCorrecta: 4,
  },
  {
      pregunta: "¿Dónde nació Marito Lincoln?",
      opciones: ["Buenos Aires", "Washington D.C.", "Nueva York", "Chicago"],
      respuestaCorrecta: 1,
  }
  // Añade más preguntas si lo deseas
];

let puntuacion = 0;
let respuestasCorrectas = 0;
let preguntaActual = 0;

function mostrarPregunta(pregunta) {
  const preguntaElement = document.getElementById("pregunta");
  preguntaElement.textContent = pregunta.pregunta;

  const opcionesElement = document.getElementById("opciones");
  opcionesElement.innerHTML = "";

  pregunta.opciones.forEach((opcion, index) => {
      const boton = document.createElement("button");
      boton.textContent = opcion;
      boton.addEventListener("click", () => {
          const respuesta = index + 1;



          if (respuesta === pregunta.respuestaCorrecta) {
              console.log("¡Respuesta correcta!");
              puntuacion++;
              respuestasCorrectas++;
          }
          
          
          else {
              console.log("Respuesta incorrecta.");
              // Eliminar objetos siguientes cuando el jugador responda mal
              delete preguntas;
              delete puntuacion;
              delete respuestasCorrectas;
              delete preguntaActual;
          }

         
         
          const puntuacionNumeroElement = document.getElementById("puntuacion-numero");
          puntuacionNumeroElement.textContent = puntuacion;





          preguntaActual++;
          if (preguntaActual < preguntas.length) {
              mostrarPregunta(preguntas[preguntaActual]);
          }
          
          
          
          
          
          else {
              console.log("¡Fin del Juego!");
              if (respuestasCorrectas === preguntas.length) {
                  alert("¡Vacan! Has ganado el videojuego. Tu puntuación final es: " + puntuacion);
              } else {
                  alert("¡Has perdido! El Garbage Collector ha eliminado a Abraham  y Marito Lincoln. Tu puntuación final es: " + puntuacion);
              }
              delete Abrahamlincoln;
              delete Marito;
          }
      });
      opcionesElement.appendChild(boton);
  });
}

mostrarPregunta(preguntas[preguntaActual]);
