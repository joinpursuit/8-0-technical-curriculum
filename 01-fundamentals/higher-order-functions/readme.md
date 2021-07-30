# Higher Order Functions

Higher order functions are an important concept when learning JavaScript. JavaScript relies heavily on the fact that functions can be passed around as if they were any other kind of value. Other programming languages do have special tools that can do this but, for JavaScript, this is a core aspect of the language.

This short lesson will simply introduce you to the idea of higher order functions and give you a bit of context around why they are used. After this lesson, you will learn some specific higher order native array methods that you can use.

## Learning Objectives

By the end of this lesson you should be able to:

- Define what makes a higher order function.
- Write functions that accept a function as an argument and use that inputted function.

---

## What is a higher order function?

A higher order function is _any function that returns a function or expects a function as one of its parameters._

Higher order functions are used in a variety of ways, including but not limited to:

- Building highly customizable functions.
- Managing code that takes time. (i.e. asynchronous code)

For now, focus on being able to identify _what_ a higher order function is. Moving forward, you will see more and more use cases for how to use them.

### Returning functions

```js
function outer() {
  function inner() {
    return "I'm the inner function!";
  }

  return inner;
}
```

The `outer()` function above is a higher order function because it _returns a function._ The `inner()` function _is not_ a higher order function -- it's just a regular function.

For the code above, how would you get access to the value `"I'm the inner function!"`? It's a bit confusing, as you'll see below.

```js
const first = outer();
const second = first();
console.log(second); //> "I'm the inner function!"
```

The code above works as follows:

- The return value of the `outer()` function _is a function._ This means that what's stored inside of the `first` variable is the `inner()` function that is returned from the `outer()` function.
- The `first` variable is then called as if it was a function. That's because it is!
- The return value of `first()`, also known as `inner()`, is the desired string.

Although it may not seem like it, there are actually some really interesting ways to use this interesting feature. For now, just keep in mind that the above `outer()` function is a higher order function because it returns a function.

### Accepting functions as arguments

It's also possible to accept a function as an argument. Take a look at the code below. What do you think will happen?

```js
function outer(fn) {
  const result = "I'm declared inside of the outer() function!";
  fn(result);
}

function logger(text) {
  console.log("LOGGING:", text);
}

outer(logger);
```

When the `outer()` function is called, the following message will be logged:

```
LOGGING: I'm declared inside of the outer() function!
```

Here's what happens when the `outer()` function is called.

- The `logger()` function is passed in as an argument to the `outer()` function. Notice that the `logger()` function _is not being called_ when it is passed in.
- The `outer()` function has a parameter of `fn`. _This is the `logger()` function._
- A `result` variable is declared that is assigned to a string.
- The `logger()` function, now called `fn()`, is called with the `result` string.
- The code in the `logger()` function runs. This code prepends the inputted text with `"LOGGING:"` and logs out the given text.

Once again, the code above may seem a bit silly at the moment. There are some really good reasons to use functions like this. You'll see a few examples below.

### Anonymous functions

Before moving forward, it's important to point out that functions can be anonymous. This means they do not have a name. Because they don't have a name, they can't be as easily called, but they are great for higher order functions.

For example, you could rewrite the first scenario above as follows.

```js
function outer() {
  return function () {
    return "I'm the inner function!";
  };
}
```

Instead of having to name the function `inner()`, which wasn't really used, you could just create an anonymous function.

The second scenario might look like this:

```js
function outer(fn) {
  const result = "I'm declared inside of the outer() function!";
  fn(result);
}

outer(function (text) {
  console.log("LOGGING:", text);
});
```

### Calculator example

Take a look at the `calculate()` function below.

```js
function calculate(a, b, fn) {
  const result = fn(a, b);

  if (typeof result !== "number") {
    return "Inputted function must return a number.";
  }

  return result;
}
```

The function above expects the inputted function, `fn`, to do the following:

- Accept two arguments, `a` and `b`.
- Return a `number` data type.

This function can now be used in a variety of different ways.

```js
const sum = calculate(10, 20, function (x, y) {
  return x + y;
}); //> 30

const product = calculate(10, 20, function (x, y) {
  return x * y;
}); //> 200

const addAndDouble = calculate(10, 20, function (x, y) {
  return (x + y) * 2;
}); //> 60

const addAndPrint = calculate(10, 20, function (x, y) {
  return `RESULT: ${x + y}`;
}); //> "Inputted function must return a number."
```

Each call of `calculate()` above takes in two numbers. These two numbers are then passed in to the inputted anonymous function. Next, the return value of the anonymous function is checked to ensure it's a number. If it is not, the error message is returned. Otherwise, it returns whatever was returned from the anonymous function.
