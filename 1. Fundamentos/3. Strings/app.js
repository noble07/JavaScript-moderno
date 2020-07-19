/**
 * 
 * ****************************
 * Funciones de cadeas de texto
 * ****************************
 * 
 * @see https://www.w3schools.com/js/js_string_methods.asp
 * 
 */

let aprendiendo = 'Aprendiendo',
  tecnologia = 'JavaScript',
  mensaje = 'Aprendiendo JavaScript, CSS, HTML para ser Frontend';

//La propiedad length retorna la cantidad de caracteres de una cadena
console.log(tecnologia.length);

//Se puede concatenar un cadena con el metodo concat()
console.log(tecnologia.concat(' ', 'Es genial'));

//Para transformar el texto a todo en mayusculas se utiliza el metodo toUpperCase()
//O en minuscula con toLowerCase()
console.log(tecnologia.toUpperCase());
console.log(tecnologia.toLowerCase());

//indexOf: devuelve la posición en la cadena de la palabra que le pases por parametro
//Si no existe el texto buscado retorna -1

//Nota: La función es Case Sentitive
console.log(mensaje.indexOf('JavaScript'));

//substring: Retorna una porción de toda la cadena encontrada entre las posiciones que se envian como parametro (Inicial y Final)
console.log(mensaje.substring(0, 11)); //Retorna solo "Aprendiendo"

//También se puede hacer con el metodo slice() de la misma manera
console.log(mensaje.slice(0, 11)); //Retorna solo "Aprendiendo"

//La única diferencia entre estos dos es que slice admite indices negativos para empezar de atrás hacia adelante
console.log(mensaje.slice(-12 -4)); //Retorna "ara ser Frontend"

//split: Transforma un texto en un array con un valor de separación
console.log(mensaje.split(','));

//replace: Buscan dentro de la cadena una palabra y la reemplaza por otra
console.log(mensaje.replace('CSS', 'PHP'));

//includes: retorna true si la palabra buscada existe en la cadena, caso contrario retorna false
//Es parecido al indexOf solo que retarno un bool en vez de la posición en la cadena
console.log(mensaje.includes('CSS'));

//Repite la cadena de texto n numero de veces
console.log(tecnologia.repeat(10));