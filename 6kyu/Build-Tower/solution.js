function towerBuilder(nFloors) {
  const tower = [];

  // Build each floor from top to bottom.
  for (let i = 1; i <= nFloors; i++) {

    // Each floor contains an odd number of stars:
    // 1, 3, 5, 7, ...
    const stars = "*".repeat(2 * i - 1);

    // The number of spaces decreases as we move down the tower.
    const spaces = " ".repeat(nFloors - i);

    // Add equal spaces on both sides to keep the floor centered.
    tower.push(spaces + stars + spaces);
  }

  return tower;
}