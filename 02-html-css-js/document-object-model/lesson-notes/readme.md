# Document Object Model

## Learning Objectives

By the end of this lesson you should be able to:

- Connect JavaScript, HTML, and CSS to the same page.
- Differentiate the DOM from HTML.

---

## Guiding questions

- What is the role of HTML in webpages?

- What is the role of CSS in webpages?

- Create a folder that will be used for this lesson. Then add the following HTML and CSS into the folder. Add a line in the HTML that connects the CSS to the HTML.

  ```html
  <!-- index.html -->
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Connecting HTML, CSS, and JavaScript</title>
    </head>
    <body>
      <h1>This page will have HTML, CSS, and JavaScript!</h1>
      <p>Pretty neat, don't you think?</p>
    </body>
  </html>
  ```

  ```css
  /* style.css */
  html {
    background-color: darkslategray;
  }

  main {
    padding: 20px 15%;
  }

  h1 {
    color: cadetblue;
    font-family: Arial, Helvetica, sans-serif;
  }

  p {
    color: lightgray;
  }
  ```

- Create a new JavaScript file called `main.js` and include the following code in it. Then, connect your `main.js` file to the `index.html` file. What element must you use to include your JavaScript?

  ```js
  // main.js
  console.log("JavaScript is connected!");
  ```

- Where can you see the `console.log()` statement?

- What is the `window` object?

- Try logging out the `window` object with the following code. Spend just a few moments looking through the keys of this object. Are there any keys you recognize or that sound familiar in any way?

  ```js
  console.log(window);
  ```

- What does the `window.alert()` method do?

- What does the `window.prompt()` method do? What does it return?

- Try adding just the following code into the web console. What do you think will happen and what actually happens? Were you at all surprised?

  ```js
  alert("Hello!");
  ```
