# Control Flow

If it's raining outside, do you change what you wear? What about if it's really hot?

We all make decisions based on data. For example, if you're feeling really tired you might decide to not exercise in the morning. But, if you haven't exercised in awhile, you may decide that you'll just have to push through! These decisions can be mirrored with code. This makes code powerful in that it can mimic and even solve real-world problems without human intervention.

## Learning objectives

By the end of this lesson you should be able to:

- Conditionally run code with `if/else` statements.
- Describe how curly braces often signify a code block in JavaScript and why it is important.
- Conditionally run code with `switch` statements.
- Control the flow of programs to solve real-world problems.

---

## Conditional code

Take a look at the following pseudocode, which describes what you might do when you feel hungry.

```
If there is food
  And I'm very hungry
    Eat a meal.
  If I'm just a little hungry
    Eat a snack.
  If I'm not hungry at all.
    Do not eat anything.
Otherwise,
  Do not eat anything.
```

There are few potential outcomes for this algorithm:

1. You eat a meal.
1. You eat a snack.
1. You eat nothing at all.

Each of the above outcomes is dependent on two different conditions:

1. Whether or not there is food.
1. How hungry you are.

The first case is described as either being true or false. Either there is food or there is not. The second case is described as more of a range. There are three potential conditions: very hungry, a little hungry, or not hungry at all.

It's possible to mirror this kind of algorithm in code through the use of special syntax that will control the flow, and thereby the output, of programs.

## If and else

The most common syntax to use in JavaScript to manage the flow of this kind of algorithm is the `if/else` statement. In general, these statements are structure like the code below.

```js
if (/* An expression that is evaluated as true or false. */) {
  // Do something.
} else if (/* Another expression that is evaluated to true or false. */) {
  // Do something different.
} else {
  // Do something else.
}
```

The code above has three conditions:

1. The `if` keyword is followed by parenthesis, where an expression will be. If that expression is truthy, the code inside of the curly braces (i.e. `{}`) will be executed.
1. _If and only if_ the previous expression is falsy, the second expression after the `else if` keywords will be run. If that expression is truthy, the code inside of the curly braces will be executed.
1. _If and only if both of the previous expressions are falsy,_ will the code after `else` be run.

The example below includes code that will actually run.

```js
const temperatureInFahrenheit = 70;

if (temperatureInFahrenheit <= 32) {
  console.log("It's freezing cold!");
} else if (temperatureInFahrenheit <= 50) {
  console.log("It's pretty cold outside!");
} else if (temperatureInFahrenheit <= 65) {
  console.log("It might be a bit chilly out today.");
} else if (temperatureInFahrenheit <= 80) {
  console.log("Wow, it is really warm today!");
} else {
  console.log("It's so hot!");
}
```

In the code above, different statements will be logged depending on the temperature. When `temperatureInFahrenheit` is `70`, the statement `"Wow, it is really warm today!"` will be printed. As the `temperatureInFahrenheit` changes, so too will the output.

| Input | Output Statement                    |
| ----- | ----------------------------------- |
| 70    | Wow, it is really warm today!       |
| 55    | It might be a bit chilly out today. |
| 33    | It's pretty cold outside!           |
| -4    | It's freezing cold!                 |
| 86    | It's so hot!                        |

### Optional parts

The `if/else if/else` syntax is very flexible. While the `if` keyword is required, the other keywords are optional. For example, all of the code below is valid.

```js
const temperatureInFahrenheit = 70;

if (temperatureInFahrenheit > 68) {
  console.log("It's warm out today.");
} else {
  console.log("It's cold out today.");
}

if (temperatureInFahrenheit > 90) {
  console.log("Actually, it's really hot!");
}
```

The above code also allows for multiple conditions to be met. For example, in the case above, if `temperatureInFahrenheit` had a value of `91`, two messages would be logged out.

## Code blocks

The `if/else` keywords should be followed by curly braces. Inside of these curly braces is where you can write your code that you want to run _if and only if_ the condition inside of the parenthesis is met.

```js
const temperatureInFahrenheit = 29;
if (temperatureInFahrenheit < 32) {
  console.log("It's so cold out!");
}
```

The content inside of the parenthesis is often referred to as a code block. When you come across syntax that provides a code block, you can always write more code inside of it. This means you're not just limited to one line of code.

```js
const temperatureInFahrenheit = 29;
if (temperatureInFahrenheit < 32) {
  console.log("It is currently " + temperatureInFahrenheit + "°F outside.");
  console.log("It's so cold out!");
}
```

### Nested cases

It is also possible to place an `if/else` inside of another `if/else` statement by placing the code inside of the code block.

```js
const temperatureInFahrenheit = 29;
if (temperatureInFahrenheit < 68) {
  console.log("It's so cold out!");
  if (temperatureInFahrenheit < 32) {
    console.log("I mean, REALLY cold out!");
  }
} else {
  console.log("It's nice and warm out!");
  if (temperatureInFahrenheit > 78) {
    console.log("Well, maybe a bit too warm!");
  }
}
```

The code above will print one or two statements, depending on the temperature value.

## Switch

A `switch` statement is a more complex `if/else` statement that runs code depending on the given value. As opposed to taking an expression, it matches values and runs code based on whether or not the value matches.

```js
const temperatureDescription = "warm";

switch (temperatureDescription) {
  case "very hot":
    console.log("It is very hot today.");
    break;
  case "hot":
  case "warm":
    console.log("It is pretty warm today.");
    break;
  case "chilly":
  case "cold":
    console.log("It is pretty cold today.");
    break;
  case "very cold":
    console.log("It is very cold today.");
    break;
  default:
    console.log("Sorry, the description you entered is not valid.");
}
```

The `switch` keyword begins the statement. Whatever is placed inside of the parenthesis will be matched against each `case`. If it is equal, it will run the next available code underneath it. When the `break` keyword is reached, the entire statement ends.

Try running the code yourself or looking at the table below to see some examples of how this works.

| `temperatureDescription` value | Logged output                                        |
| ------------------------------ | ---------------------------------------------------- |
| `"warm"`                       | `"It is pretty warm today."`                         |
| `"hot"`                        | `"It is pretty warm today."`                         |
| `"cold"`                       | `"It is pretty cold today."`                         |
| `"very cold"`                  | `"It is very cold today."`                           |
| `"freezing"`                   | `"Sorry, the description you entered is not valid."` |

In general, `if/else` statements are preferred to `switch` statements as they are easier to modify and more generally useful. However, some situations may arise where a `switch` statement might make sense.

## Solving real problems

Think back to the problem presented at the beginning of this lesson, copied once again below.

```
If there is food
  And I'm very hungry
    Eat a meal.
  If I'm just a little hungry
    Eat a snack.
  If I'm not hungry at all.
    Do not eat anything.
Otherwise,
  Do not eat anything.
```

How can this pseudocode be translated into code?

While there are many ways to approach this problem, the following is a good series of questions to ask:

1. What are the potential inputs?
1. What are the potential outputs?
1. How, if at all, are the inputs related to the outputs?

Keeping the above in mind, each question has been answered below.

### What are the potential inputs?

In the pseudocode, the only inputs are whether or not there is food and whether or not the person is hungry. Therefore, you might consider creating two variables that capture this information.

```js
const hasFood = true; // Could also be `false`.
const isHungry = "very"; // Could also be `"a little"` or `"not at all"`.
```

Determining the inputs _and their possible values_ will help for the next step.

### What are the potential outputs?

There are only three potential outputs, as described previously.

1. You eat a meal.
1. You eat a snack.
1. You eat nothing at all.

In the pseudocode above, there is no description as to what programmatically "eating a snack" looks like. For this example, the correct statement could just be logged.

### How, if at all, are the inputs related to the outputs?

This just means following along with the logic of the pseudocode. Depending on the values of `hasFood` and `isHungry`, something different will be printed to the console. The table below shows the potential input and output combinations.

| `hasFood` | `isHungry`     | Output       |
| --------- | -------------- | ------------ |
| `false`   | `"not at all"` | Eat nothing. |
| `false`   | `"a little"`   | Eat nothing. |
| `false`   | `"very"`       | Eat nothing. |
| `true`    | `"not at all"` | Eat nothing. |
| `true`    | `"a little"`   | Eat a snack. |
| `true`    | `"very"`       | Eat a meal.  |

Looking at the table above, it's possible to deduce the following:

- If there is no food (i.e. `hasFood` is `false`), the value of `isHungry` does not matter. The result will always be to eat nothing.
- If there is food, what happens is wholly dependent on the value of `isHungry`.

### Solution

With the information above, you can begin to craft a coding solution for this challenge. Since the `hasFood` variable determines a lot of what can happen, it might make sense to start with that.

```js
if (hasFood) {
} else {
}
```

If `hasFood` is `false`, no food will be eaten.

```js
if (hasFood) {
} else {
  console.log("Eat nothing.");
}
```

Next, another `if/else` statement can be added within the first code block. This will be dependent on `isHungry`.

```js
if (hasFood) {
  if (isHungry === "very") {
    console.log("Eat a meal.");
  } else if (isHungry === "a little") {
    console.log("Eat a snack.");
  } else if (isHungry === "not at all") {
    console.log("Eat nothing.");
  }
} else {
  console.log("Eat nothing.");
}
```

At this point, upon running the code, you can see that the variables will now control the flow of the program.

> **Note:** The code above doesn't account for every case! For example, if `isHungry` was set to a value that is not accounted for, like `"somewhat"`, nothing would be logged out. Do you think this means the algorithm is working or not?
