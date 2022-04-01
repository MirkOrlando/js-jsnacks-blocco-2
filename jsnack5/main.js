/* Snack5 (Bonus)
Crea due array che hanno un numero di elementi diversi. 
Aggiungi elementi all’array che ha meno elementi 
fino a quando ne avrà tanti quanti l’altro.
*/

/* creare due array con numeri casuali */
const array1 = ["lamponi", "latte", "pasta", "olio", "sale", "libro"];
const array2 = ["uova", "insalata", "saponetta"];

console.log(array2.length, array1.length);

if (array1.length < array2.length) {
  while (array1.length < array2.length) {
    const newElement = "elementoExtra";
    array1.push(newElement);
  }
} else if (array2.length < array1.length) {
  while (array2.length < array1.length) {
    const newElement = "elementoExtra";
    array2.push(newElement);
  }
} else {
  console.log("i due array hanno già la stessa lunghezza");
}

/* for (let i = array2.length; i < array1.length; i = array2.length) {
  const newElement = "elementoExtra";
  array2.push(newElement);
} */

console.log(array2.length, array1.length);
