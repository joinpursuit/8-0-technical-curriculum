# Modern JavaScript Features

## Learning Objectives

By the end of this lesson you should be able to:

- Describe what ECMAScript is.
- Apply destructuring when assigning variables.
- Apply destructuring in function definitions.
- Use object shorthand to construct objects.
- Add default parameters to functions.
- Write functions using the arrow function expression syntax.
- Implement the spread syntax.
- Implement the rest syntax.

---

## Guiding Questions

- Based on the reading, what is ECMAScript?

- What is destructuring?

- How could you use destructuring to create three new variables from the following array?

  ```js
  const astronauts = ["Jessica Watkins", "Robert Shane", "Nicole Mann"];
  ```

- How could you use destructuring to create three new variables that represent each key-value pair in the following object?

  ```js
  const astronaut = {
    name: "Jessica Watkins",
    isActive: true,
    occupation: "Geologist",
  };
  ```

- What are some benefits of using destructuring? Are there any downsides?

- How can you apply destructuring to the following function?

  ```js
  function getAstronautActivityStatus(astronaut) {
    let result = "";
    if (astronaut.isActive) {
      result = `${astronaut.name} is active.`;
    } else {
      result = `${astronaut.name} is not active.`;
    }
    return result;
  }

  const astronaut = {
    name: "Jessica Watkins",
    isActive: true,
    occupation: "Geologist",
  };
  getAstronautActivityStatus(astronaut); //> "Jessica Watkins is active."
  ```

- How can you use object shorthand to construct an object using all of the following variables?

  ```js
  const first = "Nicole";
  const middle = "Aunapu";
  const last = "Mann";
  ```

- What are some of the benefits of using object shorthand? Are there any downsides?

- The function below expects that sometimes `name` will not be provided. How can you update the `greet()` function so that it uses default parameters?

  ```js
  function greet(name) {
    let result = "";
    if (name) {
      result = `Welcome to NASA, ${name}!`;
    } else {
      result = "Welcome to NASA, space cadet!";
    }
    return result;
  }

  greet("Jessica"); //> "Welcome to NASA, Jessica!"
  greet(); //> "Welcome to NASA, space cadet!"
  ```

- What are some of the benefits of using object shorthand? Are there any downsides?

- Convert the `greet()` function from above to use the arrow function syntax instead of the function declaration syntax.

  Is it possible to write this function on a single line?

- Are there any benefits to using the arrow function syntax? Are there any downsides?

- "Rest" and "spread" share the same syntax. What is that syntax?

- Is the code below an example of the "rest" or "spread" syntax? How do you know?

  ```js
  const astronauts = ["Jessica Watkins", "Robert Shane", "Nicole Mann"];
  const [first, ...others] = astronauts;
  ```

- Is the code below an example of the "rest" or "spread" syntax? How do you know?

  ```js
  const beforeEarth = ["Mercury", "Venus"];
  const afterEarth = ["Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
  const allPlanets = [...beforeEarth, "Earth", ...afterEarth];
  ```

- Take a look at the code below. What do you expect will be logged to the console?

  ```js
  function getPlanetsCount(...planets) {
    let result;

    if (planets.length === 1) {
      result = `There is 1 planet!`;
    } else {
      result = `There are ${planets.length} planets!`;
    }

    return result;
  }

  const count = getPlanetsCount("Mercury", "Venus", "Earth", "Mars");
  console.log(count);
  ```

- What are the benefits of using the rest or spread syntax? Are there any downsides?

- There are many ways to accomplish the same functionality in JavaScript. Why do you think new tools and syntax continue to get added to the language?

- What do you find challenging about learning this content?

- Think back to some of the earliest syntax you learned in this course. What is much easier now than it was before? What's still difficult?
