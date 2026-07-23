/*
We want to call `toJadenCase()` directly on a string, so we add
a custom method to the String prototype.
*/

Object.defineProperty(String.prototype, "toJadenCase", {
  value: function toJadenCase() {
    // Capitalize the first letter of every word.
    return this.split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
});

console.log("most trees are blue".toJadenCase());