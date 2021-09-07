# Creating and Updating DOM Elements

By using `document.querySelector()` and `document.querySelectorAll()` to select elements from the DOM, it is possible to perform all kinds of operations on an existing page.

In this lesson, you'll learn how to create elements from scratch that can then be attached to your page. You'll also learn how to modify existing elements.

## Learning Objectives

By the end of this lesson you should be able to:

- Create DOM elements in memory, through `Document.createElement()`.
- Attach DOM elements to the page.
- Modify DOM elements through element methods and properties.

---

## Creating elements

To create an element, you can use the `document.createElement()` method.

```js
const header = document.createElement("header");
```

To create an element, a string representation of the element is passed as an argument. The element that is created can be assigned to a variable.

Creating an element does not attach that element to the page.

### Attaching elements

To attach a created element to the page, you must first determine where you want that element to go and then select its parent element.

For example, imagine the body of a page looks like the following:

```html
<body>
  <main>
    <h2>Welcome to my page!</h2>
  </main>
</body>
```

If you wanted to create a `header` element in memory and place it _above_ the `main` element, you could do the following.

```js
const header = document.createElement("header");
const body = document.querySelector("body");

body.prepend(header);
```

The above code will result in the following HTML.

```html
<body>
  <header></header>
  <main>
    <h2>Welcome to my page!</h2>
  </main>
</body>
```

The JavaScript above does the following:

1. Create a new `header` element and assign it to a variable.
1. Select the `body` element and assign it to a variable.
1. _Prepend_ the `header` element within the `body` element.

`.prepend()` is a method that can be called on elements to add a new element before all other elements.

Other methods can be used to place elements where you like:

- `.append()` will place an element as the last one in a list of nodes.
- `.before()` will place an element directly before the element that is calling the method.
- `.after()` will place an element directory after the element that is calling the method.

With these four methods, it's possible to construct complex HTML structures in memory and attach them to the page.

### Nested elements

Building nested elements is possible through the use of the various methods you've just learned.

For example, take a look at the following code. Afterwards, you will see what this code generates; however, try and follow along with the code and see if you can accurately guess what kind of structure is being created.

```js
const header = document.createElement("header");
const heading = document.createElement("h1");
header.append(heading);

const nav = document.createElement("nav");
header.append(nav);

const ul = document.createElement("ul");
nav.append(ul);
for (let i = 0; i < 3; i++) {
  ul.append(document.createElement("li"));
}
```

In code above, multiple elements are created. Then, those elements make use of the `.append()` method to construct a nested HTML structure. The final structure is included below.

```html
<header>
  <h1></h1>
  <nav>
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </nav>
</header>
```

Although `.append()` was used above, other methods can be used as well.

## Modifying elements

Creating empty elements can only get you so far. Updating individual elements with text or particular attributes is how you will build interactive web applications. Thankfully, the process is not unlike modifying an object.

### Updating text

By using the `.textContent` property, you can assign or add text to elements.

```js
const paragraph = document.createElement("p");
paragraph.textContent = "Pugs are my favorite type of dog.";
```

The code above will overwrite whatever text is in the paragraph and replace it with the assigned text. It's also possible to append text.

```js
paragraph.textContent += " However, I also like huskies!";
```

### Updating attributes

Updating attributes can be done with the well-named `.setAttribute()` method. The first argument is the attribute you want to change and the second argument is the value for that attribute. Both the attribute and value should be a string.

```js
const img = document.createElement("img");
img.setAttribute("src", "https://placedog.net/125/200");
img.setAttribute("alt", "A picture of a husky.");
```

If you set an attribute that already has a value, this will overwrite that value. For example, in the code below, the `class` attribute will have a value of only `image`.

```js
img.setAttribute("class", "dog");
img.setAttribute("class", "image");
```

### Updating styles

Each element may have a multiplicity of styles. You may see code that references the `.style` property, but it's possible to change styles with the `.setAttribute()` method.

```js
const ul = document.createElement("ul");
ul.setAttribute("style", "padding: 0px; background: yellow;");
```

This will set an inline style on the specific element, which will often overwrite other styles you've written.

```html
<ul style="padding: 0px; background: yellow;"></ul>
```

In general, manipulating styles like this can end up creating some strange issues if you are not diligent about keeping track of changes to individual elements. It's better practice to instead manage the classes of elements.

### Updating classes

As you saw previously, it's possible to set the class list using the `.setAttribute()` method. You can set multiple classes by adding them to the second argument.

```js
const img = document.createElement("img");
img.setAttribute("class", "featured dog-image hidden");
```

However, you can also make use of the `.classList` interface which allows you to `.add()`, `.remove()`, and `.toggle()` classes.

```js
const img = document.createElement("img");
img.classList.add("featured"); //> "featured"
img.classList.add("dog-image"); //> "featured dog-image"
// `.toggle()` will add the class if it is missing from the list,
// otherwise it will remove it.
img.classList.toggle("hidden"); //> "featured dog-image hidden"
img.classList.remove("hidden"); //> "featured dog-image"
```

You can read more about the `.classList` interface at the following link.

- [MND: Element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
