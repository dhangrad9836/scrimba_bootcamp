const characters = [
  {
    title: "Ninja",
    emoji: "🥷",
    powers: ["agility", "stealth", "aggression"],
  },
  {
    title: "Sorcerer",
    emoji: "🧙",
    powers: ["magic", "invisibility", "necromancy"],
  },
  {
    title: "Ogre",
    emoji: "👹",
    powers: ["power", "stamina", "shapeshifting"],
  },
  {
    title: "Unicorn",
    emoji: "🦄",
    powers: ["flight", "power", "purity"],
  },
];

characters.forEach(function (character) {
  //console.log(character.powers);
  /*
Challenge:
1. Nest a forEach to log out each individual
   power in each characters powers array.
*/
  character.powers.forEach(function (power) {
    console.log(power);
  });
});

//we can add a second parameter of index to gain the index value

// characters.forEach(function (character, index) {
//   console.log(index);
// });

// for (let character of characters){
//     console.log(character)
// }
