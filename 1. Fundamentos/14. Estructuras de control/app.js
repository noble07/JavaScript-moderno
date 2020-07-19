/**
 * ************************************
 * Estructuras de control en JavaScript
 * ************************************
 * 
 * @see https://www.w3schools.com/js/js_if_else.asp
 */

/**
 * 
 * If y else en JavaScript
 * 
 */
const edad = 18;


//Mayores de 18 pueden entrar al sitio
if(edad > 18){
  console.log('Si puedes entrar al sitio');
}else{
  console.log('No puedes entrar al sitio');
}

//Mayores o iguales de 18 pueden entrar al sitio
if(edad >= 18){
  console.log('Si puedes entrar al sitio');
}else{
  console.log('No puedes entrar al sitio');
}

//Iguales de 18 pueden entrar al sitio
if(edad === 18){
  console.log('Si puedes entrar al sitio');
}else{
  console.log('No puedes entrar al sitio');
}

//Diferentes de 18 pueden entrar al sitio
if(edad != 18){
  console.log('Si puedes entrar al sitio');
}else{
  console.log('No puedes entrar al sitio');
}

//Comprobar que una variable tiene un valor
let puntaje = 1000;

if (puntaje) {
  console.log(`El puntaje fue de ${puntaje}`);
}else{
  console.log(`No hay puntaje`);
}

let efectivo = 500,
  totalCarrito = 300;

if (efectivo > totalCarrito) {
  console.log('Pago correcto');
} else {
  console.log('Fondos Insuficientes');
}

/**
 * *********************
 * else if en JavaScript
 * *********************
 */

let hora = 20;

//Operadores logicos, And (&&) Or (||)
if(hora > 0 && hora <= 10){
  console.log('Buenos Días!');
} else if(hora > 10 && hora <= 18) {
  console.log('Buenos Tardes');
} else if (hora > 18 && hora <= 24) {
  console.log('Buenas Noches');
} else {
  console.log('Hora no válida');
}

efectivo = 300;
totalCarrito = 500;

let credito = 300, disponible = efectivo + credito;

if (totalCarrito < efectivo || totalCarrito < credito || totalCarrito < disponible) {
  console.log('Puedo Pagar');
} else {
  console.log('No Puedo Pagar');
}

// Ternario

const logeado = true;

console.log( logeado === true ? 'El usuario esta logeado' : 'El usuario no ha ingresado' );

/**
 * 
 * Switch
 * 
 */

const metodoPago = 'efectivo';

switch (metodoPago) {
  case 'efectivo':
    console.log(`El usuario pago con ${metodoPago}`);
    break;
  case 'cheque':
    console.log(`El usuario pago con ${metodoPago}`);
    break;
  case 'tarjeta':
    console.log(`El usuario pago con ${metodoPago}`);
    break;

  default:
    console.log('Metodo de pago no soportado');
    break;
}

let mes = 0;

switch (new Date().getMonth()) {
  case 0:
    mes = 'Enero';
    break;
  case 1:
    mes = 'Febrero';
    break;
  case 2:
    mes = 'Marzo';
    break;
  case 3:
    mes = 'Abril';
    break;
  case 4:
    mes = 'Mayo';
    break;
  case 5:
    mes = 'Junio';
    break;
  case 6:
    mes = 'Julio';
    break;
  case 7:
    mes = 'Agosto';
    break;
  case 8:
    mes = 'Septiembre';
    break;
  case 9:
    mes = 'Octubre';
    break;
  case 10:
    mes = 'Noviembre';
    break;
  case 11:
    mes = 'Diciembre';
    break;

  default:
    break;
}

console.log(`Este mes es ${mes}`);