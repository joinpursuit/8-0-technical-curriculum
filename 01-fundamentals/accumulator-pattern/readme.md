# Accumulator Pattern

There are different types of problems in programming that come up again and again. For example, you will often find yourself searching through some sort of data collection in search of one piece of data, or transforming a number of data types into another data type.

These overarching problems often produce patterns. That is, you can go about solving these problems in a similar type of way. In this lesson, you'll learn about one of the most popular patterns that you've likely already used without knowing it: the accumulator pattern.

## Learning Objectives

By the end of this lesson you should be able to:

- Describe the accumulator pattern and its purpose.
- Apply the accumulator pattern to problems that return strings, numbers, or booleans.
- Apply the accumulator pattern to problems that return arrays.
- Apply the accumulator pattern to problems that return objects.

---

## Patterns in programming

When you think of the word "pattern," you likely think of something that repeats. In programming, this meaning still holds. Patterns in programming typically refer to certain types of problems or algorithms that often occur. Sometimes, languages have syntax to solve these patterns while other times you'll just end up writing code that is very similar to other code you may have written.

### Patterns solved with syntax

Some patterns have syntax built-in to the language. For example, you could consider conditionals to be a pattern. It's often the case that you need to control the flow of your programs through `if` and `else` statements.

Because this is a fundamental pattern that occurs in lots of programs, languages have specific syntax for dealing with it.

```js
const rolls = [4, 2];
if (rolls.length === 0) {
  console.log("No dice have been rolled.");
} else if (rolls.length === 1) {
  console.log("1 die has been rolled.");
} else {
  console.log(`${rolls.length} dice have been rolled.`);
}
```

In JavaScript, the only way to handle patterns like this (i.e. controlling the flow of a program) is to use `if/else` statements or something similar, like a `switch` statement.

### Patterns solved with conventions

Other patterns occur often but may not have specific syntax involved. For example, it's often the case that you may write a function that includes some validation. For example, you may want to make certain the value being entered is a number.

```js
function rollDie(sides) {
  if (typeof sides !== "number") {
    return "Value inputted must be a number.";
  }

  return Math.ceil(Math.random() * sides);
}
```

The code at the top of the function above that checks for the parameter's type is often called a "guard clause." Guard clauses are typically put at the top of the function to stop the function's execution if something is immediately wrong.

There's no special, inherent syntax for a guard clause. However, because it's so common, it's typical to place that kind of code at the top of your function. This is yet another pattern that occurs often in development.

## Accumulator pattern

The accumulator pattern solves a specific problem: aggregating a series of values into a single value.

For example, take a look at the following array of values, representing the values rolled from multiple six-sided die.

```js
const rolls = [4, 5, 6, 1];
```

Imagine you need to write a function that will take an array of this shape -- with any number of values -- and add up all of the numbers to generate the total. Another way you can think of this problem is that you need to transform an array of numbers into a single number. This situation is what the accumulator pattern is for.

You can likely already think of some of the tools you might need to solve this problem. The accumulator pattern, like the guard clause, doesn't have specific syntax but instead prescribes a way of solving the problem.

### Accumulator pattern steps

The accumulator pattern involves four steps:

1. Determine your output data type and default value.
1. Define your loop.
1. Accumulate!

#### Determine your output data type

Keep in mind the example above where you want to find the total of a series of die rolls. What data type do you want to receive at the very end?

In this case, it makes sense to be looking for a number. This means your accumulator will start as a number, set to _whatever default makes sense._ A good default for this problem would be `0`.

> **Note:** In the code below, a function has been defined to wrap the accumulator pattern. This is not strictly necessary as you can use the accumulator pattern without a function.

```js
function calculateTotal(rolls) {
  let accumulator = 0;

  // More code will go here!

  return accumulator;
}

const rolls = [4, 5, 6, 1];
console.log(calculateTotal(rolls));
```

In the code above, the accumulator has been set to be a numerical value of `0`. At the very end, that value is returned. This is the "wrapping" of our accumulator pattern.

#### Define your loop

Because you'll be aggregating a series of values, you will always include some kind of loop. Typically, you'll want to include a loop that goes over every element of the collection.

```js
function calculateTotal(rolls) {
  let accumulator = 0;

  for (let roll of rolls) {
    // More code will go here!
  }

  return accumulator;
}

const rolls = [4, 5, 6, 1];
console.log(calculateTotal(rolls));
```

In the code above, a loop has been added to iterate over every element of the `rolls` array. Still, nothing is happening to the accumulator.

However, consider this edge case: what if the `rolls` array is empty?

With the code written above, _it wouldn't matter._ The loop would not run but you'd still receive a numerical value of `0`, which is the correct value if no dice are run. This is one reason why setting the accumulator default is so useful.

#### Accumulate!

Now you are ready to perform the "accumulation." To accumulate, you will write code that modifies the accumulator in each iteration.

```js
function calculateTotal(rolls) {
  let accumulator = 0;

  for (let roll of rolls) {
    accumulator += roll;
  }

  return accumulator;
}

const rolls = [4, 5, 6, 1];
console.log(calculateTotal(rolls)); //> 16
```

The pattern above you see is the accumulator pattern. You've likely already written code like this. What's important about the accumulator pattern is both the process as well as its versatility. This pattern can be applied to all kinds of situations.

> **Note:** The accumulator variable does not need to be called `accumulator`. Instead, you could call it `result`, `total`, or whatever else might make the most amount of sense.

## Examples

The example above may have seemed very simple. Below are some more complex examples that still make use of the accumulator pattern. For the following examples, "accumulation" may not feel like the right word. Remember that the generalized job of the accumulator pattern is transform one set of data into another data type.

### Numbers and strings

You've already seen an example of totalling up all numbers in an array. But the general shape of the accumulator pattern can be used to solve all kinds of problems.

```js
function getMinimumValue(rolls) {
  let accumulator = rolls[0];

  for (let i = 1; i < rolls.length; i++) {
    const roll = rolls[i];
    if (roll < accumulator) {
      accumulator = roll;
    }
  }

  return accumulator;
}

const rolls = [4, 5, 6, 1];
console.log(getMinimumValue(rolls)); //> 1
```

In the case above, the default value is set _to the first value of the array._ If the array is empty, it will be `undefined`.

The accumulator pattern can also be applied to problems where you want to return a string.

```js
function listPlayers(names) {
  let accumulator = "";

  for (let name of names) {
    accumulator += name + ", ";
  }

  return accumulator;
}

const players = ["Sebastian", "Kai", "Saanvi"];
console.log(listPlayers(players)); //> "Sebastian, Kai, Saanvi,"
```

In the above function, an array of strings is being transformed into a single string.

### Booleans

It's also possible to aggregate a list of elements into a boolean. For example, take a look at the following function which returns whether or not a `6` was rolled.

```js
function hasSix(rolls) {
  let accumulator = false;

  for (let roll of rolls) {
    if (roll === 6) {
      accumulator = true;
    }
  }

  return accumulator;
}

const rolls = [4, 5, 6, 1];
console.log(hasSix(rolls)); //> true
```

While there's no addition happening here, there is transformation. Given an array of numbers, the `hasSix()` function returns a boolean according to specific criteria.

### Arrays

It's possible to use the accumulator pattern to go from one array to another array.

```js
function addBonusToAllRolls(rolls) {
  let accumulator = [];

  for (let roll of rolls) {
    let increased = roll + 2;
    accumulator.push(increased);
  }

  return accumulator;
}

const rolls = [4, 5, 6, 1];
console.log(addBonusToAllRolls(rolls)); //> [ 6, 7, 8, 1 ];
```

In the example above, a new array has been created with some minor transformations from the old array.

### Objects

It's also possible to use the accumulator pattern to aggregate values into an object.

One scenario where this is really useful is to get unique values. Although it may take a bit of squinting, you can see the accumulator pattern below, despite some of the extra methods that are being called.

```js
function getUniqueRolls(rolls) {
  let accumulator = {};

  for (let roll of rolls) {
    accumulator[roll] = true;
  }

  return accumulator;
}

const rolls = [4, 5, 6, 1, 5, 4, 4, 1];
console.log(getUniqueRolls(rolls));
//> { '1': true, '4': true, '5': true, '6': true }
```

In the example above, an object is created with each key being the number and each value just being the value `true`. Because objects can't have multiple keys of the same name, there will be no duplicates. This shows us which numbers appear in the array.

Unfortunately, if we wanted to use those numbers, it might be difficult to do so. You could update the function with _another_ accumulator pattern to transform these keys into an array.

```js
function getUniqueRolls(rolls) {
  let accumulator = {};

  for (let roll of rolls) {
    accumulator[roll] = true;
  }

  // Second accumulator pattern starts here!
  let result = [];

  for (let key in accumulator) {
    result.push(Number(key));
  }

  return result;
}

const rolls = [4, 5, 6, 1, 5, 4, 4, 1];
console.log(getUniqueRolls(rolls)); //> ; [ 1, 4, 5, 6 ]
```
