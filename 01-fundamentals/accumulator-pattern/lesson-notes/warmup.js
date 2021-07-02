/*
  Warmup Questions & Tasks
  ------------------------
  Answer the following questions and/or complete the tasks.

  - The function below will roll a die based on the number of sides given to it. For example, `rollDie(6)` will roll a number 1 - 6.

    Update the code below so that all of the situations that should fail, do. In each case, return the string "Invalid value." instead of a number.
*/

function rollDie(sides) {
  return Math.ceil(Math.random() * sides);
}

// Roll six-sided die
console.log(rollDie(6));

// Roll twenty-sided die
console.log(rollDie(20));

// All of these situations should fail with the message "Invalid value."
console.log(rollDie("ten"));
console.log(rollDie([]));
console.log(rollDie({ sides: 10 }));
console.log(rollDie(null));
console.log(rollDie(NaN));
