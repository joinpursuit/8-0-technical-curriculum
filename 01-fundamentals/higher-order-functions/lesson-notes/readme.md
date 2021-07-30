# Higher Order Functions

## Learning Objectives

By the end of this lesson you should be able to:

- Define what makes a higher order function.
- Write functions that accept a function as an argument and use that inputted function.

---

## Guiding Questions

- What is the definition of a higher order function?

- Why are anonymous functions useful for higher order functions?

- Take a look at the functions below. Are any of the functions a higher order function? If so, which ones and why so? If not, why not?

  ```js
  function truthy() {
    return true;
  }

  function falsy() {
    return !truthy();
  }

  falsy(); //> false
  ```

- Take a look at the functions below. Are any of the functions a higher order function? If so, which ones and why so? If not, why not?

  ```js
  function left() {
    return "Left";
  }

  function right() {
    return "Right";
  }

  function go(goLeft = true) {
    return goLeft ? left : right;
  }
  ```

- Take a look at the functions below. Are any of the functions a higher order function? If so, which ones and why so? If not, why not?

  ```js
  const directions = [];

  function storeDirections(direction) {
    directions.push(direction);
  }

  function go(direction, operation) {
    operation(direction);
    return direction;
  }

  go("Left", storeDirections);
  go("Right", storeDirections);
  go("Up", storeDirections);
  console.log(directions); //> ["Left", "Right", "Up"]
  ```

- Take a look at the higher order function below. The `transform()` function expects, as its second argument, a function that accepts at least one argument.

  ```js
  function transform(text, fn) {
    if (typeof fn !== "function") {
      return text;
    }

    return fn(text);
  }
  ```

  Use the function above to transform the text in the following ways. For each line below, you will need to write an anonymous function.

  ```
  "left" -> "LEFT"
  "RiGhT" -> "right"
  "left right left" -> "left-right-left"
  "up Down left" -> "UDL"
  ```
