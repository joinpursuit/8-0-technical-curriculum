# Promises

## Learning objectives

By the end of this lesson you should be able to:

- Identify the purpose of promises.
- Distinguish between the three states of promises.

---

## Setup

Begin by forking the following Repl.it.

- [Repl.it: Queue](https://replit.com/@Pursuit/Promises-Queue)

You do not need to look through the `helpers/` directory, but you should read the comment at the top of the `index.js` file.

## Guiding questions

- What does it mean for code to be run asynchronously?

- Why is it beneficial for some code to be asynchronous?

- What will be logged and in what order from the following code? Why?

  ```js
  setTimeout(() => {
    console.log("First");
  }, 1000);

  console.log("Second");

  setTimeout(() => {
    console.log("Third");
  }, 500);
  ```

- Promises were made to help handle asynchronous code. Why are they are called promises?

- Go to the repl you forked at the beginning of this lesson. The `getPersonInQueue()` function will return a promise. Try calling the function.

  After the function is invoked, what is the current _state_ of the promise?

- What are the three possible states of a promise?

- What methods can be used to access the value stored inside of a promise?

- Pass the argument `11` into the `getPersonInQueue()` function to get the 11th person in the queue. Then, add to the code so that you can log out the name of that person. The end result should be:

  ```
  Carolyn Manning
  ```

- Change the argument so that it is now `99`. What happens? Why?

- Add code so that you can see the result when the argument passed in is `99`.

- Can you access either the returned name or the error outside of `.then()` or `.catch()`? Why or why not?

- Update your code so that you are able to print out the names of the first three people in line. The end result should look something like the following:

  ```
  Lawson Hardy, Stephanie Zimmerman, and Lewis Griffith
  ```

  Doing this could be difficult! Keep in mind the following:

  - You only have access to each person's name within the callback function provided to `.then()` or `.catch()`.
  - You can write whatever code you want inside of that callback. You could even have another promise chain!
