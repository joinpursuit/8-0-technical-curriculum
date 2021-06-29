/*
  Warmup Questions & Tasks
  ------------------------
  Answer the following questions and/or complete the tasks.

  - The code below will not run correctly. Fix the error that's occurring with as few changes as possible.
  - Currently, the function `printShortBio()` is not causing the intended effect. Update the code so that the short bio is printed to the console.
*/

const programmerName = "Katherine G. Johnson";
const bornYear = 1918;
const diedYear = 2020;
const mostRecentAward = "NASA Group Achievement Award";
mostRecentAward = "Congressional Gold Medal";

function printShortBio(programmer, born, died, award) {
  console.log(
    `${programmer}, winner of the ${award}, was born in the year ${born} and died in the year ${died}.`
  );
}

printShortBio;
