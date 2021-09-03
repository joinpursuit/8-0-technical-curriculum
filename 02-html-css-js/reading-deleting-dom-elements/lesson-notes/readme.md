# Reading and Deleting DOM Elements

## Learning Objectives

By the end of this lesson you should be able to:

- Access DOM elements through `.querySelector()` and `.querySelectorAll()`.
- Describe the importance of the `defer` attribute and use it to cause JavaScript to run after the DOM is loaded.
- Access element information through the use of element properties, such as `.innerHTML` and `.textContent`.
- Remove DOM elements from the page with the `.remove()` method.

---

## Setup

Begin by forking the following Repl.it. Replace "Your Name" with your actual name and input your birthday. (Don't worry, no one else will be looking at this.)

- [Repl.it: Nameplate](https://replit.com/@Pursuit/HTML-CSS-and-JS-Nameplate#index.html)

## Guiding questions

- Connect the `script.js` file to the `index.html` page by adding a `script` element. What attributes are needed on the `script` element to do this?

- Add the following line to your JavaScript file. After clicking the "Run" button, does it log? (If not, check to make sure your `script` element is correctly formatted.)

  ```js
  console.log("Just testing...");
  ```

- What does `document` represent?

- What data type is `document`? How do you know?

- What is the difference between `document.querySelector()` and `document.querySelectorAll()`? Keep in mind the following when answering this question:

  - What is the functional purpose of each method?
  - What is the return data type of each method?
  - What argument is expected for each method?

- What is the `defer` attribute and why is it necessary when writing JavaScript that accesses the DOM?

- In your JavaScript file, use `document.querySelector()` to select the `h1` element. Then, log out the text that is stored inside of that element.

  What attributes will allow you to select the text inside of the element?

- What is the difference between the following two lines of code?

  ```js
  document.querySelector("main").innerHTML;
  document.querySelector("main").textContent;
  ```

- Using `document.querySelector()`, select the element with a class of `emoji`. What emoji is selected? Why?

- Is it possible to select the second emoji on the page with `document.querySelector()`? If so, how? If not, why not?

- Select all of the emojis on the page with `document.querySelectorAll()`. Then, loop through the returned value and log out the content of each element.

  How did you choose to loop through the `NodeList`?

- Write code that removes all of the emojis from the page. Why must you use some kind of loop to do this?

- What code could you write that would remove _only_ the second emoji from the page? If possible, think of multiple ways to perform this task.

- Based on what you know so far, is there a way to remove only your birthday from the page, excluding the text "My Birthday:"? If so, how so? If not, why not?
