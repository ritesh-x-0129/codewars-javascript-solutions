var humanYearsCatYearsDogYears = function(humanYears) {
  
  let catYears = 0;
  let dogYears = 0;
  
  if(humanYears == 1) {
    catYears += 15
    dogYears += 15
  }
  else if(humanYears == 2) {
    catYears = 15 + 9
    dogYears = 15 + 9
  }
  else{
   let extraYears = humanYears - 2;
   catYears = 24 + extraYears * 4;
   dogYears = 24 + extraYears * 5; 
  }
  
  
  return [humanYears, catYears, dogYears];
}

