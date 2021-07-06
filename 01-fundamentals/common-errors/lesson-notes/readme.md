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

- Find and fix the error(s) in the following code.

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

- The code below does not cause any kind of error however it doesn't work as intended. Identify the error and then describe _why_ no error is thrown.

  ```js
  function levelUpCharacter(character) {
    if (character.levil >= 20) {
      character.level = 20;
    } else {
      character.level++;
    }
    return character;
  }

  const barret = { name: "Barret", level: 21 };
  levelUpCharacter(barret);
  console.log(barret);
  ```

- In cases where no explicit error is thrown, how do you think you would go about identifying that there's a problem? Solving that problem?
