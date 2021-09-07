# Built-in Methods

Up until this point, the only functions you've used have been ones that you've written yourself. There have been a few strange exceptions, such as `typeof` which is an _operator_ but can kind of act like a function. However, JavaScript has a number of functions that you can use to improve your program that you get without having to do anything at all.

In this lesson, you'll learn a few of these functions. While there is much to say about these functions, at this point stay focused on their utility and syntax as opposed to how they've come about.

## Lesson Objectives

By the end of this lesson you should be able to:

- Identify a built-in method.
- Use common `Number` methods like `.parseInt()`, `.parseFloat()`, and `.isNaN()`.
- Use common `Math` methods like `.ceil()`, `.floor()`, `.round()`, `.max()`, `.min()`, and `.random()`.
- Use common `Object` methods like `.values()`, `.keys()`, and `.entries()`.
- Use the common `Array.isArray()` method.

---

## What is a built-in method?

Built-in methods are functions that come with the JavaScript language. These methods offer a ton of utility that can help simplify and improve your programs.

These methods are talked about in a few different ways. You may hear them referred to as static methods or class methods. Regardless, you can identify a built-in method by looking for the following:

- You didn't create the function.

- The function getting called is attached to a JavaScript created object. For example, `Math` is an object created by JavaScript that has a key of `random`. That key points towards a value that is a function.

- The JavaScript created object starts with a capital letter. (e.g. `Array`, `Math`)

There is much more that can be said about built-in functions. For now, take note of how they are used and apply that knowledge to the applications you build.

## Number

Unsurprisingly, methods attached to the `Number` object revolve around evaluating numbers.

### .parseInt()

The `Number.parseInt()` method changes the inputted value into a number.

```js
Number.parseInt("76"); //> 76
```

It will remove any decimal values.

```js
Number.parseInt("76.99"); //> 76
```

If given something that cannot be parsed, it will return `NaN`.

```js
Number.parseInt("Number"); //> NaN
```

### .parseFloat()

The `Number.parseFloat()` method changes the inputted value into a number. It will allow for decimal values.

```js
Number.parseFloat("76.99"); //> 76.99
```

The same thing will happen if a non-number is entered.

```js
Number.parseFloat(true); //> NaN
```

### .isNaN()

Checking for `NaN` is tricky because of the following:

```js
NaN === NaN; //> false
typeof NaN; //> 'number'
```

That's why there is the `Number.isNaN()` method.

```js
Number.isNaN(NaN); //> true
Number.isNaN(76); //> false
```

## Math

The `Math` object contains a number of really interesting methods that can help you build complex equations in JavaScript. However, the most frequently used methods have more to do with managing or calculating values.

### .ceil()

The `Math.ceil()` method gets the _ceiling_, or highest value from a number with decimal values.

```js
Math.ceil(76.9); //> 77
Math.ceil(76.1); //> 77
Math.ceil(76.000001); //> 77
```

It will not change a whole integer, however.

```js
Math.ceil(76); //> 76
```

### .floor()

The `Math.floor()` method gets the _floor_, or lowest value from a number with decimal values.

```js
Math.floor(76.1); //> 76
Math.floor(76.9); //> 76
Math.floor(76.9999999); //> 76
```

It will not change a whole integer, however.

```js
Math.ceil(76); //> 76
```

### .round()

The `Math.round()` function will round a number to the nearest integer.

```js
Math.round(76.1); //> 76
Math.round(76.5); //> 77
Math.round(76.9); //> 77
```

It will not change a whole integer.

```js
Math.round(76); //> 76
```

### .max()

The `Math.max()` method takes in any amount of numbers and returns the highest one.

```js
Math.max(10, -1, 76, 11); //> 76
```

If a non-number is entered, it will return `NaN`.

```js
Math.max(10, "A"); //> NaN
```

### .min()

The `Math.min()` method takes in any amount of numbers and returns the lowest one.

```js
Math.min(10, -1, 76, 11); //> -1
```

If a non-number is entered, it will return `NaN`.

```js
Math.min(10, "A"); //> NaN
```

### .random()

The `Math.random()` number returns a random value between 0 and 1.

```js
Math.random(); //> 0.01014371907929501
Math.random(); //> 0.2324566433984696
```

This can seem kind of useless at first. But, combined with some other methods, it can return a random number between any value.

```
Math.<METHOD>(Math.random() * <VALUE RANGE>)
```

For example:

```js
//> Random value between 0 and 99;
Math.floor(Math.random() * 100);

//> Random value between 1 and 100;
Math.ceil(Math.random() * 100);

//> Random value between 0 and 9;
Math.floor(Math.random() * 10);

//> Random value between 1 and 4;
Math.ceil(Math.random() * 4);
```

## Object

Because objects contain no inherent order, looping through or evaluating objects can be tricky. The following methods let you transform some object information into arrays.

### .values()

The `Object.values()` method returns an array of all the values of the given object.

```js
Object.values({ heads: 10, tails: 9 });
//> [ 10, 9 ];
```

It only returns the values at the first level.

```js
Object.values({
  flips: {
    heads: 10,
    tails: 9,
  },
}); //> [ { heads: 10, tails: 9 } ]
```

### .keys()

The `Object.keys()` method returns an array of all the keys of the given object, as strings.

```js
Object.keys({ heads: 10, tails: 9 });
//> [ "heads", "tails" ];
```

It only returns the keys at the first level.

```js
Object.keys({
  flips: {
    heads: 10,
    tails: 9,
  },
}); //> [ "flips" ]
```

### .entries()

The `Object.entries()` method returns an array of arrays. The first element of each nested array is the key and the second element is the value.

```js
Object.entries({ heads: 10, tails: 9 });
//> [ [ 'heads', 10 ], [ 'tails', 9 ] ]
```

It only returns the entries at the first level.

```js
Object.entries({
  flips: {
    heads: 10,
    tails: 9,
  },
}); //> [ [ 'flips', { heads: 10, tails: 9 } ] ]
```

## Array

While there are a few built-in array methods that can be useful in certain situations, the most regularly useful one is `Array.isArray()`.

### .isArray()

You may have noticed that checking for an array can be tricky.

```js
[] === []; //> false
typeof []; //> 'object'
```

To check that a value is an array, you can use `Array.isArray()`.

```js
Array.isArray([]); //> true
Array.isArray(["heads", "tails"]); //> true
```
