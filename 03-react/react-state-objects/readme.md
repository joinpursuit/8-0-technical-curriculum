# React State: Arrays

State is a core concept and feature of React. Learning to work with state in React takes practice. When you copy arrays and objects, you must be mindful to copy them properly, update the values and then update state. If you don't make a copy, you will end up manipulating state directly, which will not allow React to update properly.

## Objectives

- Review passed by reference
- Manipulate arrays to update state properly

## Passed by reference

Unlike strings, numbers and booleans, arrays are passed by reference. That means that when you set an array to a value, it is stored in a specific place in menu. If you try to assign the array to a new variable, it will still point to the original array.

Let's look at an example:

```js
const someNums = [10, 20, 30, 40];

const reverseSomeNums = someNums.reverse();

console.log("reverse someNums", reverseSomeNums);
console.log("someNums", someNums);
```

Even though `someNums` was assigned to a new variable `reverseSomeNums`, when the array was reversed, it also reversed the `someNums`. That's because `reverseSomeNums` is not a new array. It just points to the original array.

## Copying an Array

To make a shallow copy of an array, you can use the spread operator.

```js
const someNumsAgain = [10, 20, 30, 40];

// Make a copy using the spread operator

const copySomeNumsAgain = [...someNumsAgain]

copySomeNumsAgain.reverse()

console.log('Some nums again',  someNumsAgain)
console.log('Copied some nums again,copySomeNumsAgain)


```

## Shallow copies

Shallow copies means one level deep. `someNums` is an example of an array that is one level deep.

Here is an array that has more levels:

```js
[
  {
    name: "Fido",
    toys: [
      { name: "bone", monthsOld: 0.2 },
      { name: "ball", monthsOld: 6 },
      { name: "squeaky toy", monthsOld: 1 },
    ],
  },
];
```

Try to change the name of the first tody:

```js
const dog = [
  {
    name: "Fido",
    toys: [
      { name: "bone", monthsOld: 0.2 },
      { name: "ball", monthsOld: 6 },
      { name: "squeaky toy", monthsOld: 1 },
    ],
  },
];

const newFido = [...dog];

newFido[0].toys[0].name = "Super-sized bone";

console.log(dog[0].toys);
```

As you can see, the first toy name of the original array has been changed as well.

There are a few strategies to deal with this issue.

- Create logic that allows you to target the things you are trying to update properly
- Turn the object into a string using `JSON.stringify`, copy the string, then convert it back to an (new) object
- Add a code library that has functionality for deep copying
