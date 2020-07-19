/**
 * *********************
 * Objetos en JavaScript
 * *********************
 * 
 * @see https://www.w3schools.com/js/js_objects.asp
 */

//Crear objetos en JavaScript

const persona = {
  nombre: 'Miguel',
  apellido: 'Martinez',
  profesion: 'Diseñador gráfico',
  corre: 'correo@correo.com',
  edad: 20,
  musica: ['Trance', 'Rock', 'Grunge'],
  hogar: {
    ciudad: 'Medellín',
    pais: 'Colombia'
  },
  nacimiento: function(){
    return new Date().getFullYear() - this.edad;
  }
};

const persona2 = {
  nombre: 'Miguel',
  apellido: 'Martinez',
  profesion: 'Diseñador gráfico',
  corre: 'correo@correo.com',
  edad: 30,
  musica: ['Trance', 'Rock', 'Grunge'],
  hogar: {
    ciudad: 'Medellín',
    pais: 'Colombia'
  },
  nacimiento: function(){
    return new Date().getFullYear() - this.edad;
  }
};

//Así se acceden a las propiedades de los objetos
console.log(persona.hogar.ciudad);

//También se puede acceder de esta manera
console.log(persona['hogar']['pais']);

//Acceder a una función dentro de un objeto
console.log(persona.nacimiento());
console.log(persona2.nacimiento());

/**
 * *******************
 * Arreglos de objetos
 * *******************
 */

const autos = [
  {modelo: 'Mustang', motor: 6.0},
  {modelo: 'Camaro', motor: 6.1},
  {modelo: 'Challenger', motor: 6.3}
];

//Iterar un aray
for (let i = 0; i < autos.length; i++) {
  console.log(`${autos[i].modelo} ${autos[i].motor}`);
}

console.log(autos[0].modelo);

//Al igual que los arrays declarados constante un objeto no puede ser reasignado directamente ya que genera error
//Sin embargo sus valores si se pueden modificar

autos[0].modelo = 'Audi';

console.log(autos);