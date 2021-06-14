# Understanding Code Challenges

## Setup

Please complete the following before the lesson begins:

- Open and then fork this [repl](https://replit.com/@Pursuit/Warmup-Understanding-Code-Challenges).
- Complete the Warmup Questions & Tasks detailed at the top of the repl.

## Learning Objectives

By the end of this lesson you should be able to:

- Describe the role of comments in software development.
- Interpret JSDoc function comments.
- Describe the role of tests in software development.
- Interpret test output in order to take actionable steps in code.

---

## Guiding Questions

- Based on what you know so far, what are some of the reasons you might comment code?

- What is JSDoc?

- Describe the following code block. Focus on the comments and what each part of the comment means. If you needed to write the function based on this syntax, what questions would you have?

  ```js
  /**
   * Returns the more common plant name from the species name, if possible.
   * @param {string} speciesName - Scientific name of a plant.
   * @returns {string} Common name of the plant.
   */
  function getCommonPlantName(speciesName) {}
  ```

- Is any part of the JSDoc syntax required?

- Based on the function below, write your own JSDoc descriptor to go above the function. Make sure to include a function description, any parameter descriptions, and what the function should return.

  ```js
  function describeNumberOfPlants(plantName, count) {
    let result = null;

    if (count < 1) {
      result = `There are no ${plantName}s.`;
    } else if (count === 1) {
      result = `There is one ${plantName}.`;
    } else {
      result = `There are ${count} ${plantName}s.`;
    }

    return result;
  }
  ```

- How would you test that the function above works as intended?

- Why might a software developer want to test their code?

- In this course, you'll see the Jest testing library being used. What is a library?

- Take a look at the following code which makes use of the Jest testing library. Then, answer the questions below the code block.

  ```js
  describe("describeNumberOfPlants()", () => {
    test("should say there are no plants (plural) if the count is less than 1", () => {
      const plantName = "Jade Plant";
      const count = 0;
      const actual = describeNumberOfPlants(plantName, count);
      const expected = "There are no Jade Plants.";
      expect(actual).toEqual(expected);
    });
  });
  ```

  For the code block above:

  - What case is being tested?

  - What does the `actual` variable represent?

  - What does the `expected` variable represent?

- Based on what you know about the function and the test, do you think this test case will pass?

- What other test cases can you imagine should be included in the tests?

## Exercise

Take a look at the following JSDoc comment and test. Based on the comment and test, write the function you believe would make the test pass.

Once you're done, check in with an instructor.

```js
/**
 * Increases the count of a plant and returns a description of the event.
 * @param {string} plantName - Name of the plant.
 * @param {number} currentCount - The current number of plants.
 * @param {number} additionalPlants - The added number of plants.
 * @returns {string} A description of the plant count.
 */
function increasePlantCount() {}
```

```js
describe("#increasePlantCount()", () => {
  test("should increase the count and return a string describing what happened", () => {
    const plantName = "Jade Plant";
    const currentCount = 2;
    const additionalPlants = 1;
    const actual = increasePlantCount(
      plantName,
      currentCount,
      additionalPlants
    );
    const expected = "Jade Plant count has increased from 2 to 3.";
    expect(actual).toEqual(expected);
  });
});
```
