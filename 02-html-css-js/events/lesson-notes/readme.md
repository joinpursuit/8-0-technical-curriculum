# Events

## Learning Objectives

By the end of this lesson you should be able to:

- Use event listeners to run code on specific user interactions such as click and hover.
- Access data inside of the `event` object to dynamically change the effect of a listener.

---

## Setup

Begin by forking the following Repl.it.

- [Repl.it: Dog Site](https://replit.com/@Pursuit/Events-Dog-Site)

## Guiding questions

- Read through the JavaScript code that already exists in the `script.js` file. Take your time going through each line of code, making sure you understand what is happening.

  Then, answer the following questions:

  - What will the "-" and "+" buttons do to the page when clicked?
  - Will both the "-" and "+" button work for both of the dogs on the page? Why or why not?
  - Describe how the following line of code removes a single heart from the `.hearts` element.
    ```js
    hearts.textContent = hearts.textContent.slice(0, -1);
    ```

- Update the code so that all `.increment` and `.decrement` elements have the relevant event listeners on them. To do so you will need to:

  - Select all `.increment` or `.decrement` elements on the page.
  - Loop through those elements.
  - Add the appropriate event listener to each element.

- What happens when you click on the second dog's "-" or "+" button?

- You're now encountering a tricky problem. Take a moment to describe what the problem is and why it is occurring. Use technical language wherever possible and express the problem as clearly as you can.

- To solve this problem, consider the `event` object. What is the `event` object?

- When you click on the "-" or "+" button, you can access the element that is being clicked through `event.target`. Add the following line of code to each of your event listeners, updating the callback function as needed.

  ```js
  console.log("event.target:", event.target);
  ```

  When you click on the first dog's "+" button, is the element returned by `event.target` different than the one returned from the second dog's "+" button?

- First, take a look at the following link which describes how you can access the parent node of an element.

  - [MDN: Node.parentNode](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode)

  Next, notice that you can actually call `.querySelector()` on individual nodes as well. The link below describes how this works.

  - [MDN: Element.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector)

  Given this information, how can you use the element returned by `event.target` to traverse to the relevant `.hearts` element?

  This could be a difficult challenge! Take your time to think through what needs to happen before coding. Keep in mind that there are actually multiple ways to solve this problem.

- At this point, your code should allow for clicking on either "-" or "+" button. When you click, the relevant count of hearts should decrease or increase, respectively.

  Update your code so that the minimum number of hearts possible is one, while the maximum is three.

  Is any DOM manipulation needed to add this feature?

- Take a look at your code. Is there any duplication? Any helper functions that could be created from what you've accomplished? Any patterns you notice?
