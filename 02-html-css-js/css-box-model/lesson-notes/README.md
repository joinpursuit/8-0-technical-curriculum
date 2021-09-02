# CSS Box Model

## Learning Objectives

By the end of this lesson you should be able to:

- Describe the properties of the CSS box model
- Define padding, margin, and borders for customizing an HTML element
- Compare and contrast default display properties 

---

## Guiding questions

- What is the box model?

- What parts make up the box model?

- What are the different types of displays?

- What are the default displays for common elements `p`, `img`, `button` ?

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