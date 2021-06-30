# JavaScript on Your Machine

## Setup

Please complete the following before the lesson begins:

- Open and then fork this [repl](https://replit.com/@Pursuit/Warmup-JavaScript-on-Your-Machine).
- Complete the Warmup Questions & Tasks detailed at the top of the repl.

## Learning Objectives

By the end of this lesson you should be able to:

- Describe what NodeJS is and why it's important.
- Install NodeJS on your local machine through Homebrew.
- Run JavaScript files with the `node` command.
- Access command line arguments with the `node` command.
- Run JavaScript in the NodeJS REPL.

---

## Guiding Questions

- What is NodeJS?

- Why was NodeJS so influential on the JavaScript community?

- How can you check which version of `node` you have?

- Create a new `.js` file and put the following inside of it.

  ```js
  function addFruit(fruits, fruit) {
    fruits.push(fruit);
    return fruits;
  }

  const fruits = ["🍓", "🍐", "🍎"];
  addFruit(fruits, "🥝");
  ```

  How can you run this file from the command line?

- When you run this file, nothing is shown on the command line. How can you update the file so that it prints the response to your terminal window?

- Try adding the following line inside of your file. What gets logged out? What _data type_ is `process`?

  ```js
  console.log(process);
  ```

- Try adding the following inside of your file. What gets logged out? What _data type_ is `process.argv`?

  ```js
  console.log(process.argv);
  ```

- What will always be the first and second elements of `process.argv`?

- Update your `.js` file so that it contains the code below.

  ```js
  function addFruit(fruits, fruit) {
    fruits.push(fruit);
    return fruits;
  }

  const fruits = ["🍓", "🍐", "🍎"];
  const input = process.argv[2];
  if (input) {
    let result = addFruit(fruits, input);
    console.log(result);
  } else {
    console.log("No fruit added...");
  }
  ```

  How can you change what you run on the command line so that a new fruit is added to the array?

- After running the code and adding a fruit, your file will not change. This means your changes are not permanent. Why is this?

- How can you open the NodeJS REPL?

- How can you run code in the NodeJS REPL?

- How can you exit the NodeJS REPL?

- Is it possible to write a full function over multiple lines in the REPL? How?

## Exercise

Create a new `.js` file with the following code. Follow the JSDoc instructions to complete the `showAnimalCount()` function.

Then, update the code so that instead of using `"Horse"`, it uses input from the command line.

Once you're done, check in with an instructor.

```js
/**
 * Returns a string representation of the number of animals in the array.
 * @param {object[]} animals - An array of animal objects. See the structure of each object below.
 * @param {string} name - The name of the animal you wish to show.
 * @return {string} A string with a number of emojis equal to the number of animals. Each emoji should be separated by a space.
 */
function showAnimalCount(animals, name) {}

const animals = [
  { count: 2, emoji: "🐖", name: "Pig" },
  { count: 1, emoji: "🐈", name: "Cat" },
  { count: 2, emoji: "🐎", name: "Horse" },
  { count: 4, emoji: "🐄", name: "Cow" },
  { count: 3, emoji: "🐐", name: "Goat" },
];

const pigs = showAnimalCount(animals, "Pig");
console.log(pigs); //> "🐖 🐖"

const cows = showAnimalCount(animals, "Cow");
console.log(cows); //> "🐄 🐄 🐄 🐄"
```
