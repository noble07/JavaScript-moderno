/**
 * ********************
 * Tipos de datos en JS
 * ********************
 * 
 * @see https://www.w3schools.com/js/js_datatypes.asp
 */

/**
 * 
 * Tipos primitivos
 * 
 */

let valor;

valor = 'Camilo'; //Retorna 'string'
valor = 20; //Retorna 'number'
valor = 20.20; //Retorna 'number'
valor = 30; //Retorna 'number'

// Booleanos
valor = true; //Retorna 'boolean'
valor = false; //Retorna 'boolean'

// Null
valor = null; //Retorna 'object'

// Symbols
valor = Symbol('Simbolo'); //Retorna 'symbol'

/**
 * 
 * Tipo de referencia
 * 
 */

// Array
valor = [1,2,3,4];

//Objeto
valor = {
  nombre: 'Juan',
  profesion: 'Desarrolador Web'
}

//Fecha
valor = new Date();

//Podemos usar el operador typeof para obtener el tipo del dato
console.log(typeof valor);