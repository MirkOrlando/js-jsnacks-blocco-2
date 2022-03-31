/* Snack2
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo.
 */

let i = 0;

while (i < 1) {
  const userNumber = parseInt(prompt("inserisci un numero"));

  switch (true) {
    case isNaN(userNumber):
      alert("Non hai inserito un valore numerico");
      break;

    default:
      switch (0) {
        case userNumber % 2:
          console.log(userNumber);
          break;

        default:
          console.log(userNumber + 1);
          break;
      }
      break;
  }
  i++;
}
