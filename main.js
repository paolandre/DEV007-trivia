//VARIABLES 
//Nombrar las variables (let) usando los id de las secciones del documento y los tres botones

//Secciones o vistas
let bienvenida = document.getElementById("bienvenida");
let categorias = document.getElementById("categorias");
let geografia = document.getElementById("contenedorGeografia");
let cultura = document.getElementById("contenedorCultura");

//Botones 
let botonGeografia = document.getElementById("geografia");
let botonCultura = document.getElementById("culturaGeneral");
let botonEnviar = document.getElementById("botonEnviar");
let regresarC = document.getElementById("regresarcultura");
let regresarG = document.getElementById("regresargeografia");

//Toma la variable y cambia el estilo del despliegue para que se muestre o no en la pantalla
bienvenida.style.display = "block";
categorias.style.display = "none";
geografia.style.display = "none";
cultura.style.display = "none";
regresarC.style.display = "none";
regresarG.style.display = "none";

//Función de la ventana modal
// Función para mostrar la ventana modal
function mostrarMensaje(mensaje) {
  // Crea el contenedor de la ventana modal
  var modalContainer = document.createElement('div');
  modalContainer.className = 'modal-container';

  // Crea el fondo oscuro
  var overlay = document.createElement('div');
  overlay.className = 'overlay';

  // Crea el contenido de la ventana modal
  var modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  // Crea el elemento <span> para cerrar
  var closeButton = document.createElement('span');
  closeButton.textContent = 'x';
  closeButton.className = 'close-button';

  // Agrega el contenido a la ventana modal
  modalContainer.appendChild(closeButton);
  modalContainer.appendChild(modalContent);

  // Agrega la ventana modal y el fondo oscuro al cuerpo del documento
  document.body.appendChild(overlay);
  document.body.appendChild(modalContainer);

  // Función para mostrar la ventana modal
  function showModal() {
    overlay.style.display = 'block';
    modalContainer.style.display = 'block';
  }

  // Función para ocultar la ventana modal
  function hideModal() {
    overlay.style.display = 'none';
    modalContainer.style.display = 'none';
  }

  // Asignar la función hideModal al evento click del botón de cerrar
  closeButton.addEventListener('click', hideModal);

  // Mostrar mensaje en la ventana modal
  showModal();
  modalContent.textContent = mensaje;

  // Función para mostrar la ventana modal
  function mostrarMensaje(mensaje) {
    showModal();
    modalContent.textContent = mensaje;
  }
}

//BIENVENIDA
//Modifica el botón de bienvenida. Cuando el usuario hace click se agrega la función para mostrar la bienvenida + el nombre del jugador. También, se bloquean nuevamente la forma como se muestran las secciones porque si no se hace esto, se vuelven a mostrar. 
botonEnviar.addEventListener("click", function () {
  let nombre = document.getElementById("jugador").value;

  // Verificar si se ha ingresado un nombre
  if (!nombre) {
    mostrarMensaje("Por favor, ingresa tu nombre.");
    return;
  }

  document.getElementById("saludo").innerHTML = "Bienvenid@ " + nombre;
  bienvenida.style.display = "none";
  categorias.style.display = "block";
  geografia.style.display = "none";
  cultura.style.display = "none";
});

//GEOGRAFÍA
//Modifica el botón de geografía para que se muestren o no las otras secciones cuando se haga click. addEvent es una acción. 
botonGeografia.addEventListener("click", function () {
  bienvenida.style.display = "none";
  categorias.style.display = "none";
  geografia.style.display = "block";
  cultura.style.display = "none";
  regresarC.style.display = "none";
  regresarG.style.display = "block";
});

//CULTURA GENERAL
//Modifica el botón de cultura general para que se muestren o no las otras secciones cuando se haga click. addEvent es una acción. 
botonCultura.addEventListener("click", function () {
  bienvenida.style.display = "none";
  categorias.style.display = "none";
  geografia.style.display = "none";
  cultura.style.display = "block";
  regresarC.style.display = "block";
  regresarG.style.display = "none";
});

//Modifica el botón de regresar para que cuando se presente un evento en este caso "click" se vaya a la sección de categorias.  
regresarG.addEventListener("click", function () {
  let regresar = document.getElementById("categorias").scrollIntoView();
  bienvenida.style.display = "none";
  categorias.style.display = "block";
  geografia.style.display = "none";
  cultura.style.display = "none";
  botonRegresar.style.display = "none";
});

regresarC.addEventListener("click", function () {
  let regresar = document.getElementById("categorias").scrollIntoView();
  bienvenida.style.display = "none";
  categorias.style.display = "block";
  geografia.style.display = "none";
  cultura.style.display = "none";
  botonRegresar.style.display = "none";
});


function enviarGeografia() {
  let puntaje = 0; // Variable para almacenar el puntaje

  function showAnswergeografia(elementId, isCorrect) {
    var selectedAnswer = document.getElementById(elementId);
    if (isCorrect) {
      selectedAnswer.style.color = "green";
    } else {
      selectedAnswer.style.color = "red";
    }
  }

  // Verificar si se ha seleccionado al menos una opción
  var inputs = document.querySelectorAll('input[value]');
  var valorSeleccionado;

  inputs.forEach(function (input) {
    if (input.checked) {
      valorSeleccionado = input.value;
    }
  });

  // Incrementar el puntaje y mostrar respuesta para la primera pregunta
  if (document.getElementById('bogota').checked) {
    puntaje++;
    showAnswergeografia("respuesta1", true);
  } else {
    showAnswergeografia("respuesta1", false);
  }

  // Incrementar el puntaje y mostrar respuesta para la segunda pregunta
  if (document.getElementById('Ecuador, Perú, Brasil, Venezuela y Panamá').checked) {
    puntaje++;
    showAnswergeografia("respuesta2", true);
  } else {
    showAnswergeografia("respuesta2", false);
  }

  // Incrementar el puntaje y mostrar respuesta para la tercera pregunta
  if (document.getElementById('norte').checked) {
    puntaje++;
    showAnswergeografia("respuesta3", true);
  } else {
    showAnswergeografia("respuesta3", false);
  }

  // Mostrar ventana modal si no se ha seleccionado ninguna opción
  if (!valorSeleccionado) {
    mostrarMensaje("Por favor, selecciona al menos una opción.");
    return;
  }

  // Mostrar puntaje y respuestas por pregunta de geografía
  mostrarMensaje('Correctas: ' + puntaje);
  document.getElementById("respuesta1").innerHTML = "La respuesta correcta es Bogotá";
  document.getElementById("respuesta2").innerHTML = "La respuesta correcta es Ecuador, Perú, Brasil, Venezuela y Panamá";
  document.getElementById("respuesta3").innerHTML = "La respuesta correcta es norte";

  // Función para mostrar la respuesta incorrecta al hacer clic
  document.getElementById("respuesta1").addEventListener("click", function () {
    showAnswergeografia("respuesta1", false);
  });

  document.getElementById("respuesta2").addEventListener("click", function () {
    showAnswergeografia("respuesta2", false);
  });

  document.getElementById("respuesta3").addEventListener("click", function () {
    showAnswergeografia("respuesta3", false);
  });
}

function enviarCultura() {
  //SCORE
  //Mediante la función se crea el puntaje.
  let puntajecul = 0;

  function showAnswercultura(elementId, isCorrect) {
    var selectedAnswer = document.getElementById(elementId);
    if (isCorrect) {
      selectedAnswer.style.color = "green";
    } else {
      selectedAnswer.style.color = "red";
    }
  }
  // Verificar si se ha seleccionado al menos una opción
  var inputs = document.querySelectorAll('input[value]');
  var valorSeleccionadocultura;

  inputs.forEach(function (input) {
    if (input.checked) {
      valorSeleccionadocultura = input.value;
    }
  });

  // Incrementar el puntaje y mostrar respuesta para la primera pregunta 
  if (document.getElementById('gabriel').checked == true) {
    { puntajecul++; }
    showAnswercultura("respuesta1cultura", true);
  } else {
    showAnswercultura("respuesta1cultura", false);
  }

  //Pregunta 2 cultura
  if (document.getElementById('shakira').checked == true) {
    { puntajecul++; }
    showAnswercultura("respuesta2cultura", true);
  } else {
    showAnswercultura("respuesta2cultura", false);
  }

  //Pregunta 3 cultura
  if (document.getElementById('lulo').checked == true) {
    { puntajecul++; }
    showAnswercultura("respuesta3cultura", true);
  } else {
    showAnswercultura("respuesta3cultura", false);
  }

  // Mostrar ventana modal si no se ha seleccionado ninguna opción
  if (!valorSeleccionadocultura) {
    mostrarMensaje("Por favor, selecciona al menos una opción.");
    return;
  }


  // Mostrar respuestas y puntaje
  mostrarMensaje('Correctas: ' + puntajecul);
  //Botón de enviar y mostrar respuestas por pregunta de cultura
  document.getElementById("respuesta1cultura").innerHTML = "La respuesta correcta es Gabriel García Márquez";
  document.getElementById("respuesta2cultura").innerHTML = "La respuesta Shakira";
  document.getElementById("respuesta3cultura").innerHTML = "La respuesta correcta es lulo";

  // Función para mostar la respuesta incorrecta al hacer click
  document.getElementById("respuesta1cultura").addEventListener("click", function () {
    showAnswercultura("respuesta1cultura", false);
  });

  document.getElementById("respuesta2cultura").addEventListener("click", function () {
    showAnswercultura("respuesta2cultura", false);
  });

  document.getElementById("respuesta3cultura").addEventListener("click", function () {
    showAnswercultura("respuesta3cultura", false);
  });
}