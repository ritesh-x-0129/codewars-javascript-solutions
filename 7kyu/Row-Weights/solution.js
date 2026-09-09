function rowWeights(array) {
  let result = [];
  let team1 = 0;
  let team2 = 0;

  // Even indexes go to team 1, odd indexes go to team 2
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      team1 += array[i];
    } else {
      team2 += array[i];
    }
  }

  result.push(team1);
  result.push(team2);

  return result;
}

console.log(rowWeights([13, 27, 49, 10, 20]));