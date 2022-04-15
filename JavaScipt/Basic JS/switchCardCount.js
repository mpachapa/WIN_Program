let count = 0;

function cCounter(card) {
  // Switch to check the calue of the card
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    //increases count if a low card value
    case 7:
    case 8:
    case 9:
      break;
    //doesn't change count because mid value card
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
    //decreases count if a high card value
  }
  //returns count and if should bet or hold
  if (count > 0) {
    return count + " Bet";
  } else if (count <= 0) {
    return count + " Hold";
  } else return "Change Me";
}
console.log(cCounter("K"));
console.log(cCounter(2));
console.log(cCounter(3));
console.log(cCounter(5));
console.log(cCounter(7));
console.log(cCounter("A"));
console.log(cCounter("Q"))
