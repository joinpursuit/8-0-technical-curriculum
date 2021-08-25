# CSS Selectors

## Learning Objectives

By the end of this lesson you should be able to:

- Apply styles to specific elements, classes, or IDs, incorporating descendent selectors.
- Describe specificity in regards to how CSS applies styles to particular elements.
- Use grouping to apply styles to multiple elements, classes, or IDs.
- Style links by using pseudo-classes.

---

## Guiding questions

- What is a CSS selector?

- What is an ID? How do you add an ID to an HTML element?

- What is a class? How do you add a class to an HTML element?

- How do you add multiple classes to an HTML element?

- Using technical language, describe how the following CSS would affect an HTML page. Feel free to look up the properties and values.

  ```css
  #jaws {
    color: blue;
  }
  ```

- Using technical language, describe how the following CSS would affect an HTML page. Feel free to look up the properties and values.

  ```css
  .important-quote {
    border-bottom: 3px solid red;
  }
  ```

- Using technical language, describe how the following CSS would affect an HTML page. Feel free to look up the properties and values.

  ```css
  h2.movie-title {
    font-size: 30px;
  }
  ```

- The reading suggested relying on classes for styling as opposed to elements or IDs. Why so?

- Take a look at the following HTML. Then, answer each question below it.

  ```html
  <body>
    <div class="quotes">
      <p class="active movie-quote rocky">"Yo, Adrian!" <span>- Rocky</span></p>
      <p class="movie-quote titanic">
        "I'm the king of the world!" <span>- Titanic</span>
      </p>
      <p class="movie-quote dracula">
        "Listen to them. Children of the night. What music they make."
        <span>- Dracula</span>
      </p>
    </div>
  </body>
  ```

  - What CSS selector could you use to affect all paragraphs with a class of `movie-quote`?
  - What CSS selector could you use to affect any `active` element?
  - What CSS selector could you use to affect all `span` elements within an element with the `quotes` class?
  - What CSS selector could you use to affect both the `titanic` and `dracula` classes?

- What is a pseudo-class?

- What selector would you use to style links when they are being hovered over?
