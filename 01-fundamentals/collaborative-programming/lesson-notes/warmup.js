/*
  Warmup Questions & Tasks
  ------------------------
  Answer the following questions and/or complete the tasks.

  - If you run the code below, the value logged is `undefined`. Why is that?
  - Complete the function below keeping in mind the following:
    - The input will only ever have two spaces. You can assume the order of any inputted car will start with the year, followed by the make (also called the brand), and finally include the model.
    - The output values should all be strings except for the year which should be a number.
  - Test out your function with the following values. Does it work as expected in each case?
    - "2020 Toyota Tacoma"
    - "2020 Subaru Forester"
*/

/**
 * Takes apart a string and turns it into an object.
 * @param {string} car - A string representation of a car that includes the year, make, and model.
 * @returns {Object} An object with the keys `year`, `make`, and `model` and related values.
 */
function createCarObjectFromString(car) {}

const result = createCarObjectFromString("2020 Ford Escape");
console.log(result);
//> { make: "Ford", model: "Escape", year: 2020 }
