/**
 * ********************
 * Arrays en JavaScript
 * ********************
 * 
 * @see https://www.w3schools.com/js/js_arrays.asp
 */

// Creacion de array

const numeros = [10, 20, 30, 40, 50, 60];
// console.log(numeros);

// Arrays de Strings (Metodo alterno), por simplicidad, tiempo de ejecución y lectura es mejor utilizar el primer metodo de creación

const meses = new Array('Enero', 'Frebero', 'Marzo', 'Abril');
// console.log(meses);

// Array mezclado
const mezclado = ['Hola', 20, true, null, false, undefined];
// console.log(mezclado);

// Acceder a un dato de un array
console.log(meses[2]); // Muestra el dato en la posicio 2 del array

// Insertar datos a un array
meses[4] = 'Mayo';

console.log(meses);

/**
 * ***********************************
 * Metodos y Propiedades de los arrays
 * ***********************************
 * 
 * @see https://www.w3schools.com/js/js_array_methods.asp
 */

// Length: devuelve la cantidad de elementos del arreglo
console.log(meses.length);

//Array.isArray(): comprueba si la variable es un array
let nombre = 'Juan';
console.log(Array.isArray(meses)) // True
console.log(Array.isArray(nombre)) // False

//Insertar datos al final del array mediante una función
meses.push('Junio');

console.log(meses);

//Insertar datos al inicio del array mediante una función
meses.unshift('Mes 0');

console.log(meses);

//Buscar un elemento en el arreglo
console.log(meses.indexOf('Abril'));

//Eliminar el último elemento del arreglo
meses.pop();

console.log(meses);

//Eliminar el primer elemento del arreglo
meses.shift()

console.log(meses);

//Eliminar un elemento del arreglo
meses.splice(2, 1);

console.log(meses);

// Revertir elementos
meses.reverse();

console.log(meses);

//Unir dos arreglos
let arreglo1 = [1,2,3];
let arreglo2 = [9,8,7];

console.log(arreglo1.concat(arreglo2));

/**
 * ****************
 * Ordenar arreglos
 * ****************
 * 
 * @see https://www.w3schools.com/js/js_array_sort.asp
 */

const frutas = ['Platano', 'Manzana', 'Fresa', 'Naranja'];

//Ordenar un array de string en orden alfabético
frutas.sort();

console.log(frutas);

//Ordenar un array de numeros

arreglo1 = [3,5,676,23,456,21,4,9,15];

arreglo1.sort(function(a, b){return a-b}) //Se puede utilizar return b-a para ordenarlos descendente
//Se debe enviar esta función de comparación para que sort trabaje con numeros
//Ya que si no se envía toma los numeros como cadenas
//LEER DOCUMENTACIÓN PARA LA EXPLICACIÓN DE LA FUNCION DE COMPARACIÓN


console.log(arreglo1);

/**
 * 
 * Para iterar arreglos
 * @see https://www.w3schools.com/js/js_array_iteration.asp
 * 
 */

/**
 * ********************************
 * Constantes en arreglos y objetos
 * ********************************
 */

const numeros1 = [1,2,3];

// No se puede reasignar un arreglo completo cuando es constante, ya que produce error
// numeros1 = [4,5,6];

//Sin embargo se puede modificar un elemento del array
numeros1[0] = 5;

//Y también se pueden agregar elementos
numeros1.push(4);
numeros1.shift();


console.log(numeros1);