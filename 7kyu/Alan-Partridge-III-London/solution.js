function alan(x) {

  let stations = [ "Rejection", "Disappointment", "Backstabbing Central", "Shattered Dreams Parkway" ];

  // Check whether every required station is present in the given list.
  for (let i = 0; i < stations.length; i++) {
    if (!x.includes(stations[i])) {
      return "No, seriously, run. You will miss it.";
    }
  }

  return "Smell my cheese you mother!";
}

console.log( alan([ "Rejection", "Disappointment", "Backstabbing Central", "Shattered Dreams Parkway" ])
);