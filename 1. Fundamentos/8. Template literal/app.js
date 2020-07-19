/**
 * *****************
 * Template literals
 * *****************
 * 
 * @see https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/template_strings
 */

const producto1 = 'Pizza',
  precio1 = 30,
  producto2 = 'Hamburguesa',
  precio2 = 40;

let html;

//Forma vieja de crear un template

/* html = '<ul>'+
        '<li>Orden: '+ producto1 +'</li>'+
        '<li>Precio: '+ precio1 + '</li>'+
        '<li>Orden: '+ producto2 +'</li>'+
        '<li>Precio: '+ precio2 + '</li>'+
        '<li>Precio Total: '+ (precio1+precio2) + '</li>'+
        '</ul>';
 */

html = `
  <ul>
    <li>Orden: ${producto1}</li>
    <li>Precio: ${precio1}</li>
    <li>Orden: ${producto2}</li>
    <li>Precio: ${precio2}</li>
    <li>Total: ${total(precio1, precio2)}</li>
  </ul>`;

function total(precio1, precio2){
  return precio1+precio2;
}

console.log(html);

document.getElementById('app').innerHTML = html;