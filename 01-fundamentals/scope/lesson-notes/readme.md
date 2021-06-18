# Scope

## Setup

Please complete the following before the lesson begins:

- Open and then fork this [repl](https://replit.com/@Pursuit/Warmup-Scope#index.js).
- Complete the Warmup Questions & Tasks detailed at the top of the repl.

## Learning Objectives

- Define global scope.
- Define local or function scope.
- Define block scope.

---

## Guiding Questions

- The following code is valid. Why so? In your description, make use of the term scope.

  ```js
  const secret = "MY-SECRET";

  function hiddenCode() {
    console.log(secret);
  }

  hiddenCode(); //> "MY-SECRET"
  ```

- The following code is _not_ valid. Why so? In your description, make use of the term scope.

  ```js
  function hiddenCode() {
    const secret = "MY-SECRET";
  }

  console.log(secret); //> ReferenceError
  ```

- Is there any way to access the `secret` variable kept inside the `hiddenCode()` function outside of that function?

- What is the difference between global and local (or function) scope?

- The code below is valid but is not recommended. Why do you think it is not recommended?

  ```js
  let secret = "MY-SECRET";
  function hiddenCode() {
    secret = "NEW-SECRET";
  }

  console.log(secret); //> "MY-SECRET"
  hiddenCode();
  console.log(secret); //> "NEW-SECRET"
  ```

- What is a "block" in JavaScript?

- `let` and `const` define block-scoped local variables. What does this mean?

- This code is not valid. Why not? Once you've determined why, update the code to become valid.

  ```js
  function validateLength(password) {
    if (password.length > 7) {
      let result = "Your password is valid.";
    } else {
      let result = "Your password must be at least 8 characters long.";
    }
    return result;
  }
  validateLength("eight.letters");
  ```

- How is block scope different than local scope?

## Exercise

Write a function that validates a string that is supposed to be an email. The string should:

- Include only one `@` symbol, which should not be the first character of the string.
- Include a `.` symbol, which should not be the first or last character of the string.

For each variable in your code, write a comment describing what scope it is in.

Once you're done, check in with an instructor.
