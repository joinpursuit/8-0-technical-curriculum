# Component Lifecycle and useEffect

By default, components rerender when state and/or props change. However, there are other times that you may want to trigger a rerender. For example:

- When a component is mounted into the DOM.
- Waiting until after another state variable has changed.

When you are using hooks, rerenders outside of state updates are handled by the method `useEffect()`.

> **Note:** Some of the examples are contrived; there are better ways to solve some of the functionality this app has (making more components, passing props), but to keep the examples simple, focused on lifecycle methods and `useEffect()` the app will have a lot of state in one component.

Today you'll be building a small app that demonstrates how the lifecycle method `useEffect()` works and how to customize when it is called.

## Learning objectives

- Describe the overall lifecycle of React components, from mounting to unmounting.
- Use effect hooks to run code when a component has mounted.
- Use the dependency array inside of effect hooks to propagate data changes to the view.
- Use `useEffect()` to make a fetch request on component load.

## Getting started

Today we'll build a Daily Home Page:

![finished build](../assets/ezgif.com-class-build.gif)

Start by forking and cloning the following repository:

- [React Hooks Lifecycle Class Build](https://github.com/joinpursuit/class-build-hooks-lifecycle/blob/main/src/App.js)

## On component mount

Be sure to import `useEffect()` into your component.

```js
// App.js
import { useState, useEffect } from "react";
```

If you want to call a function that does not update state on component mounting (in this case, on page load), use, `useEffect()`.

```js
function App() {
  function getData() {
    console.log("I am getting data");
  }
  useEffect(() => {
    getData();
  });
}
```

> **Note:** Once you have tested the above code, comment it out or remove it so that your console stays clear.

If you are updating state, but only want the function to run on mount, you must use a dependency array:

```js
useEffect(() => {
  setNumber(Math.random());
}, []);
```

- Why is the dependency array empty?
- What happens if you don't include the dependency array in this example?
- Why did the previous example not require a dependency array?

## Multiple `useEffect()` functions

There may be times where you need to load state for different variables. If you update state in the same `useEffect()` function, you can cause an infinite loop, because as one state updates, the other will be triggered to update. Once the other has updated, it will trigger the first one to update again... and again and again.

The following would cause an infinite loop:

```js
// DEMO, do not code:
useEffect(() => {
  getSomeValue();
  getAnotherValue();
}, [someValue, anotherValue]);
```

To avoid an infinite loop, you add another `useEffect()` function to handle different state changes.  

```js
// DEMO, do not code:
useEffect(() => {
  getSomeValue();
}, [someValue]);

useEffect(() => {
 getAnotherValue();
}, [anotherValue]);
```

It's also best practice to call useEffect once for every concern/feature. In the case of our Daily Home Page App, we have two concerns on page load: getting a random number and setting the day.

```js
// App.js

// On page load
useEffect(() => {
  setNumber(Math.random());
}, []);

useEffect(() => {
  setToday(days[index]);
}, []);
```

## Update state based on another state value

In this example, every time the user clicks on the `Update day` button, the day should be updated.

You can do this by passing the `index` value into the dependency array:

```js
useEffect(() => {
  setToday(days[index]);
}, [index]);
```

## Call some functionality after state has been updated

In this example, the console log will appear to be "one behind" state. This is because JavaScript is asynchronous and `console.log()` gets called before `setVibe` has completed.

```js
function handleOnChange(event) {
  setVibe(event.target.value);
  console.log(vibe);
}
```

To fix this, you can create another `useEffect()` that will have a dependency of `vibe`. In this case you must pass in `vibe` as a dependency to trigger this `useEffect()`:

```js
function handleOnChange(event) {
  setVibe(event.target.value);
}

useEffect(() => {
  console.log(vibe);
}, [vibe]);
```

> **Note:** Comment out or remove this `useEffect()` out once you've seen it in action, to keep your console clean.

## The values in the dependency array must be primitive values

Remember that when objects are compared, they are compared by checking if they point to the same position in memory, not if the values inside match:

```js
const oneObj = { foo: "bar" };
const anotherObj = { foo: "bar" };

console.log(oneObj === anotherObj); // false
```

When a component is rerendered, new objects are created every time, so the previous state objects are recreated.

In this app, the header should change color when the month changes:

```js
useEffect(() => {
  setColor(colors[index]);
}, [today]);
```

However, if you use the `today` object, the color will change every time.

Instead, you can choose a specific value in the object:

```js
useEffect(() => {
  setColor(colors[index]);
}, [today.month]);
```

Now the color of the header will only change when the month changes.

> **Note:** you will likely see an `ESLint` warning about this `useEffect()`. It will tell you to add `index` to the dependency array. If you do that, the color will change every time.

Example warning:

```
 React Hook useEffect has a missing dependency: 'index'. Either include it or remove the dependency array. You can also replace multiple useState variables with useReducer if 'setColor' needs the current value of 'index'  react-hooks/exhaustive-deps

```

This warning is usually a good one that while you have code that works, it likely is not the best way to achieve what you are looking for and further coding may lead to bugs.

Before confirming that your code is ok, review [the docs](https://reactjs.org/docs/hooks-faq.html#performance-optimizations) which recommend trying the following steps first:

- Move the entire function into `useEffect()`
- Move the function outside the component (if the function does not reference any props or state)
- Have the function return a value outside of `useEffect()`
- Use the method `useCallback()` (Learning to use this method is not needed for class or labs).

In this case, the goal is a simple demonstration of how the dependency array compares values (object versus primitive), and only rely on the value of `month`, so this ESLint warning will be ignored.

## Making a fetch request on page load

Fetch requests are the same as you've done in the previous unit. `fetch` is native to the browser and works with plain JavaScript or React.

- How did you control when a fetch request was called previously?

```js
function getFeaturedDog() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => {
      setDog(json);
    })
    .catch((err) => {
      console.log("error fetching image");
    });
}
```

To make the equivalent timing of `on page load` or `on component mount`; you would use `useEffect()`:

```js
useEffect(() => {
  getFeaturedDog();
}, []);
```

You could also call this function on user interaction:

```js
<button onClick={getFeaturedDog}>Change dog</button>
```

## Completed build

A completed build can be found [here](https://github.com/joinpursuit/class-build-hooks-lifecycle/tree/build)
