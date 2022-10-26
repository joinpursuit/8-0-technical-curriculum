# Component Lifecycle and useEffect

So far, you have learned how to trigger rerenders when state changes. However, there are other times you may want to trigger a rerender or prevent one from happening. For example, you may want to update state after a component loads.

## Vocabulary

- Component lifecycle
- Lifecycle methods
- Mounting onto the DOM

## Objectives

- Describe the overall lifecycle of React components, from mounting to unmounting.
- Use the `useEffect()` method to run code when a component has mounted.
- Use the dependency array inside of `useEffect()` to propagate data changes to the view.
- Use `useEffect()` to make a fetch request on component load.

# Introduction to component lifecycle

Withing a React application, components can be:

- Not yet mounted (loaded) into the DOM
- Mounted into the DOM
- Updated (while loaded in the DOM)
- Unmounted (removed) from the DOM

These different terms are used to describe the lifecycle of a component.

Every component serves the purpose of providing a view. Sometimes that view is ever-present, like a header with navigation; the header will only be mounted once on page load. For other components,the component will be loaded (mounted) onto the DOM when a user has interacted with the app (for example, a success message when a form has been submitted).

So far, you've dealt with static views, initial state, and state that has changed after user interaction. But there are still other times you may want to change state.

For example:

- Waiting until a component is fully mounted onto the DOM.
- Waiting for the state of one thing to finish updating before updating the state of another thing.

## Component did mount

If you wanted to make a third-party API call, when would you make it?

Look at the following simplified example:

```js
function App() {
  const [data, setData] = useState([]);
  function makeFetchRequest() {
    fetch("http://numbersapi.com/random/trivia?json")
      .then((response) => response.json())
      .then((response) => setData(response.text));
  }

  return (
    <div>
      <p>{data}</p>
    </div>
  );
}
```

The `makeFetchRequest` function is defined but not called. When should the function `makeFetchRequest` be called?

```js
function App() {
  const [data, setData] = useState([]);
  function makeFetchRequest() {
    fetch("http://numbersapi.com/random/trivia?json")
      .then((response) => response.json())
      .then((response) => setData(response.text));
  }

  // Call it before the return statement?
  makeFetchRequest();

  return (
    <div>
      <h2>{data}</h2>
    </div>
  );
}
```

Calling `makeFetchRequest()` before the return statement will cause an infinite loop.

It would help if you had a way to get the data one time, once the component is mounted.

With hooks, you will use a method called `useEffect()` that will get called once the component has mounted.

First, add this method to your component:

```js
import { useState, useEffect } from "react";
```

Call the function inside your component:

```js
function getData() {
  console.log("I am getting data");
}
useEffect(() => {
  getData();
});
```

## useEffect gets called after every render

By default, `useEffect()` gets called after every render. So if state changes elsewhere in the app, `useEffect()` will get called again. Sometimes this is what you want to happen. Often, this will call `useEffect()` too many times or even cause an infinite loop.

In the above example, no state changes inside of `useEffect()`, so it does not trigger rerender, and therefore `useEffect()` is only called on page load.

Let's update the example so that `useEffect()` changes state:

```js
useEffect(() => {
  makeFetchRequest();
});
```

Yikes! An infinite loop. Every time state is updated, it triggers a rerender, then `useEffect()` is called on rerender, which then updates state again, and an infinite loop is activated.

## `useEffect()` dependency array

Because of this, `useEffect()` has a second argument: an array. The array is called the dependency array. The values inside the dependency array will determine when `useEffect()` should be called. If a dependency's value changes, `useEffect()` will be called.

If you want `useEffect()` only to be called on page/component load, add an empty array as the second argument.

```js
useEffect(() => {
  makeFetchRequest();
}, []);
```

## Adding values to the dependency array

Right now, `getData` is only called on page load. If you needed to get a different data set depending on the user, you could pass in the user object to trigger another `getData` call.

```js
useEffect(() => {
  getOrderInfo();
}, [user]);
```

This may appear to work "correctly," however there is a gotcha - it is actually rerendering every single time.

The dependency array will compare the previous value of the `user` object to the current value of `user` object. But only in a shallow way. It won't compare the contents of objects or arrays. It will only compare if it is the same or a different object.

A quick review: when comparing objects, the values are not checked. Instead, JavaScript compares whether the two objects point to the same place in memory only.

```js
const oneObj = {};
const anotherObj = {};

console.log(oneObj == anotherObj); // false
```

Every time state is rerendered, a new `user` object is created, so even if the values of `user` are unchanged, it will still call `getData()`.

To only trigger an update when there is a new user, you can pass in a specific value of user that should not change, like `user.id`.

```js
useEffect(() => {
  updateColor();
}, [user.id]);
```

Further, suppose you have an array of objects. In that case, it can make more sense to figure out which value (or values) would serve as a good check (like a userId of the first user) and place that into the dependency array rather than creating complex logic to check all the values inside.

## Multiple useEffects

If you want to set state for more than one thing on page load, you must use multiple `useEffect()` functions.

If you put both functions into one `useEffect()` you will get an infinite loop:

```js
useEffect(() => {
  getOrderInfo();
  getUser();
}, [orderInfo, user]);
```

Rather, you can use `useEffect()` multiple times in the same component:

```js
useEffect(() => {
  getOrderInfo();
}, [orderInfo]);

useEffect(() => {
  getUser();
}, [user]);
```

It's also best practice to call useEffect once for every concern/feature even if you are not creating an infinite loop. [useEffect best practices, react docs](https://reactjs.org/docs/hooks-effect.html#tip-use-multiple-effects-to-separate-concerns)

## Update a value after state has changed

In some situations, you may need to update a value after state has been set.

Because JavaScript is asynchronous, `useUpdatedNewValue()` will get called before `setNewValue()` has completed:

```js
function handleOnChange(event) {
  setNewValue(event.target.value);
  useUpdatedNewValue();
}
```

`useEffect()` will also solve this issue:

```js
function handleOnChange(event) {
  setNewValue(event.target.value);
}
useEffect(() => {
  useUpdatedNewValue();
}, [newValue]);
```

## Missing dependencies

As you learn to use `useEffect()`, you will likely encounter an ESLint warning.

Warnings are not errors, and your app should still run. However, warnings are worth considering and solving since they will likely alert you to possible problems that can cause bugs and other headaches.

A missing dependency warning can have several solutions:

- Add the missing the dependency.
- Move the entire function you are calling inside `useEffect()`, if the function relies on state or props.
- Move the entire function outside of `useEffect()`, if the function does not use state or props.
- Write the function to return a value outside the component.
- Create more complex solutions like using the methods `useCallback`, `useMemo`, and `useReducer` (However, these tend to solve more complex issues than you will encounter during labs and assessments).

## Resources (optional)

The above reading is a non-exhaustive list of uses for `useEffect()`. However, they will be the most likely ones you will need during this course. For further study, read these docs and articles:

- [React Docs Hooks and useEffect](https://reactjs.org/docs/hooks-effect.html)
- [React Docs Hooks FAQ](https://reactjs.org/docs/hooks-faq.html#should-i-use-one-or-many-state-variables)
- [How to useEffect in React](https://www.robinwieruch.de/react-useeffect-hook/)
- [How to stop re-rendering lists in React](https://alexsidorenko.com/blog/react-list-rerender/)
