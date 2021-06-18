[![Pursuit Logo](https://avatars1.githubusercontent.com/u/5825944?s=200&v=4)](https://pursuit.org)

# Functions & Scope

Functions are a fundamental part of any programming language. This lesson will cover function syntax, usage, and some mechanics.

## Goals

- Have an understanding of scope and variables inside and outside of functions

## Vocabulary

- Global variable scope
- Parameters & Arguments
- Local variable scope (function scope)

## Scope

To understand scope, we have to start thinking about _where variables are accessible_ and where they're not.

So far we've only dealt with what's called `global scope`, where every variable is accessible from everywhere. Now that we're working with functions, we can start to think of scope as a sort of hierarchy.

```js
let parting = "gooodbye";

function hello() {
  let greeting = "hello";
  console.log(greeting); // => "hello"
  console.log(parting); // => "goodbye"
}

console.log(greeting); // ReferenceError: greeting is not defined
console.log(parting); // => "goodbye"
```

The key takeaway here is that variables declared in a function are only accessible inside that function. Variables declared outside a function are called `global` and they can be accessed and modified from any function.

A variable declared inside a function has _local scope_, and a variable not declared inside a function has _global scope_. So a variable with local scope is only available inside that function. A variable with global scope is available inside or outside the function.

If we create a variable inside a function with the same name as a global variable - the function will only be aware of the local one. This, however, will not change the value of the global variable.

```js
let greeting = "hello";

function hello() {
  let greeting = "what's up?";
  console.log(greeting); // => "what's up?"
}

console.log(greeting); // => "hello"
```

If we have a function inside of a function, the rules still apply, but now we have more than just two scopes.

```js
let global = "hello global";

function firstLevel() {
  let first = "hello first";
  console.log(first); // => "hello first"
  console.log(global); // => "hello global"

  function secondLevel() {
    let second = "hello second";
    console.log(first); // => "hello first"
    console.log(second); // => "hello second"
    console.log(global); // => "hello global"
  }

  console.log(second); // => ReferenceError: second is not defined
}

console.log(global); // => "hello global"
console.log(first); // => ReferenceError: first is not defined
console.log(second); // => ReferenceError: second is not defined
```

## Scope and parameters

When a function has parameters, it's helpful to think about them like temporary variables that only exist inside the function.

Let's say we have a function with two parameters. When we **call** the function, we have to provide that function with two values. Then we can access those values inside the function.

```js
// declare the function with two parameters
function iHaveParams(num, str) {
  console.log(num, str);
}

// call the function, pass in some values
iHaveParams(22, "why"); // => 22, why

// num and str are not accessible outside the function
console.log(num, str); // ReferenceError
```

This is very valuable! We often use functions to contain our scope, so we don't accidentally affect variables outside of it.
