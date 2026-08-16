function countSmileys(arr) {

  // Filter only the strings that match the valid smiley pattern.
  return arr.filter(face => {

    // Regex pattern:
    // ^          → Start of the string
    // [:;]       → Eye must be : or ;
    // [-~]?      → Optional nose: - or ~
    // [)D]       → Mouth must be ) or D
    // $          → End of the string
    //
    // The ^ and $ ensure that the ENTIRE string is a valid smiley,
    // so additional characters are not allowed.
    return /^[:;][-~]?[)D]$/.test(face);
  }).length;
}

console.log(countSmileys([':)', ';(', ';}', ':-D']));