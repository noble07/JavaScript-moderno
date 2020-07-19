/**
 * ******************************
 * Convertir tipos de datos en JS
 * ******************************
 * 
 * @see https://www.w3schools.com/js/js_type_conversion.asp
 */

 /**
  * 
  * Convertir de string a number
  * 
  */
 const numero1 = '50',
  numero2 = 10,
  numero3 = 'tres';

// Para convertir a un tipo numero se utiliza el metodo Number() o con parseInt()
console.log(Number(numero1) + numero2);

let dato;
dato = Number("20"); //Retorna 20
dato = Number("20.123123"); //Retorna 20.123123
dato = Number(true); //Retorna 1
dato = Number(false); //Retorna 0
dato = Number(null); //Retorna 0
dato = Number(undefined); //Retorna NaN (Not a Number)
dato = Number("Hola Mundo"); //Retorna NaN (Not a Number)
dato = Number([1,2,3,4,5]); //Retorna NaN (Not a Number)

// Para convertir a tipo numero también exiten las funciones parseFloat y parseInt
dato = parseInt('100');
dato = parseFloat('100,12034');

// toFixed: elimina los decimales del numero o le podemos especificar la cantidad de decimales que queremos
//Nota: solo funciona en variables tipo number

dato = 12312314134.23423729834729834;

console.log(dato.toFixed()); //Retorna 12312314134
console.log(dato.toFixed(3)); //Retorna 12312314134.234
console.log(typeof dato);

/**
 * 
 * Convertir de number a string
 * 
 */

let codigoPostal;

codigoPostal = 90210;

codigoPostal = String(codigoPostal);

// console.log(codigoPostal.length);

let dato1;

dato1 = 4+4;

// console.log(dato1.toString().length);

// Boolean
dato1 = true;

// De arreglo a string
dato1 = [1,2,3];

dato1 = String(dato1);

//toString()
dato1 = 20;
dato1 = true;
dato1 = [1,2,3,4];
dato1 = dato1.toString();

console.log(dato1);
console.log(dato1.length);
console.log(typeof dato1);