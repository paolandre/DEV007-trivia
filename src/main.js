//VARIABLES 
//Nombrar las variables (let) usando los id de las secciones del documento y los tres botones

//Secciones o vistas
let bienvenida = document.getElementById("bienvenida");
let categorias = document.getElementById("categorias"); 
let geografia=document.getElementById("contenedorGeografia"); 
let cultura = document.getElementById("contenedorCultura");

//Botones 
let botonGeografia = document.getElementById("geografia");
let botonCultura = document.getElementById("culturaGeneral");
let botonEnviar = document.getElementById("botonEnviar");
let regresar = document.getElementById("botonRegresar");

//Toma la variable y cambia el estilo del despliegue para que se muestre o no en la pantalla
bienvenida.style.display = "block";
categorias.style.display = "none";
geografia.style.display = "none";
cultura.style.display = "none";
botonRegresar.style.display = "none";

//BIENVENIDA
//Modifica el botón de bienvenida. Cuando el usuario hace click se agrega la función para mostrar la bienvenida + el nombre del jugador. También, se bloquean nuevamente la forma como se muestran las secciones porque si no se hace esto, se vuelven a mostrar. 
botonEnviar.addEventListener("click",function(){
  let nombre=document.getElementById("jugador").value; 
document.getElementById("saludo").innerHTML= "Bienvenid@ "+ nombre;
  bienvenida.style.display="none";
  categorias.style.display="block"; 
  geografia.style.display="none";
  cultura.style.display="none";
  });

//GEOGRAFÍA
//Modifica el botón de geografía para que se muestren o no las otras secciones cuando se haga click. addEvent es una acción. 
botonGeografia.addEventListener("click",function(){
  bienvenida.style.display="none";
  categorias.style.display="none"; 
  geografia.style.display="block";
  cultura.style.display="none";
  botonRegresar.style.display = "block";
  });

//CULTURA GENERAL
//Modifica el botón de cultura general para que se muestren o no las otras secciones cuando se haga click. addEvent es una acción. 
botonCultura.addEventListener("click",function(){
  bienvenida.style.display="none";
  categorias.style.display="none"; 
  geografia.style.display="none";
  cultura.style.display="block";
  botonRegresar.style.display = "block";
  }); 

//Modifica el botón de regresar para que cuando se presente un evento en este caso "click" se vaya a la sección de categorias.  
botonRegresar.addEventListener("click",function(){
  let regresar= document.getElementById ("categorias").scrollIntoView();
  bienvenida.style.display="none";
  categorias.style.display="block"; 
  geografia.style.display="none";
  cultura.style.display="none";
  botonRegresar.style.display = "none";
  });

  function enviarGeografia() {
    // Crea el contenedor de la ventana modal
    var modalContainer = document.createElement('div');
    modalContainer.className = 'modal-container';   
  
    // Agrega el título al contenido de la ventana modal
  
    // Crea el fondo oscuro
    var overlay = document.createElement('div');
    overlay.className = 'overlay';
  
    // Crea el contenido de la ventana modal
    var modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
  
    // Crea el elemento <span> para cerrar
    var closeButton = document.createElement('span');
    closeButton.textContent = 'X';
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
  
    // Ejemplo de uso de la ventana modal en lugar de alert
    function mostrarMensaje() {
      showModal();
      modalContent.textContent = 'Correctas: ' + puntaje;
    }
  
    // Asignar la función hideModal al evento click del botón de cerrar
    closeButton.addEventListener('click', hideModal);
  
    //SCORE
    //Mediante la función se crea el puntaje.
  
    let puntaje = 0;
  
    //Pregunta 1 geografia
    if (document.getElementById('bogota').checked == true) {
      puntaje++;
    } else {
      showWrongAnswer("respuesta1");
    }
  
    //Pregunta 2 geografia
    if (document.getElementById('Ecuador, Perú, Brasil, Venezuela y Panamá').checked == true) {
      puntaje++;
    } else {
      showWrongAnswer("respuesta2");
    }
  
    //Pregunta 3 geografia
    if (document.getElementById('norte').checked == true) {
      puntaje++;
    } else {
      showWrongAnswer("respuesta3");
    }
  
    //Botón de enviar y mostrar respuestas por pregunta de geografía
    document.getElementById("respuesta1").innerHTML = "La respuesta correcta es Bogotá";
    document.getElementById("respuesta2").innerHTML = "La respuesta correcta es Ecuador, Perú, Brasil, Venezuela y Panamá";
    document.getElementById("respuesta3").innerHTML = "La respuesta correcta es norte";
  
    document.getElementById("respuesta1").addEventListener("click", function() {
      showWrongAnswer("respuesta1");
    });
  
    document.getElementById("respuesta2").addEventListener("click", function() {
      showWrongAnswer("respuesta2");
    });
  
    document.getElementById("respuesta3").addEventListener("click", function() {
      showWrongAnswer("respuesta3");
    });
  
    function showWrongAnswer(elementId) {
      var selectedAnswer = document.getElementById(elementId);
      selectedAnswer.style.color = "red";
    }
  
    // Llamada a la función para mostrar la ventana modal
    mostrarMensaje();
  }
  


function enviarCultura() {
  let puntajecul= 0;


  //Pregunta 1 cultura 
  if (document.getElementById('gabriel').checked==true) 
  {puntajecul++}
  
    //Pregunta 2 cultura
  if (document.getElementById('shakira').checked==true) 
  {puntajecul++}

    //Pregunta 3 cultura
  if (document.getElementById('lulo').checked==true) 
  {puntajecul++}

//Botón de enviar y mostrar respuestas por pregunta de cultura
document.getElementById("respuesta1cultura").innerHTML= "La respuesta correcta es Gabriel García Márquez";
document.getElementById("respuesta2cultura").innerHTML= "La respuesta Shakira";
document.getElementById("respuesta3cultura").innerHTML= "La respuesta correcta es lulo";

  
    alert("Correctas: " + puntajecul);
  
  }