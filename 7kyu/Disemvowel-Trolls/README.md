# Question: Disemvowel Trolls

## Difficulty

**7kyu**

---

## Description

Remove all vowels (`a`, `e`, `i`, `o`, `u`) from a given string.

Both uppercase and lowercase vowels should be removed.

> Note: `y` is **not** considered a vowel.

---

## Example

```javascript
disemvowel("This website is for losers LOL!");
// "Ths wbst s fr lsrs LL!"
```

---

## Approach

- Store all vowels in a string.
- Traverse each character of the input string.
- If the character is not a vowel, add it to the result.
- Return the final string.

---

## Time Complexity

**O(n)**

## Space Complexity

**O(n)**

---

## Language

JavaScript (ES6+)