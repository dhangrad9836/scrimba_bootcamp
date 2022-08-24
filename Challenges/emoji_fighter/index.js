let fighters = [
  "🐉",
  "🐥",
  "🐊",
  "💩",
  "🦍",
  "🐢",
  "🐩",
  "🦭",
  "🦀",
  "🐝",
  "🤖",
  "🐘",
  "🐸",
  "🕷",
  "🐆",
  "🦕",
  "🦁",
];

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");

//create random number generator
//let emoji1 = fighters[Math.floor(Math.random() * fighters.length)]
//let emoji2 = fighters[Math.floor(Math.random() * fighters.length)]
//let emoji1 = Math.floor(Math.random() * fighters.length)
//let emoji2 = Math.floor(Math.random() * fighters.length)
//console.log(emoji1)

fightButton.addEventListener("click", function () {
  // Challenge:
  // When the user clicks on the "Pick Fighters" button, pick two random
  // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
  let emoji1 = fighters[Math.floor(Math.random() * fighters.length)];
  let emoji2 = fighters[Math.floor(Math.random() * fighters.length)];
  stageEl.textContent = emoji1 + " vs " + emoji2;
  //stageEl.textContent = fighters[emoji1] + " vs " + fighters[emoji2];
});
