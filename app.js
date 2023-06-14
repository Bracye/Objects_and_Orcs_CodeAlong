//Array inside an obj

const adventurer = {
  name: "Ernest",
  hitPoint: 10,
  belongings: ["sword", "potions", "medicine"],
  companion: {
    name: "K.C.",
    type: "Dog",
  },
};

console.log(adventurer.companion.name);
// //Access values in the belongings array
// console.log(adventurer.belongings);

// //Access the first belonging
// console.log(` first belonging: ${adventurer.belongings[0]}`);

// //iterate over an array inside of an object

// for (let i = 0; i < adventurer.belongings.length; i++) {
//   console.log(adventurer.belongings[i]);
// }

// #1 Obj within Obj
