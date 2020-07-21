/**
 * ************************
 * Traversing en JavaScript
 * ************************
 * 
 * @see https://zellwk.com/blog/dom-traversals/
 * 
 */

 /**
  * 
  * Traversing del padre al hijo
  * 
  */
const navegacion = document.querySelector('#principal');

//Obtiene la colección de los nodos hijos del elemento, pero incluye los espacios en blanco del HTML como elementos text
console.log(navegacion.childNodes);

//Obtiene HTMLCollection de los hijos del elemento
console.log(navegacion.children);

//Accede al nombre del nodo (Etiqueta HTML)
console.log(navegacion.children[0].nodeName);

//Devuelve el tipo del nodo
/* 
  1 = Elementos
  2 = Atributos
  3 = Text node
  8 = Comentarios
  9 = Documentos
  10 = Doctype
*/
console.log(navegacion.children[0].nodeType);


//Cambiar el texto
console.log(navegacion.children[0].textContent = 'Nuevo Enlace');

/**
 * 
 * Más ejemplos
 * 
 */

const barra = document.querySelector('.barra');

// console.log(barra.children[0].children[0].children);

const cursos = document.querySelectorAll('.card');

//Devuelve el último hijo, puede devolver los espacios en el HTML como text
console.log(cursos[0].lastChild);

//Accede al último elemento hijo
console.log(cursos[0].lastElementChild);

//Accede al primer elemento hijo
console.log(cursos[0].firstElementChild);

//Devuelve la cantidad de elementos hijos
console.log(cursos[0].childElementCount);

/**
 * 
 * Traversing del hijo al padre
 * 
 */

const enlaces = document.querySelectorAll('.enlace');

//Se accede al elemento padre
console.log(enlaces[0].parentElement.parentElement.parentElement);

console.log(cursos[0].parentElement.parentElement.parentElement.children[0].textContent = 'Hola desde Traversing');

/**
 * 
 * Sibling
 * 
 */

//Accede al anterior elemento primo
console.log(enlaces[4].previousElementSibling.previousElementSibling);

//Accede al siguiente elemento primo
console.log(enlaces[0].nextElementSibling.nextElementSibling.parentElement.children[4]);