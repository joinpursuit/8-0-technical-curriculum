# Arrays Lesson

JavaScript arrays are used to store multiple values in a single variable.

## Learning Objectives

- Know how to add and remove elements in an array.
  - `push`
  - `pop`
  - `unshift`
  - `shift`

## Prerequisites

- Values and types

---

# Built-In Methods

The following are useful methods that come with arrays that let us manipulate them.

### Push

We can add elements to the end of an array by using the `push` method

```js
let numbers = [2, 4, 6];
// adding the number 8
numbers.push(8);
// now numbers will be: [2, 4, 6, 8]
// you can also add multiple elements by adding more arguments to push.
numbers.push(10, 12, 14);
// now numbers will be: [2, 4, 6, 8, 10, 12, 14]
```

### Pop

We can remove an element from the end of an array by using the `pop` method:

```js
let numbers = [2, 4, 6];
// removing the last element in the  array
let removedNum = numbers.pop();
// now array will be: [2, 4]
// and removedNum will be 6.
```

### Unshift

To add an element to the beginning of the array use the method: `unshift`.

```js
let numbers = [3, 5];
numbers.unshift(1);
// numbers is now: [1, 3, 5]
```

### Shift

To remove an element from the beginning of the array use the method: `shift`.

```js
let numbers = [3, 5];
let removedNum = numbers.shift();
// numbers is now: [5]
// removedNum is 3
```

**Helpful trick**
Sometimes it can be hard to remember which methods do what. Here's a helpful trick. Push and pop are fairly easy. Pushing into the array, and popping off. Now with shift and unshift try and remember that unshift is like push but at the beginning. You can **tell** they are similar because they both have the letter 'u' in them. The ones with the 'u' add to the array, the other two are for removing.

### Join: Array --> String

Arrays can be converted to strings by using the [`join`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) method. This method does not change the array,
instead it **returns** a string. The string will contain the array element separated by a comma. We can also pass a separator as argument to `join`.

```js
let animals = ["cat", "dog", "llama"];

console.log(animals.join());
// will log: 'cat,dog,llama'

console.log(animals.join(""));
// will log: 'catdogllama'

console.log(animals.join(" "));
// will log: 'cat dog llama'

console.log(animals.join("$"));
// will log: 'cat$dog$llama'
```

### Split: String --> Array

Strings can be converted to arrays, by using the [`split`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) method. This method will separate the string based on the **separator** provided as an argument. For example, if our string is `'hello world'` and we provide a single space as an argument, we will get an array with two elements: `'hello'` and `'world'`:

```js
let str = "hello world";
let arr = str.split(" ");
// arr will be ['hello', 'world']
```

If we provide an empty string as an argument to `split`, we will get an array with as many elements as there are characters in the string.

```js
let str = "hello";
let arr = str.split("");
// arr will be: ['h','e','l','l','o']
```

You can also split on characters.

```js
let str = "hello world";
let arr = str.split("o");
// arr will be [ 'hell', ' w', 'rld' ]
```

### Slice

Arrays have a [`slice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) method that works by taking a slice of the array. The method takes in two arguments. The first is the starting index (inclusive), the second argument is the ending index (exclusive).

```js
let arr = [4, 6, 8, 10, 12];
// getting [6, 8, 10]. arr will still be the same.
let sliceOfArr = arr.slice(1, 4);
```

If no second argument is provided, the array will be sliced from the first argument to the end of the array.

### Splice

Let's talk about [`splice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice). This method takes a starting index as an argument and removes all array elements starting from that index.

```js
let arr = ["dog", "cat", "mouse"];
let spliced = arr.splice(1);
// arr contains ['dog']
// spliced contains ['cat', 'mouse']
```

We can specify a _delete count_ as a second argument:

```js
let arr = ["dog", "cat", "mouse"];
arr.splice(1, 1);
// arr contains ['dog', 'mouse']
```

Any additional arguments to `splice` (after the first two) will be inserted into the array in place of the deleted ones.

```js
let arr = ["dog", "cat", "mouse", "giraffe"];
// removing 'cat' and 'mouse' and inserting 'fish'
arr.splice(1, 2, "fish");
// arr contains ['dog', 'fish', 'giraffe']
```

`splice` **returns** an array containing the elements that were removed. The modification happens on the array that the method was called from.

### Concat

Concat is a method that joins two arrays.

```js
let a = [1, 2, 3];
let b = [4, 5, 6];
console.log(a.concat(b)); // [1, 2, 3, 4, 5, 6]
console.log(a); // [1, 2, 3]
console.log(b); // [4, 5, 6]
```
