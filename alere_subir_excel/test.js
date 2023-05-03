// Define las preguntas y respuestas
const questions = [
    {
      question: "¿Cuál es la capital de Francia?",
      options: ["París", "Madrid", "Londres", "Berlín"],
      answer: "París"
    },
    {
      question: "¿Quién escribió la novela 'Cien años de soledad'?",
      options: ["Gabriel García Márquez", "Pablo Neruda", "Mario Vargas Llosa", "Octavio Paz"],
      answer: "Gabriel García Márquez"
    },
    {
      question: "¿Cuál es el río más largo del mundo?",
      options: ["Amazonas", "Nilo", "Yangtze", "Misisipi"],
      answer: "Nilo"
    }
  ];
  
  // Obtén el contenedor donde se mostrará el quiz
  const quizContainer = document.getElementById("quiz");
  
  // Crea el quiz a partir de las preguntas
  function createQuiz() {
    // Inicializa el HTML del quiz
    let quizHTML = "";
  
    // Para cada pregunta...
    questions.forEach((question, index) => {
      // Agrega el texto de la pregunta
      quizHTML += `<div>${index + 1}. ${question.question}</div>`;
  
      // Agrega las opciones de respuesta
      question.options.forEach(option => {
        quizHTML += `
          <label>
            <input type="radio" name="question${index}" value="${option}">
            ${option}
          </label>
        `;
      });
    });
  
    // Agrega el HTML del quiz al contenedor
    quizContainer.innerHTML = quizHTML;
  }
  
  // Obtiene las respuestas del quiz
  function getAnswers() {
    const userAnswers = [];
  
    // Para cada pregunta...
    questions.forEach((question, index) => {
      // Obtiene la respuesta seleccionada por el usuario
      const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
  
      // Si se seleccionó una respuesta, la agrega al arreglo de respuestas
      if (selectedOption) {
        userAnswers.push(selectedOption.value);
      }
    });
  
    return userAnswers;
  }
  
  // Función que se ejecuta al hacer click en el botón de Submit
  function submitQuiz() {
    // Obtiene las respuestas del usuario
    const userAnswers = getAnswers();
  
    // Compara las respuestas del usuario con las respuestas correctas
    const correctAnswers = questions.filter(question => userAnswers.includes(question.answer));
  
    // Muestra la cantidad de respuestas correctas
    alert(`Obtuviste ${correctAnswers.length} de ${questions.length} respuestas correctas.`);
  }
  
  // Crea el quiz al cargar la página
  createQuiz();
  
  // Agrega el evento para el botón de Submit
  document.getElementById("submit").addEventListener("click", submitQuiz);

/*------------------------------------------------------- */
// Preguntas y opciones de respuesta
let preguntas = [
  // PREGUNTA 1
  {
      pregunta: "¿Que es Visual Basic?",
      opciones: [
          "Conjunto de herramientas y otras tecnologías de desarrollo de software basado en componentes para crear aplicaciones",
          "Lenguaje de programación dirigido por eventos",
          "Uno de los lenguajes de programación que utiliza una interfaz visual es decir que nos permite programar en un entorno gráfico",
          "Todas son correctas"
      ],
      respuestaCorrecta: 0,
      imagen: null
  },
  // PREGUNTA 2
  {
      pregunta: "¿Para qué sirve Label?",
      opciones: [
          "Agregar texto",
          "Orientar al usuario sobre la utilidad de los demás controles",
          "Realizar una operación",
          "Ninguna de las anteriores"
      ],
      respuestaCorrecta: 1,
      imagen: null
  },
  // PREGUNTA 3
  {
      pregunta: "¿Las propiedades que posee el control CommandButton son prácticamente las que poseen el resto de controles estandar de visual basic?",
      opciones: [
          "Verdadero",
          "Falso"
      ],
      respuestaCorrecta: 1,
      imagen: null
  },
  // PREGUNTA 4
  {
      pregunta: "¿Cuál es la función de la propiedad enabled?",
      opciones: [
          "Habilitar o deshabilitar el botón",
          "cambia el tipo de letra",
          "Cambia el tamaño y la posición del objeto",
          "Ninguna de las opciones"
      ],
      respuestaCorrecta: 1,
      imagen: null
  },
  // PREGUNTA 5
  {
      pregunta: "La propiedad style tiene dos valores, true o false",
      opciones: [
          "Verdadero",
          "Falso"
      ],
      respuestaCorrecta: 1,
      imagen: null
  },
  // PREGUNTA 6
  {
      pregunta: "¿Qué es Visual basic?",
      opciones: [
          "Conjunto de herramientas y otras tecnologías de desarrollo de software basado en componentes para crear aplicaciones",
          "Lenguaje de programación dirigido por eventos",
          "Uno de los lenguajes de programación que utiliza una interfaz visual es decir que nos permite programar en un entorno gráfico",
          "Todas son correctas"
      ],
      respuestaCorrecta: 1,
      imagen: null
  },
  // PREGUNTA 7
  {
      pregunta: "El control listbox permite mediante una lista desplegable poder seleccionar elementos.",
      opciones: [
          "Verdadero",
          "Falso",
      ],
      respuestaCorrecta: 1,
      imagen: null
  },
  // PREGUNTA 8
  {
      pregunta: "El Método RemoveItem se utiliza para...",
      opciones: [
          "saber el número de elementos",
          "saber el elemento seleccionado",
          "eliminar el elemento especificado",
          "Ninguna"
      ],
      respuestaCorrecta: 1,
      imagen: null
  },
  // PREGUNTA 9
  {
      pregunta: "La propiedad ListIndex da el indice del item seleccionado en ese momento. De esta manera, la expresión List1.RemoveItem List1.ListIndex elimina el item que está seleccionado en ese momento.",
      opciones: [
          "Verdadero",
          "Falso",
      ],
      respuestaCorrecta: 1,
      imagen: null
  },
  // PREGUNTA 10
  {
      pregunta: "El control ListBox permite añadir elementos en forma de lista y también poder seleccionar elementos de la misma para trabajar los datos.",
      opciones: [
          "Verdadero",
          "Falso"
      ],
      respuestaCorrecta: 1,
      imagen: null
  },
  // PREGUNTA 11
  {
      pregunta: "¿Qué es una variable?",
      opciones: [
          "Un valor numerico",
          "Parte de memoria RAM",
          "Una letra",
          "Ninguna de las anteriores"
      ],
      respuestaCorrecta: 1,
      imagen: null
  },
  // PREGUNTA 12
  {
      pregunta: "Selecciona cual de la siguientes afirmaciones describe el uso de For next...",
      opciones: [
          "un comando que sirve para manejar un contador",
          "un contador que simplifica la repeticion de variables",
          "un metodo de visual basic",
          "Ninguna de las anteriores"
      ],
      respuestaCorrecta: 0,
      imagen: null
  },
  // PREGUNTA 13
  {
      pregunta: "¿Cuál de todas estas palabras no es un método?",
      opciones: [
          "clear",
          "Additem",
          "ItemCheck",
          "Todas son métodos"
      ],
      respuestaCorrecta: 1,
      imagen: null
  },
  // PREGUNTA 14
  {
      pregunta: "¿Qué propiedad no pertenece a listbox?",
      opciones: [
          "Propiedad Enabled",
          "Propiedad Sorted",
          "Propiedad ListCount",
          "Propiedad Style"
      ],
      respuestaCorrecta: 1,
      imagen: null
  },
  // PREGUNTA 15
  {
      pregunta: "IF es una estructura de control que permite ejecutar lineas de código si la condición es verdadera.",
      opciones: [
          "Verdadero",
          "Falso"
      ],
      respuestaCorrecta: 1,
      imagen: null
  },
  // PREGUNTA 16
  {
      pregunta: "El 'ELSE' hace que Si(IF) no se cumple la condición anterior, entonces (ELSE) cumpla la nueva que se le impuso.",
      opciones: [
          "Verdadero",
          "Falso"
      ],
      respuestaCorrecta: 1,
      imagen: null
  },
  // PREGUNTA 17
  {
      pregunta: "En la siguiente estructura condicional se cierra con...",
      opciones: [
          "el if ya esta cerrado",
          "EndIf",
          "exit",
          "end"
      ],
      respuestaCorrecta: 0,
      imagen: "alere_qa/r/125/files/static/v9/test_1/img_17.png"
  },
  // PREGUNTA 18
  {
      pregunta: "¿Para que se utiliza la sentencia Input?",
      opciones: [
          "Cierra la aplicación",
          "Devuelve un valor verdadero si el texto que se envía como argumento se puede convertir a número.",
          "Darle valor a la variable",
          "Leer datos de un archivo de texto"
      ],
      respuestaCorrecta: 2,
      imagen: null
  },
  // PREGUNTA 19
  {
      pregunta: "Selecciona cual de la siguientes afirmaciones define el concepto de Frame...",
      opciones: [
          "es un formulario",
          "un método que se utiliza como contenedor de otros controles",
          "un control que se utiliza como contenedor de otros controles",
          "un evento que se utiliza como contenedor de otros controles"
      ],
      respuestaCorrecta: 2,
      imagen: null
  },
  // PREGUNTA 20
  {
      pregunta: "¿El siguiente código de programa es correcto?",
      opciones: [
          "Verdadero",
          "Falso"
      ],
      respuestaCorrecta: 2,
      imagen: "alere_qa/r/125/files/static/v9/test_1/img_20.png"
  },
  // PREGUNTA 21
  {
      pregunta: "¿El siguiente código de programa es correcto?",
      opciones: [
          "Verdadero",
          "Falso"
      ],
      respuestaCorrecta: 2,
      imagen: "alere_qa/r/125/files/static/v9/test_1/img_21.png"
  },
];

// Generar las preguntas y opciones de respuesta
let preguntasHTML = "";
for (let i = 0; i < preguntas.length; i++) {
  preguntasHTML += "<h3>" + (i+1) + ". " + preguntas[i].pregunta + "</h3>";
  if (preguntas[i].imagen !== null) {
      preguntasHTML += "<img src='" + preguntas[i].imagen + "' alt='Imagen de la pregunta'>";
  }
  for (let j = 0; j < preguntas[i].opciones.length; j++) {
      preguntasHTML += "<p><input type='radio' name='pregunta" + i + "' value='" + j + "'> " + preguntas[i].opciones[j] + "</p>";
  }
}
document.getElementById("preguntas").innerHTML = preguntasHTML;

// Calificar el test
function calificar() {
  let aciertos = 0;
  let respuestas_nulas = 0;
  let respuestas = [];
  for (let i = 0; i < preguntas.length; i++) {
      let respuesta = document.querySelector("input[name=pregunta" + i + "]:checked");
      if (respuesta === null) {
          respuestas.push("Pregunta "+ (i+1) + " no respondida");
          respuestas_nulas++;
      } else {
          respuestas.push(preguntas[i].opciones[parseInt(respuesta.value)]);
          if (parseInt(respuesta.value) === preguntas[i].respuestaCorrecta) {
              aciertos++;
          }
      }
  }
  let calificacion_final = (100/21)*aciertos;
  calificacion_final = calificacion_final.toFixed(2);
  if (respuestas_nulas==0){
      alert("Test completado. Calificacion: " + calificacion_final);
  }
  /*else{
      apex.message.alert("Preguntas sin contestar: " + respuestas_nulas, function(){funcion1();});
      //alert("Preguntas sin contestar: " + aciertos + "/" + preguntas.length + "\n\nRespuestas: \n" + respuestas.join("\n"));
  }*/
}

/*Lo siguiente funciona pero si se agrega solo y a un boton en su dinamic action */
event.preventDefault();

INSERT INTO ALE_TEST_CALIFICACIONES(ID_USUARIO,CALIFICACION,FECHA) VALUES (1,30,SYSTIMESTAMP);
ale_test_calificaciones