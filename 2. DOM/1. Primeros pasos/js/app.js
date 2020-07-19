/**
 * ***************************************
 * Primeros pasos con el DOM de JavaScript
 * ***************************************
 * 
 * @see https://www.w3schools.com/JSREF/dom_obj_document.asp
 * 
 */

// Eliminar de Local Storage
localStorage.clear();

let elemento;

//Devuelve todo el objeto document
elemento = document;

//Retorna todo el HTML pero en una HTMLAllCollection
elemento = document.all;

//Se selecciona solo un elemento de la HTMLAllCollection
elemento = document.all[10];

//Seleccionar una parte del documento
elemento = document.head;
elemento = document.body;

//Retornar la URL del sitio
elemento = document.domain;
elemento = document.URL;

//Retornar el Character Set
elemento = document.characterSet;

//Retornar todos los formularios
elemento = document.forms; //Retornar una HTMLCollection
elemento = document.forms[0]; //Se accede al elemento en la posición cero de la colección
elemento = document.forms[0].id; //Se accede al id del form
elemento = document.forms[0].className; //Se accede a la clase del form
elemento = document.forms[0].classList; //Se accede a todas las clase del form || Retorna un DOMTokenList
elemento = document.forms[0].classList[0]; //Se accede al primer elemento del DOMTokenList

//Retornar un HTMLCollection con las imagenes
elemento = document.images;
elemento = document.images[2];
elemento = document.images[2].src; //Retornar el absolute path
elemento = document.images[2].getAttribute('src'); //Retornar el relative path

//Scripts de JavaScript
elemento = document.scripts;

//Ejercicio practico
elemento = document.images;

let imagenes = document.images;

let imagenesArr = Array.from(imagenes);

imagenesArr.forEach(imagen => {console.log(imagen)});

console.log(imagenesArr);