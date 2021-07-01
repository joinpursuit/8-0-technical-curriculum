# Built-in Methods

## Setup

Please complete the following before the lesson begins:

- Open the [warmup.js](./warmup.js) file.
- Copy the contents of this file into a local `.js` file so that you can run it.
- Complete the Warmup Questions & Tasks detailed at the top of the file.

## Learning Objectives

By the end of this lesson you should be able to:

- Identify a built-in method.
- Use common `Number` methods like `.parseInt()`, `.parseFloat()`, and `.isNaN()`.
- Use common `Math` methods like `.ceil()`, `.floor()`, `.round()`, `.max()`, `.min()`, and `.random()`.
- Use common `Object` methods like `.values()`, `.keys()`, and `.entries()`.
- Use the common `Array.isArray()` method.

---

## Guiding Questions

- What is a built-in method?

- Documentation can sometimes be difficult to read, but is essential to your success as a developer. Take a look at the following page from the Mozilla Developer Network that describes the `Math.max()` method. Then, describe in your own words what the `Math.max()` method does.

  - [MDN: Math.max()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)

- Why is the `Number.isNaN()` method helpful?

- Why is the `Array.isArray()` method helpful?

- What does the `Math.random()` method do?

- How can you return a random number between 0 and 9?

- How can you return a random number between 0 and 99?

- How can you return a random number between 1 and 100?

- How can you return a random number between 1 and 50?

- How can you return a random number between 10 and 20?

- What built-in method(s) do you think would help with the following problem?

  > Given an array of integers where some numbers are strings, return the largest integer as a number.
  >
  > e.g. `[4, "10", 9]`

- What built-in method(s) do you think would help with the following problem?

  > Given an object, verify that _none of the values_ of those keys are `NaN`.
  >
  > e.g. `{ inStock: 11, maximum: 20 }`

- What built-in method(s) do you think would help with the following problem?

  > Given an object with a number of keys, choose a key at random and return the value of that key.
  >
  > e.g. `{ firstName: "Francisco", lastName: "Carrillo", age: 28 }`

## Exercise

Write the function as describe below. Once you're done, check in with an instructor.

```js
/**
 * Returns a single element from an array of unknown length. If the array is empty, returns `null`.
 * @param {*[]} array - An array of any number of elements.
 * @returns {*} Returns a single element from the array, randomly.
 */
function pluck(array) {}

// Examples
const example1 = [10, 20, 30, 40, 50];
console.log(pluck(example1)); //> 10, 20, 30, 40, or 50

const example2 = ["Anton", "Lydia", "Erin"];
console.log(pluck(example2)); //> "Anton", "Lydia", or "Erin"

const example3 = [];
console.log(pluck(example3)); //> null
```
