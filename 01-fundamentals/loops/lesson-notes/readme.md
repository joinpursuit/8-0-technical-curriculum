# Loops

## Learning Objectives

By the end of this lesson you should be able to:

- Write a `while` loop with a variable number of iterations.
- Write a `for` loop with a variable number of iterations.
- Write `while` and `for` loops to loop over arrays.
- Use the `break` and `continue` keywords to modify loop execution.
- Write `for...of` loops to iterate over arrays.
- Write `for...in` loops to iterate over objects.

---

## Guiding Questions

- What is the purpose of loops? Feel free to reference the reading or documentation.

- Take a look at the following code. Before running it, make a guess as to what you think it will do.

  ```js
  let sheep = 0;
  console.log("Counting sheep...");
  while (sheep < 5) {
    sheep++;
    console.log(`${sheep} sheep...`);
  }
  ```

- What would happen if instead of the condition being `sheep < 5`, it was `sheep < 1`? Why?

- What would happen if instead of the condition being `sheep < 5`, it was `sheep < 0`? Why?

- What would happen if instead of the condition being `sheep < 5`, it was `sheep > -1`? Why?

- Take a look at the following code. Before running it, make a guess as to what you think it will do.

  ```js
  let sheep = 10;
  console.log("Counting sheep...");
  while (sheep > 0) {
    console.log(`${sheep} sheep...`);
    sheep--;
  }
  ```

- Take a look at the following code. Before running it, make a guess as to what you think it will do.

  ```js
  function countSheep(limit) {
    let sheep = 0;
    console.log("Counting sheep...");
    while (sheep < limit) {
      sheep++;
      console.log(`${sheep} sheep...`);
    }
  }

  countSheep(7);
  ```

- Take a look at the following code. Before running it, make a guess as to what you think it will do.

  ```js
  function countSheep(limit) {
    console.log("Counting sheep...");
    for (let sheep = 1; sheep <= limit; sheep++) {
      console.log(`${sheep} sheep...`);
    }
  }

  countSheep(7);
  ```

- A `for` loop is made up of an initial expression, condition expression, and an increment expression. Define each of these terms in your own words.

- When does the increment expression of a `for` loop run?

- What conditions would need to happen for a `for` loop to run infinitely?

- Recall that arrays are zero indexed. How can you dynamically access the last index of an array?

- Take a look at the following code. Before running it, make a guess as to what you think it will do.

  ```js
  function checkBedQuality(bedQualities) {
    console.log("Checking bed qualities...");
    for (let index = 0; index < bedQualities.length; index++) {
      const quality = bedQualities[index];
      console.log(`This bed is too ${quality}...`);
    }
  }

  checkBedQuality(["soft", "soft", "firm"]);
  ```

- What would happen if instead of the condition being `index < bedQualities.length`, it was `index <= bedQualities.length`? Why?

- What would happen if instead of the initial expression being `let index = 0`, it was `let index = 1`? Why?

- What would happen if instead of the increment expression being `index++`, it was `index + 1`? Why?

- Take a look at the following code. Before running it, make a guess as to what you think it will do.

  ```js
  function checkBedQuality(bedQualities) {
    console.log("Checking bed qualities...");
    for (let index = 0; index < bedQualities.length; index++) {
      const quality = bedQualities[index];
      if (quality === "perfect") {
        console.log("This bed is perfect!");
      } else {
        console.log(`This bed is too ${quality}...`);
      }
    }
  }

  checkBedQuality(["soft", "soft", "perfect", "firm"]);
  ```

- In the code above, how could you stop the execution of the loop once a `"perfect"` bed is found? There are at least two ways to do so.

- Imagine an array is inputted into the code above with the following contents:

  ```js
  const qualities = ["", "perfect", "firm"];
  ```

  How could you use the `continue` keyword to skip over the empty string so that nothing is logged when it shows up?

- How does a `for...of` loop compare to a regular `for` loop? What are some benefits of each?

- What can a `for...in` loop do that other loops cannot?

- Take a look at the following code. Before running it, make a guess as to what you think it will do.

  ```js
  function printBedStats(bed) {
    for (let key in bed) {
      let value = bed[key];
      console.log(`${key}: ${value}`);
    }
  }

  printBedStats({ brand: "Casper", rating: 3.9 });
  ```

- Take a look at the following code. Before running it, make a guess as to what you think it will do.

  ```js
  function printBedStats(bed) {
    let result = [];
    for (let key in bed) {
      let value = bed[key];
      result.push(value);
    }
    return result;
  }

  printBedStats({ brand: "Casper", rating: 3.9 });
  ```
