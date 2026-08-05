function bouncingBall(h, bounce, window) {

  // Validate the conditions required for a valid experiment
  if (h <= 0 || bounce <= 0 || h <= window || bounce >= 1) {
    return -1;
  }

  let count = 0;

  // Count every time the ball passes the window while falling or bouncing
  while (h > window) {
    count++;

    h *= bounce;

    if (h > window) {
      count++;
    }
  }

  return count;
}

console.log(bouncingBall(3, 0.66, 1.5));