/**
 * *********************************************
 * Seleccionar multiples elementos en JavaScript
 * *********************************************
 * 
 * @see https://www.w3schools.com/JSREF/dom_obj_all.asp
 * 
 */

//getElementsByClassName

let enlaces = document.getElementsByClassName('enlace');

//Se puede seleccionar un elemento de la colección de está manera
enlaces = enlaces[3];

//Css
enlaces.style.background = '#333';
enlaces.textContent = 'Nuevo enlace';

// console.log(enlaces);

//Combinar querySelector con getElementsByClassName
const listaEnlaces = document.querySelector('#principal').getElementsByClassName('enlace');

console.log(listaEnlaces);

//getElementsByTagName
const links = document.getElementsByTagName('a');

//Modificar css
/* links[18].style.color = 'red';
links[18].textContent = 'Nuevo enlace'; */
let enlaces1 = Array.from(links);

enlaces1.forEach(enlace => {
  console.log(enlace.textContent);
});

console.log(enlaces1);

/**
 * 
 * querySelectorAll
 * 
 */

/* const enlaces2 = document.querySelectorAll('#principal .enlace');

enlaces2[1].style.background = 'red';
enlaces2[1].textContent = 'Nuevo enlace';

console.log(enlaces2); */

const enlaces2 = document.querySelectorAll('#principal a:nth-child(odd)');

enlaces2.forEach(impares => {
  impares.style.background = 'red';
  impares.style.color = 'white';
});

console.log(enlaces2);