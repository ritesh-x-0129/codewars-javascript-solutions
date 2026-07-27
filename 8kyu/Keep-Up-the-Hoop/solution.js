function hoopCount(n) {
    
  // Return a message based on the number of hoops.
  if (n >= 10) {
    return "Great, now move on to tricks";
  } else {
    return "Keep at it until you get it";
  }
}

console.log(hoopCount(10));