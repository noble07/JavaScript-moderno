/**
 * ***************************************
 * Seleccionar elementos del DOM de JavaScript
 * ***************************************
 * 
 * @see https://www.w3schools.com/JSREF/dom_obj_all.asp
 * 
 */

let elemento;

//Seleccionar un elemento por el id
elemento = document.getElementById('hero');

//Acceder al id del elemento
elemento = elemento.id;

//Acceder a la clase del elemento
elemento = document.getElementById('header').className;

// console.log(elemento);

let encabezado;

encabezado = document.getElementById('encabezado');

//Acceder al texto del elemento
// encabezado = encabezado.textContent;

//O también con:
// encabezado = encabezado.innerText;


/**
 * 
 * Cambiar los estilos por JavaScript
 * 
 */

//Cambiar el background del elemento
encabezado.style.background = '#333';

//Cambiar el color del elemento
encabezado.style.color = '#fff';

//Cambiar el padding del elemento
encabezado.style.padding = '20px';

//Cambiar el text del elemento
encabezado.textContent = 'Los mejores Cursos';

//O también con innerText
// encabezado.innerText = 'Los mejores Cursos';

console.log(encabezado);