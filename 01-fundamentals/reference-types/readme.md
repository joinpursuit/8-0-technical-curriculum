# Reference Types

Recall that earlier on you heard about primitive types. In particular, you learned about five different primitive types in JavaScript you would use often: undefined, null, string, number, and boolean. Notice that list excludes objects.

In this lesson, you'll learn about reference types. Reference types are very different than primitive types in a few important ways. By the end of this lesson you'll be able to distinguish between the two types and learn about destructive and non-destructive methods.

## Learning Objectives

By the end of this lesson you should be able to:

- Differentiate between primitive and reference types.
- Mentally evaluate code blocks that use primitive and reference types.
- Differentiate between destructive and non-destructive methods.

---

## Primitive vs reference types

Primitive types include the following data types: undefined, null, string, number, boolean, bigint, and symbol. All other data types are reference types. This includes objects and arrays, as well as functions, maps, sets, and more.

Primitive and reference types differ in that primitive types are _immutable_ while reference types are _mutable._ This means that primitive types, once created, cannot be changed although they can be copied. Reference types, on the other hand, _can be changed._ You will see many examples of what this means below.

### Everything is an object?

In reading about JavaScript, you may have heard the phrase "everything in JavaScript is an object." This comment is incorrect, but speaks to a legitimate confusion developers new to JavaScript experience when trying to understand data types in JavaScript.

For example, take a look at the code below. After each expression is what that expression would evaluate to. Does anything surprise you?

```js
typeof "string"; //> 'string'
typeof undefined; //> 'undefined'
typeof null; //> 'object'
typeof {}; //> 'object'
typeof []; //> 'object'
typeof function myFunction() {}; //> 'function'
```

On its face, it doesn't make much sense that `null` returns `'object'` when it is a primitive type. Just as confusing is that an array returns `'object'`. And while it makes sense that the function returns `'function'`, a function is in fact a special kind of object!

It is not worthwhile to get too bogged down in the reasons behind the code above at this point. Instead, keep in mind that:

- Anything that _is not_ an explicit primitive type in JavaScript is a reference type. That includes objects, arrays, and functions.
- `typeof` _is not_ a good way to determine whether or not something is a primitive or reference type.

### Passing values

Read through the code below. What do you expect will be logged to the console?

```js
let isSunny = true;
let isHappy = isSunny;

console.log(isHappy);

isSunny = false;

console.log(isHappy);
```

The first `console.log()` statement likely wasn't too tricky. In this case, `isSunny` evaluates to `true` which is then assigned to `isHappy`. This means that when `isHappy` is logged, it's value is `true`.

But, what about the second case? Does changing `isSunny` change the value of `isHappy`? No, it does not. This is because `true` and `false` are booleans, which are primitive types. When passing a primitive type from one variable to another, a copy is made. That means _there is no connection between variables that store the same primitive type._

### Passing references

Read through the code below. What do you expect will be logged to the console?

```js
let luciano = { isHappy: true };
let hollie = luciano;

console.log(hollie);

luciano.isHappy = false;

console.log(hollie);
```

Similar to before, the first `console.log()` statement likely wasn't too tricky. Both `luciano` and `hollie`, when logged, will look like the same object with a key of `isHappy` and a value of `true`.

However, the second case is trickier. When passing a reference type from one variable to another, a copy _is not made._ Instead, the reference itself is passed. That means that `luciano` and `hollie` _share a connection to the same object._

This means that when setting `luciano.isHappy` to `false`, the object that is referenced by both `luciano` and `hollie` is changed.

This same effect happens with arrays, since arrays are also primitive types.

```js
let lucianoHobbies = [];
let hollieHobbies = lucianoHobbies;

lucianoHobbies.push("drawing", "coding", "playing piano");
hollieHobbies.push("skateboarding", "cooking", "coding");

console.log(lucianoHobbies);
/*
  [
    'drawing',
    'coding',
    'playing piano',
    'skateboarding',
    'cooking',
    'coding'
  ]
*/
```

In the code above, `lucianoHobbies` and `hollieHobbies` share the same array. This means when values are added to them with `.push()`, it updates the shared array. Therefore, all of Hollie's hobbies are pushed into Luciano's hobby list.

### Variable declarations

Recall that declaring variables with `const` protects that variable named from being _assigned_ again. This is different than protecting the stored value from changing at all.

This means you can use `const` to assign reference types and update them however you want.

```js
const hobbies = ["drawing", "coding", "playing piano"];
hobbies.push("running");
console.log(hobbies); //> ['drawing', 'coding', 'playing piano', 'running']
```

There is no problem with the code above because there is no assignment that is happening after the `hobbies` variable is first declared.

### Equality

The difference between primitive and reference types also explains why the following code acts the way it does.

```js
console.log("happy" === "happy"); //> true
console.log(["happy"] === ["happy"]); //> false
console.log({ isHappy: true } === { isHappy: true }); //> false

const luciano = { isHappy: true };
const hollie = luciano;
console.log(luciano === hollie); //> true
```

Primitive types are compared based on their values. That is, two new strings were created in the first line, each with the value of `"happy"`. In order to compare these two for equality, their actual values are compared.

Reference types, however, are compared based on their reference. In the second and third line of the code above, two new arrays and objects are created. Those arrays and objects are _different from one another_ as they each have their own reference. Therefore, they are not equal to one another despite having the same contents.

In contrast, the object stored inside of the `luciano` and `hollie` variables are the _exact same object._ That means, when comparing them, the value returned is `true`.

## Destructive vs Non-destructive operations

Destructive operations are those operations which mutate the underlying reference type on which they are called. A destructive method doesn't have to "delete" a value for it to be destructive. In contrast, non-destructive operations _do not_ mutate the underlying reference.

All methods called on primitive types (e.g. `"happy".toUpperCase()`) are non-destructive. Instead, they return a new value based on the method called. However, the underlying primitive type stays the same.

However, arrays do have methods that can update the underlying array as well as other methods which do not. Objects also have access to the `delete` operator which can delete a key-value pair.

### Basic array mutations

Methods like `.push()`, `.pop()`, `.shift()`, and `.unshift()` are all destructive methods in that they modify the array.

```js
const lucianoHobbies = ["drawing", "coding", "playing piano"];
const hollieHobbies = lucianoHobbies;

lucianoHobbies.pop();
console.log(lucianoHobbies); //> [ 'drawing', 'coding' ]
console.log(hollieHobbies); //> [ 'drawing', 'coding' ]
```

Any change made with bracket notation is also destructive in that it changes the underlying array.

```js
const lucianoHobbies = ["drawing", "coding", "playing piano"];
const hollieHobbies = lucianoHobbies;

lucianoHobbies[0] = "running";
console.log(lucianoHobbies); //> [ 'running', 'coding', 'playing piano' ]
console.log(hollieHobbies); //> [ 'running', 'coding', 'playing piano' ]
```

### .concat()

The `.concat()` method is a useful way of joining one or more arrays together. It is a non-destructive method.

```js
const lucianoHobbies = ["drawing", "coding", "playing piano"];
const hollieHobbies = ["skateboarding", "cooking", "coding"];

const allHobbies = lucianoHobbies.concat(hollieHobbies);

console.log(lucianoHobbies); //> [ 'drawing', 'coding', 'playing piano' ]
console.log(hollieHobbies); //> [ 'skateboarding', 'cooking', 'coding' ]
console.log(allHobbies);
/*
  [
    'drawing',
    'coding',
    'playing piano',
    'skateboarding',
    'cooking',
    'coding',
  ]
/*
```

As you can see in the example above, `lucianoHobbies` and `hollieHobbies` stay the same. Instead, `.concat()` returns a new array with all of their hobbies combined. If not assigned to a variable like `allHobbies`, the return value of `.concat()` would be lost.

### .splice() vs .slice()

Both `.splice()` and `.slice()` can split apart an array into separate chunks. However, these poorly named methods are different in how they're called and whether or not they are destructive.

The `.splice()` method is a destructive method that changes the contents of an array. It works by first picking a starting index and then a number of elements to remove from the original array, starting from the given index. The return value is a _new array_ with the removed elements.

```js
const lucianoHobbies = [
  "drawing",
  "coding",
  "playing piano",
  "running",
  "cooking",
];

// At index 3, remove 1 element and move to a new array.
const exerciseHobbies = lucianoHobbies.splice(3, 1);

console.log(lucianoHobbies); //> [ 'drawing', 'coding', 'playing piano', 'cooking' ]
console.log(exerciseHobbies); //> [ 'running' ]
```

As you can see from the example above, the `.splice()` method has changed `lucianoHobbies` and created a new array with the removed element. The `.splice()` method can also insert elements into the middle of an array. More about the `.splice()` method can be found at the link below.

- [MDN: .splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

The `.slice()` method is a non-destructive method that creates a new array that is a subsection of the original array. It is given the start and end indexes. It's important to note that the end index is _exclusive_, meaning it will not include the element at that index in the array.

```js
const hollieHobbies = [
  "skateboarding",
  "cooking",
  "coding",
  "building computers",
  "gardening",
];
const technicalHobbies = hollieHobbies.slice(2, 4);

console.log(hollieHobbies);
/*
  [
    'skateboarding',
    'cooking',
    'coding',
    'building computers',
    'gardening'
  ]
*/
console.log(technicalHobbies); //> [ 'coding', 'building computers' ]
```

As you can see in the example above, the `hollieHobbies` array is unchanged. A new array was created and stored inside of `technicalHobbies` that includes some of the same contents of the original array. The `.slice()` method has a few other features in addition to the above. More about the `.slice()` method can be found at the link below.

- [MDN: .slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

### delete

The `delete` operation will remove a key-value pair from an object. This operation is destructive.

```js
const luciano = {
  isHappy: true,
};
const hollie = luciano;

delete luciano.isHappy;

console.log(luciano); //> {}
console.log(hollie); //> {}
```
