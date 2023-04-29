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
  