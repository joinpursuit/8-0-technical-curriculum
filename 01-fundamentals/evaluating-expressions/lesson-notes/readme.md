# Evaluating Expressions

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

- Mentally evaluate the code below. What will be logged, if anything? Once you have your guess, you may check your answer by running the code.

  ```js
  const soda = { name: "Sprite", rating: 4 };
  console.log(soda.rating--);
  ```

- Mentally evaluate the code below. What will be logged, if anything? Once you have your guess, you may check your answer by running the code.

  ```js
  const soda = { name: "Sprite", rating: 4 };
  console.log((++soda.rating).toFixed());
  ```

- Mentally evaluate the code below. What will be logged, if anything? Once you have your guess, you may check your answer by running the code.

  ```js
  const soda = { name: "Sprite", rating: 4 };
  console.log((++soda.rating).toFixed());
  ```

- Mentally evaluate the code below. What will be logged, if anything? Once you have your guess, you may check your answer by running the code.

  ```js
  const sodas = [{ name: "Sprite", rating: 4 }];
  const pepsi = { name: "Pepsi", rating: 4 };
  console.log(sodas.push(pepsi));
  ```

- Mentally evaluate the code below. What will be logged, if anything? Once you have your guess, you may check your answer by running the code.

  ```js
  const sodas = [{ name: "Sprite", rating: 4 }];
  const pepsi = { name: "Pepsi", rating: 4 };
  sodas.push(pepsi);
  console.log(sodas.shift().name);
  ```

- Mentally evaluate the code below. What will be logged, if anything? Once you have your guess, you may check your answer by running the code.

  ```js
  const sodas = [{ name: "Sprite", rating: 4 }];
  const pepsi = { name: "Pepsi", rating: 4 };
  sodas.push(pepsi);
  console.log(sodas.pop().name[0]);
  ```

- Mentally evaluate the code below. What will be logged, if anything? Once you have your guess, you may check your answer by running the code.

  ```js
  const drink = { name: "Gatorade", colors: ["Red", "Orange", "Blue"] };
  console.log(drink.colors);
  ```

- Mentally evaluate the code below. What will be logged, if anything? Once you have your guess, you may check your answer by running the code.

  ```js
  const drink = { name: "Gatorade", colors: ["Red", "Orange", "Blue"] };
  console.log(drink.colors[1]);
  ```

- Mentally evaluate the code below. What will be logged, if anything? Once you have your guess, you may check your answer by running the code.

  ```js
  const drink = { name: "Gatorade", colors: ["Red", "Orange", "Blue"] };
  console.log(drink.colors.length);
  ```

- Mentally evaluate the code below. What will be logged, if anything? Once you have your guess, you may check your answer by running the code.

  ```js
  const drink = { name: "Gatorade", colors: ["Red", "Orange", "Blue"] };
  console.log(drink.colors[1].length);
  ```

- Mentally evaluate the code below. What will be logged, if anything? Once you have your guess, you may check your answer by running the code.

  ```js
  const drink = { name: "Gatorade", colors: ["Red", "Orange", "Blue"] };
  console.log(drink.colors.unshift("Yellow"));
  ```

- Mentally evaluate the code below. What will be logged, if anything? Once you have your guess, you may check your answer by running the code.

  ```js
  const key = "name";
  const drink = { name: "Gatorade", colors: ["Red", "Orange", "Blue"] };
  console.log(drink[key][0]);
  ```

- Mentally evaluate the code below. What will be logged, if anything? Once you have your guess, you may check your answer by running the code.

  ```js
  const key = "colors";
  const drink = { name: "Gatorade", colors: ["Red", "Orange", "Blue"] };
  console.log(drink[key][0]);
  ```
