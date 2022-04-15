function sums(arr, n) {
  //if at end go back up
  if (n == 0) {
    return 0;
  }
  //calls sum again to add whole array
  else return sums(arr, n - 1) + arr[n - 1];
}
console.log("Sums") //Testing sums()
console.log(sums([1], 0)); //should return  0.
console.log(sums([2, 3, 4], 1)); //should return 2.
console.log(sums([2, 3, 4, 5], 3)); //should return 9.

function square(a, b) {
  if (b == 1) {
    return a;
  } else return a * square(a, b - 1);
}
console.log("\nSquares") //Testing square()
console.log(square(2,3)) //should return 8
console.log(square(3,3)) //should return 27
console.log(square(5,4)) //should return 625