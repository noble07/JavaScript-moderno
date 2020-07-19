/**
 * *************************************
 * Manejo de errores con Try Catch en JS
 * *************************************
 * 
 * @see https://devdocs.io/javascript/statements/try...catch
 */

function obtenerClientes() {
  console.log('Descargando...');

  setTimeout(function() {
    console.log('Completo');
  }, 3000);
}

//Función que no exite

try {
  algo(); //Error
} catch (error) {
  console.log(error);
} finally {
  console.log('No importa, ejecuta de todos modos');
}


obtenerClientes();