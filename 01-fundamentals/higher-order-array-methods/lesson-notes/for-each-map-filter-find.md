# Higher Order Array Methods

These lesson notes cover `.forEach()`, `.map()`, `.filter()`, and `.find()`.

## Learning Objectives

By the end of this lesson you should be able to:

- Describe the input and return values of `.forEach()`.
- Use `.forEach()` to solve code problems.
- Describe the input and return values of `.map()`.
- Use `.map()` to solve code problems.
- Describe the input and return values of `.filter()`.
- Use `.filter()` to solve code problems.
- Describe the input and return values of `.find()`.
- Use `.find()` to solve code problems.

---

## Guiding Questions

- What is a higher order function?

- What is a native array method?

- What does it mean for a function to produce side effects?

- What does it mean for a function to return a value?

- Is it possible for functions that return values to also produce side effects?

- The `.forEach()` method expects at least one argument. What data type is this argument?

- What is a callback function?

- The `.forEach()` method's callback function has up to three parameters. What are these parameters?

- Update the code below so that it uses `.forEach()` instead of a `for` loop. Inside of `printAllComics()` you will have to write another, anonymous function.

  ```js
  const comics = [
    { title: "Calvin & Hobbes", author: "Bill Watterson", kind: "print" },
    { title: "Zen Pencils", author: "Gavin Aung Than", kind: "web" },
    { title: "Nancy", author: "Olivia James", kind: "print" },
    { title: "False Knees", author: "Joshua Barkman", kind: "web" },
  ];

  function printAllComics(comics) {
    // Write your code here.
    for (let comic of comics) {
      console.log(`${comic.title} by ${comic.author}`);
    }
  }

  printAllComics(comics);
  ```

- How can you update your `.forEach()` code so that it prints out the following?

  ```
  1. Calvin & Hobbes" by Bill Watterson
  2. Zen Pencils" by Gavin Aung Than
  3. Nancy" by Olivia James
  4. False Knees" by Joshua Barkman
  ```

- How can you update your `.forEach()` code so that it prints out the following?

  ```
  (1 out of 4) Calvin & Hobbes" by Bill Watterson
  (2 out of 4) Zen Pencils" by Gavin Aung Than
  (3 out of 4) Nancy" by Olivia James
  (4 out of 4) False Knees" by Joshua Barkman
  ```

- Replace the `.forEach()` in your code with `.map()`. Does the code still run?

- What are some of the differences between `.forEach()` and `.map()`?

- Instead of logging, `return` inside of your callback function. How can you access the result of your `.map()` function call?

- Write a new function called `getAuthors()`. The function should take in an array of comics (like above) and return an array of just the authors' names.

  _Do not_ use the `.map()` method just yet. Instead, use an accumulator pattern.

  ```js
  function getAuthors(comics) {
    // Write your code here!
  }

  const result = getAuthors(comics);
  console.log(result);
  //> [ "Bill Watterson", "Gavin Aung Than", "Olivia James", "Joshua Barkman"]
  ```

- Now, update your `getAuthors()` function to make use of the `.map()` method. The function should produce the same result.

  Compare what you had written with what you have now. What is a benefit of using the `.map()` method?

- Mentally evaluate the code below before running it. What do you think will be logged out? Why?

  ```js
  function getTitle(comic) {
    comic.title;
  }

  const result = comics.map(getTitle);
  console.log(result);
  ```

- How does the `.filter()` method differ from `.map()`? From `.forEach()`?

- Mentally evaluate the code below before running it. What do you think will be logged out? Why?

  ```js
  function isPrintComic(comic) {
    return comic.kind === "print";
  }

  const result = comics.filter(isPrintComic);
  console.log(result);
  ```

- What would happen if the callback function had the code below instead? Why?

  ```js
  function isPrintComic(comic) {
    return comic.kind;
  }
  ```

- `type` _is not_ a key on each comic object. Keeping that in mind, would happen if the callback function had the code below instead? Why?

  ```js
  function isPrintComic(comic) {
    return comic.type;
  }
  ```

- How does the `.find()` method differ from `.filter()`? From `.map()` or `.forEach()`?

- What will be the difference between `filterResult` and `findResult` after the code is run below?

  ```js
  function getJoshuaBarkmanComic(comic) {
    return comic.author === "Joshua Barkman";
  }

  const filterResult = comics.filter(getJoshuaBarkmanComic);
  console.log(filterResult);

  const findResult = comics.find(getJoshuaBarkmanComic);
  console.log(findResult);
  ```

- Is it possible to modify the `getJoshuaBarkmanComic()` function so that it could instead find any author? If so, how so? If not, why not?

- Will Calvin & Hobbes or Nancy be returned by the following code? Why?

  ```js
  function isPrintComic(comic) {
    return comic.kind === "print";
  }

  const result = comics.find(isPrintComic);
  console.log(result);
  ```

- What will get returned from the following code? Why?

  ```js
  function isPrintComic(comic) {
    return comic.kind;
  }

  const result = comics.find(isPrintComic);
  console.log(result);
  ```

- Take a look at the table below. What does each column mean?

  | Method       | Callback expected return value | Method return value | Destructive? |
  | ------------ | ------------------------------ | ------------------- | ------------ |
  | `.forEach()` | Nothing.                       | Nothing.            | No.          |
  | `.map()`     | Anything.                      | An array.           | No.          |
  | `.filter()`  | Boolean.                       | An array.           | No.          |
  | `.find()`    | Boolean.                       | Anything.           | No.          |

- Although none of the methods above are _inherently_ destructive methods, is it possible to cause mutations with those methods? Should you?
