// Setup of contacts array
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName == name) {
      let contact = contacts[i];
      if (prop != "lastName" && prop != "number" && prop != "likes") {
        return "No such property";
      } else {
        return contact[prop];
      }
    }
  }
  return "No such contact";
  // Only change code above this line
}
//Testing of lookup function
console.log(lookUpProfile("Bob", "potato")); //return no such contact
console.log(lookUpProfile("Sherlock", "likes")); //returns array
console.log(lookUpProfile("Harry", "likes")); //returns array
console.log(lookUpProfile("Akira","number")) // returns number