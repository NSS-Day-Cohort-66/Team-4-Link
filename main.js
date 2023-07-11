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

// TODO: Need to finish algorithmic thinking for part 1.
/* 
  We need to be able to make different recipes depending on what ingredients
  we are given. 

  write more "if" statements - conditionally check ingredients vs expected ingredients 
  and give back a specific recipe

  ...
*/
const cook = (firstIngredient, secondIngredient) => {
  if (
    firstIngredient === "Hylian Rice" &&
    secondIngredient === "Big Hearty Truffle"
  ) {
    meals.push("Mushroom Rice Balls");
  }
};

cook(materials[0], materials[1]);

console.log("MEALS:");
console.log("---------------");
for (const meal of meals) {
  console.log(meal);
}
