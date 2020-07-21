/**
 * ************************************
 * Modificar elementos desde JavaScript
 * ************************************
 * 
 * @see https://developer.mozilla.org/es/docs/Web/API/Node/replaceChild
 * 
 */

const nuevoEncabezado = document.createElement('h2');

//Agregar un id
nuevoEncabezado.id = 'Encabezado';

//Agregar nuevo texto
nuevoEncabezado.appendChild(document.createTextNode('Los Mejores Cursos'));

//Elemento anterior (Sera reemplazado)
const anterior = document.querySelector('#encabezado');

//Elemento padre
const elPadre = document.querySelector('#lista-cursos');

//Reemplazar
elPadre.replaceChild(nuevoEncabezado, anterior);