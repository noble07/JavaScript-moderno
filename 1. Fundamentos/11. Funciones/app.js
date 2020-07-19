/**
 * *********************
 * Funciones en JavaScript
 * *********************
 * 
 * @see https://devdocs.io/javascript-function/
 */

 //Function declaration
/* function saludar(){
  console.log('Hola Miguel');
}

saludar(); */

//Pasar parametros a la función
/* function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}

saludar('Alma');
saludar('Pablo');
saludar('Juan');

function sumar(a, b) {
  console.log(a+b);
}

sumar(1, 2);
sumar(3, 4); */

//Funciones que retornan un valor
function sumar(a, b) {
  return a + b;
}

let suma;

suma = sumar(1, 2);

console.log(suma);

//Declarar valores por defecto

/**
 * Forma vieja
 */
function saludarOld(nombre) {
  if (typeof nombre === 'undefined') {
    nombre = 'Visitante'
  }
  return `Hola ${nombre}`;
}

/**
 * Forma nueva
 */
function saludar(nombre = 'Visitante') {
  return `Hola ${nombre}`;
}

let saludo = saludar();

console.log(saludo);

/**
 * Function expression
 */
const suma1 = function(a = 3, b = 5) {
  return a + b;
}

console.log(suma1(1, 2));
console.log(suma1(5, 10));



/**
 * IIFE (Immediately Invoked Function Expression)
 * 
 * @see https://developer.mozilla.org/es/docs/Glossary/IIFE
 */
(function name(tecnolgia) {
  console.log(`Creando una IIFE en ${tecnolgia}`);
})('JavaScript');

//Metodos de propiedad
//Cuando se crea una función dentro de un objeto

const musica = {
  reproducir : function(id) {
    console.log(`Reproduciendo canción id ${id}`);
  },
  pausar: function(){
    console.log('Pausar música');
  }
};

//Los metodos también pueden guardarse / crearse fuera del objeto
musica.borrar = function(id) {
  console.log(`Borrando la canción con el ID: ${id}`);
};

musica.reproducir(30);
musica.pausar();
musica.borrar(2);

//Arrow functions
let nombre = (nombre = 'Vacio') => `Hola ${nombre}`;

console.log(nombre('Francisco'));