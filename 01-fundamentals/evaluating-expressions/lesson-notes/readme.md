# Evaluating Expressions

## Setup

Please complete the following before the lesson begins:

- Open and then fork this [repl](https://replit.com/@Pursuit/Warmup-Evaluating-Expressions#index.js).
- Complete the Warmup Questions & Tasks detailed at the top of the repl.

## Learning Objectives

By the end of this lesson you should be able to:

- Describe what it means for an expression to return a value.
- Identify the evaluated values of common methods.
- Access deeply nested values within arrays and objects.

---

## Guiding Questions

- What is the difference between expressions and statements? For example, what is the difference between an `if` statement and a ternary expression?

- In your own words, describe why both the variable `rating` and the `rating` key inside of the `soda` object will be equal to `4` in the code below.

  ```js
  const soda = { name: "Sprite" };
  let rating = (soda.rating = 4);
  ```

- Mentally evaluate the code below. What will be logged? Once you have your guess, you may check your answer by running the code.

  ```js
  const soda = { name: "Sprite", rating: 4 };
  console.log(soda.rating--);
  ```

- Mentally evaluate the code below. What will be logged? Once you have your guess, you may check your answer by running the code.

  ```js
  const soda = { name: "Sprite", rating: 4 };
  console.log((++soda.rating).toFixed());
  ```

- Mentally evaluate the code below. What will be logged? Once you have your guess, you may check your answer by running the code.

  ```js
  const soda = { name: "Sprite", rating: 4 };
  console.log((++soda.rating).toFixed());
  ```

- Mentally evaluate the code below. What will be logged? Once you have your guess, you may check your answer by running the code.

  ```js
  const sodas = [{ name: "Sprite", rating: 4 }];
  const pepsi = { name: "Pepsi", rating: 4 };
  console.log(sodas.push(pepsi));
  ```

- Mentally evaluate the code below. What will be logged? Once you have your guess, you may check your answer by running the code.

  ```js
  const sodas = [{ name: "Sprite", rating: 4 }];
  const pepsi = { name: "Pepsi", rating: 4 };
  sodas.push(pepsi);
  console.log(sodas.shift().name);
  ```

- Mentally evaluate the code below. What will be logged? Once you have your guess, you may check your answer by running the code.

  ```js
  const sodas = [{ name: "Sprite", rating: 4 }];
  const pepsi = { name: "Pepsi", rating: 4 };
  sodas.push(pepsi);
  console.log(sodas.pop().name[0]);
  ```

- Mentally evaluate the code below. What will be logged? Once you have your guess, you may check your answer by running the code.

  ```js
  const drink = { name: "Gatorade", colors: ["Red", "Orange", "Blue"] };
  console.log(drink.colors);
  ```

- Mentally evaluate the code below. What will be logged? Once you have your guess, you may check your answer by running the code.

  ```js
  const drink = { name: "Gatorade", colors: ["Red", "Orange", "Blue"] };
  console.log(drink.colors[1]);
  ```

- Mentally evaluate the code below. What will be logged? Once you have your guess, you may check your answer by running the code.

  ```js
  const drink = { name: "Gatorade", colors: ["Red", "Orange", "Blue"] };
  console.log(drink.colors.length);
  ```

- Mentally evaluate the code below. What will be logged? Once you have your guess, you may check your answer by running the code.

  ```js
  const drink = { name: "Gatorade", colors: ["Red", "Orange", "Blue"] };
  console.log(drink.colors[1].length);
  ```

- Mentally evaluate the code below. What will be logged? Once you have your guess, you may check your answer by running the code.

  ```js
  const drink = { name: "Gatorade", colors: ["Red", "Orange", "Blue"] };
  console.log(drink.colors.unshift("Yellow"));
  ```

## Exercise

Copy the code below into your repl. Then, access the values requested as described.

Once you're done, check in with an instructor.

```js
const drinks = [
  {
    brand: "Pepsi",
    flavors: [
      { name: "Pepsi", rating: 4 },
      { name: "Diet Pepsi", rating: 5 },
    ],
  },
  {
    brand: "Coca-Cola",
    flavors: [
      { name: "Coca-Cola (Classic)", rating: 5 },
      { name: "Diet Coke", rating: 3 },
      { name: "Coca-Cola Zero Sugar", rating: 3 },
    ],
  },
  {
    brand: "Mountain Dew",
    flavors: [
      { name: "Major Melon", rating: 2 },
      { name: "Code Red", rating: 4 },
      { name: "Voltage", rating: 3 },
    ],
  },
];

// 1. Replace `null` below with code to access the value "Major Melon".
const majorMelon = null;
console.log(majorMelon);

// 2. Replace `null` below with code to access all of the flavors of the Pepsi brand.
const pepsiFlavors = null;
console.log(pepsiFlavors);

// 3. Replace `null` below with code that will remove "Voltage" from the list of Mountain Dew flavors.
const voltage = null;
console.log(voltage);

// 4. Replace `null` below with code that will create the string "Diet Coke: 3". You will need to access the above array multiple times.
const dietCokeWithRating = null;
console.log(dietCokeWithRating);

// 5. Replace `null` below with code that will return the average rating for all Mountain Dew flavors. You will need to access the above array multiple times.
const mountainDewAverageRating = null;
console.log(mountainDewAverageRating);
```
