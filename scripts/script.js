const FRONT = "card_front";
const BACK = "card_back";

let techs = [
  "bootstrap",
  "css",
  "electron",
  "firebase",
  "html",
  "javascript",
  "jquery",
  "mongo",
  "node",
  "react",
];

let cards = null;

startGame();

function startGame() {
  cards = createCardsFromTechs(techs);
  suffleCards(cards);
}

function suffleCards(cards) {}

createCardsFromTechs(techs);
function createCardsFromTechs(techs) {
  let cards = [];

  for (let tech of techs) {
    cards.push(createPairFromTechs(tech));
  }

  return cards.flatMap((pair) => pair);
}

function createPairFromTechs(tech) {
  return [
    {
      id: createIdWithTech(tech),
      icon: tech,
      flipped: false,
    },
    {
      id: createIdWithTech(tech),
      icon: tech,
      flipped: false,
    },
  ];
}

function createIdWithTech(tech) {
  return tech + parseInt(Math.random() * 1000);
}
