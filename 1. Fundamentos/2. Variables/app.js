//Hay 3 formas de crear variables en JS: var, let, const

/**
 * 
 * @see https://www.w3schools.com/js/js_variables.asp
 * 
 * *******************
 * Declaración con var
 * *******************
 */

//Se declara la variable y se le asigna un valor

//var nombre = 'Juan';

//o se puede inicializar sin valor:
var nombre;

//Se sobreescribe la variable con otro valor, se puede hacer volviendola a declarar:
//var nombre = 'John';

//O solo asignando otro valor
nombre = 'John';

console.log(nombre);

//Se pueden inicializar varias variables seguidas

var carrito = 'Libro',
  carrito1 = 'Libro2';

console.log(carrito);
console.log(carrito1);

//Nombrar variables

var primerNombre = 'Juan'; //Camel case
var primer_nombre = 'John'; //Underscore o Snake case
var PrimerNombre = 'John'; //Pascal case


/**
 * *******************
 * Declaración con let
 * *******************
 */

let nombre1;
let nombre2 = 'Juan';

//A diferencia de var, con let no podemos volver a declarar una variable con el mismo nombre
// para alterar su valor ya que ocaciona un error, sin embar se puede reasignar un valor como con var

nombre1 = 'John';
let producto = 'Libro';

console.log(nombre);

/**
 * *******************
 * Declaración con const
 * *******************
 */

 //Las constantes deben inicializarse siempre
const producto1 = 'Libro';

console.log(producto);

/**
 * 
 * ***************************
 * Más acerca de las variables
 * ***************************
 * 
 */

//Concatenar cadenas de texto en JavaScript

let mensaje;

mensaje = 'JAVA' + 'SCRIPT';

console.log(mensaje);

//Concatenar variables en una sola
let aprendiendo = 'Aprendiendo',
  tecnologia = 'JavaScript';

//Es la forma antigua de hacer la concatenación
console.log(aprendiendo + ' ' + tecnologia);

//Nueva forma con Template Literals
console.log(`${aprendiendo} ${tecnologia}`);