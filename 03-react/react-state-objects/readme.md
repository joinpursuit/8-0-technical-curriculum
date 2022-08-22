# React State: Arrays & Objects

State is a core concept and feature of React. Learning to work with state in React takes practice. It is crucial to never update state directly. Because arrays and objects are passed by reference, when you copy arrays and objects, you must be mindful to copy them properly, then update the values and then update state. If you don't make a copy, you will end up manipulating state directly, which will not allow React to update properly.

## Objectives

- Review passed by reference
- Manipulate arrays to update state properly

## Passed by reference

Unlike strings, numbers and booleans, arrays are passed by reference. That means that when you set an array to a value, it is stored in a specific place in memory. If you try to assign the array to a new variable, it will still point to the original array in the same location in memory.

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
const fido = {
  name: "Fido",
  toys: [
    { name: "bone", cost: 6 },
    { name: "ball", cost: 4 },
    { name: "squeaky toy", cost: 8 },
  ],
};
```

Try to copy and change the name of the dog and the first toy:

```js
const dog = {
  name: "Fido",
  toys: [
    { name: "bone", cost: 6 },
    { name: "ball", cost: 4 },
    { name: "squeaky toy", cost: 8 },
  ],
};
const newFido = { ...dog, name: "Fido Jr." };
// Will give same output:
// const newFido = {...dog}
// newFido.name = "Fido Jr.";

newFido.toys[0].name = "Super-sized bone";

console.log("Original dog");
console.log(dog);

console.log("=========");
console.log("new dog");
console.log(newFido);
```

Copying and then changing the top level dog name worked with destructuring. However, when updating the nested object toy, both `dog` and `newFido` had the value updated.

There are a few strategies to deal with this issue.

- Create logic that allows you to target the things you are trying to update properly.
- Turn the object into a string using `JSON.stringify`, copy the string, then convert it back to an (new) object.
- Add a code library that has functionality for deep copying.
