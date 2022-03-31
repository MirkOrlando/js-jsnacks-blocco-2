/* Snack4
Crea un array di numeri interi e 
fai la somma di tutti gli elementi 
che sono in posizione dispari
*/

const numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
sum = 0;

let i = 0;
while (i < numbersList.length) {
  numb = numbersList[i];
  //console.log(`${i}: ${numb}`);
  switch (i % 2) {
    case 1:
      sum += numb;
      break;

    default:
      break;
  }

  i++;
}

console.log(sum);

/* for (let i = 0; i < numbersList.length; i++) {
  numb = numbersList[i];
  console.log(`${i}: ${numb}`);
  switch (1) {
    case i % 2:
      sum += numb;
      break;

    default:
      break;
  }
}

console.log(sum); */
