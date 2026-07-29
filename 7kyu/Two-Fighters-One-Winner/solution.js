function declareWinner(fighter1, fighter2, firstAttacker) {
  if (firstAttacker === fighter1.name) {
    while (true) {
      // Fighter 1 attacks Fighter 2.
      fighter2.health -= fighter1.damagePerAttack;
      if (fighter2.health <= 0) {
        return fighter1.name;
      }

      // Fighter 2 attacks Fighter 1.
      fighter1.health -= fighter2.damagePerAttack;
      if (fighter1.health <= 0) {
        return fighter2.name;
      }
    }
  } else {
    while (true) {
      // Fighter 2 attacks Fighter 1.
      fighter1.health -= fighter2.damagePerAttack;
      if (fighter1.health <= 0) {
        return fighter2.name;
      }

      // Fighter 1 attacks Fighter 2.
      fighter2.health -= fighter1.damagePerAttack;
      if (fighter2.health <= 0) {
        return fighter1.name;
      }
    }
  }
}