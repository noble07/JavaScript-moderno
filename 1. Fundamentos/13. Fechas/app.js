/**
 * ********************
 * Fechas en JavaScript
 * ********************
 * 
 * @see https://www.w3schools.com/JSREF/jsref_obj_date.asp
 */

//En JavaScript existe un objeto llamado Date()
const diaHoy = new Date();

//Fecha en especifico Mes, día y Año
let navidad2017 = new Date('12-25-2017');

console.log(diaHoy);

/**
 * 
 * Metodos
 * 
 */

let valor;

// Obetener el mes (Empieza desde 0 como un Array)
valor = diaHoy.getMonth();

// Obetener el día
valor = diaHoy.getDate();
valor = diaHoy.getDay(); //Retorna el día de la semana

// Obetener el año
valor = diaHoy.getFullYear();

// Obetener minutos
valor = diaHoy.getMinutes();

// Obetener la hora
valor = diaHoy.getHours();

// Obtiene los milisegundos desde el año 1970
valor = diaHoy.getTime();

// Modificar el valor del objeto
diaHoy.setFullYear('2018');
valor = diaHoy.getFullYear();

console.log(valor);