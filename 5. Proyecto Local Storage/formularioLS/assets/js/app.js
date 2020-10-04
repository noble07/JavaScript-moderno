/**
 * 
 * **************************
 * Proyecto con Local Storage
 * **************************
 * 
 */

//Variables
const listaTweets = document.getElementById('lista-tweets');

//Event listener

eventListeners();

function eventListeners() {
  //Cuando se envia el formulario
  document.getElementById('formulario').addEventListener('submit', agregarTweet);

  //Cuando hacen clic en eliminar tweet
  listaTweets.addEventListener('click', borrarTweet);

  //Contenido cargado
  document.addEventListener('DOMContentLoaded', mostrarTweets);
}

/**
 * 
 * Funciones
 * 
 */

//Añadir tweet del formulario
function agregarTweet(e) {
  e.preventDefault();

  //Leer el valor del textarea
  const tweet = document.getElementById('tweet').value;

  //Crea el elemento con la info del Tweet en el DOM
  crearElementoTweet(tweet);

  //Añadir al Local Storage
  agregarTweetLocalStorage(tweet);

  document.getElementById('formulario').reset();
}

//Agrega tweet al Local Storage
function agregarTweetLocalStorage(tweet) {
  let tweets;

  tweets = obtenerTweetsLocalStorage();

  // Añadir el nuevo Tweet
  tweets.push(tweet)

  // Convertir de string a arreglo para Local Storage
  localStorage.setItem('tweets', JSON.stringify(tweets));

}

// Comprobar que haya elementos en localStorage, retorna un arreglo
function obtenerTweetsLocalStorage() {
  let tweets;

  //Revisar los valores del Loca Storage
  if (localStorage.getItem('tweets') === null) {
    tweets = [];
  }else{
    tweets = JSON.parse(localStorage.getItem('tweets'));
  }

  return tweets;
}

//Muestra los tweets en el DOM del LocalStorage
function mostrarTweets() {
  let tweets;

  //Obtiene los Tweets del Local Storage
  tweets = obtenerTweetsLocalStorage();

  tweets.forEach(tweet => {
    //Crea el elemento con la info del Tweet en el DOM
    crearElementoTweet(tweet);
  });
}


//Borrar tweet del DOM
function borrarTweet(e) {
  e.preventDefault();

  if (e.target && e.target.className === 'borrar-tweet') {
    e.target.parentElement.remove();
    borrarTweetLocalStorage(e.target.parentElement.innerText);
  }

}

//Crea el elemento li del tweet
function crearElementoTweet(tweet) {
  //Crear botón de eliminar
  const btnBorrar = document.createElement('a');
  btnBorrar.classList.add('borrar-tweet');
  btnBorrar.appendChild(document.createTextNode('X'));

  //Crear elemento y añadirle el contenido a la lista
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(tweet));

  //Añade el botón de borrar al tweet
  li.appendChild(btnBorrar);

  //Añade el tweet a la lista
  listaTweets.appendChild(li);
}

//Eliminar Tweet del Local Storage
function borrarTweetLocalStorage(tweet) {

  let tweets, tweetBorrar;

  //Elimina la X del Tweet
  tweetBorrar = tweet.slice(0, -1);

  //Obtiene todos los Tweets del Local Storage
  tweets = obtenerTweetsLocalStorage();

  tweets.forEach((tweet, index) => {
    if (tweet === tweetBorrar) {
      tweets.splice(index, 1);
    }
  });

  localStorage.setItem('tweets', JSON.stringify(tweets));

}