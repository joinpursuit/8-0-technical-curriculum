# Promises

When you request data from a website, the process is called asynchronous. In the context of coding, asynchronous typically refers to two different ideas:

1. The idea that multiple processes can be happening at the same time.
2. The idea that a process can take an unknown amount of time.

In this lesson, you'll learn one of the most popular ways JavaScript handles asynchronous code: promises. By the end of this lesson, you'll be able to describe the purpose behind using promises as well as identify some key characteristics of promises.

## Learning objectives

By the end of this lesson you should be able to:

- Identify the purpose of promises.
- Distinguish between the three states of promises.

---

## Asynchronous code

JavaScript code is, by default, asynchronous. That means that the code runs in the order it is read and _does not necessarily stop_ for certain lines of code.

Up until this point, you have likely not encountered noticeably asynchronous code, so you will not have noticed this is the case. JavaScript does have a few built-in methods that can help demonstrate this functionality.

### setTimeout()

The `setTimeout()` function takes two arguments: a callback and a number of milliseconds. The callback function will be called after that number of milliseconds has passed.

```js
setTimeout(() => {
  console.log("This will be logged after about 1 second.");
}, 1000); // After one second.
```

Keep in mind that `setTimeout()` is also a function. That means the order of operation is as follows:

1. The `setTimeout()` function is called.
1. ~1000 milliseconds passes.
1. The callback function is called.

This may seem like it makes plenty of sense, but take a look at the code below. What do you think will log out and in what order?

```js
console.log("Ready?");

setTimeout(() => {
  console.log("Set!?");
}, 1000); // After one second.

console.log("Go!");
```

Have you taken your guess? Here is what will be logged:

```
Ready?
Go!
Set!?
```

Why is this the case? Well, the order of operations for the code above is as follows:

1. Log `Ready?`.
1. Call the `setTimeout()` function.
1. Log `Go!`.
1. ~1000 milliseconds passes.
1. The callback function is called, logging out `Set!?`.

JavaScript read and executes each line of code in order however _it does not stop executing code when it reaches the `setTimeout()` function._ This is what is meant by asynchronous code. JavaScript will continue on in the program even if other operations are happening in parallel or coming at a later time.

### Why is some code asynchronous?

There is much more, in general, that could be said about this topic. For this lesson, it's important to keep in mind that some code is asynchronous and it therefore will not run in the exact order you've placed it.

But you may be wondering why some code is asynchronous at all? While there are a few different "right" answers to this question, recall that JavaScript was first designed to allow for user interaction. If JavaScript was synchronous, it would need to halt all execution on the page until a certain function was done.

For example, imagine `setTimeout()` was used to provide some kind of animation. If the code was synchronous, the user would have to wait for that animation to finish before they could interact with the browser. This would lead to a frustrating user experience. It's much better for the user to be able to click around on the site _while the animation_ is occurring.

In general animations, anything to do with transferring files, and API calls are asynchronous. Because working with asynchronous code can be tricky, developers have figured out all kinds of ways to handle it. One of the most popular in JavaScript is promises.

## Promises

Promises are objects representing the _eventual_ completion or failure of some asynchronous operation. You can imagine a promise as an object that wraps up asynchronous code inside of it.

It is possible to build your own promises. They generally look like the following:

```js
const promise = new Promise((resolve, reject) => {
  // Some asynchronous operation...
});
```

However, it's much more typical that you'll use a promise because a particular library or tool will return one. If you log out a promise, it might look like the code below.

```js
const result = mysteryFunction();
console.log(result); //> Promise { <pending> }
```

While you may not be sure as to what's happening inside of the `mysteryFunction()`, you can see that what it has returned is a promise.

### Internal value

Imagine the function below will return an even number, but it will do so asynchronously.

```js
const result = getRandomEvenNumber();
console.log(result); //> Promise { <pending> }
```

The `result` variable _is not_ an even number -- it's a promise. So where is the even number?

A promise "promises" that it will finish running the code _at some point._ This means that captured inside of the promise is the actual result of the promise. When the promise has finished running, or a failure has occurred, it will provide the relevant information. Only after this can you access the internal value of the promise. Additionally, you can only access that value in special ways.

### Promise states

Promises have three possible states.

| Name      | Description                                                                     |
| --------- | ------------------------------------------------------------------------------- |
| Pending   | This means that the promise is still in the process of getting its final value. |
| Fulfilled | This means the process ran successfully.                                        |
| Rejected  | This means something failed within the promise or some other issue occurred.    |

You will have access to _some internal value_ from the Promise when it reaches either the "fulfilled" or "rejected" state. However, you cannot peek inside of the promise before that time.

### .then() and .catch()

You can access values from inside the promise with the `.then()` and `.catch()` method. `.then()` is to be used to capture values when promises are fulfilled while `.catch()` is to be used to capture values when promises are rejected. Both methods are higher order functions, in that they take a callback function as their main argument. Those callback functions are invoked when the promise's state changes. The parameter for each of those functions is whatever the result is of the asynchronous code.

For example, assume the `getParticipantAtPosition()` function takes a single argument, a number, and returns a promise. If the argument given is the number `1` or greater, it will return the name of a person who ran a race, at that position. If the argument given is the number `0` or less, or is not a number, it will throw an error message.

In the code below, a person's name will be logged with an accompanying message. Because the code successfully ran, the callback function given to `.catch()` will never run.

```js
const position = 5;
getParticipantAtPosition(position)
  .then((name) => {
    // `name` will be the person in 5th place.
    console.log(name);
  })
  .catch((error) => {
    console.log(`ERROR: ${error}`);
  });
```

In the code below, an error message will be surfaced. Because the code failed, the callback function given to `.then()` will never run.

```js
const position = -1;
getParticipantAtPosition(position)
  .then((name) => {
    console.log(name);
  })
  .catch((error) => {
    // `error` will be a message determined by the `getParticipantAtPosition()` function.
    console.log(`ERROR: ${error}`);
  });
```

For another example, take a look at the following repl. Try playing around with the code inside of `index.js` to see how you can manipulate the results.

- [Promises: Magic 8-Ball](https://replit.com/@Pursuit/Promises-Magic-8-Ball#index.js)

## A tricky situation

Working with asynchronous code can be really difficult to wrap your head around. Take a look at the following code and make a guess as to what you think will be logged out. Assume the `getParticipantAtPosition()` function returns a promise, as previously described.

```js
const position = 3;
let thirdPlace = null;
getParticipantAtPosition(position)
  .then((name) => {
    thirdPlace = name;
  })
  .catch((error) => {
    console.log(`ERROR: ${error}`);
  });

console.log(`${thirdPlace} came in third place!`);
```

Did you take a few minutes to try and anticipate the result? Take a look below for the answer:

```
null came in third place!
```

Why didn't the `thirdPlace` variable get reassigned? Remember that this code is asynchronous; that means that the `getParticipantAtPosition()` function will be invoked where it is written _but it will likely not be done_ by the time the `console.log()` statement at the very end is called.

In order for this code to work as expected, you will need to move the `console.log()` statement inside of the `.then()` method.

```js
const position = 3;
let thirdPlace = null;
getParticipantAtPosition(position)
  .then((name) => {
    thirdPlace = name;
    console.log(`${thirdPlace} came in third place!`);
  })
  .catch((error) => {
    console.log(`ERROR: ${error}`);
  });
```

When using promises with `.then()` and `.catch()`, you will often want to use the value returned from the promise. All code that depends on that return value must be invoked _inside of the callback function._
