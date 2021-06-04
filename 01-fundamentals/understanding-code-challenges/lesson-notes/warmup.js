/*
  Warmup Questions & Tasks
  ------------------------
  Answer the following questions and/or complete the tasks.

  - What value will be returned from the function below if the argument passed in is `"crassula ovata"`? Why?
  - What value will be returned from the function below if the argument passed in is `"juniperus procumbens"`? Why?
  - The code below does not include any `else` statements. Could this cause a problem? Why or why not?
  - How do you call this function? Do so at the bottom of the page.
  - How would you print the result of the function to the console? Do so at the bottom of the page.
*/

function getCommonPlantName(speciesName) {
  let commonName = null;

  if (speciesName === "crassula ovata") {
    commonName = "Jade Plant";
  }

  if (speciesName === "passiflora caerula") {
    commonName = "Passion Flower";
  }

  if (speciesName === "platycerium bifurcatum") {
    commonName = "Staghorn Fern";
  }

  return commonName;
}
