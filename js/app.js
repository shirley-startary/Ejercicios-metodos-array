//REGLAS:
//No puedes utilizar "loops" en ninguna de las funciones (for, while, do while)
//Utiliza los metodos para arreglos .map, .reduce, .filter, .forEach...

// Capitalize
/*Escribe una funcion capitalize que tome una palabra como string y retorne
 *el mismo string con todas sus letras en mayusculas
 * ejem: capitalize("whoop") --->  "WHOOP" */

var capitalize = function(str) {
  //Escribe tu codigo aqui
  // No puedes utilizar directamente sobre str toUpperCase

}

//Utiliza console.log() para visualizar el funcionamiento de tu codigo.
var outputCapitalize = capitalize("whoop")
console.log(outputCapitalize); //----> "WHOOP";


//swapCase
/*Ahora escribe una funcion llamada swapCase que tome una oración como string y
retorne el string alternando una palabra en mayusculas y otra en minusculas
ejem: swapCase('hey gurl, lets javascript together sometime') ---> "HEY gurl, LETS javascript TOGETHER sometime" */
//NOTA: Debes hacer uso de la funcion capitalize();

var swapCase = function(str) {
  // Escribe tu codigo aqui

}

var outputSwapCase = swapCase("hey gurl, lets javascript together sometime")
console.log(outputSwapCase); //---> "HEY gurl, LETS javascript TOGETHER sometime"


//ShiftLetter
/*Escribe una funcion ShiftLetter() que tome un string y retorna un string
codificado cambiando cada letra por la que siguiente del alfabeto*/
//Tips: Investiga sobre las funciones de JS  (String.fromCharCode() y String.charCodeAt())
// codigo ascii te puede ayudar para resolver este ejercicio

//ejem:  shiftLetters('hello') // ---> 'ifmmp'
//ejem:  shiftLetters('abcxyz') // ---> "bcdyz


var shiftLetters = function(str) {
  //Escribe tu codigo aqui.

}

var outputShiftLetters = shiftLetters('hello');
console.log(outputShiftLetters); // ---> 'ifmmp'

//Even numbers
//Manipula el siguiente array y devuelve un nuevo array que contenga solo a los números pares
// ejem. output --> [2, 4, 6, 8, 10]

var numberArray = [1,2,3,4,5,6,7,8,9,10];

//Reducer
/*Escribe una función reducer() que tome un arreglo de numeros y retorne un
arreglos de dos numeros, el primer numero es la suma de los numero pares y el
segundo numero la suma de los numeros impares*/
//ejem: reducer([1,2,3,4,5,6,7,8,9]) ---> [20, 25]

var reducer = function() {
  //Escribe tu codigo aqui.
}

var outputReducer = reducer([1,2,3,4,5,6,7,8,9]);
console.log(outputReducer); // ---> [ 20, 25 ]





//arrayt with strings 'javascript'
/*Manipula el siguiente array y devuelve un nuevo array que contenga los strings 'javascript',
  debes concatenar dos difrentes métodos para arrays.
  ejem. output --> ['javascript', 'javascript', 'javascript']
*/ 


var persons = [
  {id : 1, name : "John", tags : "javascript"}, 
  {id : 2, name : "Alice", tags : "javascript"}, 
  {id : 3, name : "Roger", tags : "java"},
  {id : 4, name : "Adam", tags : "javascript"},
  {id : 5, name : "Alex", tags : "java"}
];


//Total de edad en 'años perro' 
/*Considera la siguiente data. Nosotros tenmos un arreglo de objetos, cada objeto representa
  una mascota. Las mascotas tienen un nombre, una edad y un tipo.
  Instrucciones: 
  1. Selecciona solo a los perros.
  2. Transforma su edad en años perros (multiplica cada una por siete).
  3. Suma el resultado.
  
  ejem. output --> 84
*/

var data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
];


//Alphabetic order
//Manipula el siguiente array de frutas y ordenalo alfabeticamente
//ejem. output --> ['Apple', 'Banana', 'Kiwi', 'Orange'];

var fruits = ['Banana', 'Orange', 'Apple', 'Kiwi'];



