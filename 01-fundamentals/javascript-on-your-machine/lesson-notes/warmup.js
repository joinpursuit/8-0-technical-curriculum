/*
  Warmup Questions & Tasks
  ------------------------
  Answer the following questions and/or complete the tasks.

  - Complete the function below, as describe by the JSDocs comments.
*/

/**
 * The function below should compare the inputted `zip` with each `zip` key in the `contacts` array. For each contact, check to see if the first three numbers of their zip matches the inputted `zip`. If it does, push the name of that contact into an array.
 * @param {object[]} contacts - An array of objects. See below for the format of each object.
 * @param {number} zip - A five character number that represents the zip.
 * @returns {string[]} An array of strings, where each string is the name of a person whose zip matches the first three numbers of the inputted `zip`.
 */
function findNearbyContacts(contacts, zip) {}

const contacts = [
  {
    name: "Xavier Chavez",
    address: { street: "589 Brook Drive", zip: 91977 },
  },
  {
    name: "Cara Thomas",
    address: { street: "54 Valley Lane", zip: 92935 },
  },
  {
    name: "Simone Shelton",
    address: { street: "98 Bay Drive", zip: 93535 },
  },
  {
    name: "Kit Williams",
    address: { street: "16 Henry Smith Lane", zip: 93522 },
  },
  {
    name: "Makai Edwards",
    address: { street: "9712 East Poplar Drive", zip: 91976 },
  },
];

// Example cases
const example1 = findNearbyContacts(contacts, 93541);
console.log("EXAMPLE 1:", example1);
//> [ 'Simone Shelton', 'Kit Williams' ]

const example2 = findNearbyContacts(contacts, 92936);
console.log("EXAMPLE 2:", example2);
//> [ 'Cara Thomas' ]

const example3 = findNearbyContacts(contacts, 94409);
console.log("EXAMPLE 3:", example3);
//> []
