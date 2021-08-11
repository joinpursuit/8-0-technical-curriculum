# Error Handling

## Learning Objectives

By the end of this lesson you should be able to:

- Throw errors with the throw keyword.
- Catch errors with a try/catch block.

---

## Guiding Questions

- What are some different error types you have seen in the past when writing code?

- Take a look at the following stacktrace. What information does this error contain?

  ```
  TypeError: console.lg is not a function
    at listCharacters (/home/runner/Warmup-Common-Error-Handling/index.js:15:13)
    at /home/runner/Warmup-Common-Error-Handling/index.js:20:1
    at Script.runInContext (vm.js:130:18)
  ```

- Why might you want to throw errors in your own program?

- Take a look at the code below. Then, update the code so that instead of potentially returning a string if there's a problem, it throws an error.

  ```js
  function markGuestAsAttending(guest) {
    if (!guest.name) {
      return "Guest must have a name in order to be marked as attending.";
    }

    guest.isAttending = true;
    return guest;
  }
  ```

- Update the code below so that instead of returning a string, it throws an error if the keys are missing.

  ```js
  function guestIsValid(guest) {
    if (!guest.name || !guest.email) {
      return "Guest is missing fields.";
    }

    return true;
  }
  ```

- Now, update the code above so that the error message is more specific depending on the input.

  For example, if the guest is missing an `email` it should say:

  ```
  The following fields are required: email
  ```

  Meanwhile, if both `name` and `email` are missing, it should print the following message:

  ```
  The following fields are required: email, name
  ```

- How can you handle errors that you expect to sometimes occur in your applications?

- How is a `try/catch` block similar to an `if/else` statement?

- The `catch` block includes access to a variable, `error`, when it is used. What is this variable used for?

- Take a look at the code below. Make a guess as to what you think will be logged and why. Then, run the code to check your answer.

  ```js
  function guestHasName(guest) {
    if (!guest.name) {
      throw `Guest ${guest.id} is missing a name!`;
    }
  }

  function checkInAllGuests(guests) {
    for (let guest of guests) {
      guest.checkedIn = true;
    }
  }

  const guests = [
    { id: 1, name: "Isaac Price", email: "iprice@gmail.com" },
    { id: 2, name: "Angelica Russo", email: "angie.russo@gmail.com" },
    { id: 3, email: "chloe.barker@gmail.com" },
  ];

  try {
    console.log("Checking in all guests...");
    for (let guest of guests) {
      guestHasName(guest);
    }

    checkInAllGuests(guests);
  } catch (error) {
    console.log("Guest check-in failed!");
    console.log(error);
  }
  ```
