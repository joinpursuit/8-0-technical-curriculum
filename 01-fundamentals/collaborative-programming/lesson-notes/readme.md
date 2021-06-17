# Collaborative Programming

## Setup

Please complete the following before the lesson begins:

- Open and then fork this [repl](https://replit.com/@Pursuit/Warmup-Collaborative-Programming#index.js).
- Complete the Warmup Questions & Tasks detailed at the top of the repl.

## Learning Objectives

- Describe the two main roles in pair programming.
- Explain the importance of pair programming in engineering roles.
- Explain the importance of pair programming at Pursuit.

---

## Guiding Questions

- Watch the video linked below. Keep in mind the question below the video as you watch.

  [YouTube: How to Pair Program](https://www.youtube.com/watch?v=YhV4TaZaB84)

  - At the beginning of the video, the speaker talks about how he learned more in one day pair programming then he did in the past two years of working on his own. Why do you think that is?

- What are the two roles in pair programming? What is the purpose of each role?

- What are some of the benefits of pair programming? Think of as many as you can.

- What do you think will be challenging about working in this style?

- Why do you think Pursuit wants you to spend time pair programming?

## Exercise

With a partner, work through the following code challenge. Determine who will be the driver and the navigator to start. Switch every 10 minutes, without taking breaks.

Once you've completed the problem, check in with an instructor.

```js
/**
 * Rotates an array to the left or right, depending on the direction. If the value rotated outside of the bounds of the array is a falsy value, it is removed instead of added back. If the direction does not equal `"left"` or `"right"`, the value returned should be `null`.
 * @param {number[]} array - An array of numbers.
 * @param {string} direction - A string that should be either "left" or "right".
 * @returns {number[]} The original array, with all the numbers shifted to the left or to the right.
 */
function rotateAndRemoveZeroes(array, direction) {}

console.log(rotateAndRemoveZeroes([1, 2, 3], "right"));
//> [ 3, 1, 2 ]

console.log(rotateAndRemoveZeroes([1, 2, 3], "left"));
//> [ 2, 3, 1 ]

console.log(rotateAndRemoveZeroes([0, 1, 0], "left"));
//> [ 1, 0 ]

console.log(rotateAndRemoveZeroes([1, 0, 0], "right"));
//> [ 1, 0 ]

console.log(rotateAndRemoveZeroes([1, 2, 3], "sideways"));
//> null
```
