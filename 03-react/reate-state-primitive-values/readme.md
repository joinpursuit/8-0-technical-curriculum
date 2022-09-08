# React State: Primitive Values

So far, you've been using React to render components. The components may have hard-coded values, like the app's name in the header. You also rendered some data.

However, there was no way to interact with the web page. There was no way to add, update or delete the presented data. This lesson will demonstrate how to update React components when the data changes.

## Objectives

- Define state
- Explain the role of state in a React application
- Learn how to use event listeners and handlers in React
- Instantiate state in a React component

- Call set State to update State

## Vocabulary

- State
- Stateful
- Toggle

## State

React components can be stateless or stateful. So far, all the components you've built have been stateless.

A stateful component keeps track of user interactions. Since you have not added any interactivity with your app (fill out a form, click a button), there was no need to track user interactions.

Stateful components change based on user interaction. A non-coding example is a light switch. Light switches (generally) have two states: on and off. Users can turn the lights on or off when they interact with the light switch (toggle the light switch). The lights will stay in that state until the user interacts with (toggles) the light switch again.

> **Toggle** - To alternate between two (or more) different options, states or activities.

Here is a fancy switch styled by CSS that can toggle from day to night. When a user clicks on the switch, they toggle the state from day to night and back again.

![day night toggle from https://blog.prototypr.io/create-a-scenic-day-and-night-toggle-button-with-html-and-css-37a8e2532e68](./assets/day-night-toggle.gif)

## Event Listeners and Handlers

### Vanilla JavaScript Example

You must set up event listeners and handlers to interact with a web page.

Thinking back to when you used Vanilla JavaScript, you would create an element and then select it, then add an event listener/handler:

```html
<!-- HTML -->
<div>
  <button>Change to dark mode</button>
</div>
```

```js
// JavaScript
const button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log("Dark mode on!");
});
```

## React, no arguments for the event listener/handler

React follows a different pattern than Vanilla JavaScript: The event listener (click, submit, hover etc. ) goes in-line with the element that will trigger the event as a property.

If you don't need to pass any arguments to the handler, you can set up the event listener and handler like this:

```js
function App() {
  function changeMode() {
    console.log(`Color theme changed!`);
  }

  return (
    <div>
      <button onClick={changeMode}>Change to dark mode</button>
    </div>
  );
}
```

Take a moment to trace on the screen (or draw out on paper) the order of events:

- There is a click handler on the button which listens for a click event.
- The button is clicked.
- The button click calls the function `changeMode`.

In the next sections, you'll finish building out the functionality so that the state will change.

## React, arguments for the event listener/handler

In some cases, you'll need to pass an argument, but there is a gotcha:

```js
function App() {
  function changeMode(modeChoice) {
    console.log(`${modeChoice} is the best!`);
  }

  return (
    <div>
      <button onClick={changeMode("Dark mode")}>Change to dark mode</button>
    </div>
  );
}
```

This code does not work as you might expect. The function is triggered immediately, and you cannot call it again when you press the button.

To fix this, you must wrap your function inside an anonymous function. Since this arrow function is one line of code, curly braces around the code block are unnecessary.

```js
<button onClick={() => changeMode("Dark mode")}>
```

## Creating State

React has had some significant updates since it first launched. One of the major ways it changed was how to set up and change state.

The old method was with [class components](https://reactjs.org/docs/react-component.html). You will find that the React documentation has examples of both styles and if you Google, you may also find one or the other syntax in places like Stack Overflow. For class, you should only use hooks.

The new method is called **React hooks**. To use hooks, you must import the function `useState` from React.

```js
// App.js
import { useState } from "react";
```

Inside the `App` function, you must declare a variables that will hold state (data) inside of an array and set them to the `useState` function.

```js
// App.js
// Make sure you are inside the function App
function App() {
 const [mode, setMode] = useState();
```

Inside the array, you can name things whatever you want. However, a typical pattern is to call the variable something meaningful and then to name the function `setVariable`. The first array item will always be the data, and the second will always be the function to update the data.

Next, it is crucial to determine an initial state. This initial state will be the argument in the `useState` function. In this example, you can have a default string of `light` or `dark`.

```js
// App.js
// Make sure you are inside the function App
function App() {
 const [mode, setMode] = useState('light');
```

## Get the demo working (optional)

If you want to try this example, you can add some code to test it.

Add some CSS:

```css
/* index.css */
.dark,
.light {
  height: 100vh;
}
.dark {
  background-color: indigo;
  color: lightgoldenrodyellow;
}

.light {
  background-color: aliceblue;
  color: gray;
}
```

Add the class name to the div:

```js
// App.js
<div className={mode}>
```

If you set the default value to `light` or `dark`, the app's appearance should change on page-load/refresh.

## Updating State

The click handler's function is called `changeMode`. You will place the function that changes the state of mode (`setMode`) inside of this function.

```js
function changeMode(modeChoice) {
  console.log(`${modeChoice} is the best!`);
  setMode("dark");
}
```

### Adding logic

`setMode` has only one job to update the value of `mode`. In most cases, more logic must be set up to get the desired value.

In this case, the logic will be if light mode is selected, set dark mode. Else, set light mode:

```js
function changeMode(modeChoice) {
  // console.log(`${modeChoice} is the best!`);
  if (mode === "light") {
    setMode("dark");
  } else {
    setMode("light");
  }
}
```

Take some time to trace on the screen (or draw out on paper) the order of events:

- There is a click handler on the button which listens for a click event.
- The button is clicked.
- The button click calls the function `changeMode`.
- `changeMode` has some logic to toggle the value of `mode` from light to dark.
- `setMode` changes the state of the variable `mode`
- When `mode` changes, it triggers React to chang the `className` (CSS class) of the `div` from `light` to `dark`.

## Don't change state directly

You may find yourself tempted to do this:

```js
mode = "light";
```

Instead of

```js
setMode("light");
```

State will not update properly if you do not use the function. One of the main goals of React is to render and rerender components quickly. If you go back to the reading on the virtual DOM, you will remember that React uses some algorithms to check for changes and efficiently update the DOM. These updates can only be triggered correctly if the set state functions are called.
