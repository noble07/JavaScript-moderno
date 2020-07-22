/**
 * **********************************
 * Event Listener Input en JavaScript
 * **********************************
 * 
 * @see https://www.w3schools.com/jsref/dom_obj_event.asp
 * 
 */

const busqueda = document.getElementById('buscador');

//keydown: Se ejecuta el evento presionas una tecla
// busqueda.addEventListener('keydown', obtenerEvento);

//keydown: Se ejecuta el evento cuando sueltas una tecla
// busqueda.addEventListener('keyup', obtenerEvento);

//keypress: Se ejecuta el evento cuando presionas una tecla que produce un caracter
// busqueda.addEventListener('keypress', obtenerEvento);

//focus: Se ejecuta cuando haces focus al input
// busqueda.addEventListener('focus', obtenerEvento);

//blur: Se ejecuta cuando pierde focus el input
// busqueda.addEventListener('blur', obtenerEvento);

//Cut: Se ejecuta cuando cortas (CTRL + X) el texto dentro del input
// busqueda.addEventListener('cut', obtenerEvento);

//Copy: Se ejecuta cuando copias (CTRL + C) el texto dentro del input
// busqueda.addEventListener('copy', obtenerEvento);

//Paste: Se ejecuta cuando pegas (CTRL + V) el texto dentro del input
// busqueda.addEventListener('paste', obtenerEvento);

//Input: Se ejecuta cuando se realizan todas la acciones anteriores
busqueda.addEventListener('input', obtenerEvento);

function obtenerEvento(e) {
  // document.getElementById('encabezado').innerText = busqueda.value;
  console.log(`Evento: ${e.type}`);
}