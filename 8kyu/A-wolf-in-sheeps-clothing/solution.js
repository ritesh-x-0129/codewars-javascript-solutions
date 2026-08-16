function warnTheSheep(queue) {

  let sheepNumber = 1;

  // Start from the front of the queue because you are
  // standing at the end of the array.
  for (let i = queue.length - 1; i >= 0; i--) {

    // Check each animal while moving backward through the queue.
    if (queue[i] === "wolf") {

      // If the wolf is directly in front of you,
      // there is no sheep to warn.
      if (sheepNumber === 1) {
        return "Pls go away and stop eating my sheep";
      }

      // The sheep immediately before the wolf is the one in danger.
      return `Oi! Sheep number ${sheepNumber - 1}! You are about to be eaten by a wolf!`;
    }

    // Count each sheep as we move closer to the wolf.
    sheepNumber++;
  }
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"] ))