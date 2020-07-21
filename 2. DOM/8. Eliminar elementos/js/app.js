/**
 * ***********************************
 * Eliminar elementos desde JavaScript
 * ***********************************
 * 
 * @see https://www.w3schools.com/JSREF/met_element_remove.asp
 * 
 */

const enlaces = document.querySelectorAll('.enlace');
const navegacion = document.querySelector('#principal');

//Eliminar elemento desde el selector del mismo
// enlaces[0].remove();

//Eliminar desde el padre
navegacion.removeChild(enlaces[0])

console.log(navegacion);

/**
 * 
 * Eliminar y agregar atributos/clases
 * 
 */
const primerLi = document.querySelector('.enlace');

let elemento;

// Obtener una clase de CSS
elemento = primerLi.className;
//O también de está manera
elemento = primerLi.classList; //Retorna un DOMTokenList

//Añadir nueva clase
elemento = primerLi.classList.add('nueva-clase');
elemento = primerLi.classList.remove('nueva-clase');
elemento = primerLi.classList;

//Leer atributos
elemento = primerLi.getAttribute('href');

//Modificar atributos
primerLi.setAttribute('href', 'https://google.com');

//Crear atributos
primerLi.setAttribute('data-id', 20);

//Comprobar si tiene un atributo
elemento = primerLi.hasAttribute('data-id'); //Retorna true
elemento = primerLi.hasAttribute('data-algo'); //Retorna false

//Eliminar atributo
primerLi.removeAttribute('data-id');

elemento = primerLi;

console.log(elemento);