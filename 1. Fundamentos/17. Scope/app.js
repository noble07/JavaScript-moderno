/**
 * *******************
 * Scope en JavaScript
 * *******************
 * 
 * @see https://www.w3schools.com/js/js_scope.asp
 * 
 */

//Variables con scope global
var a = 'a';
let b = 'b';
const c = 'c';

//Scope dentro de la función
function funcionScope() {
  var a = 'A';
  let b = 'B';
  const c = 'C';
  console.log('FUNCION: ' + a,b,c);
}
funcionScope();

// Scope de bloque {}
if (true) {
  var a = 'AA';
  let b = 'BB';
  const c = 'CC';
  console.log('BLOQUE: ' + a,b,c);
}

// Scope en un for
for (var a = 0; a < 10; a++) {
  console.log(a);
}

for (let b = 0; b < 10; b++) {
  console.log(b);
}

console.log('GLOBALES '+ a,b,c);