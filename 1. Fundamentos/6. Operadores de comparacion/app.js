/**
 * *******************************
 * Operadores de comparación en JS
 * *******************************
 * 
 * @see https://www.w3schools.com/js/js_comparisons.asp
 */

const numero1 = 20;
const numero2 = 50;
const numero3 = '20';

// Operador mayor que
console.log(numero1 > numero2); //Retorna false

// Operador menor que
console.log(numero1 < numero2); //Retorna true

// Comparador de igual
console.log(numero1 == numero3); // Retorna true
console.log(numero1 === numero3); // Retorna false, dado que con el '===' compara hasta los tipos de datos

//Diferentes
console.log(2 != 3); //Retorna true

// Comprar cadenas de texto
console.log('Hola' == ' Hola'); //Retorna false
console.log('a' > 'b'); //Retorna false

//Comprar null y undefainded
console.log(null == undefined); //Retorna true
console.log(null === undefined); //Retorna false