function mango(quantity, price) {

  // Subtract every third mango because it is free.
  let result = (quantity - Math.floor(quantity / 3)) * price;

  return result;
}

console.log(mango(30, 6));