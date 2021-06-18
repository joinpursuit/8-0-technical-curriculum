/*
  Warmup Questions & Tasks
  ------------------------
  Answer the following questions and/or complete the tasks.

  - Write the `validPassword()` function below as described. Some sample inputs and expected outputs are already included.
*/

/**
 * Checks whether or not a password is valid according to the following rules:
 * 1. It must not be less than 8 characters and not more than 20 characters.
 * 2. It must include at least one of the following symbols: -.$*%
 * 3. It must not include the word "password" inside of it.
 *
 * If all of those conditions are met, return `true`. Otherwise, return `false`.
 * @param {string} password - A potential password.
 * @returns {boolean} Whether or not the password is valid.
 */
function validPassword(password) {}

console.log(validPassword("my.secret.code")); //> true
console.log(validPassword("e7N%Mni9")); //> true
console.log(validPassword("a-really-long-secret-code-that-will-fail")); //> false
console.log(validPassword("tiny-pw")); //> false
console.log(validPassword("nospecialsymbols")); //> false
console.log(validPassword("mypassword")); //> false
