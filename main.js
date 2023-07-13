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

// ternary: (something > nothing ? "do something" : "do nothing")
// const cook = (firstIngredient, secondIngredient) => {
//   if (
//     firstIngredient === "Hylian Rice" &&
//     secondIngredient === "Big Hearty Truffle"
//   ) {
//     meals.push("Mushroom Rice Balls");
//   } else if (
//     firstIngredient === "Hateno Cheese" &&
//     secondIngredient === "Bird Egg"
//   ) {
//     meals.push("Cheesy Omelette");
//   } else if (
//     firstIngredient === "Tabantha Wheat" &&
//     secondIngredient === "Hateno Cheese"
//   ) {
//     meals.push("Cheesy Hylian Pizza");
//   } else if (
//     firstIngredient === "Raw Prime Meat" &&
//     secondIngredient === "Hylian Rice"
//   ) {
//     meals.push("Prime Meat and Rice Bowl");
//   }
//   // else {
//   //   meals.push("Unknown recipe");
//   // }
// };

// HACK: Need to look at how to implement switch case.
// const cook = (firstIngredient, secondIngredient) => {
//   switch ((firstIngredient, secondIngredient)) {
//     case firstIngredient === "Hylian Rice" &&
//       secondIngredient === "Big Hearty Truffle":
//       meals.push("Mushroom Rice Balls");
//       break;
//     case firstIngredient === "Hateno Cheese" && secondIngredient === "Bird Egg":
//       meals.push("Cheesy Omelette");
//       break;
//   }
  // if (
  //   firstIngredient === "Hylian Rice" &&
  //   secondIngredient === "Big Hearty Truffle"
  // ) {
  //   meals.push("Mushroom Rice Balls");
  // } else if (
  //   firstIngredient === "Hateno Cheese" &&
  //   secondIngredient === "Bird Egg"
  // ) {
  //   meals.push("Cheesy Omelette");
  // } else if (
  //   firstIngredient === "Tabantha Wheat" &&
  //   secondIngredient === "Hateno Cheese"
  // ) {
  //   meals.push("Cheesy Hylian Pizza");
  // } else if (
  //   firstIngredient === "Raw Prime Meat" &&
  //   secondIngredient === "Hylian Rice"
  // ) {
  //   meals.push("Prime Meat and Rice Bowl");
  // }
  // else {
  //   meals.push("Unknown recipe");
  // }
};

for (let i = 0; i < materials.length; i++) {
  for (let j = 0; j < materials.length; j++) {
    cook(materials[i], materials[j]);
  }
}

console.log("MEALS:");
console.log("---------------");
for (const meal of meals) {
  console.log(meal);
}
