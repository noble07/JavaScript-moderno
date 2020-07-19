/**
 * ***************************************
 * Query Selector en JavaScript
 * ***************************************
 * 
 * @see https://www.w3schools.com/JSREF/dom_obj_all.asp
 * 
 */

//Seleccionar el elemento por id
const encabezado = document.querySelector('#encabezado');

//Seleccionar el elemento por clase
// const encabezado = document.querySelector('.encabezado');

// Aplicar css
encabezado.style.background = '#333';
encabezado.style.color = '#fff';
encabezado.style.padding = '20px';
encabezado.textContent = 'Los mejores Cursos';

//Seleccionar multiples elementos
const enlaces = document.querySelectorAll('.enlace'); //Retorna una NodeList

console.log(enlaces);

//Seleccionar por etiqueta
const encabezado1 = document.querySelector('h1');

//También se puede hacer de esta manera
// const encabezado1 = document.getElementsByTagName('h1'); //Retornar un HTMLCollection

console.log(encabezado1);

//Nesting de selectores
//Se pueden crear querys para seleccionar los elementos como lo hace jQuery o CSS3

let enlace;

//Primer hijo
enlace = document.querySelector('#principal a:first-child');

//Hijo intermedio
enlace = document.querySelector('#principal a:nth-child(3)');


//Último hijo
enlace = document.querySelector('#principal a:last-child');

console.log(enlace);