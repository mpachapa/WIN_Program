//reversing a string
function reverseString(str) {
  let revstr = "";
  for (var i = str.length-1; i >= 0; i--){
    revstr += str[i]
  }
  return revstr
}
reverseString("hello");

//factor multiplication a number
function factorialize(num) {
  let calc = 1;
  while (num > 0){
    calc *= num
    num--
  }
  return calc;
}
factorialize(5);

//finding longest word in a sentence
//with a for loop
function findLongestWordLength(str) {
  let words = str.split(' ');
  let maxlength = 0 
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxlength) {
      maxlength = words[i].length;
    }
  }
  return maxlength;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");

//with using map
function findLongestWordLengthMap(str) {
  return Math.max(...str.split(" ").map(word => word.length));
}
findLongestWordLengthMap("What is the average airspeed velocity of an unladen swallow");

//Makes first letter of each word capital
function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(" ");
}
titleCase("I'm a little tea pot");

//Confirm the Ending of a string
function confirmEnding(str, target) {
  //using regex
  let re = new RegExp(target + "$", "i");

  return re.test(str);
}
confirmEnding("Bastian", "n");
confirmEnding("Open sesame", "same")

//repeat a string
function repeatStringNumTimes(str, num) {
  let temp = "";
  for (var i = 0; i < num; i++){
    temp += str
  }
  return temp;
}
console.log(repeatStringNumTimes("abc", 3));

//finding the largest value in each array
function largestOfFour(passarr) {
  let arr = []
  for (let i = 0; i<passarr.length; i++){
    let largest = 0;
    for (var j = 0; j <passarr[i].length; j++){
       if (passarr[i][j] > largest){
         largest = passarr[i][j];
       }
    }
    arr.push(largest);
  }
  return arr;
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

//Practical application of slice
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);

// Application of find
function findElement(arr, func) {
  return arr.find(func)
}
findElement([1, 2, 3, 4], num => num % 2 === 0);

//Using slice and splice
function frankenSplice(arr1, arr2, n) {
  let arr = arr2.slice();
  arr.splice(n,0,...arr1);
  return arr;
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

//Checks for falsy values in an array
function bouncer(arr) {
  let temp = []
  for(var i = 0; i < arr.length; i++){
    if(!arr[i]){}
    else
      temp.push(arr[i])
  }
  return temp;
}
console.log(bouncer([7, "ate", "", false, 9]));

//Checks if array has numbers less than the passed value
function getIndexToIns(arr, num) {
  let count = 0;
  for (var i = 0; i < arr.length; i++){
    if(arr[i] < num)
      count++
  }
  return count;
}
console.log(getIndexToIns([40, 60], 50));

//Checking if the first string has letters in the second string
function mutation(arr) {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}
mutation(["hello", "hey"]);

//Breaks passed array into specified lengths (passed)
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
