/* Snack3
Generatore di “nomi cognomi” casuali: 
il Grande Gatsby ha una lista di nomi e una lista di cognomi, 
e da queste vuole generare una falsa lista di invitati con nome e cognome.
 */

const namesList = [
  "Mario",
  "Fabio",
  "Alice",
  "Sabrina",
  "Lorenzo",
  "Francesca",
];
const surnamesList = [
  "Rossi",
  "Ronchetti",
  "Procopi",
  "Piscitelli",
  "Ibba",
  "D'Alessandro",
];
const guestsList = [];

for (let i = 0; i < namesList.length; i++) {
  const guest = `${namesList[i]} ${surnamesList[i]}`;
  guestsList.push(guest);
}

console.log(guestsList);
