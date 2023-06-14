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

// const movies = [
//   {
//     title: "Toy Story",
//   },
//   {
//     title: "Lion King",
//   },
//   {
//     title: "Adventure",
//   },
// ];

// console.log(movies[0].title);
// // Looping over array of objects
// for (let i = 0; i < movies.length; i++) {
//   console.log(movies[i]).title;
// }

//Combine obj, arrays, and func

// const foo = {
//   arr: [1, 2, 3],
//   obj: {
//     prop: "object property",
//   },
//   doSomething: () => {
//     console.log("I did something");
//   },
// };

// console.log(foo.arr[0]); //1
// console.log(foo.obj.prop); //'object property'
// foo.doSomething();

//An array of arrays

// const foo = [
//   [1, 2, 3],
//   ["4", "5", "6"],
//   [7, 8, 9],
//   () => {
//     console.log("I am a function inside an array");
//   },
// ];
// console.log(foo[0]);
// console.log(foo[0][1]);

// //Store functions in an array
// console.log(foo[3]());

class Character {
  constructor(name, age, eyes, hair, lovesCats = true, loveDogs) {
    this.legs = 2;
    this.arms = 2;
    this.name = name;
    this.age = age;
    this.eyes = eyes;
    this.hair = hair;
    this.lovesCats = lovesCats;
    this.lovesDogs = loveDogs || true;
  }

  setHairColor(hairColor) {
    this.hair = hairColor;
  }
  //method 1
  greet(otherCharacter) {
    console.log(`Hello ${otherCharacter}`);
  }
  //method 2
  smite() {
    console.log("I smite thee you vile person!");
  }
}

const alexander = new Character();
const brock = new Character();

// alexander.greet("Brock");
// brock.greet("Alexander");
// alexander.smite();

//bane, age, eyes, hair, cats, dogs
const ernest = new Character("ernest", "22", "brown", "black", false, true);
ernest.hairColor("green");
console.log(ernest);
