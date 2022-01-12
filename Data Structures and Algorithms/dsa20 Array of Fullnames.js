// Array of Fullnames
// Given an array (names) of objects where each object contains the firstname and lastname of a person, return an array that contains the fullname of each person.
function fullNames(names) {
  return names.map((name) => `${name.firstName} ${name.lastName}`);
}

let names = [
  { firstName: "Bruce", lastName: "Wayne" },
  { firstName: "Clark", lastName: "Kent" },
];

console.log(fullNames(names));
