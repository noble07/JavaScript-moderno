/**
 * ******************************
 * Event Delegation en JavaScript
 * ******************************
 * 
 * @see https://javascript.info/event-delegation#:~:text=Introduction%20to%20Events-,Event%20delegation,handler%20on%20their%20common%20ancestor.
 * @see https://davidwalsh.name/event-delegate
 * 
 */

document.body.addEventListener('click', eliminarElemento);

function eliminarElemento(e){
  e.preventDefault();

  if (e.target.classList.contains('borrar-curso')) {// Valida si el elemento al que se le hace clic tiene la clase
    e.target.parentElement.parentElement.remove();
  }

  if (e.target.classList.contains('agregar-carrito')) {
    console.log('Curso agregado');
  }

}