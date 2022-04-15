// Setup of recordCollection
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

//updateRecords function taking an object, id, property, and value
function updateRecords(records, id, prop, value) {
  //creating a temporary object to manipulate
    let obj = records[id];
  //Delete property if no value is given
  if (value == null || value == "") {
    delete obj[prop];
    records[id] = obj;
    return records;
  }
  //checks if tracks property
  if (prop == "tracks") {
    let temp = [];
    if (obj.hasOwnProperty("tracks")) {
      temp = obj[prop];
      console.log(temp);
      temp.push(value);
      obj[prop] = temp;
    } else {
      temp.push(value);
      obj[prop] = temp;
    } //sets object property to the value given
  } else {
    obj[prop] = value;
  }
  //updating the new id with the updated object
  records[id] = obj;
  return records;
}
//before modification
console.log(recordCollection);
updateRecords(recordCollection, 5439, "artist", "ABBA");
updateRecords(recordCollection, 2548, "artist", "");
updateRecords(recordCollection, 2548, "tracks", "");
updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");
updateRecords(recordCollection, 1245, "albumTitle", "Riptide");
updateRecords(recordCollection, 2468, "tracks", "Free");
//after modification
console.log(recordCollection);
