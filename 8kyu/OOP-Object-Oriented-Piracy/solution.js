class Ship {
  constructor(draft, crew) {
    this.draft = draft;
    this.crew = crew;
  }

  isWorthIt() {
    // Remove the crew's weight and check if the remaining draft is above 20
    return this.draft - (this.crew * 1.5) > 20;
  }
}

const titanic = new Ship(15, 10);

console.log(titanic.isWorthIt());