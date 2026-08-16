function combat(health, damage) {

  // Subtract the received damage from the player's health.
  // Math.max() ensures that health never goes below 0.
  let newHealth = Math.max(0, health - damage);

  return newHealth;
}

console.log(combat(120, 45));