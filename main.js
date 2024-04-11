//1.  Ejercicios destructuring
//Dado el siguiente objeto:

const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];


//Extrae la empleada Ana con todos sus datos personales:
//{"name":"Ana", "email":"Ana@gmail.com"}
//console.log(empleados[2]) --> Obtendría email sin extraer

const [,name] = empleados
//console.log(name);

//Extrae el email del empleado Luis --> Luis@gmail.com.

const [Luis] = empleados
const {email} = Luis
console.log(email);


//Dado el siguiente objeto:

const pokemon = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}


//Cambia el nombre de la propiedad “name” por “nombre
//Extrae el nombre del Pokemon

const { name:nombre, type, ability, stats, moves, } = pokemon

console.log(nombre);


//Extrae el tipo de Pokemon que es:

console.log(type);


//Extrae el movimiento “Tackle”

const [,movimiento] = moves;
console.log(movimiento);


//2. Ejercicios spread/rest
//Mergea el siguiente pokémon con el Pokemon del ejercicio anterior:

const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
}



const pokesUnidos = {...pikachu,...pokemon}

console.log(pokesUnidos);



//Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y
// devuelva la suma de todos los demás argumentos.
//sumEveryOther(6, 8, 2, 3, 1); //20
//sumEveryOther(11, 3, 12); //26 


  function sumEveryOther(a, b, c, d, e) {
    return a + b + c + d + e;
  }


  const numbers = [6, 8, 2, 3, 1];
  const sumEveryOther2 =  [11, 3, 12];
  const TodosNumeros = [...numbers,...sumEveryOther2];

  //const result = sum(...numbers);


 //Sumamos primera Array:
  console.log(sumEveryOther(...numbers));

  const suma = numbers.reduce ((a,b) => a+b)
 console.log(suma);


//Junto todos los números en una misma array:

  console.log(TodosNumeros);

//---------------------------------------------------------

  console.log(sumEveryOther(6, 8, 2, 3, 1)); //20
 // console.log(sumEveryOther2(11, 3, 12));      // 26

 


/*function sumEveryOther(...args) {
  return args.slice(1).reduce((total, num) => total + num, 0);
}*/



 
//Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos
// (incluyendo números y strings y retorne la suma solo de los números.

  //addOnlyNums(1, 'perro', 2, 4); //7
  
  



//Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y 
//devuelva un número que indique cuántos argumentos ha recibido.

countTheArgs('gato', 'perro'); //2
countTheArgs('gato', 'perro', 'pollo', 'oso'); //4

function countTheArgs(...animales) {
  return animales.length;
}

console.log(countTheArgs('gato', 'perro')); 
console.log(countTheArgs('gato', 'perro', 'pollo', 'oso')); 


//Escribe una función llamada combineTwoArrays que reciba dos array cómo
//argumentos y devuelva solo un array que combine los dos (usando spread operator).

function combineTwoArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinarArray = combineTwoArrays(array1, array2);
console.log(combinarArray); 


