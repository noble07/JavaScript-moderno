/**
 * ***************************
 * Window object en JavaScript
 * ***************************
 * 
 * @see https://www.w3schools.com/JSREF/obj_window.asp
 * 
 */

//Prompt
const nombre = prompt();
console.log(`Bienvenido ${nombre}`);

//Confirm
if (confirm('Eliminar?')) {
  console.log('Eliminado');
} else {
  console.log('Nada paso');
}

let altura, ancho;

//Medidas del navegador
altura = window.outerHeight;
ancho = window.outerWidth;

//Medidas de la ventana sin la interfaz del navegador
altura = window.innerHeight;
ancho = window.innerWidth;

console.log(altura);
console.log(ancho);

//Ubicación

let ubicacion;

ubicacion = window.location;

//History
// window.history.go(-2);

//Navigator
ubicacion = window.navigator;
ubicacion = window.navigator.appName;
ubicacion = window.navigator.appVersion;
ubicacion = window.navigator.userAgent;
ubicacion = window.navigator.language;

console.log(ubicacion);