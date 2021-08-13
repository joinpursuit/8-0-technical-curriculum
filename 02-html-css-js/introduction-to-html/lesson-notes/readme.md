# Introduction to HTML

## Learning Objectives

By the end of this lesson you should be able to:

- Describe what HTML is and why it is described as a markup language.
- Create an HTML document, making use of the `DOCTYPE`, `html`, `head`, and `body` elements.
- Describe and diagram and HTML document as a tree.
- Differentiate between HTML elements, opening and closing tags, self closing tags, and attributes.
- Use common HTML elements such as paragraphs, headings, lists, links, comments, and images.

---

## Guiding Questions

- What does HTML stand for?

- What does it mean that HTML is a markup language? How is this different than JavaScript?

- What is an HTML element?

- What is the purpose of the `DOCTYPE` element?

- What is the purpose of the `html` element?

- What is the purpose of the `head` element?

- What is the purpose of the `body` element?

- The `head` and `body` elements appear between the opening and closing tags of the `html` element. What is an opening and closing tag?

- To create an HTML file, what file extension should you use? Create one now.

- HTML's structure can be described as a tree. The `html` element is the "root" of the tree and the `head` and `body` elements are two "branches" of it. What does this mean?

- Is the following HTML valid? Why or why not?

  ```html
  <html></html>
  <head></head>
  <body></body>
  ```

- If HTML code is invalid, will you see an error?

- The following is a paragraph element. How can you tell the difference between the opening and closing tags?

  ```html
  <p>
    The notable 19th-century architect of skyscrapers, Louis Sullivan, promoted
    an overriding precept to architectural design: "Form follows function".
  </p>
  ```

- For each of the following elements, describe what the element's purpose is. Additionally, add an example of the element to the HTML page you created earlier.

  - `h1`
  - `h2`
  - `ul`
  - `ol`
  - `li`

- How can you add a comment to your HTML page? Do so now.

- Images are slightly different than other elements because it uses self-closing tags. What does it mean for an element to use self-closing tags?

- What are some other self-closing tags?

- Describe the `img` element below. What is `src`? What is `alt`?

  ```html
  <img src="https://placekitten.com/g/200/300" alt="Picture of a kitten." />
  ```

- What is an HTML attribute?

- Take a look at the HTML below. The `h1` element is a _sibling_ of the `p` element. What does this mean?

  ```html
  <body>
    <h1>Architecture</h1>
    <p>
      The notable 19th-century architect of skyscrapers, Louis Sullivan,
      promoted an overriding precept to architectural design: "Form follows
      function".
    </p>
  </body>
  ```
