function getDrinkByProfession(param) {

  // Convert the input to lowercase so the comparison is
  // case-insensitive, e.g. "pOLitiCIaN" becomes "politician".
  let lower = param.toLowerCase();

  // Match each profession with its corresponding drink.
  if (lower === "jabroni") {
    return "Patron Tequila";
  }
  else if (lower === "school counselor") {
    return "Anything with Alcohol";
  }
  else if (lower === "programmer") {
    return "Hipster Craft Beer";
  }
  else if (lower === "bike gang member") {
    return "Moonshine";
  }
  else if (lower === "politician") {
    return "Your tax dollars";
  }
  else if (lower === "rapper") {
    return "Cristal";
  }
  else {
    // Any profession not listed above gets the default drink.
    return "Beer";
  }
}

getDrinkByProfession("pOLitiCIaN");