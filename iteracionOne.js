//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme//

const showme = document.querySelector(".showme");
console.log(showme);

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado//

const pilladoP = document.querySelector('#pillado');
console.log(pilladoP)

//1.3 Usa querySelector para mostrar por consola todos los p//

const parraf= document.querySelectorAll("p");
console.log(parraf)


//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon//

const pokemonClass = document.querySelectorAll(".pokemon");
console.log(pokemonClass);

//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".//

const testMe = document.querySelectorAll('[data-function="testMe"]');
console.log(testMe)

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".//

const testMe = document.querySelectorAll('[data-function="testMe"]');
console.log(testMe[2])