/* Snack2
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo.
 */

const userNumber = parseInt(prompt("inserisci un numero"));

switch (userNumber % 2) {
  case 0:
    console.log(userNumber);
    break;

  default:
    console.log(userNumber + 1);
    break;
}
