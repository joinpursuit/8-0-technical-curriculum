# Introductory JavaScript

## Setup

Please complete the following before the lesson begins:

- Open and then fork this [repl](https://replit.com/@Pursuit/Warmup-Introductory-JavaScript).
- Complete the Warmup Questions & Tasks detailed at the top of the repl.

## Learning Objectives

By the end of this lesson you should be able to:

- Define and use the five most common JavaScript primitive data types.
- Log expressions and values using `console.log()`.
- Create and assign values to variables.
- Use arithmetic operators to build simple mathematical equations.
- Represent logical assertions using `===`, `&&`, `||`, and `!`.
- Conditionally run code based on values and expressions.
- Distinguish between expressions and statements.

---

## Guiding Questions

- There are seven primitive data types in JavaScript. Which ones have you seen before?

- Take a look at the data types below and identify each one.

  ```
  null
  "Hello world!"
  10009
  undefined
  true
  42.9
  false
  .301
  ``
  0
  NaN
  -Infinity
  'It\'s a sunny day!'
  ```

- In your own words, describe what a variable is in the context of coding?

- Variables can be declared with three special keywords: `var`, `let`, and `const`. In this course, we will always use `let` or `const`.

  What are some of the differences between `let` and `const`?

- In your own words, describe how the code to the left of the `=` sign in the example below relates to the code on the right side of the `=` sign.

  ```js
  const programmer = "Yehuda Katz";
  ```

- Will the following code run or will it throw an error? Why or why not?

  ```js
  let programmer;
  ```

- Will the following code run or will it throw an error? Why or why not?

  ```js
  let coding = "fun";
  let coding = "exciting";
  ```

- Will the following code run or will it throw an error? Why or why not?

  ```js
  let language = "python";
  language = "javascript";
  const favoriteLanguage = language;
  ```

- The value assigned to the `welcomePhrase` variable below is called a template literal or template string. In your own words, describe how it works. Does it still have a data type of `string`?

  ```js
  const programmerName = "Abbi";
  const welcomePhrase = `Welcome, ${programmerName}!`;
  ```

- You may have noticed that variables with more than one word are put together. For example, `welcomePhrase`. Can you have a variable with a space?

- The common casing convention in JavaScript is camel case. What is a casing convention? What is camel case?

- Standard arithmetic operators such as `+` and `-` can be used in JavaScript. For division, you can use `/`. For multiplication, you can use `*`. You can also use parenthesis to impose an order of operations. Keeping that in mind, mentally evaluate the following code.

  ```js
  let result = (4 + 10) / 2 - 4 * 2;
  ```

- If working with a complex equation, it can sometimes be simpler to break down the equation into multiple steps. Keeping that in mind, mentally evaluate the following code.

  ```js
  let result = 4 + 10;
  result = result / 2;
  result = result - 4 * 2;
  ```

- Arithmetic code can be shortened by combining the `=` assignment operator with the appropriate arithmetic operator. For example, using `+=` means that the value stored in the variable will be increased by the value to the right.

  Change the code above so that it makes use of combination operators. As reference, they are: `+=`, `-=`, `*=`, and `/=`.

- Each value in JavaScript is either truthy or falsy. What does this mean?

- You can check the truthiness or falseness of a value by adding `!!` in front of it. For example, `!!0` evaluates to `false`.

  Why does this work? What does a single `!` operator do?

- You can represent the logical concepts of "and" and "or" with `&&` and `||` respectively. With that in mind, take a look at the following code. What do you think will be printed to the console? Why so?

  ```js
  console.log(false || true);
  ```

- What do you think will be printed to the console for the following code? Why so?

  ```js
  console.log(true && false && true);
  ```

- What do you think will be printed to the console for the following code? Why so?

  ```js
  console.log(((!false && true) || false) === true);
  ```

- The following code includes a conditional statement. If you were to run the code below, would anything be logged to the console? Why or why not?

  ```js
  const isProgrammer = true;
  const isMotivated = true;
  if (isProgrammer && isMotivated) {
    console.log("It's time to start coding!");
  }
  ```

- Is there a limit to the amount of code you can include between the curly braces of the conditional statement?

- Take a look at the code below. Then, follow the instructions and answer the questions below that.

  ```js
  const programmingLanguage = "Python";
  if (programmingLanguage === "JavaScript") {
    console.log("JavaScript was created by Brendan Eich in just 10 days.");
  }
  ```

  1. In the code above, how would you add another case so that when `programmingLanguage` is equal to "Python", different text is printed? Go ahead and update the code in your repl so that the following text prints in that case: `"Guido van Rossum began working on Python in the late 1980s"`.

  1. In the code above, if the conditional statement doesn't do anything particular for the value stored in `programmingLanguage`, write code that will print the following text: `"I don't know a fun fact about that language."`. How can you test that this code works?

- Take a look at the following expression. What does the code below do? What is the name of this type of expression?

  ```js
  const result = yourName ? `Welcome, ${yourName}!` : "Welcome to class!";
  ```

- What are some of the differences between an `if/else` statement and a ternary expression?

- More generally, how might you distinguish between statements and expressions?

## Exercise

For each of the problems below, first read through each lines of code. Make a guess as to what value will be printed to the console for each problem. Then, test your hypothesis by running the code.

```js
// 1.
const problem1 = true && (false || true);
console.log("Problem 1:", problem1);

// 2.
let multiplier2 = 3;
multiplier2 -= 2;
const problem2 = multiplier2 > 0 && multiplier2 < 3;
console.log("Problem 2:", problem2);

// 3.
let name3 = "Ada";
name3 += "Lovelace";
const phrase3 = `I know of a programmer named ${name3}.`;
console.log("Problem 3:", phrase3);

// 4.
if (null) {
  console.log("Problem 4: Null is a truthy value.");
} else if (0) {
  console.log("Problem 4: 0 is a truthy value.");
} else if ("") {
  console.log("Problem 4: An empty string is a truthy value.");
} else if (Infinity) {
  console.log("Problem 4: Infinity is a truthy value.");
} else {
  console.log("Problem 4: None of the provided values are truthy.");
}
```
