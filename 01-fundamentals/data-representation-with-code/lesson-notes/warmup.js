/*
  Warmup Questions & Tasks
  ------------------------
  Answer the following questions and/or complete the tasks.

  - Write a JSDoc style comment for the `createPersonObject()` function below. Make sure to include a description, parameters, and a return value.
*/

function createPersonObject(firstName, lastName, age) {
  return {
    name: {
      first: firstName,
      last: lastName,
    },
    age: age,
  };
}

const person = createPersonObject("Ian", "Madsen", 28);
console.log(person);
