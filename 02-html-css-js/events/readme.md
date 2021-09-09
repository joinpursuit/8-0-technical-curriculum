# Events

Interactive web applications are possible because JavaScript can respond to user interactions. While some elements have default behaviors, such as links, you can make your page more interactive so that any click, hover, or mouseover can change what's happening on the page.

In this lesson, you'll learn the basics of how to handle events in JavaScript. You'll build event listeners that can run code due to user interaction. You'll also make use of the `event` object to interact with the page while responding to user interaction.

## Learning Objectives

By the end of this lesson you should be able to:

- Use event listeners to run code on specific user interactions such as click and hover.
- Access data inside of the `event` object to dynamically change the effect of a listener.

---

## Event listeners

You can attach an event listener to anything you can select within in the DOM. An event listener watches for certain types of events to occur on the DOM, at which point it responds. For example, the event listener below will run a `console.log()` message whenever the first paragraph on the page is clicked.

```js
const paragraph = document.querySelector("p");
paragraph.addEventListener("click", () => {
  console.log("You are clicking the first paragraph on the page!");
});
```

Here is what is happening in the code above:

1. A new variable, `paragraph`, is declared and assigned a reference to the first `p` tag.

1. A method is called on the `paragraph` variable. It is given two arguments.

   - The first argument is a string that represents the type of event to look for. In this case, it's looking for a "click" event. There are many different types of events that can be placed here.
   - The second argument is a callback function. This function will be called when event occurs.

When a user clicks on the paragraph, the `console.log()` message will be called.

Any type of JavaScript code can be run in the callback function. For example, you can also perform some DOM manipulation.

To see an example of this an action, visit the following repl.

- [Events: Counter Click](https://replit.com/@Pursuit/Events-Counter-Click)

### Event types

There are many event types -- so many it is too difficult to memorize them all. However, there are a few that are commonly used in applications.

| Event Type    | Description                                                                 |
| ------------- | --------------------------------------------------------------------------- |
| `"click"`     | Watches for when the user clicks on the target.                             |
| `"dblclick"`  | Watches for when the user double clicks on the target.                      |
| `"mousedown"` | Watches for when the user has a mouse button pressed while over the target. |
| `"mouseover"` | Watches for when the mouse hovers over the target.                          |
| `"mouseout"`  | Watches for when the mouse leaves the target.                               |
| `"focus"`     | Watches for when a form field has the cursor.                               |
| `"blur"`      | Watches for when the cursor leaves a form field.                            |
| `"change"`    | Watches for when a form field has changed in some way.                      |
| `"submit"`    | Watches for when a form has been submitted.                                 |

Below is a more thorough list of all the different types of events that occur. Again, do not feel as though you need to memorize this list!

- [MDN: Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)

### Adding multiple event listeners

The `.addEventListener()` method can only be called on individual nodes, not lists. This means in order to add an event listener to multiple elements you should loop over any list.

```js
const buttons = document.querySelectorAll("button");
for (let button of buttons) {
  button.addEventListener("click", () => {
    console.log("A button was clicked!");
  });
}
```

You can see this in action at the link below.

- [Events: Multiple Listeners](https://replit.com/@Pursuit/Events-Multiple-Listeners)

### Adding event listeners dynamically

Take a look at the following HTML and associated JavaScript. Before reading the paragraph below, try and guess what will happen when an `li` is clicked.

```html
<!-- index.html -->
<body>
  <ol>
    <li>Click me to make more!</li>
  </ol>
</body>
```

```js
// script.js
const lis = document.querySelectorAll("li");
for (let li of lis) {
  li.addEventListener("click", () => {
    const ol = document.querySelector("ol");
    const newLi = document.createElement("li");
    newLi.textContent = "Click me to make more!";
    ol.append(newLi);
  });
}
```

Did you take a bit of time to think about what would happen? The code above will add an event listener to the page so that when an `li` element is clicked, a new `li` element will be added.

However, there is a problem. Each new created `li` _will not_ create an `li` when it is clicked. This is because at the time the JavaScript runs, there is only a single `li` on the page. Those `li` elements that are created in the future do not have an event listener!

There are a few clever ways to solve this. For now, keep in mind that you'll need to add event listeners to DOM elements that you create.

To see the code above and a solution that fixes the problem, visit the repl below.

- [Events: Generating List Elements](https://replit.com/@Pursuit/Events-Generating-List-Items)

## The event object

The callback function that is expected by event listeners actually has a parameter called `event`. It is an object that contains useful information about the event that was triggered as well as the target of that event.

```js
const heading = document.querySelector("h1");
heading.addEventListener("click", (event) => {
  console.log("event.type:", event.type);
  console.log("event.target.textContent:", event.target.textContent);
});
```

In the code above, properties from the `event` object are printed out when the first `h1` element on the page is clicked. `event.type` will print the word "click", since that is the type of event that occurred. The `event.target` is the actual element that was clicked, therefore asking for that element's `.textContent` will return whatever text is in the `h1` element.

While there are many properties of the `event` object, the most commonly used is `event.target`. You can see the above code in action by clicking the link below.

- [Events: Event Object](https://replit.com/@Pursuit/Events-Event-Object)
