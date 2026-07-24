function move(position, roll) {

  // Move the hero forward by twice the dice roll.
  return position + roll * 2;
}
console.log(move(3, 6));