//Crear variables
// Prompt: Ventana emergente para capturar datos del usuario
let nombre = prompt('Cual es tu nombre?');
let edad = prompt('Cual es tu edad?');

//Inyectamos los datos obtenidos por el usuario en el div con id app alterando el innerHTML
//Usando la ventana global document
document.getElementById('app').innerHTML = `Bienvenido ${nombre} de ${edad} años`;