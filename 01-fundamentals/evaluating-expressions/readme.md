# Evaluating Expressions

Recall that there is a difference in JavaScript between statements and expressions. A statement is instructional code that cannot be assigned or stored to a variable. For example, `if` statements cannot be assigned to a variable whereas a ternary expression can.

For many expressions, it is clear what will be returned from them. However, there are some tricky scenarios it's important to keep in mind when using the returned value of an expression. In this short lesson, you'll learn about a few surprising expressions as well as how to think about accessing deeply nested values.

## Learning Objectives

By the end of this lesson you should be able to:

- Describe what it means for an expression to return a value.
- Identify the evaluated values of common methods.
- Access deeply nested values within arrays and objects.

---

## Return values

Expressions are code that returns a value. For example, the following code returns a number.

```js
15 + 30;
```

Expressions are important because they can be assigned to variables. This allows you to use those values at other points in your code. In the example below, the value of `45` will be stored in the `result` variable.

```js
let result = 15 + 30;
```

### Unexpected return values

Some expressions may surprise you with their return values. For example, take a look at the following code. What do you think will be logged?

```js
const soda = ["Sprite", "Pepsi"];
console.log((soda[2] = "Dr. Pepper"));
```

The above is an odd situation. As opposed to logging `soda[2]`, the assignment of `"Dr. Pepper"` to `soda[2]` is being logged. If you run this code, you'll receive the result `"Dr. Pepper"`.

This may feel a bit strange, as you may not think of assignment as something that needs a return value. Even stranger, this can lead to the following code which is indeed valid.

```js
const soda = ["Sprite", "Pepsi"];
const drPepper = (soda[2] = "Dr. Pepper");
```

In the code above, `"Dr. Pepper"` will be stored in the `drPepper` variable. Additionally, `soda[2]` will point to the string `"Dr. Pepper"`.

Why does any of this matter? Well, in this specific case, it explains a common error that can occur when learning JavaScript. The following code will log the message. Based on what you've learned, can you think of why?

```js
const soda = ["Sprite", "Pepsi"];
if ((soda[soda.length - 1] = "Dr. Pepper")) {
  console.log("Dr. Pepper is the last item in the list.");
}
```

The expression inside of the `if` statement will evaluate to `"Dr. Pepper"`, which is a truthy value, which will lead to the text being logged. The coder who wrote the code above probably meant to use `===` instead of `=`. However, this mistake doesn't lead to an error but instead an unexpected result.

In the following sections, you'll learn about other surprising return values. While it's not crucial to memorize all of these situations, do keep them in mind as your code becomes more complex.

## Common methods and their return values

The examples below showcase some common unexpected values that may occur.

### Incrementing and decrementing

Using `++` and `--`, you can manipulate a variable that is storing a number by incrementing or decrementing the value by 1. Using this syntax however results in an expression that returns the _previous value._ This can sometimes surprise coders new to JavaScript.

```js
let sodaCount = 3;
let result = sodaCount++;
console.log(sodaCount); //> 4
console.log(result); //> 3
```

There is an alternate syntax that does increase the value stored in the variable _and_ return the new value. Instead of including the operators after the variable, you can include it before.

```js
let sodaCount = 3;
let result = --sodaCount;
console.log(sodaCount); //> 2
console.log(result); //> 2
```

### Common array methods

`.push()` and `.unshift()` both return the new length of the array whereas `.pop()` and `.shift()` return the value that was removed.

```js
const soda = ["Sprite", "Pepsi"];
console.log(soda.push("Coca-Cola")); //> 3
console.log(soda.shift()); //> "Sprite"
```

Capturing the return value of `.pop()` and `.shift()` can be particularly useful.

```js
function removeLastSoda(sodas) {
  const removed = sodas.pop();
  console.log(`${removed} was removed from the list.`);
  return sodas;
}
```

## Nested values

While not unexpected, it can at times be difficult to understand how to access values deeply nested inside of an array or object. For example, take a look at the following data structure.

```js
const sodas = [
  {
    name: "Dr. Pepper",
    rating: 3,
  },
  {
    name: "Sprite",
    rating: 4,
  },
];
```

The above `sodas` variable points to an array of objects. Each object has two keys: `name` and `rating`. With that in mind, how would you access the string `"Sprite"` with the code above?

To solve this problem, you will need to think critically about what data type you're accessing and what it returns. For example, take a look at the code below, which uses the `sodas` variable above.

```js
let sprite = sodas[1];
```

What data type is the `sprite` variable? Even though the `sodas` variable is complicated, remember that when you access a value inside of an array you receive an element. Each element in the `sodas` array is an object. So, `sodas[1]` returns the second object in the array.

You can then continue to "drill down" into the object to get the `"Sprite"` string.

```js
let sprite = sodas[1];
let name = sprite.name;
```

The `name` variable is assigned to the value associated with the `name` key from the `sprite` object. That value is the string.

This code could be written another way as well.

```js
let name = sodas[1].name;
```

The code above will also assign the string value of `"Sprite"` to the `name` variable. The first step is to access the object, through `sodas[1]`. The next step is to access the `name` key inside of the object that is returned by `sodas[1]`.

To mentally evaluate this code, consider replacing `sodas[1]` with the object in your mind. Then, apply the same logic to calling the `.name` property on the returned object.

```
sodas[1] -> { name: "Sprite", rating: 4 }
{ name: "Sprite", rating: 4 }.name -> "Sprite"
```

Accessing deeply nested values in this way is very common in programming. Understanding what data type is being returned can be hugely beneficial when common across problems like these. It's worth it to begin practicing accessing these values.

## Interpolated keys

With objects, it's possible to use a variable to access values in the same way you would a key.

```js
const sodas = [
  {
    name: "Dr. Pepper",
    rating: 3,
  },
  {
    name: "Sprite",
    rating: 4,
  },
];
const key = "name";
console.log(sodas[0][key]); //> "Dr. Pepper"
```

In the code above, the following is happening:

1. The `sodas` array is accessed at index `0`. This returns an object.
1. The object is accessed at a particular key. The key is whatever is stored in the `key` variable.
1. The return value is the string that is stored inside of the object at the `name` key.

The code above can be confusing, so it may be better to write it like the example below.

```js
const drPepper = sodas[0];
const name = drPepper[key];
console.log(name);
```

### Interpolated keys and dot notation

You may be tempted to use dot notation with variable names, but this will not work!

```js
const sodas = [
  {
    name: "Dr. Pepper",
    rating: 3,
  },
  {
    name: "Sprite",
    rating: 4,
  },
];
const key = "name";
console.log(sodas[0].key); //> undefined
```

Why did the code above log `undefined`. JavaScript doesn't know that, in this situation, the intention is for `.key` to become `.name`. Instead, it looks for a literal key of `key` on the object that is returned from `sodas[0]`.

In order for key interpolation to happen correctly, you will _need_ to use square brackets. This is because whatever is between the square brackets is an expression that is evaluated _before_ the accessing happens.
