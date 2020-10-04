/**
 * **********************************
 * Event Bubbling Input en JavaScript
 * **********************************
 * 
 * @see https://www.sitepoint.com/event-bubbling-javascript/
 * 
 */

const card = document.querySelector('.card');
const inforCurso = document.querySelector('.info-card');
const agregarCarrito = document.querySelector('.agregar-carrito');

card.addEventListener('click', function (e) {
  console.log('Click en Card');
  e.stopPropagation(); //Evita la propagación del evento
})

inforCurso.addEventListener('click', function (e) {
  console.log('Click en Info Curso');
  e.stopPropagation(); //Evita la propagación del evento
})

agregarCarrito.addEventListener('click', function (e) {
  console.log('Click en Agregar a Carrito');
  e.stopPropagation(); //Evita la propagación del evento
})