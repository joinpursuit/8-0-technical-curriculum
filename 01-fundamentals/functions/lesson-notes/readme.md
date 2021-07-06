# Functions

## Learning Objectives

By the end of this lesson you should be able to:

- Define what a function is.
- Identify the name, parameters, and body of a given function.
- Create functions with parameters using the function declaration syntax.
- Call functions with arguments.
- Return values from functions.

---

## Guiding Questions

- Take a look at the following code which prints a similar sentence for two different animals.

  ```js
  console.log("Milo the hamster is up for adoption on 3/24!");
  console.log("Kingsley the dog is up for adoption on 3/26!");
  ```

  Consider how you might generalize each sentence above. What are the variable parts of each line of code above?

- Take a look at the code below which defines variables that can be used in a more generic sentence.

  ```js
  const name1 = "Milo";
  const kind1 = "hamster";
  const availableDate1 = "3/24";
  console.log(`${name1} the ${kind1} is up for adoption on ${availableDate1}!`);

  const name2 = "Kingsley";
  const kind2 = "dog";
  const availableDate2 = "3/26";
  console.log(`${name2} the ${kind2} is up for adoption on ${availableDate2}!`);
  ```

  This code is a bit verbose, but isn't too bad. However, consider we need to copy this pattern for 100 different animals. What problems could occur if we were to do this?

- What is a function and how does it help solve problems of repeatability and variability?

- Take a look at the function below. Explain each part of the function in your own words, using technical terms if possible.

  ```js
  function availablePetNotice(name, kind, date) {
    console.log(`${name} the ${kind} is up for adoption on ${availableDate}!`);
  }
  ```

- The function above has three parameters. What does that mean?

- The function above has one line of code in its function body. What does that mean?

- How many lines of code are you allowed to put into a JavaScript function body?

- Try copying the function above and running your code. Nothing should appear in the console. Why is this?

- How do you call a function?

- What will happen if you were to run the following code? Why? Make your best guess before running the code yourself.

  ```js
  function availablePetNotice(name, kind, date) {
    console.log(`${name} the ${kind} is up for adoption on ${date}!`);
  }

  availablePetNotice;
  ```

- What will happen if you were to run the following code? Why? Make your best guess before running the code yourself.

  ```js
  function availablePetNotice(name, kind, date) {
    console.log(`${name} the ${kind} is up for adoption on ${date}!`);
  }

  availablePetNotice();
  ```

- What will happen if you were to run the following code? Why? Make your best guess before running the code yourself.

  ```js
  function availablePetNotice(name, kind, date) {
    console.log(`${name} the ${kind} is up for adoption on ${date}!`);
  }

  availablePetNotice("Kingsley", "dog", "3/26");
  ```

- What will happen if you were to run the following code? Why? Make your best guess before running the code yourself.

  ```js
  function availablePetNotice(name, kind, date) {
    console.log(`${name} the ${kind} is up for adoption on ${date}!`);
  }

  availablePetNotice(10, true, "??");
  ```

- What will happen if you were to run the following code? Why? Make your best guess before running the code yourself.

  ```js
  function availablePetNotice(name, kind, date) {
    console.log(`${name} the ${kind} is up for adoption on ${date}!`);
  }

  const animalName = "Kingsley";
  const animalKind = "dog";
  const adoptionDate = "3/26";
  availablePetNotice(animalName, animalKind, adoptionDate);
  ```

- What will happen if you were to run the following code? Why? Make your best guess before running the code yourself.

  ```js
  function availablePetNotice(name, kind, date) {
    console.log(`${name} the ${kind} is up for adoption on ${date}!`);
  }

  const name = "Kingsley";
  const kind = "dog";
  const date = "3/26";
  availablePetNotice(name, kind, date);
  ```

- What will happen if you were to run the following code? Why? Make your best guess before running the code yourself.

  ```js
  function availablePetNotice(x, y, z) {
    console.log(`${x} the ${y} is up for adoption on ${z}!`);
  }

  const name = "Kingsley";
  const kind = "dog";
  const date = "3/26";
  availablePetNotice(name, kind, date);
  ```

- What will happen if you were to run the following code? Why? Make your best guess before running the code yourself.

  ```js
  function availablePetNotice(name, kind, date) {
    console.log(`${name} the ${kind} is up for adoption on ${date}!`);
  }

  const name = "Kingsley";
  const kind = "dog";
  const date = "3/26";
  const cost = "$300.00";
  availablePetNotice(name, kind, date, cost);
  ```

- What will happen if you were to run the following code? Why? Make your best guess before running the code yourself.

  ```js
  function availablePetNotice(name, kind, date) {
    console.log(`${name} the ${kind} is up for adoption on ${date}!`);
  }

  const name = "Kingsley";
  const kind = "dog";
  const date = "3/26";
  const result = availablePetNotice(name, kind, date);
  console.log(result);
  ```

- In the example above, the value of `result` was `undefined`. This means that the expression `availablePetNotice(name, kind, date)` evaluates to `undefined`.

  This doesn't have to be the case. Instead, you can return values from within your function with the `return` keyword. When the function is called and used in some way, such as assigning to a variable, it is replaced by the returned value. To see an example of this, look below.

  ```js
  function availablePetNotice(name, kind, date) {
    return `${name} the ${kind} is up for adoption on ${date}!`;
  }

  const name = "Kingsley";
  const kind = "dog";
  const date = "3/26";
  const result = availablePetNotice(name, kind, date);
  console.log(result); //> "Kingsley the dog is up for adoption on 3/26!"
  ```

  In your own words, describe how the above code is different than using `console.log()`. What are the implications of these differences?

- When the function below is called, will anything be printed to the console? What is the return value of the function?

  ```js
  function availablePetNotice(name, kind, date) {
    return `${name} the ${kind} is up for adoption on ${date}!`;
    console.log("End of function.");
  }
  ```

- When the function below is called, will anything be printed to the console? What are the possible return values of the function?

  ```js
  function availablePetNotice(name, kind, date) {
    if (kind === "dog") {
      return `This dog goes up for adoption on ${date}!`;
    } else {
      return `${name} the ${kind} is up for adoption on ${date}!`;
    }
  }
  ```

- When the function below is called, what will be printed to the console and why? What is the return value of the function?

  ```js
  function availablePetNotice(name, kind, date) {
    return console.log(`${name} the ${kind} is up for adoption on ${date}!`);
  }
  ```
