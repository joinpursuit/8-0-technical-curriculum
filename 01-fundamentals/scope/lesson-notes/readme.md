# Scope

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
