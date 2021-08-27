# Media queries

## Learning Objectives

By the end of this lesson you should be able to:

- Describe what is meant by responsive design.
- Modify the layout of a page with media queries so that it displays differently depending on the screen size.

---

- What does it mean for a website to be responsive?

- Try changing the size of this page. As it grows smaller, does anything on the webpage change besides the text wrapping? Would you consider this website responsive?

- What does "mobile-first" mean in regards to responsive design?

- What `meta` element attribute is required for your page to be responsive?

- What is a media query?

- Write a media query that will apply a set of rules while the screen size is less than 500px.

- Write a media query that will apply a set of rules while the screen size is more than 1200px.

- Write a media query that will apply a set of rules while the screen size is between 760px and 1000px.

- Take a look at the following CSS. Then, answer the questions below.

  ```css
  p {
    color: green;
  }

  @media (min-width: 800px) {
    p {
      color: blue;
    }
  }

  @media (max-width: 700px) {
    p {
      color: red;
    }
  }
  ```

  - What color will the `p` text be if the width of the page is 850px?

  - What color will the `p` text be if the width of the page is 750px?

  - What color will the `p` text be if the width of the page is 650px?
