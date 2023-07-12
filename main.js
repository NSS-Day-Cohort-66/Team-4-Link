const materials = [
  "Hylian Rice",
  "Big Hearty Truffle",
  "Tabantha Wheat",
  "Raw Prime Meat",
  "Hateno Cheese",
  "Bird Egg",
];

// Could we fill out the meals array with known meals and pull them later?
const meals = [];

// TODO: explore the below comment as well as nested for loop to create recipes, then move on to part 2?

/* 
  possibility of using switch/case or ternaries for practice instead of if statements
  3 levels of cook functions: beginnerCook for 2 ingredients, intermediateCook for 3 ingredients, and advancedCook for 4 ingredients
*/
const cook = (firstIngredient, secondIngredient) => {
  if (
    firstIngredient === "Hylian Rice" &&
    secondIngredient === "Big Hearty Truffle"
  ) {
    meals.push("Mushroom Rice Balls");
  } else if (
    firstIngredient === "Hateno Cheese" &&
    secondIngredient === "Bird Egg"
  ) {
    meals.push("Cheesy Omelette");
  } else if (
    firstIngredient === "Tabantha Wheat" &&
    secondIngredient === "Hateno Cheese"
  ) {
    meals.push("Cheesy Hylian Pizza");
  } else if (
    firstIngredient === "Raw Prime Meat" &&
    secondIngredient === "Hylian Rice"
  ) {
    meals.push("Prime Meat and Rice Bowl");
  }
};

// HACK: We could possibly iterate over each item in the array with a loop.
cook(materials[2], materials[4]);
cook(materials[0], materials[1]);
cook(materials[3], materials[0]);

console.log("MEALS:");
console.log("---------------");
for (const meal of meals) {
  console.log(meal);
}
