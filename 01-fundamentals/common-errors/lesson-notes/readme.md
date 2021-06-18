# Common Errors

## Setup

Please complete the following before the lesson begins:

- Open and then fork this [repl](https://replit.com/@Pursuit/Warmup-Common-Errors).
- Complete the Warmup Questions & Tasks detailed at the top of the repl.

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

## Exercise

The function below has a number of different errors. Fix the code so that each character is added to the array, unless there are already four characters, in which case it first removes the character at index `0` from the array before adding the new character.

Once you've completed this exercise, check in with an instructor.

```js
const characters = [
  { id: 1, name: "Cloud Strife", level: 1 },
  { id: 2, name: "Aerith Gainsborough", level: 1 },
  { id: 3, name: "Tifa Lockhart", level: 1 },
  { id: 4, name: "Barret Wallace", level: 1 },
  { id: 5, name: "Cid Highwind", level: 1 },
  { id: 6, name: "Red XIII", level: 1 },
  { id: 7, name: "Cait Sith", level: 1 },
];

function addToParty(party, character) {
  if ((part.length = 4))
    character.shift();
  }
  party.push(character);
}

const partyComposition = [];
addToParty(partyComposition, characters[0]);
addToParty(partyComposition, characters[5]);
addToParty(partyComposition, characters[2]);
addToParty(partyComposition, characters[3]);
addToParty(partyComposition, characters[6]);
```
