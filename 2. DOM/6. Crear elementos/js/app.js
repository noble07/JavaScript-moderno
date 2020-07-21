/**
 * ********************************
 * Crear elementos desde JavaScript
 * ********************************
 * 
 * @see https://developer.mozilla.org/es/docs/Web/API/Document/createElement
 * @see https://stackoverflow.com/questions/31643204/textnode-or-textcontent
 * 
 */

//Se crea el enlace
const enlace = document.createElement('a');

//Agregamos una clase
enlace.className = 'enlace';

//Añadir id
enlace.id = 'nuevo-id';

//Añadir atributo
enlace.setAttribute('href', '#');

//Añadir texto
enlace.textContent = 'Nuevo Enlace';
//Ó también de está manera
// enlace.appendChild(document.createTextNode('Nuevo Enlace'));

//Agregarlo al HTML
document.querySelector('#secundaria').appendChild(enlace);

console.log(enlace);