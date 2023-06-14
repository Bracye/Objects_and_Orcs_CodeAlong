// //Array inside an obj

// const adventurer = {
//   name: "Ernest",
//   hitPoint: 10,
//   belongings: ["sword", "potions", "medicine"],
//   companion: {
//     name: "K.C.",
//     type: "Dog",
//     belongings: ["toy ball", "healing potions", "cash", "treats"],
//   },
// };

// console.log(`My companion's name is ${adventurer.companion.name}`);
// console.log(
//   `One of my companion's belongings is ${adventurer.companion.belongings[2]}`);
// //Access values in the belongings array
// console.log(adventurer.belongings);

// //Access the first belonging
// console.log(` first belonging: ${adventurer.belongings[0]}`);

// //iterate over an array inside of an object

// for (let i = 0; i < adventurer.belongings.length; i++) {
//   console.log(adventurer.belongings[i]);
// }

// #1 Obj within Obj

const movies = [
  {
    title: "Toy Story",
  },
  {
    title: "Lion King",
  },
  {
    title: "Adventure",
  },
];

console.log(movies[0].title);
// Looping over array of objects
for (let i = 0; i < movies.length; i++) {
  console.log(movies[i]).title;
}
