/**
 * **********************************
 * Event Listener Mouse en JavaScript
 * **********************************
 * 
 * @see https://www.w3schools.com/jsref/dom_obj_event.asp
 * 
 */

const encabezado = document.getElementById('encabezado');
const enlaces = document.getElementsByClassName('enlace');
const boton = document.getElementById('vaciar-carrito');

// Click
// boton.addEventListener('click', obtenerEvento);

// Doble click
// boton.addEventListener('dblclick', obtenerEvento);

// Mouse Enter
// boton.addEventListener('mouseenter', obtenerEvento);

// Mouse Leave
// boton.addEventListener('mouseleave', obtenerEvento);

// Mouse Hover
// boton.addEventListener('mouseover', obtenerEvento);

// Mouse Out
// boton.addEventListener('mouseout', obtenerEvento);

// Mouse Down
// boton.addEventListener('mousedown', obtenerEvento);

// Mouse Up
boton.addEventListener('mouseup', obtenerEvento);

// Mouse Move
encabezado.addEventListener('mousemove', obtenerEvento);

function obtenerEvento(e) {
  console.log(`Evento: ${e.type}`);
}