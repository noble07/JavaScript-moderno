/**
 * ************************
 * Iteradores en JavaScript
 * ************************
 * 
 */

/**
 * 
 * Iterador for
 * 
 * @see https://www.w3schools.com/js/js_loop_for.asp
 * 
 */

for (let i = 0; i < 10; i++) {
  
  if (i === 5) {
    console.log(`Voy en el 5`);
    continue; //Termina la iteranción del bucle actual, a diferencia del break, continua con la otra iteración
    //Hasta acá se ejecuta el codigo si pasa por la condición
  }

  console.log(`Numero ${i}`);
}

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(`El numero ${i} es Par`);
  } else {
    console.log(`El numero ${i} es Impar`);
  }
}

const arregloProductos = ['Camisa', 'Boleto', 'Guitarra', 'Disco'];

for (let i = 0; i < arregloProductos.length; i++) {
  console.log(`Tu producto ${arregloProductos[i]} fue agregado`);
  
}

/**
 * 
 * while y do while
 * 
 * @see https://www.w3schools.com/js/js_loop_while.asp
 * 
 */

let i = 0;

while (i < 10) {
  if (i === 5) {
    console.log('Cinco');
    i++;
    continue;
  }
  i++;
  console.log(`Numero: ${i}`);
}

const musica = ['Cancion 1', 'Cancion 2', 'Cancion 3'];

i = 0;

let as;

while (i < musica.length) {
  console.log(`Reproduciendo la canción: ${musica[i]}`);
  i++;
}

//Do while

i = 100000;

do {
  console.log(`Numeros: ${i}`);
  i++;
} while (i < 10);

/**
 * 
 * foreach en JavaScript
 * 
 * @see https://devdocs.io/javascript/global_objects/array/foreach
 * 
 */

//Recorrer arreglo
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Aprender JavaScript'];

//for
for (let i = 0; i < pendientes.length; i++) {
  console.log(pendientes[i]);
}

//foreach
pendientes.forEach((pendiente, index) => {
  console.log(`${index}: ${pendiente}`);
});

console.log(pendientes);

/**
 * 
 * map
 * 
 * @see https://devdocs.io/javascript/global_objects/array/map
 * 
 */

//Map para recorrer un arreglo de objetos
const carrito = [
  {id: 1, producto: 'Libro'},
  {id: 2, producto: 'Camisa'},
  {id: 3, producto: 'Guitarra'},
  {id: 4, producto: 'Disco'}
];

const nombreProducto = carrito.map(carrito => {
  return carrito.producto;
});

console.log(nombreProducto);

/**
 * 
 * Imprimir objeto con for in
 * 
 * @see https://devdocs.io/javascript/statements/for...in
 * 
 */

const automovil = {
  modelo: 'Camaro',
  motor: 6.1,
  anio: 1969,
  marca: 'Chevrolet'
};

for (const auto in automovil) {
  console.log(`${auto}: ${automovil[auto]}`);
}

/**
 * ****************************
 * Iteradores disponibles en JS
 * ****************************
 * 
 * @see https://alligator.io/js/for-of-for-in-loops/
 * 
 */

const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
/**
 * 
 * Aprender más sobre Set
 * 
 * @see https://devdocs.io/javascript/global_objects/set
 * 
 */
const ordenes = new Set([123, 231, 131, 102]);

/**
 * 
 * Aprender más sobre Map
 * 
 * @see https://devdocs.io/javascript/global_objects/map
 * 
 */
const datos = new Map();
datos.set('nombre', 'juan');
datos.set('profesion', 'desarrollador web');

/**
 * 
 * Entries iterador
 * 
 */

//Entries a las ciudades
for (const entradas of ciudades.entries()) {
  console.log(entradas);
}

//Entries para las ordenes, los objetos tipo Set devuelve objeto iterador conformado por ['value', 'value']
for (const entradas of ordenes.entries()) {
  console.log(entradas);
}

//Entries para el map
for (const entradas of datos.entries()) {
  console.log(entradas);
}

/**
 * 
 * Values iterador
 * 
 */

//Values a las ciudades, por defecto el array en for..of devuelve los valores
for (const entradas of ciudades) {
  console.log(entradas);
}

//Values para las ordenes
for (const entradas of ordenes.values()) {
  console.log(entradas);
}

//Values para el map
for (const entradas of datos.values()) {
  console.log(entradas);
}

/**
 * 
 * Keys iterador
 * 
 */

//Values a las ciudades
for (const entradas of ciudades.keys()) {
  console.log(entradas);
}

//Values para las ordenes
//El set al no tener llaves, esto devuelve los mismo que el valor
for (const entradas of ordenes.keys()) {
  console.log(entradas);
}

//Values para el map
for (const entradas of datos.keys()) {
  console.log(entradas);
}

/**
 * 
 * Default
 * 
 */
//Es cuando no le pasas que tipo de iterador quiero

//Deafault de las ciudades, devuelve los values
for (const entradas of ciudades) {
  console.log(entradas);
}

//Deafault para las ordenes, devuelve los values
for (const entradas of ordenes) {
  console.log(entradas);
}

//Default para el map, devuelve el mismo que .entrie()
for (const entradas of datos) {
  console.log(entradas);
}

/**
 * **********************
 * Iteradores para String
 * **********************
 */

const mensaje = 'Aprendiendo JavaScript';

for (const letra of mensaje) {
  console.log(letra);
}

/**
 * ****************
 * Iterar node list
 * ****************
 */

//Se iteran todos los enlaces que estén en una anchor de HTML
const enlaces = document.getElementsByTagName('a');

for (const enlace of enlaces) {
  console.log(enlace.href);
}