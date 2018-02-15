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
