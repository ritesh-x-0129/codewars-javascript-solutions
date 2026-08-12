function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {

  // Strict equality checks both value and data type of the coupon codes
  return (
    enteredCode === correctCode &&

    // Coupon is valid when the current date is on or before the expiration date
    new Date(currentDate) <= new Date(expirationDate)
  );
}

console.log(
  checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")
);