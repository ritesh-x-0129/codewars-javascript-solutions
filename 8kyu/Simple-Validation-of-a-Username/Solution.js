function validateUsr(username) {

  // Check that the username contains only lowercase letters,
  // numbers, and underscores, and has a length between 4 and 16.
  return /^[a-z0-9_]{4,16}$/.test(username);
}

console.log(validateUsr("Mrs Pugh"));