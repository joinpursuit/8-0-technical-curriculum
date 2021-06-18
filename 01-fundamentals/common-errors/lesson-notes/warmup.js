/*
  Warmup Questions & Tasks
  ------------------------
  Answer the following questions and/or complete the tasks.

  - Update the code below so that the `for` loop decrements instead of increments. (i.e. It prints "Cloud!" first.)
  - Then, update the code below so that the last character is excluded from being printed.
  - Finally, print the "last" character separately from the others with the word "and" beforehand. The final output should be: "Cloud! Kirby! Captain Falcon! And Villager!"
*/

function listCharacters(characters) {
  console.log("Choose your character:");
  for (let index = 0; index < characters.length; index++) {
    const character = characters[index];
    console.log(`${character}!`);
  }
}

const characters = ["Villager", "Captain Falcon", "Kirby", "Cloud"];
listCharacters(characters);
