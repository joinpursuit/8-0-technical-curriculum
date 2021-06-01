# Functions

## Setup

Please complete the following before the lesson begins:

- Open and then fork this [repl](https://replit.com/@Pursuit/Warmup-Functions).
- Complete the Warmup Questions & Tasks detailed at the top of the repl.

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

## Exercise

Copy the code below into your repl. Then, follow the instructions in the comments to write a number of functions. Don't forget to call your functions!

```js
/*
  1. Write a function called `meow` that has no parameters. All it should do when called is log out the text "Meow!".

  Ex.
    meow(); //> "Meow"
*/

/*
  2. Write a function called `petIntroduction` that has a single parameter, called `name`. When the function is called, it should log out the text "Hello, my name is NAME!" where `NAME` is the first argument passed in to the function call.

  Ex.
    petIntroduction("Queso"); //> "Hello, my name is Queso!"
*/

/*
  3. Write a function called `petCosts` that takes two parameters. The first should be called `kind` and the second should be called `cost`. When called, the function should print the text "Adopting a KIND costs $COST." where `KIND` is replaced by the first argument and `COST` is replaced by the second argument.

  Ex.
    petCosts("cat", 150); //> "Adopting a cat costs $150."
*/

/*
  4. Update the `petCosts` function so that instead of printing the text to the console, it returns the string.

  Ex.
    const result = petCosts("cat", 150);
    console.log(result); //> "Adopting a cat costs $150."
*/

/*
  5. Write a function called `petAdoptionDetails` that takes three parameters: `name`, `kind`, and `age`. When called, the function should return the string "NAME the KIND is AGE old." Replace `NAME`, `KIND`, and `AGE` with the appropriate parameters.

  Ex.
    const result = petAdoptionDetails("Queso", "cat", "7 months");
    console.log(result); //> "Queso the cat is 7 months old."
*/

/*
  6. Update the `petAdoptionDetails` function so that if any of the parameters are missing, the value returned is the string "Not enough information provided."

  Ex.
    const result = petAdoptionDetails("Queso");
    console.log(result); //> "Not enough information provided."
*/

/*
  7. Make two updates to the `petAdoptionDetails` function. First, add a fourth parameter called `cost`. Then, inside the function body of `petAdoptionDetails`, use the `petCosts` function you built earlier and add the result of that function call to the string you are building in `petAdoptionDetails`.

  Ex.
    const result = petAdoptionDetails("Queso", "cat", "7 months", 150);
    console.log(result); //> "Queso the cat is 7 months old. Adopting a cat costs $150."
*/
```
