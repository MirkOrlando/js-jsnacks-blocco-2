/* Snack5 (Bonus)
Crea due array che hanno un numero di elementi diversi. 
Aggiungi elementi all’array che ha meno elementi 
fino a quando ne avrà tanti quanti l’altro.
*/

const array1 = ["lamponi", "latte", "pasta", "olio", "sale", "libro"];
const array2 = ["uova", "insalata", "saponetta"];

while (array2.length < array1.length) {
  const newElement = "elementoExtra";
  array2.push(newElement);
}

console.log(array2.length, array1.length);
