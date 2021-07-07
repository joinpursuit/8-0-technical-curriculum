# Common Errors

Part of the experience of being a developer is seeing and solving errors. While this doesn't feel great at first, errors are a normal part of developing software and aren't something to fear. In fact, great developers are excited when they get an error message because it means they have some information that can help them solve their problem.

In this lesson, you'll learn about some of the most common error types. Once you know these error types, it should hopefully become easier to solve them.

## Learning Objectives

By the end of this lesson you should be able to:

- Use the stacktrace to identify where an error might be occurring.
- Describe and fix syntax errors.
- Describe and fix reference errors.
- Describe and fix type errors.

---

## The stacktrace

When an error occurs, you are often shown what is called a stacktrace. This text gives you some context as to where the error occurred.

```
TypeError: console.lg is not a function
    at listCharacters (/home/runner/Warmup-Common-Error-Handling/index.js:15:13)
    at /home/runner/Warmup-Common-Error-Handling/index.js:20:1
    at Script.runInContext (vm.js:130:18)
```

In the example above, you receive the following information:

1. The error that has occurred is a `TypeError`.
1. The problem is that `console.lg` is not a function.
1. Below that, you can see that the error occurred "at listCharacters." This will typically reference a function or process, meaning `listCharacters()` is probably a function.
1. You also receive a file, line number, and character position telling you where the error occurred. In this case, the error is occurring in the `index.js` file on line 15. The error starts around the 13th character from the left.

You will learn more about the concepts of "stacks" at a later time. At this point, the most important takeaway is to actually look at the error. When first starting to code, it can be easy to just see red and ignore the output. However, these errors often have a lot of useful information.

## Syntax errors

Syntax errors occur when the code you've written is not syntactically correct. For example, the code below would cause a syntax error. Can you see why?

```js
const game = {
  name: "Super Mario Galaxy",
  developers: ["Nintendo", "MORE"],
  rating: 4.8,
};
console.log(game.rating
//> SyntaxError: missing ) after argument list
```

In this case, the `SyntaxError` is quite helpful in that it's pointing out that there is a closing parenthetical missing from the `console.log()` statement.

Syntax errors aren't always this simple, unfortunately. The following code also produces a `SyntaxError`. Can you see the problem?

```js
const game = {
  name: "Super Mario Galaxy",
  developers: ["Nintendo", "MORE"],
  rating: 4.8,
};
if (game.rating > 4.5)
  console.log(`${game.name} is a great game!`);
}
//> SyntaxError: Unexpected token '}'
```

You may be surprised to see that the unexpected token is the closing curly brace instead of a missing opening one. That's because you actually can write an `if` statement without curly braces. Therefore, JavaScript is more surprised to see the closing brace.

Syntax errors mean that something you've written cannot be parsed by JavaScript. When you come across a `SyntaxError`, look at your code closely to see what's been mistyped.

## Reference errors

A `ReferenceError` occurs when you are attempting to make a reference to some variable that does not exist. Can you spot the problem in the code below?

```js
function getRatingDescription(game, maxRating) {
  return `${game.name}: ${game.rating} out of ${maxRating}.`;
}

getRatingDescrption({
  name: "Super Mario Galaxy",
  developers: ["Nintendo", "MORE"],
  rating: 4.8,
});
//> Uncaught ReferenceError: getRatingDescrption is not defined
```

When the function above is invoked, it's misspelled. The JavaScript interpreter attempts to invoke the misspelled function but finds nothing. Therefore, the error `getRatingDescrption is not defined` is printed.

Typically reference errors occur because of misspellings. However, they can also occur because of scope issues.

```js
function getDevelopers(game) {
  const result = game.developers.join(" and ");
  return result;
}

getDevelopers({
  name: "Super Mario Galaxy",
  developers: ["Nintendo", "MORE"],
  rating: 4.8,
}); //> "Nintendo and MORE"
console.log(result); //> Uncaught ReferenceError: result is not defined
```

In the example above, the `result` variable is getting logged but that variable is not within scope.

## Type errors

Type errors typically occur when attempting to call a function on the wrong data type. For example, can you spot the issue with the code below?

```js
const game = {
  name: "Super Mario Galaxy",
  developers: ["Nintendo", "MORE"],
  rating: 4.8,
};

console.log(game.developer.join(", "));
//> Uncaught TypeError: Cannot read property 'join' of undefined
```

This error message is incredibly helpful once you understand what it is saying. By `property 'join'`, the interpreter means the `join()` function. The error is saying that `undefined` does not have a `'join'` property. This means that there is no `.join()` method accessible via `undefined`. This is correct; `.join()` must be called on an array, not `undefined`.

So where is `undefined` showing up? Notice there's a small misspelling: instead of `developers`, plural, what is being logged is `developer`, singular.

If you were to access `game.developer`, the value `undefined` will be returned because no key is present in the object with that name. Calling `.join()` on `undefined` will simply not work.

```js
console.log(game.developer); //> undefined
undefined.join(); //> TypeError
```

You can also see this error by calling a method on a data type that does not have it.

```js
console.log(game.name.join(", "));
//> Uncaught TypeError: game.name.join is not a function
```

In the case above, strings do not have the `.join()` method, therefore the type error is printed.
