# Question: Replace With Alphabet Position

## Difficulty

**6kyu**

---

## Description

Replace every letter in a string with its corresponding position in the alphabet.

Ignore any character that is not a letter.

- a = 1
- b = 2
- ...
- z = 26

---

## Example

```javascript
alphabetPosition("The sunset sets at twelve o' clock.");
// "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
```

---

## Approach

- Convert the string to lowercase.
- Store alphabet positions in an object.
- Traverse each character.
- If the character exists in the object, append its position.
- Remove the trailing space before returning.

---

## Time Complexity

**O(n)**

## Space Complexity

**O(n)**

---

## Language

JavaScript (ES6+)