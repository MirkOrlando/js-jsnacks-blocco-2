/* SNACK 1 
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
 */

/* programma con ciclo for */
/* const numbersList = [];
let sum = 0;

for (let i = 0; i < 5; i++) {
  userNumber = prompt("inserisci un numero");
  numbersList.push(userNumber);
  numb = parseInt(numbersList[i]);
  sum += numb;
  console.log(numbersList[i]);
}

console.log(sum); */

/* programma con ciclo while */
let sum = 0;
let i = 0;

while (i < 5) {
  userNumber = parseInt(prompt("inserisci un numero"));
  console.log(userNumber);
  if (!isNaN(userNumber)) {
    sum += userNumber;

    i++;
  }
}

console.log(sum);
