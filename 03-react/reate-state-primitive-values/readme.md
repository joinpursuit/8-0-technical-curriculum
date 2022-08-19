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

## State

React components can be stateless or stateful. So far, all the components you've built have been stateless.

A stateful component keeps track of user interactions. Since you have not interacted with your app (filling out a form, clicking a button), there was no need to track user interactions.

Stateful components change based on user interaction. A non-coding example is a light switch. Light switches (generally) have two states: on and off. Users can turn the lights on or off when they interact with the light switch. The lights will stay in that state until the user interacts with the light switch again.

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

## React, arguments for the event listener/handler

In some cases, you'll need to pass an argument:

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

To fix this, you must wrap your function inside an anonymous function. Since this arrow function is one line of code, curly braces are unnecessary.

```js
<button onClick={() => changeMode("Dark mode")}>
```

## Creating State

React has had some significant updates since it first launched. One of the major ways it changed was how to set up and change state.

The old method was with class components. The new method is called **React hooks**. To use hooks, you must import the function `useState` from react.

```js
// App.js

import { useState } from "react";
```

Inside the `App` function, you must declare a variable that will hold state (data) and the function in charge of updating it.

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

Add some CSS

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

If you set the default value to `light` or `dark`, the app's appearance should change.

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
