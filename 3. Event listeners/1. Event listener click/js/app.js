/**
 * **********************************
 * Event Listener Click en JavaScript
 * **********************************
 * 
 * @see https://www.w3schools.com/js/js_htmldom_eventlistener.asp
 * 
 */

//Event listener click al buscador

/* document.getElementById('submit-buscador').addEventListener('click', function(e) {
  e.preventDefault();
  alert('Buscando Cursos');
}); */

//También se puede ejecutar desde una función definida fuera del evento
document.getElementById('submit-buscador').addEventListener('click', ejecutarBoton);

function ejecutarBoton(e) {
  e.preventDefault();

  let elemento;

  elemento = e;
  //Se accede al elemento que ejecuto el evento
  elemento = e.target;
  elemento = e.target.id;
  elemento = e.target.className;
  elemento = e.target.innerText;

  console.log(elemento);
}

//Otro ejemplo
document.getElementById('encabezado').addEventListener('click', function(e){
  e.target.innerText = 'Nuevo Encabezao';
});