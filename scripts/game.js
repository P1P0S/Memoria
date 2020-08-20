let game = {
  techs: [
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
  ],

  cards: null,

  createCardsFromTechs: function () {
    this.cards = [];

    this.techs.forEach((tech) => {
      this.cards.push(this.createPairFromTechs(tech));
    });

    this.cards = this.cards.flatMap((pair) => pair);
    this.suffleCards();
    return this.cards;
  },

  createPairFromTechs: function (tech) {
    return [
      {
        id: this.createIdWithTech(tech),
        icon: tech,
        flipped: false,
      },
      {
        id: this.createIdWithTech(tech),
        icon: tech,
        flipped: false,
      },
    ];
  },

  createIdWithTech: function (tech) {
    return tech + parseInt(Math.random() * 1000);
  },
  suffleCards: function (cards) {
    let currentIndex = this.cards.length;
    let randomIndex = 0;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [this.cards[randomIndex], this.cards[currentIndex]] = [
        this.cards[currentIndex],
        this.cards[randomIndex],
      ];
    }
  },
};
