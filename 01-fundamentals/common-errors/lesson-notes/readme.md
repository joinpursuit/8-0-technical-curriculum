# Common Errors

## Learning Objectives

- Use the stacktrace to identify where an error might be occurring.
- Describe and fix syntax errors.
- Describe and fix reference errors.
- Describe and fix type errors.

---

## Guiding Questions

- What would the following stacktrace from Repl.it indicate to you?

  ```
  ReferenceError: i is not defined
    at listCharacters (/home/runner/Warmup-Common-Errors/index.js:14:34)
    at /home/runner/Warmup-Common-Errors/index.js:20:1
  ```

- What are some situations where you might see a `SyntaxError`?

- What are some situations where you might see a `ReferenceError`?

- What are some situations where you might see a `TypeError`?

- Run the code below. Then, answer each question or complete each task below the code block.

  ```js
  function levelUpCharacter(characer) {
    if (character.level >= 20) {
      character.level = 20;
    } else {
      character.level++;
    }
    return character;
  }

  const barret = { name: "Barret", level: 2 };
  levelUpCharacter(barret);
  console.log(barret);
  ```

  - What type of error occurred? Why?

  - Where does the error occur? How did you find it?

  - Now that you know more about the error, fix the error(s) to get the code working.

- Run the code below. Then, answer each question or complete each task below the code block.

  ```js
  function levelUpCharacter(character) {
    if (character.levil > 20) {
      character.level = 20;
    } else {
      character.level++;
    }
    return character;
  }

  const barret = { name: "Barret", level: 21 };
  levelUpCharacter(barret);
  console.log(barret); //> `barret.level` should be 20.
  ```

  - Was an error thrown when the code was run?

  - Did the function work as expected? Why or why not?

  - What's the problem with the code above? _Why does it not throw an error?_

  - How could you fix the code above so that it works as intended?

- In cases where no explicit error is thrown, how do you think you would go about identifying that there's a problem?
