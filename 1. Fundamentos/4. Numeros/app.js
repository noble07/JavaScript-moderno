/**
 * 
 * *********************
 * Numeros en JavaScript
 * *********************
 * 
 * @see https://www.w3schools.com/js/js_numbers.asp
 * 
 */

 const numero1 = 30,
  numero2 = 20,
  numero3 = 20.20,
  numero4 = .1020,
  numero5 = -3;

let resultado;

//Suma
resultado = numero1 + numero2;

//Resta
resultado = numero1 - numero2;

//Multiplicar
resultado = numero1 * numero2;

//Divisiones
resultado = numero1 / numero2;

//Modulo
resultado = numero1 % numero2;

/**
 * ****************************
 * Utilización del objeto Math
 * ****************************
 * 
 * @see https://www.w3schools.com/js/js_math.asp
 * 
 */

//Pi
resultado = Math.PI;

//Redondeo
resultado = Math.round(2.4);

//Controlar el redondeo: ceil y floor
resultado = Math.ceil(2.1); //Redondea el valor a numero entero mayor más proximo

//Controlar el redondeo: ceil y floor
resultado = Math.floor(2.9); //Redondea el valor a numero entero menor más proximo

//Raiz cuadrada
resultado = Math.sqrt(144);

//Numero absoluto
resultado = Math.abs(numero5);

//Potencia
resultado = Math.pow(8, 3);

//Mínimo
resultado = Math.min(3, 6, 5, 1, 9, 7, 8);

//Máximo
resultado = Math.max(3, 6, 5, 1, 9, 7, 8);


/**
 * 
 * *********
 * Aleatorio
 * *********
 * 
 * @see https://www.w3schools.com/js/js_random.asp
 */

resultado = Math.floor(Math.random() * 101); //Nuemro entero al azar del 0 a 100

let add = 10;

//Incremento
// resultado = add++;

//O también se puede hacer de esta manera
resultado = ++add; //De esta manera asigna el valor antes de imprimirlo

//Decremento
// resultado = add--;

//O también se puede hacer de esta manera
resultado = --add; //De esta manera asigna el valor antes de imprimirlo

//También se peden agregar o restar valores de esta forma

add += 5;
resultado = add;

add -= 3;
resultado = add;

console.log(resultado);