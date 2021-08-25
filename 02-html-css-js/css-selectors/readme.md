# CSS Selectors

While it is possible to only use elements as selectors, when building complex webpages you'll find that you need more than simple selectors to make a great design. Thankfully, CSS allows for a variety of different selectors to be used that make it easier to customize parts of your page.

In this lesson, you'll learn different types of selectors that you can use when styling your webpages. There are many selectors to learn and this lesson serves as merely an introduction to some of the most common that are used. Finally, you'll learn some best practices when it comes to writing your CSS so that it is maintainable.

## Learning Objectives

By the end of this lesson you should be able to:

- Apply styles to specific elements, classes, or IDs, incorporating descendent selectors.
- Describe specificity in regards to how CSS applies styles to particular elements.
- Use grouping to apply styles to multiple elements, classes, or IDs.
- Style links by using pseudo-classes.

---

## Selector options

There are many different types of selectors that can be used when writing CSS. The most common selectors are included here.

### Elements

Element selectors apply declarations to every one of the specified elements on the page. For example, the CSS below would cause a wavy yellow underline to appear underneath all paragraph elements.

```html
<p>"You're gonna need a bigger boat."</p>
```

```css
p {
  text-decoration: yellow wavy underline;
}
```

Element selectors are good for broad styles. For example, changing the color of all paragraph text, or the size of all `h2` elements.

### IDs

Adding an `id` attribute to an element marks it as a unique element among the entire page. No two elements should share the same ID.

```html
<p id="jaws-quote">"You're gonna need a bigger boat."</p>
```

You can style an element with a specific ID by prefixing the ID with the `#` symbol. For example, the CSS below would apply the declaration to only the element that has an `id` with the value of `jaws-quote`.

```css
#jaws-quote {
  text-decoration: yellow wavy underline;
}
```

It's important to note that you _should not_ include the `#` symbol in the HTML.

In general, ID selectors are not favored as they are very specific. While there are times you may want to apply declarations to an ID, it is generally better to rely upon classes.

### Classes

Adding a `class` attribute to an element allows you to set one or more classes on that element. For example, in the HTML below the `p` element has two classes: `jaws` and `movie-quote`. You can tell there are two classes because each class is separated by a space.

```html
<p class="jaws movie-quote">"You're gonna need a bigger boat."</p>
```

Creating multiple classes allows you to create multiple rules. This allows you write CSS that is modular and reusable. To write a rule that applies to a specific class, you can prefix the class name with the `.` symbol.

For example, the code below creates two different rules. The first rule, applied to the `movie-quote` class, adds a `wavy underline` underneath whatever element the class is applied to. The `jaws` class will change the color of any text decoration to `blue`.

```css
.movie-quote {
  text-decoration: wavy underline;
}

.jaws {
  text-decoration-color: blue;
}
```

This is useful because now the `movie-quote` class can be used on other elements. For example, adding the code below would add the `wavy underline` style to the new quote. Then, with an additional class, this quote could be styled even further.

```html
<p class="frankenstein movie-quote">"It's alive! It's alive!"</p>
```

```css
.frankenstein {
  text-decoration: green;
}
```

In general, it is preferable to write reusable styles with classes.

### Combinations

It is also possible to combine multiple selectors together. To do so, write the selectors without including a space. For example, in the CSS below the `p` selector is combined with the class selector `.frankenstein`. This means that the declaration block will only apply to the `p` elements with the `frankenstein` class.

```html
<img
  class="frankenstein"
  src="./images/frankenstein-poster.jpg"
  alt="Image of the Frankenstein movie poster."
/>
<p class="frankenstein movie-quote">"It's alive! It's alive!"</p>
```

```css
p.frankenstein {
  text-decoration: green;
}
```

It is also possible to combine classes with one another. For example, the CSS below will only apply to an element that has both the `movie-quote` and `frankenstein` classes.

```css
.movie-quote.frankenstein {
  text-transform: uppercase;
}
```

### Descendants

It is also possible to only apply styles based on a particular HTML structure. For example, the following CSS will only apply to the `p` element that is _inside of_ any element with a class of `active`. Therefore, it will not apply to the `frankenstein` quote.

```html
<div class="active">
  <p class="jaws movie-quote">"You're gonna need a bigger boat."</p>
</div>
<p class="frankenstein movie-quote">"It's alive! It's alive!"</p>
```

```css
.active p {
  background: black;
  color: white;
}
```

In the case above, the `p` element _does not_ need to be a direct descendent of an element with the `active` class. It can be nested anywhere inside of the `active` element. For example, the CSS rule would still apply if the HTML looked like the below example.

```html
<div class="active">
  <div class="quote">
    <p class="jaws movie-quote">"You're gonna need a bigger boat."</p>
  </div>
  <p class="attribution">- From the movie "Jaws"</p>
</div>
<p class="frankenstein movie-quote">"It's alive! It's alive!"</p>
```

Of course, this could also be simplified with the following changes.

```html
<div class="active">
  <p class="jaws movie-quote">"You're gonna need a bigger boat."</p>
  <p class="attribution">- From the movie "Jaws"</p>
</div>
<p class="frankenstein movie-quote">"It's alive! It's alive!"</p>
```

```css
.active p.movie-quote {
  background: black;
  color: white;
}
```

Using descendent selectors is quote powerful and can be of great benefit when organizing your CSS code. However, if you find you're using many descendent selectors, you may want to rethink your approach. Building CSS that is too closely tied to the structure of your HTML can cause problems if your HTML's structure ever changes.

## Specificity

So far you've learned that when declarations conflict, the applied rules are determined by the order the styles appear in the CSS file. For example, in the code below the `movie-quote` class would capitalize text as opposed to set every letter to uppercase, due to the order the rules are written.

```css
.movie-quote {
  text-transform: uppercase;
}

.movie-quote {
  text-transform: capitalize;
}
```

While this is true, there is another factor which matters when determining what declarations will be applied: specificity. Some selectors have a higher specificity than other selectors, meaning that declarations associated with those selectors may overwrite other rules _even if the other rules come later._

For example, element selectors have one of the lowest specificity values. Classes have a higher specificity value than elements. This means that for the following code, the text will be uppercase as opposed to capitalized.

```html
<p class="jaws movie-quote">"You're gonna need a bigger boat."</p>
```

```css
.movie-quote {
  text-transform: uppercase;
}

p {
  text-transform: capitalize;
}
```

However, combining selectors can increase the specificity. For example, the code below will still be uppercase because the `movie-quote` class is combined with a `p` element selector, making it more specific.

```html
<p class="jaws movie-quote">"You're gonna need a bigger boat."</p>
```

```css
p.movie-quote {
  text-transform: uppercase;
}

.movie-quote {
  text-transform: capitalize;
}
```

Specificity can be quite tricky to understand. For more information, you can read the article linked below.

- [MDN: Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)

## Grouping

It is also possible to apply the same declaration block to multiple selectors. To do so, you can separate each selector by a comma.

```css
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: Impact, serif;
}
```

Grouping does not impact specificity in any way and can be used with other selectors, like classes or IDs.

```css
p.movie-quote,
.frankenstein {
  text-decoration: underline;
}
```

## Pseudo-classes

In addition to classes that you define, the browser also has special classes, called "pseudo-classes", that it assigns to particular elements. Many of these pseudo-classes relate to a state of the element; for example, the element is the first child or the element has been clicked.

The most common pseudo-classes you will interact with are links, as detailed below.

### Links

Links, or `a` elements, can be styled using regular CSS.

```css
a {
  color: black;
  font-weight: bold;
  text-decoration: none;
}
```

However, links also have different states. For example, a link looks different before, during, and after it's been clicked. It can also look different when hovered on or when selected by a keyboard. To modify the CSS for these states, you can use pseudo-classes, which are typically attached to the `a` element and prefixed with a `:` symbol.

For example, the CSS below will style links so that before, during, and after they are clicked, they are bold and black without an underline. However, when hovered over, they will turn pink.

```css
a,
a:active,
a:visited {
  color: black;
  font-weight: bold;
  text-decoration: none;
}

a:hover {
  color: hotpink;
}
```

Pseudo-classes are an interesting topic and can allow for some pretty specific styles. For more information on pseudo-links, you can read the article below.

- [MDN: Styling links](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_links)
