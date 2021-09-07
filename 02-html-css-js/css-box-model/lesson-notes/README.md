# CSS Box Model

## Learning Objectives

By the end of this lesson you should be able to:

- Describe the CSS Box Model.
- Differentiate between values of the display property, and how it may affect the box model.
- Use the position property to break the normal flow of the page.

---

## Guiding questions

- What is the box model?

- What parts make up the box model?

- What are the different types of displays?

- What are the default displays for common elements `p`, `img`, `button`?

- What does `margin: auto` do in the example below?

- Using technical language, describe how the following CSS would affect an HTML page. Feel free to look up the properties and values.

```html
<section>
  <article>
    <p>Very informative. So article</p>
    <p></p>
    <p><a>here</a> click</p>
    <p></p>
  </article>

  <article>
    <img src="./doge.png" alt="" Doge />
    <p>What ever happened to <span>Doge</span>?</p>
  </article>
</section>
```

```css
section {
  width: 80%;
  margin: 16px auto;
}
```

Adding some more CSS to the above example:

```css
article {
  display: inline-block;
  width: 50%;
  padding: 10px;
  margin: 4px;
  border: 5px solid purple;
}

p > span {
  color: peachpuff;
}
```

- Using technical language, describe how the following CSS would affect an HTML page. Feel free to look up the properties and values.

  - Would the articles appear next to each other or would one be below the other?

  - What would the total width of one article be if the width of the `section` is 1000px?

  - How could you constrain the width of the articles to be exactly 500px, regardless of margin or padding properties?

<hr>

- By default the anchor tag inline, inline-block or block? Describe how it would look in the given example.

  - as inline?
  - as block?
  - as inline block?

- If you wanted to make the anchor tag appear as a big button, could you style it with CSS, or would you need to use a `button` tag.

- Is it better practice to style the `a` tag or use a `button` tag, why?

Review:

- What is the advantage of using `p > span` over `p`?

- What is the difference between `p > span`, `p span`, and `p, span`

BONUS

- Can margins be set to a negative property?

- What about padding?

Hint: try it!
