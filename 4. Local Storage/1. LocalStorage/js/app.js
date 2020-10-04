/**
 * *******************************************
 * LocalStorage / SessionStorage en JavaScript
 * *******************************************
 * 
 * @see https://developer.mozilla.org/es/docs/Web/API/Window/localStorage
 * 
 */

//localStorage
localStorage.setItem('nombre', 'Juan');

//sessionStorage
sessionStorage.setItem('nombre', 'Juan');

//Eliminar del localStorage
// localStorage.removeItem('nombre');

//Obtener valor del localStorage
const nombre = localStorage.getItem('nombre');

//Eliminas todos los datos del localStorage
localStorage.clear();

console.log(nombre);